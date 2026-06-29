# Custom List Manager — Detailed Test Cases (578)

### CLM-TC-001 — Verify authorized user can access Custom List Manager module from application navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | High |
| Preconditions | Compliance Officer account exists with Configuration module access. |
| Test Data | User role (authorized): Compliance Officer User role (restricted): KYC Analyst Menu path: Configuration > Custom List Manager |
| Steps | 1. From the application dashboard, expand Configuration in the left navigation. 2. Select Custom List Manager. 3. Confirm the Custom lists landing page loads. 4. Repeat with a read-only KYC Analyst account and note any access restrictions. |
| Acceptance Criteria | Only authorized configuration roles can reach Custom List Manager. |
| Expected Result | Custom List Manager opens for the authorized user. Landing page header, summary cards, and list grid are visible. Restricted users see an access-denied message or the module is hidden per RBAC policy. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, high, functional |

### CLM-TC-002 — Verify sidebar is rendered correctly on Custom List Manager pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | User is on Custom List Manager with sidebar expanded. |
| Test Data | Menu path: Configuration > Custom List Manager List name: Internal fraud — flagged |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the left sidebar branding, search box, and Configuration menu items. 3. Navigate to list detail for "Internal fraud — flagged" and confirm the sidebar remains visible. 4. Open Maker-Checker > All Requests and confirm sidebar persistence. |
| Acceptance Criteria | Sidebar layout is stable across module views. |
| Expected Result | Sidebar displays institution branding, module search, and navigation items without layout overlap or missing sections on all Custom List Manager views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, functional |

### CLM-TC-003 — Verify all configured menu items are visible in sidebar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | Compliance Officer has full Configuration navigation entitlements. |
| Test Data | User role: Compliance Officer Expected modules: Custom lists, Maker-Checker, Audit Trail |
| Steps | 1. Open Configuration > Custom List Manager. 2. Expand Configuration and list visible child modules. 3. Confirm Custom List Manager, Maker-Checker, and Audit Trail entries appear when entitled. 4. Compare against the role entitlement matrix for the test user. |
| Acceptance Criteria | Navigation reflects assigned module permissions. |
| Expected Result | Every menu item granted to the role is visible and labelled correctly; items outside the role profile are not shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, rbac, security |

### CLM-TC-004 — Verify active menu highlighting for currently selected page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Low |
| Preconditions | User can access multiple Configuration sub-modules. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Open Configuration > Custom List Manager and note the highlighted sidebar item. 2. Navigate to Maker-Checker > My Requests. 3. Confirm the Maker-Checker item is highlighted and Custom List Manager is not. 4. Return to Custom lists landing and confirm highlight returns. |
| Acceptance Criteria | Active menu state reflects current location. |
| Expected Result | Exactly one navigation item shows active styling matching the current view; highlight updates immediately on route change. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, low, functional |

### CLM-TC-005 — Verify navigation routing between available module pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | At least one active custom list with entries exists. |
| Test Data | List name: Rejected KYC applicants |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open list detail for "Rejected KYC applicants". 3. Use breadcrumb to return to Custom lists. 4. Open Maker-Checker > All Requests, then Audit Trail, then return to Custom lists. |
| Acceptance Criteria | Inter-page routing is reliable. |
| Expected Result | Each navigation target loads the correct view without stale content. Browser back/forward and breadcrumb links land on the expected screen. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, maker-checker |

### CLM-TC-006 — Verify navigation state is maintained after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Low |
| Preconditions | User is viewing list detail for an active list. |
| Test Data | List name: PEP — internal identified |
| Steps | 1. Open "PEP — internal identified" from the landing grid. 2. Refresh the browser. 3. Confirm the same list detail view reloads. 4. Refresh while on Maker-Checker > All Requests and confirm queue view reloads. |
| Acceptance Criteria | Refresh preserves contextual navigation. |
| Expected Result | After refresh the user remains on the same functional view with data reloaded; session is intact and no unexpected redirect to login occurs. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, low, functional |

### CLM-TC-007 — Verify user identity section is displayed in sidebar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Low |
| Preconditions | Charu Chauhan account is active. |
| Test Data | User: Charu Chauhan Role: Compliance Officer |
| Steps | 1. Sign in as Charu Chauhan (Compliance Officer). 2. Open Configuration > Custom List Manager. 3. Review the sidebar user panel at the bottom. |
| Acceptance Criteria | User identity is visible for accountability. |
| Expected Result | Sidebar shows user initials avatar, display name, and role label matching the authenticated session. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, low, functional |

### CLM-TC-008 — Verify displayed user information matches logged-in user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Navigation & Access |
| Priority | Medium |
| Preconditions | Test accounts exist for Charu Chauhan and Sandeep Seal. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Login as Charu Chauhan and open Configuration > Custom List Manager; record sidebar name and role. 2. Logout and login as Sandeep Seal; repeat the check. 3. Compare displayed values with the user profile in administration. |
| Acceptance Criteria | Displayed identity is session-accurate. |
| Expected Result | Sidebar identity updates on login switch and matches directory records for name and role; no residual data from the prior session. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-navigation-access, medium, rbac, security |

### CLM-TC-009 — Verify breadcrumb is displayed on Custom List Manager pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Low |
| Preconditions | User is on Custom lists landing. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Open Configuration > Custom List Manager. 2. Confirm breadcrumb shows "Custom lists". 3. Open a list detail and confirm breadcrumb shows list hierarchy. |
| Acceptance Criteria | Breadcrumb provides location context. |
| Expected Result | Breadcrumb is visible on landing and detail views, showing "Custom lists" and the selected list name on drill-down. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, low, functional |

### CLM-TC-010 — Verify breadcrumb updates correctly during navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Low |
| Preconditions | Active list "Internal fraud — flagged" exists. |
| Test Data | List name: Internal fraud — flagged |
| Steps | 1. From landing, open "Internal fraud — flagged". 2. Confirm breadcrumb reads Custom lists / Internal fraud — flagged. 3. Click Custom lists segment and confirm return to landing. |
| Acceptance Criteria | Breadcrumb reflects navigation depth. |
| Expected Result | Breadcrumb segments update synchronously with view changes and the parent segment is clickable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, low, functional |

### CLM-TC-011 — Verify breadcrumb navigation redirects user to selected level

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Low |
| Preconditions | User is on list detail view. |
| Test Data | List name: Device blocklist |
| Steps | 1. Open list detail for "Device blocklist". 2. Click the Custom lists breadcrumb segment. 3. Verify landing grid is displayed. |
| Acceptance Criteria | Breadcrumb navigation is functional. |
| Expected Result | Clicking the parent breadcrumb loads the Custom lists landing without losing session or showing an error. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, low, functional |

### CLM-TC-012 — Verify notification icon is displayed in top bar

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Low |
| Preconditions | Compliance Officer is signed in. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Open Configuration > Custom List Manager. 2. Locate the notification icon in the top-right toolbar. 3. Confirm unread indicator when notifications exist. |
| Acceptance Criteria | Notification entry point is available. |
| Expected Result | Notification bell is visible on all Custom List Manager views; unread dot appears when pending notifications exist. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, low, alerts |

### CLM-TC-013 — Verify notification panel opens from notification icon

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Medium |
| Preconditions | At least one unread notification exists (e.g. entry expiring soon). |
| Test Data | Sample notification: Entry expiring in 30 days — review required |
| Steps | 1. Open Configuration > Custom List Manager. 2. Click the notification bell. 3. Review notification list content and timestamps. |
| Acceptance Criteria | Notifications are readable in-panel. |
| Expected Result | Panel opens overlaying the page, lists notifications with message and timestamp, and highlights unread items. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, medium, ttl |

### CLM-TC-014 — Verify notification panel can be closed and reopened

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Breadcrumb & Top Bar |
| Priority | Low |
| Preconditions | Notification panel has been opened once. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Open notifications. 2. Click outside the panel or close control. 3. Reopen and confirm list reloads. |
| Acceptance Criteria | Notification UI is dismissible. |
| Expected Result | Panel closes without page reload and reopens with current notification state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-breadcrumb-top-bar, low, alerts |

### CLM-TC-015 — Verify Custom Lists dashboard header is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | Low |
| Preconditions | User can access Configuration > Custom List Manager. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Open Configuration > Custom List Manager. 2. Read the page title and subtitle below it. |
| Acceptance Criteria | Landing header communicates module purpose. |
| Expected Result | Header shows "Custom lists" with subtitle explaining institution-specific screening lists beyond standard watchlists. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, low, functional |

### CLM-TC-016 — Verify dashboard subtitle/description is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | Low |
| Preconditions | User is on Custom lists landing. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Open Configuration > Custom List Manager. 2. Verify descriptive text references institution-specific lists and screening use. |
| Acceptance Criteria | Module scope is explained to users. |
| Expected Result | Subtitle clearly states the module manages institution-specific screening lists supplemental to third-party watchlists. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, low, functional |

### CLM-TC-017 — Verify all configured summary cards are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | Medium |
| Preconditions | Multiple lists and entries exist in the environment. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Open Configuration > Custom List Manager. 2. Locate Total lists, Active lists, Total entries, and Pending approval cards. |
| Acceptance Criteria | Key portfolio metrics are visible at a glance. |
| Expected Result | Four summary cards render with labels and numeric values; layout is consistent across viewport sizes. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, medium, functional |

### CLM-TC-018 — Verify summary cards display numeric metric values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | Medium |
| Preconditions | Environment contains active and pending lists. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Open Configuration > Custom List Manager. 2. Record each card value. 3. Cross-check Total lists against grid row count on default tab. |
| Acceptance Criteria | Metrics are numerically populated. |
| Expected Result | Each card shows a non-empty numeric count formatted for readability (thousands separators where applicable). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, medium, functional |

### CLM-TC-019 — Verify Total Lists metric count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Known list count exists across Active, Inactive, and Drafted tabs. |
| Test Data | Validation method: Sum of tab counts vs summary card |
| Steps | 1. Open Configuration > Custom List Manager and note Total lists card value. 2. Count lists across Active, Inactive, and Drafted tabs. 3. Compare totals. |
| Acceptance Criteria | Total lists metric is accurate. |
| Expected Result | Total lists card equals the sum of lists visible across status tabs (excluding duplicates). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, error-handling |

### CLM-TC-020 — Verify Active Lists metric count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | At least one Active and one Disabled list exist. |
| Test Data | Active list: Internal fraud — flagged Disabled list: Temp sanctions override |
| Steps | 1. Note Active lists card value. 2. Filter landing grid to Active tab and count rows. 3. Open a Disabled list and confirm it is excluded from Active count. |
| Acceptance Criteria | Active list metric is accurate. |
| Expected Result | Active lists card matches the count of lists in Active screening status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, functional |

### CLM-TC-021 — Verify Total Entities and Pending Approval metrics accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Pending maker-checker requests exist for lists or entries. |
| Test Data | Checker: Sandeep Seal |
| Steps | 1. Record Total entries and Pending approval card values. 2. Open Maker-Checker > All Requests and count Pending items tied to Custom List Manager. 3. Sum entry counts from a sample of active lists and compare to Total entries. |
| Acceptance Criteria | Operational metrics support workload monitoring. |
| Expected Result | Total entries aligns with aggregated entry inventory; Pending approval matches open governance requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, rbac, security |

### CLM-TC-022 — Verify dashboard metrics refresh after data changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Dashboard |
| Priority | High |
| Preconditions | Maker can submit a new list; Checker can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal New list: Mule network watch — QA |
| Steps | 1. Record landing metrics. 2. Create and approve a new list "Mule network watch — QA". 3. Return to landing and re-read metrics. |
| Acceptance Criteria | Metrics stay synchronized with data changes. |
| Expected Result | Total lists increments by one; Pending approval decrements after checker approval; counts update without manual cache clear. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-dashboard, high, rbac, security |

### CLM-TC-023 — Verify search functionality using exact list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | "Device blocklist" exists in Active status. |
| Test Data | Search term: Device blocklist Expected match: Device blocklist |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter "Device blocklist" in the search box. 3. Review filtered grid results. |
| Acceptance Criteria | Exact name search returns precise match. |
| Expected Result | Grid shows only "Device blocklist"; other lists are hidden. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-024 — Verify search functionality using partial list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Multiple lists share a keyword (e.g. "fraud"). |
| Test Data | Search term: fraud |
| Steps | 1. Open Configuration > Custom List Manager. 2. Search "fraud". 3. Review all matching rows. |
| Acceptance Criteria | Partial search is supported. |
| Expected Result | All lists whose names contain the partial term appear; non-matching lists are excluded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-025 — Verify search with non-existing list name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | No list named "ZZZ-NONEXIST-999". |
| Test Data | Search term: ZZZ-NONEXIST-999 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Search "ZZZ-NONEXIST-999". 3. Observe grid and pagination. |
| Acceptance Criteria | Empty search results are handled gracefully. |
| Expected Result | Grid shows zero rows and an appropriate empty-state message; no error is thrown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-026 — Verify search results accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Known list "PEP — internal identified" is Active. |
| Test Data | List name: PEP — internal identified |
| Steps | 1. Search for "PEP — internal identified". 2. Verify row status, TTL, and record counts for the match. |
| Acceptance Criteria | Search results are data-accurate. |
| Expected Result | Displayed row attributes match backend values for the matched list. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-027 — Verify Status filter visibility and availability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Lists exist in Active and Disabled states. |
| Test Data | Filter options: All statuses, Active, Disabled, Pending approval |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open the status filter dropdown. 3. Review available values. |
| Acceptance Criteria | Status filtering is exposed in UI. |
| Expected Result | Status filter is visible with all supported list lifecycle states. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-028 — Verify filtering custom lists by status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Active and Disabled lists coexist. |
| Test Data | Filter: Active |
| Steps | 1. Select Active in status filter. 2. Confirm every visible row shows Active badge. |
| Acceptance Criteria | Status filter constrains results. |
| Expected Result | Only Active lists appear; Disabled and Drafted lists are excluded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-029 — Verify status filter result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Filter applied for Disabled. |
| Test Data | Filter: Disabled Sample list: Temp sanctions override |
| Steps | 1. Filter Disabled. 2. Open actions on a row and verify list is not participating in screening. |
| Acceptance Criteria | Filter output is trustworthy. |
| Expected Result | Each row status badge matches the selected filter value. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-030 — Verify combined search and status filtering

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Active list matching search term exists. |
| Test Data | Search: PEP Filter: Active |
| Steps | 1. Search "PEP" and filter Active. 2. Verify intersection of criteria. |
| Acceptance Criteria | Combined filters work together. |
| Expected Result | Only lists meeting both name and status criteria are shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-031 — Verify combined filter behavior when no matching records exist

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | No Disabled list contains "SIM-farm". |
| Test Data | Search: SIM-farm Filter: Disabled |
| Steps | 1. Search "SIM-farm" and filter Disabled. 2. Review grid. |
| Acceptance Criteria | Zero-match filter combination is handled. |
| Expected Result | Empty grid with clear no-results messaging. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, screening-matching |

### CLM-TC-032 — Verify reset/clear functionality restores complete dataset

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Filters and search are applied. |
| Test Data | Menu path: Configuration > Custom List Manager |
| Steps | 1. Apply search and status filter. 2. Clear search and set filter to All statuses. 3. Count rows vs Total lists metric. |
| Acceptance Criteria | Filter reset works. |
| Expected Result | Full list inventory returns; pagination resets appropriately. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-033 — Verify all configured grid columns are displayed on landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists landing is open. |
| Test Data | Expected columns: List name, Status, Records, Active, Action on hit, TTL, Date created, Last modified, List expiry, Actions |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review list grid headers. 3. Compare against specification for mandatory columns. |
| Acceptance Criteria | System should display all configured list information columns |
| Expected Result | All required columns are present, sortable where indicated, and aligned with data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, ttl |

### CLM-TC-034 — Verify grid displays list information correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists available in system |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: grid displays list information correctly 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should display corresponding values for each custom list record |
| Expected Result | Each row should display the correct information associated with the custom list Values remain accurate after refresh and align with backend inventory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-035 — Verify status values are displayed for all custom list records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists with different statuses available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Custom Lists landing page. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should display lifecycle status for each list |
| Expected Result | Status should be displayed for every custom list record |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-036 — Verify status displayed in grid matches actual list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Lists available in different lifecycle states |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: status displayed in grid matches actual list status 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should maintain status consistency across module |
| Expected Result | Verify status displayed in grid matches actual list status — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-037 — Verify Total Records count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom list contains entities |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Note Total Records value from grid. 3. Open list details. 4. Review the UI state and compare it against the expected business rule described in the test scenario. |
| Acceptance Criteria | System should display accurate entity count per custom list |
| Expected Result | Total Records value should match actual number of entities in the list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-038 — Verify Active Records count accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom list contains active and inactive entities |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Note Active Records value from grid. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should display accurate active entity count |
| Expected Result | Active Records value should match actual active entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-039 — Verify Active Records count does not exceed Total Records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Custom lists available |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Compare Total Records and Active Records values. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should maintain statistical integrity |
| Expected Result | Active Records count should never exceed Total Records count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, rbac, security |

