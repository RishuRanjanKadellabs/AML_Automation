---
name: qa-automation-feasibility-assessment
description: Assesses whether Clari5 AML test cases are automatable, partial, manual-only, or blocked, with rationale and blockers. Use in Stage 2 before Gate A.
---

# Automation Feasibility Assessment

## Purpose
Rate automation feasibility honestly.

## Inputs
- Normalized case + known framework capabilities

## Outputs
- `automationFeasibility` object on each case

## Preconditions
- Framework discovery notes available or default Playwright UI known

## Processing steps
1. Rate: automatable | partial | manual-only | blocked | needs-clarification.
2. List blockers (CAPTCHA, physical token, production-only data, missing expected).
3. Recommend generation-only when env cannot run.

## Validation rules
- Manual-only cases must not be claimed as generated executables without caveats

## Failure conditions
- Feasibility omitted on cases entering Stage 4

## Example usage
```
Assess feasibility for all normalized cases before Gate A.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
