# KYC Gap Report — Comprehensive Test Planning Deliverable

Generated from `pipeline/test-data/KYC Gap Report.xlsx` — 280 requirements.

## 1. Requirement Summary

### 1.1 Source Artifact

| Property | Value |
| --- | --- |
| File | `pipeline/test-data/KYC Gap Report.xlsx` |
| Total requirements | 280 |
| ID range | KGR-001 → KGR-280 |

### 1.2 Functional Requirements by Sub Module

| Sub Module | Count | ID Range |
| --- | --- | --- |
| KYC Gap Report | 20 | KGR-001–KGR-020 |
| KYC Gap Report - KPI Cards | 20 | KGR-021–KGR-040 |
| KYC Gap Report - Search & Filters | 30 | KGR-041–KGR-070 |
| KYC Gap Report - Report Grid | 30 | KGR-071–KGR-100 |
| KYC Gap Report - Gap Score Calculation | 30 | KGR-101–KGR-130 |
| KYC Gap Report - Gap Detail Modal | 30 | KGR-131–KGR-160 |
| KYC Gap Report - Pagination | 30 | KGR-161–KGR-190 |
| KYC Gap Report - Export | 30 | KGR-191–KGR-220 |
| KYC Gap Report - Security & Audit | 30 | KGR-221–KGR-250 |
| KYC Gap Report - Boundary & Negative Testing | 30 | KGR-251–KGR-280 |

### 1.3 Business Rules

| Rule ID | Rule | Source IDs |
| --- | --- | --- |
| BR-001 | Gap Score = Σ(missing field weights) | KGR-101, KGR-112, KGR-156 |
| BR-002 | Missing Mandatory field weight = 3 | KGR-102, KGR-104 |
| BR-003 | Missing Optional field weight = 1 | KGR-103, KGR-105 |
| BR-004 | Zero missing fields → score 0 | KGR-110 |
| BR-005 | Priority from template score bands | KGR-117–123 |
| BR-006 | Same score, different priority per template | KGR-122 |
| BR-007 | Grid score matches modal score | KGR-111, KGR-150 |
| BR-008 | Export matches on-screen data | KGR-130, KGR-203–206 |
| BR-009 | Total Customers KPI ≥ Customers with Gaps | KGR-028 |
| BR-010 | KPI reconciles with report data | KGR-029–030 |
| BR-011 | Report is read-only | KGR-100, KGR-227–229 |
| BR-012 | Data from CBS & DMS vs template | KGR-003 |
| BR-013 | Templates not permanently deleted | KGR-248–249 |
| BR-014 | Audit log immutable across refresh | KGR-241–242 |
| BR-015 | Pagination resets on filter change | KGR-179–185 |
| BR-016 | Export respects filters/sort/pagination | KGR-207–216 |
| BR-017 | Score boundaries at 25/26/50/51/75/76/100 | KGR-263–270 |

### 1.4 Field / UI Inventory

- **Grid columns:** Customer, Customer ID, Type, Branch, Branch Code, Template Applied, KYC Gap Score, Priority, Actions
- **Filters:** Search, Branch, Customer Type, Template, Priority, Gap Score min/max
- **KPI cards:** Total Customers (CBS), Customers with Gaps, Critical Priority
- **Modal:** Customer metadata, Missing Fields, Gap Type badges (CIP/CDD/EDD), Score Summary

### 1.5 AML/KYC Compliance Validations

- Customer identification gaps visible for remediation prioritization
- Risk-based priority classification (Low → Critical)
- Audit trail for template/score-band/field changes
- Read-only reporting prevents unauthorized modification
- Injection-safe search/filter handling
- Template lifecycle traceability (create, clone, archive)

## 2. Business Rules & Traceability

### MM-TC ↔ KGR Overlap (MM-TC-146–170)

| MM-TC ID | Overlapping KGR IDs |
| --- | --- |
| MM-TC-146 | KGR-001, KGR-006, KGR-008, KGR-018, KGR-020 |
| MM-TC-147 | KGR-005, KGR-021, KGR-022, KGR-023, KGR-024 |
| MM-TC-148 | KGR-029, KGR-030 |
| MM-TC-149 | KGR-071, KGR-008 |
| MM-TC-150 | KGR-190, KGR-272 |
| MM-TC-151 | KGR-042 |
| MM-TC-152 | KGR-043 |
| MM-TC-153 | KGR-050, KGR-251 |
| MM-TC-154 | KGR-056, KGR-057 |
| MM-TC-155 | KGR-059 |
| MM-TC-156 | KGR-061, KGR-062, KGR-063, KGR-064 |
| MM-TC-157 | KGR-065, KGR-066, KGR-067 |
| MM-TC-158 | KGR-069, KGR-070 |
| MM-TC-159 | KGR-068 |
| MM-TC-160 | KGR-160 |
| MM-TC-161 | KGR-085, KGR-088, KGR-089 |
| MM-TC-162 | KGR-099 |
| MM-TC-163 | KGR-170, KGR-171 |
| MM-TC-164 | KGR-164, KGR-165, KGR-167 |
| MM-TC-165 | KGR-131 |
| MM-TC-166 | KGR-137, KGR-155, KGR-156 |
| MM-TC-167 | KGR-148, KGR-149, KGR-167 |
| MM-TC-168 | KGR-168, KGR-031 |
| MM-TC-169 | KGR-169 |
| MM-TC-170 | KGR-170 |

## 3. Gap Analysis

### 3.1 Requirement Coverage Matrix (280 rows)

