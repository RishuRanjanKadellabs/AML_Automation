---
name: qa-fsd-figma-alignment
description: >-
  Aligns FSD inventory with Figma HTML inventory, records conflicts and gaps,
  and enforces FSD-wins resolution. Use after Stage 0 parse/inventory steps.
---

# FSD ↔ Figma HTML Alignment

## Purpose
Produce an alignment report before use-case design.

## Inputs
- `fsd-inventory.json`
- `html-inventory.json`
- Schema: `specs/generated/fsd-figma-pipeline/schemas/alignment-report-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/alignment-report.json`

## Resolution matrix

| Status | Resolution |
|--------|------------|
| aligned | `useFsd` (HTML may assist step wording) |
| fsdOnly | `useFsd` (keep requirement; note missing UI) |
| htmlOnly | `clarify` or `htmlAssistOnly` — never new FSD requirement |
| conflict | `useFsd` + detail describing HTML difference |

## Rules
- `fsdWins` must be `true` in every report
- Never drop FSD requirements because HTML lacks a control
- Never promote HTML-only items to required use cases without clarification

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
