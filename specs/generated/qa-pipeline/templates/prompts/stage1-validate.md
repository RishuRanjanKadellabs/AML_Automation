# Stage 1 — Excel Upload and Validation Prompt

Process the Excel test-case file at: `{{excel_file_path}}`

## Instructions

1. Confirm the file exists and ends with `.xlsx`.
2. Load schema: `specs/generated/qa-pipeline/schemas/excel-input-schema.json`.
3. Apply skill `qa-excel-schema-validation` then `qa-excel-testcase-parsing`.
4. Map headers via canonical aliases; flag unmapped required columns.
5. For every data row:
   - Preserve original Test Case ID.
   - Detect missing, duplicate, incomplete, or invalid content.
   - **Never silently ignore** invalid rows — emit error/warning entries.
6. Write `results/qa-pipeline/validation/validation-report.json` and a human summary markdown.
7. Apply Stage-1 quality gate before returning control to the pipeline.

## Output shape

```json
{
  "valid": true,
  "filePath": "...",
  "worksheetName": "...",
  "rowCount": 0,
  "errors": [],
  "warnings": [],
  "eligibleTestCaseIds": [],
  "ineligibleTestCaseIds": []
}
```