### CLM-TC-040 — Verify expiry information is displayed for custom lists

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System should display configured expiry details |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, ttl |

### CLM-TC-041 — Verify expiry information accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System should display correct expiry details |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, high, ttl |

### CLM-TC-042 — Verify grid data remains consistent after refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Grid & Data Presentation |
| Priority | Medium |
| Preconditions | Custom lists available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: grid data remains consistent after refresh 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should preserve displayed data integrity |
| Expected Result | Grid data should remain accurate and consistent after page refresh Values remain accurate after refresh and align with backend inventory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-grid-data-presentation, medium, rbac, security |

### CLM-TC-043 — Verify CSV Export functionality

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Active lists are visible on Configuration > Custom List Manager landing. |
| Test Data | Format: CSV List sample: Device blocklist |
| Steps | 1. Open Configuration > Custom List Manager. 2. Click Export CSV in the lists toolbar. 3. Open downloaded file and compare columns to on-screen grid. |
| Acceptance Criteria | System should generate downloadable CSV file containing grid data |
| Expected Result | CSV downloads successfully with columns: list name, status, records, active count, action on hit, TTL, dates. Row count matches filtered view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-044 — Verify PDF Export functionality

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | List grid is populated. |
| Test Data | Format: PDF |
| Steps | 1. Open Configuration > Custom List Manager. 2. Click Export PDF. 3. Open PDF and verify readability. |
| Acceptance Criteria | System should generate downloadable PDF file containing grid data |
| Expected Result | PDF export contains the same list rows and headers as the grid with intact formatting. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, export |

### CLM-TC-045 — Verify exported data accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Custom list records available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal Format: CSV |
| Steps | 1. Open Configuration > Custom List Manager. 2. Note grid data. 3. Click the PDF export control and download the file. 4. Click the CSV export control and download the file. |
| Acceptance Criteria | System should export the same data displayed in the grid |
| Expected Result | Exported data should match the records displayed on the screen |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, rbac, security |

### CLM-TC-046 — Verify export functionality with applied search criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Search results available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal Search term: Rejected KYC applicants Format: CSV |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter the search term in the list or entry search box and apply the filter. 3. Click the PDF export control and download the file. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should export only searched records |
| Expected Result | Exported file should contain only records matching the search criteria |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, rbac, security |

### CLM-TC-047 — Verify export functionality with applied status filter

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | Status filter applied |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal Format: CSV |
| Steps | 1. Open Configuration > Custom List Manager. 2. Apply the relevant status or type filter and review the filtered grid. 3. Click the PDF export control and download the file. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should export only filtered records |
| Expected Result | Exported file should contain only records matching the selected filter |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, rbac, security |

### CLM-TC-048 — Verify pagination navigation between pages

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | More than 10 lists exist or seed data spans multiple pages. |
| Test Data | Page sizes: 10, 25, 50, 100 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Change page size to 25. 3. Navigate to page 2 and back. 4. Apply a search and confirm pagination updates. |
| Acceptance Criteria | System should allow navigation across available pages |
| Expected Result | Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, functional |

### CLM-TC-049 — Verify page size selection updates displayed records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | High |
| Preconditions | More than 10 lists exist or seed data spans multiple pages. |
| Test Data | Page sizes: 10, 25, 50, 100 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Change page size to 25. 3. Navigate to page 2 and back. 4. Apply a search and confirm pagination updates. |
| Acceptance Criteria | System should update number of displayed records per page |
| Expected Result | Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, high, functional |

### CLM-TC-050 — Verify pagination remains functional after search/filter operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Export & Pagination |
| Priority | Medium |
| Preconditions | More than 10 lists exist or seed data spans multiple pages. |
| Test Data | Page sizes: 10, 25, 50, 100 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Change page size to 25. 3. Navigate to page 2 and back. 4. Apply a search and confirm pagination updates. |
| Acceptance Criteria | System should maintain pagination behavior on filtered datasets |
| Expected Result | Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-export-pagination, medium, functional |

### CLM-TC-051 — Verify Create List action is available and accessible

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | User on Custom Lists landing page |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. From the dashboard, navigate via Configuration > Custom List Manager. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should provide option to create a new custom list |
| Expected Result | Verification confirms that Create List action is available and accessible without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, rbac, security |

### CLM-TC-052 — Verify Create List action redirects to Create Custom List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | Compliance Officer can create lists. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Click + Create new list. 2. Review form fields and action buttons. |
| Acceptance Criteria | System should open list creation workflow |
| Expected Result | Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, maker-checker |

### CLM-TC-053 — Verify Bulk Upload action is available and accessible

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System should provide option for bulk entity onboarding |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, bulk-upload |

### CLM-TC-054 — Verify Bulk Upload action redirects to upload workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System should open bulk upload process |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, bulk-upload |

### CLM-TC-055 — Verify View action opens selected custom list details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | At least one custom list available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Select a custom list. 3. Click View action. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should allow viewing list information |
| Expected Result | Custom List Detail page should open displaying selected list information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, rbac, security |

### CLM-TC-056 — Verify Edit action opens selected custom list in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active. |
| Test Data | List name: Rejected KYC applicants Maker: Charu Chauhan Reason for edit: Align purpose with updated policy POL-2026-04 |
| Steps | 1. From landing row actions choose Edit List. 2. Modify purpose or name with reason for edit. 3. Submit for approval. |
| Acceptance Criteria | System should allow modification of existing lists |
| Expected Result | Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, rbac, security |

### CLM-TC-057 — Verify Enable/Disable action initiates status change request workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | At least one active or disabled custom list available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Select a list. 3. Click Enable or Disable action. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should allow lifecycle management through approval workflow |
| Expected Result | Enable/Disable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, rbac, security |

### CLM-TC-058 — Verify landing page actions operate on the selected custom list only

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Landing Actions |
| Priority | High |
| Preconditions | Multiple custom lists available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: landing page actions operate on the selected custom list only 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should execute actions against the intended record |
| Expected Result | Action should be performed only on the selected custom list without impacting other records Values remain accurate after refresh and align with backend inventory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-landing-actions, high, rbac, security |

### CLM-TC-059 — Verify Create Custom List form is rendered successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | Compliance Officer can create lists. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Click + Create new list. 2. Review form fields and action buttons. |
| Acceptance Criteria | System should display Create List form without UI issues |
| Expected Result | Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-060 — Verify all configured fields are displayed on Create List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | Compliance Officer can create lists. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Click + Create new list. 2. Review form fields and action buttons. |
| Acceptance Criteria | System should display all fields defined for custom list creation |
| Expected Result | Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, functional |

### CLM-TC-061 — Verify mandatory fields are clearly identified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should visually indicate mandatory fields |
| Expected Result | All mandatory fields should display configured mandatory indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, rbac, security |

### CLM-TC-062 — Verify Create List form layout remains intact after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | Compliance Officer can create lists. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Click + Create new list. 2. Review form fields and action buttons. |
| Acceptance Criteria | System should render form consistently |
| Expected Result | Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, functional |

### CLM-TC-063 — Verify Save Draft action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Create List form. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should provide draft functionality |
| Expected Result | Verification confirms that Save Draft action is available without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, rbac, security |

### CLM-TC-064 — Verify Submit For Approval action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Create List form. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should provide submission workflow |
| Expected Result | Submit For Approval button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, high, rbac, security |

### CLM-TC-065 — Verify Cancel action is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Create List form. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should allow user to exit creation workflow |
| Expected Result | Verification confirms that Cancel action is available without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, rbac, security |

### CLM-TC-066 — Verify Cancel action returns user to landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Create List Form |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: Cancel action returns user to landing page 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should redirect user back to Custom Lists page |
| Expected Result | Verify Cancel action returns user to landing page — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-create-list-form, medium, rbac, security |

### CLM-TC-067 — Verify List Name field accepts valid value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | No existing list named "SIM-swap suspects — retail". |
| Test Data | List name: SIM-swap suspects — retail Purpose: Internal fraud — flagged entries |
| Steps | 1. Open create list form. 2. Enter "SIM-swap suspects — retail". 3. Complete other mandatory fields. 4. Save as draft. |
| Acceptance Criteria | System should accept valid list names |
| Expected Result | Valid name is accepted without error and persists in draft. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-068 — Verify List Name is mandatory during submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | Create list form is open. |
| Test Data | List name: (blank) |
| Steps | 1. Leave list name empty. 2. Fill purpose and reason. 3. Click Submit for approval. |
| Acceptance Criteria | System should prevent submission without List Name |
| Expected Result | Submission blocked with mandatory field indicator on list name. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-069 — Verify List Name does not accept blank-equivalent value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter the search term in the list or entry search box and apply the filter. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should reject space-only input |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, rbac, security |

### CLM-TC-070 — Verify duplicate List Name is not allowed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | "Internal fraud — flagged" already exists. |
| Test Data | Duplicate name: Internal fraud — flagged |
| Steps | 1. Create new list with name "Internal fraud — flagged". 2. Submit for approval. |
| Acceptance Criteria | System should enforce uniqueness of custom list names |
| Expected Result | System rejects duplicate with clear validation message; no second list created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-071 — Verify unique List Name can be submitted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter the search term in the list or entry search box and apply the filter. 3. Complete mandatory fields. 4. Submit the record for checker approval with a documented business reason. |
| Acceptance Criteria | System should allow creation using unique list names |
| Expected Result | Custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, rbac, security |

### CLM-TC-072 — Verify List Name accepts maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | Create list form open. |
| Test Data | List name length: 100 characters |
| Steps | 1. Enter a 100-character valid list name. 2. Submit or save draft. |
| Acceptance Criteria | System should accept configured maximum length |
| Expected Result | 100-character name is accepted (max length per field rule). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-073 — Verify List Name exceeding maximum length is restricted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | Create list form open. |
| Test Data | List name length: 101 characters |
| Steps | 1. Attempt to enter 101+ characters in list name. 2. Try to submit. |
| Acceptance Criteria | System should enforce configured length limit |
| Expected Result | Input is blocked or validation prevents submission beyond 100 characters. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, functional |

### CLM-TC-074 — Verify List Name boundary validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - List Name Validation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open create list form. 2. Attempt to enter a value beyond the configured maximum for List name. 3. Complete other mandatory fields with valid data. 4. Save draft or submit per scenario. |
| Acceptance Criteria | System should consistently enforce length boundaries |
| Expected Result | List name accepts the valid input and retains it through save or submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-list-name-validation, high, rbac, security |

### CLM-TC-075 — Verify Purpose field is displayed as selectable dropdown

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | Approved purposes exist in the catalogue. |
| Test Data | Purpose: Internal fraud — flagged entries |
| Steps | 1. Open create list form. 2. Open purpose dropdown. 3. Select "Internal fraud — flagged entries". |
| Acceptance Criteria | System should provide Purpose selection control |
| Expected Result | Purpose dropdown lists checker-approved values; selection is retained on the form. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, functional |

### CLM-TC-076 — Verify Purpose dropdown displays configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | Approved purposes exist in the catalogue. |
| Test Data | Purpose: Rejected KYC applicants |
| Steps | 1. Open create list form. 2. Open purpose dropdown. 3. Select "Rejected KYC applicants". |
| Acceptance Criteria | System should display configured Purpose options |
| Expected Result | Purpose dropdown lists checker-approved values; selection is retained on the form. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, maker-checker |

### CLM-TC-077 — Verify user can select a Purpose value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Purpose dropdown. 3. Select a value. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should allow Purpose selection |
| Expected Result | Selected Purpose value should be displayed successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, high, rbac, security |

### CLM-TC-078 — Verify selected Purpose value is retained before form submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Purpose Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Select Purpose value. 3. From the dashboard, navigate via Configuration > Custom List Manager. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve selected value |
| Expected Result | Selected Purpose value should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-purpose-configuration, medium, rbac, security |

### CLM-TC-079 — Verify Action On Hit field is displayed as configurable selection control

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | List configuration includes action-on-hit options. |
| Test Data | Sample values: Alert & block, Generate alert |
| Steps | 1. Open create or edit list. 2. Locate action on hit control. 3. Review available values such as Alert & block and Generate alert. |
| Acceptance Criteria | System should provide Action On Hit configuration |
| Expected Result | Action on hit control is visible with institution-configured options. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, alerts |

### CLM-TC-080 — Verify Action On Hit field displays configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | List "Internal fraud — flagged" is Active with action "Alert & block". |
| Test Data | List name: Internal fraud — flagged Action on hit: Alert & block Entry: Rajan Mehta Screening trigger: Rajan Mehta |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Rajan Mehta". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System should display configured Action On Hit options |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, screening-matching |

### CLM-TC-081 — Verify user can select an Action On Hit value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | List "Rejected KYC applicants" is Active with action "Alert & block". |
| Test Data | List name: Rejected KYC applicants Action on hit: Alert & block Entry: Al-Farrukh Trading LLC Screening trigger: Al-Farrukh Trading LLC |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Al-Farrukh Trading LLC". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System should allow Action On Hit configuration |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, screening-matching |

### CLM-TC-082 — Verify selected Action On Hit value is retained before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Configuration |
| Priority | High |
| Preconditions | List "PEP — internal identified" is Active with action "Generate alert". |
| Test Data | List name: PEP — internal identified Action on hit: Generate alert Entry: 192.168.44.0/24 Screening trigger: 192.168.44.0/24 |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "192.168.44.0/24". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System should preserve selected configuration |
| Expected Result | Screening hit generates alert linked to correct list and entry with investigation details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-configuration, high, screening-matching |

### CLM-TC-083 — Verify TTL field is displayed on Create List form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | Compliance Officer can create lists. |
| Test Data | User role: Compliance Officer |
| Steps | 1. Click + Create new list. 2. Review form fields and action buttons. |
| Acceptance Criteria | System should provide TTL configuration |
| Expected Result | Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-084 — Verify TTL field displays configured default value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | Create list form is open. |
| Test Data | TTL: 12 months |
| Steps | 1. Review default entry TTL on list metadata or entry form. 2. Select "12 months" if configurable at list level. |
| Acceptance Criteria | System should display default TTL configuration |
| Expected Result | TTL control shows default and allows selection; value persists before submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-085 — Verify user can select a TTL value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System should allow TTL configuration |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-086 — Verify selected TTL value is retained before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Configuration |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System should preserve selected TTL configuration |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-configuration, high, ttl |

### CLM-TC-087 — Verify Fuzzy Matching configuration control is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | List "PEP — internal identified" can be edited by maker. |
| Test Data | List name: PEP — internal identified Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "PEP — internal identified". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System should provide Fuzzy Matching configuration on Create List form |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-088 — Verify user can enable or disable Fuzzy Matching configuration

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | List "Device blocklist" can be edited by maker. |
| Test Data | List name: Device blocklist Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Device blocklist". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System should allow modification of Fuzzy Matching setting |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-089 — Verify Multilingual Matching configuration control is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System should provide Multilingual Matching configuration on Create List form |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-090 — Verify user can enable or disable Multilingual Matching configuration

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System should allow modification of Multilingual Matching setting |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, screening-matching |

### CLM-TC-091 — Verify matching configuration values are retained while completing the form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | Medium |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Configure Fuzzy Matching and Multilingual Matching. 3. Populate remaining fields. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve selected matching settings |
| Expected Result | Configured matching settings should remain unchanged until modified by user |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, medium, rbac, security |

### CLM-TC-092 — Verify matching configurations are included in list creation request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Matching Configuration |
| Priority | High |
| Preconditions | User on Create Custom List form with configured matching settings |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Configure matching settings. 3. Complete mandatory fields. 4. Submit the record for checker approval with a documented business reason. |
| Acceptance Criteria | System should preserve selected matching settings during submission |
| Expected Result | Submitted request should contain configured matching settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-matching-configuration, high, rbac, security |

### CLM-TC-093 — Verify Reason For Creation field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open create list form. 2. Enter a valid Reason for creation value "List created to monitor mule accounts identified in FRD-2026-0144". 3. Complete other mandatory fields with valid data. 4. Save draft or submit per scenario. |
| Acceptance Criteria | System should allow entry of business justification |
| Expected Result | Reason for creation accepts the valid input and retains it through save or submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-094 — Verify Reason For Creation field is mandatory during submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Leave Reason For Creation blank. 3. Populate remaining mandatory fields. 4. Submit the record for checker approval with a documented business reason. |
| Acceptance Criteria | System should prevent submission without business justification |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-095 — Verify Reason For Creation does not accept blank-equivalent value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter spaces only in Reason For Creation field. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should reject space-only input |
| Expected Result | System should display validation message and prevent submission |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-096 — Verify Reason For Creation accepts maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open create list form. 2. Enter a valid Reason for creation value "List created to monitor mule accounts identified in FRD-2026-0144". 3. Complete other mandatory fields with valid data. 4. Save draft or submit per scenario. |
| Acceptance Criteria | System should accept configured maximum length |
| Expected Result | Reason for creation accepts the valid input and retains it through save or submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-097 — Verify Reason For Creation exceeding maximum length is restricted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter value exceeding maximum allowed length. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should enforce configured length limit |
| Expected Result | System should reject excess characters or display validation message |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-098 — Verify Reason For Creation boundary validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Reason For Creation |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open create list form. 2. Attempt to enter a value beyond the configured maximum for Reason for creation. 3. Complete other mandatory fields with valid data. 4. Save draft or submit per scenario. |
| Acceptance Criteria | System should consistently enforce configured boundaries |
| Expected Result | Reason for creation accepts the valid input and retains it through save or submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-reason-for-creation, high, rbac, security |

