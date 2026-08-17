---
name: qa-figma-html-inventory
description: >-
  Builds a UI/navigation inventory from Figma-exported HTML for labels, menus,
  screens, controls, and interaction flows present in that file. Required source
  for Excel Test Steps involving clicks and complete UI flows in FSD+Figma Stage 0.
  Must never override FSD business requirements or expected results. Module-agnostic:
  inventory only what this HTML contains.
---

# Figma HTML Inventory

## Purpose
Map screens, navigation paths, controls, and **click/flow sequences that exist in the named HTML** so Stage 0 Test Steps use real UI labels for **this** module/run.

## Inputs
- `resultsKey` (string) — folder name under `results/fsd-figma-pipeline/`
- HTML path: **active** (resolved) file under `pipeline/test-data/Milestone<N>/Figma/` (may be `*_New.html`)
- Optional baseline HTML sibling without `_New` for UI change notes in feature delta
- Schema: `specs/generated/fsd-figma-pipeline/schemas/html-inventory-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/html-inventory.json` (always from **active** HTML)
- Optional baseline inventory path noted for `qa-fsd-feature-delta` `uiChanges`

## Steps
1. Use the **active** HTML under `Milestone<N>/Figma/` (confirm path exists). Prefer `*_New.html` when both baseline and `_New` exist unless the user forced the non-`_New` name.
2. Extract visible labels, links, buttons, inputs, tables, tabs, modals **from this file**.
3. Build screen list + simple nav graph (menu/breadcrumb paths) in `navGraph`.
4. Document **primary interactive flows actually present** in this HTML (open control → fields → primary action label). Do not invent flows or copy names from other modules’ Figmas.
5. Emit **`compositeFlows`** for multi-hop paths discovered in this HTML:
   - Each entry: `flowId`, `flowName`, `dependsOnFlowIds`, optional `chainSteps` (ordered labels)
   - Examples: Configuration → Module → Tab; Tab A → Tab B → Save
   - Infer two-hop chains from `navGraph` when A→B and B→C both exist
6. Add `selectorHint` only when stable attributes exist (roles, text, clear classes).
7. Reuse existing `pipeline/src/*/html-inventory.ts` patterns when available for that module.
8. If a baseline HTML sibling exists, inventory it (or skim for labels/flows) so `qa-fsd-feature-delta` can populate `uiChanges` — never invent FSD features from UI-only deltas.

## Rules
- Inventory is **per-run / per-file** — different modules have different flows.
- **This Figma** is required for interactive Excel Test Steps (flows, clicks, field labels, fill order).
- FSD remains source of truth for business rules and expected results.
- Figma-only controls → escalate via alignment skill as `htmlOnly`
- Excel generation must read this inventory before drafting interactive steps.
- **`compositeFlows` + `navGraph`** feed use-case `dependsOnUseCaseIds` and audit chain coverage.

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Next: `qa-usecase-design-from-fsd` → `qa-excel-testcase-generation`
