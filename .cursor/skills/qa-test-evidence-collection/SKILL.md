---
name: qa-test-evidence-collection
description: Collects and indexes screenshots, logs, traces, MCP transcripts, and diagnostic artifacts for QA AI-SDLC execution and healing. Use in Stages 3 and 5.
---

# Test Evidence Collection

## Purpose
Attach verifiable evidence to results without leaking secrets.

## Inputs
- Execution/healing session artifacts

## Outputs
- Evidence entries under `results/qa-pipeline/execution/` or healing
- Masked paths/references in reports

## Preconditions
- A run or MCP session occurred (or blocked reason recorded)

## Processing steps
1. Capture available screenshots/logs/traces/API snippets.
2. Mask credentials/PII/AML-sensitive values.
3. Link evidence to testCaseId + stepNumber.

## Validation rules
- Reports must not contain raw secrets

## Failure conditions
- Claiming pass without evidence artifact

## Example usage
```
Attach MCP screenshot references to execution-report.json for TC-AML-003.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
