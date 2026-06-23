# Custom List Manager — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/Custom List Manager.xlsx` — 578 requirements.

## 1. Requirement Summary

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/Custom List Manager.xlsx` |
| Sheet | `Custom List Manager` |
| Total requirements | 578 |
| ID range | CLM-TC-001 → CLM-TC-578 |
| Route | `/configuration/custom-list-manager` |
| Navigation | Sidebar: Configuration → Custom List Manager |
| Page object variable | `clmPage` |

### 1.1 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| Custom List Manager - Navigation & Access | 8 | CLM-TC-001–CLM-TC-008 |
| Custom List Manager - Breadcrumb & Top Bar | 6 | CLM-TC-009–CLM-TC-014 |
| Custom List Manager - Dashboard | 8 | CLM-TC-015–CLM-TC-022 |
| Custom List Manager - Search & Filters | 20 | CLM-TC-023–CLM-TC-246 |
| Custom List Manager - Grid & Data Presentation | 10 | CLM-TC-033–CLM-TC-042 |
| Custom List Manager - Export & Pagination | 8 | CLM-TC-043–CLM-TC-050 |
| Custom List Manager - Landing Actions | 8 | CLM-TC-051–CLM-TC-058 |
| Custom List Manager - Create List Form | 8 | CLM-TC-059–CLM-TC-066 |
| Custom List Manager - List Name Validation | 8 | CLM-TC-067–CLM-TC-074 |
| Custom List Manager - Purpose Configuration | 4 | CLM-TC-075–CLM-TC-078 |
| Custom List Manager - Action On Hit Configuration | 4 | CLM-TC-079–CLM-TC-082 |
| Custom List Manager - TTL Configuration | 4 | CLM-TC-083–CLM-TC-086 |
| Custom List Manager - Matching Configuration | 6 | CLM-TC-087–CLM-TC-092 |
| Custom List Manager - Reason For Creation | 6 | CLM-TC-093–CLM-TC-098 |
| Custom List Manager - Draft Management | 8 | CLM-TC-099–CLM-TC-106 |
| Custom List Manager - Submission Workflow | 18 | CLM-TC-107–CLM-TC-363 |
| Custom List Manager - Edit List | 8 | CLM-TC-115–CLM-TC-122 |
| Custom List Manager - Enable Disable | 8 | CLM-TC-123–CLM-TC-130 |
| Custom List Manager - Metadata Integrity | 8 | CLM-TC-131–CLM-TC-138 |
| Custom List Manager - Add Entity Form | 10 | CLM-TC-139–CLM-TC-148 |
| Custom List Manager - Minimum Screening Eligibility Rule | 10 | CLM-TC-149–CLM-TC-158 |
| Custom List Manager - Identity Information | 12 | CLM-TC-159–CLM-TC-170 |
| Custom List Manager - Identifier Information | 10 | CLM-TC-171–CLM-TC-180 |
| Custom List Manager - Digital Identifiers | 10 | CLM-TC-181–CLM-TC-190 |
| Custom List Manager - Localization | 10 | CLM-TC-191–CLM-TC-200 |
| Custom List Manager - Risk & Governance | 8 | CLM-TC-201–CLM-TC-208 |
| Custom List Manager - Real-Time Alert Configuration | 8 | CLM-TC-209–CLM-TC-216 |
| Custom List Manager - Entity Submission Workflow | 10 | CLM-TC-217–CLM-TC-226 |
| Custom List Manager - Entity Grid | 10 | CLM-TC-227–CLM-TC-236 |
| Custom List Manager - View Entity | 10 | CLM-TC-247–CLM-TC-256 |
| Custom List Manager - Edit Entity | 10 | CLM-TC-257–CLM-TC-266 |
| Custom List Manager - Enable Disable Entity | 10 | CLM-TC-267–CLM-TC-276 |
| Custom List Manager - Entity Metadata | 8 | CLM-TC-277–CLM-TC-284 |
| Custom List Manager - Entity History | 8 | CLM-TC-285–CLM-TC-292 |
| Custom List Manager - Template Download | 8 | CLM-TC-293–CLM-TC-300 |
| Custom List Manager - Upload Validation | 15 | CLM-TC-301–CLM-TC-315 |
| Custom List Manager - File Format Validation | 10 | CLM-TC-316–CLM-TC-325 |
| Custom List Manager - Mandatory Columns | 10 | CLM-TC-326–CLM-TC-335 |
| Custom List Manager - Duplicate Detection | 10 | CLM-TC-336–CLM-TC-345 |
| Custom List Manager - Validation Report | 8 | CLM-TC-346–CLM-TC-353 |
| Custom List Manager - All Requests | 10 | CLM-TC-364–CLM-TC-373 |
| Custom List Manager - My Requests | 8 | CLM-TC-374–CLM-TC-381 |
| Custom List Manager - Request Details | 10 | CLM-TC-382–CLM-TC-391 |
| Custom List Manager - Approval Workflow | 10 | CLM-TC-392–CLM-TC-401 |
| Custom List Manager - Rejection Workflow | 8 | CLM-TC-402–CLM-TC-409 |
| Custom List Manager - Segregation Of Duties | 8 | CLM-TC-410–CLM-TC-417 |
| Custom List Manager - SLA Validation | 8 | CLM-TC-418–CLM-TC-425 |
| Custom List Manager - Audit Listing | 10 | CLM-TC-426–CLM-TC-435 |
| Custom List Manager - Audit Search | 8 | CLM-TC-436–CLM-TC-443 |
| Custom List Manager - Audit Filters | 8 | CLM-TC-444–CLM-TC-451 |
| Custom List Manager - Audit Date Range | 8 | CLM-TC-452–CLM-TC-459 |
| Custom List Manager - Event Details | 8 | CLM-TC-460–CLM-TC-467 |
| Custom List Manager - Audit Export | 8 | CLM-TC-468–CLM-TC-475 |
| Custom List Manager - Audit Integrity | 10 | CLM-TC-476–CLM-TC-485 |
| Custom List Manager - TTL Display | 6 | CLM-TC-486–CLM-TC-491 |
| Custom List Manager - Expiry | 5 | CLM-TC-492–CLM-TC-496 |
| Custom List Manager - Expiring Soon | 5 | CLM-TC-497–CLM-TC-501 |
| Custom List Manager - Expired Status | 5 | CLM-TC-502–CLM-TC-506 |
| Custom List Manager - Screening Exclusion | 6 | CLM-TC-507–CLM-TC-512 |
| Custom List Manager - Fuzzy Matching | 10 | CLM-TC-513–CLM-TC-522 |
| Custom List Manager - Multilingual Matching | 8 | CLM-TC-523–CLM-TC-530 |
| Custom List Manager - Name Matching | 10 | CLM-TC-531–CLM-TC-540 |
| Custom List Manager - Alias Matching | 8 | CLM-TC-541–CLM-TC-548 |
| Custom List Manager - Digital Identifier Matching | 12 | CLM-TC-549–CLM-TC-560 |
| Custom List Manager - Action On Hit Behaviour | 8 | CLM-TC-561–CLM-TC-568 |
| Custom List Manager - Alert Generation | 10 | CLM-TC-569–CLM-TC-578 |


## 2. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements | 578 |
| Functional areas (sub-modules) | 66 |
| Automation candidates | 578 |
| Manual-only scenarios | 0 |
| Partial gaps (missing info) | 109 |

## 3. Playwright POM Planning

- Locators: `tests/objectrepositories/CustomListManagerLocators.ts`
- Page Object: `tests/milestone1/pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage.ts`
- Spec file: `tests/milestone1/test-cases/ConfigurationModule/customListManagerTests/custom-list-manager.spec.ts`
- Fixtures: `fixtures/custom-list-manager-data.json`
- Generator: `pipeline/src/custom-list-manager/generate-milestone.ts`

## 4. TODO List (from gap-matrix)

- **CLM-TC-004**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-010**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-012**: Real-time alert delivery channel and notification text not specified
- **CLM-TC-013**: Real-time alert delivery channel and notification text not specified
- **CLM-TC-014**: Real-time alert delivery channel and notification text not specified
- **CLM-TC-053**: Bulk upload sample file paths and column mapping
- **CLM-TC-054**: Bulk upload sample file paths and column mapping
- **CLM-TC-087**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-088**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-089**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-090**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-091**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-108**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-110**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-114**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-120**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-125**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-131**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-132**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-138**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-154**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-195**: Screening/matching engine backend run requires live service or mock contract
- **CLM-TC-209**: Real-time alert delivery channel and notification text not specified
- **CLM-TC-218**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-220**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-222**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-262**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-269**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-277**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-278**: RBAC role switching mechanism (login fixture per role)
- **CLM-TC-293**: Bulk upload sample file paths and column mapping
- **CLM-TC-294**: Bulk upload sample file paths and column mapping
- **CLM-TC-298**: Bulk upload sample file paths and column mapping
- **CLM-TC-301**: Bulk upload sample file paths and column mapping
- **CLM-TC-302**: Bulk upload sample file paths and column mapping
- **CLM-TC-303**: Bulk upload sample file paths and column mapping
- **CLM-TC-307**: Bulk upload sample file paths and column mapping
- **CLM-TC-308**: Bulk upload sample file paths and column mapping
- **CLM-TC-309**: Bulk upload sample file paths and column mapping
- **CLM-TC-316**: Bulk upload sample file paths and column mapping
