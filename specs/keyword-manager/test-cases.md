# Keyword Manager — Detailed Test Cases (130)

### KM-TC-001 — Open Keyword Manager from nested configuration menu

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | High |
| Preconditions | Maker account with keyword create/edit permission is available. |
| Test Data | Menu path: Configuration > Sanctions Screening Configuration > Keyword Manager User role: Maker |
| Steps | 1. From the main menu, open Configuration > Sanctions Screening Configuration > Keyword Manager. 2. Confirm the listing page loads with breadcrumb, status tabs, toolbar, and data table. 3. Verify no error banner or blank content area is shown. |
| Acceptance Criteria | Maker can reach Keyword Manager and breadcrumb matches module path. |
| Expected Result | Keyword Manager page opens; breadcrumb shows 'Sanctions Screening Configuration / Keyword Manager'; listing displays Active, Inactive, and Drafted Keyword tabs with record counts; toolbar actions reflect Maker permissions; no error state is shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, high, rbac, security |

### KM-TC-002 — Access Keyword Manager via direct URL after authentication

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker account with keyword create/edit permission is available. |
| Test Data | URL pattern: /configuration/sanctions-screening/keyword-manager User role: Maker |
| Steps | 1. Log in as Maker and open Keyword Manager via menu. 2. Copy the browser URL. 3. Open a new tab, paste the URL, and press Enter. 4. Refresh once with active session. 5. Confirm listing reloads without redirect loop. |
| Acceptance Criteria | Authenticated user can open page directly without redirect loop. |
| Expected Result | Direct URL resolves to Keyword Manager and remains accessible after refresh with active session. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### KM-TC-003 — Validate page load performance for authorized user

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is logged in. Standard internal network conditions. |
| Test Data | Operational target: first interactive view <= 5 seconds on internal network User role: Maker |
| Steps | 1. Open browser developer network timing. 2. Navigate to Keyword Manager. 3. Record time until table and toolbar are interactive. |
| Acceptance Criteria | Page becomes interactive within acceptable operational threshold. |
| Expected Result | Page load completes within threshold and controls are clickable with no blank state freeze. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### KM-TC-004 — Verify browser back and forward navigation stability

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Low |
| Preconditions | Maker is logged in with keyword create/edit permission. |
| Test Data | Secondary module: Sanctions Screening Configuration main page User role: Maker |
| Steps | 1. Log in to AML application as Maker user with create/edit permission. 2. Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. 3. Navigate to another configuration submodule. 4. Use browser back button to return to Keyword Manager. 5. Use browser forward and back again. |
| Acceptance Criteria | Navigation history preserves module access state correctly. |
| Expected Result | Keyword Manager restores correctly on history navigation with no broken breadcrumb or missing controls. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, low, rbac, security |

### KM-TC-005 — Open Keyword Manager in parallel tabs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Low |
| Preconditions | Maker is logged in and on Keyword Manager. |
| Test Data | Search keyword: OFAC User role: Maker |
| Steps | 1. Log in to AML application as Maker user with create/edit permission. 2. Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. 3. Open Keyword Manager in first tab. 4. Duplicate tab and switch to duplicate. 5. Use Search in duplicate tab and verify response. |
| Acceptance Criteria | Module can be accessed in multiple tabs without session conflict. |
| Expected Result | Both tabs remain usable; searching in one tab does not break the other tab state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, low, rbac, security |

### KM-TC-006 — Ensure unauthorized deep-link is blocked for non-permitted role

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | High |
| Preconditions | User account without Keyword Manager module permission. |
| Test Data | Viewer profile without keyword create rights User role: Viewer |
| Steps | 1. Log in with an account lacking Keyword Manager permission. 2. Open the Keyword Manager URL directly. 3. Observe access-denied response. 4. Confirm no editable controls are exposed. |
| Acceptance Criteria | User without module access is denied entry with clear message. |
| Expected Result | System blocks access and shows authorization message or redirects to permitted page; no editable controls are exposed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, high, rbac, security |

### KM-TC-007 — Verify breadcrumb click returns to parent module

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Low |
| Preconditions | Maker is logged in with keyword create/edit permission. |
| Test Data | Breadcrumb text: Sanctions Screening Configuration / Keyword Manager User role: Maker |
| Steps | 1. Log in to AML application as Maker user with create/edit permission. 2. Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. 3. Click 'Sanctions Screening Configuration' breadcrumb segment. 4. Validate parent module screen is opened. 5. Navigate back to Keyword Manager from menu. |
| Acceptance Criteria | Breadcrumb supports navigation to parent screen. |
| Expected Result | Breadcrumb click opens parent module and user can return to Keyword Manager normally. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, low, rbac, security |

### KM-TC-008 — Retain selected environment context after page revisit

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is logged in with keyword create/edit permission. |
| Test Data | Entity context: UAE Retail User role: Maker |
| Steps | 1. Log in to AML application as Maker user with create/edit permission. 2. Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. 3. Select branch/entity context 'UAE Retail'. 4. Open Keyword Manager and note selected context. 5. Navigate away and return to Keyword Manager. |
| Acceptance Criteria | Configured branch/entity context remains consistent on revisit. |
| Expected Result | Keyword Manager opens under the same selected context and shows data for that entity without forced reset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### KM-TC-009 — Load default Active tab on first entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Seeded data: at least 5 active records User role: Maker |
| Steps | 1. Open Keyword Manager and inspect selected tab. |
| Acceptance Criteria | Active tab is selected by default for authorized users. |
| Expected Result | Active tab is highlighted on initial load and table rows belong to active status only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, high, rbac, security |

### KM-TC-010 — Switch among all status tabs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Tab names: Active, Inactive, Drafted Keyword User role: Maker |
| Steps | 1. Click Inactive tab and review table status values. 2. Click Drafted Keyword tab and review table status values. 3. Return to Active tab. |
| Acceptance Criteria | User can switch to Active, Inactive, and Drafted Keyword tabs. |
| Expected Result | Each tab loads corresponding status records and preserves table structure and toolbar responsiveness. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, high, rbac, security |

### KM-TC-011 — Validate tab counters against row totals

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Pagination size: 25 rows User role: Maker |
| Steps | 1. Capture badge count on Active tab. 2. Apply no filters and count visible rows page by page. 3. Repeat for Inactive and Drafted Keyword tabs. |
| Acceptance Criteria | Tab badges display accurate counts for each status. |
| Expected Result | Badge counter on each tab equals total rows available for that status set. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, rbac, security |

### KM-TC-012 — Confirm no unsupported Pending Approval tab is shown

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Expected tabs: Active, Inactive, Drafted Keyword User role: Viewer |
| Steps | 1. Inspect all status tabs visible above data table. |
| Acceptance Criteria | Only approved status tabs are visible in UI. |
| Expected Result | UI shows exactly three tabs (Active, Inactive, Drafted Keyword) and does not display a separate Pending Approval tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, high, rbac, security |

### KM-TC-013 — Preserve selected tab after browser refresh

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Tab under test: Drafted Keyword User role: Maker |
| Steps | 1. Open Drafted Keyword tab. 2. Refresh browser. 3. Verify selected tab and data state. |
| Acceptance Criteria | Current tab state remains after refresh. |
| Expected Result | After refresh, Drafted Keyword remains selected and drafted records are displayed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, low, rbac, security |

### KM-TC-014 — Keep search keyword when switching tabs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Search text: OFAC User role: Maker |
| Steps | 1. Enter Search value 'OFAC'. 2. Switch from Active to Inactive tab. 3. Observe whether same search term applies and result set updates. |
| Acceptance Criteria | Search context behavior is consistent across tab transitions. |
| Expected Result | Search term persists in input and each tab returns only matching records within that tab status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, rbac, security |

### KM-TC-015 — Show zero-state message for empty status tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Status Tabs |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager listing (Active tab selected). |
| Test Data | Drafted records: 0 User role: Maker |
| Steps | 1. Click Drafted Keyword tab when no draft exists. |
| Acceptance Criteria | Empty tab presents user guidance without layout break. |
| Expected Result | Table area shows clear empty-state message and action buttons remain available based on role permissions. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, low, rbac, security |

