# Stage 5 — Healing and Verification Prompt

Review and repair generated scripts with evidence-based, minimal fixes.

## Instructions

1. **Invoke** `@.cursor/agents/test-healer.agent.md` — **do not edit** its config.
2. Apply skills: `qa-failure-diagnosis`, `qa-self-healing-automation`,
   `qa-locator-repair-analysis`, `qa-assertion-quality-review`.
3. Classify each failure: automation / product / test-data / environment /
   requirement-ambiguity / MCP-tooling.
4. Preserve original test intent; do not weaken assertions or remove failed steps without justification.
5. Do not convert product defects into automation “passes.”
6. Maintain change log per `specs/generated/qa-pipeline/schemas/healing-result-schema.json`.
7. Re-run affected tests after each fix when execution is possible.
8. Write `results/qa-pipeline/healing/healing-report.json`.
