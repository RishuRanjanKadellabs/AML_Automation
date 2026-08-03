---
name: qa-excel-testcase-generation
description: >-
  Writes or reconciles Clari5 AML Excel .xlsx test cases from FSD-driven use
  cases in the current QA pipeline column format. Create when the workbook is
  missing; reconcile/update in place when it exists. Validates against
  excel-input-schema, builds mandatory FSD coverage-matrix.json and
  tc-delta-report.json, and prepares the human Excel review gate. Writes
  Preconditions and/or multi-step Test Steps so dependent flow chains are
  evidenced for audit chain coverage. Use at end of FSD+Figma Stage 0.
---

# Excel Test Case Generation

## Purpose
Emit or update Excel under `pipeline/test-data/Milestone<N>/Test Cases/` ready for `qa-automation-pipeline`, with **mandatory 100% FSD requirement coverage** (unless user accepts gaps), a **TC delta report**, a **feature delta report** (when `*_New` / baseline FSD applies), and a **detailed coverage report** (overall % + feature changes + modules + features by FSD section) in the user-facing reply.

## Mode selection (mandatory)

```
excelPath = pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>
if file exists → excelMode = reconcile
else           → excelMode = create
```

| Mode | Behavior |
|------|----------|
| `create` | Write a new workbook from use cases; delta = all IDs under `add` |
| `reconcile` | Parse existing rows; **revise all required columns** for retained TCs; add/update/retire/keep; patch **same** file after `.bak`; preserve Test Case IDs |

## Inputs
- `use-cases.json`
- `fsd-inventory.json` (for requirement scope — from **active** / `*_New` FSD)
- Optional `feature-delta-report.json` (from `qa-fsd-feature-delta`) — guides which features need new/updated/retired TCs
- Output workbook filename (user-provided `Test Cases:` name, or confirmed default — **same** path when sources are `_New`)
- Milestone `N` (1 or 2, default 2)
- Optional `coverage-audit-report.json` — when reconciling after audit failure, use `uncoveredFlows` + `uncoveredChainFlows` to drive adds/updates
- Column contract: `specs/generated/qa-pipeline/schemas/excel-input-schema.json`
- Manifest schema: `specs/generated/fsd-figma-pipeline/schemas/excel-generation-manifest-schema.json`
- Coverage schema: `specs/generated/fsd-figma-pipeline/schemas/coverage-matrix-schema.json`
- Delta schema: `specs/generated/fsd-figma-pipeline/schemas/tc-delta-report-schema.json`
- Feature delta schema: `specs/generated/fsd-figma-pipeline/schemas/feature-delta-report-schema.json`
- Gate schema: `specs/generated/fsd-figma-pipeline/schemas/gate-excel-review-schema.json`

## Outputs
- `pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>`
- `results/fsd-figma-pipeline/<resultsKey>/excel-generation-manifest.json` (includes `excelMode`)
- `results/fsd-figma-pipeline/<resultsKey>/tc-delta-report.json` (**required**)
- `results/fsd-figma-pipeline/<resultsKey>/feature-delta-report.json` (**required** when `_New`/baseline; else `baselineAvailable=false`)
- `results/fsd-figma-pipeline/<resultsKey>/coverage-matrix.json` (**required**)
- Gate file: `results/fsd-figma-pipeline/<resultsKey>/gate-excel-review.json`
- Update `final/stage0-summary.md` including overall % **and** feature changes **and** module/feature tables **and** TC delta summary
- On reconcile: timestamped `.bak-*` beside the workbook before overwrite

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

### Do not include in Excel

Do **not** add a **Requirement ID** (or Req ID / REQ ID) column to the workbook. Traceability stays in Stage 0 JSON only (`use-cases.json`, `coverage-matrix.json`, `tc-delta-report.json`).

### Acceptance Criteria (mandatory style)

Write **plain-English, measurable pass conditions** that a reviewer can understand without reading the FSD.

- Good: plain-English measurable outcomes tied to what the tester will see (control visible, save succeeded, error shown)
- Bad: `• REQ-S3.2-01` / `• FSD S3.2` / raw requirement or section IDs only

**Traceability** (`requirementIds`, `fsdSectionIds`, REQ-* / FSD section refs) belongs in Stage 0 JSON artifacts — **never** in an Excel Requirement ID column and **never** dump IDs into Acceptance Criteria.

