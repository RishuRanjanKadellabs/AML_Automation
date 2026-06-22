# KYC Gap Report — Detailed Test Cases (280)

### KGR-001 — Verify user can access KYC Gap Report from Missing Mandatory menu

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User logged into AML Platform with authorized access |
| Test Data | Authorized user |
| Steps | 1. Login to application 2. Expand Missing Mandatory menu 3. Click KYC Gap Report |
| Expected Result | KYC Gap Report screen opens successfully with all page components rendered |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-002 — Verify KYC Gap Report page title is displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Observe page title |
| Expected Result | Page title displays as "KYC Gap Report" |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-003 — Verify page subtitle is displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Verify subtitle text |
| Expected Result | Subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements" |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-004 — Verify Export button is displayed on page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Observe top right section |
| Expected Result | Export button is visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, export |

### KGR-005 — Verify all KPI cards are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Observe KPI section |
| Expected Result | All configured KPI cards are displayed without layout issues |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, kpi |

### KGR-006 — Verify report list section loads successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Observe report grid |
| Expected Result | Report list loads successfully with available records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-007 — Verify all configured filters are visible

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Verify Search filter 3. Verify Branch filter 4. Verify Customer Type filter 5. Verify Template filter 6. Verify Priority filter 7. Verify Gap Score filter |
| Expected Result | All configured filters are displayed and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, filter |

### KGR-008 — Verify report grid is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Observe report table |
| Expected Result | Grid loads successfully without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-009 — Verify pagination controls are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page with records available |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Scroll to bottom 3. Verify pagination controls |
| Expected Result | Items per page selector, page indicator and navigation controls are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, pagination |

### KGR-010 — Verify page loads successfully after browser refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | F5 Refresh |
| Steps | 1. Navigate to page 2. Refresh browser |
| Expected Result | Page reloads successfully without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-011 — Verify direct URL access for authorized user

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User has valid authenticated session |
| Test Data | KYC Gap Report URL |
| Steps | 1. Copy KYC Gap Report URL 2. Open URL directly |
| Expected Result | Page opens successfully without requiring additional navigation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-012 — Verify application back navigation from KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Click browser Back button |
| Expected Result | User is redirected to previous page without application error |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-013 — Verify navigation from KYC Gap Report to Missing Mandatory Template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open KYC Gap Report 2. Navigate to Missing Mandatory Data Template |
| Expected Result | Template screen opens successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-014 — Verify returning from Template screen preserves KYC Gap Report access

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on Missing Mandatory Template screen |
| Test Data | N/A |
| Steps | 1. Navigate to Template screen 2. Return to KYC Gap Report |
| Expected Result | KYC Gap Report opens successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-015 — Verify filter and page state is retained when navigating between Template and Report views

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User has applied filters and navigated beyond page 1 |
| Test Data | Filtered dataset |
| Steps | 1. Apply filters 2. Navigate to Template screen 3. Return to KYC Gap Report |
| Expected Result | Previously selected filters and page state remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, filter |

### KGR-016 — Verify unauthorized user cannot access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | User logged in with unauthorized role |
| Test Data | Unauthorized user |
| Steps | 1. Login with unauthorized role 2. Attempt to access KYC Gap Report |
| Expected Result | Access is denied as per security configuration |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, rbac, security |

### KGR-017 — Verify unauthenticated user cannot access KYC Gap Report URL

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User is not logged in |
| Test Data | KYC Gap Report URL |
| Steps | 1. Logout from application 2. Enter KYC Gap Report URL directly |
| Expected Result | User is redirected to login page or access denied screen |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, rbac, security |

### KGR-018 — Verify page loads without UI rendering issues

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to page 2. Review header, KPI cards, filters, grid and pagination |
| Expected Result | All UI components render correctly without overlap, truncation or broken layout |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-019 — Verify page remains functional after multiple navigations

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | User logged into application |
| Test Data | N/A |
| Steps | 1. Open KYC Gap Report 2. Navigate away 3. Return to page 4. Repeat multiple times |
| Expected Result | Page remains accessible and functional throughout navigation cycles |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-020 — Verify no application error occurs when opening KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | User logged into application |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Monitor page behavior |
| Expected Result | Page loads successfully without error messages, crashes or blank screens |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-021 — Verify Total Customers (CBS) KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Observe KPI section |
| Expected Result | Total Customers (CBS) KPI card is displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-022 — Verify Customers with Gaps KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Observe KPI section |
| Expected Result | Customers with Gaps KPI card is displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-023 — Verify Critical Priority KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Observe KPI section |
| Expected Result | Critical Priority KPI card is displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-024 — Verify KPI card labels are displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Verify KPI card labels |
| Expected Result | All KPI labels are displayed correctly without truncation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-025 — Verify Total Customers KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Observe Total Customers KPI |
| Expected Result | Total Customers KPI displays a valid numeric value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-026 — Verify Customers with Gaps KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Observe Customers with Gaps KPI |
| Expected Result | Customers with Gaps KPI displays a valid numeric value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-027 — Verify Critical Priority KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Observe Critical Priority KPI |
| Expected Result | Critical Priority KPI displays a valid numeric value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-028 — Verify Total Customers KPI count is greater than or equal to Customers with Gaps count

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | Report contains customer data |
| Test Data | N/A |
| Steps | 1. Compare Total Customers count with Customers with Gaps count |
| Expected Result | Customers with Gaps count is less than or equal to Total Customers count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-029 — Verify Customers with Gaps KPI count matches report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | Report data available |
| Test Data | Test dataset |
| Steps | 1. Identify customers with gaps 2. Compare with KPI count |
| Expected Result | Customers with Gaps KPI accurately reflects underlying data |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-030 — Verify Critical Priority KPI count matches report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | Report contains Critical priority records |
| Test Data | Test dataset |
| Steps | 1. Count Critical priority records 2. Compare with KPI value |
| Expected Result | Critical Priority KPI count matches report data |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-031 — Verify KPI values refresh when page is reloaded

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Note KPI values 2. Refresh page 3. Compare values |
| Expected Result | KPI values remain accurate after reload |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-032 — Verify KPI cards load without UI distortion

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review KPI card alignment and layout |
| Expected Result | KPI cards are properly aligned and rendered |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-033 — Verify KPI values are visible without truncation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review KPI values |
| Expected Result | KPI values are fully visible and readable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, kpi |

