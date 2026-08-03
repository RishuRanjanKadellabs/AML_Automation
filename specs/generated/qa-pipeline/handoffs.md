# QA Automation Pipeline — Agent Handoffs

Orchestrator: `.cursor/agents/qa-automation-pipeline.agent.md`  
Existing agents are **invoked by handoff only** — never modified.

## Artifact roots

| Stage | Output |
|-------|--------|
| Validate | `results/qa-pipeline/validation/` |
| Normalize | `results/qa-pipeline/normalized/` |
| Execute | `results/qa-pipeline/execution/` |
| Generate | `results/qa-pipeline/generation/` + `tests/` |
| Heal | `results/qa-pipeline/healing/` |
| Report | `results/qa-pipeline/final/` |

Schemas: `specs/generated/qa-pipeline/schemas/`  
Templates: `specs/generated/qa-pipeline/templates/`

---

## Stage 1–2: Input + Validate

```json
{
  "handoff": "qa-pipeline.validate",
  "excelFilePath": "<path.xlsx>",
  "schema": "specs/generated/qa-pipeline/schemas/excel-input-schema.json",
  "output": "results/qa-pipeline/validation/validation-report.json",
  "rowStatuses": ["Valid", "Valid with warnings", "Invalid", "Requires clarification"]
}
```

Invalid rows stop before generation.

---

## Stage 3: Normalize

```json
{
  "handoff": "qa-pipeline.normalize",
  "validationReport": "results/qa-pipeline/validation/validation-report.json",
  "schema": "specs/generated/qa-pipeline/schemas/human-readable-testcase-schema.json",
  "output": "results/qa-pipeline/normalized/test-cases.json"
}
```

---

## Stage 4: Execute

```json
{
  "handoff": "qa-pipeline.execute",
  "normalizedCases": "results/qa-pipeline/normalized/test-cases.json",
  "schema": "specs/generated/qa-pipeline/schemas/execution-result-schema.json",
  "output": "results/qa-pipeline/execution/execution-report.json",
  "approvedMcpOnly": true,
  "forbidProductionByDefault": true
}
```

---

## Stage 5: Generate → `@.cursor/agents/test-generator.agent.md` (do not edit)

```json
{
  "handoff": "qa-pipeline.generate",
  "invokeExistingAgent": ".cursor/agents/test-generator.agent.md",
  "agentAtRef": "@.cursor/agents/test-generator.agent.md",
  "doNotModifyAgentConfig": true,
  "pipelineMode": "create | reconcile",
  "payload": {
    "normalizedTestCase": {},
    "testCaseId": "",
    "requirementId": null,
    "executionObservations": {},
    "framework": "Playwright + TypeScript POM",
    "reuse": [
      "tests/PageObjects/",
      "tests/objectrepositories/",
      "tests/fixtures/",
      "tests/helpers/",
      "fixtures/environments.json",
      "tests/fixtures/environments.json"
    ],
    "targetFileLocation": "tests/milestone2/...",
    "testData": {},
    "environmentRequirements": {},
    "knownConstraints": [],
    "requiredEvidence": [],
    "requiredAssertions": []
  },
  "outputManifest": "results/qa-pipeline/generation/generation-manifest.json"
}
```

### Reconcile / delta generate

When Stage 0 hands off `pipelineMode=reconcile` + `tc-delta-report.json`:

```json
{
  "handoff": "qa-pipeline.generate-reconcile",
  "pipelineMode": "reconcile",
  "tcDeltaReportPath": "results/fsd-figma-pipeline/<resultsKey>/tc-delta-report.json",
  "milestone": 1,
  "specsRoot": "tests/milestone1/",
  "generateCaseIds": ["<add+update>"],
  "retireCaseIds": ["<retire>"],
  "keepCaseIds": ["<keep>"],
  "actions": {
    "add": "append test() blocks",
    "update": "replace matching test() bodies",
    "retire": "remove matching test() blocks",
    "keep": "leave unchanged"
  }
}
```

Protected: `.cursor/agents/test-generator.agent.md`, `.github/agents/playwright-test-generator.agent.md`

---

## Per-batch Heal → `@.cursor/agents/test-healer.agent.md`

```json
{
  "handoff": "qa-pipeline.batch-heal",
  "invokeExistingAgent": ".cursor/agents/test-healer.agent.md",
  "agentAtRef": "@.cursor/agents/test-healer.agent.md",
  "batchIndex": "<1..6>",
  "maximumHealCycles": 1,
  "schema": "specs/generated/qa-pipeline/schemas/healing-result-schema.json",
  "input": {
    "generationManifest": "results/qa-pipeline/generation/generation-manifest.json",
    "failures": "<classified current-batch failures>",
    "casesSelectedForHealing": "<automation/locator/synchronization IDs only>"
  },
  "output": "results/qa-pipeline/healing/batch-<n>/healing-report.json"
}
```

Protected: `.cursor/agents/test-healer.agent.md`, `.github/agents/playwright-test-healer.agent.md`

---

## Stage 7: Report

```json
{
  "handoff": "qa-pipeline.report",
  "templates": {
    "finalReport": "specs/generated/qa-pipeline/templates/final-report.md",
    "traceability": "specs/generated/qa-pipeline/templates/traceability-matrix.md"
  },
  "outputDir": "results/qa-pipeline/final/"
}
```

Traceability: Excel file → worksheet → row → TC ID → Requirement ID → normalized case → execution → script → healing → final status
