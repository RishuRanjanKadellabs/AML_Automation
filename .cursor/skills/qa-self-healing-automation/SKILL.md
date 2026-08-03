---
name: qa-self-healing-automation
description: Applies minimal evidence-based fixes to generated Playwright tests, re-runs affected cases, and logs healing results without weakening assertions. Use in Stage 5. Never apply a forced healer.
---

# Self-Healing Automation

## Purpose
Repair automation defects while preserving intent.

## Inputs
- Failing scripts + diagnosis
- Healing-result schema
- Excel / human-readable expected results (source of truth for assertion strength)

## Outputs
- Code fixes + `results/qa-pipeline/healing/healing-report.json` change log

## Preconditions
- Root cause classified
- Protected agents untouched

## Processing steps
1. Apply **one** heal cycle of minimal locator/timing/navigation fixes (automation defects only).
2. Re-run affected healed tests once to confirm the fix.
3. Record failure, classification, files, fix, evidence, re-exec result, risks.
4. If root cause is product / data / env / requirement → leave Failed/Blocked; **do not** soften asserts or keep healing that case.
5. After the heal cycle: run `qa-assertion-quality-review`. If `assertionsWeakened=true` → reverse forced changes; healing incomplete.
6. In the six-batch pipeline, re-run only the changed/healed IDs once → report
   batch post-heal Passed/Failed/Blocked → **STOP**. Do not start another heal
   loop for that batch because failures remain.
7. Healing reports must **never** use stage/label **Simulated**. Only real `test_run` / Playwright evidence. Fake 100% pass after simulated heal → Incomplete.
8. **Success of healing ≠ 100% green.** Remaining honest failures are expected when the product does not match Excel.

## Forced healer — FORBIDDEN

A heal is **forced** (reject / reverse) if it makes the test green by reducing Excel/FSD intent.

### Forbidden
- Remove, comment out, or skip failing steps/assertions to pass
- Replace a strong expected outcome with a weaker one (e.g. “field visible by name” → only “save succeeded”)
- Use `or` / optional fallbacks that allow empty/wrong data to pass when Excel requires a specific outcome
- Swap to an unrelated POM helper that doesn’t assert the case’s Acceptance Criteria / Expected Result
- Soft-pass on product/test-data/env defects (must stay Failed/Blocked + reason)
- `test.skip`, `test.fixme`, empty body, or broader regex that hides regression
- Loop heal→run→heal until the suite is green (hides product defects)
- Claim Done only when Failed = 0

### Allowed
- Fix locator / wait / navigation / POM method wiring while **keeping the same expected result**
- Add a stronger assertion that still maps 1:1 to Excel expected result
- Leave failing if root cause is product, data, or env — report, don’t soften
- Stop after one heal cycle + final run with remaining failures listed

## Validation rules
- No assertion weakening to force green
- No removal of failed steps without justification
- `assertionsWeakened` must remain false (see `qa-assertion-quality-review`)

## Failure conditions
- Healing without re-execution when execution was possible → incomplete
- Forced healer patterns above → reject; re-heal or leave Failed/Blocked

## Example usage
```
Heal locator failure in KYC module spec; re-run; append healing change log.
Do not drop “custom field visible by name” to only assert save success.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Assertion gate: `.cursor/skills/qa-assertion-quality-review/SKILL.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
