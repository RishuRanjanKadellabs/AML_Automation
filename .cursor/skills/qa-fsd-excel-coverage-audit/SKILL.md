---
name: qa-fsd-excel-coverage-audit
description: >-
  Independently audits Excel test cases against FSD requirements, use cases, and
  Figma UI inventory. Does not trust writer-reported coverage-matrix.json alone.
  Reports per-feature gaps, orphan TCs, Figma control gaps, and quality issues.
  Use after Stage 0 Excel write or before Approve Excel.
---

# FSD + Figma Excel Coverage Audit

## Purpose

Provide an **independent second opinion** on whether Excel test cases truly cover
every in-scope FSD requirement and expected use case — and whether Figma
interactive controls appear in Test Steps.

This audit **does not trust** `coverage-matrix.json` from the writing agent.
It re-derives mappings mechanically, then applies semantic review per feature.

## When to use

- After `fsd-figma-pipeline` writes or reconciles Excel
- Before user replies **Approve Excel**
- When writer reported 100% but you suspect gaps
- After manual Excel edits

## Inputs

| Input | Required | Notes |
|-------|----------|-------|
| Excel path | **Yes** | Under `pipeline/test-data/Milestone<N>/Test Cases/` |
| Milestone | No | Default 2 |
| FSD path | **Yes** if no inventory | Active / `*_New` preferred |
| Figma path | No | For UI control cross-check |
| Stage 0 dir | No | `results/fsd-figma-pipeline/<resultsKey>/` when available |

## Outputs

- `results/fsd-coverage-audit/<resultsKey>/coverage-audit-report.json`
- `results/fsd-coverage-audit/<resultsKey>/final/coverage-audit-report.md`
- `docs/agent-runs/fsd-excel-coverage-audit/*.docx`

Schema: `specs/generated/fsd-figma-pipeline/schemas/coverage-audit-report-schema.json`

## Workflow

1. Resolve Excel, FSD, Figma paths (same rules as Stage 0 — prefer `*_New`).
2. Ensure `fsd-inventory.json` exists:
   - Reuse from `results/fsd-figma-pipeline/<resultsKey>/` when present
   - Otherwise parse FSD with skill `qa-fsd-document-parsing`
3. Ensure `html-inventory.json` when Figma provided:
   - Reuse Stage 0 inventory or build with `qa-figma-html-inventory`
4. Run mechanical audit:

```bash
npm run fsd:audit-coverage -- \
  --excel "pipeline/test-data/Milestone<N>/Test Cases/<Workbook>.xlsx" \
  --milestone <N> \
  --fsd "pipeline/test-data/Milestone<N>/FSD/<Fsd>.docx" \
  --figma "pipeline/test-data/Milestone<N>/Figma/<Figma>.html" \
  --stage0-dir "results/fsd-figma-pipeline/<resultsKey>"
```

5. **Semantic review (mandatory):** For each feature in `byFeature` where
   mechanical coverage is <100% or match method is `text-overlap` only:
   - Read FSD section requirements
   - Read mapped Excel rows
   - Confirm intent is truly covered or mark gap with `semanticNotes`
6. Update `coverage-audit-report.json`:
   - Set `auditMode` to `mechanical+semantic`
   - Adjust `uncoveredRequirementIds`, `verdict`, feature rows
7. Render report + DOCX:

```bash
npm run fsd:audit-report -- --results-key "<resultsKey>"
```

8. Paste full markdown into user reply. Include DOCX path.

## Verdict rules

| Verdict | Meaning |
|---------|---------|
| **Pass** | **actualCoveragePct === 100** — requirements, flows (positive+negative), and use cases covered |
| **Fail** | Uncovered requirements, uncovered flows, or **actualCoveragePct < 100** |
| **ReviewNeeded** | Composite coverage met but orphans or quality warnings remain |

## Actual coverage formula

```
actualCoveragePct =
  35% × requirementCoveragePct +
  30% × flowCoveragePct +
  15% × chainCoveragePct +
  20% × useCaseCoveragePct
```

Flow coverage: each discovered flow must have Excel TCs matching **required design types** (positive/negative/etc.).

**Chain coverage:** flows with `dependsOnFlowIds` must also have prerequisite evidence in Excel **Preconditions** or **Test Steps** — either in the same TC (full chain) or via covered dependency flows plus explicit preconditions.

Dependency inference sources:
- `use-cases.json` → `dependsOnUseCaseIds` + precondition text overlap
- `html-inventory.json` → `compositeFlows` + auto-inferred nav chains from `navGraph`
- Figma actions (Save/Submit) → depend on tab/module navigation flows
- FSD negative flows → depend on section happy-path flow

## Must do

- Compare writer `coverage-matrix.json` claim vs audit (`coverageClaimGap`)
- Report **per-feature** table with uncovered requirement IDs
- List orphan Excel TCs and use cases without TCs
- Flag placeholder/bundled test cases
- Cross-check Figma button/link/tab labels against Test Steps when inventory exists

## Must not

- Trust writer-reported 100% without running this audit when user asks for verification
- Mark **Pass** while `uncoveredRequirementIds` is non-empty
- Skip semantic review for weak text-overlap matches
- Modify Excel — report gaps only (user or `fsd-figma-pipeline` fixes)

## Related

- Agent: `.cursor/agents/fsd-excel-coverage-audit.agent.md`
- Writer agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Scripts: `audit-fsd-excel-coverage.cjs`, `render-coverage-audit-report.cjs`
