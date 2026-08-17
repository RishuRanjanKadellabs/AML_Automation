# QA Automation Pipeline Final Report

| Field | Value |
|-------|--------|
| Run ID | `{{run_id}}` |
| Excel source | `{{excel_path}}` |
| Environment | `{{env_name}}` |
| Started | `{{started_at}}` |
| Finished | `{{finished_at}}` |
| Pipeline status | `{{pipeline_status}}` |

## Executive summary

{{executive_summary}}

## Stage outcomes

| Stage | Status | Artifact |
|-------|--------|----------|
| 1 Excel validation | {{s1_status}} | `results/qa-pipeline/validation/` |
| 2 Normalization | {{s2_status}} | `results/qa-pipeline/normalized/` |
| 3 MCP execution | {{s3_status}} | `results/qa-pipeline/execution/` |
| 4 Script generation | {{s4_status}} | `results/qa-pipeline/generation/` |
| 5 Healing | {{s5_status}} | `results/qa-pipeline/healing/` |
| 6 Final packaging | {{s6_status}} | `results/qa-pipeline/final/` |

## Counts

| Metric | Count |
|--------|------:|
| Excel rows ingested | {{count_rows}} |
| Validation errors | {{count_val_errors}} |
| Validation warnings | {{count_val_warnings}} |
| Normalized cases | {{count_normalized}} |
| Executed (evidence) | {{count_executed}} |
| Passed | {{count_passed}} |
| Failed | {{count_failed}} |
| Blocked | {{count_blocked}} |
| Requires clarification | {{count_clarify}} |
| Scripts generated | {{count_generated}} |
| Scripts healed/verified | {{count_healed}} |
| Product defects logged | {{count_product_defects}} |

## Quality gates

- [ ] Excel file valid
- [ ] Unique / traceable test case IDs
- [ ] Steps and expected outcomes sufficiently clear
- [ ] Framework identified (Playwright + TypeScript POM)
- [ ] Environment available or generation-only marked
- [ ] Scripts: syntax/standards/assertions/no secrets/traceability
- [ ] Execution passed **or** blocked with valid reason
- [ ] Healing verified where applied
- [ ] Unresolved risks documented

## Linked artifacts

- Validation report: `{{validation_report}}`
- Human-readable cases: `{{normalized_cases}}`
- Execution report: `{{execution_report}}`
- Generation manifest: `{{generation_manifest}}`
- Healing report: `{{healing_report}}`
- Traceability matrix: `{{traceability_matrix}}`
- Assumptions: `{{assumptions_list}}`
- Blocked cases: `{{blocked_list}}`
- Unresolved defects/ambiguities: `{{unresolved_list}}`
- Files created/modified: `{{files_summary}}`
- Run instructions: `{{run_instructions}}`

## Remaining risks

{{remaining_risks}}

## Sensitive-data attestation

All credentials, tokens, PII, and AML-sensitive values were masked or referenced via environment/fixtures only: **{{sensitive_data_attestation}}**