### KGR-034 — Verify KPI cards are displayed when report contains records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | Report contains records |
| Test Data | Test dataset |
| Steps | 1. Open report with available data |
| Expected Result | KPI cards display populated values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-035 — Verify KPI cards handle zero values correctly — KPI cards should support zero counts

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | Test dataset with zero KPI value |
| Test Data | Zero-value dataset |
| Steps | 1. Open report containing zero KPI count |
| Expected Result | KPI card displays value as 0 without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-036 — Verify KPI section remains visible after filter application

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | User is on report page |
| Test Data | Filtered dataset |
| Steps | 1. Apply report filters 2. Observe KPI section |
| Expected Result | KPI section remains visible and usable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, filter |

### KGR-037 — Verify KPI section remains visible after pagination navigation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | Multiple pages of records exist |
| Test Data | N/A |
| Steps | 1. Navigate between pages |
| Expected Result | KPI section remains accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, pagination |

### KGR-038 — Verify KPI cards are displayed before report grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review page layout |
| Expected Result | KPI cards appear above report filters and grid |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, kpi |

### KGR-039 — Verify KPI values do not display negative numbers

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Observe KPI values |
| Expected Result | All KPI values are zero or positive integers |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, boundary, negative |

### KGR-040 — Verify KPI cards load successfully within page initialization

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open page 2. Observe KPI loading behavior |
| Expected Result | KPI cards load successfully without errors or missing data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-041 — Verify Search field is displayed on KYC Gap Report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Locate Search field |
| Expected Result | Search field is displayed and available for input |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-042 — Verify search by exact customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page with available data |
| Test Data | Vikram Shah |
| Steps | 1. Enter exact customer name in Search field 2. Observe results |
| Expected Result | Only matching customer record is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-043 — Verify search by partial customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Vikram |
| Steps | 1. Enter partial customer name 2. Observe results |
| Expected Result | Matching records containing entered text are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-044 — Verify search by Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | IN-CUS-78821 |
| Steps | 1. Enter Customer ID 2. Observe results |
| Expected Result | Matching customer record is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-045 — Verify search is case insensitive

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | VIKRAM / vikram |
| Steps | 1. Search using uppercase value 2. Search using lowercase value |
| Expected Result | Same matching results are returned |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-046 — Verify search using alphanumeric Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | AE-COR-34421 |
| Steps | 1. Enter alphanumeric Customer ID 2. Observe results |
| Expected Result | Matching customer record is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-047 — Verify search with leading spaces

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Vikram Shah |
| Steps | 1. Enter search value with leading spaces |
| Expected Result | Correct matching results are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-048 — Verify search with trailing spaces

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Vikram Shah |
| Steps | 1. Enter search value with trailing spaces |
| Expected Result | Correct matching results are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-049 — Verify search with special characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | @#$%^&* |
| Steps | 1. Enter special characters in search field |
| Expected Result | System handles input without errors and returns no matching records if applicable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-050 — Verify search with non-existing customer value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | XYZ_TEST_123 |
| Steps | 1. Enter non-existing customer value |
| Expected Result | No records are returned and application remains stable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-051 — Verify real-time search behavior

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Vikram |
| Steps | 1. Type characters gradually in search field |
| Expected Result | Results update dynamically based on entered text |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-052 — Verify Branch filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open Branch filter dropdown |
| Expected Result | Branch options are displayed as Branch Name (Branch Code) |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-053 — Verify filtering by Branch

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Mumbai Main (MUM01) |
| Steps | 1. Select Branch filter 2. Observe results |
| Expected Result | Only records belonging to selected branch are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-054 — Verify Branch filter with no matching records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Test branch |
| Steps | 1. Select branch having no matching records |
| Expected Result | No records are displayed and application remains stable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-055 — Verify Customer Type filter values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open Customer Type dropdown |
| Expected Result | Dropdown displays Individual and Corporate options |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-056 — Verify filtering by Individual customer type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Individual |
| Steps | 1. Select Individual customer type |
| Expected Result | Only Individual customer records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-057 — Verify filtering by Corporate customer type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Corporate |
| Steps | 1. Select Corporate customer type |
| Expected Result | Only Corporate customer records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-058 — Verify Template filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open Template filter |
| Expected Result | All configured template names are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-059 — Verify filtering by template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Standard KYC — Individual |
| Steps | 1. Select template filter |
| Expected Result | Only records mapped to selected template are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-060 — Verify Priority filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Open Priority filter |
| Expected Result | Dropdown displays Low, Medium, High and Critical values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-061 — Verify filtering by Low priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Low |
| Steps | 1. Select Low priority filter |
| Expected Result | Only Low priority records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-062 — Verify filtering by Medium priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Medium |
| Steps | 1. Select Medium priority filter |
| Expected Result | Only Medium priority records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-063 — Verify filtering by High priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | High |
| Steps | 1. Select High priority filter |
| Expected Result | Only High priority records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-064 — Verify filtering by Critical priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Critical |
| Steps | 1. Select Critical priority filter |
| Expected Result | Only Critical priority records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-065 — Verify Gap Score minimum filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Min = 5 |
| Steps | 1. Enter minimum score value |
| Expected Result | Only records having score greater than or equal to minimum value are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-066 — Verify Gap Score maximum filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Max = 10 |
| Steps | 1. Enter maximum score value |
| Expected Result | Only records having score less than or equal to maximum value are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-067 — Verify Gap Score range filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Min = 5, Max = 10 |
| Steps | 1. Enter minimum score 2. Enter maximum score |
| Expected Result | Only records within specified score range are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-068 — Verify Clear Filters functionality

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | User has applied multiple filters |
| Test Data | N/A |
| Steps | 1. Apply filters 2. Click Clear Filters |
| Expected Result | All filters are cleared and complete dataset is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-069 — Verify filter combination: Branch + Customer Type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | MUM01 + Individual |
| Steps | 1. Select Branch 2. Select Customer Type |
| Expected Result | Records matching both filters are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-070 — Verify filter combination: Search + Priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Vikram + Critical |
| Steps | 1. Enter search value 2. Select Priority |
| Expected Result | Only records satisfying both conditions are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-071 — Verify all configured report columns are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to report grid 2. Verify visible columns |
| Expected Result | Grid displays Customer, Customer ID, Type, Branch, Branch Code, Template Applied, KYC Gap Score, Priority and Actions columns |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-072 — Verify Customer column displays customer full name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | Customer records available |
| Test Data | Test dataset |
| Steps | 1. Review Customer column values |
| Expected Result | Customer full names are displayed accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-073 — Verify Customer ID column displays unique customer identifiers

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | Customer records available |
| Test Data | Test dataset |
| Steps | 1. Review Customer ID column |
| Expected Result | Customer IDs are displayed accurately and uniquely |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-074 — Verify Type column displays customer type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Type column |
| Expected Result | Customer type is displayed correctly using configured badge format |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-075 — Verify Branch column displays branch name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Branch column |
| Expected Result | Branch name is displayed correctly for each record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-076 — Verify Branch Code column displays branch code

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Branch Code column |
| Expected Result | Correct branch code is displayed for each record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-077 — Verify Template Applied column displays assigned template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Template Applied column |
| Expected Result | Correct template name is displayed for each customer |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-078 — Verify KYC Gap Score column displays numeric score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review KYC Gap Score column |
| Expected Result | KYC Gap Score is displayed as integer and not percentage |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-079 — Verify Priority column displays risk classification

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Priority column |
| Expected Result | Priority value is displayed correctly according to assigned classification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-080 — Verify Actions column displays View button

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Review Actions column |
| Expected Result | View button is displayed for every row |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, modal |

