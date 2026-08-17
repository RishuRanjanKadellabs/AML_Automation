# Stage 0 Summary — {{resultsKey}}

| Field | Value |
|-------|--------|
| Results key | `{{resultsKey}}` |
| Milestone | `{{milestone}}` |
| Excel mode | `{{excelMode}}` |
| Active FSD | `pipeline/test-data/Milestone{{milestone}}/FSD/{{fsdFile}}` |
| Baseline FSD | `{{baselineFsdFile}}` |
| Active Figma HTML | `pipeline/test-data/Milestone{{milestone}}/Figma/{{htmlFile}}` |
| Baseline Figma | `{{baselineHtmlFile}}` |
| Excel | `pipeline/test-data/Milestone{{milestone}}/Test Cases/{{excelFile}}` |
| Generated | `{{generatedAt}}` |
| Gate | `{{gateStatus}}` |
| Feature delta | `results/fsd-figma-pipeline/{{resultsKey}}/feature-delta-report.json` |
| TC delta | `results/fsd-figma-pipeline/{{resultsKey}}/tc-delta-report.json` |

## Feature changes (FSD)

Show each feature with **TCs** and **Coverage %** (from `coverage-matrix.json` `byFeature`). Out-of-scope meta: `TCs=0`, Coverage=`n/a`.

| Change | Section | Feature | Reqs | TCs | Coverage |
|--------|---------|---------|------|----:|----------|
| Added / Removed / Updated | … | … | … | … | … |

| Change | Count |
|--------|------:|
| Added | {{featuresAdded}} |
| Removed | {{featuresRemoved}} |
| Updated | {{featuresUpdated}} |
| Unchanged | {{featuresUnchanged}} |

## Features covered (by FSD section)

| Feature | Section | Reqs | TCs | Coverage |
|---------|---------|------|----:|----------|
| … | … | … | … | …% |

## Counts

| Artifact | Count |
|----------|------:|
| FSD sections | {{fsdSections}} |
| HTML screens | {{htmlScreens}} |
| Conflicts (FSD wins) | {{conflicts}} |
| Use cases | {{useCases}} |
| Excel rows | {{excelRows}} |
| Delta add | {{deltaAdd}} |
| Delta update | {{deltaUpdate}} |
| Delta retire | {{deltaRetire}} |
| Delta keep | {{deltaKeep}} |

## Excel

`pipeline/test-data/Milestone{{milestone}}/Test Cases/{{excelFile}}`

## Next

1. Review Excel, **feature delta** (added/removed/updated features), and TC delta (especially retire IDs when mode is reconcile).
2. Reply **Approve Excel** (or **Revise** with notes).
3. On approve, agent runs QA automation pipeline (`create` = full generate; `reconcile` = delta sync → update specs).

## Traceability start

`FSD section → use case → Excel TC ID → (pending) script`
