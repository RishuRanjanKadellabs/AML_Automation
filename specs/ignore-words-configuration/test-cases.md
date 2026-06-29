# Ignore Words Configuration — Detailed Test Cases (194)

### IWC-TC-001 — Open Ignore Words Configuration from left navigation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | High |
| Preconditions | Maker account exists with Configuration module access. |
| Test Data | User role: Maker Menu path: Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration |
| Steps | 1. From the application dashboard, expand Configuration in the left navigation. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. |
| Acceptance Criteria | Maker can reach the screen through full menu path |
| Expected Result | Ignore Words Configuration listing loads. Active, Inactive, and Drafted Ignore Word tabs display record counts. Toolbar shows Export, Category Controls, Add Category, Bulk Upload, and Add Ignore Word. The ignore words table is populated for the default Active tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, high, rbac, security |

### IWC-TC-002 — Verify breadcrumb text on page load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is on the Ignore Words Configuration listing (Active tab). |
| Test Data | Expected breadcrumb: Sanctions Screening Configuration / Screening – Ignore Words Configuration |
| Steps | 1. Observe the breadcrumb at the top of the page. 2. Read the parent breadcrumb node. 3. Read the current page breadcrumb node. |
| Acceptance Criteria | Breadcrumb shows correct hierarchy |
| Expected Result | Breadcrumb reads 'Sanctions Screening Configuration / Screening – Ignore Words Configuration'. The current page node is visually distinguished as the active location. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, functional |

### IWC-TC-003 — Access page directly using valid deep link

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker has an active session and has previously opened Ignore Words Configuration once in this browser. |
| Test Data | User role: Maker Access method: Direct URL |
| Steps | 1. While on Ignore Words Configuration, copy the browser URL. 2. Open a new browser tab and paste the URL. 3. Press Enter and wait for the page to finish loading. |
| Acceptance Criteria | Authorized user can open screen through direct URL |
| Expected Result | Listing opens without re-authentication. Breadcrumb, status tabs, toolbar, and table data match the original session. No permission or routing error is shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### IWC-TC-004 — Refresh page and retain access

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is on Ignore Words Configuration with the Active tab selected. |
| Test Data | Tab before refresh: Active |
| Steps | 1. Note the Active tab count and a visible row in the table. 2. Refresh the browser page. 3. Wait until the listing fully reloads. 4. Confirm the Active tab remains selected. |
| Acceptance Criteria | Screen remains accessible after browser refresh |
| Expected Result | Session remains valid after refresh. Active tab stays selected, tab count is unchanged, and the table repopulates with the same active ignore words. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, browser-compat |

### IWC-TC-005 — Open page using breadcrumb back navigation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is on Ignore Words Configuration listing. |
| Test Data | Breadcrumb parent: Sanctions Screening Configuration |
| Steps | 1. Click the Sanctions Screening Configuration breadcrumb link. 2. Confirm the parent configuration screen opens. 3. Return to Screening – Ignore Words Configuration using the left navigation. |
| Acceptance Criteria | User can navigate back to parent module and return |
| Expected Result | Parent screen opens without error. Returning to Ignore Words Configuration restores the listing with tabs and table intact. No session timeout occurs. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, functional |

### IWC-TC-006 — Validate toolbar controls are visible on initial load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Maker is on Ignore Words Configuration listing. |
| Test Data | User role: Maker |
| Steps | 1. Review the toolbar on initial page load. 2. Confirm search field is present on the left. 3. Confirm Export, Category Controls, Add Category, Bulk Upload, and Add Ignore Word actions are visible on the right. |
| Acceptance Criteria | All major actions appear for Maker role |
| Expected Result | All primary toolbar controls are visible and enabled for the Maker role. Search accepts input. Action buttons are clickable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, rbac, security |

### IWC-TC-007 — Validate page title and tab counters load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | At least one active, inactive, and drafted ignore word exist in the environment. |
| Test Data | Expected tabs: Active, Inactive, Drafted Ignore Word |
| Steps | 1. Open Ignore Words Configuration. 2. Read the count shown on the Active tab label. 3. Read the count on the Inactive tab label. 4. Read the count on the Drafted Ignore Word tab label. 5. Compare each count with the number of rows shown after selecting that tab. |
| Acceptance Criteria | Page header and tab counts load without placeholders |
| Expected Result | Each tab label count matches the number of records in that status. Counts update only after approved workflow transitions, not on draft save alone. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, functional |

### IWC-TC-008 — Verify unauthorized route access is blocked

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | High |
| Preconditions | Viewer account exists without Ignore Words Configuration permission. |
| Test Data | User role: Viewer (no configuration write/read permission) |
| Steps | 1. Log in as Viewer. 2. Attempt to open Screening – Ignore Words Configuration via direct URL or menu. |
| Acceptance Criteria | User without module access cannot open the page |
| Expected Result | Access is denied. User is redirected or shown an authorization message. Ignore words data is not exposed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, high, rbac, security |

### IWC-TC-009 — Verify Active tab default load behavior

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Maker is on Ignore Words Configuration. |
| Test Data | Default tab: Active |
| Steps | 1. Open the listing and observe the default tab on first load. 2. Verify the table shows only Active-status records. 3. Confirm each visible row displays an Active status badge. |
| Acceptance Criteria | Active tab is selected by default |
| Expected Result | Active tab is selected by default. Only approved, operational ignore words appear. Disable action is available in the Actions column. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-010 — Switch from Active to Inactive tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Inactive ignore words exist (e.g., 'and', 'the'). |
| Test Data | Sample inactive words: and, the, of, for |
| Steps | 1. From the Active tab, click the Inactive tab. 2. Review the table contents and status badges. |
| Acceptance Criteria | Tab switch updates row status data correctly |
| Expected Result | Inactive tab loads deactivated ignore words only. Each row shows Inactive status. Enable action is available instead of Disable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-011 — Switch from Inactive to Drafted Ignore Word tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | At least one drafted ignore word exists (e.g., 'co' or 'son'). |
| Test Data | Sample drafted words: co, son |
| Steps | 1. Click the Drafted Ignore Word tab. 2. Locate a drafted record and review its status and row actions. |
| Acceptance Criteria | Drafted tab shows only draft records |
| Expected Result | Drafted tab shows entries saved as draft or returned after checker rejection. Status displays as Drafted. Submit action is available; word is not applied in live screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-012 — Validate tab counters against table row count

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Environment contains records across Active, Inactive, and Drafted statuses. |
| Test Data | Tabs: Active, Inactive, Drafted Ignore Word |
| Steps | 1. Note the count on each status tab. 2. Select Active tab and count visible rows. 3. Repeat for Inactive and Drafted tabs. |
| Acceptance Criteria | Selected tab count matches records fetched |
| Expected Result | Tab label counts equal the row count in each respective table. Totals reconcile with backend status distribution. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-013 — Retain tab selection after search reset

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Maker is on Inactive tab with search cleared. |
| Test Data | Search term: limited Starting tab: Inactive |
| Steps | 1. Select the Inactive tab. 2. Enter 'limited' in the search field and confirm filtered results. 3. Clear the search field. 4. Verify the Inactive tab remains selected and the full inactive list returns. |
| Acceptance Criteria | Clearing search does not force tab reset |
| Expected Result | Search filters within the current tab only. Clearing search restores the full inactive list without switching tabs. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-014 — Retain selected tab after page refresh

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Maker is on Drafted Ignore Word tab. |
| Test Data | Tab before refresh: Drafted Ignore Word |
| Steps | 1. Select the Drafted Ignore Word tab. 2. Refresh the browser. 3. After reload, confirm which tab is selected. |
| Acceptance Criteria | Current status context persists after refresh |
| Expected Result | Page reloads successfully. Drafted Ignore Word tab remains selected and drafted records are still listed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-015 — Show empty-state message for tab with zero records

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Test environment has zero inactive ignore words (or use filtered test data). |
| Test Data | Tab: Inactive Expected row count: 0 |
| Steps | 1. Click the Inactive tab. 2. Observe the table body when no records exist. |
| Acceptance Criteria | System handles empty status bucket clearly |
| Expected Result | Empty-state message is shown (e.g., 'No ignore words found for this filter.'). Tab count displays (0). No erroneous data rows appear. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-016 — Search by exact ignore word phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | Active ignore word 'private limited' exists. |
| Test Data | Search term: private limited Tab: Active |
| Steps | 1. On the Active tab, enter 'private limited' in the search field. 2. Review the filtered table results. |
| Acceptance Criteria | Search returns rows with exact phrase match |
| Expected Result | Only rows matching the full phrase 'private limited' (or containing it per search rules) are displayed. Non-matching active words are hidden. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-017 — Search by partial text value

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Active ignore word 'international' exists. |
| Test Data | Search term: nation Expected match: international |
| Steps | 1. Enter partial text 'nation' in the search field. 2. Review matching rows. |
| Acceptance Criteria | Search supports partial token matching |
| Expected Result | Rows whose phrase or category contains 'nation' are returned, including 'international'. Search applies client-side without a full page reload. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-018 — Search is case-insensitive

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | High |
| Preconditions | Active ignore word 'LLC' exists. |
| Test Data | Stored word: LLC Search input: llc |
| Steps | 1. Search using lowercase 'llc'. 2. Compare results with the stored value 'LLC'. |
| Acceptance Criteria | Uppercase and lowercase keywords produce same result set |
| Expected Result | Case-insensitive search returns the 'LLC' record. No duplicate or missed match due to casing. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, high, functional |

### IWC-TC-019 — Search by category label

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Words exist under Entity Suffixes and Personal Titles categories. |
| Test Data | Search term: Entity Suffixes |
| Steps | 1. Search for 'Entity Suffixes'. 2. Review rows returned. |
| Acceptance Criteria | Rows can be filtered through category text in search |
| Expected Result | All visible rows belong to the Entity Suffixes category. Category badge matches the search term. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-020 — Clear search and restore full list

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Maker applied a search filter that reduced the visible row count. |
| Test Data | Initial search: trading |
| Steps | 1. Clear the search field completely. 2. Compare the row count before search, after search, and after clear. |
| Acceptance Criteria | Removing filter restores full tab dataset |
| Expected Result | Full tab dataset is restored after clearing search. Row count returns to the pre-search total. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-021 — Search with special characters is handled safely

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Maker is on Active tab. |
| Test Data | Search input: O'Brien & Co. |
| Steps | 1. Enter special characters in search: O'Brien & Co. 2. Observe results and page behaviour. |
| Acceptance Criteria | Search engine does not crash on symbols |
| Expected Result | Search handles special characters safely. No script execution, page error, or broken layout occurs. Results reflect literal text matching or a controlled no-match state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-022 — Search state remains when switching tabs

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Search & Filter |
| Priority | Medium |
| Preconditions | Search term 'ltd' returns results on Active tab. |
| Test Data | Search term: ltd |
| Steps | 1. Apply search 'ltd' on Active tab. 2. Switch to Inactive tab without clearing search. 3. Observe whether the search term persists and how results change. |
| Acceptance Criteria | Search keyword is applied consistently on switched tab |
| Expected Result | Search term remains in the field after tab switch. Results re-filter against the newly selected tab dataset. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | search-filter, medium, functional |

### IWC-TC-023 — Verify all table columns are displayed

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | High |
| Preconditions | At least one ignore word exists on Active tab. |
| Test Data | Expected columns: Ignore Word/Phrase, Category, Risk Level, Match Type, Created Date, Status, Actions |
| Steps | 1. On Active tab, verify table column headers. |
| Acceptance Criteria | Expected table headers are visible in order |
| Expected Result | All seven columns are displayed with correct labels. Status and Actions align with the selected tab context. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, high, functional |