### KM-TC-016 — Search by full keyword phrase

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Keyword phrase: OFAC User role: Maker |
| Steps | 1. Enter 'OFAC' in Search field and execute. 2. Review returned rows. |
| Acceptance Criteria | Search returns precise phrase matches in current tab. |
| Expected Result | Returned rows contain keyword phrase 'OFAC' and no unrelated records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, rbac, security |

### KM-TC-017 — Search by partial text fragment

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Partial fragment: High User role: Maker |
| Steps | 1. Enter partial text 'High' in Search field. 2. Execute search and inspect matching records. |
| Acceptance Criteria | Search supports partial term retrieval. |
| Expected Result | Results include records containing the fragment in keyword/phrase and exclude fully non-matching records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, rbac, security |

### KM-TC-018 — Validate case-insensitive search behavior

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Uppercase and lowercase variants of 'Politically Exposed Person' User role: Maker |
| Steps | 1. Search using uppercase 'POLITICALLY EXPOSED PERSON'. 2. Repeat search using lowercase 'politically exposed person'. 3. Compare result counts. |
| Acceptance Criteria | Search logic is not sensitive to character case. |
| Expected Result | Both searches produce identical result set and count, confirming case-insensitive lookup. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, rbac, security |

### KM-TC-019 — Search with no matching records

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Search text: ZZZ_NON_EXISTENT_999 User role: Viewer |
| Steps | 1. Enter 'ZZZ_NON_EXISTENT_999' in Search and submit. |
| Acceptance Criteria | System handles unmatched query cleanly. |
| Expected Result | No-result state is displayed with table headers intact and no stale records visible. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, rbac, security |

### KM-TC-020 — Clear search and restore full list

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Before clear: filtered set, After clear: full Active set User role: Maker |
| Steps | 1. Search for 'OFAC'. 2. Clear search input and trigger search reset. 3. Review row count before and after clear. |
| Acceptance Criteria | Clearing search resets the data set promptly. |
| Expected Result | Table repopulates full tab dataset immediately after clearing search criteria. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, rbac, security |

### KM-TC-021 — Run search independently per status tab

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Search text: Terror User role: Maker |
| Steps | 1. Search for 'Terror'. 2. Capture result count in Active tab. 3. Switch to Inactive tab without changing search text. |
| Acceptance Criteria | Search scope remains limited to active tab. |
| Expected Result | Result count updates to records from selected tab only; cross-tab records do not leak into view. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, rbac, security |

### KM-TC-022 — Trim leading and trailing spaces in search input

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Search & Filter |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Search text with padding spaces User role: Maker |
| Steps | 1. Enter search text with spaces: '   OFAC   '. 2. Execute search. |
| Acceptance Criteria | Search normalizes padded whitespace. |
| Expected Result | Search engine trims spaces and returns same records as input 'OFAC'. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, low, rbac, security |

### KM-TC-023 — Sort Keyword/Phrase in ascending order

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Sort column: Keyword/Phrase, direction: ascending User role: Viewer |
| Steps | 1. Click 'Keyword/Phrase' column header once. 2. Inspect first 10 rows in table. |
| Acceptance Criteria | Ascending sort arranges rows correctly. |
| Expected Result | Rows are ordered ascending by 'Keyword/Phrase' according to displayed value semantics. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, rbac, security |

### KM-TC-024 — Sort Category in descending order

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Sort column: Category, direction: descending User role: Viewer |
| Steps | 1. Click 'Category' header twice to apply descending order. 2. Inspect first 10 rows. |
| Acceptance Criteria | Descending sort arranges rows correctly. |
| Expected Result | Rows are ordered descending by 'Category' and sort indicator reflects descending state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, rbac, security |

### KM-TC-025 — Validate multi-page table row consistency

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Low |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Page size: 25, Total records: >= 40 User role: Viewer |
| Steps | 1. Move from page 1 to page 2 using pagination control. 2. Return to page 1. |
| Acceptance Criteria | Row numbering and data continuity remain stable across pages. |
| Expected Result | Pagination changes page content correctly; no duplicate or missing rows between transitions. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, low, rbac, security |

### KM-TC-026 — Check column visibility and order

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Expected order: Keyword/Phrase, Category, Risk Level, Match Type, Threshold Score, Screening Fields, Created Date, Status, Actions User role: Viewer |
| Steps | 1. Inspect table header labels from left to right. |
| Acceptance Criteria | All expected columns are present in configured order. |
| Expected Result | All required columns are visible in expected order and Actions column is present at the far right. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, high, rbac, security |

### KM-TC-027 — Ensure long keyword text is safely rendered

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Low |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Keyword length: approximately 320 characters User role: Viewer |
| Steps | 1. Search and open row with long keyword phrase. 2. Observe table cell wrapping/truncation behavior. |
| Acceptance Criteria | Long phrases render without breaking table alignment. |
| Expected Result | Long phrase appears with controlled wrapping or truncation; adjacent columns remain aligned. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, low, rbac, security |

### KM-TC-028 — Verify created date format is consistent

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Low |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Expected display format: YYYY-MM-DD HH:mm or configured locale equivalent User role: Viewer |
| Steps | 1. Inspect Created Date values for first 15 rows. |
| Acceptance Criteria | Created Date follows system date-time format for all rows. |
| Expected Result | All displayed dates use one consistent format with valid timestamps and no null text for completed records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, low, rbac, security |

### KM-TC-029 — Sort Status in ascending order

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Sort column: Status, direction: ascending User role: Viewer |
| Steps | 1. Click 'Status' column header once. 2. Inspect first 10 rows in table. |
| Acceptance Criteria | Ascending sort arranges rows correctly. |
| Expected Result | Rows are ordered ascending by 'Status' according to displayed value semantics. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, rbac, security |

### KM-TC-030 — Sort Keyword/Phrase in descending order

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Sort column: Keyword/Phrase, direction: descending User role: Viewer |
| Steps | 1. Click 'Keyword/Phrase' header twice to apply descending order. 2. Inspect first 10 rows. |
| Acceptance Criteria | Descending sort arranges rows correctly. |
| Expected Result | Rows are ordered descending by 'Keyword/Phrase' and sort indicator reflects descending state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, rbac, security |

### KM-TC-031 — Create a new custom category with mandatory fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Name=Cybercrime Indicators; Description=Category for regional watchlist enrichment User role: Maker |
| Steps | 1. Click Add Category. 2. Enter Name 'CustomCategory_A1'. 3. Enter Description 'Category for regional watchlist enrichment'. 4. Submit for checker approval. |
| Acceptance Criteria | Maker can submit unique category with valid details. |
| Expected Result | Category request is created in pending state and visible to checker for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, rbac, security |

### KM-TC-032 — Reject duplicate category name

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Name=Sanctions User role: Maker |
| Steps | 1. Click Add Category. 2. Enter Name 'Sanctions'. 3. Submit category. |
| Acceptance Criteria | System blocks creating category with existing name. |
| Expected Result | Submission is blocked with duplicate category validation message and no new request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, rbac, security |

### KM-TC-033 — Validate category name max length 100 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Name length=101 characters User role: Maker |
| Steps | 1. Open Add Category. 2. Paste 101-character category name. 3. Attempt submission. |
| Acceptance Criteria | Name field enforces 100-character upper limit. |
| Expected Result | System prevents submission and indicates category name length must not exceed 100 characters. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, rbac, security |

### KM-TC-034 — Validate category description max length 500 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Name=Cybercrime Indicators; Description length=501 User role: Maker |
| Steps | 1. Open Add Category. 2. Enter Name 'CustomCategory_A4_D'. 3. Paste 501-character description. 4. Submit category. |
| Acceptance Criteria | Description field enforces 500-character upper limit. |
| Expected Result | System shows validation error for description length and prevents submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, rbac, security |

### KM-TC-035 — Cancel Add Category operation

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Cancelled category name=Cybercrime Indicators User role: Maker |
| Steps | 1. Open Add Category. 2. Enter Name 'CustomCategory_A5_Cancel'. 3. Click Cancel. 4. Search for entered name. |
| Acceptance Criteria | Cancel closes panel without creating a request. |
| Expected Result | Panel closes and cancelled category is not available in list or pending queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, rbac, security |