### KGR-081 — Verify Customer column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Customer column header |
| Expected Result | Records are sorted based on Customer name |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-082 — Verify Customer ID column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Customer ID header |
| Expected Result | Records are sorted based on Customer ID |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-083 — Verify Branch column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Branch header |
| Expected Result | Records are sorted based on Branch value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-084 — Verify Branch Code column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Branch Code header |
| Expected Result | Records are sorted based on Branch Code value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-085 — Verify KYC Gap Score column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click KYC Gap Score header |
| Expected Result | Records are sorted based on Gap Score values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-086 — Verify ascending sorting for Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Customer header once |
| Expected Result | Records are sorted in ascending alphabetical order |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-087 — Verify descending sorting for Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click Customer header twice |
| Expected Result | Records are sorted in descending alphabetical order |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-088 — Verify ascending sorting for KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click KYC Gap Score header once |
| Expected Result | Records are sorted from lowest score to highest score |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-089 — Verify descending sorting for KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Click KYC Gap Score header twice |
| Expected Result | Records are sorted from highest score to lowest score |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-090 — Verify sorting persists correctly with filtered data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User has applied filters |
| Test Data | Filtered dataset |
| Steps | 1. Apply filter 2. Sort grid |
| Expected Result | Filtered records are sorted correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-091 — Verify non-sortable columns do not display sort behavior

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Attempt sorting Type column |
| Expected Result | Non-sortable columns do not trigger sorting |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-092 — Verify grid data accuracy against source records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | Test data available |
| Test Data | Customer records |
| Steps | 1. Compare report data with source data |
| Expected Result | Displayed values accurately match source records |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-093 — Verify grid handles long customer names — Long names should display without UI breakage

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | Long customer name |
| Test Data | Long customer name |
| Steps | 1. Review grid display |
| Expected Result | Grid remains properly formatted and data remains readable |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-094 — Verify grid handles long template names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | Long template exists |
| Test Data | Long template name |
| Steps | 1. Review Template Applied column |
| Expected Result | Grid remains properly formatted without data corruption |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-095 — Verify grid displays no duplicate records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | Test dataset available |
| Test Data | Test dataset |
| Steps | 1. Review report records |
| Expected Result | No duplicate records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-096 — Verify grid displays records after page refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Refresh page 2. Review grid |
| Expected Result | Grid reloads successfully with correct data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-097 — Verify grid displays records after filter reset

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | Filters applied |
| Test Data | N/A |
| Steps | 1. Apply filters 2. Click Clear Filters |
| Expected Result | Complete dataset is displayed after filter reset |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-098 — Verify grid remains stable when no records match filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | Apply restrictive filters |
| Test Data | Test filter combination |
| Steps | 1. Apply filters returning no results |
| Expected Result | Grid displays empty state without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-099 — Verify Priority values contain only supported classifications

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review Priority column |
| Expected Result | Priority values are limited to Low, Medium, High and Critical |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-100 — Verify report is read-only from landing grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | N/A |
| Steps | 1. Review grid actions |
| Expected Result | Only View action is available and no edit functionality is present |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-101 — Verify KYC Gap Score is calculated as sum of missing field weights

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer exists with known missing fields |
| Test Data | Mandatory(3)+Mandatory(3)+Optional(1) |
| Steps | 1. Open customer Gap Detail Modal 2. Note missing fields and weights 3. Calculate total manually 4. Compare with displayed score |
| Expected Result | Display score equals sum of all missing field weights |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-102 — Verify missing Mandatory field contributes 3 points to Gap Score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer has missing Mandatory field |
| Test Data | Mandatory Field |
| Steps | 1. Open Gap Detail Modal 2. Verify weight assigned to Mandatory field |
| Expected Result | Each missing Mandatory field contributes exactly 3 points |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-103 — Verify missing Optional field contributes 1 point to Gap Score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer has missing Optional field |
| Test Data | Optional Field |
| Steps | 1. Open Gap Detail Modal 2. Verify weight assigned to Optional field |
| Expected Result | Each missing Optional field contributes exactly 1 point |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-104 — Verify customer with one missing Mandatory field displays score 3

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | 1 Mandatory field |
| Steps | 1. Open customer record with one missing Mandatory field |
| Expected Result | KYC Gap Score is displayed as 3 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-105 — Verify customer with one missing Optional field displays score 1

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | 1 Optional field |
| Steps | 1. Open customer record with one missing Optional field |
| Expected Result | KYC Gap Score is displayed as 1 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-106 — Verify score calculation with multiple Mandatory fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | 3 Mandatory fields |
| Steps | 1. Open customer with 3 missing Mandatory fields |
| Expected Result | KYC Gap Score is displayed as 9 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-107 — Verify score calculation with multiple Optional fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | 4 Optional fields |
| Steps | 1. Open customer with 4 missing Optional fields |
| Expected Result | KYC Gap Score is displayed as 4 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-108 — Verify score calculation with mixed Mandatory and Optional fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | 2 Mandatory + 3 Optional |
| Steps | 1. Open customer with mixed missing fields |
| Expected Result | KYC Gap Score is displayed as 9 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-109 — Verify score is displayed as integer value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review KYC Gap Score column |
| Expected Result | KYC Gap Score is displayed as integer value only |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-110 — Verify customer with no missing fields displays score 0

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer with complete KYC |
| Test Data | Complete KYC record |
| Steps | 1. Open customer record |
| Expected Result | KYC Gap Score is displayed as 0 |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-111 — Verify score displayed in report matches score in Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer record available |
| Test Data | Test dataset |
| Steps | 1. Note score from grid 2. Open Gap Detail Modal 3. Compare scores |
| Expected Result | Score value is identical in report and modal |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-112 — Verify score calculation includes all missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer with multiple missing fields |
| Test Data | Test dataset |
| Steps | 1. Count missing fields 2. Sum weights 3. Compare with score |
| Expected Result | All missing fields contribute to final score |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-113 — Verify score calculation excludes completed fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | Customer with completed and missing fields |
| Test Data | Test dataset |
| Steps | 1. Review customer data 2. Verify score calculation |
| Expected Result | Only missing fields contribute to score |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |

### KGR-114 — Verify score updates after Mandatory field remediation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer with missing Mandatory field |
| Test Data | Test dataset |
| Steps | 1. Complete missing Mandatory field 2. Refresh report |
| Expected Result | KYC Gap Score decreases by 3 points |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-115 — Verify score updates after Optional field remediation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Customer with missing Optional field |
| Test Data | Test dataset |
| Steps | 1. Complete missing Optional field 2. Refresh report |
| Expected Result | KYC Gap Score decreases by 1 point |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-116 — Verify score remains unchanged when unrelated customer data changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Medium |
| Preconditions | Customer exists |
| Test Data | Test dataset |
| Steps | 1. Update unrelated field 2. Refresh report |
| Expected Result | KYC Gap Score remains unchanged |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |

### KGR-117 — Verify Low priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Template score bands configured |
| Test Data | Test dataset |
| Steps | 1. Open customer record 2. Verify score and priority |
| Expected Result | Displayed priority matches template-defined Low band |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-118 — Verify Medium priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Template score bands configured |
| Test Data | Test dataset |
| Steps | 1. Open customer record 2. Verify score and priority |
| Expected Result | Displayed priority matches template-defined Medium band |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-119 — Verify High priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Template score bands configured |
| Test Data | Test dataset |
| Steps | 1. Open customer record 2. Verify score and priority |
| Expected Result | Displayed priority matches template-defined High band |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-120 — Verify Critical priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Template score bands configured |
| Test Data | Test dataset |
| Steps | 1. Open customer record 2. Verify score and priority |
| Expected Result | Displayed priority matches template-defined Critical band |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-121 — Verify priority is derived from assigned template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Multiple templates with different score bands available |
| Test Data | Same score, different templates |
| Steps | 1. Compare customers having same score under different templates |
| Expected Result | Priority is derived from assigned template configuration |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-122 — Verify same score can result in different priorities under different templates

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Multiple templates configured |
| Test Data | Same score across templates |
| Steps | 1. Compare customers with identical scores |
| Expected Result | Customers may display different priorities based on assigned template |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-123 — Verify priority recalculation after score band configuration change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Template score bands updated |
| Test Data | Test dataset |
| Steps | 1. Modify score bands 2. Refresh report |
| Expected Result | Priority is recalculated according to updated template bands |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-124 — Verify score recalculation after new field is added to template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | Template updated with additional field |
| Test Data | Test dataset |
| Steps | 1. Add field to template 2. Refresh report |
| Expected Result | KYC Gap Score is recalculated correctly |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |

### KGR-125 — Verify score recalculation after field requirement changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Field requirement modified |
| Test Data | Optional→Mandatory |
| Steps | 1. Change field requirement 2. Refresh report |
| Expected Result | Score reflects updated field weight |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-126 — Verify score does not display negative values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | User is on report page |
| Test Data | Test dataset |
| Steps | 1. Review report data |
| Expected Result | All displayed scores are zero or positive integers |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, boundary, negative |

### KGR-127 — Verify score calculation consistency across multiple refreshes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Medium |
| Preconditions | Customer record available |
| Test Data | Test dataset |
| Steps | 1. Refresh report multiple times |
| Expected Result | Score remains consistent across refreshes |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |

### KGR-128 — Verify score calculation for highest configured score range

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | Boundary score |
| Steps | 1. Open customer having highest score band value |
| Expected Result | Score and priority are calculated correctly at upper boundary |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, boundary, negative |

### KGR-129 — Verify score calculation for lowest configured score range

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Test customer prepared |
| Test Data | Boundary score |
| Steps | 1. Open customer having lowest score band value |
| Expected Result | Score and priority are calculated correctly at lower boundary |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, boundary, negative |

### KGR-130 — Verify score displayed in exported report matches application data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | Export functionality available |
| Test Data | Export file |
| Steps | 1. Export report 2. Compare score values |
| Expected Result | Exported scores match application data exactly |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, export |

### KGR-131 — Verify View button opens Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page with records available |
| Test Data | Test customer |
| Steps | 1. Locate customer record 2. Click View button |
| Expected Result | Gap Detail Modal opens successfully for selected customer |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-132 — Verify modal displays customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal 2. Verify customer name |
| Expected Result | Customer name displayed in modal matches selected record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-133 — Verify modal displays CIF/Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | IN-CUS-78821 |
| Steps | 1. Open Gap Detail Modal 2. Verify Customer ID |
| Expected Result | Displayed Customer ID matches report record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-134 — Verify modal displays Branch Name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | Gap Detail Modal is open |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal 2. Verify Branch Name |
| Expected Result | Branch Name matches report record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-135 — Verify modal displays Branch Code

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | Gap Detail Modal is open |
| Test Data | MUM01 |
| Steps | 1. Open Gap Detail Modal 2. Verify Branch Code |
| Expected Result | Branch Code matches report record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-136 — Verify modal displays applied template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | Test template |
| Steps | 1. Open Gap Detail Modal 2. Verify Template Applied |
| Expected Result | Template displayed matches report record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-137 — Verify Missing Fields section is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open Gap Detail Modal 2. Verify Missing Fields section |
| Expected Result | Missing Fields section is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-138 — Verify each missing field displays field name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has missing fields |
| Test Data | Test dataset |
| Steps | 1. Open Gap Detail Modal 2. Review Missing Fields list |
| Expected Result | Field name is displayed for every missing field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-139 — Verify each missing field displays description

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | Customer has missing fields |
| Test Data | Test dataset |
| Steps | 1. Open Gap Detail Modal 2. Review Missing Fields list |
| Expected Result | Field description is displayed for every missing field |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-gap-detail-modal, high, functional |

