# Ignore Words Configuration — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Ignore Words Configuration.xlsx` — 194 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Ignore Words Configuration.xlsx` |
| Sheet | `AML Test Cases - IWC` |
| Total requirements | 194 |
| ID range | IWC-TC-001 → IWC-TC-199 |
| Route | `/configuration/screening-ignore-words` |
| Navigation | Sidebar: Configuration → Screening – Ignore Words Configuration |
| Tabs | Active, Inactive, Drafted |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Navigation & Page Access | 12 | IWC-TC-001–IWC-TC-161 |
| Status Tabs | 8 | IWC-TC-009–IWC-TC-156 |
| Search & Filter | 7 | IWC-TC-016–IWC-TC-022 |
| Data Table & Sorting | 11 | IWC-TC-023–IWC-TC-159 |
| Category Management – Add Category | 15 | IWC-TC-033–IWC-TC-173 |
| Category Management – Category Controls | 10 | IWC-TC-045–IWC-TC-163 |
| Add Ignore Word | 22 | IWC-TC-054–IWC-TC-197 |
| Live Narrative Tester | 11 | IWC-TC-072–IWC-TC-199 |
| Ignore Word Row Actions | 10 | IWC-TC-080–IWC-TC-089 |
| Bulk Upload | 19 | IWC-TC-090–IWC-TC-178 |
| Export | 8 | IWC-TC-104–IWC-TC-171 |
| Maker-Checker Workflow | 17 | IWC-TC-110–IWC-TC-198 |
| Audit History | 12 | IWC-TC-124–IWC-TC-196 |
| Access Control (RBAC) | 10 | IWC-TC-134–IWC-TC-143 |
| Field & Business Rule Validation | 11 | IWC-TC-144–IWC-TC-184 |
| Regression & Compatibility | 5 | IWC-TC-185–IWC-TC-193 |
| Accessibility | 3 | IWC-TC-188–IWC-TC-190 |
| Security Validation | 1 | IWC-TC-191–IWC-TC-191 |
| UAT Scenarios | 2 | IWC-TC-194–IWC-TC-195 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 194 |
| Functional areas (sub-modules) | 35 |
| Automation candidates | 194 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 107 |

## 3. Playwright POM Planning

- Locators: `tests/objectrepositories/IgnoreWordsConfigurationLocators.ts`
- Page Object: `tests/milestone1/pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage.ts`
- Spec file: `tests/milestone1/test-cases/ConfigurationModule/ignoreWordsConfigurationTests/ignore-words-configuration.spec.ts`
- Fixtures: `fixtures/ignore-words-configuration-data.json`
- Generator: `pipeline/src/ignore-words-configuration/generate-milestone.ts`

## 4. TODO List (from gap-matrix)

- **IWC-TC-001**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-002**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-003**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-004**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-005**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-006**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-008**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-009**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-013**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-014**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-020**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-021**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-033**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-034**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-037**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-038**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-039**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-041**: Accessibility tooling and baseline thresholds
- **IWC-TC-044**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-046**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-047**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-048**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-050**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-051**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-053**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-054**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-055**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-058**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-059**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-060**: RBAC role switching mechanism (login fixture per role)
