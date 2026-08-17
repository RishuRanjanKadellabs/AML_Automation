---
name: qa-assertion-quality-review
description: Reviews Playwright assertions for meaning, strength, and healing regressions; blocks empty or weakened expectations and forced-healer patterns. Use in Stages 4–5 and Gate B.
---

# Assertion Quality Review

## Purpose
Ensure assertions validate business/expected outcomes and that healing never softens Excel/FSD intent.

## Inputs
- Spec assertion sites + expected results from Excel / HR case
- Optional: pre-heal vs post-heal diff

## Outputs
- Pass/fail review notes; required remediations
- `assertionsWeakened`: true | false (must be false to proceed)

## Preconditions
- Script draft exists

## Processing steps
1. Reject empty expects / placeholder comments as “done.”
2. Ensure assertions map to expected results from Excel/HR case (Acceptance Criteria + Expected Result).
3. Detect weakened assertions during healing diffs (forced healer).
4. Detect **generation smoke stubs**: Excel Test Steps are comments only; body is navigate + title/list/shell visible while Excel describes create/add/save/submit — set review **fail** / Incomplete (same severity as forced healer for Gate B).
5. Set `assertionsWeakened=true` and block Gate B / Final if any forbidden pattern is found.

## Forced healer patterns (assertionsWeakened = true)

Treat as regression if the heal:
- Removes or comments out a failing expect
- Replaces a specific outcome with a weaker generic one (e.g. field-by-name visibility → only “save succeeded” / “module loaded”)
- Adds `or` / optional paths that pass when the Excel outcome is absent
- Swaps to an unrelated POM helper that does not assert this case’s expected result
- Uses `test.skip` / empty body / over-broad matchers that hide failures

## Generation smoke-stub patterns (also block Final)

- Comment block lists Excel steps (Click Create, fill fields, Submit) but code never calls those actions
- Only asserts `pageTitle` / `templateListContainer` / “module available” for a create/add/save/submit case
- Bulk-generated identical bodies for dozens of TCs that differ only in the title string

## Validation rules
- Gate B requires meaningful assertions
- `assertionsWeakened` must remain false
- Each Critical/High Excel expected bullet should have at least one mapped assertion
- Interactive Excel steps must have matching Playwright actions

## Failure conditions
- Healing PR that removes critical expect without justification
- Forced healer detected → do not mark Verified/Final; re-heal or leave Failed/Blocked

## Example usage
```
Review assertions in newly generated missing-mandatory specs before finalizing.
After healing TC-MM-017, confirm field visibility still maps to Excel Expected Result.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Healing: `.cursor/skills/qa-self-healing-automation/SKILL.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
