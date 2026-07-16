---
name: qa-requirement-traceability
description: Maintains Excel-row to Test Case ID to Requirement ID to artifact traceability for the QA AI-SDLC pipeline. Use whenever linking cases, scripts, or reports.
---

# Requirement Traceability

## Purpose
Ensure end-to-end traceability across pipeline stages.

## Inputs
- Excel row metadata, TC ID, Requirement ID, artifact paths, statuses

## Outputs
- Trace links consumed by Stage 6 matrix template

## Preconditions
- Source excelRowNumber known

## Processing steps
1. Bind excelRowNumber ↔ testCaseId (original preferred).
2. Attach requirementId only if present in source — never invent.
3. Update links as scripts/execution/healing artifacts appear.

## Validation rules
- Matrix must map: row → TC → Req → HR case → script → execution → healing

## Failure conditions
- Missing excel row linkage

## Example usage
```
Update traceability links after generating scripts for TC-AML-041.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
