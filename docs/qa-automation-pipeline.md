# QA Automation Pipeline

Integrates Excel → Playwright automation into this repo’s existing Cursor + Playwright structure.

## Trigger

```
Process the Excel file at <file-path> through the QA automation pipeline.
```

Upstream Stage 0 (optional): FSD + Figma HTML from `pipeline/test-data/Milestone1|2/{FSD,Figma}/`
→ Excel in `MilestoneN/Test Cases/` via `.cursor/agents/fsd-figma-pipeline.agent.md`
(**create** if workbook missing; **reconcile in place** if present + `tc-delta-report.json`)
(process docs: `.cursor/system-context/fsd-figma-pipeline.mdc`).

Reconcile handoff example:

```
Process the Excel file at <file-path> through the QA automation pipeline in reconcile mode using <tc-delta-report.json>. Milestone: <1|2>.
```

## Agent

- **New (orchestration only):** `.cursor/agents/qa-automation-pipeline.agent.md`
- **Stage 0 (FSD+Figma→Excel):** `.cursor/agents/fsd-figma-pipeline.agent.md`
- **Workers (invoked by QA pipeline batches):** `test-generator`, `test-healer`

## Locations

| What | Where |
|------|--------|
| Schemas, handoffs, templates | `specs/generated/qa-pipeline/` |
| Stage outputs & final report | `results/qa-pipeline/<excel-basename>/` (per workbook) |
| Generated / updated tests | `tests/milestone2/` (default) or `tests/milestone1/` when Stage 0 milestone=1 — one spec per module |
| Skills | `.cursor/skills/qa-*` |
| Rules | `.cursor/rules/qa-automation-pipeline-*.mdc` |
| System context | `.cursor/system-context/qa-automation-pipeline.mdc` |

## Workflow

`Excel → Validate → Normalize → Split 6 batches → [Generate → Execute → Heal once → Verify changed → Report pass/fail → Ask to proceed] × 5 → [Batch 6 full cycle] → Report → Gate`

**Between batches 1–5:** after a batch is fully done, show Passed/Failed/Blocked and ask before starting the next batch. After batch 6, continue to gate.

**Reconcile:** generate scope = add+update only; remove retired `test()` blocks; leave keep IDs untouched; verify with `--delta <tc-delta-report.json>`.

Generation hands off to the existing generator (config never modified). Every generate-scope eligible UI case requires live module-route/control/action evidence, with `liveUiCoveragePercent=100`.

Each batch invokes the existing healer at most once for classified automation,
locator, or synchronization failures. Product/data/environment/requirement
failures are preserved without code changes.

## Single MCP owner (permanent continuity rule)

Live UI Generate uses one Playwright MCP browser session.

- Run Generate in the **parent/orchestrator** session by default.
- Do **not** launch a background Generate child while the parent still owns MCP (`generator_setup_page` / `browser_*`).
- If a Generate child is “running” but specs/manifest show no progress for >5 minutes, interrupt it and continue Generate in-parent.
- Checkpoint `generation-manifest.json` and `state.json` at least every module and every ≤10 cases.

## Module-agnostic helpers

Pipeline helpers derive modules and spec paths from the current validation/normalized/manifest artifacts. They contain no executable defaults for a specific AML module.

- Override generated placement when needed with `prepare-generator-handoff.js --module-map <json>`.
- Create six batches with `split-eligible-batches.js`.
- Execute only current-batch IDs with `auto-execute-generated.js --batch-plan <json> --batch-index <1..6>`.
- Smoke detection requires explicit `--excel` and `--specs`; it never defaults to a previous module.
- Final reports build module summaries dynamically from normalized cases.

## Batch execution

```bash
RESULTS_ROOT="results/qa-pipeline/Keyword Manager Test"
npm run qa:parse-excel -- --excel "pipeline/test-data/Milestone1/Test Cases/Keyword Manager Test.xlsx" --results-root "$RESULTS_ROOT"
npm run qa:normalize -- --validation "$RESULTS_ROOT/validation/validation-report.json" --results-root "$RESULTS_ROOT"
npm run qa:assert-normalize -- --validation "$RESULTS_ROOT/validation/validation-report.json" --normalized "$RESULTS_ROOT/normalized/test-cases.json" --excel "pipeline/test-data/Milestone1/Test Cases/Keyword Manager Test.xlsx" --delta "results/fsd-figma-pipeline/Keyword Manager Test/tc-delta-report.json"
npm run qa:split-batches -- --normalized "$RESULTS_ROOT/normalized/test-cases.json" --delta "results/fsd-figma-pipeline/Keyword Manager Test/tc-delta-report.json" --results-root "$RESULTS_ROOT" --out "$RESULTS_ROOT/batches/batch-plan.json"
npm run qa:execute-batch -- --batch-plan "$RESULTS_ROOT/batches/batch-plan.json" --batch-index 1
```

Never hand-write validation/normalized JSON. Never auto-start batch N+1 without user Yes/Proceed after batches 1–5.