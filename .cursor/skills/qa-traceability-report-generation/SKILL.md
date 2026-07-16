---
name: qa-traceability-report-generation
description: Generates the Excel-to-script-to-result traceability matrix and related assumption/blocked/unresolved lists for Stage 6 packaging. Use in Stage 6.
---

# Traceability Report Generation

## Purpose
Emit Stage-6 traceability and companion lists.

## Inputs
- All stage artifacts + templates

## Outputs
- `results/qa-pipeline/final/traceability-matrix.md`
- assumptions, blocked, unresolved, files summary, execution instructions

## Preconditions
- Prior stage artifacts exist (even if partial)

## Processing steps
1. Fill `specs/generated/qa-pipeline/templates/traceability-matrix.md`.
2. Fill `specs/generated/qa-pipeline/templates/final-report.md`.
3. Emit companion markdown lists.
4. Verify every processed row appears once.

## Validation rules
- Full mapping chain required; use N/A + reason when a stage skipped

## Failure conditions
- Missing matrix when pipeline claims complete

## Example usage
```
Generate Stage 6 reports for the current QA AI-SDLC run.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
