# Stage 2 — Human-Readable Normalization Prompt

Convert eligible Excel rows from `{{validation_report}}` into structured cases.

## Instructions

1. Follow `specs/generated/qa-pipeline/schemas/human-readable-testcase-schema.json`.
2. Apply skills: `qa-manual-testcase-normalization`, `qa-testcase-quality-review`,
   `qa-requirement-traceability`, `qa-automation-feasibility-assessment`,
   `qa-test-design-patterns`.
3. For each case include all required fields (title, steps, expected results,
   classification, feasibility, assumptions, missing-info warnings).
4. **Do not invent** business rules, credentials, API details, locators,
   expected values, or test data.
5. Clearly label any required assumption.
6. Write `results/qa-pipeline/normalized/test-cases.json` and per-case markdown under
   `results/qa-pipeline/normalized/cases/` if helpful for review.
