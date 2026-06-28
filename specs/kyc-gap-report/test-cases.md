# KYC Gap Report — Detailed Test Cases (291)

### KGR-001 — Verify user can access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. User logged in with KYC Gap Report access |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify layout, badges, and controls render without overlap or clipping. 4. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 5. Verify no unhandled errors occur during test execution. 6. Verify active filters and grid state remain consistent after interactions. 7. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 8. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 9. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 10. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. |
| Expected Result | 1. KYC Gap Report opens with title, subtitle, KPI strip, filters, and report grid visible. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-002 — Verify KYC Gap Report page title is displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KYC Gap Report page title is displayed correctly. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-003 — Verify page subtitle is displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page subtitle is displayed correctly. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-004 — Verify Export button is displayed on page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export button is displayed on page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, export |

### KGR-005 — Verify all KPI cards are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. All KPI cards are displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, kpi |

### KGR-006 — Verify report list section loads successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report list section loads successfully. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-007 — Verify all configured filters are visible

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. All configured filters are visible. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, filter |

### KGR-008 — Verify report grid is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report grid is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-009 — Verify pagination controls are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination controls are displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, pagination |

### KGR-010 — Verify page loads successfully after browser refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Note current KPI values, filter selections, and visible grid rows. 8. Refresh the browser or click Refresh control and wait for data reload to complete. 9. Verify page components reload successfully without JavaScript errors or broken layout. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page loads successfully after browser refresh. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. Refresh the browser or click Refresh control and wait for data reload to complete. 9. Page components reload successfully without JavaScript errors or broken layout. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-011 — Verify direct URL access for authorized user

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Direct URL access for authorized user. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, functional |

### KGR-012 — Verify application back navigation from KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Application back navigation from KYC Gap Report. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-013 — Verify KYC Gap Report is available in KYC module navigation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. User is logged in with KYC module access |
| Test Data | Role: Compliance Officer; Action: Verify module entry |
| Steps | 1. Open KYC module navigation. 2. Review available KYC module options. 3. Verify KYC Gap Report is listed 4. Open KYC Gap Report 5. Verify KYC Gap Report is listed in KYC module navigation. 6. Open KYC Gap Report and verify the report screen loads. 7. Verify page title displays as "KYC Gap Report". 8. Verify layout, badges, and controls render without overlap or clipping. 9. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 10. Verify no unhandled errors occur during test execution. 11. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KYC Gap Report is listed in KYC module navigation and opens successfully. 2. KYC module navigation opens successfully. 3. Listed KYC module options include KYC Gap Report. 4. KYC Gap Report is listed. 5. KYC Gap Report opens successfully. 6. KYC Gap Report is listed in KYC module navigation. 7. The report screen loads. 8. Page title displays as "KYC Gap Report". |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-014 — Verify user can return to KYC Gap Report after navigating away

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. User is on KYC Gap Report |
| Test Data | Role: Compliance Officer; Action: Return to report |
| Steps | 1. Open KYC Gap Report 2. Navigate to another KYC screen 3. Return to KYC Gap Report 4. Verify layout, badges, and controls render without overlap or clipping. 5. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 6. Verify no unhandled errors occur during test execution. 7. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 8. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 9. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 10. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. |
| Expected Result | 1. KYC Gap Report reloads successfully when selected again. 2. KYC Gap Report opens successfully. 3. to another KYC screen completes successfully. 4. Return to KYC Gap Report completes with expected report state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-015 — Verify filters and page state persist when leaving and returning to KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. Filters and pagination applied on KYC Gap Report |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Priority: High; Page: 2 |
| Steps | 1. Apply filters on KYC Gap Report 2. Navigate to another KYC screen 3. Return to KYC Gap Report 4. Verify layout, badges, and controls render without overlap or clipping. 5. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 6. Verify no unhandled errors occur during test execution. 7. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 8. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 9. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. 10. Verify all displayed values remain stable after interaction with no stale or duplicated records visible. |
| Expected Result | 1. Previously applied filters and pagination remain unchanged. 2. Applied filters on KYC Gap Report and the report updates accordingly. 3. to another KYC screen completes successfully. 4. Return to KYC Gap Report completes with expected report state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, filter |

### KGR-016 — Verify unauthorized user cannot access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Navigate to another KYC screen. 8. Return to KYC Gap Report and verify the report reloads successfully. 9. Verify access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 10. Verify no KPI data, customer records, or export controls are exposed to unauthorized users. 11. Note current KPI values, filter selections, and visible grid rows. 12. Refresh the browser or click Refresh control and wait for data reload to complete. 13. Verify page components reload successfully without JavaScript errors or broken layout. 14. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 15. Verify no unhandled errors occur during test execution. 16. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthorized user cannot access KYC Gap Report. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. to another KYC screen completes successfully. 9. Return to KYC Gap Report completes with expected report state. 10. Access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 11. No KPI data, customer records, or export controls are exposed to unauthorized users. 12. Refresh the browser or click Refresh control and wait for data reload to complete. 13. Page components reload successfully without JavaScript errors or broken layout. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, rbac, security |

### KGR-017 — Verify unauthenticated user cannot access KYC Gap Report URL

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Navigate to another KYC screen. 8. Return to KYC Gap Report and verify the report reloads successfully. 9. Verify access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 10. Verify no KPI data, customer records, or export controls are exposed to unauthorized users. 11. Note current KPI values, filter selections, and visible grid rows. 12. Refresh the browser or click Refresh control and wait for data reload to complete. 13. Verify page components reload successfully without JavaScript errors or broken layout. 14. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 15. Verify no unhandled errors occur during test execution. 16. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthenticated user cannot access KYC Gap Report URL. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. to another KYC screen completes successfully. 9. Return to KYC Gap Report completes with expected report state. 10. Access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 11. No KPI data, customer records, or export controls are exposed to unauthorized users. 12. Refresh the browser or click Refresh control and wait for data reload to complete. 13. Page components reload successfully without JavaScript errors or broken layout. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, rbac, security |