### CLM-TC-099 — Verify user can save partially completed custom list as draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | User on Create Custom List form |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enter partial list information. 3. Click Save Draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should support draft creation |
| Expected Result | Verification confirms that user can save partially completed custom list as draft without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-100 — Verify draft record is available for future access

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Draft already saved |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. From the dashboard, navigate via Configuration > Custom List Manager. 3. Open saved draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should retain saved drafts |
| Expected Result | Saved draft should be available for further processing |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-101 — Verify saved draft loads previously entered information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open saved draft. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve entered configuration values |
| Expected Result | Previously entered values should be displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-102 — Verify all configured fields persist in draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open saved draft. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should retain complete draft configuration |
| Expected Result | List Name, Purpose, Action On Hit, TTL, Matching Settings and Reason For Creation should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-103 — Verify user can update existing draft

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open draft. 3. Modify values. 4. Save Draft. |
| Acceptance Criteria | System should allow modification of saved drafts |
| Expected Result | Verification confirms that user can update existing draft without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-104 — Verify latest changes are retained after draft update

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Updated draft available |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Reopen updated draft. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve updated values |
| Expected Result | Verification confirms that latest changes are retained after draft update without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-105 — Verify draft remains accessible after browser refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | Medium |
| Preconditions | Saved draft available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open draft. 3. Refresh page. 4. Reopen draft. |
| Acceptance Criteria | System should maintain saved draft integrity |
| Expected Result | Draft should remain available with saved information intact |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, medium, rbac, security |

### CLM-TC-106 — Verify draft can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Draft Management |
| Priority | High |
| Preconditions | Saved draft available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open draft. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should support transition from Draft to approval workflow |
| Expected Result | Draft should be successfully submitted for approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-draft-management, high, rbac, security |

### CLM-TC-107 — Verify valid custom list can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | User on Create Custom List form with valid data |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Complete mandatory fields. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should accept valid list creation request |
| Expected Result | Custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-108 — Verify submission generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Valid submission completed |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should create Maker-Checker request |
| Expected Result | Verification confirms that submission generates approval request without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-109 — Verify submitted custom list enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should place request into approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-110 — Verify submitted request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Internal fraud — flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should route request to Maker-Checker workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-111 — Verify submitted request retains all configured values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should preserve submitted data |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-112 — Verify Pending Approval status is reflected on landing page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "PEP — internal identified" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should display correct lifecycle state |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-113 — Verify Pending Approval dashboard metric updates after submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Device blocklist" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should update dashboard statistics |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-114 — Verify submitted request remains pending until checker action

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should enforce Maker-Checker dependency |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-115 — Verify Edit action opens selected custom list in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active. |
| Test Data | List name: Internal fraud — flagged Maker: Charu Chauhan Reason for edit: Align purpose with updated policy POL-2026-04 |
| Steps | 1. From landing row actions choose Edit List. 2. Modify purpose or name with reason for edit. 3. Submit for approval. |
| Acceptance Criteria | System should allow modification of existing custom lists |
| Expected Result | Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-116 — Verify existing custom list values are pre-populated in Edit form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form opened |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Edit List form. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should load previously configured values |
| Expected Result | Previously configured values should be displayed in the form |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-117 — Verify editable fields can be modified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form opened |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify one or more editable fields. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should allow updates to editable configurations |
| Expected Result | Verification confirms that editable fields can be modified without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-118 — Verify edited values remain visible before submission

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | Medium |
| Preconditions | Edit form opened with modified values |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify fields. 3. From the dashboard, navigate via Configuration > Custom List Manager. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve modified values during editing |
| Expected Result | Modified values should remain unchanged until user submits or cancels |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, medium, rbac, security |

### CLM-TC-119 — Verify updated custom list can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Edit form contains valid updates |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify fields. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should support modification approval workflow |
| Expected Result | Updated custom list request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-120 — Verify update request generates approval workflow entry

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Internal fraud — flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should create Maker-Checker request for modifications |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-121 — Verify submitted update request enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should enforce approval workflow for modifications |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-122 — Verify submitted update request retains modified values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit List |
| Priority | High |
| Preconditions | Update request submitted |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve updated information during approval process |
| Expected Result | Request should display all modified values accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-list, high, rbac, security |

### CLM-TC-123 — Verify Disable action can be initiated for active custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | "Device blocklist" is Active. |
| Test Data | List name: Device blocklist Action: Disable Reason: Temporary exclusion pending investigation |
| Steps | 1. Choose Disable List from row actions. 2. Enter disable date and reason. 3. Submit and approve as checker. 4. Verify list status and screening participation. |
| Acceptance Criteria | System should allow lifecycle management requests |
| Expected Result | Disable request pending until approval; after approval list shows Disabled, entries retained, screening engine excludes list. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, functional |

### CLM-TC-124 — Verify Enable action can be initiated for disabled custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active. |
| Test Data | List name: Adverse media flagged Action: Enable Reason: Temporary exclusion pending investigation |
| Steps | 1. Choose Disable List from row actions. 2. Enter disable date and reason. 3. Submit and approve as checker. 4. Verify list status and screening participation. |
| Acceptance Criteria | System should allow lifecycle reactivation requests |
| Expected Result | Disable request pending until approval; after approval list shows Disabled, entries retained, screening engine excludes list. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, functional |

### CLM-TC-125 — Verify Enable/Disable operation generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Request initiated |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should create Maker-Checker request |
| Expected Result | Verification confirms that Enable/Disable operation generates approval request without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-126 — Verify Enable/Disable request enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System should route request through approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-127 — Verify list status does not change before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should enforce approval dependency |
| Expected Result | List status should remain unchanged until checker action is completed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-128 — Verify approved Disable request updates list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Disable request approved |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open custom list. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should update lifecycle state after approval |
| Expected Result | Verification confirms that approved Disable request updates list status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-129 — Verify approved Enable request updates list status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Enable request approved |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open custom list. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should update lifecycle state after approval |
| Expected Result | Verification confirms that approved Enable request updates list status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-130 — Verify landing page reflects updated status after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable |
| Priority | High |
| Preconditions | Approved request completed |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: landing page reflects updated status after approval 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System should display latest approved lifecycle state |
| Expected Result | Verify landing page reflects updated status after approval — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable, high, rbac, security |

### CLM-TC-131 — Verify Maker information is captured during custom list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list created or submitted |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Create custom list. 3. Open list details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should maintain creator traceability |
| Expected Result | Maker information should be recorded and displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-132 — Verify Checker information is captured after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list approved |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open list details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should maintain approver traceability |
| Expected Result | Checker information should be recorded and displayed correctly |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-133 — Verify Date Created is captured for custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open list details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should record creation timestamp |
| Expected Result | Verification confirms that Date Created is captured for custom list without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-134 — Verify Date Last Modified is updated after approved changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list modified and approved |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify list. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Open details. |
| Acceptance Criteria | System should maintain modification history |
| Expected Result | Date Last Modified should reflect latest approved change |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-135 — Verify Total Records statistic reflects actual entity count

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list contains entities |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open list details. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should maintain accurate list statistics |
| Expected Result | Total Records value should match actual entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-136 — Verify Active Records statistic reflects active entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Custom list contains active/inactive entities |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should maintain accurate active entity statistics |
| Expected Result | Active Records value should match actual active entity count |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-137 — Verify metadata values remain consistent across screens

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | Medium |
| Preconditions | Custom list available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Open list details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should display consistent information across module |
| Expected Result | Metadata values should remain consistent across all screens |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, medium, rbac, security |

### CLM-TC-138 — Verify metadata provides complete audit traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Metadata Integrity |
| Priority | High |
| Preconditions | Approved custom list available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open custom list details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System should preserve maker, checker, date and statistics information |
| Expected Result | Complete metadata information should be available for audit and compliance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-metadata-integrity, high, rbac, security |

### CLM-TC-139 — Verify Add Entity action is available within approved custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active and approved. |
| Test Data | List name: Adverse media flagged User role: Compliance Officer |
| Steps | 1. Open "Adverse media flagged" detail. 2. Confirm + Add entry button is enabled. |
| Acceptance Criteria | System shall allow entity onboarding only through configured custom list workflow |
| Expected Result | Add entry action is visible and enabled for authorized maker on active list. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, maker-checker |

### CLM-TC-140 — Verify Add Entity form opens successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | User is on list detail. |
| Test Data | List name: Internal fraud — flagged |
| Steps | 1. Click + Add entry. 2. Confirm slide-out panel opens. |
| Acceptance Criteria | System shall display entity onboarding form without errors |
| Expected Result | Add entry panel opens with Identity, Identifiers, Digital identifiers, Localisation, and Risk & governance sections. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, error-handling |

### CLM-TC-141 — Verify all configured onboarding sections are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Add entry panel open. |
| Test Data | List name: Rejected KYC applicants |
| Steps | 1. Scroll through all form sections. 2. Verify section headers and fields. |
| Acceptance Criteria | System shall display all configured entity onboarding sections |
| Expected Result | All onboarding sections render with expected fields and eligibility note for minimum identifiers. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, maker-checker |

### CLM-TC-142 — Verify all mandatory fields are identified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall visually indicate mandatory fields |
| Expected Result | All mandatory fields should display configured mandatory indicators |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, rbac, security |

### CLM-TC-143 — Verify entity onboarding form layout remains intact

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Click + Add entry and wait for the onboarding panel to open. 3. Scroll through entire form. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall render all controls without UI issues |
| Expected Result | All fields, sections and controls should be displayed correctly without overlap or truncation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, rbac, security |

### CLM-TC-144 — Verify Save Draft action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Click + Add entry and wait for the onboarding panel to open. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow entity draft creation |
| Expected Result | Verification confirms that Save Draft action is available on Add Entity form without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, rbac, security |

### CLM-TC-145 — Verify Submit For Approval action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Click + Add entry and wait for the onboarding panel to open. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow entity submission workflow |
| Expected Result | Submit For Approval button should be visible and enabled |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, high, rbac, security |

### CLM-TC-146 — Verify Cancel action is available on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Click + Add entry and wait for the onboarding panel to open. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow user to exit onboarding workflow |
| Expected Result | Verification confirms that Cancel action is available on Add Entity form without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, rbac, security |

### CLM-TC-147 — Verify Cancel action redirects user back to entity listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Click Cancel. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall return user to previous screen |
| Expected Result | User should be redirected back to entity listing page without saving changes |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, rbac, security |

### CLM-TC-148 — Verify Add Entity form remains accessible after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Add Entity Form |
| Priority | Medium |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Click + Add entry and wait for the onboarding panel to open. 3. Refresh browser. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall reload onboarding form correctly |
| Expected Result | Entity onboarding form should reload successfully with all configured sections displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-add-entity-form, medium, rbac, security |

### CLM-TC-149 — Verify entity can be submitted when minimum screening criteria is satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Add entry form is open on "Adverse media flagged". |
| Test Data | Full name: IMEI-3571920XXXXXX List name: Adverse media flagged |
| Steps | 1. Open "Adverse media flagged" and click + Add entry. 2. Enter full name "IMEI-3571920XXXXXX" and reason for addition. 3. Submit for checker approval. |
| Acceptance Criteria | System shall allow onboarding of screening-eligible entities |
| Expected Result | Submission accepted; request submitted modal shows Pending Checker status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-150 — Verify entity submission is blocked when minimum screening criteria is not satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Add entry form is open on active list "Internal fraud — flagged". |
| Test Data | List name: Internal fraud — flagged Reason: Test — ineligible empty identifiers |
| Steps | 1. Open "Internal fraud — flagged" list detail and click + Add entry. 2. Leave full name, IP address, mobile number, and device ID blank. 3. Enter reason for addition only. 4. Click Submit for approval. |
| Acceptance Criteria | System shall prevent onboarding of screening-ineligible entities |
| Expected Result | Submission is blocked with validation that at least one of full name, IP address, mobile number, or device ID must be populated. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-151 — Verify validation message is displayed for screening-ineligible entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Enter insufficient screening data. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide clear validation feedback |
| Expected Result | Appropriate validation message should be displayed explaining minimum screening requirements |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, rbac, security |

### CLM-TC-152 — Verify screening eligibility validation occurs before request generation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall validate eligibility before creating approval request |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-153 — Verify screening-eligible entity generates onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Add entry form is open on "Device blocklist". |
| Test Data | Full name: Khalid Al-Mansouri List name: Device blocklist |
| Steps | 1. Open "Device blocklist" and click + Add entry. 2. Enter full name "Khalid Al-Mansouri" and reason for addition. 3. Submit for checker approval. |
| Acceptance Criteria | System shall create request only for eligible entities |
| Expected Result | Submission accepted; request submitted modal shows Pending Checker status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-154 — Verify eligible entity enters Pending Approval workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall route eligible entities through Maker-Checker process |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, rbac, security |

### CLM-TC-155 — Verify screening eligibility validation is consistently enforced

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall apply identical eligibility validation across submissions |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, screening-matching |

### CLM-TC-156 — Verify Save Draft allows incomplete entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Enter partial information. 3. Click Save Draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow draft creation before screening eligibility is achieved |
| Expected Result | Draft should be saved successfully without screening eligibility validation failure |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, medium, rbac, security |

### CLM-TC-157 — Verify edited draft can be submitted after eligibility requirements are satisfied

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Open draft. 3. Complete required screening information. 4. Submit the record for checker approval with a documented business reason. |
| Acceptance Criteria | System shall permit submission after missing information is completed |
| Expected Result | Verification confirms that edited draft can be submitted after eligibility requirements are satisfied without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, rbac, security |

### CLM-TC-158 — Verify approved entity is available for downstream screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Minimum Screening Eligibility Rule |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open entity details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall create screening-ready entity after onboarding workflow completion |
| Expected Result | Entity should be available for subsequent AML screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-minimum-screening-eligibility-rule, high, rbac, security |

### CLM-TC-159 — Verify identity information section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Add entry panel open. |
| Test Data | Section: Identity |
| Steps | 1. Review Identity section fields: full name, aliases, DOB, gender, nationality. |
| Acceptance Criteria | System shall provide identity data capture section |
| Expected Result | Identity section is visible with all configured fields and helper text. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, functional |

### CLM-TC-160 — Verify First Name field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Add entry form supports full legal name capture. |
| Test Data | Full name: Rajan Mehta Note: Application captures single Full name field for screening |
| Steps | 1. Enter full name "Rajan Mehta" in the Full name field. 2. Tab through field and save draft. |
| Acceptance Criteria | System shall allow entry of valid first name |
| Expected Result | Full name accepts valid input and is stored for screening (name components captured in single field). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, screening-matching |

### CLM-TC-161 — Verify Last Name field accepts valid input

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Add entry form supports full legal name capture. |
| Test Data | Full name: Al-Farrukh Trading LLC Note: Application captures single Full name field for screening |
| Steps | 1. Enter full name "Al-Farrukh Trading LLC" in the Full name field. 2. Tab through field and save draft. |
| Acceptance Criteria | System shall allow entry of valid last name |
| Expected Result | Full name accepts valid input and is stored for screening (name components captured in single field). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, screening-matching |

### CLM-TC-162 — Verify Full Name is captured correctly for screening purposes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Add entry form open. |
| Test Data | Full name: 192.168.44.0/24 |
| Steps | 1. Enter "192.168.44.0/24". 2. Submit and approve. 3. Open entry profile and verify name. |
| Acceptance Criteria | System shall retain complete identity information |
| Expected Result | Approved entry profile shows exact full name used for screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, screening-matching |

### CLM-TC-163 — Verify Alias information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Khalid Al-Mansouri Aliases: Khaled Al Mansouri |
| Steps | 1. Onboard "Khalid Al-Mansouri" with aliases "Khaled Al Mansouri". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall support alternate identity names |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, screening-matching |

### CLM-TC-164 — Verify multiple aliases can be captured when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: IMEI-3571920XXXXXX Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "IMEI-3571920XXXXXX" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall support storage of multiple alternate names |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, screening-matching |

### CLM-TC-165 — Verify identity fields accept maximum supported length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Enter maximum supported values. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall enforce configured field limits |
| Expected Result | Verification confirms that identity fields accept maximum supported length without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, rbac, security |

### CLM-TC-166 — Verify identity fields reject values exceeding configured limits

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Add entry on "Rejected KYC applicants". 2. Attempt to enter a value beyond the configured maximum for Full name. 3. Complete other mandatory fields with valid data. 4. Attempt to save or submit and observe validation. |
| Acceptance Criteria | System shall enforce configured length restrictions |
| Expected Result | System blocks submission and shows a clear validation message at Full name. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, rbac, security |

