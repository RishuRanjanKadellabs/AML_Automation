# Customer 360 View — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Customer_360_View.xlsx` — 370 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Customer_360_View.xlsx` |
| Total requirements | 370 |
| ID range | C360-TC-001 → C360-TC-370 |
| Route | `/kyc/customer-360` |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Page Framework | 9 | C360-TC-001–C360-TC-009 |
| Header Strip | 9 | C360-TC-010–C360-TC-018 |
| Customer Type Switching | 7 | C360-TC-019–C360-TC-025 |
| Overview Tab | 30 | C360-TC-026–C360-TC-060 |
| Risk Visualization | 5 | C360-TC-038–C360-TC-042 |
| Relationships Tab | 18 | C360-TC-061–C360-TC-078 |
| Screening Tab | 30 | C360-TC-079–C360-TC-108 |
| Risk Tab | 17 | C360-TC-109–C360-TC-125 |
| KYC/CDD Tab | 27 | C360-TC-126–C360-TC-152 |
| Accounts Tab | 24 | C360-TC-153–C360-TC-176 |
| Transactions Tab | 24 | C360-TC-177–C360-TC-200 |
| Alerts Tab | 27 | C360-TC-201–C360-TC-227 |
| Regulatory Reports Tab | 22 | C360-TC-228–C360-TC-249 |
| KYC Gap Report Tab | 19 | C360-TC-250–C360-TC-268 |
| Audit Tab | 22 | C360-TC-269–C360-TC-290 |
| Global Navigation | 8 | C360-TC-291–C360-TC-298 |
| Export Functionality | 10 | C360-TC-299–C360-TC-308 |
| PII Masking | 4 | C360-TC-309–C360-TC-312 |
| Error Handling | 8 | C360-TC-313–C360-TC-320 |
| Accessibility | 7 | C360-TC-321–C360-TC-327 |
| State Management | 8 | C360-TC-328–C360-TC-335 |
| Global UI Consistency | 4 | C360-TC-336–C360-TC-339 |
| Browser Compatibility | 3 | C360-TC-340–C360-TC-342 |
| Session Management | 3 | C360-TC-343–C360-TC-345 |
| Performance Validation | 5 | C360-TC-346–C360-TC-350 |
| Security Validation | 5 | C360-TC-351–C360-TC-355 |
| Usability Validation | 4 | C360-TC-356–C360-TC-359 |
| Regression Validation | 11 | C360-TC-360–C360-TC-370 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 370 |
| Functional areas (sub-modules) | 28 |
| Automation candidates | 362 |
| Manual-only scenarios | 8 |

## 3. Playwright POM Planning

- Locators: `tests/objectrepositories/Customer360Locators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/Customer360Pages/Customer360Page.ts`
- Spec file: `tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts`
- Fixtures: `fixtures/customer-360-view-data.json`
- Generator: `pipeline/src/customer-360-view/generate-milestone.ts`
