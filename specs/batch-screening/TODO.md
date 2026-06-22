# Batch Screening Automation — TODO / Missing Information

Generated from Excel alignment review. Do not weaken assertions; resolve via healer or app clarification.

| Area | Excel IDs (examples) | Gap |
|------|----------------------|-----|
| Watchlists / Screening tabs | TBD in Excel | UI stubs — "available in future release"; skip or mark blocked when identified |
| Export file verification | BS-181+ | Export click automated; download MIME/filename not verified — needs `download` event handler spec |
| Audit log UI | BS-200+, BS-351+ | Excel references audit history; no dedicated audit panel mapped — needs UI selector or API contract |
| Pure API payloads | BS-301–330 | Excel references API request bodies/endpoints — need OpenAPI path or network contract for route mocks |
| Empty dataset | BS-271+ | Requires seeded empty state or API mock — `mockEmptyMatchResults()` not yet implemented |
| Bulk selection | BS-391+ | Depends on row checkboxes in UI — verify bulk toolbar exists |
| Manual Stop tab | Batch controls | Panel content not fully explored |
| RBAC role matrix | BS-211+ | Need distinct credentials per role in `fixtures/batch-screening-data.json` + `.env` |
| Performance SLA | BS-371+ | Excel expects load-time threshold — need SLA ms value from Excel or NFR doc |

Regenerate specs after `excel-intent.ts` changes: `npm run batch-screening:generate`