### CLM-TC-167 — Verify identity information remains intact while completing onboarding form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | Medium |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter identity information. 3. From the dashboard, navigate via Configuration > Custom List Manager. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve entered identity data |
| Expected Result | Verification confirms that identity information remains intact while completing onboarding form without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, medium, rbac, security |

### CLM-TC-168 — Verify identity information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Save draft. 3. Reopen draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve identity data in draft workflow |
| Expected Result | Previously entered identity information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, rbac, security |

### CLM-TC-169 — Verify identity information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve identity data during approval workflow |
| Expected Result | Request should display entered identity information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, rbac, security |

### CLM-TC-170 — Verify approved entity displays correct identity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identity Information |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve identity integrity throughout onboarding lifecycle |
| Expected Result | Entity details should display accurate identity information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identity-information, high, rbac, security |

### CLM-TC-171 — Verify Identifier Information section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and list detail for "Rejected KYC applicants". 2. Click + Add entry. 3. Locate the Identifier Information section on the onboarding form. 4. Verify labels, input controls, helper text, and mandatory markers. 5. Tab through fields to confirm focus order and no overlapping layout issues. |
| Acceptance Criteria | System shall provide identifier capture section required for entity screening |
| Expected Result | Identifier Information section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-172 — Verify user can capture government issued identifier information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter valid identifier information. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow entry of configured identifier values |
| Expected Result | Identifier information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-173 — Verify identifier fields accept alphanumeric values where supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Enter valid alphanumeric identifier. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall accept configured identifier formats |
| Expected Result | Verification confirms that identifier fields accept alphanumeric values where supported without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-174 — Verify identifier fields enforce configured maximum length

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Enter maximum supported identifier value. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall validate configured identifier length restrictions |
| Expected Result | Identifier value within configured limit should be accepted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, rbac, security |

### CLM-TC-175 — Verify identifier fields reject values exceeding configured limits

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Add entry on "Internal fraud — flagged". 2. Attempt to enter a value beyond the configured maximum for target field. 3. Complete other mandatory fields with valid data. 4. Attempt to save or submit and observe validation. |
| Acceptance Criteria | System shall prevent invalid identifier lengths |
| Expected Result | System blocks submission and shows a clear validation message at target field. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, rbac, security |

### CLM-TC-176 — Verify multiple identifier values can be captured for the same entity when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Enter multiple identifier values. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support onboarding of all configured identifiers |
| Expected Result | All configured identifier values should be retained successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-177 — Verify identifier information remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | Medium |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter identifier data. 3. Complete remaining onboarding sections. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve entered identifier values |
| Expected Result | Entered identifier information should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, medium, rbac, security |

### CLM-TC-178 — Verify identifier information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Save draft. 3. Reopen draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve identifier data in draft workflow |
| Expected Result | Previously entered identifier information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-179 — Verify identifier information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve identifier data during approval workflow |
| Expected Result | Submitted request should display accurate identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-180 — Verify approved entity retains identifier information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Identifier Information |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain identifier integrity after approval |
| Expected Result | Approved entity should display correct identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-identifier-information, high, rbac, security |

### CLM-TC-181 — Verify Digital Identifiers section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and list detail for "Rejected KYC applicants". 2. Click + Add entry. 3. Locate the Digital Identifiers section on the onboarding form. 4. Verify labels, input controls, helper text, and mandatory markers. 5. Tab through fields to confirm focus order and no overlapping layout issues. |
| Acceptance Criteria | System shall provide digital identifier onboarding section |
| Expected Result | Digital Identifiers section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-182 — Verify email identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter email value. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow onboarding of email identifiers |
| Expected Result | Verification confirms that email identifier can be captured without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-183 — Verify mobile identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Enter mobile number. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow onboarding of mobile identifiers |
| Expected Result | Verification confirms that mobile identifier can be captured without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-184 — Verify IP Address identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: IMEI-3571920XXXXXX ip: +919876543210 List name: Adverse media flagged |
| Steps | 1. Confirm "IMEI-3571920XXXXXX" retains ip in entry profile. 2. Execute screening with matching ip value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall allow onboarding of IP identifiers |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, functional |

### CLM-TC-185 — Verify Device Identifier can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Rajan Mehta deviceId: +919876543210 List name: Internal fraud — flagged |
| Steps | 1. Confirm "Rajan Mehta" retains deviceId in entry profile. 2. Execute screening with matching deviceId value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall allow onboarding of device-based identifiers |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, functional |

### CLM-TC-186 — Verify multiple digital identifiers can be captured for a single entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Enter Email, Mobile, IP and Device information. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support onboarding of all configured digital identifiers |
| Expected Result | All configured digital identifiers should be stored successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-187 — Verify digital identifiers remain intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | Medium |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter digital identifiers. 3. Complete remaining sections. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve entered digital identifier values |
| Expected Result | Entered digital identifiers should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, medium, rbac, security |

### CLM-TC-188 — Verify digital identifiers are retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Save draft. 3. Reopen draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve digital identifier data in draft workflow |
| Expected Result | Previously entered digital identifiers should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-189 — Verify digital identifiers are retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve digital identifiers during approval workflow |
| Expected Result | Submitted request should display accurate digital identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-190 — Verify approved entity retains digital identifiers for downstream screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifiers |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain digital identifier integrity after approval |
| Expected Result | Approved entity should display correct digital identifier information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifiers, high, rbac, security |

### CLM-TC-191 — Verify Localization section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and list detail for "Rejected KYC applicants". 2. Click + Add entry. 3. Locate the Localization section on the onboarding form. 4. Verify labels, input controls, helper text, and mandatory markers. 5. Tab through fields to confirm focus order and no overlapping layout issues. |
| Acceptance Criteria | System shall provide localization and geographic information capture section |
| Expected Result | Localization section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-192 — Verify country information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Enter/select country value. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow onboarding of country information |
| Expected Result | Country information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-193 — Verify nationality information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Enter/select nationality value. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow onboarding of nationality information |
| Expected Result | Nationality information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-194 — Verify address information can be captured

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Enter address details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow onboarding of address information |
| Expected Result | Address information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-195 — Verify multilingual/localized values can be captured where supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | Medium |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Enter localized values where applicable. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support configured localization requirements |
| Expected Result | Localized information should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, medium, rbac, security |

### CLM-TC-196 — Verify localization information remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Enter localization information. 3. Complete remaining onboarding sections. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve localization values |
| Expected Result | Entered localization information should remain unchanged |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, medium, rbac, security |

### CLM-TC-197 — Verify localization information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Save draft. 3. Reopen draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve localization data in draft workflow |
| Expected Result | Previously entered localization information should be retained |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-198 — Verify localization information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve localization data during approval workflow |
| Expected Result | Submitted request should display accurate localization information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-199 — Verify approved entity retains localization information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain localization integrity after approval |
| Expected Result | Approved entity should display correct localization information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-200 — Verify localization data remains available for screening and investigation workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Localization |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall retain geographic information for downstream AML processing |
| Expected Result | Localization information should remain available and complete for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-localization, high, rbac, security |

### CLM-TC-201 — Verify Risk & Governance section is displayed on Add Entity form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and list detail for "Rejected KYC applicants". 2. Click + Add entry. 3. Locate the Risk & Governance section on the onboarding form. 4. Verify labels, input controls, helper text, and mandatory markers. 5. Tab through fields to confirm focus order and no overlapping layout issues. |
| Acceptance Criteria | System shall provide risk management and governance configuration section |
| Expected Result | Risk & Governance section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-202 — Verify user can configure available risk classification values

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "PEP — internal identified" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0244". 4. Review risk and governance values on the form. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall allow selection of configured risk values |
| Expected Result | Risk & governance fields accept input and display correctly on form and approved profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-203 — Verify risk configuration remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | Medium |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Device blocklist" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0344". 4. Review risk and governance values on the form. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall preserve configured risk information |
| Expected Result | Risk & governance fields accept input and display correctly on form and approved profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, medium, rbac, security |

### CLM-TC-204 — Verify governance-related information can be captured during onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | Medium |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Adverse media flagged" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0444". 4. Review risk and governance values on the form. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall allow entry of configured governance information |
| Expected Result | Risk & governance fields accept input and display correctly on form and approved profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, medium, rbac, security |

### CLM-TC-205 — Verify risk and governance information is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Internal fraud — flagged" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0544". 4. Save as draft and reopen the draft entry. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall preserve risk and governance data in draft workflow |
| Expected Result | Risk and governance values are retained when draft is reopened. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-206 — Verify risk and governance information is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Rejected KYC applicants" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0644". 4. Submit for approval and inspect request payload before checker action. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall preserve onboarding data during approval workflow |
| Expected Result | Submitted request carries TTL, reason, and source reference unchanged. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-207 — Verify approved entity retains risk and governance information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "PEP — internal identified" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0744". 4. Complete checker approval and open entry profile. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall maintain risk data integrity after approval |
| Expected Result | Risk & governance fields accept input and display correctly on form and approved profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-208 — Verify risk and governance information remains available for downstream screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Risk & Governance |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Device blocklist" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0844". 4. Review risk and governance values on the form. 5. Confirm values are used in a screening run against the onboarded identifier. |
| Acceptance Criteria | System shall preserve risk context for AML investigation and screening workflows |
| Expected Result | Approved entry TTL and governance metadata drive screening eligibility and expiry behaviour. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-risk-governance, high, rbac, security |

### CLM-TC-209 — Verify Real-Time Alert Configuration section is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and list detail for "Adverse media flagged". 2. Click + Add entry. 3. Locate the Time Alert Configuration section on the onboarding form. 4. Verify labels, input controls, helper text, and mandatory markers. 5. Tab through fields to confirm focus order and no overlapping layout issues. |
| Acceptance Criteria | System shall provide alert configuration options during onboarding |
| Expected Result | Time Alert Configuration section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-210 — Verify available alert configuration options can be selected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Configure alert settings. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow configuration of available alert settings |
| Expected Result | Selected alert configuration should be accepted successfully |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-211 — Verify alert configuration remains intact while completing onboarding workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Configure alert settings. 3. Complete remaining onboarding sections. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve selected alert settings |
| Expected Result | Verification confirms that alert configuration remains intact while completing onboarding workflow without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, medium, rbac, security |

### CLM-TC-212 — Verify alert configuration is retained in draft entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Save draft. 3. Reopen draft. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve alert settings in draft workflow |
| Expected Result | Previously configured alert settings should be retained |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-213 — Verify alert configuration is retained in submitted onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve alert settings during approval workflow |
| Expected Result | Submitted request should display accurate alert configuration |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-214 — Verify approved entity retains configured alert settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain alert configuration integrity after approval |
| Expected Result | Approved entity should display configured alert settings |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-215 — Verify alert configuration remains associated with the correct entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | Medium |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Open multiple entities. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain entity-alert relationship |
| Expected Result | Alert configuration should remain linked to the correct entity only |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, medium, rbac, security |

### CLM-TC-216 — Verify alert configuration is available for downstream monitoring workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Real-Time Alert Configuration |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Open entity details. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve alert settings for future monitoring operations |
| Expected Result | Configured alert settings should remain available for downstream AML monitoring activities |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | custom-list-manager-real-time-alert-configuration, high, rbac, security |

### CLM-TC-217 — Verify screening-eligible entity can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Add entry form is open on "PEP — internal identified". |
| Test Data | Full name: 192.168.44.0/24 List name: PEP — internal identified |
| Steps | 1. Open "PEP — internal identified" and click + Add entry. 2. Enter full name "192.168.44.0/24" and reason for addition. 3. Submit for checker approval. |
| Acceptance Criteria | System shall allow onboarding request creation for eligible entities |
| Expected Result | Submission accepted; request submitted modal shows Pending Checker status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, screening-matching |

### CLM-TC-218 — Verify entity submission generates Maker-Checker request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Device blocklist" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall create approval request for entity onboarding |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-219 — Verify submitted entity enters Pending Approval state

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall enforce approval workflow for onboarding requests |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-220 — Verify submitted entity request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. From the dashboard, navigate via Configuration > Custom List Manager. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall route request to checker workflow |
| Expected Result | Verification confirms that submitted entity request is visible in approval queue without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-221 — Verify submitted request retains complete onboarding information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve all onboarding data during approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-222 — Verify entity request remains pending until checker action

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall enforce Maker-Checker dependency |
| Expected Result | Request should remain in Pending Approval state until checker action occurs |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-223 — Verify approved entity becomes available within associated custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open associated custom list. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall onboard entity after successful approval |
| Expected Result | Entity should become available within the associated custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-224 — Verify approved entity retains all onboarding information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain data integrity after approval |
| Expected Result | Approved entity should display all onboarding information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-225 — Verify approved entity contributes to custom list statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Note entity count. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Review the UI state and compare it against the expected business rule described in the test scenario. |
| Acceptance Criteria | System shall update list-level entity counts |
| Expected Result | Verification confirms that approved entity contributes to custom list statistics without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-226 — Verify approved entity becomes available for AML screening operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Submission Workflow |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall create screening-ready entity after onboarding completion |
| Expected Result | Entity should be available for subsequent AML screening and monitoring workflows |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-submission-workflow, high, rbac, security |

### CLM-TC-227 — Verify Entity grid is displayed within selected custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: Entity grid is displayed within selected custom list 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall display onboarded entities in tabular format |
| Expected Result | Verify Entity grid is displayed within selected custom list — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-228 — Verify all configured entity grid columns are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Custom lists landing is open. |
| Test Data | Expected columns: List name, Status, Records, Active, Action on hit, TTL, Date created, Last modified, List expiry, Actions |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review list grid headers. 3. Compare against specification for mandatory columns. |
| Acceptance Criteria | System shall display configured entity attributes in grid |
| Expected Result | All required columns are present, sortable where indicated, and aligned with data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, ttl |

### CLM-TC-229 — Verify entity information displayed in grid matches onboarded data

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: entity information displayed in grid matches onboarded data 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall display accurate entity information |
| Expected Result | Entity information displayed in grid should match stored entity data Values remain accurate after refresh and align with backend inventory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-230 — Verify entity status is displayed for each entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Open Entity grid. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display current lifecycle status |
| Expected Result | Verification confirms that entity status is displayed for each entity without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-231 — Verify entity status displayed in grid matches actual entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: entity status displayed in grid matches actual entity status 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall maintain status consistency |
| Expected Result | Verify entity status displayed in grid matches actual entity status — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-232 — Verify grid displays multiple entity records correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | Medium |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: grid displays multiple entity records correctly 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall support display of multiple onboarded entities |
| Expected Result | Verify grid displays multiple entity records correctly — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, medium, rbac, security |

### CLM-TC-233 — Verify newly approved entity appears in entity grid

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: newly approved entity appears in entity grid 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall update entity inventory after approval |
| Expected Result | Verify newly approved entity appears in entity grid — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-234 — Verify disabled entity remains visible with appropriate status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open Entity grid. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve entity visibility for governance purposes |
| Expected Result | Disabled entity should remain visible with updated lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-235 — Verify entity grid data remains consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | Medium |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: entity grid data remains consistent after page refresh 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall maintain data integrity |
| Expected Result | Verify entity grid data remains consistent after page refresh — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, medium, rbac, security |

### CLM-TC-236 — Verify entity count displayed in grid aligns with custom list statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Grid |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: entity count displayed in grid aligns with custom list statistics 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall maintain entity count integrity |
| Expected Result | Entity count should match corresponding custom list statistics Values remain accurate after refresh and align with backend inventory. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-grid, high, rbac, security |

### CLM-TC-237 — Verify entity search using exact entity name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entry "192.168.44.0/24" exists in "PEP — internal identified". |
| Test Data | List name: PEP — internal identified Entry name: 192.168.44.0/24 Entry ID: IP-009012 |
| Steps | 1. Open "PEP — internal identified" list detail. 2. Search "192.168.44.0/24" in the entry grid. 3. Verify single matching row. |
| Acceptance Criteria | Exact entry search works. |
| Expected Result | Grid shows "192.168.44.0/24" (IP-009012) only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-238 — Verify entity search using partial name

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Multiple entries share substring "Trading". |
| Test Data | Search term: Trading |
| Steps | 1. Open list detail. 2. Search "Trading". 3. Review matches. |
| Acceptance Criteria | Partial entry search works. |
| Expected Result | All entries with matching substring appear. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-239 — Verify search result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Entry with IP identifier exists. |
| Test Data | Search term: 192.168 Expected entry: 192.168.44.0/24 |
| Steps | 1. Search "192.168". 2. Verify IP row details. |
| Acceptance Criteria | Entry search returns correct records. |
| Expected Result | Matched row shows correct risk category, status, and expiry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-240 — Verify search with non-existing entity value

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | No entry named "Phantom Entity XYZ". |
| Test Data | Search term: Phantom Entity XYZ |
| Steps | 1. Search "Phantom Entity XYZ". 2. Observe empty state. |
| Acceptance Criteria | No-match entry search is graceful. |
| Expected Result | No rows; empty-state message displayed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-241 — Verify status filter is available for entity management

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Entries exist in Active, Expired, and Inactive states. |
| Test Data | Filter options: All statuses, Active, Expired, Inactive |
| Steps | 1. Open list detail. 2. Open entry status filter. 3. Review options. |
| Acceptance Criteria | Entry status filter is exposed. |
| Expected Result | Status filter dropdown is present with all entry lifecycle states. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, ttl |

