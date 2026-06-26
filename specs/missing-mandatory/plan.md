# Missing Mandatory Data Template — Test Planning Deliverable

Generated from `pipeline/test-data/Missing Mandatory Test Cases.xlsx` — 224 test cases.

## 1. Requirement Summary

### 1.1 Source Artifact

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Missing Mandatory Test Cases.xlsx` |
| Raw rows | 224 |
| Valid test cases | 224 |
| Unique Test Case IDs | 224 |
| ID range | TC_MMDT_001 → TC_MMDT_224 |
| Spec file | missing-mandatory.spec.ts (unified) |

### 1.2 Feature Groups

| Feature Group | Count |
| --- | --- |
| Create Template | 24 |
| Score Configuration | 15 |
| Archive Template | 10 |
| Locked Fields | 10 |
| Individual CIP | 10 |
| Corporate CIP | 10 |
| CDD Fields | 10 |
| EDD Fields | 10 |
| Search Validation | 10 |
| Error Handling | 9 |
| Template List | 8 |
| Data Persistence | 8 |
| Requirement Dropdown | 7 |
| Field Management | 7 |
| Search | 6 |
| Custom Fields | 6 |
| Risk Band | 6 |
| Template Name Validation | 6 |
| Navigation | 5 |
| Tab Management | 4 |
| Session Management | 4 |
| Gap Score Engine | 4 |
| Layout | 3 |
| Technical IDs | 3 |
| Recovery | 3 |
| Performance | 3 |
| Stability | 3 |
| Accessibility | 3 |
| Chrome Compatibility | 3 |
| UI Interaction | 3 |
| Scoring Logic | 2 |
| End-to-End Workflow | 1 |
| Configuration Integrity | 1 |
| Customer Assignment | 1 |
| Desktop UI Validation | 1 |
| UI Compliance | 1 |
| Regulatory Compliance | 1 |
| End-to-End AML Workflow | 1 |
| Save Button | 1 |
| Cancel Button | 1 |

### 1.3 Route & UI Inventory

- **Route:** `/kyc/missing-mandatory-data-template`
- **Sidebar:** `a.sidebar-link[href='/kyc/missing-mandatory-data-template']`
- **Templates:** Simplified KYC, Standard KYC — Individual, Standard KYC — Corporate
- **Panels:** `aside.list-panel`, template cards, tab buttons, Add Field dialog


## 2. Traceability

Overlapped with KGR: 0 | Net-new: 224

## 2.1 Excel ↔ FSD Reconciliation

| Metric | Value |
| --- | --- |
| FSD aligned | 190 |
| FSD partial (Excel authoritative) | 34 |
| FSD unmapped | 0 |
| FSD source | `pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx` |

Conflicts between Excel and FSD are documented in `fsd-reconciliation.json`. Excel test cases remain the source of truth for automation.

## 3. Spec Output

| Spec File | Count | Notes |
| --- | --- | --- |
| missing-mandatory.spec.ts | 224 | All Excel cases in one unified spec |

## 4. Coverage

| Metric | Value |
| --- | --- |
| Total test cases | 224 |
| Automation candidates | 224 |
| Manual-only | 0 |
| Feature groups | 40 |

## 5. Artifacts

- Locators: `tests/objectrepositories/MissingMandatoryLocators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage.ts`
- Spec: `tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory.spec.ts`
