# Contact form backend (serenitech.global)

The static site (GitHub Pages) posts the "Request a technical briefing" form as JSON to an
API Gateway HTTP API that invokes an AWS Lambda function; the function e-mails the request
through Amazon SES and returns `{"ok": true}`.

| Item | Value |
|---|---|
| AWS account / region | 854143110770 · eu-west-3 (Paris) |
| Lambda | `serenitech-contact-form` (Python 3.12, 256 MB, 15 s) — `lambda_function.py` |
| IAM role | `serenitech-contact-form-role` — inline policy `ses-send-and-logs` (ses:SendEmail on the `serenitech.global` identity + CloudWatch Logs); Lambda resource policy `apigw-serenitech-contact` allows apigateway.amazonaws.com (source ARN of the API) |
| Endpoint | API Gateway HTTP API `serenitech-contact` (id `9pch0bp0m7`) — `https://9pch0bp0m7.execute-api.eu-west-3.amazonaws.com/` — routes `POST /` and `OPTIONS /`, CORS: https://serenitech.global, https://www.serenitech.global, https://serenitech.lovable.app. (A Lambda Function URL with auth NONE was tried first and returned 403 AccessDenied in this account — public Function URLs are blocked — so it was deleted.) |
| SES identity | domain `serenitech.global` (Easy DKIM 2048, 3 CNAMEs `<token>._domainkey` in the Route 53 zone Z05574803PLG03ABWQBPG); From `Serenitech Website <contact@serenitech.global>` |
| Recipients (env `RECIPIENTS`) | rodrigofuchter@gmail.com, hm@mayflowercapital.uk, rodrigofuchter@me.com |
| Site side | `brand.contactEndpoint` in `src/content/site.ts`; form in `src/routes/contact.tsx` (fields name, email, organisation, role, country, sector, message + honeypot `website` + `t0`) |

Anti-spam: honeypot field must be empty; submissions faster than 2.5 s after the page loads
are silently accepted and dropped; field length limits; Origin allow-list in the function (also
enforced by the API Gateway CORS config). Reply-To is set to the visitor's address, so replying from
any of the three inboxes answers the visitor directly.

Deploy / update (needs AWS credentials for the account in the environment):

```bash
RECIPIENTS="a@x,b@y" ./deploy.sh      # creates or updates role, function and API; prints the endpoint
```

To change recipients or origins, re-run `deploy.sh` with the `RECIPIENTS` / `ORIGINS`
variables. DMARC (`p=quarantine`, strict alignment) passes through the SES DKIM signature
(`d=serenitech.global`), verified 15/09/2026 with a test delivery to Gmail (dkim=pass, dmarc=pass).
