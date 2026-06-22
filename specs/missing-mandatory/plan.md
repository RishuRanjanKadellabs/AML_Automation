# Missing Mandatory Data Template — Test Planning Deliverable

Generated from `pipeline/test-data/Missing Mandatory Test cases.xlsx` — 288 test cases (all valid MM-TC rows, including duplicate MM-TC-283).

## 1. Requirement Summary

### 1.1 Source Artifact

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Missing Mandatory Test cases.xlsx` |
| Raw rows | 289 |
| Valid MM-TC test cases | 288 |
| Unique Test Case IDs | 287 (MM-TC-123 not in workbook; MM-TC-283 appears twice) |
| ID range | MM-TC-001 → MM-TC-288 |
| UI spec cases | 257 |
| Database/API spec cases | 31 |

### 1.2 Feature Groups

| Feature Group | Count |
| --- | --- |
| KYC Gap Report | 25 |
| Add Custom Field | 17 |
| Score Calculation | 16 |
| API Handling | 14 |
| Score Range | 12 |
| RBAC | 11 |
| Individual CIP | 9 |
| Corporate CIP | 9 |
| Create New Template | 9 |
| KYC Gap Score | 8 |
| Add Field | 7 |
| Field Configuration | 6 |
| Clone Flow | 6 |
| Regression | 6 |
| CDD Fields | 5 |
| EDD Fields | 5 |
| Technical IDs | 5 |
| Corporate EDD | 5 |
| Security | 5 |
| Cross-Module Consistency | 5 |
| End-to-End AML Workflow | 5 |
| DB-Origin Field | 5 |
| Corporate Template | 4 |
| Corporate Technical IDs | 4 |
| Missing Fields Logic | 4 |
| Session | 4 |
| Backend Reliability | 4 |
| Template Cards | 3 |
| Template Detail Header | 3 |
| Locked Fields | 3 |
| Corporate CDD | 3 |
| Versioning | 3 |
| Save Changes | 3 |
| Score Calculation Trigger | 3 |
| Score Mapping | 3 |
| Missing Fields Breakdown | 3 |
| Customer 360 Dependency | 3 |
| Business Integrity | 3 |
| Sidebar | 2 |
| Template List Panel | 2 |
| Tab Visibility | 2 |
| Template Search | 2 |
| Refresh | 2 |
| Session Control | 2 |
| Requirement Dropdown | 2 |
| Field Inclusion | 2 |
| Dirty State | 2 |
| Concurrency | 2 |
| KYC Gap Score Configuration | 2 |
| Retry Logic | 2 |
| Error Handling | 2 |
| Missing Mandatory Data Template | 1 |
| App Shell | 1 |
| Sidebar Navigation | 1 |
| Top Bar | 1 |
| Initial Access Control (RBAC) | 1 |
| Tab Behavior | 1 |
| Stale Data Handling | 1 |
| Individual Template | 1 |
| Score Calculation Engine | 1 |
| Cross-template Isolation | 1 |
| Recovery | 1 |
| Backend Integrity | 1 |
| Reliability | 1 |
| Save Range Validation | 1 |

### 1.3 Route & UI Inventory

- **Route:** `/kyc/missing-mandatory-data-template`
- **Sidebar:** `a.sidebar-link[href='/kyc/missing-mandatory-data-template']`
- **Templates:** Simplified KYC, Standard KYC — Individual, Standard KYC — Corporate
- **Panels:** `aside.list-panel`, template cards, tab buttons, Add Field dialog


## 2. Traceability

Overlapped with KGR: 25 | Net-new: 263

## 3. Automation Split

| Spec File | Count | Criteria |
| --- | --- | --- |
| missing-mandatory-ui.spec.ts | 257 | MM-TC-001–204, no API/DB sub-modules |
| missing-mandatory-database.spec.ts | 31 | MM-TC-205+, API/Database/DB-/RBAC→API |

## 4. Coverage

| Metric | Value |
| --- | --- |
| Total test cases | 288 |
| Automation candidates | 286 |
| Manual-only | 2 |
| Feature groups | 65 |

## 5. Artifacts

- Locators: `tests/objectrepositories/MissingMandatoryLocators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage.ts`
- UI Spec: `tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory-ui.spec.ts`
- DB Spec: `tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory-database.spec.ts`
