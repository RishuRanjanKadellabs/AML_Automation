# QA Automation Pipeline

Integrates Excel → Playwright automation into this repo’s existing Cursor + Playwright structure.

## Trigger

```
Process the Excel file at <file-path> through the QA automation pipeline.
```

Upstream Stage 0 (optional): FSD + Figma HTML from `pipeline/test-data/Milestone2/{FSD,Figma}/`
→ Excel in `Milestone2/Test Cases/` via `.cursor/agents/fsd-figma-pipeline.agent.md`
(process docs: `.cursor/system-context/fsd-figma-pipeline.mdc`).

## Agent

- **New (orchestration only):** `.cursor/agents/qa-automation-pipeline.agent.md`
- **Stage 0 (FSD+Figma→Excel):** `.cursor/agents/fsd-figma-pipeline.agent.md`
- **Unchanged:** `test-planner`, `test-generator`, `test-healer`, executors

## Locations

| What | Where |
|------|--------|
| Schemas, handoffs, templates | `specs/generated/qa-pipeline/` |
| Stage outputs & final report | `results/qa-pipeline/` |
| Generated tests | existing `tests/` layout |
| Skills | `.cursor/skills/qa-*` |
| Rules | `.cursor/rules/qa-automation-pipeline-*.mdc` |
| System context | `.cursor/system-context/qa-automation-pipeline.mdc` |

## Workflow

`Excel → Validate → Normalize → Execute → Generate → Heal → Report`

Generate/Heal hand off to existing agents (configs never modified).

## Run suite after generation

```bash
npm run pw:run
# or
npm run pw:run:report
```
