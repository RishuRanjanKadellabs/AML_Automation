---
name: qa-testcase-quality-review
description: Reviews normalized AML test cases for clarity, completeness, duplicates, and automation readiness. Use after Stage 2 normalization or before generation.
---

# Test-Case Quality Review

## Purpose
Quality-gate human-readable cases before execution/generation.

## Inputs
- Normalized test-cases.json

## Outputs
- Quality review section/file with pass/fail/warn per case

## Preconditions
- Normalization artifacts exist

## Processing steps
1. Check unique IDs, non-empty steps, expected results.
2. Detect near-duplicate scenarios.
3. Flag vague steps (“verify correctly”) as needs-clarification.
4. Confirm traceability fields present.

## Validation rules
- Unclear expected results → cannot pass Gate A without waiver
- Duplicates must be flagged

## Failure conditions
- Review artifact missing when Stage 4 requested

## Example usage
```
Review results/qa-pipeline/normalized/test-cases.json for Gate A readiness.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