### IWC-TC-024 — Sort Ignore Word/Phrase column ascending

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Multiple active ignore words exist. |
| Test Data | Column: Ignore Word/Phrase Sort: Ascending |
| Steps | 1. Click the Ignore Word/Phrase column sort control once for ascending order. 2. Verify the first and last visible values are in A–Z order. |
| Acceptance Criteria | Ascending sort orders rows alphabetically |
| Expected Result | Rows reorder alphabetically by ignore word/phrase ascending. Sort indicator reflects ascending state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-025 — Sort Ignore Word/Phrase column descending

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Active tab has multiple records. |
| Test Data | Column: Ignore Word/Phrase Sort: Descending |
| Steps | 1. Sort Ignore Word/Phrase descending. 2. Confirm order is reversed from ascending. |
| Acceptance Criteria | Descending sort reverses alphabetical order |
| Expected Result | Rows display in Z–A order. Toggling sort direction reorders without data loss. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-026 — Sort Category column ascending

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Words exist in multiple categories. |
| Test Data | Column: Category |
| Steps | 1. Sort by Category ascending. 2. Verify grouped alphabetical order by category name. |
| Acceptance Criteria | Category sort works on text values |
| Expected Result | Rows sort by category name A–Z. Category badge text matches sort order. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-027 — Sort Risk Level column by configured ranking

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Active words exist with Low, Medium, and High risk levels. |
| Test Data | Risk levels present: Low, Medium, High |
| Steps | 1. Sort by Risk Level. 2. Verify ordering follows business ranking High > Medium > Low (or configured order). |
| Acceptance Criteria | Risk sorting follows Low-Medium-High logic |
| Expected Result | Risk Level sort uses configured severity ranking, not plain alphabetical order. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-028 — Sort Match Type column

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Both Exact phrase and Partial match records exist. |
| Test Data | Match types: Exact phrase, Partial match |
| Steps | 1. Sort by Match Type. 2. Review row ordering. |
| Acceptance Criteria | Rows sort correctly by Exact phrase and Partial match |
| Expected Result | Rows group consistently by match type. Badge values remain accurate after sort. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-029 — Sort Created Date newest to oldest

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Multiple records with different created dates exist. |
| Test Data | Column: Created Date |
| Steps | 1. Sort Created Date from newest to oldest. 2. Compare top row date with the most recently created record. |
| Acceptance Criteria | Date sort supports chronology |
| Expected Result | Newest created date appears first. Date format remains consistent (e.g., DD Mon YYYY). |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-030 — Validate status badges by selected tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Records exist on Active, Inactive, and Drafted tabs. |
| Test Data | Tabs: Active, Inactive, Drafted |
| Steps | 1. On Active tab, confirm all rows show Active status badge. 2. Switch to Inactive and confirm Inactive badges. 3. Switch to Drafted and confirm Drafted badges. |
| Acceptance Criteria | Status labels are consistent with selected tab context |
| Expected Result | Status badge on every row matches the selected tab. No cross-status records leak into a tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-031 — Retain column sort after switching status tabs

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Multiple ignore words exist on Active and Inactive tabs. |
| Test Data | Initial tab: Active Sort: Category ascending |
| Steps | 1. On Active tab, sort Category ascending. 2. Switch to Inactive tab. 3. Switch back to Active tab. 4. Verify sort indicator and row order on Active tab. |
| Acceptance Criteria | Sort preference persists across tab navigation within the listing |
| Expected Result | Category ascending sort remains applied when returning to Active tab. Row order is unchanged from before the tab switch. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-032 — Verify row action column availability per tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | At least one record exists on each tab. |
| Test Data | Tabs: Active, Inactive, Drafted |
| Steps | 1. On Active tab, confirm Disable action is shown and Submit is absent. 2. On Inactive tab, confirm Enable action is shown. 3. On Drafted tab, confirm Submit action is shown and Disable/Enable are absent. |
| Acceptance Criteria | Actions column provides context-specific controls |
| Expected Result | Row actions are tab-appropriate. No hard-delete action appears on any tab. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-033 — Open Add Category modal from toolbar

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | High |
| Preconditions | Maker is on Ignore Words Configuration listing. |
| Test Data | Action: Add Category |
| Steps | 1. Click Add Category in the toolbar. 2. Review modal title, mandatory field markers, and footer buttons. |
| Acceptance Criteria | Modal opens with required fields and action buttons |
| Expected Result | Add Category modal opens over a dimmed backdrop. Category Name is marked mandatory; Description is optional. Cancel and Add Category buttons are visible. Add Category button is disabled until a valid name is entered. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, functional |

### IWC-TC-034 — Create new category with valid mandatory values

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | High |
| Preconditions | Category name 'Regulatory Review Terms' does not already exist. |
| Test Data | Category Name: Regulatory Review Terms Description: Terms temporarily excluded during regulatory review cycles. |
| Steps | 1. Click Add Category. 2. Enter Category Name: Regulatory Review Terms. 3. Enter Description: Terms temporarily excluded during regulatory review cycles. 4. Click Add Category. 5. Review the checker confirmation modal and dismiss it. |
| Acceptance Criteria | Category submission enters maker-checker queue |
| Expected Result | Modal closes after successful validation. Checker approval confirmation displays with submitter and timestamp. Category is not available in Add Ignore Word dropdown until checker approval completes. Audit entry is created for the submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, rbac, security |

### IWC-TC-035 — Validate Category Name required field

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open. |
| Test Data | Category Name: (blank) |
| Steps | 1. Leave Category Name empty. 2. Click Add Category. |
| Acceptance Criteria | Submit is blocked when Category Name is blank |
| Expected Result | Inline validation prevents submission. Modal remains open. No checker request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-036 — Validate Category Name maximum length 100

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open. |
| Test Data | Category Name length: 101 characters (exceeds maximum 100) |
| Steps | 1. Paste a 101-character value into Category Name. 2. Enter a valid description. 3. Click Add Category. |
| Acceptance Criteria | System rejects values beyond 100 characters |
| Expected Result | Category Name length validation appears. Submission is blocked and modal remains open. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, maker-checker |

### IWC-TC-037 — Allow Category Name exactly 100 characters

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Maker opened Add Category modal. |
| Test Data | Category Name length: 100 |
| Steps | 1. Enter Category Name with exactly 100 characters. 2. Enter description with 120 characters. 3. Click Submit. |
| Acceptance Criteria | Boundary length value is accepted |
| Expected Result | Submission is accepted and routed for checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-038 — Validate Description maximum length 500

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Maker opened Add Category modal. |
| Test Data | Description length: 501 |
| Steps | 1. Enter valid category name 'Payments Terms'. 2. Paste description with 501 characters. 3. Attempt Submit. |
| Acceptance Criteria | Description longer than 500 characters is rejected |
| Expected Result | Length validation is displayed for Description and submit does not proceed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, error-handling |

### IWC-TC-039 — Allow blank optional Description field

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Maker opened Add Category modal. |
| Test Data | Category Name: Geo Exceptions; Description: empty |
| Steps | 1. Enter Category Name as 'Geo Exceptions'. 2. Leave Description empty. 3. Click Submit. |
| Acceptance Criteria | Category can be submitted without Description |
| Expected Result | Add Category modal closes. A success notification confirms the category request was sent for checker approval. The new category name does not appear in the Category dropdown until checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-040 — Prevent duplicate category name exact match

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | High |
| Preconditions | Category 'Entity Suffixes' already exists and is active. |
| Test Data | Existing category: Entity Suffixes New entry: Entity Suffixes |
| Steps | 1. Open Add Category modal. 2. Enter Category Name: Entity Suffixes. 3. Tab out of the field or attempt submission. |
| Acceptance Criteria | System blocks duplicate category creation |
| Expected Result | Duplicate category is blocked with inline validation on focus-out or submit. No pending checker request is created for a duplicate name. Uniqueness is enforced across all active categories. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, functional |

### IWC-TC-041 — Prevent duplicate category name with case variation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | High |
| Preconditions | Category 'Business Descriptors' exists. |
| Test Data | Existing: Business Descriptors New input: business descriptors |
| Steps | 1. Open Add Category modal. 2. Enter Category Name: business descriptors (all lowercase). 3. Attempt to submit. |
| Acceptance Criteria | Uniqueness check is case-insensitive |
| Expected Result | Case-insensitive duplicate check blocks submission. Inline error identifies the naming conflict. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, functional |

### IWC-TC-042 — Trim leading and trailing spaces in category name

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open. |
| Test Data | Input: '  Trade Finance Terms  ' Stored expected: Trade Finance Terms |
| Steps | 1. Enter Category Name with leading/trailing spaces: '  Trade Finance Terms  '. 2. Submit the form. |
| Acceptance Criteria | Whitespace is normalized before duplicate check |
| Expected Result | System trims surrounding spaces before duplicate check and save. Stored category name excludes leading/trailing whitespace. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-043 — Cancel Add Category modal without saving

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open with unsaved entries. |
| Test Data | Category Name: Temporary Category |
| Steps | 1. Enter any values in Category Name and Description. 2. Click Cancel. 3. Reopen Add Category modal. |
| Acceptance Criteria | Cancel closes modal and does not create draft |
| Expected Result | Modal closes without creating a checker request. Previously entered values are not retained on reopen. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-044 — Verify maker-checker confirmation details after submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Maker submits a new valid category. |
| Test Data | Category: Payment Reference Noise |
| Steps | 1. Submit a new category with valid name and description. 2. Read the checker confirmation modal fields. 3. Click OK to dismiss. |
| Acceptance Criteria | Approval modal shows action metadata before final submission |
| Expected Result | Confirmation modal shows submitted-by user, timestamp, and Pending Checker status. Message states the category awaits checker review. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, rbac, security |

### IWC-TC-045 — Open Category Controls panel from toolbar

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Multiple categories exist with ignore word counts. |
| Test Data | Sample categories: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words |
| Steps | 1. Click Category Controls in the toolbar. 2. Review each category row for name, word count, and enable toggle. |
| Acceptance Criteria | Category Controls opens with toggle list and word counts |
| Expected Result | Category Controls modal lists all categories with accurate ignore word counts and current enable/disable toggle state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, functional |

### IWC-TC-046 — Disable an active category using toggle

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | High |
| Preconditions | Category 'Business Descriptors' is currently enabled. |
| Test Data | Category: Business Descriptors Action: Disable category |
| Steps | 1. Open Category Controls. 2. Turn off the toggle for Business Descriptors. 3. Click Save. 4. Complete checker approval as Checker. |
| Acceptance Criteria | Category disable action initiates approval workflow |
| Expected Result | Disable request is sent for checker approval. After approval, category toggle shows disabled and ignore words in that category are not applied during screening until re-enabled. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, functional |

### IWC-TC-047 — Enable an inactive category using toggle

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | High |
| Preconditions | Category 'Common Noise Words' is disabled. |
| Test Data | Category: Common Noise Words Action: Enable category |
| Steps | 1. Open Category Controls. 2. Enable Common Noise Words toggle. 3. Click Save and complete checker approval. |
| Acceptance Criteria | Enable action is captured with maker-checker |
| Expected Result | Enable request enters checker workflow. After approval, category is enabled and its ignore words participate in screening again. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### IWC-TC-048 — Validate category word count updates after enabling

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Category was recently re-enabled after being disabled. |
| Test Data | Category: Common Noise Words |
| Steps | 1. Open Category Controls after checker approval of enable action. 2. Compare word count for the re-enabled category against Active tab filtered by that category. |
| Acceptance Criteria | Displayed count reflects linked words for category |
| Expected Result | Word count in Category Controls matches the number of active ignore words assigned to that category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, functional |

