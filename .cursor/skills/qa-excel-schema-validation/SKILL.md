---
name: qa-excel-schema-validation
description: Validates Excel test-case workbooks against the QA AI-SDLC excel-input schema: required columns, duplicates, incomplete rows, and validation reports. Use in Stage 1 before normalization.
---

# Excel Schema Validation

## Purpose
Validate workbook structure and row quality; never silently ignore invalid rows.

## Inputs
- Parsed rows from `qa-excel-testcase-parsing`
- `specs/generated/qa-pipeline/schemas/excel-input-schema.json`

## Outputs
- `results/qa-pipeline/validation/validation-report.json`
- Eligible vs ineligible Test Case ID lists

## Preconditions
- Parsing completed

## Processing steps
1. Confirm required columns mapped: testCaseId, testSteps, expectedResult.
2. Flag missing recommended columns as warnings.
3. Detect duplicate Test Case IDs (error).
4. Flag incomplete rows (missing steps or expected result).
5. Write full report before pipeline continues.

## Validation rules
- Invalid rows are errors/warnings in the report — never dropped quietly.
- Gate A requires completed validation report.

## Failure conditions
- Missing required columns → pipeline blocked for generation
- File not `.xlsx`

## Example usage
```
Validate parsed rows against excel-input-schema and emit validation-report.json.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