| Requirement ID | Requirement Description | Testable? | Missing Information | Assumptions |
| --- | --- | --- | --- | --- |
| KGR-001 | Verify user can access KYC Gap Report from Missing Mandatory menu | Yes | — | — |
| KGR-002 | Verify KYC Gap Report page title is displayed correctly | Yes | — | — |
| KGR-003 | Verify page subtitle is displayed correctly | Yes | — | — |
| KGR-004 | Verify Export button is displayed on page | Yes | — | — |
| KGR-005 | Verify all KPI cards are displayed | Yes | — | — |
| KGR-006 | Verify report list section loads successfully | Yes | — | — |
| KGR-007 | Verify all configured filters are visible | Yes | — | — |
| KGR-008 | Verify report grid is displayed | Yes | — | — |
| KGR-009 | Verify pagination controls are displayed | Yes | — | — |
| KGR-010 | Verify page loads successfully after browser refresh | Yes | — | — |
| KGR-011 | Verify direct URL access for authorized user | Yes | — | — |
| KGR-012 | Verify application back navigation from KYC Gap Report | Yes | — | — |
| KGR-013 | Verify navigation from KYC Gap Report to Missing Mandatory Template | Yes | — | — |
| KGR-014 | Verify returning from Template screen preserves KYC Gap Report access | Yes | — | — |
| KGR-015 | Verify filter and page state is retained when navigating between Template and Re | Yes | — | — |
| KGR-016 | Verify unauthorized user cannot access KYC Gap Report | Yes | — | — |
| KGR-017 | Verify unauthenticated user cannot access KYC Gap Report URL | Yes | — | — |
| KGR-018 | Verify page loads without UI rendering issues | Yes | — | — |
| KGR-019 | Verify page remains functional after multiple navigations | Yes | — | — |
| KGR-020 | Verify no application error occurs when opening KYC Gap Report | Yes | — | — |
| KGR-021 | Verify Total Customers (CBS) KPI card is displayed | Yes | — | — |
| KGR-022 | Verify Customers with Gaps KPI card is displayed | Yes | — | — |
| KGR-023 | Verify Critical Priority KPI card is displayed | Yes | — | — |
| KGR-024 | Verify KPI card labels are displayed correctly | Yes | — | — |
| KGR-025 | Verify Total Customers KPI value is numeric | Yes | — | — |
| KGR-026 | Verify Customers with Gaps KPI value is numeric | Yes | — | — |
| KGR-027 | Verify Critical Priority KPI value is numeric | Yes | — | — |
| KGR-028 | Verify Total Customers KPI count is greater than or equal to Customers with Gaps | Yes | — | — |
| KGR-029 | Verify Customers with Gaps KPI count matches report data | Yes | — | — |
| KGR-030 | Verify Critical Priority KPI count matches report data | Yes | — | — |
| KGR-031 | Verify KPI values refresh when page is reloaded | Yes | — | — |
| KGR-032 | Verify KPI cards load without UI distortion | Yes | — | — |
| KGR-033 | Verify KPI values are visible without truncation | Yes | — | — |
| KGR-034 | Verify KPI cards are displayed when report contains records | Yes | — | — |
| KGR-035 | Verify KPI cards handle zero values correctly — KPI cards should support zero co | Yes | — | — |
| KGR-036 | Verify KPI section remains visible after filter application | Yes | — | — |
| KGR-037 | Verify KPI section remains visible after pagination navigation | Yes | — | — |
| KGR-038 | Verify KPI cards are displayed before report grid | Yes | — | — |
| KGR-039 | Verify KPI values do not display negative numbers | Yes | — | — |
| KGR-040 | Verify KPI cards load successfully within page initialization | Yes | — | — |
| KGR-041 | Verify Search field is displayed on KYC Gap Report page | Yes | — | — |
| KGR-042 | Verify search by exact customer name | Yes | — | — |
| KGR-043 | Verify search by partial customer name | Yes | — | — |
| KGR-044 | Verify search by Customer ID | Yes | — | — |
| KGR-045 | Verify search is case insensitive | Yes | — | — |
| KGR-046 | Verify search using alphanumeric Customer ID | Yes | — | — |
| KGR-047 | Verify search with leading spaces | Yes | — | — |
| KGR-048 | Verify search with trailing spaces | Yes | — | — |
| KGR-049 | Verify search with special characters | Yes | — | — |
| KGR-050 | Verify search with non-existing customer value | Yes | — | — |
| KGR-051 | Verify real-time search behavior | Partial | Debounce delay (ms) not specified | Filter applies on input with ≤500ms debounce |
| KGR-052 | Verify Branch filter dropdown values | Yes | — | — |
| KGR-053 | Verify filtering by Branch | Yes | — | — |
| KGR-054 | Verify Branch filter with no matching records | Yes | — | — |
| KGR-055 | Verify Customer Type filter values | Yes | — | — |
| KGR-056 | Verify filtering by Individual customer type | Yes | — | — |
| KGR-057 | Verify filtering by Corporate customer type | Yes | — | — |
| KGR-058 | Verify Template filter dropdown values | Yes | — | — |
| KGR-059 | Verify filtering by template | Yes | — | — |
| KGR-060 | Verify Priority filter dropdown values | Yes | — | — |
| KGR-061 | Verify filtering by Low priority | Yes | — | — |
| KGR-062 | Verify filtering by Medium priority | Yes | — | — |
| KGR-063 | Verify filtering by High priority | Yes | — | — |
| KGR-064 | Verify filtering by Critical priority | Yes | — | — |
| KGR-065 | Verify Gap Score minimum filter | Yes | — | — |
| KGR-066 | Verify Gap Score maximum filter | Yes | — | — |
| KGR-067 | Verify Gap Score range filter | Yes | — | — |
| KGR-068 | Verify Clear Filters functionality | Yes | — | — |
| KGR-069 | Verify filter combination: Branch + Customer Type | Yes | — | — |
| KGR-070 | Verify filter combination: Search + Priority | Yes | — | — |
| KGR-071 | Verify all configured report columns are displayed | Yes | — | — |
| KGR-072 | Verify Customer column displays customer full name | Yes | — | — |
| KGR-073 | Verify Customer ID column displays unique customer identifiers | Yes | — | — |
| KGR-074 | Verify Type column displays customer type badge | Yes | — | — |
| KGR-075 | Verify Branch column displays branch name | Yes | — | — |
| KGR-076 | Verify Branch Code column displays branch code | Yes | — | — |
| KGR-077 | Verify Template Applied column displays assigned template | Yes | — | — |
| KGR-078 | Verify KYC Gap Score column displays numeric score | Yes | — | — |
| KGR-079 | Verify Priority column displays risk classification | Yes | — | — |
| KGR-080 | Verify Actions column displays View button | Yes | — | — |
| KGR-081 | Verify Customer column supports sorting | Yes | — | — |
| KGR-082 | Verify Customer ID column supports sorting | Yes | — | — |
| KGR-083 | Verify Branch column supports sorting | Yes | — | — |
| KGR-084 | Verify Branch Code column supports sorting | Yes | — | — |
| KGR-085 | Verify KYC Gap Score column supports sorting | Yes | — | — |
| KGR-086 | Verify ascending sorting for Customer column | Yes | — | — |
| KGR-087 | Verify descending sorting for Customer column | Yes | — | — |
| KGR-088 | Verify ascending sorting for KYC Gap Score column | Yes | — | — |
| KGR-089 | Verify descending sorting for KYC Gap Score column | Yes | — | — |
| KGR-090 | Verify sorting persists correctly with filtered data | Yes | — | — |
| KGR-091 | Verify non-sortable columns do not display sort behavior | Yes | — | — |
| KGR-092 | Verify grid data accuracy against source records | Partial | CBS/DMS seed data mapping not in Excel | Test DB fixture with known CIF records |
| KGR-093 | Verify grid handles long customer names — Long names should display without UI b | Partial | Max customer name length not defined | Use 256-char boundary + 1000-char stress |
| KGR-094 | Verify grid handles long template names | Yes | — | — |
| KGR-095 | Verify grid displays no duplicate records | Yes | — | — |
| KGR-096 | Verify grid displays records after page refresh | Yes | — | — |
| KGR-097 | Verify grid displays records after filter reset | Yes | — | — |
| KGR-098 | Verify grid remains stable when no records match filters | Yes | — | — |
| KGR-099 | Verify Priority values contain only supported classifications | Yes | — | — |
| KGR-100 | Verify report is read-only from landing grid | Yes | — | — |
| KGR-101 | Verify KYC Gap Score is calculated as sum of missing field weights | Yes | — | — |
| KGR-102 | Verify missing Mandatory field contributes 3 points to Gap Score | Yes | — | — |
| KGR-103 | Verify missing Optional field contributes 1 point to Gap Score | Yes | — | — |
| KGR-104 | Verify customer with one missing Mandatory field displays score 3 | Yes | — | — |
| KGR-105 | Verify customer with one missing Optional field displays score 1 | Yes | — | — |
| KGR-106 | Verify score calculation with multiple Mandatory fields | Yes | — | — |
| KGR-107 | Verify score calculation with multiple Optional fields | Yes | — | — |
| KGR-108 | Verify score calculation with mixed Mandatory and Optional fields | Yes | — | — |
| KGR-109 | Verify score is displayed as integer value | Yes | — | — |
| KGR-110 | Verify customer with no missing fields displays score 0 | Yes | — | — |
| KGR-111 | Verify score displayed in report matches score in Gap Detail Modal | Yes | — | — |
| KGR-112 | Verify score calculation includes all missing fields | Yes | — | — |
| KGR-113 | Verify score calculation excludes completed fields | Yes | — | — |
| KGR-114 | Verify score updates after Mandatory field remediation | Yes | — | — |
| KGR-115 | Verify score updates after Optional field remediation | Yes | — | — |
| KGR-116 | Verify score remains unchanged when unrelated customer data changes | Yes | — | — |
| KGR-117 | Verify Low priority classification based on template score bands | Partial | Per-template band config not listed | Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical |
| KGR-118 | Verify Medium priority classification based on template score bands | Partial | Per-template band config not listed | Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical |
| KGR-119 | Verify High priority classification based on template score bands | Partial | Per-template band config not listed | Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical |
| KGR-120 | Verify Critical priority classification based on template score bands | Partial | Per-template band config not listed | Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical |
| KGR-121 | Verify priority is derived from assigned template score bands | Yes | — | — |
| KGR-122 | Verify same score can result in different priorities under different templates | Yes | — | — |
| KGR-123 | Verify priority recalculation after score band configuration change | Yes | — | — |
| KGR-124 | Verify score recalculation after new field is added to template | Yes | — | — |
| KGR-125 | Verify score recalculation after field requirement changes | Yes | — | — |
| KGR-126 | Verify score does not display negative values | Yes | — | — |
| KGR-127 | Verify score calculation consistency across multiple refreshes | Yes | — | — |
| KGR-128 | Verify score calculation for highest configured score range | Yes | — | — |
| KGR-129 | Verify score calculation for lowest configured score range | Yes | — | — |
| KGR-130 | Verify score displayed in exported report matches application data | Yes | — | — |
| KGR-131 | Verify View button opens Gap Detail Modal | Yes | — | — |
| KGR-132 | Verify modal displays customer name | Yes | — | — |
| KGR-133 | Verify modal displays CIF/Customer ID | Yes | — | — |
| KGR-134 | Verify modal displays Branch Name | Yes | — | — |
| KGR-135 | Verify modal displays Branch Code | Yes | — | — |
| KGR-136 | Verify modal displays applied template | Yes | — | — |
| KGR-137 | Verify Missing Fields section is displayed | Yes | — | — |
| KGR-138 | Verify each missing field displays field name | Yes | — | — |
| KGR-139 | Verify each missing field displays description | Yes | — | — |
| KGR-140 | Verify each missing field displays weight | Yes | — | — |
| KGR-141 | Verify each missing field displays requirement type | Yes | — | — |
| KGR-142 | Verify Mandatory fields display correct requirement type | Yes | — | — |
| KGR-143 | Verify Optional fields display correct requirement type | Yes | — | — |
| KGR-144 | Verify Gap Type badge is displayed | Yes | — | — |
| KGR-145 | Verify CIP Gap Type badge | Yes | — | — |
| KGR-146 | Verify CDD Gap Type badge | Yes | — | — |
| KGR-147 | Verify EDD Gap Type badge | Yes | — | — |
| KGR-148 | Verify Score Summary section is displayed | Yes | — | — |
| KGR-149 | Verify Total KYC Gap Score displayed in modal | Yes | — | — |
| KGR-150 | Verify modal score matches report grid score | Yes | — | — |
| KGR-151 | Verify risk label is displayed in score summary | Yes | — | — |
| KGR-152 | Verify risk label matches customer priority | Yes | — | — |
| KGR-153 | Verify modal handles customer with single missing field | Yes | — | — |
| KGR-154 | Verify modal handles customer with multiple missing fields | Yes | — | — |
| KGR-155 | Verify missing field count matches displayed records | Yes | — | — |
| KGR-156 | Verify total score equals sum of displayed field weights | Yes | — | — |
| KGR-157 | Verify modal can be closed using Close/X button | Yes | — | — |
| KGR-158 | Verify modal can be closed using ESC key | Yes | — | — |
| KGR-159 | Verify modal closes without data corruption | Yes | — | — |
| KGR-160 | Verify modal supports scrolling for large datasets | Yes | — | — |
| KGR-161 | Verify pagination controls are displayed on report page | Yes | — | — |
| KGR-162 | Verify Items Per Page dropdown is displayed | Yes | — | — |
| KGR-163 | Verify Items Per Page default value | Yes | — | — |
| KGR-164 | Verify Items Per Page supports value 10 | Yes | — | — |
| KGR-165 | Verify Items Per Page supports value 20 | Yes | — | — |
| KGR-166 | Verify Items Per Page supports value 50 | Yes | — | — |
| KGR-167 | Verify page size changes update grid correctly | Yes | — | — |
| KGR-168 | Verify Previous button is displayed | Yes | — | — |
| KGR-169 | Verify Next button is displayed | Yes | — | — |
| KGR-170 | Verify Next button navigates to next page | Yes | — | — |
| KGR-171 | Verify Previous button navigates to previous page | Yes | — | — |
| KGR-172 | Verify Previous button behavior on first page | Yes | — | — |
| KGR-173 | Verify Next button behavior on last page | Yes | — | — |
| KGR-174 | Verify page indicator is displayed | Yes | — | — |
| KGR-175 | Verify item range indicator is displayed | Yes | — | — |
| KGR-176 | Verify page count calculation | Yes | — | — |
| KGR-177 | Verify pagination with filtered records | Yes | — | — |
| KGR-178 | Verify pagination with search results | Yes | — | — |
| KGR-179 | Verify pagination resets to Page 1 after Search | Yes | — | — |
| KGR-180 | Verify pagination resets to Page 1 after Branch filter | Yes | — | — |
| KGR-181 | Verify pagination resets to Page 1 after Customer Type filter | Yes | — | — |
| KGR-182 | Verify pagination resets to Page 1 after Template filter | Yes | — | — |
| KGR-183 | Verify pagination resets to Page 1 after Priority filter | Yes | — | — |
| KGR-184 | Verify pagination resets to Page 1 after Gap Score filter | Yes | — | — |
| KGR-185 | Verify pagination resets to Page 1 after Clear Filters | Yes | — | — |
| KGR-186 | Verify pagination state is retained when opening and closing Gap Detail Modal | Yes | — | — |
| KGR-187 | Verify pagination state retained while navigating between Report and Template sc | Yes | — | — |
| KGR-188 | Verify pagination works correctly when total records equal page size | Yes | — | — |
| KGR-189 | Verify pagination works correctly when total records are less than page size | Yes | — | — |
| KGR-190 | Verify pagination works correctly when no records are available | Yes | — | — |
| KGR-191 | Verify Export button is displayed on KYC Gap Report page | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-192 | Verify Export button is enabled when records exist | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-193 | Verify export downloads report successfully | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-194 | Verify exported file contains report records | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-195 | Verify exported file contains Customer column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-196 | Verify exported file contains Customer ID column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-197 | Verify exported file contains Type column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-198 | Verify exported file contains Branch column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-199 | Verify exported file contains Branch Code column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-200 | Verify exported file contains Template Applied column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-201 | Verify exported file contains KYC Gap Score column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-202 | Verify exported file contains Priority column | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-203 | Verify exported record count matches report record count | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-204 | Verify exported Customer values match report data | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-205 | Verify exported KYC Gap Score values match report data | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-206 | Verify exported Priority values match report data | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-207 | Verify export respects active Search filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-208 | Verify export respects active Branch filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-209 | Verify export respects active Customer Type filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-210 | Verify export respects active Template filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-211 | Verify export respects active Priority filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-212 | Verify export respects active Gap Score filter | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-213 | Verify export supports combined filters | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-214 | Verify export after sorting | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-215 | Verify export works from Page 1 | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-216 | Verify export works from non-first page | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-217 | Verify export works when page size is changed | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-218 | Verify export file opens successfully | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-219 | Verify export handles large datasets | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-220 | Verify export behavior when no records are available | Partial | File format (CSV/XLSX) not specified | CSV unless app specifies otherwise |
| KGR-221 | Verify authenticated Compliance Officer can access KYC Gap Report | Partial | Role credentials not in Excel | Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL |
| KGR-222 | Verify authenticated Administrator can access KYC Gap Report | Partial | Role credentials not in Excel | Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL |
| KGR-223 | Verify unauthorized role cannot access KYC Gap Report | Partial | Role credentials not in Excel | Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL |
| KGR-224 | Verify unauthenticated user cannot access KYC Gap Report URL | Partial | Role credentials not in Excel | Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL |
| KGR-225 | Verify direct URL access respects RBAC permissions | Partial | Role credentials not in Excel | Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL |
| KGR-226 | Verify session timeout prevents report access | Yes | — | — |
| KGR-227 | Verify report is read-only | Yes | — | — |
| KGR-228 | Verify report does not provide Bulk Notify action | Yes | — | — |
| KGR-229 | Verify report does not provide Edit action | Yes | — | — |
| KGR-230 | Verify View action does not allow data modification | Yes | — | — |
| KGR-231 | Verify audit log entry generated for template creation | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-232 | Verify audit log captures user ID during template creation | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-233 | Verify audit log captures timestamp during template creation | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-234 | Verify audit log entry generated for template cloning | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-235 | Verify audit log entry generated when field requirement changes | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-236 | Verify audit log records previous value for requirement change | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-237 | Verify audit log records new value for requirement change | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-238 | Verify audit log entry generated when custom field is added | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-239 | Verify audit log entry generated when score bands are modified | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-240 | Verify audit log captures before and after values for score band changes | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-241 | Verify audit log remains immutable | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-242 | Verify audit records are retained after page refresh | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-243 | Verify unauthorized user cannot modify template configuration | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-244 | Verify unauthorized user cannot access audit records | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-245 | Verify application prevents access after logout | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-246 | Verify report remains accessible after successful re-authentication | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-247 | Verify audit log captures template archival action | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-248 | Verify templates cannot be permanently deleted | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-249 | Verify archived templates remain traceable in audit history | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-250 | Verify audit trail completeness for template lifecycle | Partial | Audit UI/API endpoint not specified | Audit accessed via Admin module or API /audit |
| KGR-251 | Verify search with blank value | Yes | — | — |
| KGR-252 | Verify search with whitespace-only value | Yes | — | — |
| KGR-253 | Verify search with maximum supported characters | Yes | — | — |
| KGR-254 | Verify search with SQL injection pattern | Partial | Expected system response detail (block/sanitize/log) | Input rejected or sanitized; no script execution |
| KGR-255 | Verify search with script injection pattern | Partial | Expected system response detail (block/sanitize/log) | Input rejected or sanitized; no script execution |
| KGR-256 | Verify Gap Score filter with Min value only | Yes | — | — |
| KGR-257 | Verify Gap Score filter with Max value only | Yes | — | — |
| KGR-258 | Verify Gap Score filter with Min greater than Max | Yes | — | — |
| KGR-259 | Verify Gap Score filter with negative values | Yes | — | — |
| KGR-260 | Verify Gap Score filter with decimal values | Yes | — | — |
| KGR-261 | Verify Gap Score filter with alphabetic characters | Yes | — | — |
| KGR-262 | Verify Gap Score filter with special characters | Yes | — | — |
| KGR-263 | Verify Gap Score boundary value 0 | Yes | — | — |
| KGR-264 | Verify Gap Score boundary value 25 | Yes | — | — |
| KGR-265 | Verify Gap Score boundary value 26 | Yes | — | — |
| KGR-266 | Verify Gap Score boundary value 50 | Yes | — | — |
| KGR-267 | Verify Gap Score boundary value 51 | Yes | — | — |
| KGR-268 | Verify Gap Score boundary value 75 | Yes | — | — |
| KGR-269 | Verify Gap Score boundary value 76 | Yes | — | — |
| KGR-270 | Verify Gap Score boundary value 100 | Yes | — | — |
| KGR-271 | Verify Gap Score filter with value greater than 100 | Yes | — | — |
| KGR-272 | Verify report behavior when no records match filters | Yes | — | — |
| KGR-273 | Verify opening Gap Detail Modal for customer with single missing field | Yes | — | — |
| KGR-274 | Verify opening Gap Detail Modal for customer with large number of missing fields | Yes | — | — |
| KGR-275 | Verify report behavior when all customers belong to same priority | Yes | — | — |
| KGR-276 | Verify report behavior when all customers belong to same branch | Yes | — | — |
| KGR-277 | Verify report behavior with duplicate customer names | Yes | — | — |
| KGR-278 | Verify report behavior with special characters in customer name | Yes | — | — |
| KGR-279 | Verify report behavior with extremely long customer names | Yes | — | — |
| KGR-280 | Verify report recovery after invalid filter input | Yes | — | — |