### KGR-018 — Verify page loads without UI rendering issues

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page loads without UI rendering issues. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-019 — Verify page remains functional after multiple navigations

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Navigate to another KYC screen. 8. Return to KYC Gap Report and verify the report reloads successfully. 9. Note current KPI values, filter selections, and visible grid rows. 10. Refresh the browser or click Refresh control and wait for data reload to complete. 11. Verify page components reload successfully without JavaScript errors or broken layout. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page remains functional after multiple navigations. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. to another KYC screen completes successfully. 9. Return to KYC Gap Report completes with expected report state. 10. Refresh the browser or click Refresh control and wait for data reload to complete. 11. Page components reload successfully without JavaScript errors or broken layout. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-020 — Verify no application error occurs when opening KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Action: Open KYC Gap Report |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify layout, badges, and controls render without overlap or clipping. 8. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 9. Verify no unhandled errors occur during test execution. 10. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. No application error occurs when opening KYC Gap Report. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, critical, functional |

### KGR-021 — Verify Total Customers (CBS) KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Total Customers (CBS) KPI card is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-022 — Verify Customers with Gaps KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customers with Gaps KPI card is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-023 — Verify Critical Priority KPI card is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Critical Priority KPI card is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-024 — Verify KPI card labels are displayed correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI card labels are displayed correctly. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-025 — Verify Total Customers KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Total Customers KPI value is numeric. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-026 — Verify Customers with Gaps KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customers with Gaps KPI value is numeric. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-027 — Verify Critical Priority KPI value is numeric

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Critical Priority KPI value is numeric. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-028 — Verify Total Customers KPI count is greater than or equal to Customers with Gaps count

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Total Customers KPI count is greater than or equal to Customers with Gaps count. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-029 — Verify Customers with Gaps KPI count matches report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customers with Gaps KPI count matches report data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-030 — Verify Critical Priority KPI count matches report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Critical Priority KPI count matches report data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-kpi-cards, critical, kpi |

### KGR-031 — Verify KPI values refresh when page is reloaded

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Note current KPI values, filter selections, and visible grid rows. 9. Refresh the browser or click Refresh control and wait for data reload to complete. 10. Verify page components reload successfully without JavaScript errors or broken layout. 11. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI values refresh when page is reloaded. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Refresh the browser or click Refresh control and wait for data reload to complete. 10. Page components reload successfully without JavaScript errors or broken layout. 11. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-032 — Verify KPI cards load without UI distortion

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI cards load without UI distortion. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-033 — Verify KPI values are visible without truncation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI values are visible without truncation. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, kpi |

### KGR-034 — Verify KPI cards are displayed when report contains records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI cards are displayed when report contains records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-035 — Verify KPI cards handle zero values correctly — KPI cards should support zero counts

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI cards handle zero values correctly — KPI cards should support zero counts. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, kpi |

### KGR-036 — Verify KPI section remains visible after filter application

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI section remains visible after filter application. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, filter |

### KGR-037 — Verify KPI section remains visible after pagination navigation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI section remains visible after pagination navigation. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, pagination |

### KGR-038 — Verify KPI cards are displayed before report grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Low |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI cards are displayed before report grid. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, low, kpi |

### KGR-039 — Verify KPI values do not display negative numbers

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI values do not display negative numbers. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, high, boundary, negative |

### KGR-040 — Verify KPI cards load successfully within page initialization

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - KPI Cards |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify page title displays as "KYC Gap Report". 5. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Verify Export button is visible, enabled, and positioned in the page header. 7. Verify KYC Gap Report is listed in KYC module navigation. 8. Verify Critical Priority Customers classified as Critical priority based on their KYC Gap Score. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KPI cards load successfully within page initialization. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Page title displays as "KYC Gap Report". 6. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 7. Export button is visible, enabled, and positioned in the page header. 8. KYC Gap Report is listed in KYC module navigation. 9. Critical Priority Customers classified as Critical priority based on their KYC Gap Score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-kpi-cards, medium, kpi |

### KGR-041 — Verify Search field is displayed on KYC Gap Report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search field is displayed on KYC Gap Report page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-042 — Verify search by exact customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search by exact customer name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-043 — Verify search by partial customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search by partial customer name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-044 — Verify search by Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search by Customer ID. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-045 — Verify search is case insensitive

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search is case insensitive. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-046 — Verify search using alphanumeric Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search using alphanumeric Customer ID. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-047 — Verify search with leading spaces

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search with leading spaces. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-048 — Verify search with trailing spaces

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search with trailing spaces. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-049 — Verify search with special characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search with special characters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-050 — Verify search with non-existing customer value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Search with non-existing customer value. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-051 — Verify real-time search behavior

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Real-time search behavior. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-052 — Verify Branch filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Branch filter dropdown values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-053 — Verify filtering by Branch

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Branch. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-054 — Verify Branch filter with no matching records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; No-match value: zzzz-no-match-99999; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Branch filter with no matching records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, medium, filter |

### KGR-055 — Verify Customer Type filter values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Customer Type filter values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-056 — Verify filtering by Individual customer type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Individual customer type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-057 — Verify filtering by Corporate customer type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Corporate customer type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-058 — Verify Template filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Template filter dropdown values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-059 — Verify filtering by template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by template. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-060 — Verify Priority filter dropdown values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Priority filter dropdown values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-061 — Verify filtering by Low priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Low priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-062 — Verify filtering by Medium priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Medium priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-063 — Verify filtering by High priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Ravi Patel (CUST-1000005) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: High; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by High priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-064 — Verify filtering by Critical priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filtering by Critical priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-065 — Verify Gap Score minimum filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Gap Score minimum filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-066 — Verify Gap Score maximum filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Gap Score maximum filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-067 — Verify Gap Score range filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Gap Score range filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, gap-score, business-rule |

### KGR-068 — Verify Clear Filters functionality

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Clear Filters functionality. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, critical, filter |

