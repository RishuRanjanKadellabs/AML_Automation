---
name: qa-test-design-patterns
description: Applies positive, negative, boundary, and exception test-design classification to AML cases only when supported by source requirements. Use during Stage 2 normalization and quality review.
---

# Positive/Negative/Boundary/Exception Test Design

## Purpose
Classify and, when source supports it, call out design dimensions without inventing cases.

## Inputs
- Source Excel scenario/steps/expected/type fields

## Outputs
- `classification` field + optional design notes (not fabricated extra cases unless Excel provides them)

## Preconditions
- Normalized case draft exists

## Processing steps
1. Infer positive/negative/boundary/exception from wording/tags only.
2. If Excel already lists variants, preserve them as separate rows.
3. Do not invent new scenarios not in Excel.

## Validation rules
- No fabricated requirements
- Tag unclear types as `unknown`

## Failure conditions
- Attempt to invent extra AML rules → abort enrichment

## Example usage
```
Classify TC-AML-012 using only Excel content; do not add new boundary cases.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
