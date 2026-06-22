# Ignore Words Configuration — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Ignore Words Configuration.xlsx` — 223 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Ignore Words Configuration.xlsx` |
| Sheet | `AML Test Cases - IWC` |
| Total requirements | 223 |
| ID range | IWC-TC-001 → IWC-TC-271 |
| Route | `/configuration/screening-ignore-words` |
| Navigation | Sidebar: Configuration → Screening – Ignore Words Configuration |
| Tabs | Active, Inactive, Drafted |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Page Framework | 15 | IWC-TC-001–IWC-TC-015 |
| Tab Bar | 12 | IWC-TC-016–IWC-TC-027 |
| Search & Filter | 11 | IWC-TC-028–IWC-TC-038 |
| Table & Sorting | 8 | IWC-TC-039–IWC-TC-046 |
| Category Badges | 4 | IWC-TC-047–IWC-TC-050 |
| Risk Level Badges | 3 | IWC-TC-051–IWC-TC-053 |
| Match Type Badges | 2 | IWC-TC-054–IWC-TC-055 |
| Status Badges | 3 | IWC-TC-056–IWC-TC-058 |
| Row Actions | 10 | IWC-TC-059–IWC-TC-234 |
| Export Functionality | 4 | IWC-TC-067–IWC-TC-071 |
| Add Category Modal | 12 | IWC-TC-073–IWC-TC-271 |
| Category Controls Modal | 9 | IWC-TC-085–IWC-TC-093 |
| Add Ignore Word Panel | 19 | IWC-TC-094–IWC-TC-269 |
| Live Narrative Tester | 9 | IWC-TC-110–IWC-TC-235 |
| Bulk Upload | 19 | IWC-TC-119–IWC-TC-265 |
| Checker Approval Modal | 10 | IWC-TC-137–IWC-TC-251 |
| Word History Panel | 12 | IWC-TC-146–IWC-TC-250 |
| Permissions & RBAC | 9 | IWC-TC-160–IWC-TC-168 |
| API & Data Model | 1 | IWC-TC-173–IWC-TC-173 |
| Error Handling | 4 | IWC-TC-181–IWC-TC-252 |
| UI/UX Consistency | 2 | IWC-TC-185–IWC-TC-188 |
| Accessibility | 3 | IWC-TC-190–IWC-TC-192 |
| Security Validation | 2 | IWC-TC-194–IWC-TC-245 |
| Regression Validation | 6 | IWC-TC-197–IWC-TC-202 |
| Sidebar Navigation | 2 | IWC-TC-204–IWC-TC-205 |
| Match Type Behavior | 2 | IWC-TC-207–IWC-TC-208 |
| Data Validation | 2 | IWC-TC-209–IWC-TC-210 |
| Browser Compatibility | 3 | IWC-TC-214–IWC-TC-216 |
| Navigation Flow | 4 | IWC-TC-219–IWC-TC-222 |
| Business Rules | 11 | IWC-TC-224–IWC-TC-240 |
| Duplicate Validation | 1 | IWC-TC-232–IWC-TC-232 |
| Notifications | 1 | IWC-TC-236–IWC-TC-236 |
| Negative Scenarios | 2 | IWC-TC-246–IWC-TC-247 |
| UAT Scenarios | 2 | IWC-TC-248–IWC-TC-249 |
| Maker-Checker Governance | 4 | IWC-TC-256–IWC-TC-259 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 223 |
| Functional areas (sub-modules) | 35 |
| Automation candidates | 223 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 219 |

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
- **IWC-TC-007**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-008**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-009**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-010**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-011**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-012**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-013**: Network throttling profile not specified for Playwright
- **IWC-TC-014**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-015**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-016**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-017**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-018**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-019**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-020**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-021**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-022**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-023**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-024**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-025**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-026**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-027**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-028**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-029**: RBAC role switching mechanism (login fixture per role)
- **IWC-TC-030**: RBAC role switching mechanism (login fixture per role)
