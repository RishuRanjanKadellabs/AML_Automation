# KYC Gap Report — Review Gate

Planning artifacts are complete and ready for review.

## Deliverables

| Artifact | Path |
|----------|------|
| Full 8-section plan | [plan.md](./plan.md) |
| Detailed test cases (280) | [test-cases.md](./test-cases.md) |
| Machine manifest | [manifest.json](./manifest.json) |
| Gap matrix (280 rows) | [gap-matrix.json](./gap-matrix.json) |
| Automation feasibility | [automation-feasibility.json](./automation-feasibility.json) |
| MM-TC traceability | [traceability.json](./traceability.json) |
| Normalized requirements | [requirements-index.json](./requirements-index.json) |
| Role credentials guide | [ROLE-CREDENTIALS.md](./ROLE-CREDENTIALS.md) |

## Framework artifacts (ready, not yet wired to specs)

| Artifact | Path |
|----------|------|
| Locators | `tests/objectrepositories/KycGapReportLocators.ts` |
| Page Object | `tests/milestone1/pages/KYCModule/KYCGapReportPages/KycGapReportPage.ts` |
| Spec file | `tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts` (280 tests) |
| Run command | `npm run milestone1:kyc-gap-report:run` |
| Test data fixture | `fixtures/kyc-gap-report-data.json` |

## Before generating Playwright specs

1. Review [plan.md](./plan.md) — especially gap analysis assumptions and automation feasibility
2. Confirm role credentials in `.env` per [ROLE-CREDENTIALS.md](./ROLE-CREDENTIALS.md)
3. Approve spec generation:

```bash
npm run kyc-gap-report:plan          # Regenerate planning artifacts only
npm run kyc-gap-report:generate      # Generate specs (after approval)
```

## Coverage summary

- **280** KGR requirements from Excel
- **51** KGR cases with partial overlap to MM-TC-146–170 (25 MM-TC scenarios)
- **229** net-new atomic test cases for dedicated KGR suite
- **~270** automation candidates, **~10** manual-only