### KGR-069 — Verify filter combination: Branch + Customer Type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filter combination: Branch + Customer Type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-070 — Verify filter combination: Search + Priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Search & Filters |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Search keyword: KYC; Exact match: Simplified KYC Customer; Branch: INST-DEMO-001 (INST-DEMO-001); Priority filter: Low; Gap Score range: 10–50 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Locate the global search input and verify placeholder text indicates customer name or ID search. 5. Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 6. Verify Row 2 Gap Score Min and Max range inputs accept numeric values only. 7. Verify Clear Filters control resets all search and filter inputs to default state. 8. Enter search keyword "KYC" and verify grid filters in real time. 9. Enter exact customer name "Simplified KYC Customer" and verify precise match behavior. 10. Enter non-matching value "zzzz-no-match-99999" and verify empty or no-records state. 11. Open Branch filter dropdown and verify branch names display with branch codes in parentheses. 12. Select a branch filter value and verify only matching branch records appear in the grid. 13. Apply Individual customer type filter and verify only Individual badge rows are displayed. 14. Apply Corporate customer type filter and verify only Corporate badge rows are displayed. 15. Open Template filter and verify available template names match assigned templates in grid data. 16. Select a template filter and verify grid shows only customers with that template applied. 17. Apply Low priority filter and verify grid rows display matching Low priority classification. 18. Apply Medium priority filter and verify grid rows display matching Medium priority classification. 19. Apply High priority filter and verify grid rows display matching High priority classification. 20. Apply Critical priority filter and verify grid rows display matching Critical priority classification. |
| Expected Result | 1. Filter combination: Search + Priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Placeholder text indicates customer name or ID search. 6. Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled. 7. Row 2 Gap Score Min and Max range inputs accept numeric values only. 8. Clear Filters control resets all search and filter inputs to default state. 9. Search or filter input returns the expected matching or empty result set. 10. Branch names display with branch codes in parentheses. 11. Selected filter value is applied and grid data updates correctly. 12. Only Individual badge rows are displayed. 13. Only Corporate badge rows are displayed. 14. Available template names match assigned templates in grid data. 15. Grid rows display matching Low priority classification. 16. Grid rows display matching Medium priority classification. 17. Grid rows display matching High priority classification. 18. Grid rows display matching Critical priority classification. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-search-filters, high, filter |

### KGR-071 — Verify all configured report columns are displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. All configured report columns are displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-072 — Verify Customer column displays customer full name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customer column displays customer full name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-073 — Verify Customer ID column displays unique customer identifiers

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customer ID column displays unique customer identifiers. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-074 — Verify Type column displays customer type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Type column displays customer type badge. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-075 — Verify Branch column displays branch name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Branch column displays branch name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-076 — Verify Branch Code column displays branch code

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Branch Code column displays branch code. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-077 — Verify Template Applied column displays assigned template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Template Applied column displays assigned template. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-078 — Verify KYC Gap Score column displays numeric score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KYC Gap Score column displays numeric score. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-079 — Verify Priority column displays risk classification

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Priority column displays risk classification. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-080 — Verify Actions column displays View button

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Actions column displays View button. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, modal |

### KGR-081 — Verify Customer column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Customer column supports sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-082 — Verify Customer ID column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Customer ID column supports sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-083 — Verify Branch column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Branch column supports sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-084 — Verify Branch Code column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Branch Code column supports sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-085 — Verify KYC Gap Score column supports sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. KYC Gap Score column supports sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-086 — Verify ascending sorting for Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Ascending sorting for Customer column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-087 — Verify descending sorting for Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Descending sorting for Customer column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-088 — Verify ascending sorting for KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Ascending sorting for KYC Gap Score column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-089 — Verify descending sorting for KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Descending sorting for KYC Gap Score column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, gap-score, business-rule |

### KGR-090 — Verify sorting persists correctly with filtered data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Sorting persists correctly with filtered data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-091 — Verify non-sortable columns do not display sort behavior

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate; Sort column: KYC Gap Score |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order. 14. Click the same column header again and verify descending sort order is applied. 15. Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Verify each grid row displays a View action button in the Actions column. 17. Click View on the first visible row and verify Gap Detail Modal opens. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Non-sortable columns do not display sort behavior. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Selected action completes and shows the expected screen, modal, or download. 15. Non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click. 16. Each grid row displays a View action button in the Actions column. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-092 — Verify grid data accuracy against source records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid data accuracy against source records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI + Database |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-093 — Verify grid handles long customer names — Long names should display without UI breakage

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid handles long customer names — Long names should display without UI breakage. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-094 — Verify grid handles long template names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid handles long template names. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, medium, functional |

### KGR-095 — Verify grid displays no duplicate records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid displays no duplicate records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-096 — Verify grid displays records after page refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid displays records after page refresh. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-097 — Verify grid displays records after filter reset

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid displays records after filter reset. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-098 — Verify grid remains stable when no records match filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Apply filters that yield zero matches and verify empty state or no-records message is displayed. 16. Verify Template Applied No Name of the KYC template assigned to this customer. 17. Verify layout, badges, and controls render without overlap or clipping. 18. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 19. Verify no unhandled errors occur during test execution. 20. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Grid remains stable when no records match filters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Empty state or no-records message is displayed. 17. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, filter |

### KGR-099 — Verify Priority values contain only supported classifications

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Priority values contain only supported classifications. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-100 — Verify report is read-only from landing grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify no Edit button or inline edit controls are present in the landing grid. 16. Verify Missing Fields and Gap Type are not shown as landing table columns. 17. Verify Bulk Notify or bulk remediation actions are not available on the landing page. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Report is read-only from landing grid. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. No Edit button or inline edit controls are present in the landing grid. 17. Missing Fields and Gap Type are not shown as landing table columns. 18. Bulk Notify or bulk remediation actions are not available on the landing page. 19. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, critical, functional |

