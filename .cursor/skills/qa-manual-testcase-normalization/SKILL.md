---
name: qa-manual-testcase-normalization
description: Converts validated Excel rows into human-readable structured test cases per the QA AI-SDLC normalized schema without inventing data. Use in Stage 2.
---

# Manual Test-Case Normalization

## Purpose
Produce structured human-readable cases from eligible Excel rows.

## Inputs
- Validation report + eligible rows
- `specs/generated/qa-pipeline/schemas/human-readable-testcase-schema.json`

## Outputs
- `results/qa-pipeline/normalized/test-cases.json`

## Preconditions
- Stage 1 validation completed
- Row has sufficient info for a reliable case

## Processing steps
1. Map fields to schema (title, objective, requirements, preconditions, data, steps, expected).
2. Number steps; attach per-step expected results when present in source.
3. Record assumptions and missing-information warnings.
4. Set classification when inferable from source wording only; else `unknown`.

## Validation rules
- Do not invent business rules, credentials, APIs, locators, expected values, or test data.
- Label every assumption.

## Failure conditions
- Insufficient clarity → exclude from automation eligibility; warn

## Example usage
```
Normalize eligible rows from validation-report.json into human-readable cases.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
