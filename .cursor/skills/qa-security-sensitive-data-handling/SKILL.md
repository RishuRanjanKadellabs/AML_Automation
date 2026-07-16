---
name: qa-security-sensitive-data-handling
description: Enforces masking of credentials, PII, and AML-sensitive values in logs, reports, and generated assets for Clari5. Use in every QA AI-SDLC stage.
---

# Security and Sensitive-Data Handling

## Purpose
Prevent leakage of sensitive AML/financial data.

## Inputs
- Any log, report, script, evidence artifact

## Outputs
- Redacted content; security attestation in final report

## Preconditions
- Awareness of secret patterns (password, token, account, PAN, etc.)

## Processing steps
1. Scan outputs for secrets/PII.
2. Replace with `[REDACTED]` or env var names.
3. Fail Gate B if hard-coded secrets remain.

## Validation rules
- Align with `.cursor/rules/qa-automation-pipeline-*.mdcdata-security.md`

## Failure conditions
- Unmasked credentials in reports

## Example usage
```
Redact EMAIL/PASSWORD and customer IDs from execution-report before publish.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
