# Manual Screening Automation — TODO / Missing Information

Generated from Excel alignment review. Generator MCP explored `/screening/manual-screening` on 2026-06-17.

| Area | Excel IDs (examples) | Gap |
|------|----------------------|-----|
| Bulk upload file fixtures | MS-013-* | Excel references CSV/XLS/XLSX upload — need sample files in `pipeline/test-data/` for real upload assertions |
| File size boundary | MS-013-* | Exact max MB value not in parsed Excel rows — `uploadBulkFilePlaceholder()` used |
| Logout flow | MS-020-26 | Excel references logout clearing form — logout UI selector not documented |
| Export download verification | MS-019-* | Export click automated; download MIME/filename not verified |
| Pixel-perfect responsive | MS-003-* | Excel expects resize behavior — viewport set to 1024px; exact breakpoints not in Excel |
| Browser compatibility matrix | Results Table | Excel lists browsers — not executed cross-browser in milestone1 project |
| MIME vs extension mismatch | Bulk Upload Validation | Needs corrupt fixture files |
| Score boundary exact UI class | MS-019-* | Score band CSS tokens not specified in Excel |

Regenerate specs after `excel-intent.ts` changes: `npm run manual-screening:generate`