### KGR-101 — Verify KYC Gap Score is calculated as sum of missing field weights

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KYC Gap Score is calculated as sum of missing field weights. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-102 — Verify missing Mandatory field contributes 3 points to Gap Score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Simplified KYC Customer (CIF-1001); Score: 3; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Missing Mandatory field contributes 3 points to Gap Score. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-103 — Verify missing Optional field contributes 1 point to Gap Score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Simplified KYC Customer (CIF-1001); Score: 3; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Missing Optional field contributes 1 point to Gap Score. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-104 — Verify customer with one missing Mandatory field displays score 3

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customer with one missing Mandatory field displays score 3. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-105 — Verify customer with one missing Optional field displays score 1

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customer with one missing Optional field displays score 1. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-106 — Verify score calculation with multiple Mandatory fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation with multiple Mandatory fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-107 — Verify score calculation with multiple Optional fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation with multiple Optional fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-108 — Verify score calculation with mixed Mandatory and Optional fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation with mixed Mandatory and Optional fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-109 — Verify score is displayed as integer value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score is displayed as integer value. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-110 — Verify customer with no missing fields displays score 0

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Complete KYC Customer (CIF-1004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Complete KYC Customer (CIF-1004); Score: 0; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Verify customer with zero missing fields displays KYC Gap Score of 0. 9. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Customer with no missing fields displays score 0. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Customer with zero missing fields displays KYC Gap Score of 0. 10. Modal Total KYC Gap Score matches the grid row score. 11. Refresh report data after backend template or field changes and verify scores recalculate correctly. 12. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-111 — Verify score displayed in report matches score in Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score displayed in report matches score in Gap Detail Modal. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-112 — Verify score calculation includes all missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation includes all missing fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-113 — Verify score calculation excludes completed fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation excludes completed fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |

### KGR-114 — Verify score updates after Mandatory field remediation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score updates after Mandatory field remediation. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-115 — Verify score updates after Optional field remediation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score updates after Optional field remediation. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-116 — Verify score remains unchanged when unrelated customer data changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score remains unchanged when unrelated customer data changes. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |

### KGR-117 — Verify Low priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Low priority classification based on template score bands. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-118 — Verify Medium priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Medium priority classification based on template score bands. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-119 — Verify High priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Ravi Patel (CUST-1000005) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Ravi Patel (CUST-1000005); Score: 36; Priority: High |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. High priority classification based on template score bands. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-120 — Verify Critical priority classification based on template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Critical priority classification based on template score bands. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-121 — Verify priority is derived from assigned template score bands

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Priority is derived from assigned template score bands. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-122 — Verify same score can result in different priorities under different templates

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Same score can result in different priorities under different templates. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-123 — Verify priority recalculation after score band configuration change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Priority recalculation after score band configuration change. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-124 — Verify score recalculation after new field is added to template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score recalculation after new field is added to template. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, gap-score, business-rule |

### KGR-125 — Verify score recalculation after field requirement changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score recalculation after field requirement changes. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, gap-score, business-rule |

### KGR-126 — Verify score does not display negative values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Verify customer with zero missing fields displays KYC Gap Score of 0. 9. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score does not display negative values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Customer with zero missing fields displays KYC Gap Score of 0. 10. Modal Total KYC Gap Score matches the grid row score. 11. Refresh report data after backend template or field changes and verify scores recalculate correctly. 12. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, high, boundary, negative |

### KGR-127 — Verify score calculation consistency across multiple refreshes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation consistency across multiple refreshes. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, medium, gap-score, business-rule |

### KGR-128 — Verify score calculation for highest configured score range

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation for highest configured score range. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, boundary, negative |

### KGR-129 — Verify score calculation for lowest configured score range

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score calculation for lowest configured score range. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, boundary, negative |

### KGR-130 — Verify score displayed in exported report matches application data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Score Calculation |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Simplified KYC Customer (CIF-1001) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Simplified KYC Customer (CIF-1001); Score: 3; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify mandatory missing field weight contributes +3 to KYC Gap Score. 5. Verify optional missing field weight contributes +1 to KYC Gap Score. 6. Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 7. Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 8. Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score. 9. Refresh report data after backend template or field changes and verify scores recalculate correctly. 10. Verify Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. 11. Verify layout, badges, and controls render without overlap or clipping. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score displayed in exported report matches application data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Mandatory missing field weight contributes +3 to KYC Gap Score. 6. Optional missing field weight contributes +1 to KYC Gap Score. 7. KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label. 8. Priority classification (Low/Medium/High/Critical) aligns with template score band configuration. 9. Modal Total KYC Gap Score matches the grid row score. 10. Refresh report data after backend template or field changes and verify scores recalculate correctly. 11. Formula KYC Gap Score = Σ (weight of each missing field) Mandatory field missing +3 to Gap Score Optional field missing +1 to Gap Score Score display Raw integer (e.g., 7), not a percentage. |
| Automation Candidate | Yes |
| Automation Layer | API + Database |
| Tags | kyc-gap-report-gap-score-calculation, critical, export |

### KGR-131 — Verify View button opens Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. View button opens Gap Detail Modal. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-132 — Verify modal displays customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal displays customer name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-133 — Verify modal displays CIF/Customer ID

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal displays CIF/Customer ID. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-134 — Verify modal displays Branch Name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal displays Branch Name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-135 — Verify modal displays Branch Code

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal displays Branch Code. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-136 — Verify modal displays applied template

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal displays applied template. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-137 — Verify Missing Fields section is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Missing Fields section is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-138 — Verify each missing field displays field name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Each missing field displays field name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-139 — Verify each missing field displays description

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Each missing field displays description. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-gap-detail-modal, high, functional |

### KGR-140 — Verify each missing field displays weight

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Each missing field displays weight. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-141 — Verify each missing field displays requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Each missing field displays requirement type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-142 — Verify Mandatory fields display correct requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Mandatory fields display correct requirement type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-143 — Verify Optional fields display correct requirement type

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Optional fields display correct requirement type. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-144 — Verify Gap Type badge is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Type badge is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-145 — Verify CIP Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. CIP Gap Type badge. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-146 — Verify CDD Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. CDD Gap Type badge. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-147 — Verify EDD Gap Type badge

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. EDD Gap Type badge. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-148 — Verify Score Summary section is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Score Summary section is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-149 — Verify Total KYC Gap Score displayed in modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Total KYC Gap Score displayed in modal. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-150 — Verify modal score matches report grid score

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal score matches report grid score. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-151 — Verify risk label is displayed in score summary

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Risk label is displayed in score summary. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-152 — Verify risk label matches customer priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Risk label matches customer priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-153 — Verify modal handles customer with single missing field

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal handles customer with single missing field. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-154 — Verify modal handles customer with multiple missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal handles customer with multiple missing fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, modal |

### KGR-155 — Verify missing field count matches displayed records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Missing field count matches displayed records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, functional |

### KGR-156 — Verify total score equals sum of displayed field weights

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Total score equals sum of displayed field weights. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, critical, gap-score, business-rule |

### KGR-157 — Verify modal can be closed using Close/X button

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal can be closed using Close/X button. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-158 — Verify modal can be closed using ESC key

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal can be closed using ESC key. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-159 — Verify modal closes without data corruption

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal closes without data corruption. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, medium, modal |

### KGR-160 — Verify modal supports scrolling for large datasets

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal supports scrolling for large datasets. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-161 — Verify pagination controls are displayed on report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination controls are displayed on report page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-162 — Verify Items Per Page dropdown is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Items Per Page dropdown is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-163 — Verify Items Per Page default value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Items Per Page default value. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-164 — Verify Items Per Page supports value 10

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Items Per Page supports value 10. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-165 — Verify Items Per Page supports value 20

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Items Per Page supports value 20. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-166 — Verify Items Per Page supports value 50

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Items Per Page supports value 50. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-167 — Verify page size changes update grid correctly

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page size changes update grid correctly. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-168 — Verify Previous button is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Previous button is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-169 — Verify Next button is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Next button is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-170 — Verify Next button navigates to next page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Next button navigates to next page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | Service Layer |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-171 — Verify Previous button navigates to previous page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Previous button navigates to previous page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, functional |

### KGR-172 — Verify Previous button behavior on first page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Previous button behavior on first page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, functional |

### KGR-173 — Verify Next button behavior on last page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Next button behavior on last page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, functional |

### KGR-174 — Verify page indicator is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page indicator is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-175 — Verify item range indicator is displayed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Item range indicator is displayed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, functional |

### KGR-176 — Verify page count calculation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Page count calculation. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, pagination |

### KGR-177 — Verify pagination with filtered records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination with filtered records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, filter |

### KGR-178 — Verify pagination with search results

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination with search results. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, filter |

### KGR-179 — Verify pagination resets to Page 1 after Search

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Search. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-180 — Verify pagination resets to Page 1 after Branch filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Branch filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-181 — Verify pagination resets to Page 1 after Customer Type filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Customer Type filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-182 — Verify pagination resets to Page 1 after Template filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Template filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-183 — Verify pagination resets to Page 1 after Priority filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Priority filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-184 — Verify pagination resets to Page 1 after Gap Score filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Gap Score filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, gap-score, business-rule |

### KGR-185 — Verify pagination resets to Page 1 after Clear Filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination resets to Page 1 after Clear Filters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, filter |

### KGR-186 — Verify pagination state is retained when opening and closing Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination state is retained when opening and closing Gap Detail Modal. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, modal |

### KGR-187 — Verify pagination state retained while navigating between Report and Template screens

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination state retained while navigating between Report and Template screens. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, critical, pagination |

### KGR-188 — Verify pagination works correctly when total records equal page size

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination works correctly when total records equal page size. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-189 — Verify pagination works correctly when total records are less than page size

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination works correctly when total records are less than page size. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, medium, pagination |

### KGR-190 — Verify pagination works correctly when no records are available

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Pagination |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Report dataset exceeds default page size. |
| Test Data | Role: Compliance Officer; Page sizes: 10, 20, 50; Default: 10 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify default page size is 10 records per page. 5. Change items per page to 10 and verify grid displays at most 10 rows. 6. Change items per page to 20 and verify grid displays at most 20 rows. 7. Change items per page to 50 and verify grid displays at most 50 rows. 8. Click Next page and verify page indicator updates to next page number. 9. Click Previous page and verify navigation returns to prior page. 10. Verify page indicator displays "Page X of Y" and item range "A–B of N items" format. 11. Navigate to a later page, apply a filter change, and verify pagination resets to page 1. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Pagination works correctly when no records are available. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Default page size is 10 records per page. 6. Pagination or page size change updates the grid as expected. 7. Selected action completes and shows the expected screen, modal, or download. 8. Page indicator displays "Page X of Y" and item range "A–B of N items" format. 9. to a later page, apply a filter change, and verify pagination resets to page 1 completes successfully. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-pagination, high, pagination |

### KGR-191 — Verify Export button is displayed on KYC Gap Report page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export button is displayed on KYC Gap Report page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-192 — Verify Export button is enabled when records exist

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export button is enabled when records exist. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-193 — Verify export downloads report successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export downloads report successfully. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-194 — Verify exported file contains report records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains report records. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-195 — Verify exported file contains Customer column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Customer column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-196 — Verify exported file contains Customer ID column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Customer ID column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-197 — Verify exported file contains Type column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Type column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-198 — Verify exported file contains Branch column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Branch column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-199 — Verify exported file contains Branch Code column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Branch Code column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-200 — Verify exported file contains Template Applied column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Template Applied column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-201 — Verify exported file contains KYC Gap Score column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains KYC Gap Score column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-202 — Verify exported file contains Priority column

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported file contains Priority column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-203 — Verify exported record count matches report record count

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported record count matches report record count. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-204 — Verify exported Customer values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported Customer values match report data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-205 — Verify exported KYC Gap Score values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Simplified KYC Customer (CIF-1001); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported KYC Gap Score values match report data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI + API |
| Tags | kyc-gap-report-export, critical, export |

### KGR-206 — Verify exported Priority values match report data

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Simplified KYC Customer (CIF-1001); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Exported Priority values match report data. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-207 — Verify export respects active Search filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Search filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-208 — Verify export respects active Branch filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Branch filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-209 — Verify export respects active Customer Type filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Customer Type filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-210 — Verify export respects active Template filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Template filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-211 — Verify export respects active Priority filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Priority filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-212 — Verify export respects active Gap Score filter

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export respects active Gap Score filter. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-213 — Verify export supports combined filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export supports combined filters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, critical, export |

### KGR-214 — Verify export after sorting

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export after sorting. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, medium, export |

### KGR-215 — Verify export works from Page 1

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export works from Page 1. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-216 — Verify export works from non-first page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export works from non-first page. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-217 — Verify export works when page size is changed

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export works when page size is changed. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, medium, export |

### KGR-218 — Verify export file opens successfully

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export file opens successfully. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-219 — Verify export handles large datasets

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export handles large datasets. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-export, critical, export |

### KGR-220 — Verify export behavior when no records are available

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Export |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Browser allows file downloads. |
| Test Data | Role: Compliance Officer; Branch filter: INST-DEMO-001; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Action: Export filtered grid |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Click Export button in the page header action area. 5. Verify export initiates download or export dialog without errors. 6. Verify exported dataset includes only currently filtered and sorted visible records per business rules. 7. Verify exported columns match on-screen grid columns and exclude modal-only fields. 8. Apply filters and sorting, export data, and verify export respects active view state. 9. Verify Records are read-only from the report view. 10. Verify layout, badges, and controls render without overlap or clipping. 11. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 12. Verify no unhandled errors occur during test execution. 13. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Export behavior when no records are available. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Selected action completes and shows the expected screen, modal, or download. 6. Export initiates download or export dialog without errors. 7. Exported dataset includes only currently filtered and sorted visible records per business rules. 8. Exported columns match on-screen grid columns and exclude modal-only fields. 9. Export respects active view state. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-export, high, export |

### KGR-221 — Verify authenticated Compliance Officer can access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Authenticated Compliance Officer can access KYC Gap Report. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-222 — Verify authenticated Administrator can access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Authenticated Administrator can access KYC Gap Report. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-223 — Verify unauthorized role cannot access KYC Gap Report

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthorized role cannot access KYC Gap Report. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-224 — Verify unauthenticated user cannot access KYC Gap Report URL

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthenticated user cannot access KYC Gap Report URL. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-225 — Verify direct URL access respects RBAC permissions

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Direct URL access respects RBAC permissions. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-226 — Verify session timeout prevents report access

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Session timeout prevents report access. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, high, functional |

### KGR-227 — Verify report is read-only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report is read-only. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-228 — Verify report does not provide Bulk Notify action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report does not provide Bulk Notify action. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, high, functional |

### KGR-229 — Verify report does not provide Edit action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report does not provide Edit action. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-230 — Verify View action does not allow data modification

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. View action does not allow data modification. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-231 — Verify audit log entry generated for template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log entry generated for template creation. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-232 — Verify audit log captures user ID during template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log captures user ID during template creation. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-233 — Verify audit log captures timestamp during template creation

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log captures timestamp during template creation. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-234 — Verify audit log entry generated for template cloning

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log entry generated for template cloning. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-235 — Verify audit log entry generated when field requirement changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log entry generated when field requirement changes. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-236 — Verify audit log records previous value for requirement change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log records previous value for requirement change. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-237 — Verify audit log records new value for requirement change

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log records new value for requirement change. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-238 — Verify audit log entry generated when custom field is added

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log entry generated when custom field is added. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-239 — Verify audit log entry generated when score bands are modified

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log entry generated when score bands are modified. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-240 — Verify audit log captures before and after values for score band changes

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log captures before and after values for score band changes. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-241 — Verify audit log remains immutable

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log remains immutable. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, high, audit, compliance |

### KGR-242 — Verify audit records are retained after page refresh

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit records are retained after page refresh. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, audit, compliance |

### KGR-243 — Verify unauthorized user cannot modify template configuration

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthorized user cannot modify template configuration. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, rbac, security |

### KGR-244 — Verify unauthorized user cannot access audit records

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Unauthorized user cannot access audit records. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, high, rbac, security |

### KGR-245 — Verify application prevents access after logout

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Application prevents access after logout. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-246 — Verify report remains accessible after successful re-authentication

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report remains accessible after successful re-authentication. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, functional |

### KGR-247 — Verify audit log captures template archival action

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit log captures template archival action. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-248 — Verify templates cannot be permanently deleted

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Templates cannot be permanently deleted. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, critical, functional |

### KGR-249 — Verify archived templates remain traceable in audit history

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | High |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Archived templates remain traceable in audit history. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, high, audit, compliance |

### KGR-250 — Verify audit trail completeness for template lifecycle

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Critical |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Verify Records are read-only from the report view. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Audit trail completeness for template lifecycle. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Records are read-only from the report view. |
| Automation Candidate | No |
| Automation Layer | Manual |
| Tags | kyc-gap-report-security-audit, critical, audit, compliance |

### KGR-251 — Verify search with blank value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 5. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 6. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 14. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search with blank value. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 6. Search or filter input returns the expected matching or empty result set. 7. Inclusive/exclusive boundary behavior. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-252 — Verify search with whitespace-only value

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 5. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 6. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 14. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search with whitespace-only value. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 6. Search or filter input returns the expected matching or empty result set. 7. Inclusive/exclusive boundary behavior. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, boundary, negative |

### KGR-253 — Verify search with maximum supported characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search with maximum supported characters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, filter |

### KGR-254 — Verify search with SQL injection pattern

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search with SQL injection pattern. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-255 — Verify search with script injection pattern

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search with script injection pattern. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI + Security |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-256 — Verify Gap Score filter with Min value only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with Min value only. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-257 — Verify Gap Score filter with Max value only

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with Max value only. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-258 — Verify Gap Score filter with Min greater than Max

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with Min greater than Max. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-259 — Verify Gap Score filter with negative values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with negative values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-260 — Verify Gap Score filter with decimal values

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with decimal values. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, gap-score, business-rule |

### KGR-261 — Verify Gap Score filter with alphabetic characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with alphabetic characters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-262 — Verify Gap Score filter with special characters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify grid handles edge-case customer names without layout breakage or data misalignment. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with special characters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Grid handles edge-case customer names without layout breakage or data misalignment. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-263 — Verify Gap Score boundary value 0

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 0. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-264 — Verify Gap Score boundary value 25

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 25. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-265 — Verify Gap Score boundary value 26

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 26. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-266 — Verify Gap Score boundary value 50

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 50. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-267 — Verify Gap Score boundary value 51

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 51. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-268 — Verify Gap Score boundary value 75

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 75. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-269 — Verify Gap Score boundary value 76

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 76. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-270 — Verify Gap Score boundary value 100

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score boundary value 100. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-271 — Verify Gap Score filter with value greater than 100

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score filter with value greater than 100. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, gap-score, business-rule |

### KGR-272 — Verify report behavior when no records match filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 5. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 6. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 14. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior when no records match filters. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Submit search with blank or whitespace-only value and verify full dataset or validation behavior. 6. Search or filter input returns the expected matching or empty result set. 7. Inclusive/exclusive boundary behavior. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, filter |

### KGR-273 — Verify opening Gap Detail Modal for customer with single missing field

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Opening Gap Detail Modal for customer with single missing field. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, modal |

### KGR-274 — Verify opening Gap Detail Modal for customer with large number of missing fields

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Opening Gap Detail Modal for customer with large number of missing fields. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, modal |

### KGR-275 — Verify report behavior when all customers belong to same priority

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior when all customers belong to same priority. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-276 — Verify report behavior when all customers belong to same branch

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior when all customers belong to same branch. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-277 — Verify report behavior with duplicate customer names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify grid handles edge-case customer names without layout breakage or data misalignment. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior with duplicate customer names. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Grid handles edge-case customer names without layout breakage or data misalignment. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, high, functional |

### KGR-278 — Verify report behavior with special characters in customer name

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify grid handles edge-case customer names without layout breakage or data misalignment. 15. Verify Records are read-only from the report view. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior with special characters in customer name. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Grid handles edge-case customer names without layout breakage or data misalignment. 8. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-279 — Verify report behavior with extremely long customer names

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report behavior with extremely long customer names. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, medium, functional |

### KGR-280 — Verify report recovery after invalid filter input

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Boundary & Negative Testing |
| Priority | Critical |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Branch: INST-DEMO-001; Template: Standard KYC — Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Enter invalid Gap Score filter values and verify validation prevents incorrect filtering. 5. Apply Gap Score boundary filter at value 0 and verify inclusive/exclusive boundary behavior. 6. Apply Gap Score boundary filter at value 25 and verify inclusive/exclusive boundary behavior. 7. Apply Gap Score boundary filter at value 26 and verify inclusive/exclusive boundary behavior. 8. Apply Gap Score boundary filter at value 50 and verify inclusive/exclusive boundary behavior. 9. Apply Gap Score boundary filter at value 51 and verify inclusive/exclusive boundary behavior. 10. Apply Gap Score boundary filter at value 75 and verify inclusive/exclusive boundary behavior. 11. Apply Gap Score boundary filter at value 76 and verify inclusive/exclusive boundary behavior. 12. Apply Gap Score boundary filter at value 100 and verify inclusive/exclusive boundary behavior. 13. Apply Gap Score boundary filter at value 101 and verify inclusive/exclusive boundary behavior. 14. Verify Records are read-only from the report view. 15. Verify layout, badges, and controls render without overlap or clipping. 16. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 17. Verify no unhandled errors occur during test execution. 18. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report recovery after invalid filter input. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Search or filter input returns the expected matching or empty result set. 6. Inclusive/exclusive boundary behavior. 7. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-boundary-negative-testing, critical, boundary, negative |

### KGR-281 — Verify Refresh button is visible and reloads report data without losing applied filters

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Boundary and invalid inputs prepared per test data. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Gap score: 12; Priority: Low |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 8. Verify no KPI data, customer records, or export controls are exposed to unauthorized users. 9. Note current KPI values, filter selections, and visible grid rows. 10. Refresh the browser or click Refresh control and wait for data reload to complete. 11. Verify page components reload successfully without JavaScript errors or broken layout. 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Report reloads with fresh data and active filters stay applied. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. Access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 9. No KPI data, customer records, or export controls are exposed to unauthorized users. 10. Refresh the browser or click Refresh control and wait for data reload to complete. 11. Page components reload successfully without JavaScript errors or broken layout. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, high, filter |

### KGR-282 — Verify breadcrumb navigation displays correct KYC module path on landing page

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report |
| Priority | Medium |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Ravi Patel (CUST-1000005) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Ravi Patel (CUST-1000005); Gap score: 36; Priority: High |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Verify page title displays as "KYC Gap Report". 4. Verify page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 5. Verify Export button is visible, enabled, and positioned in the page header. 6. Verify KYC Gap Report is listed in KYC module navigation. 7. Verify access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 8. Verify no KPI data, customer records, or export controls are exposed to unauthorized users. 9. Verify layout, badges, and controls render without overlap or clipping. 10. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 11. Verify no unhandled errors occur during test execution. 12. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Breadcrumb shows KYC Gap Report in the module path. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. Page title displays as "KYC Gap Report". 5. Page subtitle displays as "Missing or expired KYC fields — CBS & DMS import vs. template requirements". 6. Export button is visible, enabled, and positioned in the page header. 7. KYC Gap Report is listed in KYC module navigation. 8. Access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response. 9. No KPI data, customer records, or export controls are exposed to unauthorized users. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report, medium, functional |

### KGR-283 — Verify Individual and Corporate Type badges use distinct colour coding in grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Individual and Corporate rows show distinct Type badge colours. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-284 — Verify KYC Gap Score displays colour-coded risk label (Low/Medium/High/Critical) in grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify Template Applied No Name of the KYC template assigned to this customer. 16. Verify layout, badges, and controls render without overlap or clipping. 17. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 18. Verify no unhandled errors occur during test execution. 19. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Gap Score displays the correct colour-coded risk label per score band. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, gap-score, business-rule |

### KGR-285 — Verify Edit button is not present in report grid per read-only design

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify no Edit button or inline edit controls are present in the landing grid. 16. Verify Missing Fields and Gap Type are not shown as landing table columns. 17. Verify Bulk Notify or bulk remediation actions are not available on the landing page. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. No Edit action is available in the report grid. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. No Edit button or inline edit controls are present in the landing grid. 17. Missing Fields and Gap Type are not shown as landing table columns. 18. Bulk Notify or bulk remediation actions are not available on the landing page. 19. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-286 — Verify Missing Fields column is not displayed in landing grid

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Report Grid |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. Customer Kumar Global Traders Pvt. Ltd. (CUST-1000004) exists with gap profile matching the scenario. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Type: Corporate |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Verify "Customer" column header is displayed in the report grid. 5. Verify "Customer ID" column header is displayed in the report grid. 6. Verify "Type" column header is displayed in the report grid. 7. Verify "Branch" column header is displayed in the report grid. 8. Verify "Branch Code" column header is displayed in the report grid. 9. Verify "Template Applied" column header is displayed in the report grid. 10. Verify "KYC Gap Score" column header is displayed in the report grid. 11. Verify "Priority" column header is displayed in the report grid. 12. Verify "Actions" column header is displayed in the report grid. 13. Verify each grid row displays a View action button in the Actions column. 14. Click View on the first visible row and verify Gap Detail Modal opens. 15. Verify no Edit button or inline edit controls are present in the landing grid. 16. Verify Missing Fields and Gap Type are not shown as landing table columns. 17. Verify Bulk Notify or bulk remediation actions are not available on the landing page. 18. Verify Template Applied No Name of the KYC template assigned to this customer. 19. Verify layout, badges, and controls render without overlap or clipping. 20. Verify displayed values reconcile with CBS/DMS gap data for the test customer. |
| Expected Result | 1. Missing Fields are not shown as a landing grid column. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. "Customer" column header is displayed in the report grid. 6. "Customer ID" column header is displayed in the report grid. 7. "Type" column header is displayed in the report grid. 8. "Branch" column header is displayed in the report grid. 9. "Branch Code" column header is displayed in the report grid. 10. "Template Applied" column header is displayed in the report grid. 11. "KYC Gap Score" column header is displayed in the report grid. 12. "Priority" column header is displayed in the report grid. 13. "Actions" column header is displayed in the report grid. 14. Each grid row displays a View action button in the Actions column. 15. Selected action completes and shows the expected screen, modal, or download. 16. No Edit button or inline edit controls are present in the landing grid. 17. Missing Fields and Gap Type are not shown as landing table columns. 18. Bulk Notify or bulk remediation actions are not available on the landing page. 19. Template Applied No Name of the KYC template assigned to this customer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-report-grid, high, functional |

### KGR-287 — Verify Gap Detail Modal displays CIF ID and branch code in customer metadata section

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Gap Detail Modal |
| Priority | High |
| Preconditions | 1. Valid user with KYC Gap Report access is logged in. 2. At least one customer with documented KYC gaps exists in the report. |
| Test Data | Role: Compliance Officer; Customer: Kumar Global Traders Pvt. Ltd. (CUST-1000004); Template: Standard KYC — Corporate; Weights: mandatory +3, optional +1 |
| Steps | 1. Open KYC Gap Report. 2. Verify the landing page title, subtitle, and Export action are displayed. 3. Confirm KPI summary, filters, and report grid are visible before scenario steps. 4. Open Gap Detail Modal via View action on a customer row with known gaps. 5. Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied. 6. Verify Missing Fields list shows field name, description, requirement type, and weight for each gap. 7. Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 8. Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 9. Close modal using close icon or Escape key and verify focus returns to the originating grid row. 10. Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 11. Verify Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). 12. Verify layout, badges, and controls render without overlap or clipping. 13. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 14. Verify no unhandled errors occur during test execution. 15. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Modal shows CIF ID and branch code for the selected customer. 2. KYC Gap Report opens successfully. 3. The landing page title, subtitle, and Export action are displayed. 4. KPI summary, filters, and report grid are visible before scenario steps are confirmed. 5. Gap Detail Modal via View action on a customer row with known gaps opens successfully. 6. Modal header displays customer name, CIF ID, branch name, branch code, and template applied. 7. Missing Fields list shows field name, description, requirement type, and weight for each gap. 8. Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section. 9. Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label. 10. Modal closes and focus returns to the report grid. 11. Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows. 12. Missing Fields list — each field shows: name, description, weight, and requirement type (Mandatory/Optional). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | kyc-gap-report-gap-detail-modal, high, modal |

