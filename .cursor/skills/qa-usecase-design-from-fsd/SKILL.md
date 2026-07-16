---
name: qa-usecase-design-from-fsd
description: >-
  Designs positive/negative/boundary/exception use cases strictly from FSD
  inventory, attaching navigation/UI step assists from Figma HTML inventory.
  Use in FSD+Figma Stage 0 after alignment.
---

# Use Case Design from FSD

## Purpose
Produce testable use cases with FSD traceability.

## Inputs
- `fsd-inventory.json` (required)
- `alignment-report.json` (required)
- `html-inventory.json` (optional assist)
- Schema: `specs/generated/fsd-figma-pipeline/schemas/use-case-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/use-cases.json`

## Steps
1. For each FSD section/requirement in scope, draft use cases only when FSD supports them.
2. Classify design type: positive / negative / boundary / exception / security (only if FSD supports).
3. Attach UI navigation wording from HTML inventory where helpful; mark `uiSource`.
4. Every use case must list ≥1 `fsdSectionIds`.
5. Skip or mark clarification for `htmlOnly` alignment items unless user expands scope.

## Must not
- Invent scenarios with no FSD backing
- Copy Figma marketing/prototype text as business expected results over FSD

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Next: `qa-excel-testcase-generation`
