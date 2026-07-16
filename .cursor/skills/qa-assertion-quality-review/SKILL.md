---
name: qa-assertion-quality-review
description: Reviews Playwright assertions for meaning, strength, and healing regressions; blocks empty or weakened expectations. Use in Stages 4–5 and Gate B.
---

# Assertion Quality Review

## Purpose
Ensure assertions validate business/expected outcomes.

## Inputs
- Spec assertion sites + expected results from case

## Outputs
- Pass/fail review notes; required remediations

## Preconditions
- Script draft exists

## Processing steps
1. Reject empty expects / placeholder comments as “done.”
2. Ensure assertions map to expected results from Excel/HR case.
3. Detect weakened assertions during healing diffs.

## Validation rules
- Gate B requires meaningful assertions
- assertionsWeakened must remain false

## Failure conditions
- Healing PR that removes critical expect without justification

## Example usage
```
Review assertions in newly generated batch-screening specs before finalizing.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