### KGR-288 — Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Repeat scenario in each browser version listed in test data. 10. Verify layout, fonts, filters, grid, and modal render consistently across browsers. 11. Tab through search, filters, grid headers, pagination, and Export using keyboard only. 12. Verify visible focus indicators and ARIA roles on table, combobox, and dialog elements. 13. Verify Records are read-only from the report view. 14. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 15. Verify no unhandled errors occur during test execution. 16. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Search, filters, grid, and pagination are reachable via keyboard tab order. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Repeat scenario in each browser version listed in test data. 11. Layout, fonts, filters, grid, and modal render consistently across browsers. 12. Tab through search, filters, grid headers, pagination, and Export using keyboard only. 13. Visible focus indicators and ARIA roles on table, combobox, and dialog elements. 14. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, filter |

### KGR-289 — Verify ARIA roles and labels are present on report table, filters, and Gap Detail Modal

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Repeat scenario in each browser version listed in test data. 10. Verify layout, fonts, filters, grid, and modal render consistently across browsers. 11. Tab through search, filters, grid headers, pagination, and Export using keyboard only. 12. Verify visible focus indicators and ARIA roles on table, combobox, and dialog elements. 13. Verify Records are read-only from the report view. 14. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 15. Verify no unhandled errors occur during test execution. 16. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Table, filters, and modal expose appropriate ARIA roles and labels. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Repeat scenario in each browser version listed in test data. 11. Layout, fonts, filters, grid, and modal render consistently across browsers. 12. Tab through search, filters, grid headers, pagination, and Export using keyboard only. 13. Visible focus indicators and ARIA roles on table, combobox, and dialog elements. 14. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, modal |