### KGR-140 — Verify each missing field displays weight

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has missing fields |
| Test Data | Test dataset |
| Steps | 1. Open Gap Detail Modal 2. Verify weights |
| Expected Result | Each missing field displays correct weight value |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-141 — Verify each missing field displays requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has missing fields |
| Test Data | Test dataset |
| Steps | 1. Open Gap Detail Modal 2. Review requirement type |
| Expected Result | Requirement type is displayed correctly for each field |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-142 — Verify Mandatory fields display correct requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has missing Mandatory field |
| Test Data | Mandatory Field |
| Steps | 1. Open Gap Detail Modal 2. Verify requirement type |
| Expected Result | Missing Mandatory fields are labeled as Mandatory |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-143 — Verify Optional fields display correct requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has missing Optional field |
| Test Data | Optional Field |
| Steps | 1. Open Gap Detail Modal 2. Verify requirement type |
| Expected Result | Missing Optional fields are labeled as Optional |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-144 — Verify Gap Type badge is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open Gap Detail Modal 2. Verify Gap Type badge |
| Expected Result | Gap Type badge is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-145 — Verify CIP Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has CIP gap |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal |
| Expected Result | CIP badge is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-146 — Verify CDD Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has CDD gap |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal |
| Expected Result | CDD badge is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-147 — Verify EDD Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has EDD gap |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal |
| Expected Result | EDD badge is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-148 — Verify Score Summary section is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open Gap Detail Modal 2. Verify Score Summary |
| Expected Result | Score Summary section is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-149 — Verify Total KYC Gap Score displayed in modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | Test dataset |
| Steps | 1. Open Gap Detail Modal 2. Verify score |
| Expected Result | Total KYC Gap Score is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-150 — Verify modal score matches report grid score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer record available |
| Test Data | Test dataset |
| Steps | 1. Note score from grid 2. Open modal 3. Compare values |
| Expected Result | Modal score matches report grid score |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-151 — Verify risk label is displayed in score summary

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open Gap Detail Modal 2. Verify risk label |
| Expected Result | Risk label is displayed with score summary |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-152 — Verify risk label matches customer priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer record available |
| Test Data | Test dataset |
| Steps | 1. Compare report priority and modal risk label |
| Expected Result | Risk label matches report priority classification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-153 — Verify modal handles customer with single missing field

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | Customer with one missing field available |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal |
| Expected Result | Single missing field is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-154 — Verify modal handles customer with multiple missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer with multiple missing fields available |
| Test Data | Test customer |
| Steps | 1. Open Gap Detail Modal |
| Expected Result | All missing fields are displayed without truncation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-155 — Verify missing field count matches displayed records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has known missing fields |
| Test Data | Test dataset |
| Steps | 1. Count displayed missing fields 2. Compare with source data |
| Expected Result | Missing field count matches source data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-156 — Verify total score equals sum of displayed field weights

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | Customer has multiple missing fields |
| Test Data | Test dataset |
| Steps | 1. Sum displayed weights 2. Compare with score |
| Expected Result | Score summary equals total of displayed field weights |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-157 — Verify modal can be closed using Close/X button

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open modal 2. Click Close/X button |
| Expected Result | Modal closes successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-158 — Verify modal can be closed using ESC key

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | Gap Detail Modal is open |
| Test Data | N/A |
| Steps | 1. Open modal 2. Press ESC key |
| Expected Result | Modal closes successfully or behaves as per design |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-159 — Verify modal closes without data corruption

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | Gap Detail Modal is open |
| Test Data | Test dataset |
| Steps | 1. Open modal 2. Close modal 3. Verify grid |
| Expected Result | Report data remains unchanged after modal closure |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-160 — Verify modal supports scrolling for large datasets

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | Customer has many missing fields |
| Test Data | Test customer |
| Steps | 1. Open modal with large dataset |
| Expected Result | Modal scrolls correctly and all data remains accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-161 — Verify pagination controls are displayed on report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | Report contains records |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Scroll to bottom of report |
| Expected Result | Pagination controls are displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-162 — Verify Items Per Page dropdown is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | Report contains records |
| Test Data | N/A |
| Steps | 1. Navigate to report page 2. Review pagination section |
| Expected Result | Items Per Page dropdown is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-163 — Verify Items Per Page default value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | Report contains records |
| Test Data | N/A |
| Steps | 1. Open report page 2. Observe Items Per Page control |
| Expected Result | Default page size is displayed as configured |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-164 — Verify Items Per Page supports value 10

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | Report contains more than 10 records |
| Test Data | 10 |
| Steps | 1. Select 10 from page size dropdown |
| Expected Result | Maximum 10 records are displayed on current page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-165 — Verify Items Per Page supports value 20

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | Report contains more than 20 records |
| Test Data | 20 |
| Steps | 1. Select 20 from page size dropdown |
| Expected Result | Maximum 20 records are displayed on current page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-166 — Verify Items Per Page supports value 50

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | Report contains more than 50 records |
| Test Data | 50 |
| Steps | 1. Select 50 from page size dropdown |
| Expected Result | Maximum 50 records are displayed on current page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-167 — Verify page size changes update grid correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | Report contains multiple pages |
| Test Data | N/A |
| Steps | 1. Change page size from 10 to 20 |
| Expected Result | Grid refreshes and displays records according to selected page size |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-168 — Verify Previous button is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | User is on paginated report |
| Test Data | N/A |
| Steps | 1. Navigate to report page |
| Expected Result | Previous button is displayed in pagination controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-169 — Verify Next button is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | User is on paginated report |
| Test Data | N/A |
| Steps | 1. Navigate to report page |
| Expected Result | Next button is displayed in pagination controls |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-170 — Verify Next button navigates to next page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | Multiple pages available |
| Test Data | N/A |
| Steps | 1. Click Next button |
| Expected Result | User is navigated to next page and new records are displayed |
| Automation Candidate | Yes |
| Automation Layer | Service Layer |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-171 — Verify Previous button navigates to previous page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | N/A |
| Steps | 1. Click Previous button |
| Expected Result | User is navigated to previous page and corresponding records are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-172 — Verify Previous button behavior on first page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | User is on Page 1 |
| Test Data | N/A |
| Steps | 1. Observe Previous button |
| Expected Result | Previous button is disabled or unavailable on first page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, functional |

### KGR-173 — Verify Next button behavior on last page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | User is on last page |
| Test Data | N/A |
| Steps | 1. Navigate to last page 2. Observe Next button |
| Expected Result | Next button is disabled or unavailable on last page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, functional |

### KGR-174 — Verify page indicator is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | Multiple pages available |
| Test Data | N/A |
| Steps | 1. Navigate to report page |
| Expected Result | Page indicator displays "Page X of Y" |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-175 — Verify item range indicator is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | Multiple records available |
| Test Data | N/A |
| Steps | 1. Navigate to report page |
| Expected Result | Item range indicator displays "A-B of N items" |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-176 — Verify page count calculation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | Known dataset available |
| Test Data | Test dataset |
| Steps | 1. Verify total records 2. Verify page count |
| Expected Result | Page count is calculated correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, pagination |