## Steps — create mode
1. Map each use case → Excel row(s). **Prefer 1 use case → 1 row.** If a use case still bundles intents, **split into multiple rows** before writing (do not ship bundled rows).
2. Write **concrete, numbered Test Steps** with real UI labels (FSD + Figma). See **Concrete Test Steps** below — **never** placeholder steps.
3. Bullet Expected Result / Acceptance Criteria with measurable outcomes for that single intent.
4. Fill Test Data with the values referenced in the steps (or N/A for observation-only UI checks).
5. Write new `.xlsx` (Sheet1).
6. Emit `tc-delta-report.json` with `excelMode=create`, all IDs in `add`, empty `update`/`retire`/`keep`.
7. Validate, build coverage matrix, display report (see below).

## Steps — reconcile mode
1. Parse existing workbook with `qa-excel-testcase-parsing` (preserve row TC IDs).
2. Read `feature-delta-report.json` when present: treat **added** features as requiring new TCs, **removed** features as retire candidates, **updated** features as full-column revision targets.
3. Map existing TCs to in-scope FSD requirements / use cases (title + steps + expected similarity; never invent new IDs for mapped rows).
4. Classify every existing ID:
   - **retire** — no in-scope FSD mapping (orphan / unnecessary) — often maps to **removed** features
   - **update** — still maps **and** any required column needs change after full-column audit (**same ID**) — **this is the default for retained rows** (especially **updated** features / new Figma labels)
   - **keep** — still maps **and** every required column already matches FSD+Figma after explicit audit (document that audit; do not skip reading columns)
5. **Full column revision (mandatory):** for every retained TC, review and rewrite as needed:
   Module, Sub Module, Task Description, Acceptance Criteria, Preconditions, Test Steps, Test Data, Priority, Expected Result. Preserve Test Case ID only. Populate `changedFields` on each update entry.
6. For uncovered in-scope requirements (including **added** features) → **add** new rows with **new** IDs only.
7. Copy workbook to `.bak-<timestamp>` (or `.bak-reconcile-<timestamp>`) before write.
8. Patch the **same** Excel path: apply keep+update+add rows; leave retire rows in the file until user Approves Excel, then delete them and set `removalsApproved=true`.
9. Write `tc-delta-report.json` with full add/update/retire/keep lists, `idStability` flags, and summary counts. A reconcile that leaves almost all rows in `keep` with `updateCount=0` without a documented per-column zero-drift audit is incomplete — revise columns and reclassify as `update`.

### ID stability (hard)
- Never renumber or rename an existing Test Case ID.
- Never reuse a retired ID for a new add.
- Specs and reports key off these IDs.

### Must revise on reconcile (not optional)
- Do **not** leave Test Steps / Expected Result / Acceptance Criteria / Test Data / Preconditions / Priority / Module / Sub Module / Task Description stale when FSD or Figma differs.
- Concrete Figma-driven Test Steps and plain-English Acceptance Criteria rules apply to **updated and added** rows the same as create mode.

## Shared steps (both modes)
1. Validate with existing excel-input rules (IDs, steps, expected present; no duplicate IDs). Reject rows whose Acceptance Criteria are only REQ/FSD IDs. **Also reject / split bundled rows** and **reject placeholder steps**.
2. **Build coverage matrix** (mandatory):
   - For each in-scope FSD `requirementId`, set `covered` if ≥1 Excel `testCaseId` maps to it.
   - Compute overall `coveragePct`; set `gateReady` true only at 100% with empty `uncoveredRequirementIds`.
   - Build **`byModule`** and **`byFeature`**.
   - On reconcile, list **`orphanCaseIds`** (Excel TCs with no in-scope REQ).
   - Write `coverage-matrix.json` (must include `byModule` and `byFeature`; set `excelMode`).
3. **Display detailed coverage + feature delta + TC delta to the user** in the same message that announces the Excel path.
   **Mandatory mechanical render after every Excel create/reconcile:**

   ```bash
   npm run fsd:coverage-report -- --results-key "<resultsKey>"
   ```

   Paste the **full stdout markdown** into the user-facing reply (Feature changes with TCs + Coverage %, Modules, Features covered with TCs + Coverage %, TC delta, out-of-scope). Also written to:
   - `results/fsd-figma-pipeline/<resultsKey>/final/stage0-coverage-report.md`
   - `results/fsd-figma-pipeline/<resultsKey>/final/stage0-summary.md`

   Never announce Excel with overall-% only. Never skip this script after a successful Excel write.