### KM-TC-036 — Allow special characters supported by naming convention

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Name=Geo-Political_Alerts 2026 User role: Maker |
| Steps | 1. Open Add Category. 2. Enter Name 'Geo-Political_Alerts 2026'. 3. Enter valid description and submit. |
| Acceptance Criteria | Permitted characters are accepted in category name. |
| Expected Result | Category is accepted when characters are within allowed naming rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, low, rbac, security |

### KM-TC-037 — Disable category control for Sanctions

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently enabled. |
| Test Data | Category=Sanctions; Action=Disable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle Sanctions to disabled state. 3. Submit change for checker approval. |
| Acceptance Criteria | Maker can request category disable action via controls. |
| Expected Result | Disable request is logged and enters maker-checker workflow. After Checker approval, all active Sanctions-category keywords are excluded from the next screening run while remaining visible in the listing. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-038 — Enable disabled category Terrorism

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently disabled. |
| Test Data | Category=Terrorism; Action=Enable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle Terrorism to enabled state. 3. Submit enable request. |
| Acceptance Criteria | Previously disabled category can be enabled through control flow. |
| Expected Result | Enable request is submitted and Terrorism becomes available after checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-039 — Prevent category toggle without permission

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Role=Viewer User role: Viewer |
| Steps | 1. Open Category Controls. 2. Attempt to toggle any category state. |
| Acceptance Criteria | Viewer cannot alter category control states. |
| Expected Result | Toggles are disabled or hidden for viewer; no control update request can be initiated. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-040 — Disable category control for Financial Crime

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently enabled. |
| Test Data | Category=Financial Crime; Action=Disable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle Financial Crime to disabled state. 3. Submit change for checker approval. |
| Acceptance Criteria | Maker can request category disable action via controls. |
| Expected Result | Disable request for Financial Crime is captured in maker-checker workflow and category shows pending lock. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-041 — Enable disabled category Sanctions

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently disabled. |
| Test Data | Category=Sanctions; Action=Enable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle Sanctions to enabled state. 3. Submit enable request. |
| Acceptance Criteria | Previously disabled category can be enabled through control flow. |
| Expected Result | Enable request is submitted and Sanctions becomes available after checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-042 — Disable category control for PEP

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently enabled. |
| Test Data | Category=PEP; Action=Disable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle PEP to disabled state. 3. Submit change for checker approval. |
| Acceptance Criteria | Maker can request category disable action via controls. |
| Expected Result | Disable request for PEP is captured in maker-checker workflow and category shows pending lock. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-043 — Enable disabled category Financial Crime

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Target category is currently disabled. |
| Test Data | Category=Financial Crime; Action=Enable User role: Maker |
| Steps | 1. Open Category Controls. 2. Toggle Financial Crime to enabled state. 3. Submit enable request. |
| Acceptance Criteria | Previously disabled category can be enabled through control flow. |
| Expected Result | Enable request is submitted and Financial Crime becomes available after checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-044 — Submit exact-match keyword with all mandatory fields and screening field mapping

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: money laundering; Category: Financial Crime; Risk: High; Match Type: Exact Match; Screening Fields: News Article Full Text, Crime Type Tags User role: Maker |
| Steps | 1. Click Add Keyword. 2. Enter Keyword 'money laundering', Category Financial Crime, Risk Level High, Match Type Exact Match. 3. Map Screening Fields: News Article Full Text; Crime Type Tags. 4. Click Submit. 5. Confirm checker submission modal with timestamp. 6. Locate entry in Drafted Keyword tab or pending queue. |
| Acceptance Criteria | Maker can submit exact keyword when all required fields are valid. |
| Expected Result | Submission succeeds. Threshold Score field remains hidden. Request enters Pending Approval with full field payload captured for Checker review. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, rbac, security |

### KM-TC-045 — Submit fuzzy-match keyword with mandatory threshold and screening field mapping

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: hawala; Threshold: 75; Screening Fields: Business Activity Description, Source of Funds Description User role: Maker |
| Steps | 1. Click Add Keyword. 2. Enter Keyword 'hawala', Category Financial Crime, Risk Level High, Match Type Fuzzy Match. 3. Enter Threshold Score 75. 4. Map Screening Fields: Business Activity Description; Source of Funds Description. 5. Submit for checker approval. |
| Acceptance Criteria | Threshold is mandatory and accepted within 1-100 for fuzzy match. |
| Expected Result | Fuzzy keyword is accepted with threshold 75 stored. Request routes to Checker queue; precision hint reflected Balanced/High band at entry time. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, rbac, security |

### KM-TC-046 — Save keyword as draft

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword=hawala DRAFT; Match Type=Exact Match User role: Maker |
| Steps | 1. Open Add Keyword panel and enter valid mandatory fields. 2. Click Save Draft instead of Submit. 3. Open Drafted Keyword tab and search by phrase. |
| Acceptance Criteria | Save Draft stores record in Drafted Keyword tab without checker submission. |
| Expected Result | Record appears in Drafted Keyword tab with status indicating draft state and no checker request generated yet. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, rbac, security |

### KM-TC-047 — Cancel Add Keyword discards unsaved entry

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword=bearer shares CANCEL User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter Keyword 'temp cancel phrase' and partially complete Category. 3. Click Cancel. 4. Confirm discard if confirmation prompt appears. 5. Search all tabs for the entered phrase. |
| Acceptance Criteria | Cancel discards unsaved changes. |
| Expected Result | No draft, pending, or active record is created. Search across Active, Inactive, and Drafted tabs returns zero matches. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, rbac, security |

### KM-TC-048 — Enforce mandatory field validation in add keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Missing required fields: Category, Risk Level, Match Type, Screening Fields User role: Maker |
| Steps | 1. Open Add Keyword panel. 2. Leave Category and Screening Fields empty. 3. Click Submit. |
| Acceptance Criteria | System blocks submission when required inputs are missing. |
| Expected Result | Validation messages appear for each mandatory field and record is not submitted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, high, rbac, security |

### KM-TC-049 — Map keyword to single field from Name Screening group

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: politically exposed; Selected field: Occupation / Designation; Other groups: none User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter Keyword 'politically exposed', Category PEP, Risk Level High, Match Type Fuzzy Match, Threshold 80. 3. Open Screening Fields dropdown under Name Screening group. 4. Select only Occupation / Designation. 5. Submit for checker approval. 6. After approval, open the keyword row and verify stored mapping. |
| Acceptance Criteria | Keyword scans only selected field in Name Screening group. |
| Expected Result | Approved keyword stores exactly one Screening Field (Occupation / Designation). Listing and history show no fields from Adverse Media or KYC groups. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, high, rbac, security |

### KM-TC-050 — Map keyword to cross-group field selection

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: corruption; Fields: Beneficial Owner Description \| News Article Full Text \| Source of Funds Description User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter Keyword 'corruption', Category Financial Crime, Risk Level Medium, Match Type Fuzzy Match, Threshold 70. 3. Select Screening Fields across groups: Beneficial Owner Description (Name); News Article Full Text (Adverse Media); Source of Funds Description (KYC). 4. Submit for checker approval. 5. Review Screening Fields column on listing row. |
| Acceptance Criteria | Multi-select can include fields from multiple groups. |
| Expected Result | All three selected fields persist after approval. Combined mapping is visible on the listing row and in audit history. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, high, rbac, security |

### KM-TC-051 — Require at least one screening field selection

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Screening Fields selection count=0 User role: Maker |
| Steps | 1. Fill all mandatory keyword inputs except screening fields. 2. Attempt submit. |
| Acceptance Criteria | Submission is blocked when no field is selected. |
| Expected Result | System shows mandatory validation for Screening Fields and prevents submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, high, rbac, security |

### KM-TC-052 — Persist screening field mappings after edit

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | Medium |
| Preconditions | Maker is logged in. An active approved keyword exists for edit. |
| Test Data | Updated fields=Regulatory Body Name in Article\|Business Type / Industry Code User role: Maker |
| Steps | 1. Open keyword for edit/update action. 2. Change field mapping to 'Regulatory Body Name in Article' and 'Business Type / Industry Code'. 3. Submit update and complete checker approval. |
| Acceptance Criteria | Edited field mappings are saved correctly after approval flow. |
| Expected Result | Post-approval keyword shows updated screening field mappings exactly as submitted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, medium, rbac, security |

