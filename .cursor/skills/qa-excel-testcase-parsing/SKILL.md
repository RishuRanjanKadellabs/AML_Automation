---
name: qa-excel-testcase-parsing
description: Parses Clari5 AML manual test cases from Excel .xlsx workbooks into structured row objects while preserving Test Case IDs and excel row numbers. Use when reading Excel test cases for the QA AI-SDLC pipeline Stage 1.
---

# Excel Test-Case Parsing

## Purpose
Extract test-case rows from an `.xlsx` file for the QA AI-SDLC pipeline.

## Inputs
- `excelFilePath` (required)
- Optional: worksheet name, column alias map from `specs/generated/qa-pipeline/schemas/excel-input-schema.json`

## Outputs
- Structured rows with `excelRowNumber`, canonical fields, `rawCells`, provisional `validationIssues`

## Preconditions
- File exists and ends with `.xlsx`
- Schema contract available

## Processing steps
1. **Prefer the mechanical script** (mandatory for `qa-automation-pipeline`):
   `npm run qa:parse-excel -- --excel <path> --results-root results/qa-pipeline/<excel-basename>`
   Uses Node `xlsx` — do **not** require Python `pandas`/`openpyxl`.
2. Open workbook; select primary data sheet (first with header row matching aliases, or named sheet).
3. Normalize headers (trim, case-insensitive) via aliases.
4. Parse each data row; keep original Test Case ID string verbatim.
5. Attach `excelRowNumber` (1-based sheet row).
6. Do not drop rows that look empty without logging them as `EMPTY_ROW`.
7. Never hand-write a “sample” validation report. If the script fails → Blocked.

## Validation rules
- Preserve original IDs; never invent IDs silently (internal ID only if documented).
- Emit structured objects compatible with excel-input schema.
- Full workbook row coverage is required — representative subsets are forbidden.

## Failure conditions
- Unreadable/corrupt workbook
- No worksheet with recognizable headers
- Zero data rows

## Example usage
```
Parse pipeline/test-cases/my-cases.xlsx using qa-excel-testcase-parsing
and write candidates for schema validation.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
