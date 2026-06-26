# Customer 360 View — Test Plan

Generated from `pipeline/test-data/Customer 360 View.xlsx` — 370 requirements.

## Sub-module coverage

| Sub Module | Count |
| --- | --- |
| Page Framework | 9 |
| Header Strip | 9 |
| Customer Type Switching | 7 |
| Overview Tab | 30 |
| Risk Visualization | 5 |
| Relationships Tab | 18 |
| Screening Tab | 30 |
| Risk Tab | 17 |
| KYC/CDD Tab | 27 |
| Accounts Tab | 24 |
| Transactions Tab | 24 |
| Alerts Tab | 27 |
| Regulatory Reports Tab | 22 |
| KYC Gap Report Tab | 19 |
| Audit Tab | 22 |
| Global Navigation | 8 |
| Export Functionality | 10 |
| PII Masking | 4 |
| Error Handling | 8 |
| Accessibility | 7 |
| State Management | 8 |
| Global UI Consistency | 4 |
| Browser Compatibility | 3 |
| Session Management | 3 |
| Performance Validation | 5 |
| Security Validation | 5 |
| Usability Validation | 4 |
| Regression Validation | 11 |

## Artifacts

- Locators: `tests/objectrepositories/Customer360Locators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/Customer360Pages/Customer360Page.ts`
- Spec file: `tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts`
- Fixtures: `fixtures/customer-360-view-data.json`
- Generator: `pipeline/src/customer-360-view/generate-milestone.ts`
