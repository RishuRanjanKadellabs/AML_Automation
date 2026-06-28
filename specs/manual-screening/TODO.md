# Manual Screening — Automation TODO

Source workbook: `pipeline/test-data/Manual Screening Test Cases.xlsx` (445 cases, v2 HTML + FSD aligned).

## Status (post-regeneration)

- **445 tests** generated from `Manual Screening Test Cases.xlsx`
- **420 tests** navigate via `openManualScreeningDirect` (screening modules)
- **25 tests** use `openAppHome` (Layout & Navigation only)
- Remaining `TODO:` comments are non-blocking inspect/locate steps; core flows are mapped

## Regenerate after Excel or intent changes

```bash
npm run manual-screening:generate
npm run milestone1:manual-screening:run
```

## Excel maintenance

```bash
npm run manual-screening:enhance-excel -- --validate-only
npm run manual-screening:enhance-excel
```

## Coverage aligned with v2 HTML

- Manual Screening Form (Individual / Non-Individual / Vessel)
- Start Screening → Screening Results
- Screening Results → Match Review
- Match Review tabs and disposition actions
- Entity-specific E2E flows (MS-022 / MS-023 / MS-024)