### KM-TC-053 — Accept fuzzy threshold at boundary value 1

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold Score=1 User role: Maker |
| Steps | 1. Open Add Keyword. 2. Set Match Type as Fuzzy Match. 3. Enter Threshold Score '1'. 4. Submit with valid mandatory fields. |
| Acceptance Criteria | Valid threshold within 1-100 is accepted. |
| Expected Result | System accepts threshold value and stores fuzzy keyword with entered score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-054 — Reject fuzzy threshold below valid range (0)

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Match Type: Fuzzy Match; Threshold Score: 0 |
| Steps | 1. Open Add Keyword and select Match Type Fuzzy Match. 2. Complete all other mandatory fields. 3. Enter Threshold Score 0. 4. Click Submit. 5. Observe inline validation on Threshold Score. |
| Acceptance Criteria | Threshold values outside 1–100 are blocked at submission. |
| Expected Result | Validation error states allowed range is 1 to 100 and submission is blocked. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, maker-checker |

### KM-TC-055 — Hide threshold input for Exact Match

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Match Type=Exact Match User role: Maker |
| Steps | 1. Open Add Keyword. 2. Select Match Type as Exact Match. 3. Inspect form controls. |
| Acceptance Criteria | Threshold input is not shown when match type is Exact Match. |
| Expected Result | Threshold Score field is hidden/disabled and exact keyword can be submitted without threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-056 — Classify threshold hint as Low/Balanced/High

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold checks: 45(Low), 70(Balanced), 85(High) User role: Maker |
| Steps | 1. Select Fuzzy Match. 2. Enter threshold 45, then 70, then 85 and observe hint text. |
| Acceptance Criteria | UI hint reflects threshold precision band definition. |
| Expected Result | Hint labels align to bands: <50 Low, 50-79 Balanced, >=80 High. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, medium, rbac, security |

### KM-TC-057 — Accept fuzzy threshold at boundary value 80

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold Score=80 User role: Maker |
| Steps | 1. Open Add Keyword. 2. Set Match Type as Fuzzy Match. 3. Enter Threshold Score '80'. 4. Submit with valid mandatory fields. |
| Acceptance Criteria | Valid threshold within 1-100 is accepted. |
| Expected Result | System accepts threshold value and stores fuzzy keyword with entered score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-058 — Accept fuzzy threshold at upper boundary value 100

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Match Type: Fuzzy Match; Threshold Score: 100; Keyword: Iran; Category: Sanctions; Risk Level: High |
| Steps | 1. Open Add Keyword and select Match Type Fuzzy Match. 2. Enter Keyword 'Iran', Category Sanctions, Risk Level High. 3. Map Screening Fields: Country / Jurisdiction Tags; Registered Address. 4. Enter Threshold Score 100. 5. Confirm precision hint shows High precision. 6. Submit for checker approval. |
| Acceptance Criteria | Maximum threshold 100 is accepted for fuzzy keywords. |
| Expected Result | Validation error states allowed range is 1 to 100 and submission is blocked. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, functional |

### KM-TC-059 — Accept fuzzy threshold at boundary value 65

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold Score=65 User role: Maker |
| Steps | 1. Open Add Keyword. 2. Set Match Type as Fuzzy Match. 3. Enter Threshold Score '65'. 4. Submit with valid mandatory fields. |
| Acceptance Criteria | Valid threshold within 1-100 is accepted. |
| Expected Result | System accepts threshold value and stores fuzzy keyword with entered score. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-060 — Clamp threshold input above 100 to maximum allowed value

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Match Type: Fuzzy Match; Input value: 105; Expected stored value: 100 |
| Steps | 1. Open Add Keyword and select Match Type Fuzzy Match. 2. Click into Threshold Score field. 3. Type 105 and tab out of the field. 4. Observe the normalized value displayed. 5. Complete remaining mandatory fields and submit. |
| Acceptance Criteria | Out-of-range threshold input is normalized to valid maximum per business rule BR-004. |
| Expected Result | Validation error states allowed range is 1 to 100 and submission is blocked. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, functional |

### KM-TC-061 — Run live narrative tester with a strong match narrative

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Narrative=Customer known as Mohammad Al Kareem appears on OFAC sanctions watchlist; Expected similarity >= configured threshold User role: Maker |
| Steps | 1. Open Add Keyword with fuzzy match configuration. 2. Enter narrative 'Customer known as Mohammad Al Kareem appears on OFAC sanctions watchlist'. 3. Run Live Narrative Tester. |
| Acceptance Criteria | Tester returns high similarity output for aligned keyword narrative. |
| Expected Result | Tester output indicates match with similarity score and highlights triggered keyword mapping. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, rbac, security |

### KM-TC-062 — Run live narrative tester with non-matching narrative

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Narrative=Customer bought office stationery for branch admin tasks User role: Maker |
| Steps | 1. Open Live Narrative Tester. 2. Enter unrelated narrative text about benign retail purchase. 3. Execute tester. |
| Acceptance Criteria | Tester correctly returns no-match when similarity is below threshold. |
| Expected Result | Tester reports no match and similarity score remains below keyword threshold. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, rbac, security |

### KM-TC-063 — Validate narrative tester input length handling

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Narrative length approximately 900 characters User role: Maker |
| Steps | 1. Paste narrative around 900 characters into tester input. 2. Run tester and observe response. |
| Acceptance Criteria | Tester accepts long narrative input without truncation errors. |
| Expected Result | Narrative is processed successfully and output returns without UI crash or malformed result. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, low, rbac, security |

### KM-TC-064 — Clear narrative tester output between runs

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Run1=OFAC narrative, Run2=benign narrative User role: Maker |
| Steps | 1. Run tester with first narrative. 2. Replace with second narrative and rerun. |
| Acceptance Criteria | Previous result does not leak into next test execution. |
| Expected Result | Second result reflects only second narrative and previous score/output is replaced. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, rbac, security |

### KM-TC-065 — Disable active keyword from row action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Row Actions |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Keyword=OFAC ENTITY; Action=Disable; Reason=Obsolete list term User role: Maker |
| Steps | 1. In Active tab locate keyword 'OFAC ENTITY'. 2. Click row action Disable. 3. Submit reason 'Obsolete list term'. |
| Acceptance Criteria | Active record can be moved to inactive via maker-checker flow. |
| Expected Result | Disable request is logged for approval and keyword is locked from further edits until decision. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-row-actions, high, rbac, security |

### KM-TC-066 — Enable inactive keyword from row action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Row Actions |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Keyword=LEGACY WATCH TERM; Action=Enable User role: Maker |
| Steps | 1. Open Inactive tab and find 'LEGACY WATCH TERM'. 2. Click row action Enable. 3. Submit request. |
| Acceptance Criteria | Inactive record can be reactivated after approval. |
| Expected Result | Enable request enters maker-checker queue and record transitions to active after approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-row-actions, high, rbac, security |

### KM-TC-067 — Submit drafted keyword using row action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Row Actions |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Draft keyword: bearer shares User role: Maker |
| Steps | 1. Open Drafted Keyword tab. 2. Use row action Submit on selected draft. |
| Acceptance Criteria | Drafted record can be submitted for checker review. |
| Expected Result | Draft status changes to pending checker decision and draft row becomes non-editable until processed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-row-actions, medium, rbac, security |

### KM-TC-068 — Validate hard delete action is unavailable

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Row Actions |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Expected actions: Disable/Enable/Submit based on tab User role: Viewer |
| Steps | 1. Inspect row actions in Active, Inactive, and Drafted tabs. |
| Acceptance Criteria | Row actions do not provide permanent delete. |
| Expected Result | No hard delete action is present for any status tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-row-actions, high, rbac, security |

