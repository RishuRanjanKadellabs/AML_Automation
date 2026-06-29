# Keyword Manager — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Keyword Manager Test.xlsx` — 130 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Keyword Manager Test.xlsx` |
| Sheet | `Keyword Manager` |
| Total requirements | 130 |
| ID range | KM-TC-001 → KM-TC-130 |
| Route (placeholder) | `/configuration/keyword-manager` |
| Navigation | Sidebar: Configuration → Screening – Keyword Configuration |
| Tabs | Active, Inactive, Drafted |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Navigation & Page Access | 9 | KM-TC-001–KM-TC-120 |
| Status Tabs | 7 | KM-TC-009–KM-TC-015 |
| Search & Filter | 7 | KM-TC-016–KM-TC-022 |
| Data Table & Sorting | 8 | KM-TC-023–KM-TC-030 |
| Category Management - Add Category | 9 | KM-TC-031–KM-TC-128 |
| Category Management - Category Controls | 8 | KM-TC-037–KM-TC-126 |
| Add Keyword | 6 | KM-TC-044–KM-TC-129 |
| Screening Fields Mapping | 7 | KM-TC-049–KM-TC-127 |
| Fuzzy Match & Threshold Score | 10 | KM-TC-053–KM-TC-117 |
| Live Narrative Tester | 4 | KM-TC-061–KM-TC-064 |
| Keyword Row Actions | 5 | KM-TC-065–KM-TC-069 |
| Bulk Upload | 7 | KM-TC-070–KM-TC-076 |
| Export | 3 | KM-TC-077–KM-TC-079 |
| Maker-Checker Workflow | 8 | KM-TC-080–KM-TC-121 |
| Audit History | 5 | KM-TC-087–KM-TC-091 |
| Screening Engine Behaviour | 5 | KM-TC-092–KM-TC-130 |
| Access Control (RBAC) | 5 | KM-TC-096–KM-TC-100 |
| Field & Business Rule Validation | 6 | KM-TC-101–KM-TC-106 |
| Regression, Compatibility & UAT | 6 | KM-TC-107–KM-TC-124 |
| Sample Keyword Validation | 2 | KM-TC-110–KM-TC-111 |
| Integration | 2 | KM-TC-112–KM-TC-113 |
| Performance | 1 | KM-TC-114–KM-TC-114 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 130 |
| Functional areas (sub-modules) | 26 |
| Automation candidates | 130 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 130 |

## 3. Playwright POM Planning

- Locators: `tests/objectrepositories/KeywordManagerLocators.ts`
- Page Object: `tests/milestone1/pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage.ts`
- Spec file: `tests/milestone1/test-cases/ConfigurationModule/keywordManagerTests/keyword-manager.spec.ts`
- Fixtures: `fixtures/keyword-manager-data.json`
- Generator: `pipeline/src/keyword-manager/generate-milestone.ts`

## 4. TODO List (from gap-matrix)

- **KM-TC-001**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-002**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-003**: Performance SLA thresholds and measurement tooling
- **KM-TC-004**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-005**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-006**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-007**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-008**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-009**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-010**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-011**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-012**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-013**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-014**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-015**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-016**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-017**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-018**: Accessibility tooling and baseline thresholds
- **KM-TC-019**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-020**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-021**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-022**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-023**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-024**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-025**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-026**: Performance SLA thresholds and measurement tooling
- **KM-TC-027**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-028**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-029**: RBAC role switching mechanism (login fixture per role)
- **KM-TC-030**: RBAC role switching mechanism (login fixture per role)