### IWC-TC-049 — Verify each category row shows name and ignore word count

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | At least four categories are configured with varying word counts. |
| Test Data | Categories: Entity Suffixes (10), Personal Titles (7), Business Descriptors (7), Common Noise Words (4) |
| Steps | 1. Open Category Controls. 2. For each listed category, read the category name and displayed ignore word count. 3. Cross-check one category count against the Active tab filtered by that category. |
| Acceptance Criteria | Category Controls displays accurate per-category inventory counts |
| Expected Result | Every category row shows the correct name and live ignore word count. Counts reconcile with listing data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, functional |

### IWC-TC-050 — Prevent toggle interaction for Viewer role

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | High |
| Preconditions | Viewer account is logged in. |
| Test Data | User role: Viewer |
| Steps | 1. Open Ignore Words Configuration as Viewer. 2. Open Category Controls if visible. 3. Attempt to change any category toggle. |
| Acceptance Criteria | Viewer sees read-only controls |
| Expected Result | Viewer cannot modify category toggles. Controls are hidden or read-only. No save action is available. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, high, rbac, security |

### IWC-TC-051 — Reject invalid rapid double-toggle submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Maker opens Category Controls for enabled category. |
| Test Data | Category: Geography Terms; Rapid toggle sequence OFF->ON |
| Steps | 1. Toggle category OFF then immediately ON before confirmation. 2. Submit one action. 3. Review pending requests list. |
| Acceptance Criteria | System prevents duplicate pending requests |
| Expected Result | Only one valid pending request is recorded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, api |

### IWC-TC-052 — Close Category Controls without persisting changes

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Category Controls modal is open. |
| Test Data | Action: Cancel without Save |
| Steps | 1. Change one or more toggles. 2. Click Cancel. 3. Reopen Category Controls. |
| Acceptance Criteria | Unsubmitted toggle changes are discarded on cancel |
| Expected Result | Unsaved toggle changes are discarded. Category enablement state matches pre-cancel configuration. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, functional |

### IWC-TC-053 — Verify category controls action audit entry after checker approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Disable request for a category has been approved by Checker. |
| Test Data | Category: Geography Terms; Action: Disable approved |
| Steps | 1. Log in as Checker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open Word History panel for a word in affected category. 4. Inspect activity timeline. 5. Locate category status change event. |
| Acceptance Criteria | Approved category status changes appear in history |
| Expected Result | Audit timeline includes category control action with actor and timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, rbac, security |

### IWC-TC-054 — Open Add Ignore Word panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Maker is on Ignore Words Configuration listing. |
| Test Data | Action: Add Ignore Word |
| Steps | 1. Click Add Ignore Word. 2. Review panel title, mandatory fields, Live Narrative Tester, Preview section, and footer actions. |
| Acceptance Criteria | Panel opens with all required fields |
| Expected Result | Right-side panel opens with title 'Add New Ignore Word'. Mandatory fields: Ignore Word/Phrase, Category, Risk Level, Match Type. Footer shows Cancel, Save Draft, and Submit. No permanent delete option is present. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-055 — Submit ignore word with Exact phrase and Low risk

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Category 'Entity Suffixes' is active. Word 'GmbH' does not exist. |
| Test Data | Word: GmbH Category: Entity Suffixes Risk: Low Match Type: Exact phrase |
| Steps | 1. Open Add Ignore Word. 2. Enter Ignore Word/Phrase: GmbH. 3. Select Category: Entity Suffixes, Risk Level: Low, Match Type: Exact phrase. 4. Click Submit and dismiss the checker confirmation. |
| Acceptance Criteria | Valid mandatory inputs are accepted |
| Expected Result | Submission creates a pending checker request. Entry is not active in screening until checker approval. Confirmation shows Pending Checker status with submitter details. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-056 — Submit ignore word with Partial match and High risk

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Category 'Business Descriptors' is active. |
| Test Data | Word: bank Category: Business Descriptors Risk: High Match Type: Partial match |
| Steps | 1. Open Add Ignore Word. 2. Enter Word: bank. 3. Set Category: Business Descriptors, Risk: High, Match Type: Partial match. 4. Click Submit. |
| Acceptance Criteria | System accepts alternate risk and match combinations |
| Expected Result | High-risk partial-match entry is submitted for checker approval. Risk and match type persist on the pending record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-057 — Validate Word/Phrase is required

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Ignore Word/Phrase: (blank) |
| Steps | 1. Leave Ignore Word/Phrase empty. 2. Select valid Category, Risk Level, and Match Type. 3. Click Submit. |
| Acceptance Criteria | Submit blocked when Word/Phrase is blank |
| Expected Result | Mandatory field validation appears for Ignore Word/Phrase. No checker request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-058 — Validate Category is required

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Category: not selected |
| Steps | 1. Enter Word/Phrase 'cash structuring'. 2. Do not select Category; fill other fields. 3. Click Submit. |
| Acceptance Criteria | Submit blocked if Category not selected |
| Expected Result | Category required validation appears and no request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-059 — Validate Risk Level is required

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Risk Level: not selected |
| Steps | 1. Enter Word/Phrase and select Category. 2. Leave Risk Level empty and select Match Type. 3. Click Submit. |
| Acceptance Criteria | Submit blocked if Risk Level missing |
| Expected Result | Risk Level required validation is displayed. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-060 — Validate Match Type is required

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Match Type: not selected |
| Steps | 1. Enter Word/Phrase and select Category and Risk Level. 2. Leave Match Type unselected. 3. Click Submit. |
| Acceptance Criteria | Submit blocked if Match Type is missing |
| Expected Result | Match Type required validation appears and record is not submitted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-061 — Validate Word/Phrase maximum length 500

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Word/Phrase length: 501 |
| Steps | 1. Paste 501-character text in Word/Phrase. 2. Fill other mandatory fields. 3. Attempt Submit. |
| Acceptance Criteria | Input beyond 500 chars is rejected |
| Expected Result | Length validation appears for Word/Phrase and submit is blocked. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, error-handling |

### IWC-TC-062 — Allow Word/Phrase length exactly 500

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Word/Phrase length: 500 |
| Steps | 1. Enter 500-character Word/Phrase value. 2. Select valid Category, Risk Level, and Match Type. 3. Click Submit. |
| Acceptance Criteria | Boundary length value is accepted |
| Expected Result | Request is accepted and sent to maker-checker flow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, error-handling |

### IWC-TC-063 — Save valid ignore word as draft

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Category 'Personal Titles' is available. |
| Test Data | Word: Baroness Category: Personal Titles |
| Steps | 1. Open Add Ignore Word. 2. Enter Word: Baroness, Category: Personal Titles, Risk: Low, Match Type: Exact phrase. 3. Click Save Draft. |
| Acceptance Criteria | Save Draft stores entry under Drafted Ignore Word tab |
| Expected Result | Entry is saved with Drafted status. It appears on Drafted Ignore Word tab. Word is not used in live screening. No checker request is created until Submit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-064 — Cancel Add Ignore Word panel after input

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open with Word/Phrase 'temporary ignore' entered. |
| Test Data | Word entered then cancelled: temporary ignore |
| Steps | 1. Click Cancel and confirm discard if prompted. 2. Search Active and Drafted tabs for 'temporary ignore'. |
| Acceptance Criteria | Cancel discards unsaved data |
| Expected Result | No record is saved. Cancelled word does not appear on Active or Drafted tabs. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-065 — Prevent duplicate ignore word in same category and match type

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Active word 'holdings' exists under Business Descriptors with Exact phrase match. |
| Test Data | Existing: holdings \| Business Descriptors \| Exact phrase New: holdings |
| Steps | 1. Open Add Ignore Word. 2. Enter Word: holdings, same category and match type as existing record. 3. Click Submit. |
| Acceptance Criteria | Duplicate rule blocks submission |
| Expected Result | Duplicate submission is blocked within the same category and match type. Inline validation message is shown. No checker request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-066 — Treat duplicate words case-insensitively

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Active word 'Wire Transfer' exists under Business Descriptors with Partial match. |
| Test Data | Existing: Wire Transfer New input: wire transfer Category: Business Descriptors Match Type: Partial match |
| Steps | 1. Open Add Ignore Word. 2. Enter Word: wire transfer (lowercase), same category and match type. 3. Click Submit. |
| Acceptance Criteria | Duplicate check ignores letter case |
| Expected Result | Case-insensitive duplicate validation blocks submission in the add flow and during bulk import. No duplicate active record is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-067 — Trim whitespace around word before validation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Existing record: 'cash mule'. |
| Test Data | Raw input has leading and trailing spaces |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Click Add Ignore Word. 4. Enter Word/Phrase "controlled account", Category "Business Descriptors", Risk Level "Medium", Match Type "Partial match". 5. Click Submit. 6. Review the Request Submitted modal content. 7. Click OK to close the modal. |
| Acceptance Criteria | Leading/trailing spaces are removed before duplicate check |
| Expected Result | Request Submitted modal shows the ignore word name, submitter name, timestamp, and status "Pending Checker". Modal closes on OK. Record appears on Drafted tab awaiting checker action. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-068 — Assign Medium risk level correctly on submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Word: consultancy Risk: Medium |
| Steps | 1. Enter a new unique word with Risk Level: Medium. 2. Complete remaining mandatory fields and Submit. 3. After checker approval, open the record on Active tab. |
| Acceptance Criteria | Selected risk level is persisted accurately |
| Expected Result | Medium risk level is stored and displayed on the approved active record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-069 — Retain selected category while editing other fields

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Category: Industry Terms |
| Steps | 1. Select Category 'Industry Terms'. 2. Type Word/Phrase and change Risk Level values. 3. Verify Category remains selected before submit. |
| Acceptance Criteria | Category selection should not reset unexpectedly |
| Expected Result | Category value remains unchanged unless user explicitly modifies it. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-070 — Display maker-checker prompt after Submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Valid new ignore word entered on Add panel. |
| Test Data | Word: PLC |
| Steps | 1. Click Submit. 2. Capture confirmation modal content. |
| Acceptance Criteria | Submit action always routes through approval confirmation modal |
| Expected Result | Checker approval modal confirms request submission with user, timestamp, and Pending Checker status. Word is not active until checker acts. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, rbac, security |

### IWC-TC-071 — Ensure no hard delete option in Add Ignore Word panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Maker opened Add Ignore Word panel. |
| Test Data | Panel actions |
| Steps | 1. Inspect footer action buttons. 2. Search for any delete/remove control. 3. Attempt to locate permanent delete command. |
| Acceptance Criteria | UI offers only Save Draft, Submit, and Cancel actions |
| Expected Result | No hard delete action is exposed from add panel. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-072 — Open Live Narrative Tester from Add Ignore Word panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Word being composed: trading |
| Steps | 1. Locate Live Narrative Tester and Preview sections within the panel. 2. Enter a sample word in Ignore Word/Phrase field. |
| Acceptance Criteria | Narrative tester launches within add flow |
| Expected Result | Live Narrative Tester and Preview are embedded in the add panel. Preview updates as the ignore word field changes. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, screening-engine |

