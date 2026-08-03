# Stage 4 — Automation Script Generation Prompt

Generate maintainable Playwright automation from validated/normalized cases.

## Instructions

1. Apply `qa-repository-framework-discovery` **before** writing any code.
2. Identify: language, runner, POM layout, fixtures, helpers, env patterns, reporting, standards.
3. Process the assigned one of six near-equal batches completely. Append to the
   existing one-per-module spec without deleting or duplicating earlier batches.
4. Reuse existing project components; do not introduce a new framework unless justified and approved.
5. **Invoke** `@.cursor/agents/test-generator.agent.md` with prepared context —
   **do not edit** that agent’s configuration file.
6. Apply skills: `qa-ui-automation-generation`, `qa-api-automation-generation` (if applicable),
   `qa-database-validation-generation` (if applicable), `qa-test-data-management`,
   `qa-automation-code-review`.
7. Each script must include Test Case ID reference, meaningful assertions, externalized data,
   tags/metadata, and requirement traceability.
8. Forbidden: hard-coded credentials/URLs, fixed sleeps, fragile selectors when stable ones exist,
   duplicate helpers, empty/placeholder assertions, fabricated locators/API contracts.
9. Update `results/qa-pipeline/generation/generation-manifest.json` with cumulative
   IDs/evidence and the current batch generated count, listing all created/modified files
   and rationale for each.