### KGR-177 — Verify pagination with filtered records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | Apply filters resulting in multiple pages |
| Test Data | Filtered dataset |
| Steps | 1. Apply filter 2. Navigate pages |
| Expected Result | Pagination works correctly for filtered records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, filter |

### KGR-178 — Verify pagination with search results

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | Search returns multiple pages |
| Test Data | Test dataset |
| Steps | 1. Search records 2. Navigate pages |
| Expected Result | Pagination works correctly for searched records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, filter |

### KGR-179 — Verify pagination resets to Page 1 after Search

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | Search criteria |
| Steps | 1. Navigate to page 2 2. Perform search |
| Expected Result | Pagination resets to Page 1 after search |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-180 — Verify pagination resets to Page 1 after Branch filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | MUM01 |
| Steps | 1. Navigate to page 2 2. Apply Branch filter |
| Expected Result | Pagination resets to Page 1 after filter application |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-181 — Verify pagination resets to Page 1 after Customer Type filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | Individual |
| Steps | 1. Navigate to page 2 2. Apply Customer Type filter |
| Expected Result | Pagination resets to Page 1 after filter application |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-182 — Verify pagination resets to Page 1 after Template filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | Standard KYC - Individual |
| Steps | 1. Navigate to page 2 2. Apply Template filter |
| Expected Result | Pagination resets to Page 1 after filter application |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-183 — Verify pagination resets to Page 1 after Priority filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | Critical |
| Steps | 1. Navigate to page 2 2. Apply Priority filter |
| Expected Result | Pagination resets to Page 1 after filter application |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-184 — Verify pagination resets to Page 1 after Gap Score filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | Min=5 Max=10 |
| Steps | 1. Navigate to page 2 2. Apply Gap Score filter |
| Expected Result | Pagination resets to Page 1 after filter application |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, gap-score, business-rule |

### KGR-185 — Verify pagination resets to Page 1 after Clear Filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 with filters applied |
| Test Data | N/A |
| Steps | 1. Apply filters 2. Navigate to page 2 3. Click Clear Filters |
| Expected Result | Pagination resets to Page 1 and full dataset is displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-186 — Verify pagination state is retained when opening and closing Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | User is on page greater than 1 |
| Test Data | N/A |
| Steps | 1. Navigate to page 2 2. Open Gap Detail Modal 3. Close Modal |
| Expected Result | User remains on same page after closing modal |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, modal |

### KGR-187 — Verify pagination state retained while navigating between Report and Template screens

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | User is on page greater than 1 |
| Test Data | N/A |
| Steps | 1. Navigate to page 2 2. Open Template screen 3. Return to Report |
| Expected Result | Previously selected page remains active |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, pagination |

### KGR-188 — Verify pagination works correctly when total records equal page size

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | Dataset prepared |
| Test Data | 10 Records |
| Steps | 1. Set page size to 10 2. Load exactly 10 records |
| Expected Result | Single page is displayed correctly without extra page generation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-189 — Verify pagination works correctly when total records are less than page size

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | Dataset prepared |
| Test Data | 5 Records |
| Steps | 1. Set page size to 10 2. Load 5 records |
| Expected Result | Single page is displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-190 — Verify pagination works correctly when no records are available

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | No matching records available |
| Test Data | N/A |
| Steps | 1. Apply filters resulting in zero records |
| Expected Result | Pagination remains stable and no application error occurs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-191 — Verify Export button is displayed on KYC Gap Report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Navigate to KYC Gap Report 2. Verify Export button |
| Expected Result | Export button is visible and accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-192 — Verify Export button is enabled when records exist

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Report contains records |
| Test Data | N/A |
| Steps | 1. Navigate to report page 2. Observe Export button |
| Expected Result | Export button is enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-193 — Verify export downloads report successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page with records |
| Test Data | N/A |
| Steps | 1. Click Export button |
| Expected Result | Report file is downloaded successfully without errors |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-194 — Verify exported file contains report records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open exported file 2. Verify records |
| Expected Result | Exported file contains report records |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-195 — Verify exported file contains Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Customer column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-196 — Verify exported file contains Customer ID column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Customer ID column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-197 — Verify exported file contains Type column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Type column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-198 — Verify exported file contains Branch column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Branch column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-199 — Verify exported file contains Branch Code column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Branch Code column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-200 — Verify exported file contains Template Applied column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Template Applied column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-201 — Verify exported file contains KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | KYC Gap Score column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-202 — Verify exported file contains Priority column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Export file |
| Steps | 1. Open export file |
| Expected Result | Priority column is present with correct values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-203 — Verify exported record count matches report record count

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Test dataset |
| Steps | 1. Count records in report 2. Count records in export |
| Expected Result | Exported record count matches report data |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-204 — Verify exported Customer values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Test dataset |
| Steps | 1. Compare report and export values |
| Expected Result | Customer values match report data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-205 — Verify exported KYC Gap Score values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Test dataset |
| Steps | 1. Compare report scores with export |
| Expected Result | Exported scores match report data exactly |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-206 — Verify exported Priority values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Export completed successfully |
| Test Data | Test dataset |
| Steps | 1. Compare report priorities with export |
| Expected Result | Exported priorities match report data exactly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-207 — Verify export respects active Search filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Search filter applied |
| Test Data | Vikram Shah |
| Steps | 1. Apply Search filter 2. Export report |
| Expected Result | Only filtered records are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-208 — Verify export respects active Branch filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Branch filter applied |
| Test Data | MUM01 |
| Steps | 1. Apply Branch filter 2. Export report |
| Expected Result | Only branch-filtered records are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-209 — Verify export respects active Customer Type filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Customer Type filter applied |
| Test Data | Corporate |
| Steps | 1. Apply Customer Type filter 2. Export report |
| Expected Result | Only filtered customer type records are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-210 — Verify export respects active Template filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Template filter applied |
| Test Data | Standard KYC - Corporate |
| Steps | 1. Apply Template filter 2. Export report |
| Expected Result | Only template-filtered records are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-211 — Verify export respects active Priority filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Priority filter applied |
| Test Data | Critical |
| Steps | 1. Apply Priority filter 2. Export report |
| Expected Result | Only selected priority records are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-212 — Verify export respects active Gap Score filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Gap Score filter applied |
| Test Data | Min=5 Max=10 |
| Steps | 1. Apply score range filter 2. Export report |
| Expected Result | Only records within selected score range are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-213 — Verify export supports combined filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Multiple filters applied |
| Test Data | Branch+Priority+Template |
| Steps | 1. Apply multiple filters 2. Export report |
| Expected Result | Only records matching all active filters are exported |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-214 — Verify export after sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Medium |
| Preconditions | Sorted report available |
| Test Data | N/A |
| Steps | 1. Sort report 2. Export data |
| Expected Result | Export completes successfully with accurate data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, medium, export |

