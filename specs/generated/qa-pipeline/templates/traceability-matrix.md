# QA AI-SDLC Traceability Matrix

Source Excel: `{{excel_path}}`  
Run ID: `{{run_id}}`  
Generated: `{{generated_at}}`

## Mapping

| Excel file | Worksheet | Excel row | Test Case ID | Requirement ID | Human-readable case | Execution result | Automation script | Healing result | Final status |
|----------:|--------------|----------------|---------------------|-------------------|------------------|----------------|
| {{excel}} | {{sheet}} | {{row}} | {{tc_id}} | {{req_id}} | `{{hr_path_or_id}}` | {{exec_status}} | `{{script_path}}` | {{heal_status}} | {{final_status}} |

<!-- Repeat one data row per test case. Use "N/A" with reason when a stage did not apply. -->

## Legend

| Status | Meaning |
|--------|---------|
| passed | Evidence shows expected outcome met |
| failed | Evidence shows mismatch or error |
| blocked | Could not execute (env/MCP/data) — reason recorded |
| skipped | Intentionally not run — reason recorded |
| requires-clarification | Insufficient requirement detail |
| healed-verified | Fix applied and re-execution passed |
| product-defect-logged | Failure attributed to product, not weakened assertion |
| N/A | Stage not applicable; cite reason in notes |

## Notes

{{notes}}

## Integrity rules

1. Preserve original Excel Test Case ID whenever present.
2. Never invent Requirement IDs.
3. Execution result may be marked only with evidence (`executed: true`) or explicit block reason.
4. Trace each generated script path back to exactly one primary Test Case ID (or documented multi-map).
