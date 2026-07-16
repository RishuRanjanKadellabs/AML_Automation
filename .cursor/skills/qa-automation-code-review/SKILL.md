---
name: qa-automation-code-review
description: Reviews generated Playwright automation for standards compliance, reuse, independence, and security before final designation. Use at end of Stage 4 and Gate B.
---

# Automation Code Review

## Purpose
Code-review generated automation against repo rules.

## Inputs
- Diff/file list from generation-manifest

## Outputs
- Review findings (critical/suggestion)

## Preconditions
- Generated files listed

## Processing steps
1. Check fixture imports, POM usage, naming, no skip/only, no sleeps.
2. Check reuse vs duplicates.
3. Check secrets and hardcoded URLs.
4. Confirm TC ID traceability comments/titles.

## Validation rules
- Critical findings block Gate B

## Failure conditions
- Unreviewed scripts marked final

## Example usage
```
Review generation-manifest files against AGENTS.md standards.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
