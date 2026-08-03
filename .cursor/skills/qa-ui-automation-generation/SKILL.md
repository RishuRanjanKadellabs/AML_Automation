---
name: qa-ui-automation-generation
description: Generates maintainable Playwright UI automation scripts for Clari5 AML using existing POM, fixtures, and locator priority. Use in Stage 4 for UI cases.
---

# UI Automation Generation

## Purpose
Create UI `.spec.ts` + POM/locator updates following project standards.

## Inputs
- Normalized automatable UI cases
- Discovery notes
- selector-map / existing PageObjects

## Outputs
- Specs under `tests/` per project conventions
- Manifest entries with TC ID references

## Preconditions
- Gate A passed
- Discovery complete

## Processing steps
1. Search existing POM/locators/helpers first.
2. File order: spec → locator → page object (extend BasePage).
3. Use `test-fixture` and `testData.baseUrl`.
4. Locator priority: testid → role → label → placeholder → text → CSS → XPath last.
5. Invoke existing generator MCP tools when browser evidence needed.
6. **Pack all cases for one Excel Module into a single `.spec.ts`** (append `test()` blocks). Never one file per TC.
7. **Login bypassed:** do not fill credentials or require `EMAIL`/`PASSWORD`; open modules via `baseUrl` / page-object helpers only.
8. Generate **every** eligible case for the module(s) in scope — no subset/POC cutoff.
9. Discover locators from the **live application** (MCP snapshot); Figma/Excel assist only.
10. **Implement Excel Test Steps as Playwright actions** — not comments-only. Flow/form cases must open → fill/select → primary action → assert Expected Result.
11. **Forbid smoke stubs:** navigate + `pageTitle`/`list` visible alone is Incomplete for cases whose Excel steps include create/add/save/submit/validate.
12. After writing specs, run `npm run qa:detect-smoke-stubs` — must exit 0 before Stage 5b / Done.
13. After writing the current batch, the pipeline runs only that batch and reports pre-heal pass/fail.
14. After one eligible healer cycle, the pipeline re-runs only changed IDs,
    reports post-heal counts, checkpoints, and continues to the next of six batches.

## Validation rules
- No hard-coded credentials/URLs/sleeps/empty assertions
- Include Test Case ID in test title/metadata
- One module = one spec file under `tests/milestone2/.../<feature>Tests/`
- Assertions map to Excel Expected Result / Acceptance Criteria — not only “module loaded”
- No comment-only Excel steps for interactive flows
- Manifest lists all generated TC IDs; missing eligible IDs = Incomplete

## Failure conditions
- Fabricating locators without snapshot/evidence → forbidden

## Example usage
```
Generate UI automation for eligible normalized cases reusing BasePage.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