### KGR-290 — Verify KYC Gap Report initial page load completes within acceptable performance threshold

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Open browser developer tools Performance or Network panel. 10. Measure initial page load time and verify it meets SLA threshold defined in test data. 11. Repeat scenario in each browser version listed in test data. 12. Verify layout, fonts, filters, grid, and modal render consistently across browsers. 13. Verify Records are read-only from the report view. 14. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 15. Verify no unhandled errors occur during test execution. 16. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. Initial page load completes within the SLA in test data. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Browser developer tools Performance or Network panel opens successfully. 11. Measure initial page load time and verify it meets SLA threshold defined in test data. 12. Repeat scenario in each browser version listed in test data. 13. Layout, fonts, filters, grid, and modal render consistently across browsers. 14. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, functional |

### KGR-291 — Verify KYC Gap Report layout and controls render consistently in Chrome and Edge browsers

| Field | Value |
| --- | --- |
| Module | KYC Module |
| Feature | KYC Gap Report - Security & Audit |
| Priority | Medium |
| Preconditions | 1. User role or session configured per test data. |
| Test Data | Role: Unauthorized User; Action: Attempt KYC Gap Report access |
| Steps | 1. Configure user role or session per test data. 2. Attempt to access KYC Gap Report. 3. Perform a report access or export action and verify audit log entry is created. 4. Verify audit record includes user ID, timestamp, action type, and module identifier. 5. Refresh page and verify audit records remain available and immutable. 6. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 7. Authenticate as Administrator and verify report access per role permissions. 8. Authenticate as unauthorized role and verify access is denied. 9. Repeat scenario in each browser version listed in test data. 10. Verify layout, fonts, filters, grid, and modal render consistently across browsers. 11. Verify Records are read-only from the report view. 12. Verify displayed values reconcile with CBS/DMS gap data for the test customer. 13. Verify no unhandled errors occur during test execution. 14. Verify active filters and grid state remain consistent after interactions. |
| Expected Result | 1. KYC Gap Report layout and controls render consistently in Chrome and Edge browsers. 2. Configured role or session behaves per test data. 3. Access attempt produces the expected allow or deny result. 4. Perform a report access or export action and verify audit log entry is created. 5. Audit record includes user ID, timestamp, action type, and module identifier. 6. Refresh page and verify audit records remain available and immutable. 7. Authenticate as Compliance Officer and verify full read access to KYC Gap Report. 8. Authenticate as Administrator and verify report access per role permissions. 9. Authenticate as unauthorized role and verify access is denied. 10. Repeat scenario in each browser version listed in test data. 11. Layout, fonts, filters, grid, and modal render consistently across browsers. 12. Records are read-only from the report view. |
| Automation Candidate | Yes |
| Automation Layer | Database + Manual |
| Tags | kyc-gap-report-security-audit, medium, functional |