### KGR-215 — Verify export works from Page 1

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | User is on Page 1 |
| Test Data | N/A |
| Steps | 1. Export report |
| Expected Result | Export completes successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-216 — Verify export works from non-first page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | User is on Page 2 or higher |
| Test Data | N/A |
| Steps | 1. Navigate to Page 2 2. Export report |
| Expected Result | Export includes all applicable records, not just current page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-217 — Verify export works when page size is changed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Medium |
| Preconditions | Page size changed |
| Test Data | 50 Records/Page |
| Steps | 1. Change page size 2. Export report |
| Expected Result | Exported data remains accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, medium, export |

### KGR-218 — Verify export file opens successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | Export completed |
| Test Data | Export file |
| Steps | 1. Open exported file |
| Expected Result | Exported file opens successfully without corruption |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-219 — Verify export handles large datasets

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | Large dataset available |
| Test Data | 10000 Records |
| Steps | 1. Export large dataset |
| Expected Result | Export completes successfully without application failure |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-export, critical, export |

### KGR-220 — Verify export behavior when no records are available

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | No matching records available |
| Test Data | N/A |
| Steps | 1. Apply filters resulting in no records 2. Click Export |
| Expected Result | System displays appropriate behavior for empty dataset export without crashing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-221 — Verify authenticated Compliance Officer can access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged in as Compliance Officer |
| Test Data | Compliance Officer |
| Steps | 1. Login as Compliance Officer 2. Navigate to KYC Gap Report |
| Expected Result | KYC Gap Report is accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-222 — Verify authenticated Administrator can access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged in as Administrator |
| Test Data | Administrator |
| Steps | 1. Login as Administrator 2. Navigate to KYC Gap Report |
| Expected Result | KYC Gap Report is accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-223 — Verify unauthorized role cannot access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged in with unauthorized role |
| Test Data | Unauthorized Role |
| Steps | 1. Login with unauthorized role 2. Attempt to access report |
| Expected Result | Access is denied as per RBAC configuration |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-224 — Verify unauthenticated user cannot access KYC Gap Report URL

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User not logged in |
| Test Data | KYC Gap Report URL |
| Steps | 1. Open KYC Gap Report URL directly |
| Expected Result | User is redirected to login page or access denied page |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-225 — Verify direct URL access respects RBAC permissions

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged in with unauthorized role |
| Test Data | KYC Gap Report URL |
| Steps | 1. Enter report URL directly |
| Expected Result | Access remains restricted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-226 — Verify session timeout prevents report access

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | User session configured with timeout |
| Test Data | N/A |
| Steps | 1. Login 2. Allow session to expire 3. Access report |
| Expected Result | User is redirected to login screen |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, high, functional |

### KGR-227 — Verify report is read-only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review report actions 2. Attempt modification |
| Expected Result | No edit functionality is available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-228 — Verify report does not provide Bulk Notify action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review page actions |
| Expected Result | Bulk Notify action is not available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, high, functional |

### KGR-229 — Verify report does not provide Edit action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | N/A |
| Steps | 1. Review Actions column |
| Expected Result | Only View action is available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-230 — Verify View action does not allow data modification

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User opens Gap Detail Modal |
| Test Data | N/A |
| Steps | 1. Open Gap Detail Modal 2. Review controls |
| Expected Result | Modal provides read-only information only |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, modal |

### KGR-231 — Verify audit log entry generated for template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has permission to create template |
| Test Data | Test Template |
| Steps | 1. Create template 2. Review audit log |
| Expected Result | Audit log contains template creation event |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-232 — Verify audit log captures user ID during template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Template creation performed |
| Test Data | Test Template |
| Steps | 1. Create template 2. Review audit log |
| Expected Result | Audit entry contains correct User ID |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-233 — Verify audit log captures timestamp during template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Template creation performed |
| Test Data | Test Template |
| Steps | 1. Create template 2. Review audit log |
| Expected Result | Audit entry contains accurate timestamp |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-234 — Verify audit log entry generated for template cloning

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has permission to clone template |
| Test Data | Cloned Template |
| Steps | 1. Clone template 2. Review audit log |
| Expected Result | Audit log contains template clone event |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-235 — Verify audit log entry generated when field requirement changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has permission to modify template |
| Test Data | Mandatory → Optional |
| Steps | 1. Change field requirement 2. Save changes |
| Expected Result | Audit log captures configuration change |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-236 — Verify audit log records previous value for requirement change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Requirement change performed |
| Test Data | Test Configuration |
| Steps | 1. Change field requirement 2. Review audit log |
| Expected Result | Previous value is recorded correctly |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-237 — Verify audit log records new value for requirement change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Requirement change performed |
| Test Data | Test Configuration |
| Steps | 1. Change field requirement 2. Review audit log |
| Expected Result | New value is recorded correctly |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-238 — Verify audit log entry generated when custom field is added

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has permission to modify template |
| Test Data | Custom Field |
| Steps | 1. Add custom field 2. Save changes |
| Expected Result | Audit log contains custom field addition event |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-239 — Verify audit log entry generated when score bands are modified

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has permission to modify template |
| Test Data | Score Band Update |
| Steps | 1. Update score bands 2. Save changes |
| Expected Result | Audit log contains score band modification event |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-240 — Verify audit log captures before and after values for score band changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Score bands modified |
| Test Data | Test Configuration |
| Steps | 1. Update score bands 2. Review audit log |
| Expected Result | Audit log contains both previous and updated values |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-241 — Verify audit log remains immutable

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | Audit records available |
| Test Data | N/A |
| Steps | 1. Open audit log 2. Attempt modification |
| Expected Result | Audit records cannot be modified |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, high, audit, compliance |

### KGR-242 — Verify audit records are retained after page refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | Audit entries available |
| Test Data | N/A |
| Steps | 1. Review audit log 2. Refresh page |
| Expected Result | Audit records remain available after refresh |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, audit, compliance |

### KGR-243 — Verify unauthorized user cannot modify template configuration

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged in with unauthorized role |
| Test Data | Unauthorized User |
| Steps | 1. Attempt template modification |
| Expected Result | Modification is blocked |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-244 — Verify unauthorized user cannot access audit records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | User logged in with unauthorized role |
| Test Data | Unauthorized User |
| Steps | 1. Attempt audit log access |
| Expected Result | Access to audit records is denied |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, high, rbac, security |

