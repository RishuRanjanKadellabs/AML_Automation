---
name: qa-failure-diagnosis
description: Diagnoses automation failures and classifies root cause as automation, product, test-data, environment, requirement ambiguity, or MCP/tooling. Use in Stage 5.
---

# Failure Diagnosis

## Purpose
Classify failures before changing code.

## Inputs
- Error output, traces, snapshots, expected vs actual

## Outputs
- Root-cause classification + diagnosis notes

## Preconditions
- Failure observed with logs/evidence

## Processing steps
1. Reproduce or inspect failure evidence.
2. Classify into allowed enum.
3. Recommend fix owner (automation vs product vs data/env).

## Validation rules
- Do not relabel product defects as automation without evidence

## Failure conditions
- Fix applied without classification

## Example usage
```
Diagnose failing customer-360 spec and classify root cause before healing.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