### IWC-TC-073 — Validate exact phrase match behavior in tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Word: Ltd Match Type: Exact phrase Narrative: ABC Ltd Holdings |
| Steps | 1. Enter Ignore Word/Phrase: Ltd with Match Type: Exact phrase. 2. Paste narrative: ABC Ltd Holdings. 3. Review Preview highlights. |
| Acceptance Criteria | Exact phrase triggers only full phrase matches |
| Expected Result | Preview highlights standalone token 'Ltd' only. 'Holdings' is not highlighted unless separately configured. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-074 — Validate exact phrase non-match for partial token

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel open with Match Type: Exact phrase. |
| Test Data | Word: Ltd Narrative token: Ltds |
| Steps | 1. Enter Word: Ltd. 2. Paste narrative containing token 'Ltds' (plural form). 3. Review Preview. |
| Acceptance Criteria | Exact phrase mode should not match fragmented terms |
| Expected Result | Exact phrase mode does not highlight 'Ltds'. Only tokens equal to 'Ltd' after normalisation are matched. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-075 — Validate partial match behavior in tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel open with Match Type: Partial match. |
| Test Data | Word: bank Match Type: Partial match Narrative: Interbank settlement with Eurobank reference |
| Steps | 1. Enter Word: bank. 2. Paste narrative: Interbank settlement with Eurobank reference. 3. Review Preview highlights. |
| Acceptance Criteria | Partial mode matches token occurrences |
| Expected Result | Partial match highlights 'bank' substring within tokens such as Interbank and Eurobank. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-076 — Validate case-insensitive match in tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel open. |
| Test Data | Configured word: BANK Narrative token: bank |
| Steps | 1. Enter Word: BANK (uppercase) with Exact phrase. 2. Paste narrative containing lowercase 'bank'. 3. Review Preview. |
| Acceptance Criteria | Tester should match regardless of text case |
| Expected Result | Preview matching is case-insensitive. Lowercase narrative token is highlighted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-077 — Handle large narrative input in tester

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Live Narrative Tester is open. |
| Test Data | Narrative length: 1500 characters |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Paste 1500-character narrative paragraph. 4. Run tester. 5. Observe result rendering and responsiveness. |
| Acceptance Criteria | Tester processes long text without UI break |
| Expected Result | Live Narrative Tester highlights matching tokens in the preview panel within one second of narrative input. Highlighted tokens correspond to the configured ignore word using the selected match type. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, error-handling |

### IWC-TC-078 — Clear tester input and reset output

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Narrative text is present in Live Narrative Tester. |
| Test Data | Narrative: (cleared) |
| Steps | 1. Clear the narrative textarea. 2. Observe Preview panel. |
| Acceptance Criteria | Reset action clears previous test state |
| Expected Result | Preview resets to empty-state message. No stale highlights remain. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-079 — Return from tester to add form with values preserved

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel has populated fields. |
| Test Data | Word: services Narrative: Global services payment |
| Steps | 1. Enter values in word, category, risk, match type, and narrative fields. 2. Scroll within the panel without closing it. 3. Confirm all entered values remain intact. |
| Acceptance Criteria | Closing tester should not lose form data |
| Expected Result | Field values and preview state are preserved during in-panel navigation. No data loss occurs before submit or cancel. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |

### IWC-TC-080 — Disable action appears only on Active tab rows

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Records exist on Active, Inactive, and Drafted tabs. |
| Test Data | Tabs reviewed: Active, Inactive, Drafted |
| Steps | 1. On Active tab, confirm Disable (minus) icon is present in Actions. 2. Switch to Inactive tab and confirm Disable is not shown. 3. Switch to Drafted tab and confirm Disable is not shown. |
| Acceptance Criteria | Active rows show Disable as primary action |
| Expected Result | Disable action is available only for active ignore words. Inactive rows show Enable; Drafted rows show Submit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-081 — Execute Disable action for active ignore word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | High |
| Preconditions | Active ignore word 'trading' exists on Active tab. |
| Test Data | Word: trading Tab: Active |
| Steps | 1. Locate 'trading' on Active tab. 2. Click Disable in the Actions column. 3. Review and dismiss the checker confirmation modal. |
| Acceptance Criteria | Disable request requires checker approval |
| Expected Result | Disable request is submitted for checker approval with Pending Checker status. After checker approval, 'trading' moves to Inactive tab and Active count decreases by one. Word is excluded from screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, high, rbac, security |

### IWC-TC-082 — Enable action is available only in Inactive tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Inactive ignore word 'and' exists. |
| Test Data | Word: and Tab: Inactive |
| Steps | 1. On Inactive tab, locate 'and'. 2. Confirm Enable action is shown and Disable is absent. |
| Acceptance Criteria | Inactive rows expose Enable action only |
| Expected Result | Enable action is available only on Inactive tab. No hard-delete action is offered. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-083 — Execute Enable action for inactive ignore word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | High |
| Preconditions | Maker is on Inactive tab with target row. |
| Test Data | Word: legacy account (Inactive) |
| Steps | 1. Click Enable for selected inactive row. 2. Review confirmation details. 3. Submit request. |
| Acceptance Criteria | Enable request goes through approval flow |
| Expected Result | Enable request is created and waits for checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, high, functional |

### IWC-TC-084 — Submit action is available only in Drafted tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Drafted ignore word 'co' exists. |
| Test Data | Word: co Tab: Drafted |
| Steps | 1. On Drafted tab, locate 'co'. 2. Confirm Submit action is available. 3. Switch to Active tab and confirm Submit is not shown there. |
| Acceptance Criteria | Draft rows provide Submit action |
| Expected Result | Submit row action is limited to Drafted tab entries awaiting checker submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-085 — Submit drafted ignore word from row action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | High |
| Preconditions | Drafted word 'son' exists under Personal Titles. |
| Test Data | Word: son Category: Personal Titles |
| Steps | 1. On Drafted tab, click Submit for 'son'. 2. Dismiss checker confirmation modal. |
| Acceptance Criteria | Draft submit enters checker approval process |
| Expected Result | Drafted entry is sent for checker approval. Status remains non-active until checker approves. Confirmation modal shows pending state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, high, rbac, security |

### IWC-TC-086 — Cancel row action confirmation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Maker initiated Disable action on active row. |
| Test Data | Word: compliance marker |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open row action Disable. 4. Click Cancel in confirmation modal. 5. Check row status and tab placement. |
| Acceptance Criteria | Canceling confirmation keeps row status unchanged |
| Expected Result | No status transition occurs when action is canceled. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-087 — Prevent concurrent duplicate action on same row

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Disable request for row is already pending checker approval. |
| Test Data | Row with pending action: shell company |
| Steps | 1. Log in as Checker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Attempt to trigger another Disable action for same row. 4. Observe action availability. 5. Review system message. |
| Acceptance Criteria | Pending action blocks additional requests on same record |
| Expected Result | System blocks duplicate action and shows pending-request notice. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-088 — Verify no hard delete action in row actions menu

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Maker is on any tab. |
| Test Data | Tabs: Active, Inactive, Drafted |
| Steps | 1. Inspect Actions column on Active, Inactive, and Drafted rows. 2. Confirm available actions. |
| Acceptance Criteria | Row actions must exclude permanent delete |
| Expected Result | Only Disable, Enable, or Submit actions are available per status. Permanent delete is not offered, enforcing logical deactivation only. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, functional |

### IWC-TC-089 — Ensure action updates are reflected after checker approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Ignore Word Row Actions |
| Priority | Medium |
| Preconditions | Maker submitted disable request for an active word; Checker approval is pending. |
| Test Data | Workflow: Disable approval |
| Steps | 1. As Checker, approve the pending disable request. 2. Return to Ignore Words Configuration as Maker. 3. Verify word status on Inactive tab and Active count. |
| Acceptance Criteria | Approved action moves row to correct tab |
| Expected Result | After checker approval, listing reflects updated status without manual refresh beyond normal load. Tab counts and row placement update correctly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | ignore-word-row-actions, medium, rbac, security |

### IWC-TC-090 — Open Bulk Upload modal from toolbar

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker is on Ignore Words listing. |
| Test Data | Action: Bulk Upload |
| Steps | 1. Click Bulk Upload. 2. Review modal fields and template download link. |
| Acceptance Criteria | Bulk Upload modal opens with category and file controls |
| Expected Result | Bulk Upload modal opens. Category dropdown, file upload drop zone, template download link, Cancel, and Upload buttons are visible. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high |

### IWC-TC-091 — Download bulk upload template

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk Upload modal is open. |
| Test Data | Template format: CSV or XLSX per institution standard |
| Steps | 1. Click Download template file. 2. Open the downloaded file. |
| Acceptance Criteria | Template file is downloadable and readable |
| Expected Result | Template downloads successfully and contains required columns for word/phrase, risk level, and match type aligned with manual add validation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-092 — Upload valid CSV file under 10MB

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Valid CSV bulk file under 10 MB prepared for Entity Suffixes. |
| Test Data | File: ignore_words_entity_suffixes.csv (8 KB) Category: Entity Suffixes |
| Steps | 1. Open Bulk Upload. 2. Select Category: Entity Suffixes. 3. Attach valid CSV file. 4. Click Upload. |
| Acceptance Criteria | System accepts valid CSV and creates drafted records |
| Expected Result | File is accepted. Bulk import is submitted as a single maker action for checker approval. Valid rows appear as drafted/pending entries per workflow rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-093 — Upload valid XLSX file under 10MB

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Maker has valid XLSX with 3 new ignore words. |
| Test Data | File: iwc_valid_3_rows.xlsx; Size: 350KB |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Select category 'Adverse Media Terms'. 4. Upload file 'iwc_valid_3_rows.xlsx' (350KB). 5. Submit upload. |
| Acceptance Criteria | System accepts XLSX format |
| Expected Result | XLSX upload succeeds and request enters maker-checker flow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium |

### IWC-TC-094 — Reject file larger than 10MB

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Maker opened Bulk Upload modal. |
| Test Data | File size: 11MB |
| Steps | 1. Select category. 2. Upload file 'iwc_oversize_11mb.csv'. 3. Observe validation response. |
| Acceptance Criteria | File size validation enforces 10MB limit |
| Expected Result | System rejects upload and shows max file size error. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, maker-checker |

### IWC-TC-095 — Reject unsupported file format

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk Upload modal is open. |
| Test Data | Unsupported files: .pdf, .txt Accepted formats: .csv, .xlsx |
| Steps | 1. Select a valid category. 2. Attempt to attach unsupported file ignore_words_archive.pdf or ignore_words_notes.txt via browse or drag-drop. |
| Acceptance Criteria | Only CSV and XLSX extensions are accepted |
| Expected Result | Unsupported file types are rejected with a clear validation message. Upload does not proceed and no records are imported. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-096 — Validate category selection required for upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk Upload modal is open with file selected. |
| Test Data | Category: (not selected) |
| Steps | 1. Leave category unselected or on placeholder value. 2. Attempt Upload. |
| Acceptance Criteria | Upload cannot proceed without category |
| Expected Result | Category selection is enforced before upload proceeds. Inline validation is shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, functional |

### IWC-TC-097 — Handle duplicate words inside upload file

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Maker has CSV containing repeated word entries. |
| Test Data | Duplicates in file rows 2 and 5 |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Select category and upload 'iwc_duplicates.csv'. 4. Submit file. 5. Review validation summary. |
| Acceptance Criteria | Duplicate rows are reported with row-level feedback |
| Expected Result | System flags duplicate lines and processes only valid unique rows per rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, functional |

### IWC-TC-098 — Handle existing system duplicates during upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Active word 'corp' exists. Bulk file contains the same word. |
| Test Data | Existing active word: corp Bulk file row: corp |
| Steps | 1. Upload bulk file containing 'corp' for the same category and match type. 2. Review validation outcome. |
| Acceptance Criteria | Records already present are rejected with clear reason |
| Expected Result | System duplicate is flagged. Row is rejected or reported in upload summary without creating a duplicate active record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, maker-checker |