### CLM-TC-242 — Verify status filter returns matching entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Active and Expired entries coexist in the list. |
| Test Data | Filter: Active |
| Steps | 1. Filter Active. 2. Confirm no Expired rows remain. |
| Acceptance Criteria | Entry status filter works. |
| Expected Result | Only Active entries display. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, screening-matching |

### CLM-TC-243 — Verify status filter result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Known Expired entry "Venkatesh Iyer" exists. |
| Test Data | Filter: Expired Entry: Venkatesh Iyer |
| Steps | 1. Filter Expired. 2. Locate Venkatesh Iyer and verify Expired badge. |
| Acceptance Criteria | Filtered entry statuses are correct. |
| Expected Result | All visible rows show Expired status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, ttl |

### CLM-TC-244 — Verify combined search and status filtering

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | High |
| Preconditions | Active entry matching mobile prefix exists. |
| Test Data | Search: +919 Filter: Active |
| Steps | 1. Search "+919" and filter Active. 2. Verify matches. |
| Acceptance Criteria | Combined entry filters work. |
| Expected Result | Rows satisfy both criteria. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, high, functional |

### CLM-TC-245 — Verify reset functionality clears applied search and filters

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Medium |
| Preconditions | Search and filter applied on entry grid. |
| Test Data | List name: Internal fraud — flagged |
| Steps | 1. Clear filters. 2. Confirm pagination shows full entry count. |
| Acceptance Criteria | Entry filter reset works. |
| Expected Result | All entries return to the grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, medium, functional |

### CLM-TC-246 — Verify search and filter state remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Search & Filters |
| Priority | Low |
| Preconditions | Search/filter applied. |
| Test Data | Search: Mehta Filter: Active |
| Steps | 1. Apply search "Mehta" and filter Active. 2. Refresh browser. 3. Note whether criteria persist or reset per design. |
| Acceptance Criteria | Refresh behaviour is predictable. |
| Expected Result | Behaviour matches specification: either criteria persist with same results or reset cleanly to default view without error. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-search-filters, low, functional |

### CLM-TC-247 — Verify View action is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entry "192.168.44.0/24" is approved and Active. |
| Test Data | Entry name: 192.168.44.0/24 Entry ID: IP-009012 |
| Steps | 1. Open entry row actions > View. 2. Review read-only profile sections. |
| Acceptance Criteria | System shall allow access to entity details |
| Expected Result | Entry profile displays identity, identifiers, digital IDs, localisation, risk, TTL, and status read-only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-248 — Verify View action opens entity details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Entry "Khalid Al-Mansouri" is approved and Active. |
| Test Data | Entry name: Khalid Al-Mansouri Entry ID: IND-330129 |
| Steps | 1. Open entry row actions > View. 2. Review read-only profile sections. |
| Acceptance Criteria | System shall display complete entity information |
| Expected Result | Entry profile displays identity, identifiers, digital IDs, localisation, risk, TTL, and status read-only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, functional |

### CLM-TC-249 — Verify identity information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display stored identity data |
| Expected Result | Verification confirms that identity information is displayed correctly in entity details without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-250 — Verify identifier information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display stored identifier data |
| Expected Result | Identifier information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-251 — Verify digital identifiers are displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display stored digital identifier data |
| Expected Result | Verification confirms that digital identifiers are displayed correctly in entity details without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-252 — Verify localization information is displayed correctly in entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display stored localization data |
| Expected Result | Localization information should match onboarded values |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-253 — Verify risk and governance information is displayed correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open "Device blocklist" and launch Add entry. 2. In Risk & governance, set Valid up till (TTL) and enter reason for addition. 3. Enter source reference "CASE-2026-0744". 4. Review risk and governance values on the form. 5. Confirm values persist as entered. |
| Acceptance Criteria | System shall display stored governance information |
| Expected Result | Risk & governance fields accept input and display correctly on form and approved profile. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-254 — Verify entity lifecycle status is displayed in details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display current entity status |
| Expected Result | Entity details should display current lifecycle status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-255 — Verify entity metadata is displayed in details page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall display onboarding traceability information |
| Expected Result | Entity details should display available metadata information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, high, rbac, security |

### CLM-TC-256 — Verify entity details remain consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - View Entity |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Open entity details. 3. Refresh page. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain entity data integrity |
| Expected Result | Entity details should reload successfully with consistent information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-view-entity, medium, rbac, security |

### CLM-TC-257 — Verify Edit action is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Open Entity Grid. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow modification of existing entities |
| Expected Result | Verification confirms that Edit action is available for onboarded entities without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-258 — Verify Edit action opens entity in edit mode

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | "Device blocklist" is Active. |
| Test Data | List name: Device blocklist Maker: Charu Chauhan Reason for edit: Align purpose with updated policy POL-2026-04 |
| Steps | 1. From landing row actions choose Edit List. 2. Modify purpose or name with reason for edit. 3. Submit for approval. |
| Acceptance Criteria | System shall display editable onboarding form |
| Expected Result | Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-259 — Verify existing entity information is pre-populated in Edit form

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open Edit Entity form. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall load previously approved entity information |
| Expected Result | Previously saved entity information should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-260 — Verify editable entity fields can be modified

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Modify editable fields. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow updates to entity information |
| Expected Result | Verification confirms that editable entity fields can be modified without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-261 — Verify modified values remain intact during edit session

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Modify fields. 3. From the dashboard, navigate via Configuration > Custom List Manager. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve user changes before submission |
| Expected Result | Modified values should remain unchanged until saved or submitted |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, medium, rbac, security |

### CLM-TC-262 — Verify updated entity can be submitted for approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Modify entity. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support Maker-Checker workflow for entity modifications |
| Expected Result | Entity update request should be submitted successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-263 — Verify entity modification generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall create approval request for entity update |
| Expected Result | Verification confirms that entity modification generates approval request without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-264 — Verify entity update request enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall route modification through approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-265 — Verify submitted update request retains modified entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve updated values during approval workflow |
| Expected Result | Request should display all modified information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-266 — Verify approved entity reflects updated information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Edit Entity |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open entity details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall update entity after approval |
| Expected Result | Entity details should display approved updated information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-edit-entity, high, rbac, security |

### CLM-TC-267 — Verify Disable action can be initiated for active entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Select active entity. 3. Click Disable. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow entity deactivation workflow |
| Expected Result | Disable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-268 — Verify Enable action can be initiated for disabled entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Select disabled entity. 3. Click Enable. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow entity reactivation workflow |
| Expected Result | Enable request workflow should be initiated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-269 — Verify Enable/Disable request generates approval request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall create Maker-Checker request |
| Expected Result | Verification confirms that Enable/Disable request generates approval request without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-270 — Verify Enable/Disable request enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Internal fraud — flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall enforce approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-271 — Verify entity status remains unchanged before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall enforce approval dependency |
| Expected Result | Entity status should remain unchanged until checker approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-272 — Verify approved Disable request changes entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open entity details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall deactivate entity after approval |
| Expected Result | Verification confirms that approved Disable request changes entity status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-273 — Verify approved Enable request changes entity status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Open entity details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall reactivate entity after approval |
| Expected Result | Verification confirms that approved Enable request changes entity status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-274 — Verify disabled entity remains visible in entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open Entity Grid. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve traceability of disabled entities |
| Expected Result | Disabled entity should remain visible with correct status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-275 — Verify entity grid reflects latest approved status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: entity grid reflects latest approved status 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall display current lifecycle state |
| Expected Result | Verify entity grid reflects latest approved status — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-276 — Verify only approved requests trigger entity status transition

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Enable Disable Entity |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Submit the record for checker approval with a documented business reason. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall prevent unauthorized lifecycle changes |
| Expected Result | Entity status should not change until approval workflow is completed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-enable-disable-entity, high, rbac, security |

### CLM-TC-277 — Verify Maker information is captured during entity onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall record entity creator information |
| Expected Result | Verification confirms that Maker information is captured during entity onboarding without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-278 — Verify Checker information is captured after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall record approver information |
| Expected Result | Checker information should be available and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-279 — Verify Date Created is captured for entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain entity creation timestamp |
| Expected Result | Verification confirms that Date Created is captured for entity without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-280 — Verify Date Last Modified is updated after approved changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Modify entity. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Open entity details. |
| Acceptance Criteria | System shall maintain entity modification history |
| Expected Result | Date Last Modified should reflect latest approved update |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-281 — Verify metadata remains consistent across grid and entity details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | Medium |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform the verification described: metadata remains consistent across grid and entity details 3. Cross-check displayed values against list/entry inventory in the database or admin reference. 4. Refresh the page and repeat key checks. |
| Acceptance Criteria | System shall maintain metadata consistency |
| Expected Result | Verify metadata remains consistent across grid and entity details — UI matches specification with accurate data and no layout defects. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, medium, rbac, security |

### CLM-TC-282 — Verify metadata remains intact after entity status changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve audit information |
| Expected Result | Metadata information should remain unchanged except applicable modification details |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-283 — Verify metadata remains available after entity modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Modify entity. 3. Open details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve historical ownership information |
| Expected Result | Maker, Checker and date information should remain available |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-284 — Verify metadata provides complete audit traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity Metadata |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Open entity details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain end-to-end governance traceability |
| Expected Result | Entity metadata should provide complete traceability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-metadata, high, rbac, security |

### CLM-TC-285 — Verify Entity History section is available for onboarded entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entry "Rajan Mehta" has prior edit approved. |
| Test Data | Entry name: Rajan Mehta Sample change: Risk category Internal fraud → Adverse media |
| Steps | 1. Open View History for the entry. 2. Expand edit and creation events. 3. Verify before/after values. |
| Acceptance Criteria | System shall provide historical activity visibility |
| Expected Result | History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, functional |

### CLM-TC-286 — Verify entity onboarding activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Active custom list "Rejected KYC applicants" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Rejected KYC applicants" list detail. 2. Open Entity History. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain onboarding audit trail |
| Expected Result | Entity onboarding event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, rbac, security |

### CLM-TC-287 — Verify entity modification activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Modify entity. 3. Open History. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | Entity updates shall be auditable |
| Expected Result | Entity modification event should be recorded in history |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, rbac, security |

### CLM-TC-288 — Verify entity enable activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Enable entity. 3. Open History. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | Entity lifecycle changes shall be auditable |
| Expected Result | Verification confirms that entity enable activity is recorded in history without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, rbac, security |

### CLM-TC-289 — Verify entity disable activity is recorded in history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Disable entity. 3. Open History. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | Entity lifecycle changes shall be auditable |
| Expected Result | Verification confirms that entity disable activity is recorded in history without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, rbac, security |

### CLM-TC-290 — Verify history entries display activity timestamps

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entry "Rajan Mehta" has prior edit approved. |
| Test Data | Entry name: Rajan Mehta Sample change: Risk category Internal fraud → Adverse media |
| Steps | 1. Open View History for the entry. 2. Expand edit and creation events. 3. Verify before/after values. |
| Acceptance Criteria | System shall provide chronological traceability |
| Expected Result | History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, functional |

### CLM-TC-291 — Verify history entries display user accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entry "Al-Farrukh Trading LLC" has prior edit approved. |
| Test Data | Entry name: Al-Farrukh Trading LLC Sample change: Risk category Internal fraud → Adverse media |
| Steps | 1. Open View History for the entry. 2. Expand edit and creation events. 3. Verify before/after values. |
| Acceptance Criteria | System shall provide user-level traceability |
| Expected Result | History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, functional |

### CLM-TC-292 — Verify Entity History maintains complete lifecycle traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Entity History |
| Priority | High |
| Preconditions | Entry "192.168.44.0/24" has prior edit approved. |
| Test Data | Entry name: 192.168.44.0/24 Sample change: Risk category Internal fraud → Adverse media |
| Steps | 1. Open View History for the entry. 2. Expand edit and creation events. 3. Verify before/after values. |
| Acceptance Criteria | System shall preserve end-to-end entity activity audit trail |
| Expected Result | History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-entity-history, high, audit |

### CLM-TC-293 — Verify template download option is available on Bulk Upload screen

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide template download functionality |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-294 — Verify template file downloads successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall allow users to download onboarding template |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-295 — Verify downloaded template file is not corrupted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide a usable upload template |
| Expected Result | Upload rejected before workflow with actionable error; no partial onboarding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-296 — Verify template contains expected column structure

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide onboarding structure for bulk ingestion |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, bulk-upload |

### CLM-TC-297 — Verify template column headers are clearly identifiable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide readable onboarding structure |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, bulk-upload |

### CLM-TC-298 — Verify template remains downloadable across multiple attempts

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall support repeated template downloads |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-299 — Verify downloaded template can be used for upload preparation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide upload-ready template structure |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-300 — Verify template download does not alter existing uploaded records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Template Download |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall isolate template operations from entity data |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-template-download, high, export |

### CLM-TC-301 — Verify upload control is available on Bulk Upload screen

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide file upload capability |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-302 — Verify valid upload file can be selected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall allow file selection |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-303 — Verify valid upload file can be submitted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall accept valid onboarding file |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-304 — Verify upload request generates processing workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall initiate bulk onboarding process |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-305 — Verify uploaded file enters approval workflow when applicable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Internal fraud — flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall support governance controls |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, rbac, security |

### CLM-TC-306 — Verify upload request status is displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide upload visibility |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-307 — Verify upload with empty file is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate uploaded content |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-308 — Verify upload with incomplete onboarding data is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate uploaded entity information |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-309 — Verify upload with multiple entity records is accepted

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall support bulk onboarding |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-310 — Verify uploaded entity records are associated with selected custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall preserve list ownership |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-311 — Verify upload processing preserves record count integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall process all uploaded records |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-312 — Verify upload validation messages are displayed when errors occur

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide meaningful validation feedback |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, error-handling |

### CLM-TC-313 — Verify upload request retains uploaded file details

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall maintain upload traceability |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-314 — Verify upload processing does not impact existing approved entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall isolate onboarding operations |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-315 — Verify successfully processed upload contributes to entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Upload Validation |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall onboard uploaded entities |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-upload-validation, high, bulk-upload |

### CLM-TC-316 — Verify supported template file format can be uploaded

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall accept supported upload formats |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-317 — Verify unsupported file format is rejected

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: invalid_format.pdf Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file invalid_format.pdf. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall restrict unsupported formats |
| Expected Result | Upload rejected before workflow with actionable error; no partial onboarding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-318 — Verify corrupted file upload is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate file integrity |
| Expected Result | Upload rejected before workflow with actionable error; no partial onboarding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-319 — Verify blank file upload is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate uploaded file content |
| Expected Result | Upload rejected before workflow with actionable error; no partial onboarding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-320 — Verify file containing only headers is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate record availability |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-321 — Verify file containing special characters is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall process supported character sets |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-322 — Verify file with altered template structure is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate template integrity |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-323 — Verify upload validation occurs before onboarding request generation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate file prior to processing |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, error-handling |

### CLM-TC-324 — Verify valid file format proceeds to upload workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall permit processing of valid files |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, bulk-upload |

### CLM-TC-325 — Verify file format validation results are communicated to user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - File Format Validation |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide upload validation feedback |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-file-format-validation, high, error-handling |

### CLM-TC-326 — Verify uploaded file containing all mandatory columns is accepted for processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall accept upload files that comply with the mandatory template structure |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-327 — Verify upload is prevented when a mandatory column is completely removed from template

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Open Bulk upload and click Download template (XLSX). 2. Open file and verify columns mirror Add entry form. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate mandatory template structure before processing |
| Expected Result | Template contains required headers and opens without corruption. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-328 — Verify upload validation identifies multiple missing mandatory columns

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate complete template structure |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-329 — Verify upload validation is triggered before onboarding workflow initiation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall perform structural validation before request creation |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-330 — Verify file containing mandatory columns but blank mandatory values is validated

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate mandatory onboarding data in addition to template structure |
| Expected Result | Upload rejected before workflow with actionable error; no partial onboarding. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, bulk-upload |

### CLM-TC-331 — Verify mandatory column validation is applied across all uploaded records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate every uploaded entity record |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-332 — Verify column order changes do not impact mandatory column validation when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall validate columns based on structure rather than visual order |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-333 — Verify mandatory column validation feedback is understandable and actionable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide meaningful validation feedback |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-334 — Verify corrected file can be re-uploaded successfully after mandatory column issues are resolved

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall allow successful processing after validation issues are corrected |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-335 — Verify mandatory column validation maintains onboarding data integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Mandatory Columns |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall prevent incomplete entity onboarding through bulk ingestion |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-mandatory-columns, high, error-handling |