### KM-TC-069 — Restrict row action for viewer role

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Keyword Row Actions |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Role=Viewer User role: Viewer |
| Steps | 1. Open Active tab. 2. Attempt to click Disable action for any row. |
| Acceptance Criteria | Viewer cannot execute state-changing row actions. |
| Expected Result | Viewer sees disabled actions or no actionable controls; no request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | keyword-row-actions, high, rbac, security |

### KM-TC-070 — Download bulk upload template

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Expected columns: Keyword/Phrase, Category, Risk Level, Match Type, Threshold Score, Screening Fields User role: Maker |
| Steps | 1. Click Bulk Upload. 2. Select Download Template. 3. Open downloaded file and inspect headers. |
| Acceptance Criteria | Template download provides required columns and valid format. |
| Expected Result | Template downloads and displays all required sections and contains all required input columns for import. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-071 — Upload valid CSV under 10MB

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | File=km_bulk_valid_50rows.csv; Size=1.2MB; Rows=50 User role: Maker |
| Steps | 1. Open Bulk Upload. 2. Upload file 'km_bulk_valid_50rows.csv' (size 1.2MB). 3. Submit import batch. |
| Acceptance Criteria | Valid file uploads and creates drafted entries for checker flow. |
| Expected Result | Upload succeeds and all valid rows are created as drafted/pending records with batch reference. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-072 — Upload valid XLSX under 10MB

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | File=km_bulk_valid_30rows.xlsx; Size=2.8MB; Rows=30 User role: Maker |
| Steps | 1. Open Bulk Upload panel. 2. Upload 'km_bulk_valid_30rows.xlsx' (size 2.8MB). 3. Submit batch. |
| Acceptance Criteria | XLSX format is accepted when schema is valid. |
| Expected Result | System accepts XLSX file and queues rows for checker approval workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-073 — Reject bulk file above 10MB

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | File=km_bulk_oversize.xlsx; Size=10.7MB User role: Maker |
| Steps | 1. Open Bulk Upload. 2. Upload 'km_bulk_oversize.xlsx' (size 10.7MB). |
| Acceptance Criteria | File size limit is strictly enforced. |
| Expected Result | Upload is rejected with message indicating maximum allowed file size is 10MB. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-074 — Reject malformed bulk schema file

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | File missing columns: Match Type, Screening Fields User role: Maker |
| Steps | 1. Upload 'km_bulk_missing_columns.csv'. 2. Review validation output. |
| Acceptance Criteria | Import validates mandatory columns before processing. |
| Expected Result | System blocks import and returns clear column-level validation errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-075 — Handle mixed valid and invalid rows in one upload

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Rows=20 (15 valid, 5 invalid duplicate/threshold issues) User role: Maker |
| Steps | 1. Upload 'km_bulk_mixed_20rows.csv'. 2. Submit import. 3. Open validation report. |
| Acceptance Criteria | Row-level validation identifies failed rows precisely. |
| Expected Result | Valid rows proceed to drafted queue and invalid rows are listed with exact rejection reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, rbac, security |

### KM-TC-076 — Prevent duplicate rows in bulk upload

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Duplicate key rule: keyword + match type + category User role: Maker |
| Steps | 1. Upload CSV containing duplicate business-key rows. 2. Submit batch and inspect result. |
| Acceptance Criteria | Duplicate detection applies same business key as manual entry. |
| Expected Result | Duplicate rows are rejected with explicit reason while unique rows continue per workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### KM-TC-077 — Export Active tab data to CSV

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | High |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Export scope tab=Active User role: Maker |
| Steps | 1. Open 'Active' tab. 2. Click Export. 3. Open downloaded CSV. |
| Acceptance Criteria | Export action downloads CSV scoped to selected tab data. |
| Expected Result | CSV file downloads and contains records only from Active tab at export time. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high, rbac, security |

### KM-TC-078 — Verify export includes metadata columns

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Expected metadata headers include Category, Risk Level, Match Type, Threshold Score, Screening Fields, Status User role: Maker |
| Steps | 1. Run export from Active tab. 2. Inspect CSV headers. |
| Acceptance Criteria | CSV includes keyword metadata required by operations team. |
| Expected Result | Exported CSV contains all metadata columns and populated values per record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium, rbac, security |

### KM-TC-079 — Verify export includes maker-checker columns

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Export |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager (Active tab). |
| Test Data | Expected columns: Maker, Checker, Decision, Decision Date User role: Maker |
| Steps | 1. Export records containing approved and rejected actions. 2. Inspect maker-checker related columns. |
| Acceptance Criteria | CSV contains maker and checker audit fields. |
| Expected Result | CSV includes maker-checker columns with correct values for each workflow record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium, rbac, security |

### KM-TC-080 — Submit new keyword by maker and approve by checker

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker and Checker accounts available. Maker can submit new keywords. |
| Test Data | Keyword=arms dealer; Decision=Approve User role: Maker |
| Steps | 1. Create keyword 'MC_APPROVAL_CASE_01' and click Submit. 2. Log out maker and log in as checker. 3. Open pending request and approve via checker modal. |
| Acceptance Criteria | Two-step maker-checker lifecycle completes successfully. |
| Expected Result | Approved keyword moves to Active tab with checker decision and timestamp recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### KM-TC-081 — Submit new keyword by maker and reject by checker

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker and Checker accounts available. Maker can submit new keywords. |
| Test Data | Keyword=no questions asked; Decision=Reject; Reason=Ambiguous phrase User role: Maker |
| Steps | 1. Submit keyword 'MC_REJECT_CASE_01'. 2. Log in as checker and open pending item. 3. Select Reject, enter reason 'Ambiguous phrase', and confirm. |
| Acceptance Criteria | Checker can reject request with mandatory reason. |
| Expected Result | Request is marked rejected with reason; keyword does not appear in Active tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### KM-TC-082 — Prevent maker from self-approving own request

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker is logged in. Same user submitted a keyword change that is awaiting approval. |
| Test Data | Self-approval attempt on own request User role: Maker |
| Steps | 1. Submit keyword change as maker. 2. Attempt to open checker approval modal for same request using same account. |
| Acceptance Criteria | Maker cannot approve changes created by same user. |
| Expected Result | System blocks self-approval and displays policy message requiring different checker identity. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### KM-TC-083 — Lock pending request from further maker edits

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker is logged in. A keyword request is in Pending Approval state. |
| Test Data | Request status=Pending User role: Maker |
| Steps | 1. Open pending request from Drafted/queue view. 2. Attempt to edit keyword phrase or category. |
| Acceptance Criteria | Pending items are immutable until checker decision. |
| Expected Result | Fields are read-only while request is pending; maker cannot modify or resubmit same pending record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### KM-TC-084 — Require decision comment in checker modal where configured

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Checker is logged in with approval permission. Pending keyword request exists. |
| Test Data | Decision=Reject; Comment field left empty User role: Checker |
| Steps | 1. Open pending keyword request. 2. Choose Reject without entering comment. 3. Attempt confirm. |
| Acceptance Criteria | Checker modal enforces decision comment policy. |
| Expected Result | Modal blocks confirmation and prompts checker to provide rejection comment. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### KM-TC-085 — Capture checker approval timestamp and actor

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Checker is logged in. Pending request MC_AUDIT_CASE_02 is in queue. |
| Test Data | Request=MC_AUDIT_CASE_02 User role: Checker |
| Steps | 1. Approve pending request 'MC_AUDIT_CASE_02'. 2. Open keyword history panel for approved item. |
| Acceptance Criteria | Decision metadata is audit-ready after workflow completion. |
| Expected Result | History captures checker username, decision, and precise timestamp entry. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### KM-TC-086 — Process multiple pending requests sequentially

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Checker is logged in. At least three pending keyword requests exist. |
| Test Data | Queue actions: Approve, Reject, Approve User role: Checker |
| Steps | 1. Open first pending item and approve. 2. Open second pending item and reject with reason. 3. Open third pending item and approve. |
| Acceptance Criteria | Checker can approve/reject batch of queued requests without state loss. |
| Expected Result | Each request is processed with independent decision records and queue count updates after each action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### KM-TC-087 — Open keyword history timeline from row action

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Audit History |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Keyword=OFAC ENTITY User role: Viewer |
| Steps | 1. Locate keyword row 'OFAC ENTITY'. 2. Open Keyword History panel from Actions. |
| Acceptance Criteria | History panel is accessible for each keyword row. |
| Expected Result | History panel opens with chronological timeline entries for create/update/status changes. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, high, rbac, security |