### KGR-245 — Verify application prevents access after logout

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User logged into application |
| Test Data | KYC Gap Report URL |
| Steps | 1. Logout 2. Access report URL |
| Expected Result | User is redirected to login page |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-246 — Verify report remains accessible after successful re-authentication

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | User previously logged out |
| Test Data | Authorized User |
| Steps | 1. Login again 2. Access report |
| Expected Result | KYC Gap Report is accessible again |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, functional |

### KGR-247 — Verify audit log captures template archival action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has archive permission |
| Test Data | Test Template |
| Steps | 1. Archive template 2. Review audit log |
| Expected Result | Audit log contains template archival event |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-248 — Verify templates cannot be permanently deleted

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | User has template management access |
| Test Data | Test Template |
| Steps | 1. Review template actions 2. Attempt delete |
| Expected Result | Delete option is unavailable and only archive/deactivate is supported |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-249 — Verify archived templates remain traceable in audit history

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | Archived template exists |
| Test Data | Test Template |
| Steps | 1. Open audit records for archived template |
| Expected Result | Audit history remains available for archived template |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, high, audit, compliance |

### KGR-250 — Verify audit trail completeness for template lifecycle

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | Template lifecycle actions performed |
| Test Data | Test Template |
| Steps | 1. Perform lifecycle actions 2. Review audit history |
| Expected Result | Complete end-to-end audit trail is available for template lifecycle |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-251 — Verify search with blank value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Blank Search |
| Steps | 1. Leave Search field blank 2. Observe results |
| Expected Result | Complete dataset is displayed without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-252 — Verify search with whitespace-only value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data |  |
| Steps | 1. Enter spaces in Search field |
| Expected Result | System treats input as blank and displays valid results |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, boundary, negative |

### KGR-253 — Verify search with maximum supported characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Long Text |
| Steps | 1. Enter maximum length search value |
| Expected Result | System processes input without UI or application failure |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, filter |

### KGR-254 — Verify search with SQL injection pattern

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | OR 1=1 -- |
| Steps | 1. Enter SQL injection string |
| Expected Result | System treats input as text and prevents unauthorized behavior |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-255 — Verify search with script injection pattern

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | <script>alert(1)</script> |
| Steps | 1. Enter script tag payload |
| Expected Result | Script is not executed and application remains secure |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-256 — Verify Gap Score filter with Min value only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Min=5 |
| Steps | 1. Enter Min score only |
| Expected Result | Records greater than or equal to Min value are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-257 — Verify Gap Score filter with Max value only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Max=10 |
| Steps | 1. Enter Max score only |
| Expected Result | Records less than or equal to Max value are displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-258 — Verify Gap Score filter with Min greater than Max

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Min=20 Max=10 |
| Steps | 1. Enter Min=20 2. Enter Max=10 |
| Expected Result | System prevents invalid range or displays validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-259 — Verify Gap Score filter with negative values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Min=-1 |
| Steps | 1. Enter negative value |
| Expected Result | Negative values are rejected or handled appropriately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-260 — Verify Gap Score filter with decimal values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | 5.5 |
| Steps | 1. Enter decimal score value |
| Expected Result | System validates or processes input according to specification |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-261 — Verify Gap Score filter with alphabetic characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | ABC |
| Steps | 1. Enter alphabetic value |
| Expected Result | Alphabetic values are not accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-262 — Verify Gap Score filter with special characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | @#$% |
| Steps | 1. Enter special characters |
| Expected Result | Invalid characters are not accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-263 — Verify Gap Score boundary value 0

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 0 |
| Steps | 1. Filter using score 0 |
| Expected Result | Records with score 0 are returned correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-264 — Verify Gap Score boundary value 25

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 25 |
| Steps | 1. Filter using score 25 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-265 — Verify Gap Score boundary value 26

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 26 |
| Steps | 1. Filter using score 26 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-266 — Verify Gap Score boundary value 50

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 50 |
| Steps | 1. Filter using score 50 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-267 — Verify Gap Score boundary value 51

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 51 |
| Steps | 1. Filter using score 51 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-268 — Verify Gap Score boundary value 75

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 75 |
| Steps | 1. Filter using score 75 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-269 — Verify Gap Score boundary value 76

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 76 |
| Steps | 1. Filter using score 76 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-270 — Verify Gap Score boundary value 100

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | Test customer exists |
| Test Data | 100 |
| Steps | 1. Filter using score 100 |
| Expected Result | Boundary value is processed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-271 — Verify Gap Score filter with value greater than 100

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | 101 |
| Steps | 1. Enter score greater than 100 |
| Expected Result | System rejects invalid value or returns appropriate result |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-272 — Verify report behavior when no records match filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Non-matching filters |
| Steps | 1. Apply restrictive filters |
| Expected Result | System displays empty state without errors |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, filter |

### KGR-273 — Verify opening Gap Detail Modal for customer with single missing field

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | Customer with one missing field exists |
| Test Data | Single Missing Field |
| Steps | 1. Open customer detail |
| Expected Result | Modal displays accurate information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, modal |

### KGR-274 — Verify opening Gap Detail Modal for customer with large number of missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | Customer with many missing fields exists |
| Test Data | Large Missing Field Set |
| Steps | 1. Open customer detail |
| Expected Result | Modal displays all fields correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, modal |

### KGR-275 — Verify report behavior when all customers belong to same priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | Test dataset prepared |
| Test Data | All Critical Records |
| Steps | 1. Load dataset |
| Expected Result | Report functions correctly with single-priority data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-276 — Verify report behavior when all customers belong to same branch

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | Test dataset prepared |
| Test Data | Single Branch Dataset |
| Steps | 1. Load dataset |
| Expected Result | Report functions correctly with single-branch data |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-277 — Verify report behavior with duplicate customer names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | Test dataset contains duplicate names |
| Test Data | Duplicate Names |
| Steps | 1. Search duplicate customer names |
| Expected Result | Correct records are displayed with unique identifiers |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, functional |

### KGR-278 — Verify report behavior with special characters in customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | Customer record exists |
| Test Data | Special Character Name |
| Steps | 1. Search and review customer record |
| Expected Result | Special characters are displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-279 — Verify report behavior with extremely long customer names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | Customer record exists |
| Test Data | Long Customer Name |
| Steps | 1. Review customer record |
| Expected Result | Grid and modal remain properly formatted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-280 — Verify report recovery after invalid filter input

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | User is on KYC Gap Report page |
| Test Data | Invalid Score Range |
| Steps | 1. Enter invalid filter values 2. Correct input |
| Expected Result | System recovers successfully and continues normal operation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |
