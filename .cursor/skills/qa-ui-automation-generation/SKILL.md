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

## Validation rules
- No hard-coded credentials/URLs/sleeps/empty assertions
- Include Test Case ID in test title/metadata

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
