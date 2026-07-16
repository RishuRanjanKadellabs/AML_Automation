---
name: qa-mcp-based-test-execution
description: Executes or validates human-readable AML test cases using approved Cursor MCP tools only, recording evidence-based statuses. Use in Stage 3.
---

# MCP-Based Test Execution

## Purpose
Run exploratory/validation execution via approved MCP tools.

## Inputs
- Normalized cases
- MCP tool catalog

## Outputs
- Per-case execution results per execution-result-schema

## Preconditions
- Inspect MCP capabilities first
- Env safety confirmed (non-prod default)

## Processing steps
1. List approved MCP tools.
2. Execute steps with browser_* / test_* as appropriate.
3. Compare expected vs actual.
4. Set status; if tooling/env missing → `blocked` with reason.

## Validation rules
- `executed: true` only with evidence
- No simulated results as real

## Failure conditions
- Unapproved tool usage attempt → abort

## Example usage
```
Execute normalized smoke cases via Playwright MCP; block others lacking data.
```

## Related
- Pipeline: `.cursor/agents/qa-automation-pipeline.agent.md`
- Contracts: `specs/generated/qa-pipeline/schemas/`
- Guardrails: `.cursor/rules/qa-automation-pipeline-*.mdc`
