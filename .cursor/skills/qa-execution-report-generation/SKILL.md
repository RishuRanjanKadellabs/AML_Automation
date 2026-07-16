---
name: qa-execution-report-generation
description: Generates QA AI-SDLC execution reports from evidence-backed results, including passed/failed/blocked counts and artifact links. Use in Stages 3 and 6.
---

# Execution Report Generation

## Purpose
Publish clear execution reporting.

## Inputs
- execution-result records

## Outputs
- `results/qa-pipeline/execution/execution-report.json` (+ markdown summary)
- Sections for final-report.md

## Preconditions
- Stage 3 completed or blocked with reasons

## Processing steps
1. Aggregate statuses and counts.
2. Link evidence paths.
3. Separate blocked reasons.

## Validation rules
- No inferred results presented as executed

## Failure conditions
- Missing blockReason for blocked cases

## Example usage
```
Build execution-report.json from per-case Stage 3 results.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