### CLM-TC-336 — Verify upload containing unique entity records proceeds successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall process unique records without duplicate validation failures |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-337 — Verify duplicate records within the same upload file are identified during validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall detect duplicate records within uploaded dataset |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-338 — Verify duplicate validation occurs before onboarding workflow initiation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall perform duplicate checks before processing |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-339 — Verify duplicate validation feedback identifies affected records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall provide traceable duplicate validation information |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-340 — Verify upload containing a mixture of unique and duplicate records is validated correctly

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall evaluate all uploaded records |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, bulk-upload |

### CLM-TC-341 — Verify duplicate validation remains consistent across repeated uploads

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Rejected KYC applicants" is Active; valid XLSX template available. |
| Test Data | List name: Rejected KYC applicants File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Rejected KYC applicants", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall apply duplicate rules consistently |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-342 — Verify corrected upload file can be resubmitted after duplicate issues are resolved

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall allow successful processing after correction |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, bulk-upload |

### CLM-TC-343 — Verify duplicate validation does not impact unrelated valid records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Device blocklist" is Active; valid XLSX template available. |
| Test Data | List name: Device blocklist File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Device blocklist", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall isolate validation results to affected records |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-344 — Verify duplicate validation preserves onboarding traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Adverse media flagged" is Active; valid XLSX template available. |
| Test Data | List name: Adverse media flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Adverse media flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall maintain validation visibility for audit purposes |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, error-handling |

### CLM-TC-345 — Verify duplicate detection supports onboarding data quality objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Duplicate Detection |
| Priority | High |
| Preconditions | "Internal fraud — flagged" is Active; valid XLSX template available. |
| Test Data | List name: Internal fraud — flagged File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file duplicate_rows.xlsx. 2. Select "Internal fraud — flagged", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall prevent unintended duplicate entity onboarding |
| Expected Result | Duplicates flagged with row references; user can correct and re-upload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-duplicate-detection, high, bulk-upload |

### CLM-TC-346 — Verify validation results are generated after upload processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | User uploads file for validation |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Upload file. 3. Wait for validation completion. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide upload validation outcome |
| Expected Result | Validation results should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, rbac, security |

### CLM-TC-347 — Verify validation report identifies records that passed validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "PEP — internal identified" has completed validation with pass and fail rows. |
| Test Data | List name: PEP — internal identified Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall provide visibility of successful records |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-348 — Verify validation report identifies records that failed validation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "Device blocklist" has completed validation with pass and fail rows. |
| Test Data | List name: Device blocklist Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall provide visibility of validation failures |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-349 — Verify validation report provides record-level traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "Adverse media flagged" has completed validation with pass and fail rows. |
| Test Data | List name: Adverse media flagged Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall allow identification of affected records |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-350 — Verify validation report remains accessible after upload processing completes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "Internal fraud — flagged" has completed validation with pass and fail rows. |
| Test Data | List name: Internal fraud — flagged Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall retain validation outcome visibility |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-351 — Verify validation report accurately reflects upload outcome

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "Rejected KYC applicants" has completed validation with pass and fail rows. |
| Test Data | List name: Rejected KYC applicants Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall maintain validation result integrity |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-352 — Verify validation report supports upload correction activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | Medium |
| Preconditions | A bulk upload on "PEP — internal identified" has completed validation with pass and fail rows. |
| Test Data | List name: PEP — internal identified Upload file: custom_list_entries_mixed.xlsx |
| Steps | 1. Open completed bulk upload from landing or list detail. 2. Open the validation report panel. 3. Navigate away and return to the upload history. 4. Re-open the same validation report. |
| Acceptance Criteria | System shall provide sufficient information for remediation |
| Expected Result | Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, medium, error-handling |

### CLM-TC-353 — Verify validation reporting supports AML onboarding governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Validation Report |
| Priority | High |
| Preconditions | Validation completed |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide auditable upload validation evidence |
| Expected Result | Validation report should provide traceable evidence of upload validation activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-validation-report, high, rbac, security |

### CLM-TC-354 — Verify successfully validated upload can be submitted for onboarding approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Validated upload available |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Complete validation. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow submission of valid upload batches |
| Expected Result | Verification confirms that successfully validated upload can be submitted for onboarding approval without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-355 — Verify upload submission generates onboarding request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Validated upload available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall create governance-controlled onboarding request |
| Expected Result | Onboarding request should be generated successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-356 — Verify submitted upload enters Pending Approval status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall route upload through Maker-Checker workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-357 — Verify submitted upload request is visible in approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload request submitted |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. From the dashboard, navigate via Configuration > Custom List Manager. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall make request available for checker review |
| Expected Result | Verification confirms that submitted upload request is visible in approval queue without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-358 — Verify submitted request retains uploaded entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Device blocklist" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve upload content during approval workflow |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-359 — Verify upload request remains pending until checker action occurs

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Request pending approval |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Submit the record for checker approval with a documented business reason. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall enforce Maker-Checker dependency |
| Expected Result | Request should remain pending until checker approval or rejection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-360 — Verify approved upload results in entity onboarding

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Upload request approved |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall onboard uploaded entities after approval |
| Expected Result | Verification confirms that approved upload results in entity onboarding without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-361 — Verify approved upload updates entity inventory statistics

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Note entity count. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Review the UI state and compare it against the expected business rule described in the test scenario. |
| Acceptance Criteria | System shall maintain entity count accuracy |
| Expected Result | Entity statistics should reflect newly onboarded entities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-362 — Verify approved upload entities are available within associated custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open associated custom list. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall associate onboarded entities with the correct custom list |
| Expected Result | Newly onboarded entities should be visible within the correct custom list |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-363 — Verify approved upload creates screening-ready entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Submission Workflow |
| Priority | High |
| Preconditions | Approved upload completed |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal Upload file: custom_list_entries_valid.xlsx Reason for addition: Bulk load of confirmed fraud referrals — CASE-2026-0144 |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open onboarded entities. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall complete onboarding lifecycle successfully |
| Expected Result | Onboarded entities should be available for subsequent AML screening and monitoring workflows |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-submission-workflow, high, rbac, security |

### CLM-TC-364 — Verify All Requests page is accessible from Custom List Manager navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Open Maker-Checker > All Requests as Sandeep Seal. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide centralized visibility of governance requests |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-365 — Verify all submitted governance requests are displayed in All Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Open Maker-Checker > All Requests as Sandeep Seal. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide complete request visibility |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-366 — Verify request inventory displays key request information required for review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open All Requests page. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide sufficient information for request identification |
| Expected Result | Request inventory should display configured request attributes required for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-367 — Verify requests generated from different workflows are visible in All Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Open Maker-Checker > All Requests as Sandeep Seal. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall centralize governance activities |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-368 — Verify request status is displayed for each governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open All Requests page. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide lifecycle visibility |
| Expected Result | Each request should display its current workflow status |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-369 — Verify latest submitted request appears in All Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Open Maker-Checker > All Requests as Sandeep Seal. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall update governance queue dynamically |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-370 — Verify request inventory remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open All Requests. 3. Refresh page. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain request data integrity |
| Expected Result | Request information should remain accurate after refresh |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, medium, rbac, security |

### CLM-TC-371 — Verify approved requests remain traceable within request inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open All Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Approved requests should remain available according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-372 — Verify rejected requests remain traceable within request inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open All Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Rejected requests should remain available according to configured lifecycle rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-373 — Verify request inventory supports governance auditability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - All Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain end-to-end request visibility |
| Expected Result | Request inventory should provide sufficient traceability for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-all-requests, high, rbac, security |

### CLM-TC-374 — Verify My Requests page is accessible from governance module

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan and open Maker-Checker > My Requests. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide user-specific request visibility |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-375 — Verify only requests created by logged-in user are displayed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open My Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide user-level request segregation |
| Expected Result | Only requests created by the logged-in user should be displayed |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-376 — Verify requests submitted from different workflows are displayed in My Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan and open Maker-Checker > My Requests. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall consolidate user activities |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-377 — Verify request status is visible within My Requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan and open Maker-Checker > My Requests. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide request progress visibility |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-378 — Verify newly submitted request appears in My Requests inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan and open Maker-Checker > My Requests. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall update user request visibility |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-379 — Verify approved user request reflects updated status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Adverse media flagged". |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open My Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain lifecycle visibility |
| Expected Result | Verification confirms that approved user request reflects updated status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, medium, rbac, security |

### CLM-TC-380 — Verify rejected user request reflects updated status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open My Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain lifecycle visibility |
| Expected Result | Verification confirms that rejected user request reflects updated status without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, medium, rbac, security |

### CLM-TC-381 — Verify My Requests inventory remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - My Requests |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan and open Maker-Checker > My Requests. 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve request integrity |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-my-requests, high, rbac, security |

### CLM-TC-382 — Verify user can open detailed view of governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open request from All Requests. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide detailed request review capability |
| Expected Result | Verification confirms that user can open detailed view of governance request without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-383 — Verify Request Details page displays request identification information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide request traceability |
| Expected Result | Request Details should display request identification information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-384 — Verify Request Details page displays submitted business data

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Adverse media flagged". |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall allow review of submitted information |
| Expected Result | All submitted information should be available for review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-385 — Verify Request Details page displays request creator information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support accountability and governance |
| Expected Result | Verification confirms that Request Details page displays request creator information without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-386 — Verify Request Details page displays request submission information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide lifecycle traceability |
| Expected Result | Request submission details should be displayed accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-387 — Verify Request Details page displays current request status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide workflow visibility |
| Expected Result | Request status should reflect current workflow state |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-388 — Verify Request Details page displays complete information required for approval decision

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support checker review |
| Expected Result | Request Details should contain sufficient information for approval or rejection review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-389 — Verify approved request details remain available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Adverse media flagged". |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve governance traceability |
| Expected Result | Approved request information should remain accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, medium, rbac, security |

### CLM-TC-390 — Verify rejected request details remain available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve governance traceability |
| Expected Result | Rejected request information should remain accessible |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, medium, rbac, security |

### CLM-TC-391 — Verify Request Details maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Request Details |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open Request Details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide end-to-end visibility of request lifecycle |
| Expected Result | Request Details should provide complete traceability of governance activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-request-details, high, rbac, security |

### CLM-TC-392 — Verify checker can access pending approval requests from governance queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "PEP — internal identified" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide review access to pending requests |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-393 — Verify checker can review complete request information before approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Device blocklist" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide sufficient information for governance decision |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-394 — Verify checker can approve eligible governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall support approval workflow execution |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-395 — Verify approved request status is updated appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain workflow lifecycle integrity |
| Expected Result | Verification confirms that approved request status is updated appropriately without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-396 — Verify approved request is removed from pending approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall prevent duplicate processing |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-397 — Verify approved business object reflects requested changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall execute approved governance action |
| Expected Result | Requested changes should be applied successfully after approval |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-398 — Verify approval action captures checker accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain governance traceability |
| Expected Result | Checker information should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-399 — Verify approval action captures approval timestamp

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Adverse media flagged". |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain audit history |
| Expected Result | Approval date and time should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-400 — Verify approved request remains available for audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Approved request should remain available according to governance retention rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, medium, rbac, security |

### CLM-TC-401 — Verify approval workflow maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Approval Workflow |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Rejected KYC applicants Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Rejected KYC applicants" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide end-to-end approval visibility |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-approval-workflow, high, rbac, security |

### CLM-TC-402 — Verify checker can reject pending governance request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Sandeep Seal has pending requests; maker and checker are different users. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Incomplete supporting documentation |
| Steps | 1. Login as Charu Chauhan; submit change on "PEP — internal identified" with reason "Periodic compliance review". 2. Open pending request, enter rejection comment, and reject. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall support rejection workflow execution |
| Expected Result | Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-403 — Verify rejected request status is updated appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain workflow lifecycle integrity |
| Expected Result | Verification confirms that rejected request status is updated appropriately without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-404 — Verify rejected request is removed from pending approval queue

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Sandeep Seal has pending requests; maker and checker are different users. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Incomplete supporting documentation |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Open pending request, enter rejection comment, and reject. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall prevent duplicate processing |
| Expected Result | Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-405 — Verify rejected business object does not reflect requested changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall prevent execution of rejected actions |
| Expected Result | Requested changes should not be applied after rejection |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-406 — Verify rejection action captures checker accountability information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain governance traceability |
| Expected Result | Checker information should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-407 — Verify rejection action captures rejection timestamp

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain audit history |
| Expected Result | Rejection date and time should be recorded successfully |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, medium, rbac, security |

### CLM-TC-408 — Verify rejected request remains available for governance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve workflow history |
| Expected Result | Rejected request should remain available for future review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, medium, rbac, security |

### CLM-TC-409 — Verify rejection workflow maintains complete governance traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Rejection Workflow |
| Priority | High |
| Preconditions | Sandeep Seal has pending requests; maker and checker are different users. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Adverse media flagged Reason: Periodic compliance review Decision comment: Incomplete supporting documentation |
| Steps | 1. Login as Charu Chauhan; submit change on "Adverse media flagged" with reason "Periodic compliance review". 2. Open pending request, enter rejection comment, and reject. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall provide end-to-end rejection visibility |
| Expected Result | Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-rejection-workflow, high, rbac, security |

### CLM-TC-410 — Verify maker identity is associated with submitted request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Internal fraud — flagged Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "Internal fraud — flagged" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall maintain creator accountability |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-411 — Verify checker identity is associated with approved request

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain approver accountability |
| Expected Result | Request should display checker information accurately |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-412 — Verify request lifecycle preserves maker and checker traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open processed request. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain governance accountability |
| Expected Result | Request should display complete maker-checker traceability |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-413 — Verify governance workflow records independent review activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Device blocklist". |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open processed request. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain approval evidence |
| Expected Result | Request history should contain evidence of governance review activity |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-414 — Verify maker details remain unchanged after request processing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Adverse media flagged". |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve creator accountability |
| Expected Result | Maker information should remain unchanged after workflow completion |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, medium, rbac, security |

### CLM-TC-415 — Verify checker details remain associated with final decision

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | Medium |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Internal fraud — flagged". |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve approver accountability |
| Expected Result | Checker information should remain associated with final workflow decision |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, medium, rbac, security |

### CLM-TC-416 — Verify processed request provides complete accountability trail

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "Rejected KYC applicants". |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open request details. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support compliance investigations |
| Expected Result | Request should provide complete accountability information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-417 — Verify governance workflow supports audit and regulatory review requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Segregation Of Duties |
| Priority | High |
| Preconditions | Charu Chauhan (maker) and Sandeep Seal (checker) accounts exist; a pending or sample completed request is available for "PEP — internal identified". |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain compliance traceability |
| Expected Result | Request should provide sufficient accountability evidence for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-segregation-of-duties, high, rbac, security |

### CLM-TC-418 — Verify request creation timestamp is captured for governance requests

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request submitted |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Submit the record for checker approval with a documented business reason. 3. Open request details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall record request initiation time |
| Expected Result | Verification confirms that request creation timestamp is captured for governance requests without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, rbac, security |

### CLM-TC-419 — Verify request processing timestamps are captured during governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Process request. 3. Open request details. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain workflow timing traceability |
| Expected Result | Verification confirms that request processing timestamps are captured during governance workflow without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, rbac, security |

### CLM-TC-420 — Verify request lifecycle provides chronological workflow visibility

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Request processed |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open processed request. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support timing-based governance review |
| Expected Result | Request lifecycle should display chronological workflow progression |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, rbac, security |

### CLM-TC-421 — Verify request timing information remains available after approval

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Approved request available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve timing traceability |
| Expected Result | Verification confirms that request timing information remains available after approval without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, rbac, security |

### CLM-TC-422 — Verify request timing information remains available after rejection

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Rejected request available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, reject the request with a mandatory rejection comment. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve timing traceability |
| Expected Result | Verification confirms that request timing information remains available after rejection without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, rbac, security |

### CLM-TC-423 — Verify governance workflow records duration-related information when available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | Medium |
| Preconditions | Processed request available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open processed request. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support workflow monitoring |
| Expected Result | Duration-related information should be displayed according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, medium, rbac, security |

### CLM-TC-424 — Verify workflow timing information remains accurate across request lifecycle

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain timing data integrity |
| Expected Result | Timing information should remain consistent and accurate |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, rbac, security |

### CLM-TC-425 — Verify workflow timing information supports governance and audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - SLA Validation |
| Priority | High |
| Preconditions | Request processed |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide traceable workflow timing evidence |
| Expected Result | Request should provide sufficient timing traceability for governance review |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-sla-validation, high, rbac, security |

### CLM-TC-426 — Verify Audit page is accessible from Custom List Manager navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide access to audit and compliance activity records |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-427 — Verify audit listing displays recorded governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | High |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide visibility of tracked system activities |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, high, bulk-upload |

### CLM-TC-428 — Verify audit listing displays sufficient information to identify audited events

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support activity traceability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-429 — Verify onboarding activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain onboarding audit trail |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-430 — Verify custom list lifecycle activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain list management audit trail |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-431 — Verify bulk upload activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain bulk onboarding audit trail |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-432 — Verify approval and rejection activities are captured within audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain governance decision audit trail |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-433 — Verify audit listing displays activities in chronological order

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support timeline-based investigation |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-434 — Verify newly generated activity appears in audit listing

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall update audit inventory dynamically |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-435 — Verify audit listing remains accurate after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Listing |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain audit data integrity |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-listing, medium, bulk-upload |