### KM-TC-088 — Verify history includes maker and checker events

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Audit History |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Keyword with at least one approve/reject cycle User role: Viewer |
| Steps | 1. Open history panel for approved keyword. 2. Inspect event actor details. |
| Acceptance Criteria | Timeline records both request creator and decision maker. |
| Expected Result | Timeline contains maker submission and checker decision events with actor names and timestamps. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, high, rbac, security |

### KM-TC-089 — Validate event ordering in history timeline

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Keyword updated at least 4 times User role: Viewer |
| Steps | 1. Open history panel for frequently updated keyword. 2. Compare event sequence by timestamp. |
| Acceptance Criteria | Events are displayed in correct chronological order. |
| Expected Result | Timeline order matches actual transaction chronology with latest event clearly identified. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, rbac, security |

### KM-TC-090 — Verify history captures status transitions

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Status sequence: Active -> Inactive -> Active User role: Viewer |
| Steps | 1. Open history for keyword that was disabled and re-enabled. 2. Inspect status transition entries. |
| Acceptance Criteria | Transitions Active/Inactive/Drafted are traceable in timeline. |
| Expected Result | History includes explicit status transition events with action initiator and decision details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, rbac, security |

### KM-TC-091 — Confirm history panel is read-only for all roles

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Audit History |
| Priority | Low |
| Preconditions | Viewer is logged in with read-only permission and is on Keyword Manager (Active tab). |
| Test Data | Role=Checker User role: Checker |
| Steps | 1. Open keyword history panel. 2. Inspect for editable fields or action buttons. |
| Acceptance Criteria | No edit controls are available in audit timeline. |
| Expected Result | History panel presents immutable audit data only; no modification controls are displayed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, low, rbac, security |

### KM-TC-092 — Validate exact match normalization behavior

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine Behaviour |
| Priority | High |
| Preconditions | Active exact-match keyword 'offshore account' mapped to Purpose of Account / Relationship. |
| Test Data | Keyword=Alpha Risk Entity; Narrative token spacing variant User role: Maker |
| Steps | 1. Create/confirm exact keyword 'Alpha Risk Entity'. 2. Run screening input 'alpha   risk entity'. |
| Acceptance Criteria | Exact match compares normalized tokens consistently. |
| Expected Result | Engine returns match because normalized token sequence is equivalent despite case and spacing differences. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine-behaviour, high, rbac, security |

### KM-TC-093 — Validate fuzzy match similarity against threshold

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine Behaviour |
| Priority | High |
| Preconditions | Active fuzzy-match keyword with Threshold 80 is approved. |
| Test Data | Threshold=80; Narrative1~78; Narrative2~84 User role: Maker |
| Steps | 1. Run screening narrative with similarity estimated around 78. 2. Run second narrative with similarity estimated around 84. |
| Acceptance Criteria | Fuzzy match triggers only when similarity meets or exceeds threshold. |
| Expected Result | First narrative does not trigger keyword; second narrative triggers keyword due to crossing threshold. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine-behaviour, high, rbac, security |

### KM-TC-094 — Ensure screening checks only mapped fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine Behaviour |
| Priority | High |
| Preconditions | Active keyword mapped only to News Article Full Text. Screening data contains match in Business / Entity Name Suffix only. |
| Test Data | Mapped field=News Article Full Text; Unmapped field=Relationship Manager Notes User role: Maker |
| Steps | 1. Populate matching phrase in unmapped field 'Relationship Manager Notes'. 2. Run screening. 3. Populate same phrase in mapped field 'News Article Full Text' and rerun. |
| Acceptance Criteria | Unmapped fields do not trigger keyword matches. |
| Expected Result | No hit occurs from unmapped field; hit occurs when phrase appears in mapped field. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine-behaviour, high, rbac, security |

### KM-TC-095 — Validate inactive keywords are excluded from screening

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine Behaviour |
| Priority | High |
| Preconditions | Keyword 'Dormant Term' is Inactive. Screening input file contains the exact phrase. |
| Test Data | Inactive keyword=Dormant Term User role: Maker |
| Steps | 1. Run screening input containing exact inactive keyword phrase. |
| Acceptance Criteria | Inactive status prevents keyword from triggering alerts. |
| Expected Result | Screening engine does not trigger inactive keyword in results. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine-behaviour, high, rbac, security |

### KM-TC-096 — Maker can create draft and submit keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Maker is logged in with keyword create/edit permission. |
| Test Data | Role=Maker; Keyword=cryptocurrency exchange User role: Maker |
| Steps | 1. Create keyword 'RBAC_MAKER_01'. 2. Save Draft. 3. Submit drafted keyword. |
| Acceptance Criteria | Maker permissions include create, draft, and submit. |
| Expected Result | Maker can perform create/draft/submit actions and request enters checker queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### KM-TC-097 — Checker can approve or reject but cannot author new keyword

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Checker is logged in with approval permission. |
| Test Data | Role=Checker User role: Checker |
| Steps | 1. Attempt to open Add Keyword panel. 2. Open pending request and approve/reject. |
| Acceptance Criteria | Checker has decision authority without maker authoring permission. |
| Expected Result | Checker can process pending requests but cannot create fresh keyword records as maker. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### KM-TC-098 — Viewer has read-only access to keyword data

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Viewer is logged in with read-only permission. |
| Test Data | Role=Viewer User role: Viewer |
| Steps | 1. Open Keyword Manager and perform search. 2. Attempt Add Keyword, Add Category, and row actions. |
| Acceptance Criteria | Viewer can search/export (if allowed) but cannot change status or create data. |
| Expected Result | Viewer can view records; all state-changing controls are hidden or disabled. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### KM-TC-099 — Restrict Bulk Upload to maker role

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission. |
| Test Data | Role=Viewer, bulk upload restricted User role: Viewer |
| Steps | 1. Inspect toolbar for Bulk Upload option. 2. Attempt access via direct URL/action endpoint if available. |
| Acceptance Criteria | Only authorized maker users can execute bulk import. |
| Expected Result | Bulk Upload is inaccessible to viewer and backend rejects unauthorized import attempts. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### KM-TC-100 — Restrict Category Controls to authorized role

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Viewer is logged in with read-only permission. |
| Test Data | Role=Viewer User role: Viewer |
| Steps | 1. Open Category Controls. 2. Attempt to change category state. |
| Acceptance Criteria | Category toggling only available for authorized maker/checker workflow. |
| Expected Result | Viewer cannot toggle category state and no control update request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### KM-TC-101 — Reject duplicate keyword for same category and match type

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Active keyword 'OFAC BLOCKED' exists in Sanctions category (Exact Match). |
| Test Data | Keyword=OFAC BLOCKED; Category=Sanctions; Match Type=Exact Match (already exists) User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter same keyword, category, and match type as existing record. 3. Submit request. |
| Acceptance Criteria | Duplicate business key validation is enforced. |
| Expected Result | System rejects submission with duplicate key message for keyword+match type+category combination. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, rbac, security |

### KM-TC-102 — Allow same keyword in different category

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager. Keyword 'TRANSFER RISK' exists in Financial Crime category. |
| Test Data | Keyword=TRANSFER RISK; Existing category=Financial Crime; New category=PEP User role: Maker |
| Steps | 1. Add keyword 'TRANSFER RISK' with category PEP and same match type. 2. Submit request. |
| Acceptance Criteria | Duplicate logic considers category in uniqueness key. |
| Expected Result | Submission is accepted because category differs from existing business key. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, rbac, security |

### KM-TC-103 — Treat keyword duplicates as case-insensitive

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Keyword 'High Alert Name' exists in active listing. |
| Test Data | Existing=High Alert Name; New=HIGH ALERT NAME User role: Maker |
| Steps | 1. Attempt to add keyword 'HIGH ALERT NAME' with same category and match type. |
| Acceptance Criteria | Validation normalizes case before duplicate check. |
| Expected Result | System rejects as duplicate because duplicate matching is case-insensitive. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, rbac, security |

