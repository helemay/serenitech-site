"""Serenitech website — contact form backend.

AWS Lambda (Python 3.12) behind a Lambda Function URL (auth NONE, CORS restricted to the
site origins). Receives the JSON payload of the "Request a technical briefing" form and
e-mails it through Amazon SES (eu-west-3) to the recipients configured in RECIPIENTS,
with Reply-To set to the visitor's address.

Environment variables
  RECIPIENTS       comma-separated list of destination addresses
  SENDER           From header, e.g. "Serenitech Website <contact@serenitech.global>"
  ALLOWED_ORIGINS  comma-separated list of allowed Origin values (also enforced by the URL CORS config)
  SUBJECT_PREFIX   optional, default "[serenitech.global]"
"""
import json
import os
import re
import time

import boto3

ses = boto3.client("sesv2")

RECIPIENTS = [a.strip() for a in os.environ.get("RECIPIENTS", "").split(",") if a.strip()]
SENDER = os.environ.get("SENDER", "Serenitech Website <contact@serenitech.global>")
ALLOWED_ORIGINS = {o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "").split(",") if o.strip()}
SUBJECT_PREFIX = os.environ.get("SUBJECT_PREFIX", "[serenitech.global]")

FIELDS = ["name", "organisation", "role", "country", "sector", "message"]
LIMITS = {"name": 120, "organisation": 160, "role": 120, "country": 80, "sector": 80, "email": 200, "message": 5000}
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def _resp(status, body, origin=None):
    headers = {"Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store"}
    if origin:
        headers["Access-Control-Allow-Origin"] = origin
        headers["Vary"] = "Origin"
    return {"statusCode": status, "headers": headers, "body": json.dumps(body, ensure_ascii=False)}


def _clean(value, limit):
    if value is None:
        return ""
    value = str(value).replace("\r", "").strip()
    return value[:limit]


def lambda_handler(event, context):
    headers = {k.lower(): v for k, v in (event.get("headers") or {}).items()}
    origin = headers.get("origin", "")
    method = (event.get("requestContext", {}).get("http", {}) or {}).get("method", "POST")
    if method == "OPTIONS":
        return _resp(204, {}, origin if origin in ALLOWED_ORIGINS else None)
    if ALLOWED_ORIGINS and origin not in ALLOWED_ORIGINS:
        return _resp(403, {"ok": False, "error": "origin_not_allowed"})

    try:
        raw = event.get("body") or "{}"
        if event.get("isBase64Encoded"):
            import base64
            raw = base64.b64decode(raw).decode("utf-8", "replace")
        data = json.loads(raw)
    except Exception:
        return _resp(400, {"ok": False, "error": "invalid_json"}, origin)

    # honeypot + minimum fill time (bots): the form sends `website` (must stay empty) and `t0` (ms epoch when opened)
    if _clean(data.get("website"), 200):
        return _resp(200, {"ok": True}, origin)  # silently accept
    try:
        t0 = float(data.get("t0") or 0)
        if t0 and (time.time() * 1000 - t0) < 2500:
            return _resp(200, {"ok": True}, origin)
    except (TypeError, ValueError):
        pass

    fields = {k: _clean(data.get(k), LIMITS[k]) for k in FIELDS}
    email = _clean(data.get("email"), LIMITS["email"])
    lang = _clean(data.get("lang"), 5) or "en"
    page = _clean(data.get("page"), 300)
    if not fields["name"] or not fields["message"] or not EMAIL_RE.match(email):
        return _resp(422, {"ok": False, "error": "missing_fields"}, origin)

    subject = f"{SUBJECT_PREFIX} Technical briefing request — {fields['name']}"
    if fields["organisation"]:
        subject += f" ({fields['organisation']})"
    lines = [
        "New request from the Serenitech website contact form",
        "",
        f"Name:          {fields['name']}",
        f"E-mail:        {email}",
        f"Organisation:  {fields['organisation']}",
        f"Role:          {fields['role']}",
        f"Country:       {fields['country']}",
        f"Sector:        {fields['sector']}",
        f"Language:      {lang}",
        f"Page:          {page}",
        f"Received (UTC): {time.strftime('%Y-%m-%d %H:%M:%S', time.gmtime())}",
        "",
        "Message:",
        fields["message"],
        "",
        "— Reply to this e-mail to answer the visitor directly (Reply-To is set).",
    ]
    body_text = "\n".join(lines)

    ses.send_email(
        FromEmailAddress=SENDER,
        Destination={"ToAddresses": RECIPIENTS},
        ReplyToAddresses=[email],
        Content={"Simple": {"Subject": {"Data": subject, "Charset": "UTF-8"},
                            "Body": {"Text": {"Data": body_text, "Charset": "UTF-8"}}}},
    )
    return _resp(200, {"ok": True}, origin)
