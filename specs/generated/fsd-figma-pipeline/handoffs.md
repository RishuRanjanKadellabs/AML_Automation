# FSD + Figma Pipeline — Handoffs

Orchestrator: `.cursor/agents/fsd-figma-pipeline.agent.md`  
Downstream: `.cursor/agents/qa-automation-pipeline.agent.md` (unchanged agent file ownership; invoke only)

## Roots

```
pipeline/test-data/Milestone<N>/FSD/          # N = 1 or 2 (default 2); optional *_New revisions
pipeline/test-data/Milestone<N>/Figma/        # optional *_New revisions
pipeline/test-data/Milestone<N>/Test Cases/
results/fsd-figma-pipeline/<resultsKey>/
```

## Artifact table

| Stage | Output |
|-------|--------|
| FSD parse (active) | `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.json` |
| FSD parse (baseline) | `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.baseline.json` |
| HTML inventory | `results/fsd-figma-pipeline/<resultsKey>/html-inventory.json` |
| Alignment | `results/fsd-figma-pipeline/<resultsKey>/alignment-report.json` |
| Use cases | `results/fsd-figma-pipeline/<resultsKey>/use-cases.json` |
| Excel | `pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>` |
| **Feature delta** | `results/fsd-figma-pipeline/<resultsKey>/feature-delta-report.json` |
| **TC delta** | `results/fsd-figma-pipeline/<resultsKey>/tc-delta-report.json` |
| Coverage | `results/fsd-figma-pipeline/<resultsKey>/coverage-matrix.json` |
| **Atomicity** | `results/fsd-figma-pipeline/<resultsKey>/stage0-atomicity-report.json` (`npm run fsd:validate-atomicity`) |
| **Independent audit** | `results/fsd-coverage-audit/<resultsKey>/coverage-audit-report.json` — includes **chain coverage %** for dependent flows (`dependsOnFlowIds`, `uncoveredChainFlows`); agent `fsd-excel-coverage-audit` |
| Gate | `results/fsd-figma-pipeline/<resultsKey>/gate-excel-review.json` |
| Summary | `results/fsd-figma-pipeline/<resultsKey>/final/` |

Schemas: `specs/generated/fsd-figma-pipeline/schemas/`

**Flow chaining artifacts:** `html-inventory.json` → `navGraph` + `compositeFlows`; `use-cases.json` → `dependsOnUseCaseIds` + `preconditions`; Excel → Preconditions and/or multi-step Test Steps for audit chain coverage.

---

## Audit gaps → Stage 0 reconcile (optional)

When independent audit reports **Actual % &lt; 100%**, invoke `fsd-figma-pipeline` in **reconcile** mode and pass the audit report:

```
Reconcile Excel using coverage audit gaps
Excel: pipeline/test-data/Milestone<N>/Test Cases/<Workbook>.xlsx
Audit: results/fsd-coverage-audit/<resultsKey>/coverage-audit-report.json
```

| Audit artifact | Stage 0 action |
|----------------|----------------|
| `uncoveredFlows` | **add** TCs for missing positive/negative design types |
| `uncoveredChainFlows` | **update** matched TCs (Preconditions / navigation steps) or **add** prerequisite setup TCs |
| `uncoveredRequirementIds` | **add** or **update** TCs per requirement |

After reconcile: re-run `fsd-excel-coverage-audit` until Actual % = 100%, then Approve Excel → QA pipeline.

---

## `*_New` source resolution

```
if user names exact file → use it
else if Stem_New.docx/.html and Stem.docx/.html both exist → active = Stem_New; baseline = Stem
else if only Stem_New → active = Stem_New; baseline = Stem if present else null
Excel path stays the module workbook (do not fork a new xlsx only because of _New)
```

Feature delta explains FSD/Figma product changes; TC delta drives Excel + Playwright reconcile.

---

## Excel mode selection (mandatory)

```
excelPath = pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>
if excelPath exists → excelMode = "reconcile"  (in-place update + delta)
else                → excelMode = "create"     (new workbook write)
```

Do **not** require the user to state the mode. Detect from filesystem only.

---

## Stage 0 → Excel gate

**Pass criteria:** `coveragePct === 100` **and** `atomicityReady === true` (or user accepted gaps).

```bash
npm run fsd:validate-atomicity -- --results-key "<resultsKey>"
npm run fsd:coverage-report -- --results-key "<resultsKey>"
```

Gate statuses: `BlockedCoverage` | `BlockedAtomicity` | `AwaitingReview`

```json
{
  "handoff": "fsd-figma.excel-ready",
  "fsdPath": "pipeline/test-data/Milestone<N>/FSD/<FsdFileName.docx>",
  "baselineFsdPath": "pipeline/test-data/Milestone<N>/FSD/<BaselineWithout_New.docx>|null",
  "figmaPath": "pipeline/test-data/Milestone<N>/Figma/<FigmaFileName.html>",
  "baselineFigmaPath": "pipeline/test-data/Milestone<N>/Figma/<BaselineWithout_New.html>|null",
  "excelPath": "pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>",
  "excelMode": "create | reconcile",
  "milestone": 1,
  "resultsKey": "<resultsKey>",
  "featureDeltaReportPath": "results/fsd-figma-pipeline/<resultsKey>/feature-delta-report.json",
  "tcDeltaReportPath": "results/fsd-figma-pipeline/<resultsKey>/tc-delta-report.json",
  "gate": "AwaitingReview"
}
```

---

## Excel approved → QA automation pipeline

### Create mode (new Excel)

```json
{
  "handoff": "fsd-figma.to-qa-automation-pipeline",
  "invokeExistingAgent": ".cursor/agents/qa-automation-pipeline.agent.md",
  "doNotModifyAgentConfig": true,
  "pipelineMode": "create",
  "trigger": "Process the Excel file at pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx> through the QA automation pipeline.",
  "excelPath": "pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>",
  "milestone": 2,
  "specsRoot": "tests/milestone2/",
  "priorityRules": {
    "fsdWins": true,
    "figmaHtmlAssistsUiNavOnly": true
  }
}
```

### Reconcile mode (existing Excel updated — including after `*_New` FSD/Figma)

```json
{
  "handoff": "fsd-figma.to-qa-automation-pipeline",
  "invokeExistingAgent": ".cursor/agents/qa-automation-pipeline.agent.md",
  "doNotModifyAgentConfig": true,
  "pipelineMode": "reconcile",
  "trigger": "Process the Excel file at <excelPath> through the QA automation pipeline in reconcile mode using tc-delta-report.json.",
  "excelPath": "pipeline/test-data/Milestone<N>/Test Cases/<OutputWorkbook.xlsx>",
  "featureDeltaReportPath": "results/fsd-figma-pipeline/<resultsKey>/feature-delta-report.json",
  "tcDeltaReportPath": "results/fsd-figma-pipeline/<resultsKey>/tc-delta-report.json",
  "milestone": 1,
  "specsRoot": "tests/milestone1/",
  "delta": {
    "generateCaseIds": ["<add + update IDs>"],
    "retireCaseIds": ["<retired IDs>"],
    "keepCaseIds": ["<unchanged IDs>"]
  },
  "priorityRules": {
    "fsdWins": true,
    "figmaHtmlAssistsUiNavOnly": true,
    "preserveExistingTestCaseIds": true
  }
}
```

`specsRoot` = `tests/milestone1/` when `milestone=1`, else `tests/milestone2/`.

Reconcile updates Playwright module specs for `add`+`update` IDs and removes `retire` IDs after Stage 0 Excel approval.
