---
name: qa-api-automation-generation
description: Generates API automation only when the Excel source and repository already define API contracts or helpers; never fabricates endpoints. Use in Stage 4 for API-tagged cases.
---

# API Automation Generation

## Purpose
Automate API checks using existing project patterns only.

## Inputs
- Cases with explicit API steps in Excel
- Existing API helpers/clients if present

## Outputs
- API tests/helpers only when contracts exist in repo or Excel with sufficient detail

## Preconditions
- API intent present in source
- No fabrication of contracts

## Processing steps
1. Search for existing API utilities.
2. If none and Excel lacks method/URL/schema → mark blocked/manual-only.
3. Otherwise generate using project conventions; externalize env host.

## Validation rules
- Never invent endpoints or payloads

## Failure conditions
- Missing contract → do not generate fake API tests

## Example usage
```
If Excel includes API verify steps with documented endpoint, generate API test; else block.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
