# Stage 0 Summary — {{resultsKey}}

| Field | Value |
|-------|--------|
| Results key | `{{resultsKey}}` |
| FSD | `pipeline/test-data/Milestone2/FSD/{{fsdFile}}` |
| Figma HTML | `pipeline/test-data/Milestone2/Figma/{{htmlFile}}` |
| Excel | `pipeline/test-data/Milestone2/Test Cases/{{excelFile}}` |
| Generated | `{{generatedAt}}` |
| Gate | `{{gateStatus}}` |

## Counts

| Artifact | Count |
|----------|------:|
| FSD sections | {{fsdSections}} |
| HTML screens | {{htmlScreens}} |
| Conflicts (FSD wins) | {{conflicts}} |
| Use cases | {{useCases}} |
| Excel rows | {{excelRows}} |

## Excel

`pipeline/test-data/Milestone2/Test Cases/{{excelFile}}`

## Next

1. Review Excel.
2. Reply **Approve Excel** (or **Revise** with notes).
3. On approve, agent runs QA automation pipeline on that Excel.

## Traceability start

`FSD section → use case → Excel TC ID → (pending) script`