4. Mirror the same tables in `final/stage0-summary.md` (the script does this).
5. If not `gateReady` **or** placeholder steps remain: set gate `BlockedCoverage` / keep rewriting — do **not** request Approve or hand off.
6. If `gateReady` (or user accepted gaps) **and** all steps are concrete: set gate to `AwaitingReview` unless user said auto-approve.
7. On approve → handoff trigger for qa-automation-pipeline including `excelMode`, `tcDeltaReportPath`, and `milestone` (reconcile updates Playwright specs for add+update and removes retire IDs).

## Anti-bundling (mandatory)

- **One primary intent per Excel row.**
- **Flow / happy-path** rows: when **this run’s** Figma shows a complete interactive path, one TC may complete it with valid data → FSD success. Labels = that Figma only.
- **Field-level validations** for that path: **separate rows** per FSD rule — never combined into the flow TC.
- Do not combine independent list/filter/sort/KPI/UI attributes into one laundry list.
- Do not reuse another module’s flow or button names.
- 100% coverage via a small number of fat rows is a **Stage 0 failure** — split and rebuild.

## Concrete Test Steps (mandatory)

- **This run’s Figma HTML** = UI flow source for clicks, labels, modals, fill order (`html-inventory.json`). Discover flows — do not assume a fixed catalog.
- **This run’s FSD** = expected results / business rules.
- When Figma shows a multi-step interactive flow, the happy-path TC must mirror it (open → fill/select required → primary action → observe FSD outcome).
- Validation TCs reuse that path with one invalid change when applicable.
- **Forbidden:** placeholder steps; inventing control labels; copying flows from a different FSD/Figma pair.
- Do **not** set `AwaitingReview` while placeholder steps or foreign-module labels remain.

## Dependent flow chains (mandatory)

Map `use-cases.json` **`dependsOnUseCaseIds`** and **`preconditions`** into Excel so audit **chain coverage** can pass.

| Pattern | Excel requirement |
|---------|-------------------|
| Happy-path / navigation use case | Full Figma chain in **Test Steps** (open → tab → action → observe) |
| Validation / negative use case | **Preconditions** name screen/tab state **and** prerequisite setup; OR include prerequisite navigation steps in Test Steps |
| Save on sub-tab | Preconditions or steps must show tab/screen was opened first |
| Split TC model | Dependency covered by other TC(s) **and** this row’s Preconditions explicitly reference that state |

**Reconcile / audit-fix:**
- Rows in `uncoveredChainFlows` with existing TC IDs → **update** Preconditions or prepend navigation steps (do not only tweak Expected Result).
- Rows with `missing-precondition-reference` audit mode → add Preconditions citing Figma screen/tab labels.

**Forbidden:**
- Validation TC with blank Preconditions assuming user is already on the target screen
- Negative TC with no linked navigation/happy-path coverage in the workbook

## Must not
- Put `REQ-*`, `FSD S*`, or section IDs alone into Acceptance Criteria
- Add a **Requirement ID** / Req ID / REQ ID column to Excel (traceability stays in Stage 0 JSON only)
- Invent steps that change FSD intent
- Ship **bundled** multi-intent test cases
- Ship **generic / placeholder** Test Steps
- Skip validation
- Skip coverage matrix, TC delta, feature delta (when `_New`/baseline), or detailed coverage display
- Skip `npm run fsd:coverage-report` after Excel write
- Deliver Excel with only a single overall coverage % line
- Deliver Feature changes without per-feature **TCs** and **Coverage %** columns
- Silently delete Excel rows without Approve
- Renumber existing Test Case IDs
- On reconcile: leave any required column stale without audit, or mark nearly all rows `keep` with `updateCount=0` without a documented zero-drift proof
- Auto-run Playwright generation without gate approval (unless user auto-approves)
- Hand off while coverage &lt; 100% without explicit user gap acceptance
- Create a second Excel workbook solely because FSD/Figma filenames contain `_New`
- Ship dependent-flow TCs without chain evidence in Preconditions or Test Steps

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Chain audit: `fsd-excel-coverage-audit`, `coverage-audit-report.json`
- Feature delta: `qa-fsd-feature-delta`
- Handoff: `specs/generated/fsd-figma-pipeline/handoffs.md`
- Parse skill: `qa-excel-testcase-parsing`
