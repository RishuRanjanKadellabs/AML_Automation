# Exception List Manager — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Exception List Manager.xlsx` — 279 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Exception List Manager.xlsx` |
| Sheet | `Exception List Manager` |
| Total requirements | 279 |
| ID prefixes | ATL(30), EEM(47), ELM(30), ERR(30), EVAL(41), MCW(30), NFR(8), NTF(19), RBAC(16), RCE(28) |
| Route | `/configuration/exception-lists` |
| Navigation | Sidebar: Configuration → Exception Lists |
| Page object variable | `elmPage` |

### 1.1 Functional Requirements by Module and Sub-Module

| Module | Sub-Module | Count | ID Range |
| --- | --- | --- | --- |
| Audit Trail | List Lifecycle Events | 5 | ATL-001–ATL-005 |
| Audit Trail | Entry Lifecycle Events | 6 | ATL-006–ATL-011 |
| Audit Trail | TTL & Bulk Events | 4 | ATL-012–ATL-015 |
| Audit Trail | Suppression Logging | 2 | ATL-016–ATL-017 |
| Audit Trail | Evidence Access Logging | 2 | ATL-018–ATL-019 |
| Audit Trail | Integrity & Conflict Events | 2 | ATL-020–ATL-021 |
| Audit Trail | Report & Export Events | 4 | ATL-022–ATL-025 |
| Audit Trail | Event Logging & Retention | 1 | ATL-026–ATL-026 |
| Audit Trail | Search & Filters | 1 | ATL-027–ATL-027 |
| Audit Trail | Auditor Access Control | 1 | ATL-028–ATL-028 |
| Audit Trail | Access Control | 3 | ATL-029–ATL-031 |
| Exception Entry Management | Data Model & Field Validation | 7 | EEM-001–EEM-042 |
| Exception Entry Management | Add Entry | 16 | EEM-003–EEM-044 |
| Exception Entry Management | Edit Entry | 4 | EEM-007–EEM-034 |
| Exception Entry Management | Suspend / Delete Entry | 4 | EEM-010–EEM-040 |
| Exception Entry Management | TTL & Entry Renewal | 4 | EEM-012–EEM-031 |
| Exception Entry Management | Bulk Upload | 5 | EEM-015–EEM-045 |
| Exception Entry Management | API Synchronisation | 6 | EEM-017–EEM-047 |
| Exception List Management | Landing Page | 11 | ELM-001–ELM-030 |
| Exception List Management | Create Exception List | 11 | ELM-003–ELM-027 |
| Exception List Management | View Exception List | 2 | ELM-006–ELM-007 |
| Exception List Management | Edit Exception List | 2 | ELM-008–ELM-009 |
| Exception List Management | Suspend / Re-activate List | 2 | ELM-010–ELM-011 |
| Exception List Management | Delete Exception List | 2 | ELM-012–ELM-013 |
| Exception Register Report | Executive Summary | 6 | ERR-001–ERR-026 |
| Exception Register Report | Reason Code Analysis | 2 | ERR-006–ERR-007 |
| Exception Register Report | Watchlist Analysis | 1 | ERR-008–ERR-008 |
| Exception Register Report | Export & Delivery | 2 | ERR-009–ERR-010 |
| Exception Register Report | Filters & Pagination | 4 | ERR-011–ERR-014 |
| Exception Register Report | Data Integrity & Layout | 4 | ERR-015–ERR-018 |
| Exception Register Report | Permissions & Refresh | 3 | ERR-019–ERR-021 |
| Exception Register Report | Performance & Period Selection | 4 | ERR-022–ERR-025 |
| Exception Register Report | Suppression Activity Log | 1 | ERR-027–ERR-027 |
| Exception Register Report | Expired Entries Section | 1 | ERR-028–ERR-028 |
| Exception Register Report | Active Entries Listing | 1 | ERR-029–ERR-029 |
| Exception Register Report | Pending Requests Section | 1 | ERR-030–ERR-030 |
| Exception Evaluation & Matching Logic | Evaluation Criteria | 14 | EVAL-001–EVAL-041 |
| Exception Evaluation & Matching Logic | Fuzzy Matching | 15 | EVAL-012–EVAL-039 |
| Exception Evaluation & Matching Logic | Native Script & Multilingual Matching | 12 | EVAL-025–EVAL-040 |
| Maker-Checker Approval Workflow | Checker Role Enforcement | 8 | MCW-001–MCW-030 |
| Maker-Checker Approval Workflow | Queue Views & Ownership | 5 | MCW-008–MCW-028 |
| Maker-Checker Approval Workflow | Approval / Rejection Handling | 8 | MCW-012–MCW-029 |
| Maker-Checker Approval Workflow | SLA & Escalation | 6 | MCW-017–MCW-022 |
| Maker-Checker Approval Workflow | Special Approval Rules | 3 | MCW-023–MCW-025 |
| Non-Functional Requirements | Performance | 1 | NFR-001–NFR-001 |
| Non-Functional Requirements | Scalability | 1 | NFR-002–NFR-002 |
| Non-Functional Requirements | TTL Enforcement | 1 | NFR-003–NFR-003 |
| Non-Functional Requirements | Data Retention | 1 | NFR-004–NFR-004 |
| Non-Functional Requirements | Evidence Security | 2 | NFR-005–NFR-007 |
| Non-Functional Requirements | Availability | 1 | NFR-006–NFR-006 |
| Non-Functional Requirements | Multilingual Support | 1 | NFR-008–NFR-008 |
| Notification Framework | Submission & Approval Alerts | 3 | NTF-001–NTF-003 |
| Notification Framework | SLA Escalation Alerts | 2 | NTF-004–NTF-005 |
| Notification Framework | Expiry Reminder Alerts | 3 | NTF-006–NTF-008 |
| Notification Framework | Material Identity Change Alerts | 1 | NTF-009–NTF-009 |
| Notification Framework | Suppression Silence Rule | 1 | NTF-010–NTF-010 |
| Notification Framework | Bulk Upload Alerts | 2 | NTF-011–NTF-012 |
| Notification Framework | Monthly Report Delivery | 1 | NTF-013–NTF-013 |
| Notification Framework | Conflict Block Alerts | 1 | NTF-014–NTF-014 |
| Notification Framework | Notification Timing Validation | 1 | NTF-015–NTF-015 |
| Notification Framework | Alert Delivery & Timing | 3 | NTF-023–NTF-025 |
| Notification Framework | User Preferences | 1 | NTF-026–NTF-026 |
| Role-Based Access Control | Role Permission Matrix | 16 | RBAC-001–RBAC-016 |
| Reason Codes & Evidence Standards | Reason Code Standardization | 13 | RCE-001–RCE-028 |
| Reason Codes & Evidence Standards | Evidence & Attachments | 15 | RCE-011–RCE-026 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 279 |
| Modules | 10 |
| Automation candidates | 279 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 172 |

