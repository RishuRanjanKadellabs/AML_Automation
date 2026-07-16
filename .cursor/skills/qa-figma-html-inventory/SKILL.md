---
name: qa-figma-html-inventory
description: >-
  Builds a UI/navigation inventory from Figma-exported HTML for labels, menus,
  screens, and controls. Use in FSD+Figma Stage 0; assists steps/locators only
  and must never override FSD requirements.
---

# Figma HTML Inventory

## Purpose
Map screens, navigation paths, and controls from Figma HTML exports.

## Inputs
- `resultsKey` (string) — folder name under `results/fsd-figma-pipeline/`
- HTML path(s): user-named file(s) under `pipeline/test-data/Milestone2/Figma/`
- Schema: `specs/generated/fsd-figma-pipeline/schemas/html-inventory-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/html-inventory.json`

## Steps
1. Use only the HTML file(s) named by the user under `Milestone2/Figma/` (confirm path exists).
2. Extract visible labels, links, buttons, inputs, tables, tabs, modals.
3. Build screen list + simple nav graph (menu/breadcrumb paths).
4. Add `selectorHint` only when stable attributes exist (roles, text, clear classes).
5. Reuse existing `pipeline/src/*/html-inventory.ts` patterns when available for that module.

## Rules
- HTML assists UI/nav only
- Do not invent business rules from prototype copy
- Figma-only controls → escalate via alignment skill as `htmlOnly`

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
