# Stage 5 — Healing and Verification Prompt

Review and repair generated scripts with evidence-based, minimal fixes.

## Instructions

1. Accept only a `qa-pipeline.batch-heal` handoff for the current batch.
2. **Invoke** `@.cursor/agents/test-healer.agent.md` exactly once.
3. Apply skills: `qa-failure-diagnosis`, `qa-self-healing-automation`,
   `qa-locator-repair-analysis`, `qa-assertion-quality-review`.
4. Classify each failure: automation / product / test-data / environment /
   requirement-ambiguity / MCP-tooling.
5. Heal only automation-defect / locator-issue / synchronization-issue cases.
6. Preserve original test intent; do not weaken assertions or remove failed steps without justification.
7. Do not convert product defects into automation “passes.”
8. Maintain change log per `specs/generated/qa-pipeline/schemas/healing-result-schema.json`.
9. Re-run all changed IDs once after the single heal pass; do not loop.
10. Write `results/qa-pipeline/healing/batch-<n>/healing-report.json`.