## 3. Playwright POM Planning

- Page Object: `tests/milestone1/pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage.ts`
- Spec file: `tests/milestone1/test-cases/ConfigurationModule/exceptionListManagerTests/exception-list-manager.spec.ts`
- Generator: `pipeline/src/exception-list-manager/generate-milestone.ts`

## 4. TODO List (from gap-matrix)

- **ATL-001**: RBAC role switching mechanism (login fixture per role)
- **ATL-002**: RBAC role switching mechanism (login fixture per role)
- **ATL-003**: RBAC role switching mechanism (login fixture per role)
- **ATL-004**: RBAC role switching mechanism (login fixture per role)
- **ATL-005**: RBAC role switching mechanism (login fixture per role)
- **ATL-006**: RBAC role switching mechanism (login fixture per role)
- **ATL-007**: RBAC role switching mechanism (login fixture per role)
- **ATL-008**: RBAC role switching mechanism (login fixture per role)
- **ATL-009**: RBAC role switching mechanism (login fixture per role)
- **ATL-010**: RBAC role switching mechanism (login fixture per role)
- **ATL-011**: RBAC role switching mechanism (login fixture per role)
- **ATL-012**: RBAC role switching mechanism (login fixture per role)
- **ATL-013**: Bulk upload sample file paths and column mapping
- **ATL-014**: Maker-checker role login and queue seed data
- **ATL-015**: Exact API base URL and auth headers for contract tests
- **ATL-016**: RBAC role switching mechanism (login fixture per role)
- **ATL-018**: RBAC role switching mechanism (login fixture per role)
- **ATL-019**: RBAC role switching mechanism (login fixture per role)
- **ATL-020**: RBAC role switching mechanism (login fixture per role)
- **ATL-021**: RBAC role switching mechanism (login fixture per role)
- **ATL-022**: RBAC role switching mechanism (login fixture per role)
- **ATL-023**: RBAC role switching mechanism (login fixture per role)
- **ATL-024**: RBAC role switching mechanism (login fixture per role)
- **ATL-026**: RBAC role switching mechanism (login fixture per role)
- **ATL-028**: RBAC role switching mechanism (login fixture per role)
- **ATL-029**: RBAC role switching mechanism (login fixture per role)
- **ATL-030**: RBAC role switching mechanism (login fixture per role)
- **ATL-031**: RBAC role switching mechanism (login fixture per role)
- **EEM-002**: Fuzzy matching and multilingual test corpus not defined in Excel
- **EEM-003**: Maker-checker role login and queue seed data
- **EEM-009**: Maker-checker role login and queue seed data
- **EEM-012**: RBAC role switching mechanism (login fixture per role)
- **EEM-013**: TTL expiry simulation clock or seeded expired entries
- **EEM-014**: RBAC role switching mechanism (login fixture per role)
- **EEM-017**: Exact API base URL and auth headers for contract tests
- **EEM-018**: Exact API base URL and auth headers for contract tests
- **EEM-019**: Maker-checker role login and queue seed data
- **EEM-023**: Maker-checker role login and queue seed data
- **EEM-027**: RBAC role switching mechanism (login fixture per role)
- **EEM-028**: RBAC role switching mechanism (login fixture per role)