### KM-TC-104 — Validate keyword length maximum 500 characters

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword length=501 User role: Maker |
| Steps | 1. Paste 501-character phrase in Keyword/Phrase field. 2. Attempt Submit. |
| Acceptance Criteria | Keyword/Phrase field enforces 500-character cap. |
| Expected Result | Validation message indicates max 500 characters and submission is prevented. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, rbac, security |

### KM-TC-105 — Reject threshold when fuzzy selected and field blank

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Match Type=Fuzzy; Threshold Score=blank User role: Maker |
| Steps | 1. Select Match Type as Fuzzy Match. 2. Leave Threshold Score blank. 3. Attempt submit. |
| Acceptance Criteria | Fuzzy threshold is mandatory. |
| Expected Result | System blocks submission and prompts user to enter Threshold Score between 1 and 100. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, rbac, security |

### KM-TC-106 — Trim keyword leading and trailing spaces before save

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Field & Business Rule Validation |
| Priority | Low |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Input keyword with external spaces User role: Maker |
| Steps | 1. Enter keyword as '  OFAC Core Term  '. 2. Submit and complete approval. 3. Search for saved keyword. |
| Acceptance Criteria | Stored keyword is normalized without external spaces. |
| Expected Result | System stores normalized keyword 'OFAC Core Term' and duplicate logic applies to trimmed value. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, low, rbac, security |

### KM-TC-107 — Run end-to-end regression of create to approval flow

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | High |
| Preconditions | Release candidate build deployed. Maker and Checker accounts available. |
| Test Data | Build=RC; Keyword=REG_FLOW_01 User role: Maker |
| Steps | 1. Create fuzzy keyword with mapped fields and submit. 2. Log in as checker and approve. 3. Validate keyword appears in Active and supports search/export. |
| Acceptance Criteria | Core flow remains stable in release candidate build. |
| Expected Result | Complete flow executes without functional regression and resulting record is available in production workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, high, rbac, security |

### KM-TC-108 — Validate responsive usability at laptop and tablet widths

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | Medium |
| Preconditions | Maker is logged in and on Keyword Manager listing. |
| Test Data | Viewports=1366x768 and 1024x768 User role: Maker |
| Steps | 1. Set viewport to 1366x768 and validate toolbar plus add keyword flow. 2. Set viewport to 1024x768 and validate tab switching plus search. |
| Acceptance Criteria | Critical actions remain accessible on supported resolutions. |
| Expected Result | Page remains usable at both resolutions with no blocked controls or clipped mandatory fields. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, medium, rbac, security |

### KM-TC-109 — Capture UAT sign-off scenario with business user

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | High |
| Preconditions | UAT business user is logged in with viewer permission. UAT keyword dataset is loaded. |
| Test Data | UAT keyword sample=PEP Linked Entity; Export format=CSV User role: Viewer |
| Steps | 1. Search for known operational keyword and review details. 2. Export current tab and confirm expected columns in downloaded file. 3. Open history panel and validate traceability of recent approved change. |
| Acceptance Criteria | Business user verifies expected outcomes for operational readiness. |
| Expected Result | Business user confirms data visibility, export completeness, and audit trace meet UAT acceptance criteria. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, high, rbac, security |

### KM-TC-110 — Validate reference keyword hawala with fuzzy match and threshold

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: hawala; Threshold: 75; Fields: Business Activity Description, Source of Funds Description User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter Keyword "hawala", Match Type Fuzzy Match, Threshold 75. 3. Map Screening Fields: Business Activity Description; Source of Funds Description. 4. Paste narrative 'hwala transfer personal funds' in Live Narrative Tester. |
| Acceptance Criteria | Sample typology keyword configures and previews correctly |
| Expected Result | Preview highlights variant above threshold. Keyword is submittable with selected screening fields and fuzzy configuration. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, high, rbac, security |

### KM-TC-111 — Validate shell company keyword on adverse media fields

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Sample Keyword Validation |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: shell company; Fields: News Article Full Text, Crime Type Tags User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter "shell company", Category Financial Crime, Risk High, Exact Match. 3. Select Screening Fields: News Article Full Text; Crime Type Tags. 4. Submit for approval. |
| Acceptance Criteria | High-risk typology term maps to adverse media screening context |
| Expected Result | Submission routes to checker approval with High risk and exact match stored. Screening Fields chips show both selected fields. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | sample-keyword-validation, medium, rbac, security |

### KM-TC-112 — Keyword match contributes to alert on batch screening page

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | High |
| Preconditions | Active keyword mapped to Expected Transaction Description. Batch screening job is available. |
| Test Data | Keyword: suspicious transfer; Batch file row with matching narrative User role: Maker |
| Steps | 1. Configure and approve keyword mapped to Expected Transaction Description. 2. Run batch screening file containing matching narrative. 3. Open batch screening results/alerts page. 4. Locate alert tied to the keyword match. |
| Acceptance Criteria | Approved keyword generates alert when matched text appears in mapped field during batch run |
| Expected Result | Batch screening run produces an alert referencing the matched keyword. Alert appears on batch screening review page for analyst action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | integration, high, rbac, security |

### KM-TC-113 — Keyword does not alert when match occurs only in unmapped field

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Integration |
| Priority | High |
| Preconditions | Active keyword mapped only to News Article Full Text. Screening data contains match in Business / Entity Name Suffix only. |
| Test Data | Keyword mapped: Source of Funds only; Match text in: Entity Name field User role: Maker |
| Steps | 1. Approve keyword mapped solely to Source of Funds Description. 2. Run batch screening where typology term appears only in Business / Entity Name Suffix. 3. Review batch alerts for that customer record. |
| Acceptance Criteria | Field scoping prevents cross-field false positives in downstream screening |
| Expected Result | No keyword alert is raised for the record because the match occurred in a field not mapped to the keyword. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | integration, high, rbac, security |

### KM-TC-114 — Listing remains responsive with large active keyword dataset

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Performance |
| Priority | Medium |
| Preconditions | Maker is logged in. Environment seeded with 500+ active keywords. |
| Test Data | Dataset: 500+ active keywords User role: Maker |
| Steps | 1. Measure time until table renders. 2. Switch tabs and apply search filter. 3. Open Add Keyword panel. |
| Acceptance Criteria | Page loads and remains interactive with high record volume |
| Expected Result | Initial table renders within acceptable response time. Tab switch, search, and panel open remain responsive without browser hang or timeout errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | performance, medium, rbac, security |

### KM-TC-115 — Close Add Category modal by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager listing. |
| Test Data | Modal: Add Category User role: Maker |
| Steps | 1. Click Add Category. 2. Enter partial category name. 3. Click dimmed overlay outside modal. |
| Acceptance Criteria | Overlay click dismisses modal without creating category |
| Expected Result | Modal closes without submitting. No category request is created. Fields are reset on reopen. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, rbac, security |

### KM-TC-116 — Display Low precision indicator for threshold below 50

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold Score: 45 User role: Maker |
| Steps | 1. Open Add Keyword. 2. Select Match Type Fuzzy Match. 3. Enter Threshold Score 45. 4. Observe precision hint indicator. |
| Acceptance Criteria | Threshold hint warns when score is in low-precision range |
| Expected Result | Precision hint displays Low precision (or equivalent warning) for scores below 50, indicating elevated false-positive risk. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-117 — Require documented justification or warning for threshold 1–49 on submit

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Fuzzy Match & Threshold Score |
| Priority | High |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Threshold Score: 40 User role: Maker |
| Steps | 1. Open Add Keyword. 2. Complete mandatory fields with Fuzzy Match and Threshold 40. 3. Click Submit. 4. Observe justification requirement. |
| Acceptance Criteria | Low-precision fuzzy keywords require compliance acknowledgment before submit |
| Expected Result | Submit is blocked or requires explicit justification/acknowledgment for low-precision threshold before request is sent to checker. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | fuzzy-match-threshold-score, high, rbac, security |

