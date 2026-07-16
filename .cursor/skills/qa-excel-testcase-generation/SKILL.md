---
name: qa-excel-testcase-generation
description: >-
  Writes Clari5 AML Excel .xlsx test cases from FSD-driven use cases in the
  current QA pipeline column format, validates against excel-input-schema, and
  prepares the human Excel review gate. Use at end of FSD+Figma Stage 0.
---

# Excel Test Case Generation

## Purpose
Emit Excel under `pipeline/test-data/Milestone2/Test Cases/` ready for `qa-automation-pipeline`.

## Inputs
- `use-cases.json`
- Output workbook filename (user-provided `Test Cases:` name, or confirmed default)
- Optional alignment assumptions
- Column contract: `specs/generated/qa-pipeline/schemas/excel-input-schema.json`
- Manifest schema: `specs/generated/fsd-figma-pipeline/schemas/excel-generation-manifest-schema.json`

## Outputs
- `pipeline/test-data/Milestone2/Test Cases/<OutputWorkbook.xlsx>`
- `results/fsd-figma-pipeline/<resultsKey>/excel-generation-manifest.json`
- Gate file: `results/fsd-figma-pipeline/<resultsKey>/gate-excel-review.json`

## Required columns (headers)

Use these headers (compatible with existing Excel workbooks):

| Column |
|--------|
| Test Case ID |
| Module |
| Sub Module |
| Task Description |
| Acceptance Criteria |
| Preconditions |
| Test Steps |
| Test Data |
| Priority |
| Expected Result |

### Acceptance Criteria (mandatory style)

Write **plain-English, measurable pass conditions** that a reviewer can understand without reading the FSD.

- Good: `• Sidebar opens Missing Mandatory Data Template` / `• Three-panel layout is visible`
- Bad: `• REQ-S3.2-01` / `• FSD S3.2` / raw requirement or section IDs only

**Traceability** (`requirementIds`, `fsdSectionIds`, REQ-* / FSD section refs) belongs in Stage 0 JSON artifacts (`use-cases.json`, `coverage-matrix.json`) and optionally a dedicated **Requirement ID** column — **never** dump IDs into Acceptance Criteria.

If the workbook has a Requirement ID column, put IDs there; keep Acceptance Criteria human-readable.

## Steps
1. Map each use case → one Excel row (or split only when FSD clearly implies separate cases).
2. Number test steps; bullet expected results.
3. Fill Acceptance Criteria in plain English (see above).
4. Write `.xlsx` (Sheet1).
5. Validate with existing excel-input rules (IDs, steps, expected present; no duplicate IDs). Reject rows whose Acceptance Criteria are only REQ/FSD IDs.
6. Set gate to `AwaitingReview` unless user said auto-approve.
7. On approve → handoff trigger for qa-automation-pipeline.

## Must not
- Put `REQ-*`, `FSD S*`, or section IDs alone into Acceptance Criteria
- Invent steps that change FSD intent
- Skip validation
- Auto-run Playwright generation without gate approval (unless user auto-approves)

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Handoff: `specs/generated/fsd-figma-pipeline/handoffs.md`