### IWC-TC-099 — Validate case-insensitive duplicate detection in upload

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Existing word 'Wire Transfer' present in system. |
| Test Data | Existing: Wire Transfer; Uploaded: wire transfer |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Upload row with value 'wire transfer'. 4. Submit bulk upload. 5. Review validation outcome. |
| Acceptance Criteria | Duplicate check ignores case across file and system |
| Expected Result | System marks entry as duplicate based on case-insensitive comparison. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, functional |

### IWC-TC-100 — Cancel bulk upload before submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk Upload modal is open with category selected and valid file attached. |
| Test Data | File previously attached: ignore_words_batch.csv |
| Steps | 1. Click Cancel on Bulk Upload modal. 2. Reopen Bulk Upload. 3. Verify no file remains queued. |
| Acceptance Criteria | Cancel closes modal and creates no upload request |
| Expected Result | Upload is discarded. No pending checker request is created. Reopened modal shows empty file selection. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, export |

### IWC-TC-101 — Verify checker approval modal appears for bulk submit

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Valid bulk file ready for upload. |
| Test Data | File: ignore_words_batch_valid.csv |
| Steps | 1. Complete bulk upload submission. 2. Capture checker confirmation modal. |
| Acceptance Criteria | Bulk submission routes through maker-checker confirmation |
| Expected Result | Bulk upload triggers checker approval modal. Entire batch awaits checker decision before words become active. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, rbac, security |

### IWC-TC-102 — Verify uploaded words appear in Drafted Ignore Word tab before approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Bulk upload submitted and awaiting checker approval. |
| Test Data | Bulk file words: sa, bv, plc |
| Steps | 1. Before checker approval, open Drafted Ignore Word tab. 2. Locate imported words from the bulk file. |
| Acceptance Criteria | Submitted bulk records are visible in drafted state |
| Expected Result | Imported words appear as drafted or pending entries. None are active in screening until checker approval. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, functional |

### IWC-TC-103 — Validate partial upload success with mixed valid and invalid rows

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | CSV has 6 rows with 4 valid and 2 invalid entries. |
| Test Data | File rows: 4 valid, 2 invalid |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Upload file 'iwc_mixed_6_rows.csv'. 4. Submit request. 5. Review row-level processing summary. |
| Acceptance Criteria | System processes valid rows and reports failed rows |
| Expected Result | Valid rows are accepted while invalid rows are listed with rejection reasons. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium, functional |

### IWC-TC-104 — Export Active tab records to CSV

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | High |
| Preconditions | Active tab has multiple records. |
| Test Data | Tab: Active |
| Steps | 1. Select Active tab. 2. Click Export. 3. Open downloaded CSV. |
| Acceptance Criteria | Export generates CSV containing active records |
| Expected Result | Export file contains only active records with Word/Phrase, Category, Risk Level, Match Type, Created Date, Status, and maker/checker metadata columns. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### IWC-TC-105 — Export Inactive tab records to CSV

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | Medium |
| Preconditions | Maker is on Inactive tab with records. |
| Test Data | Source tab: Inactive |
| Steps | 1. Click Export. 2. Open downloaded CSV. 3. Verify all exported rows are inactive. |
| Acceptance Criteria | Export respects current tab filter |
| Expected Result | Exported file contains only inactive records from selected context. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium |

### IWC-TC-106 — Validate export file contains metadata header section

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | Medium |
| Preconditions | Active tab export completed. |
| Test Data | Export source: Active tab |
| Steps | 1. Open exported CSV in a text editor. 2. Review header comment/metadata section before column headers. |
| Acceptance Criteria | CSV includes report metadata rows |
| Expected Result | File includes metadata header with export timestamp, exported-by user, and checker governance note before data rows. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium |

### IWC-TC-107 — Validate maker-checker related columns in exported file

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | High |
| Preconditions | Data contains approved and pending records. |
| Test Data | Expected columns: Maker, Checker, Approval Status, Action Date |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Export dataset from page. 4. Open CSV column headers. 5. Locate maker-checker columns. |
| Acceptance Criteria | Export includes maker, checker, and approval status fields |
| Expected Result | Maker-checker columns are present and filled where applicable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high, rbac, security |

### IWC-TC-108 — Export with active search filter applied

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | Medium |
| Preconditions | Search 'wire' applied on Active tab. |
| Test Data | Search keyword: wire |
| Steps | 1. Keep search filter active. 2. Click Export. 3. Verify CSV rows match search criteria. |
| Acceptance Criteria | Exported data reflects current search filter |
| Expected Result | CSV includes only records matching active filter context. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium |

### IWC-TC-109 — Viewer role can perform read-only export

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | Medium |
| Preconditions | Viewer user is on Ignore Words page. |
| Test Data | Role: Viewer |
| Steps | 1. Click Export as Viewer. 2. Download and open CSV. 3. Confirm no edit controls are available in UI. |
| Acceptance Criteria | Viewer can export but cannot change data |
| Expected Result | Export works for Viewer while write actions remain restricted. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium, rbac, security |

### IWC-TC-110 — Maker submit new category creates pending request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Category name 'Investigation Terms' is unique. |
| Test Data | Category: Investigation Terms |
| Steps | 1. As Maker, submit new category Investigation Terms with description. 2. Note confirmation details. 3. Log in as Checker and open the pending approvals queue. 4. Locate the category creation request. |
| Acceptance Criteria | Submit action routes item to checker queue |
| Expected Result | Category request appears in checker queue with Pending Checker Approval status. Category is not selectable in Add Ignore Word until approved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-111 — Checker approves category creation request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Pending category creation request exists. |
| Test Data | Pending category: Investigation Terms |
| Steps | 1. Log in as Checker. 2. Approve the pending category request. 3. As Maker, open Add Ignore Word and inspect Category dropdown. |
| Acceptance Criteria | Approved request activates category for use |
| Expected Result | Category becomes selectable after approval. Audit trail records checker approval with user and timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-112 — Checker rejects category creation request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Pending category creation request exists. |
| Test Data | Rejection comment: Category scope overlaps existing Entity Suffixes |
| Steps | 1. As Checker, reject the category request with comments. 2. As Maker, verify category is not in dropdown. 3. Review audit/history if available. |
| Acceptance Criteria | Rejected request does not activate category |
| Expected Result | Category is not created. Maker can revise and resubmit. Rejection reason is retained in audit trail. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-113 — Maker cannot approve own request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker has a pending ignore word or category request they submitted. |
| Test Data | Request owner: Maker user A Current user: Maker user A (same account) |
| Steps | 1. As the same Maker user, open the checker approvals queue. 2. Locate own pending request. 3. Attempt to approve the request. |
| Acceptance Criteria | Four-eyes principle enforced — maker cannot approve own submissions even if dual roles exist on the account |
| Expected Result | Self-approval is blocked. Approve action is hidden or denied with permission message. Request remains pending until a different checker user acts. Audit log records the blocked attempt if applicable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-114 — Maker submits drafted ignore word for approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Drafted word exists on Drafted tab. |
| Test Data | Drafted word: co |
| Steps | 1. As Maker, submit drafted word from row action or add panel. 2. Verify confirmation modal. |
| Acceptance Criteria | Drafted item transitions to pending approval |
| Expected Result | Draft moves to pending checker workflow. Entry is locked from further edits until checker decision. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-115 — Checker approves drafted ignore word submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Ignore word submission is pending checker approval. |
| Test Data | Word: co |
| Steps | 1. As Checker, approve the pending ignore word. 2. Verify listing on Active tab. |
| Acceptance Criteria | Approved draft moves to Active tab |
| Expected Result | Word status becomes Active after approval. It appears on Active tab and is applied in subsequent screening runs. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-116 — Checker rejects drafted ignore word submission

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Ignore word submission is pending checker approval. |
| Test Data | Rejection comment: Word too generic for current risk appetite |
| Steps | 1. As Checker, reject with comments. 2. As Maker, open Drafted tab. |
| Acceptance Criteria | Rejected draft does not become active |
| Expected Result | Entry returns to Drafted state. Rejection comments are visible to Maker. Word remains non-operational. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-117 — Maker submits disable request for active word

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Active word 'global' exists. |
| Test Data | Word: global |
| Steps | 1. As Maker, click Disable for 'global'. 2. Confirm checker submission modal. |
| Acceptance Criteria | Disable request enters checker queue |
| Expected Result | Disable request enters pending approval. Word remains active until checker approves disable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-118 — Checker approves disable request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Disable request for 'global' is pending. |
| Test Data | Word: global |
| Steps | 1. As Checker, approve disable request. 2. Verify word on Inactive tab. |
| Acceptance Criteria | Approved disable moves record to inactive |
| Expected Result | Word moves to Inactive after approval. Screening engine stops applying it on next run. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-119 — Checker rejects disable request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Pending disable request exists. |
| Test Data | Reject reason: Still required for screening |
| Steps | 1. Log in as Checker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open pending disable request. 4. Reject with reason 'Still required for screening'. 5. Verify word remains in Active tab. |
| Acceptance Criteria | Rejected disable keeps record active |
| Expected Result | Word stays active and request marked rejected. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-120 — Maker submits bulk upload for checker review

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Maker uploaded valid file through Bulk Upload. |
| Test Data | File: iwc_valid_5_rows.csv |
| Steps | 1. Submit bulk upload. 2. Open workflow queue. 3. Confirm bulk request appears as pending. |
| Acceptance Criteria | Bulk request is queued for checker decision |
| Expected Result | Bulk upload request appears in pending checker queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-121 — Checker approves bulk upload request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Pending bulk upload request exists. |
| Test Data | Sample uploaded word: compliance shell |
| Steps | 1. Log in as Checker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Login as Checker and open bulk request. 4. Approve request. 5. Search uploaded words in Active tab. |
| Acceptance Criteria | Approved bulk rows are activated per workflow |
| Expected Result | Approved bulk rows become available per active workflow status. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-122 — Checker rejects bulk upload request

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | Pending bulk upload request exists. |
| Test Data | Reject reason: Data quality issue |
| Steps | 1. Log in as Checker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open pending bulk request as Checker. 4. Reject with reason 'Data quality issue'. 5. Verify uploaded words are not activated. |
| Acceptance Criteria | Rejected bulk request does not apply rows |
| Expected Result | Bulk request is rejected and rows are not applied to active data. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-123 — Workflow status visibility for Maker after checker decision

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Medium |
| Preconditions | At least one request has completed checker action. |
| Test Data | Request types: Add Category, Add Ignore Word, Disable |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Login as Maker. 4. Open submitted requests history. 5. Review final status and remarks. |
| Acceptance Criteria | Maker can see final approval or rejection outcome |
| Expected Result | Maker sees final status, checker user, and decision timestamp. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, medium, rbac, security |

### IWC-TC-124 — Open Word History panel from row context

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | High |
| Preconditions | Active ignore word 'limited' has audit history. |
| Test Data | Word: limited |
| Steps | 1. On Active tab, click the 'limited' hyperlink in the Ignore Word/Phrase column. 2. Review the Word History panel. |
| Acceptance Criteria | History panel opens for selected word |
| Expected Result | Word History panel opens from the right. Metadata card shows word, category, risk, match type, status, and created date. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, high, word-history |

### IWC-TC-125 — Validate metadata card fields in history panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Word History panel is open for an active word. |
| Test Data | Word: limited |
| Steps | 1. Review metadata card fields. 2. Compare values with the listing row. |
| Acceptance Criteria | Metadata card shows core word details |
| Expected Result | Metadata card values match the listing row and persisted record exactly. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, functional |

