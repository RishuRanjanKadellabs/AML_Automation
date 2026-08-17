# Stage 7 — Final Packaging Prompt

Produce the consolidated QA AI-SDLC output pack.

## Instructions

1. Apply skills: `qa-execution-report-generation`, `qa-traceability-report-generation`.
2. Fill templates:
   - `specs/generated/qa-pipeline/templates/final-report.md` → `results/qa-pipeline/final/final-report.md`
   - `specs/generated/qa-pipeline/templates/traceability-matrix.md` → `results/qa-pipeline/final/traceability-matrix.md`
3. Emit:
   - assumptions list
   - blocked test cases
   - unresolved defects/ambiguities
   - files created or modified summary
   - suite execution instructions
4. Ensure matrix maps:
   Excel row → Test Case ID → Requirement ID → Human-readable case → Script → Execution → Healing
5. Confirm quality gates for “final” designation; otherwise mark pipeline `blocked`/`partial` with reasons.