### CLM-TC-436 — Verify audit search control is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide search capability for audit records |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-437 — Verify audit search returns matching audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support activity retrieval using search criteria |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, screening-matching |

### CLM-TC-438 — Verify partial search returns relevant audit activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support flexible audit retrieval |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-439 — Verify audit search result accuracy

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall return only relevant audit records |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-440 — Verify search with non-existing value returns no matching records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall handle no-result scenarios appropriately |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, screening-matching |

### CLM-TC-441 — Verify audit search supports retrieval of recently generated activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall allow investigation of new events |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-442 — Verify search results remain consistent after page refresh

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain search result integrity |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-443 — Verify search capability supports audit investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Search |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall assist compliance review and investigation |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-search, medium, bulk-upload |

### CLM-TC-444 — Verify audit filter controls are available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide filtering capability for audit records |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-445 — Verify audit records can be filtered using available filter criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support filtered audit retrieval |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-446 — Verify filter results display only matching audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain filter result accuracy |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, screening-matching |

### CLM-TC-447 — Verify multiple filters can be applied together when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support refined audit investigation |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-448 — Verify audit filters can retrieve governance-related activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | High |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support governance investigations |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, high, bulk-upload |

### CLM-TC-449 — Verify audit filters can retrieve onboarding-related activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support onboarding investigations |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-450 — Verify filter reset functionality restores complete audit inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall allow users to clear applied criteria |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-451 — Verify audit filtering supports compliance investigation requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Filters |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall assist audit and regulatory review activities |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-filters, medium, bulk-upload |

### CLM-TC-452 — Verify date range filter controls are available on Audit page

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall provide date-based audit retrieval capability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-453 — Verify audit records can be retrieved using valid date range criteria

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall support date-based audit investigations |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-454 — Verify date range results contain only activities within selected period

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall maintain date filter accuracy |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-455 — Verify audit activities generated on boundary dates are included appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall process boundary dates consistently |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-456 — Verify date range with no matching activities is handled appropriately

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall support no-result scenarios |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, screening-matching |

### CLM-TC-457 — Verify date range filtering can retrieve recently generated audit activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall support recent activity investigation |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-458 — Verify date range filter can be cleared successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall allow users to restore complete audit inventory |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-459 — Verify date range filtering supports compliance investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Date Range |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Apply date range covering the test activity. |
| Acceptance Criteria | System shall provide chronological audit analysis capability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-date-range, medium, bulk-upload |

### CLM-TC-460 — Verify user can open detailed view of audit event

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide detailed audit event visibility |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-461 — Verify Event Details displays sufficient information to identify audited activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support activity traceability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-462 — Verify Event Details displays associated user information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support accountability and governance review |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-463 — Verify Event Details displays activity timing information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide chronological traceability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-464 — Verify Event Details displays activity outcome information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support governance investigations |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-465 — Verify Event Details remain accessible for approved governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, bulk-upload |

### CLM-TC-466 — Verify Event Details remain accessible for rejected governance activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | High |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, high, bulk-upload |

### CLM-TC-467 — Verify Event Details provide sufficient information for compliance investigations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Event Details |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support audit and regulatory review |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-event-details, medium, bulk-upload |

### CLM-TC-468 — Verify audit export option is available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide audit evidence extraction capability |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-469 — Verify audit records can be exported successfully

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support export of audit information |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-470 — Verify exported audit data matches displayed audit inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain export accuracy |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-471 — Verify export supports filtered audit results

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve applied investigation criteria |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-472 — Verify export supports date-range based audit investigations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall support extraction of targeted audit evidence |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-473 — Verify exported audit information remains readable and usable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide consumable audit evidence |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-474 — Verify export operation does not alter audit records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve audit data integrity |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-475 — Verify audit export supports compliance and regulatory review requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Export |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Export audit results for the filtered period. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall facilitate audit evidence sharing |
| Expected Result | Export file matches on-screen audit rows; export does not modify stored audit records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-export, medium, export |

### CLM-TC-476 — Verify audit records remain available after related business object changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve audit evidence |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-477 — Verify audit records remain available after approval workflow completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "PEP — internal identified" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, rbac, security |

### CLM-TC-478 — Verify audit records remain available after rejection workflow completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Sandeep Seal has pending requests; maker and checker are different users. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: Device blocklist Reason: Periodic compliance review Decision comment: Incomplete supporting documentation |
| Steps | 1. Login as Charu Chauhan; submit change on "Device blocklist" with reason "Periodic compliance review". 2. Open pending request, enter rejection comment, and reject. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve governance history |
| Expected Result | Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, rbac, security |

### CLM-TC-479 — Verify audit entries remain associated with the correct activity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain audit traceability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-480 — Verify audit entries remain associated with the responsible user

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain accountability traceability |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-481 — Verify audit timestamps remain consistent throughout activity lifecycle

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Rejected KYC applicants Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Rejected KYC applicants" or entry "Al-Farrukh Trading LLC". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain chronological accuracy |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-482 — Verify audit information remains consistent across listing and detail views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: PEP — internal identified Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "PEP — internal identified" or entry "192.168.44.0/24". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall maintain audit data consistency |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-483 — Verify audit records support reconstruction of business activity history

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Device blocklist Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Device blocklist" or entry "Khalid Al-Mansouri". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide investigation-ready audit evidence |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-484 — Verify audit records support governance accountability requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | High |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Adverse media flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Adverse media flagged" or entry "IMEI-3571920XXXXXX". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall provide evidence of user actions |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, high, bulk-upload |

### CLM-TC-485 — Verify audit trail maintains compliance and regulatory traceability

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Audit Integrity |
| Priority | Medium |
| Preconditions | Recent list or entry change performed by Charu Chauhan and approved by Sandeep Seal. |
| Test Data | Search key: Internal fraud — flagged Actor: Charu Chauhan Action types: Create, Update, Approve, Bulk upload Date range: Last 7 days |
| Steps | 1. Open Audit Trail from Custom List Manager navigation. 2. Search for "Internal fraud — flagged" or entry "Rajan Mehta". 3. Open latest event detail. 4. Verify actor, timestamp, and field changes. |
| Acceptance Criteria | System shall preserve complete audit evidence |
| Expected Result | Audit listing shows immutable events with correct user, timestamp, action, and before/after values. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-audit-integrity, medium, bulk-upload |

### CLM-TC-486 — Verify TTL information is displayed for entities associated with custom lists configured with a retention period

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall display TTL-related information for entities governed by list-level TTL configuration |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-487 — Verify TTL values displayed in Entity Grid remain consistent with entity detail information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain TTL information consistency across application views |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-488 — Verify TTL information remains visible after entity approval and onboarding completion

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Khalid Al-Mansouri Expired entry: Venkatesh Iyer TTL: 6 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall preserve lifecycle information after approval |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-489 — Verify TTL information remains available after entity modification requests are processed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: IMEI-3571920XXXXXX Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall preserve lifecycle tracking information |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-490 — Verify TTL information remains accurate after page refresh and navigation events

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain lifecycle data integrity |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, audit |

### CLM-TC-491 — Verify TTL information supports lifecycle monitoring and governance review activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - TTL Display |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall provide sufficient lifecycle visibility for compliance review |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-ttl-display, high, ttl |

### CLM-TC-492 — Verify entity reaches expiry state when configured TTL period is completed

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall apply expiry logic according to configured lifecycle rules |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, ttl |

### CLM-TC-493 — Verify expiry status is reflected consistently across entity inventory and details views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Khalid Al-Mansouri Expired entry: Venkatesh Iyer TTL: 6 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain lifecycle state consistency |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, ttl |

### CLM-TC-494 — Verify expired entities remain traceable for governance and audit review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: IMEI-3571920XXXXXX Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall preserve entity traceability after expiry |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, audit |

### CLM-TC-495 — Verify entity expiry does not impact audit history and governance records

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall preserve historical evidence after lifecycle completion |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, audit |

### CLM-TC-496 — Verify expiry processing maintains entity lifecycle integrity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiry |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall apply expiry logic without creating inconsistent lifecycle states |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiry, high, audit |

### CLM-TC-497 — Verify entities approaching expiry can be identified through lifecycle monitoring information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall provide visibility of entities nearing expiry |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-498 — Verify expiring-soon indication remains consistent across system views

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Khalid Al-Mansouri Expired entry: Venkatesh Iyer TTL: 6 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain lifecycle visibility consistency |
| Expected Result | Entries within 30-day window are flagged for operational review; counts appear in list metadata. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-499 — Verify expiring-soon entities remain available for governance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: IMEI-3571920XXXXXX Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall support proactive lifecycle management |
| Expected Result | Entries within 30-day window are flagged for operational review; counts appear in list metadata. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-500 — Verify lifecycle monitoring information updates appropriately as entity approaches expiry

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall reflect lifecycle progression |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-501 — Verify expiring-soon information supports operational review and remediation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expiring Soon |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall provide actionable lifecycle visibility |
| Expected Result | Entries within 30-day window are flagged for operational review; counts appear in list metadata. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expiring-soon, high, ttl |

### CLM-TC-502 — Verify expired entities display appropriate lifecycle status

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall clearly indicate expired lifecycle state |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-503 — Verify expired entities remain distinguishable from active entities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Khalid Al-Mansouri Expired entry: Venkatesh Iyer TTL: 6 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall provide clear lifecycle differentiation |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-504 — Verify expired status remains consistent after page refresh and navigation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: IMEI-3571920XXXXXX Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain lifecycle integrity |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, audit |

### CLM-TC-505 — Verify expired entities preserve onboarding and governance information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain historical traceability |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-506 — Verify expired status supports lifecycle governance and compliance review

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Expired Status |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Wait or simulate TTL elapse per test data setup. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall maintain compliance traceability |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-expired-status, high, ttl |

### CLM-TC-507 — Verify expired entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: 192.168.44.0/24 Expired entry: Venkatesh Iyer TTL: 24 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall apply screening eligibility according to entity lifecycle status |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-508 — Verify active entities continue to participate in screening operations

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Active entity available |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve screening eligibility for active entities |
| Expected Result | Active entities should remain available for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, rbac, security |

### CLM-TC-509 — Verify lifecycle state changes are reflected in screening eligibility behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: IMEI-3571920XXXXXX Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall synchronize lifecycle and screening states |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-510 — Verify expired entities remain visible for investigation even when screening eligibility changes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall preserve traceability independent of screening participation |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-511 — Verify screening eligibility behavior remains consistent across entity inventory

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall apply lifecycle rules uniformly |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, screening-matching |

### CLM-TC-512 — Verify lifecycle-driven screening behavior supports AML governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Screening Exclusion |
| Priority | High |
| Preconditions | Entities available across lifecycle stages |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain controlled screening population management |
| Expected Result | Entity lifecycle state should govern screening participation in a traceable and auditable manner |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-screening-exclusion, high, rbac, security |

### CLM-TC-513 — Verify Fuzzy Matching configuration is available during custom list setup

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "Device blocklist" can be edited by maker. |
| Test Data | List name: Device blocklist Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Device blocklist". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall provide configurable fuzzy matching capability |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-514 — Verify selected Fuzzy Matching configuration is retained after list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "Adverse media flagged" can be edited by maker. |
| Test Data | List name: Adverse media flagged Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Adverse media flagged". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall preserve matching configuration values |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-515 — Verify selected Fuzzy Matching configuration is retained after list modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "Internal fraud — flagged" can be edited by maker. |
| Test Data | List name: Internal fraud — flagged Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Internal fraud — flagged". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall preserve matching settings through lifecycle updates |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-516 — Verify entities belonging to fuzzy-enabled list participate in screening using configured matching behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | Approved custom list with Fuzzy Matching enabled and onboarded entities available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Configure Fuzzy Matching. 3. Complete onboarding workflow. 4. Review the UI state and compare it against the expected business rule described in the test scenario. |
| Acceptance Criteria | System shall apply configured matching settings during screening |
| Expected Result | Entities should participate in screening according to configured fuzzy matching settings |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, rbac, security |

### CLM-TC-517 — Verify similar-name screening scenarios are processed according to configured fuzzy matching settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "PEP — internal identified" can be edited by maker. |
| Test Data | List name: PEP — internal identified Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "PEP — internal identified". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall apply configured matching logic consistently |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-518 — Verify fuzzy matching configuration remains associated with correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "Device blocklist" can be edited by maker. |
| Test Data | List name: Device blocklist Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Device blocklist". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall isolate matching configuration by list |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-519 — Verify fuzzy matching configuration remains intact after entity onboarding activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | Medium |
| Preconditions | List "Adverse media flagged" can be edited by maker. |
| Test Data | List name: Adverse media flagged Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Adverse media flagged". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall preserve matching configuration throughout entity lifecycle |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, medium, screening-matching |

### CLM-TC-520 — Verify fuzzy matching configuration remains visible in governance and audit records where applicable

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | Medium |
| Preconditions | List "Internal fraud — flagged" can be edited by maker. |
| Test Data | List name: Internal fraud — flagged Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Internal fraud — flagged". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall support configuration traceability |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, medium, screening-matching |

### CLM-TC-521 — Verify fuzzy matching behavior remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "Rejected KYC applicants" can be edited by maker. |
| Test Data | List name: Rejected KYC applicants Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "Rejected KYC applicants". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall apply matching configuration consistently |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-522 — Verify fuzzy matching configuration supports AML screening objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Fuzzy Matching |
| Priority | High |
| Preconditions | List "PEP — internal identified" can be edited by maker. |
| Test Data | List name: PEP — internal identified Fuzzy threshold: 85% Alias matching: Enabled Screening name variant: Raj Mehta vs Rajan Mehta |
| Steps | 1. Open list configuration for "PEP — internal identified". 2. Enable fuzzy matching and set name threshold to 85%. 3. Enable alias matching. 4. Submit for checker approval and approve. 5. Screen a transaction containing a near-match name against the list. |
| Acceptance Criteria | System shall provide configurable matching flexibility for screening operations |
| Expected Result | Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-fuzzy-matching, high, screening-matching |

### CLM-TC-523 — Verify Multilingual Matching configuration is available during custom list setup

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall provide multilingual matching capability |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-524 — Verify selected Multilingual Matching configuration is retained after list creation

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall preserve multilingual matching settings |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-525 — Verify selected Multilingual Matching configuration is retained after list modification

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall preserve multilingual matching settings after updates |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-526 — Verify multilingual-enabled lists participate in screening using configured matching behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Multilingual-enabled list available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Enable Multilingual Matching. 3. Perform screening activity. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall apply multilingual matching settings during screening |
| Expected Result | Screening activity should apply configured multilingual matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, rbac, security |

### CLM-TC-527 — Verify multilingual entity information can participate in configured screening workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Multilingual-enabled list available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Onboard multilingual entity information. 3. Perform screening activity. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support multilingual data processing where configured |
| Expected Result | Multilingual entity information should participate in screening according to configured behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, rbac, security |

### CLM-TC-528 — Verify multilingual matching configuration remains associated with the correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | Medium |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall isolate multilingual settings by list |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, medium, screening-matching |

### CLM-TC-529 — Verify multilingual matching configuration changes remain traceable through governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | Medium |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall maintain configuration accountability |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, medium, screening-matching |

### CLM-TC-530 — Verify multilingual matching configuration supports AML screening requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Multilingual Matching |
| Priority | High |
| Preconditions | Entry with native script exists (e.g. Khalid Al-Mansouri). |
| Test Data | Entry: Khalid Al-Mansouri Native script: خالد المنصوري Script type: AR |
| Steps | 1. Enable multilingual matching on "PEP — internal identified". 2. Approve configuration. 3. Run screening using Arabic script variant of the onboarded name. |
| Acceptance Criteria | System shall support multilingual screening scenarios |
| Expected Result | Multilingual configuration persists; screening matches native-script variant per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-multilingual-matching, high, screening-matching |

### CLM-TC-531 — Verify onboarded entity names are available for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Approved entities available |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall utilize onboarded identity information during screening |
| Expected Result | Onboarded entity names should be available for screening operations |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, rbac, security |

### CLM-TC-532 — Verify primary entity name participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Approved entity available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform screening activity using onboarded entity. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall evaluate primary identity information |
| Expected Result | Primary entity name should participate in configured matching workflow |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, rbac, security |

### CLM-TC-533 — Verify alternate names or aliases participate in configured matching workflow where available

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Khalid Al-Mansouri Aliases: Khaled Al Mansouri |
| Steps | 1. Onboard "Khalid Al-Mansouri" with aliases "Khaled Al Mansouri". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall utilize available identity information for screening |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-534 — Verify modified entity names are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entity update approved |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify entity name. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Perform screening activity. |
| Acceptance Criteria | System shall use latest approved entity information |
| Expected Result | Latest approved entity name should be used during screening activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, rbac, security |

