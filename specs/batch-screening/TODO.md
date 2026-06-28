# Batch Screening Automation — TODO / Missing Information

Last updated after FSD-wired assertion mapping and spec regeneration.

| Area | Excel IDs (examples) | Status |
|------|----------------------|--------|
| Excel → spec assertion mapping | BS-001–BS-432 | **Done** — task-scoped steps (avg ~5 steps/case); specs generated from focused Excel |
| Step scoping | All cases | **Done** — `task-step-scoper.ts` builds 3–8 steps per task; no module-wide 35-step checklist |
| Filter chip locators | Filters cases | **Done** — `.filter-chip` / `#fc-*` selectors; date preset uses `#date-dd-btn` |
| FSD section mapping | All sub-modules | **Done** — `fsd-mapper.ts` uses new `Batch Screening — …` names; `excel-fsd-context.ts` supplies catalog rules at generation |
| Grid test data | Row 1–5 | **Done** — `fixtures/batch-screening-data.json` + `openScreeningResultFromListRow` uses fixture customer names |
| Empty dataset mock | BS-271+ | **Done** — `mockEmptyMatchResults()` in setup |
| Export file verification | BS-181+ | **Partial** — `expectExportDownloadStarted()` handles click + download/toast; MIME/filename not asserted |
| Audit log UI | BS-200+, BS-351+ | **Partial** — audit assertions require prior workflow action per FSD; dedicated audit panel selector TBD |
| Pure API payloads | BS-301–330 | **Partial** — route mocks for 401/500; OpenAPI contract for request-body assertions still TBD |
| Bulk selection | BS-391+ | **Partial** — `selectBulkRecords()` + `triggerBulkDispositionAction()`; depends on row checkboxes in live UI |
| RBAC role matrix | BS-211+ | **Partial** — unauthorized cases use `mockUnauthorized()` + `expectAccessDenied()`; distinct `.env` credentials per role TBD |
| Comment modal locators | BS-091+ | **Done** — `#comment-modal`, `#modal-comment`, `.modal-textarea`; detail-page actions menu support |
| RBAC assertion mapping | BS-211+ | **Done** — unauthorized rows assert `expectAccessDenied()` only; no contradictory content checks |
| Audit prerequisite steps | BS-200+, BS-423+ | **Done** — generator injects disposition workflow before `expectAuditTrailVisible()` per FSD |
| Performance SLA | BS-371+ | **Partial** — `expectPageLoadWithinSla(3000)` with generous CI buffer |
| Watchlists / Screening tabs | TBD in Excel | UI stubs — skip when identified in Excel |
| Manual Stop tab | Batch controls | Panel content not fully explored |

Regenerate after pipeline changes:

```bash
npm run batch-screening:generate
```
