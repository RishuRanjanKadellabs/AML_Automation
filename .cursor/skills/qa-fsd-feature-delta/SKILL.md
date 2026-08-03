---
name: qa-fsd-feature-delta
description: >-
  Compares baseline vs revised FSD inventories (and optional Figma HTML
  inventories) when Stage 0 uses *_New sources or a prior inventory exists.
  Emits feature-delta-report.json listing features/requirements added, removed,
  or updated. Use after S0.1 FSD parse (and S0.2 when baseline Figma exists),
  before or alongside Excel reconcile.
---

# FSD / Figma Feature Delta

## Purpose

Tell reviewers **what changed in the product spec** between the previous FSD
(and optionally Figma) and the active revised sources — especially when files
are named with `_New` before the extension.

This is **not** a substitute for `tc-delta-report.json` (Excel TC
add/update/retire). Feature delta explains *why* TCs change; TC delta drives
Excel + Playwright reconcile.

## When to run

| Condition | Action |
|-----------|--------|
| Active FSD or Figma path contains `_New` before extension | **Required** — resolve baseline sibling and emit report |
| Baseline FSD file or `fsd-inventory.baseline.json` exists | **Required** — compare and emit report |
| First create with no baseline | Emit report with `summary.baselineAvailable=false`, empty change lists, note that full inventory is new |

## Inputs

- Active: `fsd-inventory.json` (from this run’s active FSD)
- Baseline (prefer in order):
  1. Parse sibling baseline `.docx` (strip `_New` from active stem) → write `fsd-inventory.baseline.json`
  2. Else prior `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.json` from an earlier run (copy aside before overwrite if needed)
- Optional Figma: active `html-inventory.json` vs baseline HTML inventory
- Schema: `specs/generated/fsd-figma-pipeline/schemas/feature-delta-report-schema.json`

## Outputs

- `results/fsd-figma-pipeline/<resultsKey>/feature-delta-report.json` (**required** whenever Stage 0 runs with `_New` or a baseline)
- Optional: `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.baseline.json`

## `_New` path resolution (shared with agent)

```
activeStem = filename without extension
if activeStem ends with "_New":
  baselineStem = activeStem without trailing "_New"
  baselineCandidate = same folder + baselineStem + same extension
  if baselineCandidate exists → baseline path
  else → baseline null (still parse active; note missing baseline)
Prefer active *_New over non-_New when both exist and user did not force a non-_New name.
```

Examples:

| Active | Baseline sibling |
|--------|------------------|
| `Ignore_Word_Manager_FSD_New.docx` | `Ignore_Word_Manager_FSD.docx` |
| `ignore_words_v3_New.html` | `ignore_words_v3.html` |

## Comparison rules

1. **Feature identity** — match primarily by `sectionId`; if IDs differ across versions, fall back to normalized section `title` (case-insensitive, collapse whitespace).
2. **featuresAdded** — in active inventory, no baseline match.
3. **featuresRemoved** — in baseline, no active match.
4. **featuresUpdated** — matched section where any of: title, summary, requirement set (add/remove/text change), screens, actors, or in-scope flag differs. Record `changedAspects` and linked `requirementIds`.
5. **featuresUnchanged** — matched with no material requirement/text drift.
6. **Requirement grain** — also list `requirementsAdded` / `Removed` / `Updated` when requirementIds or text differ inside a section (even if the section remains).
7. **Do not invent** — only compare extracted inventory fields; unclear matches → `notes` + conservative `updated` with reason.
8. **Figma UI (optional)** — when baseline HTML inventory exists, populate `uiChanges` (controls/flows added/removed/relabeled). UI-only changes must **not** invent FSD features; they inform Test Steps updates.

## Link to Excel / specs

Populate optional `tcImpactHints`:

- Added features → expect new Excel TCs (`add`)
- Removed features → expect orphan TC retire
- Updated features → expect Excel column revision (`update`)

Authoritative lists remain in `tc-delta-report.json` after reconcile. On **Approve Excel**, `qa-automation-pipeline` reconcile updates Playwright specs for add+update and removes retire IDs.

## Display (mandatory in Stage 0 delivery reply)

When `baselineAvailable` is true (or `_New` was used), include:

```
### Feature changes (FSD)
| Change | Count | Features (sample) |
|--------|------:|-------------------|
| Added | <n> | ... |
| Removed | <n> | ... |
| Updated | <n> | ... |
| Unchanged | <n> | (optional) |

### UI changes (Figma)   # when uiChanges present
- Controls/flows added: ...
- Controls/flows removed: ...
- Relabeled: ...
```

Mirror the same block in `final/stage0-summary.md`.

## Must not

- Skip the report when `_New` FSD/Figma is the active input
- Treat feature delta alone as Excel approval or script generation
- Promote Figma-only UI items to new FSD features
- Soften or hide removals — list them; Excel retire still needs Approve

## Related

- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Excel TC delta: `qa-excel-testcase-generation`
- Schema: `feature-delta-report-schema.json`
