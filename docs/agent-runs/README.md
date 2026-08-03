# Agent run DOCX reports

Every agent invocation produces a **high-level Word summary** (`.docx`) stored under `docs/agent-runs/<agent-slug>/`.

These documents are meant for stakeholders who want a readable record of what an agent did — test cases picked, executed, pass/fail counts, status changes, artifacts written — without opening JSON logs or spreadsheets.

## Output layout

```
docs/agent-runs/
├── README.md
├── latest-manifest.json
├── defect-regression/          ← auto on qa:defect-regression
├── execute-raise-defects/      ← auto on qa:execute-raise-defects
├── qa-automation-pipeline/     ← auto on qa:verify-completion
├── fsd-figma-pipeline/         ← auto on fsd:coverage-report
├── fsd-excel-coverage-audit/   ← auto on fsd:audit-report
├── test-generator/             ← npm run docs:agent-run:generator (after each batch)
└── test-healer/                ← npm run docs:agent-run:healer (after heal + verify)
```

## Automatic vs one-command generation

| Agent | When DOCX is written | Command / hook |
|-------|----------------------|----------------|
| **defect-regression** | Auto after run | `npm run qa:defect-regression` |
| **execute-raise-defects** | Auto on `qa:run-module` / `qa:execute-raise-defects` |
| **Milestone module runs** | Auto via `pipeline-reporter.ts` → `finalize-module-run.cjs` (`milestone:run`, direct Playwright under `tests/milestoneN/`) |
| **qa-automation-pipeline** | Auto after gate | `npm run qa:verify-completion` |
| **fsd-figma-pipeline** | Auto after coverage report | `npm run fsd:coverage-report -- --results-key "<module>"` |
| **fsd-excel-coverage-audit** | Auto after audit report | `npm run fsd:audit-report -- --results-key "<module>"` |
| **test-generator** | End of batch generation | `npm run docs:agent-run:generator -- --results-root "<resultsRoot>" --batch <N>` |
| **test-healer** | After heal + verify | `npm run docs:agent-run:healer -- --results-root "<resultsRoot>" --batch <N>` |

Generic fallback (custom payload JSON):

```bash
npm run docs:agent-run -- --agent <slug> --payload <path-to-json>
```

Build from artifacts without hand-written JSON:

```bash
npm run docs:agent-run -- --agent qa-automation-pipeline --gate results/qa-pipeline/final/pipeline-completion-gate.json
npm run docs:agent-run -- --agent fsd-figma-pipeline --results-key "Keyword Manager Test"
npm run docs:agent-run -- --agent fsd-excel-coverage-audit --results-key "Keyword Manager Test"
npm run docs:agent-run -- --agent test-generator --results-root "results/qa-pipeline/My Module" --batch 1
```

## What each DOCX contains

| Agent | Key sections |
|-------|----------------|
| defect-regression | Resolved defects from Google (ID + description), regression cases executed, Closed/Reopened counts |
| execute-raise-defects | Spec scope, failures → defects (ID, severity, priority), Google sync status |
| qa-automation-pipeline | Excel path, live UI %, batch pass/fail table, remaining failures, gate status |
| fsd-figma-pipeline | FSD coverage %, feature/TC delta, module & feature coverage tables |
| fsd-excel-coverage-audit | Independent audit verdict, overall + **feature-wise** coverage % (Actual/Req/Flow/UC), design-type rollups, uncovered flows/requirements |
| test-generator | Batch scope, case IDs, live routes validated, target specs |
| test-healer | Cases healed, classification, files changed, post-heal pass/fail |

## Agent responsibility

Every standard-pipeline agent run **must** produce a DOCX before declaring Done. Auto-hooks cover regression, execute-raise, QA gate, and FSD coverage. Generator and healer call `docs:agent-run:generator|healer` at end of each batch.

If DOCX generation fails, report **Incomplete** and include the error — do not claim the run is fully documented.
