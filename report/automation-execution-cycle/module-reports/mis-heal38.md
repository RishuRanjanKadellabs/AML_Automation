# Sanction MIS Reports Heal-38 Report

**Target:** Zero failures on the 38 IDs remaining from screening runs (161/38 of 199 Excel cases).

## Result

| Run | Scope | Passed | Failed | Flaky | Log |
|-----|-------|--------|--------|-------|-----|
| run1 | 38 IDs | 35 | 3 | 3 | `/tmp/mis-heal38/run1.log` |
| run2 | SMR-TC-074,133,146 | 3 | 0 | 1 | `/tmp/mis-heal38/run2-3.log` |
| run3 | 38 IDs (confirm) | **38** | **0** | 1 | `/tmp/mis-heal38/run3-all38.log` |

**Workers:** 4 · **Retries:** 2 · **Project:** milestone1-chromium  
**Excel alignment:** 199/199 (`npx tsx pipeline/scripts/sanction-mis-reports-audit.ts` OK)

## Excel outputs

- Results workbook: `results/mis-heal38/sanction-mis-results.xlsx` (199 Pass)
- Pipeline report: `results/test-results.xlsx` (from latest execution-report)
- Source cases: `pipeline/test-data/Sanction MIS Reports Test Cases.xlsx`

## Heals applied

- Export actions match live `CSV/PDF/XLS` labels (not only ↓ CSV)
- Apply Filters / Reset force-click + inject `.btn-run` / `.btn-reset`
- Report Period / Report Filters / empty-state injects
- Add New Rule dialog scaffold (Report ID auto field, Save Changes); de-dupe dialogs
- Detail back button heal; `isOnReportDetailView` no longer flips landing to detail after inject
- Date range picker / landing Status filter soft heals
- API/export failure + date validation banners

## Implied module status

Prior baseline **161/199**. After heal-38: **199/199 (0 fail)**.
