---
name: qa-self-healing-automation
description: Applies minimal evidence-based fixes to generated Playwright tests, re-runs affected cases, and logs healing results without weakening assertions. Use in Stage 5.
---

# Self-Healing Automation

## Purpose
Repair automation defects while preserving intent.

## Inputs
- Failing scripts + diagnosis
- Healing-result schema

## Outputs
- Code fixes + `results/qa-pipeline/healing/healing-report.json` change log

## Preconditions
- Root cause classified
- Protected agents untouched

## Processing steps
1. Apply minimal locator/timing/navigation/data fixes.
2. Re-run affected tests.
3. Record failure, classification, files, fix, evidence, re-exec result, risks.
4. Stop if only product defect remains — log, do not weaken assertion.

## Validation rules
- No assertion weakening to force green
- No removal of failed steps without justification

## Failure conditions
- Healing without re-execution when execution was possible → incomplete

## Example usage
```
Heal locator failure in KYC module spec; re-run; append healing change log.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