### IWC-TC-126 — Verify timeline entry for word creation

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Word History panel open for a fully approved word. |
| Test Data | Expected event: Word Added |
| Steps | 1. Locate earliest timeline event. 2. Verify creation entry details. |
| Acceptance Criteria | Creation event stores actor and timestamp |
| Expected Result | Timeline shows Word Added with maker user, role, department, timestamp, and optional note. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, functional |

### IWC-TC-127 — Verify timeline entry for checker approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Word has completed checker approval. |
| Test Data | Expected checker: Charu Chauhan |
| Steps | 1. Open Word History. 2. Locate Approved & Activated event. |
| Acceptance Criteria | Approval event records checker and decision |
| Expected Result | Timeline includes checker approval event with checker user, role, department, timestamp, and approval note if provided. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, rbac, security |

### IWC-TC-128 — Verify timeline entry for disable action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Word has been disabled through approved workflow. |
| Test Data | Workflow: Disable |
| Steps | 1. Open Word History for the disabled word. 2. Locate Disable Requested and Disable Approved events. |
| Acceptance Criteria | Disable action appears in chronological order |
| Expected Result | Timeline captures disable request by maker and disable approval by checker with timestamps. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, functional |

### IWC-TC-129 — Verify timeline entry for enable action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Ignore word was re-enabled through approved checker workflow. |
| Test Data | Workflow: Enable after inactive |
| Steps | 1. Open Word History for the re-enabled word. 2. Locate enable-related timeline events. 3. Verify maker request and checker approval entries. |
| Acceptance Criteria | Enable event is tracked after inactive activation |
| Expected Result | Timeline includes enable request by maker and enable approval by checker with user, role, department, and timestamps. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, functional |

### IWC-TC-130 — Audit history includes rejection reason

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Checker rejected a drafted ignore word submission. |
| Test Data | Rejection comment: Requires senior compliance sign-off |
| Steps | 1. Open Word History for the rejected word. 2. Locate rejection event and comments. |
| Acceptance Criteria | Rejected requests show checker comments in timeline |
| Expected Result | Timeline shows rejection with checker comments preserved for audit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, rbac, security |

### IWC-TC-131 — Verify history access for Viewer role

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Viewer has access to Ignore Words page. |
| Test Data | Role: Viewer |
| Steps | 1. Open Word History panel as Viewer. 2. Inspect metadata and timeline content. 3. Attempt to perform edit or action from history panel. |
| Acceptance Criteria | Viewer can read history but cannot modify records |
| Expected Result | Viewer can access full audit history in read-only mode. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, rbac, security |

### IWC-TC-132 — Validate history sorting by latest event first

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Selected word has multiple workflow events. |
| Test Data | Word with 5+ events |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open Word History panel. 4. Observe first and second timeline timestamps. 5. Compare recency order. |
| Acceptance Criteria | Recent events appear at top of timeline |
| Expected Result | Timeline displays most recent event at top consistently. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, functional |

### IWC-TC-133 — Persist history visibility after page refresh and reopen

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Word History panel was previously opened for ignore word 'limited'. |
| Test Data | Word: limited |
| Steps | 1. Close Word History panel. 2. Refresh the browser page. 3. Reopen Word History for 'limited'. 4. Compare timeline events with the prior session. |
| Acceptance Criteria | Audit data remains accessible and consistent |
| Expected Result | History data persists after refresh. Timeline events and metadata match pre-refresh content. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, word-history |

### IWC-TC-134 — Maker can access add and submit functions

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Maker account is logged in. |
| Test Data | User role: Maker |
| Steps | 1. Open Ignore Words Configuration. 2. Verify Add Ignore Word, Add Category, and Bulk Upload are available. 3. Open Add Ignore Word and confirm Save Draft and Submit are enabled. |
| Acceptance Criteria | Maker role has create and submit rights |
| Expected Result | Maker can access create, draft, and submit functions. Checker approval queue actions are not available to Maker. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### IWC-TC-135 — Maker cannot approve pending requests

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Maker has pending submissions in the queue. |
| Test Data | User role: Maker |
| Steps | 1. As Maker, open pending approvals queue. 2. Confirm Approve and Reject are unavailable. |
| Acceptance Criteria | Maker role does not have checker actions |
| Expected Result | Maker cannot approve or reject any pending request. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### IWC-TC-136 — Checker can approve or reject pending requests

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Pending requests exist from other makers. |
| Test Data | User role: Checker |
| Steps | 1. Log in as Checker. 2. Open pending queue and approve one request. 3. Reject another with comments. |
| Acceptance Criteria | Checker role has decision rights |
| Expected Result | Checker can approve or reject third-party maker submissions. Decisions update record status and audit trail. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### IWC-TC-137 — Checker cannot create new ignore words directly

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Checker account is logged in. |
| Test Data | User role: Checker |
| Steps | 1. Open Ignore Words Configuration. 2. Inspect toolbar for Add Ignore Word and Add Category. 3. Attempt to open creation forms if visible. |
| Acceptance Criteria | Checker has review role only |
| Expected Result | Checker cannot create new ignore words or categories. Add actions are hidden or blocked. Checker can still access approval queue. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### IWC-TC-138 — Viewer can access page and read records

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Viewer account exists with read permission. |
| Test Data | User role: Viewer |
| Steps | 1. Log in as Viewer. 2. Open Ignore Words Configuration. 3. Browse tabs and search. |
| Acceptance Criteria | Viewer has read-only visibility |
| Expected Result | Viewer can read listing data across tabs. Create, submit, and row mutation actions are unavailable. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### IWC-TC-139 — Viewer cannot access Add Ignore Word panel

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Viewer is on Ignore Words listing. |
| Test Data | User role: Viewer |
| Steps | 1. Confirm Add Ignore Word button is hidden or disabled. 2. Attempt direct navigation to add panel URL if applicable. |
| Acceptance Criteria | Write controls are restricted for Viewer |
| Expected Result | Viewer cannot open Add Ignore Word panel or create records. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### IWC-TC-140 — Viewer cannot perform row enable or disable actions

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | High |
| Preconditions | Viewer is on tab with data rows. |
| Test Data | Role: Viewer; Tab: Active/Inactive |
| Steps | 1. Log in as Viewer. 2. Attempt to access Ignore Words Configuration via menu navigation or direct URL. 3. Open row action menu as Viewer. 4. Attempt to click Enable or Disable. 5. Observe result. |
| Acceptance Criteria | Row action controls are read-only for Viewer |
| Expected Result | Enable/Disable actions are hidden or disabled for Viewer. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, high, rbac, security |

### IWC-TC-141 — Role-based visibility of Bulk Upload action

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Accounts for Maker, Checker, and Viewer are available. |
| Test Data | Roles: Maker, Checker, Viewer |
| Steps | 1. Log in as Viewer. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Login as Maker and check Bulk Upload button. 4. Login as Checker and check same button. 5. Login as Viewer and check same button. |
| Acceptance Criteria | Bulk Upload appears only for authorized role |
| Expected Result | Bulk Upload is available only to roles with upload permission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### IWC-TC-142 — Role-based visibility of Category Controls toggles

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | Category Controls is accessible to all test roles. |
| Test Data | Roles compared: Maker, Checker, Viewer |
| Steps | 1. Log in as Viewer. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open Category Controls as Maker. 4. Open Category Controls as Checker. 5. Open Category Controls as Viewer and compare toggle state. |
| Acceptance Criteria | Only allowed role can toggle category state |
| Expected Result | Toggle interaction is enabled only for authorized role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### IWC-TC-143 — Session role switch updates UI permissions immediately

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Access Control (RBAC) |
| Priority | Medium |
| Preconditions | User can log out and log in with different role accounts. |
| Test Data | Role switch: Maker -> Viewer |
| Steps | 1. Log in as Viewer. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Log out and log in as Viewer. 4. Compare visible actions on same page. |
| Acceptance Criteria | Toolbar actions refresh according to current login role |
| Expected Result | UI permissions update immediately and reflect active role. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | access-control-rbac, medium, rbac, security |

### IWC-TC-144 — Case-insensitive matching for exact phrase business rule

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Active word 'Shell Company' with Exact phrase exists, or compose on Add panel. |
| Test Data | Stored word: Shell Company Narrative: payment to shell company account |
| Steps | 1. On Add panel, set Word: Shell Company, Match Type: Exact phrase. 2. Paste narrative containing lowercase 'shell company'. 3. Review Preview. |
| Acceptance Criteria | Exact phrase should match regardless of text case |
| Expected Result | Case-insensitive exact phrase matching highlights the token. Business rule BR-002 is satisfied in preview and live screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, functional |

### IWC-TC-145 — Exact phrase does not match split word sequence

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Exact phrase word 'New York' is configured or being composed. |
| Test Data | Phrase: New York Narrative token: NewYork |
| Steps | 1. Use Match Type: Exact phrase for 'New York'. 2. Paste narrative: NewYork branch transfer. 3. Review Preview. |
| Acceptance Criteria | Exact phrase requires contiguous phrase |
| Expected Result | Concatenated token 'NewYork' is not matched. Exact phrase requires token-boundary equality after normalisation. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, functional |

### IWC-TC-146 — Partial match detects word inside longer sentence

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Partial match word 'bank' configured or composed. |
| Test Data | Word: bank Narrative: Payment via interbank channel |
| Steps | 1. Set Match Type: Partial match for 'bank'. 2. Paste narrative: Payment via interbank channel. 3. Review Preview. |
| Acceptance Criteria | Partial match should detect token occurrence |
| Expected Result | Substring 'bank' within 'interbank' is identified and would be stripped in screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, functional |

### IWC-TC-149 — No permanent delete business rule enforced at row level

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Maker is on any tab. |
| Test Data | Business rule: No permanent delete |
| Steps | 1. Inspect row actions and add panel for delete options. |
| Acceptance Criteria | Records cannot be hard deleted from any status tab |
| Expected Result | No hard-delete capability exists. Deactivation via Disable with checker approval is the only removal path. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, functional |

### IWC-TC-151 — Word/Phrase field trims surrounding spaces before save

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Input: '  holdings  ' Expected stored: holdings |
| Steps | 1. Enter Word with leading/trailing spaces: '  holdings  '. 2. Submit or Save Draft. 3. Verify stored value on listing. |
| Acceptance Criteria | Stored value excludes accidental surrounding spaces |
| Expected Result | Surrounding whitespace is trimmed before validation and persistence. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, functional |

### IWC-TC-152 — Category name trims surrounding spaces before duplicate check

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Category 'Geo Exceptions' exists. |
| Test Data | Input with leading and trailing spaces |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open Add Category modal. 4. Enter value '  Geo Exceptions  '. 5. Submit form. |
| Acceptance Criteria | Whitespace-normalized value used for uniqueness |
| Expected Result | System trims value and flags as duplicate category. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, functional |

### IWC-TC-153 — Risk level value persists correctly through workflow

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Maker can submit and Checker can approve a new ignore word. |
| Test Data | Word: offshore shell; Risk Level: High |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Create ignore word with Risk Level High. 4. Approve request as Checker. 5. Open active record and verify Risk Level column. |
| Acceptance Criteria | Selected risk level remains unchanged after approval |
| Expected Result | Approved active record keeps Risk Level as High. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, functional |

### IWC-TC-154 — Bulk upload applies same duplicate business rules as manual add

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Existing words include 'shell company' and 'wire transfer'. |
| Test Data | File: iwc_dup_existing.csv |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Upload CSV containing duplicate entries for existing words. 4. Submit bulk request. 5. Review validation response. |
| Acceptance Criteria | Bulk channel enforces standard duplicate constraints |
| Expected Result | Bulk upload rejects duplicates using same validation rule set. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, export |

