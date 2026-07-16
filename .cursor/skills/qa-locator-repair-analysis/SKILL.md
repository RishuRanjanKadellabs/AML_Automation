---
name: qa-locator-repair-analysis
description: Analyzes and repairs fragile Playwright locators using AGENTS.md locator priority and selector-map updates. Use during Stage 5 healing for selector failures.
---

# Locator Repair Analysis

## Purpose
Replace brittle selectors with stable alternatives.

## Inputs
- Failure DOM/snapshot, current locator file, selector-map.json

## Outputs
- Updated locator / selector-map entries (not raw selectors in specs)

## Preconditions
- Snapshot or generate_locator evidence available when possible

## Processing steps
1. Prefer data-testid → role → label → placeholder → text → stable CSS.
2. Avoid Elementor hash classes.
3. Update objectrepositories / selector-map; keep specs clean.

## Validation rules
- No fabricated locators without evidence

## Failure conditions
- Specs gain raw hardcoded fragile CSS when POM exists

## Example usage
```
Repair stale sidebar locator using browser_generate_locator evidence.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
