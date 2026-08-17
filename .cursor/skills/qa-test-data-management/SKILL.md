---
name: qa-test-data-management
description: Manages externalized, synthetic/approved AML test data via fixtures and env vars; prevents production data and secrets in scripts. Use in Stages 2–5.
---

# Test-Data Management

## Purpose
Keep data out of hard-coded script logic.

## Inputs
- Excel test data fields; environments.json; fixtures

## Outputs
- Fixture updates / env references; masked report values

## Preconditions
- Data marked approved/synthetic when used

## Processing steps
1. Map Excel data to fixtures or parameters.
2. Reference credentials only via env.
3. Reject production dumps into repo.

## Validation rules
- No secrets in specs/reports
- Prefer `tests/fixtures/` patterns

## Failure conditions
- Hard-coded password/account numbers in generated code

## Example usage
```
Externalize customer search keys from Excel into fixture JSON.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