### CLM-TC-535 — Verify disabled entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Rajan Mehta Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall align screening behavior with entity lifecycle status |
| Expected Result | TTL displays consistently on grid and profile; expiry processing updates status without deleting history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-536 — Verify expired entities follow configured screening participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Entry with known expiry exists (e.g. Venkatesh Iyer — Expired). |
| Test Data | Active entry: Al-Farrukh Trading LLC Expired entry: Venkatesh Iyer TTL: 12 months Expiring-soon window: 30 days |
| Steps | 1. Open list detail and locate entry nearing or past expiry. 2. Review expiry date column and status badge. 3. Execute screening against expired vs active entry and compare hit behaviour. 4. Confirm audit history remains intact. |
| Acceptance Criteria | System shall align screening behavior with lifecycle status |
| Expected Result | Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-537 — Verify entity onboarding through bulk upload contributes to screening population

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | "PEP — internal identified" is Active; valid XLSX template available. |
| Test Data | List name: PEP — internal identified File: valid_entries.xlsx Max records: 50,000 Max size: 25 MB Mandatory columns: reason_for_addition + one of full_name/ip_address/mobile_number/device_id |
| Steps | 1. Prepare upload file valid_entries.xlsx. 2. Select "PEP — internal identified", enter reason, attach file, click Validate & submit. 3. Complete maker submission and checker approval if valid. |
| Acceptance Criteria | System shall support screening of bulk-onboarded entities |
| Expected Result | Valid file passes validation, creates pending request, and approved rows appear in entry grid. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, screening-matching |

### CLM-TC-538 — Verify entity onboarding through manual workflow contributes to screening population

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Manual onboarding completed successfully |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Create entity manually. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support screening of manually onboarded entities |
| Expected Result | Manually onboarded entities should participate in screening according to configured rules |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, rbac, security |

### CLM-TC-539 — Verify screening behavior remains consistent across repeated executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | Medium |
| Preconditions | Screening-ready entities available |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform repeated screening activities. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall apply matching configuration consistently |
| Expected Result | Equivalent screening scenarios should produce consistent matching behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, medium, rbac, security |

### CLM-TC-540 — Verify name matching functionality supports AML screening and watchlist management objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Name Matching |
| Priority | High |
| Preconditions | Screening-ready entities available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall provide effective name-based screening capability |
| Expected Result | Name matching functionality should support effective screening and watchlist management activities |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-name-matching, high, rbac, security |

### CLM-TC-541 — Verify alias information captured during entity onboarding is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Al-Farrukh Trading LLC Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "Al-Farrukh Trading LLC" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall preserve alias information for downstream matching |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-542 — Verify alias information participates in configured screening workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: 192.168.44.0/24 Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "192.168.44.0/24" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall utilize available alias information during matching |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-543 — Verify multiple aliases are available for screening when supported

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Khalid Al-Mansouri Aliases: Khaled Al Mansouri |
| Steps | 1. Onboard "Khalid Al-Mansouri" with aliases "Khaled Al Mansouri". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall utilize all configured alias information |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-544 — Verify alias modifications are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: IMEI-3571920XXXXXX Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "IMEI-3571920XXXXXX" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall utilize latest approved alias information |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-545 — Verify alias information onboarded through bulk upload participates in screening

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Rajan Mehta Aliases: Raj Mehta\|R. Mehta |
| Steps | 1. Onboard "Rajan Mehta" with aliases "Raj Mehta\|R. Mehta". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall apply matching rules consistently across onboarding methods |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-546 — Verify disabled entities follow configured alias matching participation rules

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | Medium |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Al-Farrukh Trading LLC Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "Al-Farrukh Trading LLC" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall align screening participation with lifecycle status |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, medium, screening-matching |

### CLM-TC-547 — Verify alias matching behavior remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | Medium |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: 192.168.44.0/24 Aliases: Alt Name\|A. Name |
| Steps | 1. Onboard "192.168.44.0/24" with aliases "Alt Name\|A. Name". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall apply matching logic consistently |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, medium, screening-matching |

### CLM-TC-548 — Verify alias matching supports AML screening and watchlist investigation requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alias Matching |
| Priority | High |
| Preconditions | Entry includes pipe-separated aliases. |
| Test Data | Entry name: Khalid Al-Mansouri Aliases: Khaled Al Mansouri |
| Steps | 1. Onboard "Khalid Al-Mansouri" with aliases "Khaled Al Mansouri". 2. Approve entry. 3. Screen using alias text only. |
| Acceptance Criteria | System shall support alternate identity screening |
| Expected Result | Alias participates in screening and generates hit when alias matches watch data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alias-matching, high, screening-matching |

### CLM-TC-549 — Verify onboarded email identifiers are retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: IMEI-3571920XXXXXX email: +919876543210 List name: Adverse media flagged |
| Steps | 1. Confirm "IMEI-3571920XXXXXX" retains email in entry profile. 2. Execute screening with matching email value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall preserve email information for matching |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-550 — Verify email identifiers participate in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Rajan Mehta email: +919876543210 List name: Internal fraud — flagged |
| Steps | 1. Confirm "Rajan Mehta" retains email in entry profile. 2. Execute screening with matching email value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall utilize email information during screening |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-551 — Verify onboarded mobile identifiers are retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Al-Farrukh Trading LLC mobile: +919876543210 List name: Rejected KYC applicants |
| Steps | 1. Confirm "Al-Farrukh Trading LLC" retains mobile in entry profile. 2. Execute screening with matching mobile value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall preserve mobile information for matching |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-552 — Verify mobile identifiers participate in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: 192.168.44.0/24 mobile: +919876543210 List name: PEP — internal identified |
| Steps | 1. Confirm "192.168.44.0/24" retains mobile in entry profile. 2. Execute screening with matching mobile value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall utilize mobile information during screening |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-553 — Verify onboarded IP Address information is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Khalid Al-Mansouri ip: +919876543210 List name: Device blocklist |
| Steps | 1. Confirm "Khalid Al-Mansouri" retains ip in entry profile. 2. Execute screening with matching ip value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall preserve IP information for matching |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-554 — Verify IP Address participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: IMEI-3571920XXXXXX ip: +919876543210 List name: Adverse media flagged |
| Steps | 1. Confirm "IMEI-3571920XXXXXX" retains ip in entry profile. 2. Execute screening with matching ip value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall utilize IP information during screening |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-555 — Verify onboarded Device Identifier information is retained for screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Rajan Mehta deviceId: +919876543210 List name: Internal fraud — flagged |
| Steps | 1. Confirm "Rajan Mehta" retains deviceId in entry profile. 2. Execute screening with matching deviceId value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall preserve device information for matching |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-556 — Verify Device Identifier participates in configured matching workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Digital identifier entry exists in active list. |
| Test Data | Entry name: Al-Farrukh Trading LLC ip: +919876543210 List name: Rejected KYC applicants |
| Steps | 1. Confirm "Al-Farrukh Trading LLC" retains ip in entry profile. 2. Execute screening with matching ip value. 3. Review hit outcome against list action on hit. |
| Acceptance Criteria | System shall utilize device information during screening |
| Expected Result | Identifier is stored, participates in screening, and triggers configured action on hit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, screening-matching |

### CLM-TC-557 — Verify multiple digital identifiers can participate in screening for the same entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Active custom list "PEP — internal identified" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "PEP — internal identified" list detail. 2. Perform screening activity. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support screening using available identifier information |
| Expected Result | Available digital identifiers should participate in screening according to implementation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, rbac, security |

### CLM-TC-558 — Verify updated digital identifiers are reflected in subsequent screening activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Active custom list "Device blocklist" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Device blocklist" list detail. 2. Modify digital identifier information. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Perform screening activity. |
| Acceptance Criteria | System shall utilize latest approved identifier information |
| Expected Result | Latest approved digital identifiers should be used during screening |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, rbac, security |

### CLM-TC-559 — Verify digital identifier matching remains consistent across onboarding methods

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | Medium |
| Preconditions | Active custom list "Adverse media flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Adverse media flagged Purpose: Adverse media flagged Action on hit: Generate alert TTL: 12 months Entry name: IMEI-3571920XXXXXX Entry ID: DEV-099012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Adverse media flagged" list detail. 2. Perform screening activity across onboarding methods. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall apply matching rules uniformly |
| Expected Result | Digital identifier matching behavior should remain consistent regardless of onboarding source |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, medium, rbac, security |

### CLM-TC-560 — Verify digital identifier matching supports AML investigation and screening objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Digital Identifier Matching |
| Priority | High |
| Preconditions | Active custom list "Internal fraud — flagged" exists with at least one approved entry; Compliance Officer can add or view entries. |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager and "Internal fraud — flagged" list detail. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support non-name based screening |
| Expected Result | Digital identifier matching should support identification of entities beyond traditional name matching |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-digital-identifier-matching, high, rbac, security |

### CLM-TC-561 — Verify Action On Hit configuration selected during list creation is retained

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Rejected KYC applicants" is Active with action "Alert & block". |
| Test Data | List name: Rejected KYC applicants Action on hit: Alert & block Entry: Al-Farrukh Trading LLC Screening trigger: Al-Farrukh Trading LLC |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Al-Farrukh Trading LLC". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall preserve configured screening response behavior |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-562 — Verify Action On Hit configuration remains unchanged after governance approval workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | Charu Chauhan can submit; Sandeep Seal can approve. |
| Test Data | Maker: Charu Chauhan Checker: Sandeep Seal List name: PEP — internal identified Reason: Periodic compliance review Decision comment: Approved per policy |
| Steps | 1. Login as Charu Chauhan; submit change on "PEP — internal identified" with reason "Periodic compliance review". 2. Login as Sandeep Seal; open pending request; review payload; approve with comment. 3. Verify request status and business object state. 4. Check Audit Trail for the governance event. |
| Acceptance Criteria | System shall preserve approved configuration values |
| Expected Result | Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, rbac, security |

### CLM-TC-563 — Verify configured Action On Hit behavior is available during screening execution

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Device blocklist" is Active with action "Alert & block". |
| Test Data | List name: Device blocklist Action on hit: Alert & block Entry: Khalid Al-Mansouri Screening trigger: Khalid Al-Mansouri |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Khalid Al-Mansouri". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall apply configured response settings during matching |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-564 — Verify screening hits are processed according to configured Action On Hit behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Adverse media flagged" is Active with action "Generate alert". |
| Test Data | List name: Adverse media flagged Action on hit: Generate alert Entry: IMEI-3571920XXXXXX Screening trigger: IMEI-3571920XXXXXX |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "IMEI-3571920XXXXXX". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall enforce configured screening response logic |
| Expected Result | Screening hit generates alert linked to correct list and entry with investigation details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-565 — Verify Action On Hit configuration remains associated with the correct custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Internal fraud — flagged" is Active with action "Alert & block". |
| Test Data | List name: Internal fraud — flagged Action on hit: Alert & block Entry: Rajan Mehta Screening trigger: Rajan Mehta |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Rajan Mehta". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall isolate screening behavior by list |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-566 — Verify Action On Hit configuration changes are traceable through governance workflow

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Rejected KYC applicants" is Active with action "Alert & block". |
| Test Data | List name: Rejected KYC applicants Action on hit: Alert & block Entry: Al-Farrukh Trading LLC Screening trigger: Al-Farrukh Trading LLC |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Al-Farrukh Trading LLC". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall maintain configuration accountability |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-567 — Verify screening response behavior remains consistent across repeated executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | Medium |
| Preconditions | Matching scenario available |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Perform repeated screening activities. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall apply configured logic consistently |
| Expected Result | Equivalent screening scenarios should result in consistent behavior |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, medium, rbac, security |

### CLM-TC-568 — Verify Action On Hit configuration supports AML screening governance requirements

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Action On Hit Behaviour |
| Priority | High |
| Preconditions | List "Device blocklist" is Active with action "Alert & block". |
| Test Data | List name: Device blocklist Action on hit: Alert & block Entry: Khalid Al-Mansouri Screening trigger: Khalid Al-Mansouri |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Khalid Al-Mansouri". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall provide configurable response handling |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-action-on-hit-behaviour, high, screening-matching |

### CLM-TC-569 — Verify screening activity can generate alerts according to configured screening behavior

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | List "Adverse media flagged" is Active with action "Generate alert". |
| Test Data | List name: Adverse media flagged Action on hit: Generate alert Entry: IMEI-3571920XXXXXX Screening trigger: IMEI-3571920XXXXXX |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "IMEI-3571920XXXXXX". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall support alert creation for relevant screening events |
| Expected Result | Screening hit generates alert linked to correct list and entry with investigation details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-570 — Verify generated alert remains associated with the correct entity

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open generated alert. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain entity-alert traceability |
| Expected Result | Verification confirms that generated alert remains associated with the correct entity without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, rbac, security |

### CLM-TC-571 — Verify generated alert remains associated with the originating custom list

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | User role: Compliance Officer List name: Rejected KYC applicants Purpose: Rejected KYC applicants Action on hit: Alert & block TTL: 12 months Entry name: Al-Farrukh Trading LLC Entry ID: ENT-204917 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall maintain list-level traceability |
| Expected Result | Verification confirms that generated alert remains associated with the originating custom list without errors and with data consistent across views. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, rbac, security |

### CLM-TC-572 — Verify alert information remains available after screening execution completes

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Complete screening activity. 3. Review the UI state and compare it against the expected business rule described in the test scenario. 4. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 5. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall preserve generated alerts |
| Expected Result | Generated alert should remain accessible after screening execution |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, rbac, security |

### CLM-TC-573 — Verify generated alert contains sufficient information for investigation activities

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Alert generated |
| Test Data | User role: Compliance Officer List name: Device blocklist Purpose: Device / IP blocklist Action on hit: Alert & block TTL: 6 months Entry name: Khalid Al-Mansouri Entry ID: IND-330129 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Open generated alert. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support analyst review and investigation |
| Expected Result | Alert should provide sufficient contextual information for investigation |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, rbac, security |

### CLM-TC-574 — Verify alert generation remains consistent across repeated screening executions

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | List "Adverse media flagged" is Active with action "Generate alert". |
| Test Data | List name: Adverse media flagged Action on hit: Generate alert Entry: IMEI-3571920XXXXXX Screening trigger: IMEI-3571920XXXXXX |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "IMEI-3571920XXXXXX". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall apply alert generation rules consistently |
| Expected Result | Screening hit generates alert linked to correct list and entry with investigation details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-575 — Verify generated alerts remain traceable through governance and audit workflows

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | Generated alert available |
| Test Data | User role: Compliance Officer List name: Internal fraud — flagged Purpose: Internal fraud — flagged entries Action on hit: Alert & block TTL: 12 months Entry name: Rajan Mehta Entry ID: IND-110482 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Review the UI state and compare it against the expected business rule described in the test scenario. 3. Validate outcome against the business rule and capture evidence (screenshot or export) if validation fails. 4. Repeat once after page refresh to confirm persistence. |
| Acceptance Criteria | System shall support compliance traceability |
| Expected Result | Alert activity should remain traceable through available governance mechanisms |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, rbac, security |

### CLM-TC-576 — Verify alert generation behavior remains aligned with configured Action On Hit settings

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | List "Rejected KYC applicants" is Active with action "Alert & block". |
| Test Data | List name: Rejected KYC applicants Action on hit: Alert & block Entry: Al-Farrukh Trading LLC Screening trigger: Al-Farrukh Trading LLC |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Al-Farrukh Trading LLC". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall enforce configured screening response behavior |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |

### CLM-TC-577 — Verify generated alerts remain associated with approved entity information

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | Medium |
| Preconditions | Entity update approved |
| Test Data | User role: Compliance Officer List name: PEP — internal identified Purpose: PEP — internal identified Action on hit: Generate alert TTL: 24 months Entry name: 192.168.44.0/24 Entry ID: IP-009012 Maker: Charu Chauhan Checker: Sandeep Seal |
| Steps | 1. Open Configuration > Custom List Manager. 2. Modify entity. 3. As Sandeep Seal, open the pending request, review payload, and record an approval decision with comment. 4. Perform screening activity. |
| Acceptance Criteria | System shall use latest approved entity data |
| Expected Result | Generated alerts should reflect current approved entity information |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, medium, rbac, security |

### CLM-TC-578 — Verify alert generation supports AML screening, monitoring and investigation objectives

| Field | Value |
| --- | --- |
| Module | Configuration |
| Feature | Custom List Manager - Alert Generation |
| Priority | High |
| Preconditions | List "Device blocklist" is Active with action "Alert & block". |
| Test Data | List name: Device blocklist Action on hit: Alert & block Entry: Khalid Al-Mansouri Screening trigger: Khalid Al-Mansouri |
| Steps | 1. Confirm list action on hit setting. 2. Screen transaction/customer data matching onboarded entry "Khalid Al-Mansouri". 3. Review alert or block outcome in screening results. 4. Trace alert back to list and entry in audit trail. |
| Acceptance Criteria | System shall provide actionable screening outcomes |
| Expected Result | Screening hit blocks transaction and logs alert with list and entry reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | custom-list-manager-alert-generation, high, screening-matching |
