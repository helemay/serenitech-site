#!/usr/bin/env bash
# Serenitech website — contact form backend (AWS account 854143110770, region eu-west-3).
# Idempotent: creates/updates the IAM role, the Lambda function and its Function URL.
# Requires AWS credentials in the environment (see runbook) and `zip`.
set -euo pipefail
REGION="${REGION:-eu-west-3}"
FN="${FN:-serenitech-contact-form}"
ROLE="${ROLE:-serenitech-contact-form-role}"
ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"
RECIPIENTS="${RECIPIENTS:-rodrigofuchter@gmail.com,hm@mayflowercapital.uk,rodrigofuchter@me.com}"
SENDER="${SENDER:-Serenitech Website <contact@serenitech.global>}"
ORIGINS="${ORIGINS:-https://serenitech.global,https://www.serenitech.global,https://serenitech.lovable.app}"
HERE="$(cd "$(dirname "$0")" && pwd)"

# 1) IAM role
if ! aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  aws iam create-role --role-name "$ROLE" --assume-role-policy-document '{
    "Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}' >/dev/null
  echo "role created"
fi
aws iam put-role-policy --role-name "$ROLE" --policy-name ses-send-and-logs --policy-document "{
  \"Version\":\"2012-10-17\",\"Statement\":[
    {\"Effect\":\"Allow\",\"Action\":[\"ses:SendEmail\",\"ses:SendRawEmail\"],\"Resource\":\"arn:aws:ses:${REGION}:${ACCOUNT}:identity/serenitech.global\"},
    {\"Effect\":\"Allow\",\"Action\":[\"logs:CreateLogGroup\",\"logs:CreateLogStream\",\"logs:PutLogEvents\"],\"Resource\":\"arn:aws:logs:${REGION}:${ACCOUNT}:*\"}]}"
ROLE_ARN="arn:aws:iam::${ACCOUNT}:role/${ROLE}"

# 2) Package
cd "$HERE" && rm -f function.zip && zip -q function.zip lambda_function.py

# 3) Lambda
ENV="$(python3 -c 'import json,os,sys; print(json.dumps({"Variables":{"RECIPIENTS":sys.argv[1],"SENDER":sys.argv[2],"ALLOWED_ORIGINS":sys.argv[3],"SUBJECT_PREFIX":"[serenitech.global]"}}))' "$RECIPIENTS" "$SENDER" "$ORIGINS")"
if aws lambda get-function --function-name "$FN" --region "$REGION" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FN" --region "$REGION" --zip-file fileb://function.zip >/dev/null
  aws lambda wait function-updated --function-name "$FN" --region "$REGION"
  aws lambda update-function-configuration --function-name "$FN" --region "$REGION" --environment "$ENV" --timeout 15 --memory-size 256 >/dev/null
  echo "function updated"
else
  sleep 8  # IAM propagation
  aws lambda create-function --function-name "$FN" --region "$REGION" --runtime python3.12 --handler lambda_function.lambda_handler \
    --role "$ROLE_ARN" --zip-file fileb://function.zip --timeout 15 --memory-size 256 --environment "$ENV" \
    --description "serenitech.global contact form -> SES" >/dev/null
  echo "function created"
fi
aws lambda wait function-active --function-name "$FN" --region "$REGION"

# 4) Function URL (public, CORS restricted to the site origins)
CORS="{\"AllowOrigins\":[$(echo "$ORIGINS" | sed 's/[^,][^,]*/"&"/g')],\"AllowMethods\":[\"POST\"],\"AllowHeaders\":[\"content-type\"],\"MaxAge\":3600}"
if ! aws lambda get-function-url-config --function-name "$FN" --region "$REGION" >/dev/null 2>&1; then
  aws lambda create-function-url-config --function-name "$FN" --region "$REGION" --auth-type NONE --cors "$CORS" >/dev/null
  aws lambda add-permission --function-name "$FN" --region "$REGION" --statement-id public-url --action lambda:InvokeFunctionUrl \
    --principal '*' --function-url-auth-type NONE >/dev/null
else
  aws lambda update-function-url-config --function-name "$FN" --region "$REGION" --auth-type NONE --cors "$CORS" >/dev/null
fi
aws lambda get-function-url-config --function-name "$FN" --region "$REGION" --query FunctionUrl --output text
