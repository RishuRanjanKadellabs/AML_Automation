---
name: qa-database-validation-generation
description: Generates database validation automation only when connection patterns and queries are provided by the project or approved fixtures—never invents SQL against production. Use for DB validation cases in Stage 4.
---

# Database Validation Generation

## Purpose
Add DB assertions using approved patterns only.

## Inputs
- Cases requiring DB checks
- Existing DB helpers / read-only connection config if any

## Outputs
- DB validation code or explicit blocked status

## Preconditions
- Non-production target
- Query intent present in source

## Processing steps
1. Discover existing DB helpers.
2. If absent or unsafe → mark blocked; do not create ad-hoc prod connections.
3. Prefer read-only verification; never destructive DML in automation.

## Validation rules
- No production DB execution by default

## Failure conditions
- Missing connection approach → blocked

## Example usage
```
Assess DB validation case; generate only if approved helper exists.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