### 3.2 Highlighted Risks

| Category | Finding |
| --- | --- |
| Ambiguous | Real-time search timing (KGR-051); export format; large dataset (KGR-219) |
| Missing business rules | Per-template score band ranges only implied by boundary tests |
| Missing validations | CBS/DMS import failure/reconciliation absent |
| Compliance risks | Audit tests span Template module — cross-module setup required |
| Testability | 30 audit cases need backend/DB; 30 score cases need controlled fixtures |

## 4. Test Scenario List

### Functional Testing
- **Positive (~210):** Page load, navigation, KPI, filters, grid sort, modal, export, pagination, authorized access
- **Negative (~45):** Unauthorized access, no-match search, invalid filters, empty export, injection
- **E2E (~25):** Template→score→report sync; filter→paginate→export; Template↔Report state retention

### Validation / Boundary / Equivalence / Business Rule / Workflow / RBAC / Error / Compliance
- Covered across 10 sub-modules (see Section 1.2)

## 5. Detailed Test Cases

See also: [test-cases.md](./test-cases.md) and [manifest.json](./manifest.json).

| Test Case ID | Module | Feature | Priority | Automation Candidate | Tags |
| --- | --- | --- | --- | --- | --- |
| KGR-001 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, functional |
| KGR-002 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, functional |
| KGR-003 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-004 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, export |
| KGR-005 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, kpi |
| KGR-006 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, functional |
| KGR-007 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, filter |
| KGR-008 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, functional |
| KGR-009 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, pagination |
| KGR-010 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, functional |
| KGR-011 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, functional |
| KGR-012 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-013 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-014 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-015 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, filter |
| KGR-016 | KYC Module | KYC Gap Report | High | Yes | kyc-gap-report, high, rbac, security |
| KGR-017 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, rbac, security |
| KGR-018 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-019 | KYC Module | KYC Gap Report | Medium | Yes | kyc-gap-report, medium, functional |
| KGR-020 | KYC Module | KYC Gap Report | Critical | Yes | kyc-gap-report, critical, functional |
| KGR-021 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-022 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-023 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-024 | KYC Module | KYC Gap Report - KPI Cards | Medium | Yes | kyc-gap-report-kpi-cards, medium, kpi |
| KGR-025 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-026 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-027 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-028 | KYC Module | KYC Gap Report - KPI Cards | Critical | Yes | kyc-gap-report-kpi-cards, critical, kpi |
| KGR-029 | KYC Module | KYC Gap Report - KPI Cards | Critical | Yes | kyc-gap-report-kpi-cards, critical, kpi |
| KGR-030 | KYC Module | KYC Gap Report - KPI Cards | Critical | Yes | kyc-gap-report-kpi-cards, critical, kpi |
| KGR-031 | KYC Module | KYC Gap Report - KPI Cards | Medium | Yes | kyc-gap-report-kpi-cards, medium, kpi |
| KGR-032 | KYC Module | KYC Gap Report - KPI Cards | Medium | Yes | kyc-gap-report-kpi-cards, medium, kpi |
| KGR-033 | KYC Module | KYC Gap Report - KPI Cards | Low | Yes | kyc-gap-report-kpi-cards, low, kpi |
| KGR-034 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-035 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, kpi |
| KGR-036 | KYC Module | KYC Gap Report - KPI Cards | Medium | Yes | kyc-gap-report-kpi-cards, medium, filter |
| KGR-037 | KYC Module | KYC Gap Report - KPI Cards | Low | Yes | kyc-gap-report-kpi-cards, low, pagination |
| KGR-038 | KYC Module | KYC Gap Report - KPI Cards | Low | Yes | kyc-gap-report-kpi-cards, low, kpi |
| KGR-039 | KYC Module | KYC Gap Report - KPI Cards | High | Yes | kyc-gap-report-kpi-cards, high, boundary, negative |
| KGR-040 | KYC Module | KYC Gap Report - KPI Cards | Medium | Yes | kyc-gap-report-kpi-cards, medium, kpi |
| KGR-041 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-042 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-043 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-044 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-045 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-046 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-047 | KYC Module | KYC Gap Report - Search & Filters | Medium | Yes | kyc-gap-report-search-filters, medium, filter |
| KGR-048 | KYC Module | KYC Gap Report - Search & Filters | Medium | Yes | kyc-gap-report-search-filters, medium, filter |
| KGR-049 | KYC Module | KYC Gap Report - Search & Filters | Medium | Yes | kyc-gap-report-search-filters, medium, filter |
| KGR-050 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-051 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-052 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-053 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-054 | KYC Module | KYC Gap Report - Search & Filters | Medium | Yes | kyc-gap-report-search-filters, medium, filter |
| KGR-055 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-056 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-057 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-058 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-059 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-060 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-061 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-062 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-063 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-064 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-065 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, gap-score, business-rule |
| KGR-066 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, gap-score, business-rule |
| KGR-067 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, gap-score, business-rule |
| KGR-068 | KYC Module | KYC Gap Report - Search & Filters | Critical | Yes | kyc-gap-report-search-filters, critical, filter |
| KGR-069 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-070 | KYC Module | KYC Gap Report - Search & Filters | High | Yes | kyc-gap-report-search-filters, high, filter |
| KGR-071 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-072 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-073 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-074 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-075 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-076 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-077 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-078 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, gap-score, business-rule |
| KGR-079 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-080 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, modal |
| KGR-081 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-082 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-083 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-084 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-085 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, gap-score, business-rule |
| KGR-086 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-087 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-088 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, gap-score, business-rule |
| KGR-089 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, gap-score, business-rule |
| KGR-090 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, filter |
| KGR-091 | KYC Module | KYC Gap Report - Report Grid | Medium | Yes | kyc-gap-report-report-grid, medium, functional |
| KGR-092 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-093 | KYC Module | KYC Gap Report - Report Grid | Medium | Yes | kyc-gap-report-report-grid, medium, functional |
| KGR-094 | KYC Module | KYC Gap Report - Report Grid | Medium | Yes | kyc-gap-report-report-grid, medium, functional |
| KGR-095 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-096 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, functional |
| KGR-097 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, filter |
| KGR-098 | KYC Module | KYC Gap Report - Report Grid | High | Yes | kyc-gap-report-report-grid, high, filter |
| KGR-099 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-100 | KYC Module | KYC Gap Report - Report Grid | Critical | Yes | kyc-gap-report-report-grid, critical, functional |
| KGR-101 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-102 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-103 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-104 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-105 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-106 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-107 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-108 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-109 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-110 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-111 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-112 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-113 | KYC Module | KYC Gap Report - Gap Score Calculation | High | Yes | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |
| KGR-114 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-115 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-116 | KYC Module | KYC Gap Report - Gap Score Calculation | Medium | Yes | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |
| KGR-117 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-118 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-119 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-120 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-121 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-122 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-123 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-124 | KYC Module | KYC Gap Report - Gap Score Calculation | High | Yes | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |
| KGR-125 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |
| KGR-126 | KYC Module | KYC Gap Report - Gap Score Calculation | High | Yes | kyc-gap-report-gap-score-calculation, high, boundary, negative |
| KGR-127 | KYC Module | KYC Gap Report - Gap Score Calculation | Medium | Yes | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |
| KGR-128 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, boundary, negative |
| KGR-129 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, boundary, negative |
| KGR-130 | KYC Module | KYC Gap Report - Gap Score Calculation | Critical | Yes | kyc-gap-report-gap-score-calculation, critical, export |
| KGR-131 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-132 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-133 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-134 | KYC Module | KYC Gap Report - Gap Detail Modal | High | Yes | kyc-gap-report-gap-detail-modal, high, modal |
| KGR-135 | KYC Module | KYC Gap Report - Gap Detail Modal | High | Yes | kyc-gap-report-gap-detail-modal, high, modal |
| KGR-136 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-137 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-138 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-139 | KYC Module | KYC Gap Report - Gap Detail Modal | High | Yes | kyc-gap-report-gap-detail-modal, high, functional |
| KGR-140 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-141 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-142 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-143 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-144 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-145 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-146 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-147 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-148 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-149 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-150 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-151 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-152 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-153 | KYC Module | KYC Gap Report - Gap Detail Modal | Medium | Yes | kyc-gap-report-gap-detail-modal, medium, modal |
| KGR-154 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, modal |
| KGR-155 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, functional |
| KGR-156 | KYC Module | KYC Gap Report - Gap Detail Modal | Critical | Yes | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |
| KGR-157 | KYC Module | KYC Gap Report - Gap Detail Modal | High | Yes | kyc-gap-report-gap-detail-modal, high, modal |
| KGR-158 | KYC Module | KYC Gap Report - Gap Detail Modal | Medium | Yes | kyc-gap-report-gap-detail-modal, medium, modal |
| KGR-159 | KYC Module | KYC Gap Report - Gap Detail Modal | Medium | Yes | kyc-gap-report-gap-detail-modal, medium, modal |
| KGR-160 | KYC Module | KYC Gap Report - Gap Detail Modal | High | Yes | kyc-gap-report-gap-detail-modal, high, modal |
| KGR-161 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, pagination |
| KGR-162 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, pagination |
| KGR-163 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, pagination |
| KGR-164 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, functional |
| KGR-165 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, functional |
| KGR-166 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, functional |
| KGR-167 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, pagination |
| KGR-168 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, functional |
| KGR-169 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, functional |
| KGR-170 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, functional |
| KGR-171 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, functional |
| KGR-172 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, functional |
| KGR-173 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, functional |
| KGR-174 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, functional |
| KGR-175 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, functional |
| KGR-176 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, pagination |
| KGR-177 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, filter |
| KGR-178 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, filter |
| KGR-179 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-180 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-181 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-182 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-183 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-184 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, gap-score, business-rule |
| KGR-185 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, filter |
| KGR-186 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, modal |
| KGR-187 | KYC Module | KYC Gap Report - Pagination | Critical | Yes | kyc-gap-report-pagination, critical, pagination |
| KGR-188 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, pagination |
| KGR-189 | KYC Module | KYC Gap Report - Pagination | Medium | Yes | kyc-gap-report-pagination, medium, pagination |
| KGR-190 | KYC Module | KYC Gap Report - Pagination | High | Yes | kyc-gap-report-pagination, high, pagination |
| KGR-191 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-192 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-193 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-194 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-195 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-196 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-197 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-198 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-199 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-200 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-201 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-202 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-203 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-204 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-205 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-206 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-207 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-208 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-209 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-210 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-211 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-212 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-213 | KYC Module | KYC Gap Report - Export | Critical | Yes | kyc-gap-report-export, critical, export |
| KGR-214 | KYC Module | KYC Gap Report - Export | Medium | Yes | kyc-gap-report-export, medium, export |
| KGR-215 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-216 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-217 | KYC Module | KYC Gap Report - Export | Medium | Yes | kyc-gap-report-export, medium, export |
| KGR-218 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-219 | KYC Module | KYC Gap Report - Export | Critical | No | kyc-gap-report-export, critical, export |
| KGR-220 | KYC Module | KYC Gap Report - Export | High | Yes | kyc-gap-report-export, high, export |
| KGR-221 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, functional |
| KGR-222 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, functional |
| KGR-223 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, rbac, security |
| KGR-224 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, rbac, security |
| KGR-225 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, rbac, security |
| KGR-226 | KYC Module | KYC Gap Report - Security & Audit | High | Yes | kyc-gap-report-security-audit, high, functional |
| KGR-227 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, functional |
| KGR-228 | KYC Module | KYC Gap Report - Security & Audit | High | Yes | kyc-gap-report-security-audit, high, functional |
| KGR-229 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, functional |
| KGR-230 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, modal |
| KGR-231 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-232 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-233 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-234 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-235 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-236 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-237 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-238 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-239 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-240 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-241 | KYC Module | KYC Gap Report - Security & Audit | High | No | kyc-gap-report-security-audit, high, audit, compliance |
| KGR-242 | KYC Module | KYC Gap Report - Security & Audit | Medium | Yes | kyc-gap-report-security-audit, medium, audit, compliance |
| KGR-243 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, rbac, security |
| KGR-244 | KYC Module | KYC Gap Report - Security & Audit | High | Yes | kyc-gap-report-security-audit, high, rbac, security |
| KGR-245 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, functional |
| KGR-246 | KYC Module | KYC Gap Report - Security & Audit | Medium | Yes | kyc-gap-report-security-audit, medium, functional |
| KGR-247 | KYC Module | KYC Gap Report - Security & Audit | Critical | Yes | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-248 | KYC Module | KYC Gap Report - Security & Audit | Critical | No | kyc-gap-report-security-audit, critical, functional |
| KGR-249 | KYC Module | KYC Gap Report - Security & Audit | High | No | kyc-gap-report-security-audit, high, audit, compliance |
| KGR-250 | KYC Module | KYC Gap Report - Security & Audit | Critical | No | kyc-gap-report-security-audit, critical, audit, compliance |
| KGR-251 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-252 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, boundary, negative |
| KGR-253 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, filter |
| KGR-254 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-255 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-256 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |
| KGR-257 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |
| KGR-258 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-259 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-260 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |
| KGR-261 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |
| KGR-262 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-263 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-264 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-265 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-266 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-267 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-268 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-269 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-270 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
| KGR-271 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |
| KGR-272 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, filter |
| KGR-273 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, modal |
| KGR-274 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, modal |
| KGR-275 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, functional |
| KGR-276 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, functional |
| KGR-277 | KYC Module | KYC Gap Report - Boundary & Negative Testing | High | Yes | kyc-gap-report-boundary-negative-testing, high, functional |
| KGR-278 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, functional |
| KGR-279 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Medium | Yes | kyc-gap-report-boundary-negative-testing, medium, functional |
| KGR-280 | KYC Module | KYC Gap Report - Boundary & Negative Testing | Critical | Yes | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