### KM-TC-118 — Remove selected screening field using chip remove control

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Fields: Occupation / Designation, News Article Full Text User role: Maker |
| Steps | 1. Open Add Keyword. 2. Open Screening Fields dropdown. 3. Select Occupation / Designation and News Article Full Text. 4. Click remove (×) on one chip. |
| Acceptance Criteria | Selected fields display as removable chips on selector trigger |
| Expected Result | Removed field chip disappears from selector. Field is unchecked in dropdown. Remaining selected fields persist. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, medium, rbac, security |

### KM-TC-119 — Filter screening fields using in-dropdown search

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Search: "funds" User role: Maker |
| Steps | 1. Open Add Keyword. 2. Open Screening Fields dropdown. 3. Type "funds" in search box. 4. Review filtered options. |
| Acceptance Criteria | Screening Fields search narrows options across all groups |
| Expected Result | Dropdown shows only fields containing 'funds' (e.g., Source of Funds Description). Non-matching fields and empty groups are hidden. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, medium, rbac, security |

### KM-TC-120 — Verify loading stability during initial data load for large datasets

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker account available. Large keyword dataset loaded. Network throttling can be applied. |
| Test Data | Network: Slow 3G User role: Maker |
| Steps | 1. Log in as Maker. 2. Enable Slow 3G throttling. 3. Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. 4. Observe table area during load. |
| Acceptance Criteria | Loading indicator or skeleton shown while keyword list loads |
| Expected Result | Loading spinner or skeleton displays until rows render. Page does not show broken layout or unhandled errors during delayed load. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### KM-TC-121 — Checker rejection returns keyword entry to Draft with comments

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker is logged in. A keyword submission was rejected by Checker with comments. |
| Test Data | Rejection comment: Threshold too low for typology User role: Maker |
| Steps | 1. Open pending keyword approval. 2. Reject with comment "Threshold too low for typology". 3. Log in as Maker. 4. Open Drafted Keyword tab and locate rejected entry. |
| Acceptance Criteria | Rejected submissions return to Maker for revision |
| Expected Result | Entry status returns to Drafted. Checker comment is visible to Maker. Maker can edit threshold and resubmit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### KM-TC-122 — Verify core workflows on Google Chrome

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | Medium |
| Preconditions | Maker is logged in using Google Chrome (latest). |
| Test Data | Browser: Google Chrome User role: Maker |
| Steps | 1. Add draft keyword with screening fields. 2. Search, export, open history. |
| Acceptance Criteria | Keyword Manager functions on Chrome latest |
| Expected Result | Core workflows complete on Chrome without layout defects or console errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, medium, rbac, security |

### KM-TC-123 — Verify core workflows on Microsoft Edge

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | Medium |
| Preconditions | Maker is logged in using Microsoft Edge (latest). |
| Test Data | Browser: Microsoft Edge User role: Maker |
| Steps | 1. Open Add Category and Bulk Upload modals. 2. Submit keyword for approval. |
| Acceptance Criteria | Keyword Manager functions on Edge latest |
| Expected Result | Modals, panels, and maker-checker flow work correctly on Edge. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, medium, rbac, security |

### KM-TC-124 — Verify core workflows on Mozilla Firefox

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Regression, Compatibility & UAT |
| Priority | Medium |
| Preconditions | Maker is logged in using Mozilla Firefox (latest). |
| Test Data | Browser: Mozilla Firefox User role: Checker |
| Steps | 1. Configure fuzzy keyword with threshold. 2. Disable active keyword and confirm checker modal. |
| Acceptance Criteria | Keyword Manager functions on Firefox latest |
| Expected Result | Fuzzy threshold UI, tab navigation, and disable workflow function on Firefox without regression. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility-uat, medium, rbac, security |

### KM-TC-125 — Validate duplicate category name on field blur

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | High |
| Preconditions | Maker is on Keyword Manager. Category 'Sanctions' already exists. |
| Test Data | Category Name: Sanctions (existing) User role: Maker |
| Steps | 1. Click Add Category. 2. Enter Category Name 'Sanctions'. 3. Tab out of Category Name field (focus-out). 4. Observe inline validation. 5. Attempt to click Add Category without changing the name. |
| Acceptance Criteria | Duplicate category names are detected before modal submission. |
| Expected Result | Inline duplicate error appears on focus-out. Add Category remains disabled or submission is blocked. No duplicate category request is queued for approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, rbac, security |

### KM-TC-126 — Verify disabled category excludes keywords from screening engine

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Category Controls |
| Priority | High |
| Preconditions | Sanctions category enabled with active keywords. Maker and Checker accounts available. |
| Test Data | Category: Sanctions; Keyword: export limited; Screening field: Expected Transaction Description User role: Maker |
| Steps | 1. As Maker, disable Sanctions category via Category Controls and complete Checker approval. 2. Run batch screening on a file where mapped field text matches an active Sanctions keyword. 3. Review batch screening alerts for the test record. |
| Acceptance Criteria | Category disable stops evaluation of all keywords in that category at next screening run. |
| Expected Result | No keyword alert is generated for Sanctions-category terms after approved disable. Audit trail records category disable with actor, timestamp, and checker decision. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | category-management-category-controls, high, rbac, security |

### KM-TC-127 — Clear all selected screening fields using Clear all control

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Fields Mapping |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Fields cleared after multi-select User role: Maker |
| Steps | 1. Open Screening Fields dropdown. 2. Select Occupation / Designation and Source of Funds Description. 3. Click Clear all in dropdown footer. 4. Attempt Submit with other mandatory fields completed. |
| Acceptance Criteria | Maker can reset screening field selection before submission. |
| Expected Result | All chips removed and selection count returns to zero. Submit is blocked with mandatory Screening Fields validation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | screening-fields-mapping, medium, rbac, security |

### KM-TC-128 — Approved category becomes available in Add Keyword dropdown

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Category Management - Add Category |
| Priority | Medium |
| Preconditions | Category 'Narcotics Typology' was submitted by Maker and approved by Checker. |
| Test Data | Category: Narcotics Typology; Keyword: drug trafficking User role: Maker |
| Steps | 1. As Checker, approve pending category 'Narcotics Typology'. 2. As Maker, open Add Keyword. 3. Open Category dropdown. 4. Select 'Narcotics Typology'. 5. Complete and submit a keyword under that category. |
| Acceptance Criteria | Newly approved categories are selectable when creating keywords. |
| Expected Result | Approved category appears in Category dropdown without page redeploy. Keyword submits under new category and follows standard maker-checker workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, rbac, security |

### KM-TC-129 — Prompt confirmation when cancelling Add Keyword with unsaved data

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Add Keyword |
| Priority | Medium |
| Preconditions | Maker is on Keyword Manager with Add Keyword panel open. |
| Test Data | Keyword: casino; Action: Cancel with populated form User role: Maker |
| Steps | 1. Open Add Keyword. 2. Enter Keyword 'casino' and select Category. 3. Click Cancel or back navigation control. 4. Observe confirmation prompt. 5. Choose Stay/Continue editing, then cancel again and confirm discard. |
| Acceptance Criteria | Cancel protects against accidental loss of in-progress keyword entry. |
| Expected Result | Confirmation prompt appears before discarding data. Choosing stay returns to populated form. Confirming discard closes panel without creating draft or pending record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-keyword, medium, rbac, security |

### KM-TC-130 — Validate special-character normalization during exact match screening

| Field | Value |
| --- | --- |
| Module | Keyword Manager |
| Feature | Screening Engine Behaviour |
| Priority | High |
| Preconditions | Active exact-match keyword 'offshore account' mapped to Purpose of Account / Relationship. |
| Test Data | Keyword: offshore account; Field value: Off-Shore Account.; Match Type: Exact Match User role: Maker |
| Steps | 1. Confirm keyword 'offshore account' is Active with Exact Match. 2. Run screening on field value 'Off-Shore Account.' (mixed case, hyphen, trailing punctuation). 3. Review match outcome in screening results. |
| Acceptance Criteria | Punctuation and diacritics are normalized before exact match comparison. |
| Expected Result | Screening engine normalizes punctuation/case and returns a match. Alert or match event references the keyword and mapped field only. |
| Automation Candidate | Yes |
| Automation Layer | API + UI |
| Tags | screening-engine-behaviour, high, rbac, security |