### IWC-TC-155 — Export includes approved and pending status values accurately

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Dataset has both approved and pending records. |
| Test Data | Records sampled: approved word, pending disable request |
| Steps | 1. Log in as authorised user with Ignore Words Configuration access. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Trigger Export from Ignore Words page. 4. Open CSV and inspect Status and Approval Status columns. 5. Cross-check with UI record statuses. |
| Acceptance Criteria | Status mapping in export follows workflow state |
| Expected Result | CSV status values match live UI and workflow state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, export |

### IWC-TC-156 — Verify no separate Pending Approval tab on listing screen

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Status Tabs |
| Priority | Medium |
| Preconditions | Pending checker requests exist in the system. |
| Test Data | Expected tabs: Active, Inactive, Drafted Ignore Word |
| Steps | 1. Open Ignore Words Configuration listing. 2. Review available status tabs. |
| Acceptance Criteria | Only Active, Inactive, and Drafted Ignore Word tabs are shown |
| Expected Result | No separate Pending Approval tab exists on the listing. Pending items are managed through checker queue and drafted/pending statuses. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | status-tabs, medium, functional |

### IWC-TC-157 — Verify loading indicator during delayed page load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Browser dev tools available; network throttling can be enabled |
| Test Data | Network: Slow 3G |
| Steps | 1. Log in as Maker. 2. Enable Slow 3G or equivalent network throttling. 3. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 4. Observe the table area while data loads. |
| Acceptance Criteria | System shows loading state while listing data is fetched |
| Expected Result | A loading spinner or skeleton placeholder appears in the table area until ignore word rows render. No blank broken layout or unhandled error is shown. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, performance |

### IWC-TC-158 — Verify no JavaScript console errors on module load

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Medium |
| Preconditions | Browser developer console open before navigation |
| Test Data | Browser: Chrome or Edge |
| Steps | 1. Log in as Maker. 2. Open browser console and clear existing messages. 3. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 4. Review console for errors after page fully loads. |
| Acceptance Criteria | Page load completes without frontend exceptions |
| Expected Result | No uncaught JavaScript errors or unhandled promise rejections appear in the console during page load and initial table render. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, medium, browser-compat |

### IWC-TC-159 — Verify table header remains visible when scrolling long lists

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Data Table & Sorting |
| Priority | Medium |
| Preconditions | Active tab contains enough rows to require vertical scroll. |
| Test Data | Tab: Active |
| Steps | 1. Scroll down within the table area. 2. Observe column header behaviour. |
| Acceptance Criteria | Sticky header stays fixed while scrolling table body |
| Expected Result | Table header remains visible (sticky) while scrolling long lists. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | data-table-sorting, medium, functional |

### IWC-TC-160 — Verify footer status bar displays license and copyright information

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Low |
| Preconditions | Maker is on Ignore Words Configuration. |
| Test Data | Footer elements: license expiry, copyright, links |
| Steps | 1. Scroll to page footer status bar. 2. Read displayed information. |
| Acceptance Criteria | Status bar shows institutional footer content |
| Expected Result | Status bar shows license expiry date, copyright notice, and Important Links without obscuring main content. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, low, functional |

### IWC-TC-161 — Filter Configuration menu using sidebar search input

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Navigation & Page Access |
| Priority | Low |
| Preconditions | Maker is on application home with sidebar visible. |
| Test Data | Sidebar search: Ignore Words |
| Steps | 1. Enter 'Ignore Words' in the sidebar menu search. 2. Select the filtered Ignore Words Configuration menu item. |
| Acceptance Criteria | Sidebar search narrows visible navigation items |
| Expected Result | Menu search filters to Ignore Words Configuration. Selecting it opens the listing. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | navigation-page-access, low, functional |

### IWC-TC-162 — Close Add Category modal by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Maker on listing page |
| Test Data | Modal: Add Category |
| Steps | 1. Click Add Category. 2. Click the dimmed overlay area outside the modal box. |
| Acceptance Criteria | Clicking outside modal dismisses Add Category dialog |
| Expected Result | Add Category modal closes. No category request is submitted. Entered fields are discarded. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, functional |

### IWC-TC-163 — Close Category Controls modal by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Category Controls |
| Priority | Medium |
| Preconditions | Maker on listing page |
| Test Data | Modal: Category Controls |
| Steps | 1. Open Category Controls. 2. Toggle one category switch. 3. Click overlay backdrop outside modal. |
| Acceptance Criteria | Overlay click dismisses Category Controls without saving |
| Expected Result | Modal closes without saving toggle changes. Reopening Category Controls shows prior saved state, not unsaved toggle. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-category-controls, medium, functional |

### IWC-TC-164 — Verify Add Ignore Word panel does not close when clicking overlay

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open with partial form data entered. |
| Test Data | Word: test value |
| Steps | 1. Enter Word/Phrase: test value. 2. Click the dimmed overlay to the left of the panel. |
| Acceptance Criteria | Right-side panel requires explicit Cancel or back action |
| Expected Result | Panel does not close when clicking the overlay. User must use Cancel or complete submission to exit. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, medium, functional |

### IWC-TC-165 — Close Bulk Upload modal by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Medium |
| Preconditions | Maker on listing page |
| Test Data | Modal: Bulk Upload |
| Steps | 1. Open Bulk Upload. 2. Click overlay outside the modal. |
| Acceptance Criteria | Overlay click dismisses bulk upload without uploading |
| Expected Result | Bulk Upload modal closes. No file is uploaded and no draft records are created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, medium |

### IWC-TC-166 — Close Checker approval modal by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | Low |
| Preconditions | Maker just submitted an ignore word for approval |
| Test Data | Action: Submit ignore word |
| Steps | 1. Log in as Maker. 2. Submit a new ignore word for checker approval. 3. When Request Submitted modal appears, click overlay backdrop. |
| Acceptance Criteria | Overlay click dismisses confirmation modal after action submission |
| Expected Result | Checker approval modal closes. Submitted request remains in pending/drafted state; closing modal does not cancel the request. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, low, rbac, security |

### IWC-TC-167 — Close Word History panel by clicking overlay backdrop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Low |
| Preconditions | Active ignore word exists |
| Test Data | Word: limited |
| Steps | 1. Log in as authorised user. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Click an ignore word link to open Word History. 4. Click overlay to the left of the history panel. |
| Acceptance Criteria | Overlay click dismisses history side panel |
| Expected Result | Word History panel closes and listing page is fully interactive again. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, low, word-history |

### IWC-TC-168 — Upload bulk file using drag and drop

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Valid CSV bulk file prepared with 2 ignore words |
| Test Data | File: ignore_words_bulk.csv (2 rows) |
| Steps | 1. Log in as Maker. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Open Bulk Upload. 4. Drag CSV file onto the upload drop zone. 5. Confirm file name appears in selected file row. |
| Acceptance Criteria | Drag-and-drop selects file for bulk upload |
| Expected Result | Drop zone accepts the file. Selected file row shows file name and size. Upload button becomes available. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-169 — Verify drop zone highlights on drag-over

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | Low |
| Preconditions | Bulk Upload modal open |
| Test Data | File: any valid CSV |
| Steps | 1. Open Bulk Upload modal. 2. Drag a file over the drop zone without releasing. 3. Observe drop zone styling. 4. Release or move cursor away and observe reset. |
| Acceptance Criteria | Drag-over provides visual affordance on upload zone |
| Expected Result | Drop zone border and background change while file is dragged over it, then revert when drag leaves the zone. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, low, export |

### IWC-TC-170 — Export includes only records from the currently selected tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | High |
| Preconditions | Active and Inactive tabs each have distinct records |
| Test Data | Tabs compared: Active vs Inactive |
| Steps | 1. Select Inactive tab. 2. Click Export. 3. Open downloaded file and list Word/Phrase values. 4. Repeat export from Active tab. |
| Acceptance Criteria | Export scope matches active status tab filter |
| Expected Result | Inactive-tab export contains only inactive records. Active-tab export contains only active records. No cross-tab records appear in either file. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, high |

### IWC-TC-171 — Export drafted ignore words from Drafted tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Export |
| Priority | Medium |
| Preconditions | At least one drafted ignore word exists |
| Test Data | Tab: Drafted Ignore Word |
| Steps | 1. Select Drafted Ignore Word tab. 2. Click Export. 3. Open downloaded CSV. |
| Acceptance Criteria | Drafted tab data can be exported for review |
| Expected Result | CSV contains only drafted records with Status column showing Drafted (or equivalent). Maker-checker columns reflect pending approval state. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | export, medium |

### IWC-TC-172 — Reject category name exceeding 100 characters

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | High |
| Preconditions | Add Category modal is open. |
| Test Data | Category Name length: 101 characters |
| Steps | 1. Paste a 101-character category name. 2. Attempt to submit. |
| Acceptance Criteria | Category Name field enforces maximum length of 100 characters |
| Expected Result | Submission is blocked with length validation. Modal remains open. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, high, maker-checker |

### IWC-TC-173 — Reject category description exceeding 500 characters

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Category Management – Add Category |
| Priority | Medium |
| Preconditions | Add Category modal is open. |
| Test Data | Description length: 501 characters |
| Steps | 1. Enter valid category name: Regional Descriptors. 2. Paste a 501-character description. 3. Attempt to submit. |
| Acceptance Criteria | Category Description enforces maximum length of 500 characters |
| Expected Result | Description length validation blocks submission. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | category-management-add-category, medium, error-handling |

### IWC-TC-174 — Reject ignore word phrase exceeding 500 characters

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Phrase length: 501 characters |
| Steps | 1. Paste a 501-character phrase into Ignore Word/Phrase. 2. Complete other mandatory fields. 3. Click Submit. |
| Acceptance Criteria | Word/Phrase field enforces maximum length of 500 characters |
| Expected Result | Maximum length validation blocks submission. No checker request is created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, error-handling |

### IWC-TC-175 — Reject whitespace-only ignore word phrase

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | High |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Input: '     ' (spaces only) |
| Steps | 1. Enter whitespace-only value in Ignore Word/Phrase. 2. Attempt Save Draft or Submit. |
| Acceptance Criteria | Mandatory Word/Phrase cannot be blank or spaces only |
| Expected Result | Whitespace-only input is rejected as invalid. Mandatory field validation prevents save. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, high, maker-checker |

### IWC-TC-176 — Reject empty bulk upload file

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Empty CSV file prepared |
| Test Data | File: empty.csv (0 bytes or headers only) |
| Steps | 1. Log in as Maker. 2. Open Bulk Upload. 3. Select Category. 4. Attach empty CSV file. 5. Click Upload. |
| Acceptance Criteria | Zero-byte or header-only file cannot be uploaded |
| Expected Result | Upload is rejected with validation message indicating file contains no data rows. No draft records are created. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high, export |

### IWC-TC-178 — Reject bulk upload when All Categories is selected

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Bulk Upload |
| Priority | High |
| Preconditions | Bulk Upload modal is open. |
| Test Data | Category: All Categories |
| Steps | 1. Select Category: All Categories. 2. Attach a valid CSV file. 3. Attempt Upload. |
| Acceptance Criteria | Bulk upload requires a specific target category |
| Expected Result | Upload is blocked. A specific target category must be selected before bulk import proceeds. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | bulk-upload, high |

### IWC-TC-179 — Confirm discard when cancelling Add Ignore Word with populated fields

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Add Ignore Word panel has populated fields. |
| Test Data | Populated word: temporary test word |
| Steps | 1. Click Cancel. 2. If confirmation prompt appears, confirm discard. |
| Acceptance Criteria | Cancel prompts confirmation when form has data |
| Expected Result | Confirmation prompt appears when discarding populated form. On confirm, panel closes and no record is saved. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, functional |

