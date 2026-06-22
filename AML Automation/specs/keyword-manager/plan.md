# Keyword Manager — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Keyword_Manager_Test.xlsx` — 200 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Keyword_Manager_Test.xlsx` |
| Sheet | `Keyword Manager` |
| Total requirements | 200 |
| ID range | KM-TC-001 → KM-TC-200 |
| Route (placeholder) | `/configuration/keyword-manager` |
| Navigation | Sidebar: Configuration → Screening – Keyword Configuration |
| Tabs | Active, Inactive, Drafted |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Navigation & Page Load | 8 | KM-TC-001–KM-TC-008 |
| Tab Navigation | 4 | KM-TC-009–KM-TC-012 |
| Keyword Listing Table | 10 | KM-TC-013–KM-TC-022 |
| Search Functionality | 6 | KM-TC-023–KM-TC-028 |
| Add Category | 12 | KM-TC-029–KM-TC-040 |
| Category Controls | 8 | KM-TC-041–KM-TC-048 |
| Add Keyword | 35 | KM-TC-049–KM-TC-083 |
| Live Narrative Tester | 7 | KM-TC-084–KM-TC-090 |
| Maker-Checker Governance | 8 | KM-TC-091–KM-TC-098 |
| Disable Keyword | 6 | KM-TC-099–KM-TC-104 |
| Enable Keyword | 2 | KM-TC-105–KM-TC-106 |
| Bulk Import | 11 | KM-TC-107–KM-TC-117 |
| Export | 6 | KM-TC-118–KM-TC-123 |
| Screening Engine | 7 | KM-TC-124–KM-TC-130 |
| Workflow States | 5 | KM-TC-131–KM-TC-135 |
| RBAC & Security | 9 | KM-TC-136–KM-TC-144 |
| Business Rules | 9 | KM-TC-145–KM-TC-153 |
| Screening Fields | 4 | KM-TC-154–KM-TC-157 |
| UI Components | 8 | KM-TC-158–KM-TC-165 |
| Accessibility | 5 | KM-TC-166–KM-TC-170 |
| Performance | 5 | KM-TC-171–KM-TC-175 |
| Browser Compatibility | 3 | KM-TC-176–KM-TC-178 |
| Negative Edge Cases | 10 | KM-TC-179–KM-TC-188 |
| Integration | 4 | KM-TC-189–KM-TC-192 |
| Sample Keyword Validation | 5 | KM-TC-193–KM-TC-197 |
| Additional Coverage | 3 | KM-TC-198–KM-TC-200 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 200 |
| Functional areas (sub-modules) | 26 |
| Automation candidates | 200 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 64 |

## 3. Playwright POM Planning

- Locators: `tests/objectrepositories/KeywordManagerLocators.ts`
- Page Object: `tests/milestone1/pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage.ts`
- Spec file: `tests/milestone1/test-cases/ConfigurationModule/keywordManagerTests/keyword-manager.spec.ts`
- Fixtures: `fixtures/keyword-manager-data.json`
- Generator: `pipeline/src/keyword-manager/generate-milestone.ts`

## 4. TODO List (from gap-matrix)

- **KM-TC-018**: Performance SLA thresholds and measurement tooling
- **KM-TC-019**: Performance SLA thresholds and measurement tooling
- **KM-TC-025**: Accessibility tooling and baseline thresholds
- **KM-TC-037**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-048**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-056**: Performance SLA thresholds and measurement tooling
- **KM-TC-057**: Performance SLA thresholds and measurement tooling
- **KM-TC-058**: Performance SLA thresholds and measurement tooling
- **KM-TC-059**: Performance SLA thresholds and measurement tooling
- **KM-TC-060**: Performance SLA thresholds and measurement tooling
- **KM-TC-061**: Performance SLA thresholds and measurement tooling
- **KM-TC-062**: Performance SLA thresholds and measurement tooling
- **KM-TC-063**: Performance SLA thresholds and measurement tooling
- **KM-TC-064**: Performance SLA thresholds and measurement tooling
- **KM-TC-065**: Performance SLA thresholds and measurement tooling
- **KM-TC-066**: Performance SLA thresholds and measurement tooling
- **KM-TC-067**: Performance SLA thresholds and measurement tooling
- **KM-TC-079**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-083**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-087**: Performance SLA thresholds and measurement tooling
- **KM-TC-090**: Performance SLA thresholds and measurement tooling
- **KM-TC-091**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-092**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-093**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-094**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-095**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-096**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-097**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-098**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-100**: RBAC role switching mechanism (login fixture per role)
