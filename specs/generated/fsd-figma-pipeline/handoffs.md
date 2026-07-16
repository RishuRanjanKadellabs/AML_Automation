# FSD + Figma Pipeline — Handoffs

Orchestrator: `.cursor/agents/fsd-figma-pipeline.agent.md`  
Downstream: `.cursor/agents/qa-automation-pipeline.agent.md` (unchanged)

## Roots

```
pipeline/test-data/Milestone2/FSD/
pipeline/test-data/Milestone2/Figma/
pipeline/test-data/Milestone2/Test Cases/
results/fsd-figma-pipeline/<resultsKey>/
```

## Artifact table

| Stage | Output |
|-------|--------|
| FSD parse | `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.json` |
| HTML inventory | `results/fsd-figma-pipeline/<resultsKey>/html-inventory.json` |
| Alignment | `results/fsd-figma-pipeline/<resultsKey>/alignment-report.json` |
| Use cases | `results/fsd-figma-pipeline/<resultsKey>/use-cases.json` |
| Excel | `pipeline/test-data/Milestone2/Test Cases/<OutputWorkbook.xlsx>` |
| Gate | `results/fsd-figma-pipeline/<resultsKey>/gate-excel-review.json` |
| Summary | `results/fsd-figma-pipeline/<resultsKey>/final/` |

Schemas: `specs/generated/fsd-figma-pipeline/schemas/`

---

## Stage 0 → Excel gate

```json
{
  "handoff": "fsd-figma.excel-ready",
  "fsdPath": "pipeline/test-data/Milestone2/FSD/<FsdFileName.docx>",
  "figmaPath": "pipeline/test-data/Milestone2/Figma/<FigmaFileName.html>",
  "excelPath": "pipeline/test-data/Milestone2/Test Cases/<OutputWorkbook.xlsx>",
  "resultsKey": "<resultsKey>",
  "gate": "AwaitingReview"
}
```

---

## Excel approved → QA automation pipeline

```json
{
  "handoff": "fsd-figma.to-qa-automation-pipeline",
  "invokeExistingAgent": ".cursor/agents/qa-automation-pipeline.agent.md",
  "doNotModifyAgentConfig": true,
  "trigger": "Process the Excel file at pipeline/test-data/Milestone2/Test Cases/<OutputWorkbook.xlsx> through the QA automation pipeline.",
  "excelPath": "pipeline/test-data/Milestone2/Test Cases/<OutputWorkbook.xlsx>",
  "priorityRules": {
    "fsdWins": true,
    "figmaHtmlAssistsUiNavOnly": true
  }
}
```