### IWC-TC-180 — Partial match highlights substring within token in preview

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel open with Partial match selected. |
| Test Data | Word: bank Match Type: Partial match |
| Steps | 1. Enter Word: bank. 2. Paste narrative: Eurobank international transfer. 3. Review Preview highlighting. |
| Acceptance Criteria | Partial match mode strips ignore word found inside a token |
| Expected Result | Preview highlights 'bank' substring inside 'Eurobank'. Confirms partial-match preview behaviour. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-181 — Exact phrase does not match substring within longer token

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | High |
| Preconditions | Add Ignore Word panel open with Exact phrase selected. |
| Test Data | Word: bank Match Type: Exact phrase |
| Steps | 1. Enter Word: bank. 2. Paste narrative: Eurobank international transfer. 3. Review Preview. |
| Acceptance Criteria | Exact match mode requires whole-token equality |
| Expected Result | Exact phrase does not highlight 'bank' inside 'Eurobank'. Standalone token 'bank' would match if present. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, high, functional |

### IWC-TC-182 — Prevent editing ignore word while pending checker approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Ignore word is in Pending Approval state after maker submit. |
| Test Data | Status: Pending Approval |
| Steps | 1. Attempt to edit the pending record from listing or add panel. |
| Acceptance Criteria | Pending records are locked from further maker edits |
| Expected Result | Record is locked from edits until checker approves or rejects. Maker must wait for checker decision or rejection before revising. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-184 — Duplicate ignore word shows inline validation not browser alert

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Field & Business Rule Validation |
| Priority | Medium |
| Preconditions | Duplicate active word exists. |
| Test Data | Existing: corp |
| Steps | 1. Attempt to add duplicate word through Add panel. 2. Observe validation presentation. |
| Acceptance Criteria | Duplicate errors display as inline field or form validation |
| Expected Result | Duplicate is shown via inline field validation, not a browser alert dialog. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | field-business-rule-validation, medium, browser-compat |

### IWC-TC-185 — Verify core workflows on Google Chrome

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression & Compatibility |
| Priority | Medium |
| Preconditions | Google Chrome browser available |
| Test Data | Browser: Google Chrome (latest) |
| Steps | 1. Log in as Maker using Chrome. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Execute: add draft word, search, switch tab, export. 4. Verify no layout breakage. |
| Acceptance Criteria | Module functions on Chrome latest stable |
| Expected Result | All core actions complete without UI defects or console errors on Chrome. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility, medium, browser-compat |

### IWC-TC-186 — Verify core workflows on Microsoft Edge

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression & Compatibility |
| Priority | Medium |
| Preconditions | Microsoft Edge browser available |
| Test Data | Browser: Microsoft Edge (latest) |
| Steps | 1. Log in as Maker using Edge. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Execute: open Add Category, open Bulk Upload, view history. 4. Verify modals and panels render correctly. |
| Acceptance Criteria | Module functions on Edge latest stable |
| Expected Result | Modals, side panels, and table render correctly. No Edge-specific layout or script errors. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility, medium, browser-compat |

### IWC-TC-187 — Verify core workflows on Mozilla Firefox

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression & Compatibility |
| Priority | Medium |
| Preconditions | Mozilla Firefox browser available |
| Test Data | Browser: Mozilla Firefox (latest) |
| Steps | 1. Log in as Maker using Firefox. 2. Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. 3. Execute tab switch, sort column, disable active word. 4. Verify checker modal appears. |
| Acceptance Criteria | Module functions on Firefox latest stable |
| Expected Result | Tab switching, sorting, and maker-checker modal work on Firefox without functional regression. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility, medium, browser-compat |

### IWC-TC-188 — Navigate toolbar buttons using keyboard Tab key

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | User on Ignore Words listing page |
| Test Data | Input: Keyboard Tab navigation |
| Steps | 1. Press Tab repeatedly from top of page. 2. Verify focus moves through Search, Export, Category Controls, Add Category, Bulk Upload, Add Ignore Word. |
| Acceptance Criteria | Toolbar controls are reachable via keyboard |
| Expected Result | Each toolbar button receives visible focus in logical order and can be activated with Enter or Space. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### IWC-TC-189 — Verify visible keyboard focus indicator on interactive controls

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Low |
| Preconditions | User on Ignore Words listing page |
| Test Data | Input: Keyboard navigation |
| Steps | 1. Tab to Search field and toolbar buttons. 2. Observe focus styling on each control. |
| Acceptance Criteria | Focused elements show discernible focus ring or outline |
| Expected Result | Focused control shows visible focus indicator meeting contrast requirements. User can identify which control is active. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, low |

### IWC-TC-190 — Close Add Category modal using Escape key

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Accessibility |
| Priority | Medium |
| Preconditions | Add Category modal is open. |
| Test Data | Keyboard action: Escape |
| Steps | 1. Press the Escape key. |
| Acceptance Criteria | Modal supports keyboard dismissal |
| Expected Result | Modal closes without saving. Focus returns to the listing page. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | accessibility, medium |

### IWC-TC-191 — Sanitize script tags entered in ignore word phrase field

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Security Validation |
| Priority | High |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Malicious input: <script>alert('xss')</script> |
| Steps | 1. Enter script payload in Ignore Word/Phrase: <script>alert('xss')</script>. 2. Save Draft or attempt Submit. 3. Reopen record and inspect rendered value. |
| Acceptance Criteria | Malicious script input is not executed in the UI |
| Expected Result | Input is sanitised or rejected. Script does not execute in panel, listing, or history views. Stored value is safe for display. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | security-validation, high, functional |

### IWC-TC-192 — End-to-end regression: bulk upload then export active tab

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression & Compatibility |
| Priority | High |
| Preconditions | Valid bulk CSV with two new unique words prepared. |
| Test Data | Bulk words: sa, bv Browser: Google Chrome (latest) |
| Steps | 1. As Maker, bulk upload two words and submit for approval. 2. As Checker, approve the bulk request. 3. On Active tab, export records. 4. Open export file and locate the two approved words. |
| Acceptance Criteria | Bulk upload and export workflow completes without defect |
| Expected Result | Imported words progress from bulk upload through checker approval to Active status. Export file lists both approved words with complete metadata. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility, high, export |

### IWC-TC-193 — Regression: no console errors during add-submit-approve-disable cycle

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Regression & Compatibility |
| Priority | Medium |
| Preconditions | Maker and Checker test accounts available |
| Test Data | Lifecycle: create → approve → disable |
| Steps | 1. Log in as Maker with console open. 2. Add and submit word. 3. Log in as Checker and approve. 4. Log in as Maker and disable word. 5. Review console throughout. |
| Acceptance Criteria | Full lifecycle workflow runs without frontend errors |
| Expected Result | No JavaScript errors logged during the complete maker-checker lifecycle workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | regression-compatibility, medium, error-handling |

### IWC-TC-194 — UAT: Maker creates ignore word and Checker approves to Active

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UAT Scenarios |
| Priority | High |
| Preconditions | Clean test environment or unique word available. |
| Test Data | Word: SA Category: Entity Suffixes UAT users: Maker + Checker |
| Steps | 1. As Maker, add ignore word SA under Entity Suffixes (Low, Exact phrase) and Submit. 2. As Checker, approve the submission. 3. Confirm word appears on Active tab. 4. Run a sample screening narrative containing 'SA' to confirm suppression after approval. |
| Acceptance Criteria | Business users complete standard onboarding of a new ignore word |
| Expected Result | End-to-end UAT completes: draft/submit → checker approval → active listing → word excluded from screening token comparison. |
| Automation Candidate | Yes |
| Automation Layer | UI + Manual |
| Tags | uat-scenarios, high, rbac, security |

### IWC-TC-195 — UAT: Active disable and re-enable lifecycle without permanent delete

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | UAT Scenarios |
| Priority | High |
| Preconditions | Active word 'enterprises' exists. |
| Test Data | Word: enterprises |
| Steps | 1. As Maker, Disable 'enterprises' and complete checker approval. 2. Verify word on Inactive tab. 3. As Maker, Enable 'enterprises' and complete checker approval. 4. Confirm word returns to Active tab. 5. Verify no delete option existed at any stage. |
| Acceptance Criteria | Compliance team can temporarily deactivate and reactivate an ignore word |
| Expected Result | Full disable → inactive → enable → active lifecycle completes through maker-checker governance. Record persists throughout; permanent delete is never offered. |
| Automation Candidate | Yes |
| Automation Layer | UI + Manual |
| Tags | uat-scenarios, high, functional |

### IWC-TC-196 — Open Word History by clicking ignore word hyperlink in table

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Audit History |
| Priority | Medium |
| Preconditions | Active ignore word 'ltd' exists with history entries. |
| Test Data | Word: ltd |
| Steps | 1. On Active tab, click the 'ltd' hyperlink in the Ignore Word/Phrase column. 2. Verify Word History panel opens. |
| Acceptance Criteria | Users can access audit trail from the listing row |
| Expected Result | Clicking the word link opens Word History without using a separate menu. Panel shows metadata and activity timeline for that record. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | audit-history, medium, word-history |

### IWC-TC-197 — Submit multi-word phrase ignore word for checker approval

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Add Ignore Word |
| Priority | High |
| Preconditions | Phrase 'private limited' does not already exist as an active entry. |
| Test Data | Phrase: private limited Category: Entity Suffixes |
| Steps | 1. Open Add Ignore Word. 2. Enter Ignore Word/Phrase: private limited. 3. Set Category: Entity Suffixes, Risk: Low, Match Type: Exact phrase. 4. Paste narrative: ABC private limited trading account. 5. Submit for checker approval. |
| Acceptance Criteria | Multi-token phrases are supported as a single ignore entry |
| Expected Result | Multi-word phrase is accepted and submitted. Preview highlights the full phrase in narrative. After checker approval, phrase is stripped as a unit during screening. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | add-ignore-word, high, rbac, security |

### IWC-TC-198 — Checker rejection returns ignore word to Drafted tab with comments

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Maker-Checker Workflow |
| Priority | High |
| Preconditions | Maker submitted new word 'microfinance' pending checker approval. |
| Test Data | Word: microfinance Rejection comment: Too broad for current policy |
| Steps | 1. As Checker, reject the submission with comment: Too broad for current policy. 2. As Maker, open Drafted Ignore Word tab. 3. Open Word History for the record. |
| Acceptance Criteria | Rejected entries re-enter draft state for maker revision |
| Expected Result | Record returns to Drafted status. Maker can edit and resubmit. Rejection comment is visible in history and checker workflow. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | maker-checker-workflow, high, rbac, security |

### IWC-TC-199 — Normalise punctuation and hyphens before exact phrase matching in preview

| Field | Value |
| --- | --- |
| Module | Ignore Words Configuration |
| Feature | Live Narrative Tester |
| Priority | Medium |
| Preconditions | Add Ignore Word panel is open. |
| Test Data | Word: co-op Narrative: Payment to CO OP branch |
| Steps | 1. Enter Word: co-op with Match Type: Exact phrase. 2. Paste narrative: Payment to CO OP branch. 3. Review Preview highlighting. |
| Acceptance Criteria | Special characters are normalised consistently with screening pipeline |
| Expected Result | Preview applies normalisation (punctuation/hyphen handling) before match evaluation. Matching behaviour aligns with screening engine token normalisation rules. |
| Automation Candidate | Yes |
| Automation Layer | UI |
| Tags | live-narrative-tester, medium, functional |