## 6. Automation Feasibility Matrix

**Summary:** 275 automation candidates, 5 manual-only

See [automation-feasibility.json](./automation-feasibility.json) for full machine-readable matrix.

| Test Case ID | Automation Layer | Automation Candidate | Reason |
| --- | --- | --- | --- |
| KGR-001 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-002 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-003 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-004 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-005 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-006 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-007 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-008 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-009 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-010 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-011 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-012 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-013 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-014 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-015 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-016 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-017 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-018 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-019 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-020 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-021 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-022 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-023 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-024 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-025 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-026 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-027 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-028 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-029 | UI + Database | Yes | KPI/grid count must reconcile with queryable source data |
| KGR-030 | UI + Database | Yes | KPI/grid count must reconcile with queryable source data |
| KGR-031 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-032 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-033 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-034 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-035 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-036 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-037 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-038 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-039 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-040 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-041 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-042 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-043 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-044 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-045 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-046 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-047 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-048 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-049 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-050 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-051 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-052 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-053 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-054 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-055 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-056 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-057 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-058 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-059 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-060 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-061 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-062 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-063 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-064 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-065 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-066 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-067 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-068 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-069 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-070 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-071 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-072 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-073 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-074 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-075 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-076 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-077 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-078 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-079 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-080 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-081 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-082 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-083 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-084 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-085 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-086 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-087 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-088 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-089 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-090 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-091 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-092 | UI + Database | Yes | KPI/grid count must reconcile with queryable source data |
| KGR-093 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-094 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-095 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-096 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-097 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-098 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-099 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-100 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-101 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-102 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-103 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-104 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-105 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-106 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-107 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-108 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-109 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-110 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-111 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-112 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-113 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-114 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-115 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-116 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-117 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-118 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-119 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-120 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-121 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-122 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-123 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-124 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-125 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-126 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-127 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-128 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-129 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-130 | API + Database | Yes | Score weight rules verifiable via API/DB without full UI dep |
| KGR-131 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-132 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-133 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-134 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-135 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-136 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-137 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-138 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-139 | UI + Security | Yes | Injection attempt via UI inputs; assert no execution |
| KGR-140 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-141 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-142 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-143 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-144 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-145 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-146 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-147 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-148 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-149 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-150 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-151 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-152 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-153 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-154 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-155 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-156 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-157 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-158 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-159 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-160 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-161 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-162 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-163 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-164 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-165 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-166 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-167 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-168 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-169 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-170 | Service Layer | Yes | Template change → score recalc → report sync orchestration |
| KGR-171 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-172 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-173 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-174 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-175 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-176 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-177 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-178 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-179 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-180 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-181 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-182 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-183 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-184 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-185 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-186 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-187 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-188 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-189 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-190 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-191 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-192 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-193 | UI + API | Yes | Download event plus file parse/API export endpoint |
| KGR-194 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-195 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-196 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-197 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-198 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-199 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-200 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-201 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-202 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-203 | UI + API | Yes | Download event plus file parse/API export endpoint |
| KGR-204 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-205 | UI + API | Yes | Download event plus file parse/API export endpoint |
| KGR-206 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-207 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-208 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-209 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-210 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-211 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-212 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-213 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-214 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-215 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-216 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-217 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-218 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-219 | Manual | No | Performance, audit immutability, or compliance sign-off requ |
| KGR-220 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-221 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-222 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-223 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-224 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-225 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-226 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-227 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-228 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-229 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-230 | UI | Yes | Visible DOM interaction on KYC Gap Report page |
| KGR-231 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-232 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-233 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-234 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-235 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-236 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-237 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-238 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-239 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-240 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-241 | Manual | No | Performance, audit immutability, or compliance sign-off requ |
| KGR-242 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-243 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-244 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-245 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-246 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-247 | Database + Manual | Yes | Audit trail validation requires backend query; immutability  |
| KGR-248 | Manual | No | Performance, audit immutability, or compliance sign-off requ |
| KGR-249 | Manual | No | Performance, audit immutability, or compliance sign-off requ |
| KGR-250 | Manual | No | Performance, audit immutability, or compliance sign-off requ |
| KGR-251 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-252 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-253 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-254 | UI + Security | Yes | Injection attempt via UI inputs; assert no execution |
| KGR-255 | UI + Security | Yes | Injection attempt via UI inputs; assert no execution |
| KGR-256 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-257 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-258 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-259 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-260 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-261 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-262 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-263 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-264 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-265 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-266 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-267 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-268 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-269 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-270 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-271 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-272 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-273 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-274 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-275 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-276 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-277 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-278 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-279 | UI | Yes | Filter/search boundary validation via visible UI controls |
| KGR-280 | UI | Yes | Filter/search boundary validation via visible UI controls |

