---
name: qa-repository-framework-discovery
description: Discovers existing automation framework, language, runner, POM layout, fixtures, helpers, env patterns, and coding standards before generating tests. Use at the start of Stage 4.
---

# Repository and Framework Discovery

## Purpose
Inventory the repo so generation reuses existing patterns.

## Inputs
- Repository root

## Outputs
- Discovery notes in generation manifest (framework, paths, conventions)

## Preconditions
- Working tree accessible

## Processing steps
1. Identify Playwright + TypeScript + POM.
2. Locate PageObjects, objectrepositories, fixtures, helpers, config, reporters.
3. Read AGENTS.md and cursor rules for standards.
4. Search before creating new artifacts (Framework Reuse Rule).

## Validation rules
- Do not introduce new framework/deps/structure unless absent and justified

## Failure conditions
- Cannot identify runner → block generation

## Example usage
```
Run repository discovery and attach results to generation-manifest.json.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