## 7. Playwright POM Planning

| Scenario | Page Object | Component | Utility | Fixture |
| --- | --- | --- | --- | --- |
| Page load KGR-001–020 | KycGapReportPage | gapReportTitle, exportButton | openGapReport(), expectPageLoaded() | testData.baseUrl |
| KPI KGR-021–040 | KycGapReportPage | kpiTotalCustomers, kpiCustomersWithGaps | expectKpiCountsMatchGrid() | kyc-gap-report-data.json |
| Search/Filter KGR-041–070 | KycGapReportPage | searchInput, branchFilter, priorityFilter | search(), applyFilter() | filterPartitions |
| Grid KGR-071–100 | KycGapReportPage | gridTable, columnHeader | sortByColumn() | longNameCustomer |
| Score KGR-101–130 | KycGapReportPage | gapScoreCell | expectScoreEqualsWeights() | scoreScenarios |
| Modal KGR-131–160 | KycGapReportPage | gapDetailModal, missingFieldsList | openRowDetail() | multiGapCustomer |
| Pagination KGR-161–190 | KycGapReportPage | pageSizeSelect, nextPage | setPageSize(), goToNextPage() | paginatedDataset |
| Export KGR-191–220 | KycGapReportPage | exportButton | exportAndParseFile() | filteredState |
| RBAC KGR-221–225 | KycGapReportPage | sidebar link | expectAccessDenied() | multi-role .env |
| Audit KGR-231–250 | AuditLogPage (future) | audit table | queryAuditEntry() | templateActions |
| Negative KGR-251–280 | KycGapReportPage | scoreMinInput, scoreMaxInput | applyInvalidScoreRange() | injectionStrings |

**Artifacts:**
- Locators: `tests/objectrepositories/KycGapReportLocators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/KYCGapReportPages/KycGapReportPage.ts`
- Spec file: `tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts`
- Fixtures: `fixtures/kyc-gap-report-data.json`
- Generator: `pipeline/src/kyc-gap-report/generate-milestone.ts` (spec generation gated — see REVIEW.md)

## 8. Coverage Report

| Metric | Value |
| --- | --- |
| Total requirements identified | 280 |
| Functional areas (sub-modules) | 10 |
| Business rules extracted | 17 |
| Total scenarios | 280 |
| Total detailed test cases | 280 |
| Automation candidates | 275 |
| Manual-only scenarios | 5 |
| MM-TC overlap (partial) | 51 |
| Net-new KGR cases | 229 |

### Risk Areas
- Score band config drift
- CBS/DMS sync
- Multi-role test environment
- Audit backend access
- Export file format ambiguity

### Missing Requirements (not in Excel)
- CBS import failure handling
- DMS stale data reconciliation
- API rate limiting
- Offline mode
- Bulk export scheduling

### Traceability

See [traceability.json](./traceability.json) for KGR ↔ MM-TC-146–170 mapping.
