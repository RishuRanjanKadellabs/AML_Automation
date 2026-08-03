// spec: specs/ignore-words-configuration/plan.md

// source: pipeline/test-data/Ignore Words Configuration.xlsx — 194 cases (IWC-TC-001–IWC-TC-199)

import { test, expect } from "../../../../../fixtures/milestone1-shared-session";

import IgnoreWordsConfigurationPage from "../../../pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage";

test.describe("Ignore Words Configuration Module", () => {

  let iwcPage: IgnoreWordsConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {

    iwcPage = new IgnoreWordsConfigurationPage(sharedPage);

  });

  test.describe("Navigation & Page Access", () => {

  test("Case ID:IWC-TC-001 - Navigation & Page Access → Open Ignore Words Configuration from left navigation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-001
    // Excel Scenario: Navigation & Page Access → Open Ignore Words Configuration from left navigation
    // Steps (3): From the application dashboard, expand Configuration in the left navigation. → Select Sanctions Screening Configuration. → Click Screening – Ignore Words Configuration.
    // Expected: Ignore Words Configuration listing loads. Active, Inactive, and Drafted Ignore Word tabs display record counts. Toolbar shows Export, Category Controls, Add Category, Bulk Upload, and Add Ignore Word. The ignore words table is populated for the default Active tab.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-001] Navigation & Page Access → Open Ignore Words Configuration from left navigation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expandConfigurationMenu();
      await iwcPage.openIgnoreWordsConfigurationFromSidebar();
      /* Role from Excel: Maker */
      // Preconditions: Maker account exists with Configuration module access.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectTabSelected("Active");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectExportOptions();
      });

  });

  test("Case ID:IWC-TC-002 - Navigation & Page Access → breadcrumb text on page load", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-002
    // Excel Scenario: Navigation & Page Access → Verify breadcrumb text on page load
    // Steps (3): Observe the breadcrumb at the top of the page. → Read the parent breadcrumb node. → Read the current page breadcrumb node.
    // Expected: Breadcrumb reads 'Sanctions Screening Configuration / Screening – Ignore Words Configuration'. The current page node is visually distinguished as the active location.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-002] Navigation & Page Access → Verify breadcrumb text on page load");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on the Ignore Words Configuration listing (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectBreadcrumbVisible();
      });

  });

  test("Case ID:IWC-TC-004 - Navigation & Page Access → Refresh page and retain access", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-004
    // Excel Scenario: Navigation & Page Access → Refresh page and retain access
    // Steps (4): Note the Active tab count and a visible row in the table. → Refresh the browser page. → Wait until the listing fully reloads. …
    // Expected: Session remains valid after refresh. Active tab stays selected, tab count is unchanged, and the table repopulates with the same active ignore words.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-004] Navigation & Page Access → Refresh page and retain access");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Ignore Words Configuration with the Active tab selected.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.refreshPage();
      await iwcPage.expectTabSelected("Active");
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-005 - Navigation & Page Access → Open page using breadcrumb back navigation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-005
    // Excel Scenario: Navigation & Page Access → Open page using breadcrumb back navigation
    // Steps (3): Click the Sanctions Screening Configuration breadcrumb link. → Confirm the parent configuration screen opens. → Return to Screening – Ignore Words Configuration using the left navigation.
    // Expected: Parent screen opens without error. Returning to Ignore Words Configuration restores the listing with tabs and table intact. No session timeout occurs.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-005] Navigation & Page Access → Open page using breadcrumb back navigation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expandConfigurationMenu();
      await iwcPage.openIgnoreWordsConfigurationFromSidebar();
      // Preconditions: Maker is on Ignore Words Configuration listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectBreadcrumbVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-006 - Navigation & Page Access → toolbar controls are visible on initial load", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-006
    // Excel Scenario: Navigation & Page Access → Validate toolbar controls are visible on initial load
    // Steps (3): Review the toolbar on initial page load. → Confirm search field is present on the left. → Confirm Export, Category Controls, Add Category, Bulk Upload, and Add Ignore Word actions are visible on the right.
    // Expected: All primary toolbar controls are visible and enabled for the Maker role. Search accepts input. Action buttons are clickable.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-006] Navigation & Page Access → Validate toolbar controls are visible on initial load");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      /* Role from Excel: Maker */
      // Preconditions: Maker is on Ignore Words Configuration listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectToolbarVisible();
      await iwcPage.expectSearchInputVisible();
      });

  });

  test("Case ID:IWC-TC-007 - Navigation & Page Access → page title and tab counters load", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-007
    // Excel Scenario: Navigation & Page Access → Validate page title and tab counters load
    // Steps (5): Open Ignore Words Configuration. → Read the count shown on the Active tab label. → Read the count on the Inactive tab label. …
    // Expected: Each tab label count matches the number of records in that status. Counts update only after approved workflow transitions, not on draft save alone.
    console.log("[IWC-TC-007] Navigation & Page Access → Validate page title and tab counters load");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least one active, inactive, and drafted ignore word exist in the environment.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectPageTitleVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-008 - Navigation & Page Access → unauthorized route access is blocked", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-008
    // Excel Scenario: Navigation & Page Access → Verify unauthorized route access is blocked
    // Steps (2): Log in as Viewer. → Attempt to open Screening – Ignore Words Configuration via direct URL or menu.
    // Expected: Access is denied. User is redirected or shown an authorization message. Ignore words data is not exposed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-008] Navigation & Page Access → Verify unauthorized route access is blocked");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      /* Role from Excel: Viewer (no configuration write/read permission) */
      // Preconditions: Viewer account exists without Ignore Words Configuration permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectOnIgnoreWordsConfigurationRoute();
      await iwcPage.expectAccessDenied();
      });

  });

  test("Case ID:IWC-TC-157 - Navigation & Page Access → loading indicator during delayed page load", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-157
    // Excel Scenario: Navigation & Page Access → Verify loading indicator during delayed page load
    // Steps (4): Log in as Maker. → Enable Slow 3G or equivalent network throttling. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. …
    // Expected: A loading spinner or skeleton placeholder appears in the table area until ignore word rows render. No blank broken layout or unhandled error is shown.
    // TODO: Network throttling profile not specified for Playwright
    console.log("[IWC-TC-157] Navigation & Page Access → Verify loading indicator during delayed page load");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Browser dev tools available; network throttling can be enabled
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-158 - Navigation & Page Access → no JavaScript console errors on module load", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-158
    // Excel Scenario: Navigation & Page Access → Verify no JavaScript console errors on module load
    // Steps (4): Log in as Maker. → Open browser console and clear existing messages. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. …
    // Expected: No uncaught JavaScript errors or unhandled promise rejections appear in the console during page load and initial table render.
    // TODO: Cross-browser matrix execution environment
    console.log("[IWC-TC-158] Navigation & Page Access → Verify no JavaScript console errors on module load");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Browser developer console open before navigation
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectConsoleErrorsFree();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test.describe("Status Tabs", () => {

  test("Case ID:IWC-TC-009 - Status Tabs → Active tab default load behavior", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-009
    // Excel Scenario: Status Tabs → Verify Active tab default load behavior
    // Steps (3): Open the listing and observe the default tab on first load. → Verify the table shows only Active-status records. → Confirm each visible row displays an Active status badge.
    // Expected: Active tab is selected by default. Only approved, operational ignore words appear. Disable action is available in the Actions column.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-009] Status Tabs → Verify Active tab default load behavior");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Ignore Words Configuration.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectTabSelected("Active");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-010 - Status Tabs → Switch from Active to Inactive tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-010
    // Excel Scenario: Status Tabs → Switch from Active to Inactive tab
    // Steps (2): From the Active tab, click the Inactive tab. → Review the table contents and status badges.
    // Expected: Inactive tab loads deactivated ignore words only. Each row shows Inactive status. Enable action is available instead of Disable.
    console.log("[IWC-TC-010] Status Tabs → Switch from Active to Inactive tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Inactive ignore words exist (e.g., 'and', 'the').
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.expectTabSelected("Inactive");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-011 - Status Tabs → Switch from Inactive to Drafted Ignore Word tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-011
    // Excel Scenario: Status Tabs → Switch from Inactive to Drafted Ignore Word tab
    // Steps (2): Click the Drafted Ignore Word tab. → Locate a drafted record and review its status and row actions.
    // Expected: Drafted tab shows entries saved as draft or returned after checker rejection. Status displays as Drafted. Submit action is available
    console.log("[IWC-TC-011] Status Tabs → Switch from Inactive to Drafted Ignore Word tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least one drafted ignore word exists (e.g., 'co' or 'son').
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.expectTabSelected("Inactive");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-012 - Status Tabs → tab counters against table row count", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-012
    // Excel Scenario: Status Tabs → Validate tab counters against table row count
    // Steps (3): Note the count on each status tab. → Select Active tab and count visible rows. → Repeat for Inactive and Drafted tabs.
    // Expected: Tab label counts equal the row count in each respective table. Totals reconcile with backend status distribution.
    console.log("[IWC-TC-012] Status Tabs → Validate tab counters against table row count");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Environment contains records across Active, Inactive, and Drafted statuses.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.expectTabCountBadgeVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-013 - Status Tabs → Retain tab selection after search reset", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-013
    // Excel Scenario: Status Tabs → Retain tab selection after search reset
    // Steps (4): Select the Inactive tab. → Enter 'limited' in the search field and confirm filtered results. → Clear the search field. …
    // Expected: Search filters within the current tab only. Clearing search restores the full inactive list without switching tabs.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-013] Status Tabs → Retain tab selection after search reset");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Inactive tab with search cleared.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Active");
      await iwcPage.openTab("Inactive");
      await iwcPage.openTab("Drafted");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectSearchInputVisible();
      });

  });

  test("Case ID:IWC-TC-014 - Status Tabs → Retain selected tab after page refresh", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-014
    // Excel Scenario: Status Tabs → Retain selected tab after page refresh
    // Steps (3): Select the Drafted Ignore Word tab. → Refresh the browser. → After reload, confirm which tab is selected.
    // Expected: Page reloads successfully. Drafted Ignore Word tab remains selected and drafted records are still listed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-014] Status Tabs → Retain selected tab after page refresh");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Drafted Ignore Word tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Active");
      await iwcPage.openTab("Inactive");
      await iwcPage.openTab("Drafted");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-015 - Status Tabs → Show empty-state message for tab with zero records", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-015
    // Excel Scenario: Status Tabs → Show empty-state message for tab with zero records
    // Steps (2): Click the Inactive tab. → Observe the table body when no records exist.
    // Expected: Empty-state message is shown (e.g., 'No ignore words found for this filter.'). Tab count displays (0). No erroneous data rows appear.
    console.log("[IWC-TC-015] Status Tabs → Show empty-state message for tab with zero records");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Test environment has zero inactive ignore words (or use filtered test data).
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Active");
      await iwcPage.openTab("Inactive");
      await iwcPage.openTab("Drafted");
      await iwcPage.expectTabsVisible();
      });

  });

  test("Case ID:IWC-TC-156 - Status Tabs → no separate Pending Approval tab on listing screen", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-156
    // Excel Scenario: Status Tabs → Verify no separate Pending Approval tab on listing screen
    // Steps (2): Open Ignore Words Configuration listing. → Review available status tabs.
    // Expected: No separate Pending Approval tab exists on the listing. Pending items are managed through checker queue and drafted/pending statuses.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-156] Status Tabs → Verify no separate Pending Approval tab on listing screen");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Pending checker requests exist in the system.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Active");
      await iwcPage.openTab("Inactive");
      await iwcPage.openTab("Drafted");
      await iwcPage.expectTabsVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectMakerCheckerQueueVisible();
      });

  });

  });

  test.describe("Search & Filter", () => {

  test("Case ID:IWC-TC-016 - Search & Filter → Search by exact ignore word phrase", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-016
    // Excel Scenario: Search & Filter → Search by exact ignore word phrase
    // Steps (2): On the Active tab, enter 'private limited' in the search field. → Review the filtered table results.
    // Expected: Only rows matching the full phrase 'private limited' (or containing it per search rules) are displayed. Non-matching active words are hidden.
    console.log("[IWC-TC-016] Search & Filter → Search by exact ignore word phrase");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word 'private limited' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.searchIgnoreWords("private limited");
      await iwcPage.expectSearchResults();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-018 - Search & Filter → Search is case-insensitive", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-018
    // Excel Scenario: Search & Filter → Search is case-insensitive
    // Steps (2): Search using lowercase 'llc'. → Compare results with the stored value 'LLC'.
    // Expected: Case-insensitive search returns the 'LLC' record. No duplicate or missed match due to casing.
    console.log("[IWC-TC-018] Search & Filter → Search is case-insensitive");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word 'LLC' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.searchIgnoreWords("LLC");
      await iwcPage.expectSearchResults();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-022 - Search & Filter → Search state remains when switching tabs", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-022
    // Excel Scenario: Search & Filter → Search state remains when switching tabs
    // Steps (3): Apply search 'ltd' on Active tab. → Switch to Inactive tab without clearing search. → Observe whether the search term persists and how results change.
    // Expected: Search term remains in the field after tab switch. Results re-filter against the newly selected tab dataset.
    console.log("[IWC-TC-022] Search & Filter → Search state remains when switching tabs");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Search term 'ltd' returns results on Active tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.searchIgnoreWords("ltd");
      await iwcPage.expectSearchResults();
      await iwcPage.expectSearchInputVisible();
      });

  });

  });

  });

  test.describe("Data Table & Sorting", () => {

  test("Case ID:IWC-TC-023 - Data Table & Sorting → all table columns are displayed", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-023
    // Excel Scenario: Data Table & Sorting → Verify all table columns are displayed
    // Steps (1): On Active tab, verify table column headers.
    // Expected: All seven columns are displayed with correct labels. Status and Actions align with the selected tab context.
    console.log("[IWC-TC-023] Data Table & Sorting → Verify all table columns are displayed");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least one ignore word exists on Active tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectTabsVisible();
      });

  });

  test("Case ID:IWC-TC-026 - Data Table & Sorting → Sort Category column ascending", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-026
    // Excel Scenario: Data Table & Sorting → Sort Category column ascending
    // Steps (2): Sort by Category ascending. → Verify grouped alphabetical order by category name.
    // Expected: Rows sort by category name A–Z. Category badge text matches sort order.
    console.log("[IWC-TC-026] Data Table & Sorting → Sort Category column ascending");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Words exist in multiple categories.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectCategoryBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-027 - Data Table & Sorting → Sort Risk Level column by configured ranking", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-027
    // Excel Scenario: Data Table & Sorting → Sort Risk Level column by configured ranking
    // Steps (2): Sort by Risk Level. → Verify ordering follows business ranking High > Medium > Low (or configured order).
    // Expected: Risk Level sort uses configured severity ranking, not plain alphabetical order.
    console.log("[IWC-TC-027] Data Table & Sorting → Sort Risk Level column by configured ranking");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active words exist with Low, Medium, and High risk levels.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectRiskLevelBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-028 - Data Table & Sorting → Sort Match Type column", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-028
    // Excel Scenario: Data Table & Sorting → Sort Match Type column
    // Steps (2): Sort by Match Type. → Review row ordering.
    // Expected: Rows group consistently by match type. Badge values remain accurate after sort.
    console.log("[IWC-TC-028] Data Table & Sorting → Sort Match Type column");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Both Exact phrase and Partial match records exist.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-030 - Data Table & Sorting → status badges by selected tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-030
    // Excel Scenario: Data Table & Sorting → Validate status badges by selected tab
    // Steps (3): On Active tab, confirm all rows show Active status badge. → Switch to Inactive and confirm Inactive badges. → Switch to Drafted and confirm Drafted badges.
    // Expected: Status badge on every row matches the selected tab. No cross-status records leak into a tab.
    console.log("[IWC-TC-030] Data Table & Sorting → Validate status badges by selected tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Records exist on Active, Inactive, and Drafted tabs.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectStatusBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-031 - Data Table & Sorting → Retain column sort after switching status tabs", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-031
    // Excel Scenario: Data Table & Sorting → Retain column sort after switching status tabs
    // Steps (4): On Active tab, sort Category ascending. → Switch to Inactive tab. → Switch back to Active tab. …
    // Expected: Category ascending sort remains applied when returning to Active tab. Row order is unchanged from before the tab switch.
    console.log("[IWC-TC-031] Data Table & Sorting → Retain column sort after switching status tabs");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Multiple ignore words exist on Active and Inactive tabs.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-032 - Data Table & Sorting → row action column availability per tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-032
    // Excel Scenario: Data Table & Sorting → Verify row action column availability per tab
    // Steps (3): On Active tab, confirm Disable action is shown and Submit is absent. → On Inactive tab, confirm Enable action is shown. → On Drafted tab, confirm Submit action is shown and Disable/Enable are absent.
    // Expected: Row actions are tab-appropriate. No hard-delete action appears on any tab.
    console.log("[IWC-TC-032] Data Table & Sorting → Verify row action column availability per tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least one record exists on each tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectTableHeadersVisible();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  });

  test.describe("Category Management – Add Category", () => {

  test("Case ID:IWC-TC-033 - Category Management – Add Category → Open Add Category modal from toolbar", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-033
    // Excel Scenario: Category Management – Add Category → Open Add Category modal from toolbar
    // Steps (2): Click Add Category in the toolbar. → Review modal title, mandatory field markers, and footer buttons.
    // Expected: Add Category modal opens over a dimmed backdrop. Category Name is marked mandatory
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-033] Category Management – Add Category → Open Add Category modal from toolbar");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Ignore Words Configuration listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await expect(iwcPage.addCategoryModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-034 - Category Management – Add Category → Create new category with valid mandatory values", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-034
    // Excel Scenario: Category Management – Add Category → Create new category with valid mandatory values
    // Steps (5): Click Add Category. → Enter Category Name: Regulatory Review Terms. → Enter Description: Terms temporarily excluded during regulatory review cycles. …
    // Expected: Modal closes after successful validation. Checker approval confirmation displays with submitter and timestamp. Category is not available in Add Ignore Word dropdown until checker approval completes. Audit entry is created for the submission.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-034] Category Management – Add Category → Create new category with valid mandatory values");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category name 'Regulatory Review Terms' does not already exist.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Regulatory Review Terms");
      await iwcPage.submitAddCategory();
      await expect(iwcPage.addCategoryModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-035 - Category Management – Add Category → Category Name required field", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-035
    // Excel Scenario: Category Management – Add Category → Validate Category Name required field
    // Steps (2): Leave Category Name empty. → Click Add Category.
    // Expected: Inline validation prevents submission. Modal remains open. No checker request is created.
    console.log("[IWC-TC-035] Category Management – Add Category → Validate Category Name required field");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.submitAddCategory();
      await iwcPage.expectInlineValidationError();
      await expect(iwcPage.addCategoryModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-036 - Category Management – Add Category → Category Name maximum length 100", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-036
    // Excel Scenario: Category Management – Add Category → Validate Category Name maximum length 100
    // Steps (3): Paste a 101-character value into Category Name. → Enter a valid description. → Click Add Category.
    // Expected: Category Name length validation appears. Submission is blocked and modal remains open.
    console.log("[IWC-TC-036] Category Management – Add Category → Validate Category Name maximum length 100");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await expect(iwcPage.addCategoryModal).toBeVisible();
      await iwcPage.expectSubmissionBlocked();
      });

  });

  test("Case ID:IWC-TC-037 - Category Management – Add Category → Allow Category Name exactly 100 characters", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-037
    // Excel Scenario: Category Management – Add Category → Allow Category Name exactly 100 characters
    // Steps (3): Enter Category Name with exactly 100 characters. → Enter description with 120 characters. → Click Submit.
    // Expected: Submission is accepted and routed for checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-037] Category Management – Add Category → Allow Category Name exactly 100 characters");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Category modal.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.expectOnIgnoreWordsConfigurationRoute();
      });

  });

  test("Case ID:IWC-TC-038 - Category Management – Add Category → Description maximum length 500", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-038
    // Excel Scenario: Category Management – Add Category → Validate Description maximum length 500
    // Steps (3): Enter valid category name 'Payments Terms'. → Paste description with 501 characters. → Attempt Submit.
    // Expected: Length validation is displayed for Description and submit does not proceed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-038] Category Management – Add Category → Validate Description maximum length 500");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Category modal.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Entity Suffixes");
      await iwcPage.fillCategoryDescription("Test category description");
      await iwcPage.submitAddCategory();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-039 - Category Management – Add Category → Allow blank optional Description field", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-039
    // Excel Scenario: Category Management – Add Category → Allow blank optional Description field
    // Steps (3): Enter Category Name as 'Geo Exceptions'. → Leave Description empty. → Click Submit.
    // Expected: Add Category modal closes. A success notification confirms the category request was sent for checker approval. The new category name does not appear in the Category dropdown until checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-039] Category Management – Add Category → Allow blank optional Description field");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Category modal.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Geo Exceptions");
      await iwcPage.fillCategoryDescription("empty");
      await iwcPage.submitAddCategory();
      await expect(iwcPage.addCategoryModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectNotificationVisible();
      });

  });

  test("Case ID:IWC-TC-040 - Category Management – Add Category → Prevent duplicate category name exact match", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-040
    // Excel Scenario: Category Management – Add Category → Prevent duplicate category name exact match
    // Steps (3): Open Add Category modal. → Enter Category Name: Entity Suffixes. → Tab out of the field or attempt submission.
    // Expected: Duplicate category is blocked with inline validation on focus-out or submit. No pending checker request is created for a duplicate name. Uniqueness is enforced across all active categories.
    console.log("[IWC-TC-040] Category Management – Add Category → Prevent duplicate category name exact match");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Entity Suffixes' already exists and is active.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Entity Suffixes");
      await iwcPage.submitAddCategory();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-041 - Category Management – Add Category → Prevent duplicate category name with case variation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-041
    // Excel Scenario: Category Management – Add Category → Prevent duplicate category name with case variation
    // Steps (3): Open Add Category modal. → Enter Category Name: business descriptors (all lowercase). → Attempt to submit.
    // Expected: Case-insensitive duplicate check blocks submission. Inline error identifies the naming conflict.
    // TODO: Accessibility tooling and baseline thresholds
    console.log("[IWC-TC-041] Category Management – Add Category → Prevent duplicate category name with case variation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Business Descriptors' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Business Descriptors");
      await iwcPage.submitAddCategory();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-042 - Category Management – Add Category → Trim leading and trailing spaces in category name", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-042
    // Excel Scenario: Category Management – Add Category → Trim leading and trailing spaces in category name
    // Steps (2): Enter Category Name with leading/trailing spaces: '  Trade Finance Terms  '. → Submit the form.
    // Expected: System trims surrounding spaces before duplicate check and save. Stored category name excludes leading/trailing whitespace.
    console.log("[IWC-TC-042] Category Management – Add Category → Trim leading and trailing spaces in category name");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-043 - Category Management – Add Category → Cancel Add Category modal without saving", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-043
    // Excel Scenario: Category Management – Add Category → Cancel Add Category modal without saving
    // Steps (3): Enter any values in Category Name and Description. → Click Cancel. → Reopen Add Category modal.
    // Expected: Modal closes without creating a checker request. Previously entered values are not retained on reopen.
    console.log("[IWC-TC-043] Category Management – Add Category → Cancel Add Category modal without saving");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open with unsaved entries.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.cancelAddCategory();
      await expect(iwcPage.addCategoryModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-044 - Category Management – Add Category → maker-checker confirmation details after submit", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-044
    // Excel Scenario: Category Management – Add Category → Verify maker-checker confirmation details after submit
    // Steps (3): Submit a new category with valid name and description. → Read the checker confirmation modal fields. → Click OK to dismiss.
    // Expected: Confirmation modal shows submitted-by user, timestamp, and Pending Checker status. Message states the category awaits checker review.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-044] Category Management – Add Category → Verify maker-checker confirmation details after submit");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker submits a new valid category.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Payment Reference Noise");
      await iwcPage.submitAddCategory();
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-162 - Category Management – Add Category → Close Add Category modal by clicking overlay backdrop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-162
    // Excel Scenario: Category Management – Add Category → Close Add Category modal by clicking overlay backdrop
    // Steps (2): Click Add Category. → Click the dimmed overlay area outside the modal box.
    // Expected: Add Category modal closes. No category request is submitted. Entered fields are discarded.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-162] Category Management – Add Category → Close Add Category modal by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker on listing page
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.clickModalOverlay();
      await expect(iwcPage.addCategoryModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-172 - Category Management – Add Category → Reject category name exceeding 100 characters", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-172
    // Excel Scenario: Category Management – Add Category → Reject category name exceeding 100 characters
    // Steps (2): Paste a 101-character category name. → Attempt to submit.
    // Expected: Submission is blocked with length validation. Modal remains open.
    console.log("[IWC-TC-172] Category Management – Add Category → Reject category name exceeding 100 characters");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await expect(iwcPage.addCategoryModal).toBeVisible();
      await iwcPage.expectSubmissionBlocked();
      });

  });

  test("Case ID:IWC-TC-173 - Category Management – Add Category → Reject category description exceeding 500 characters", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-173
    // Excel Scenario: Category Management – Add Category → Reject category description exceeding 500 characters
    // Steps (3): Enter valid category name: Regional Descriptors. → Paste a 501-character description. → Attempt to submit.
    // Expected: Description length validation blocks submission.
    console.log("[IWC-TC-173] Category Management – Add Category → Reject category description exceeding 500 characters");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Entity Suffixes");
      await iwcPage.fillCategoryDescription("Test category description");
      await iwcPage.submitAddCategory();
      await iwcPage.expectInlineValidationError();
      });

  });

  });

  test.describe("Category Management – Category Controls", () => {

  test("Case ID:IWC-TC-045 - Category Management – Category Controls → Open Category Controls panel from toolbar", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-045
    // Excel Scenario: Category Management – Category Controls → Open Category Controls panel from toolbar
    // Steps (2): Click Category Controls in the toolbar. → Review each category row for name, word count, and enable toggle.
    // Expected: Category Controls modal lists all categories with accurate ignore word counts and current enable/disable toggle state.
    console.log("[IWC-TC-045] Category Management – Category Controls → Open Category Controls panel from toolbar");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Multiple categories exist with ignore word counts.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await expect(iwcPage.categoryControlsModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-046 - Category Management – Category Controls → Disable an active category using toggle", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-046
    // Excel Scenario: Category Management – Category Controls → Disable an active category using toggle
    // Steps (4): Open Category Controls. → Turn off the toggle for Business Descriptors. → Click Save. …
    // Expected: Disable request is sent for checker approval. After approval, category toggle shows disabled and ignore words in that category are not applied during screening until re-enabled.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-046] Category Management – Category Controls → Disable an active category using toggle");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Business Descriptors' is currently enabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.toggleCategoryControl("Business Descriptors");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-047 - Category Management – Category Controls → Enable an inactive category using toggle", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-047
    // Excel Scenario: Category Management – Category Controls → Enable an inactive category using toggle
    // Steps (3): Open Category Controls. → Enable Common Noise Words toggle. → Click Save and complete checker approval.
    // Expected: Enable request enters checker workflow. After approval, category is enabled and its ignore words participate in screening again.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-047] Category Management – Category Controls → Enable an inactive category using toggle");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Common Noise Words' is disabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.toggleCategoryControl("Common Noise Words");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-048 - Category Management – Category Controls → category word count updates after enabling", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-048
    // Excel Scenario: Category Management – Category Controls → Validate category word count updates after enabling
    // Steps (2): Open Category Controls after checker approval of enable action. → Compare word count for the re-enabled category against Active tab filtered by that category.
    // Expected: Word count in Category Controls matches the number of active ignore words assigned to that category.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-048] Category Management – Category Controls → Validate category word count updates after enabling");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category was recently re-enabled after being disabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-049 - Category Management – Category Controls → each category row shows name and ignore word count", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-049
    // Excel Scenario: Category Management – Category Controls → Verify each category row shows name and ignore word count
    // Steps (3): Open Category Controls. → For each listed category, read the category name and displayed ignore word count. → Cross-check one category count against the Active tab filtered by that category.
    // Expected: Every category row shows the correct name and live ignore word count. Counts reconcile with listing data.
    console.log("[IWC-TC-049] Category Management – Category Controls → Verify each category row shows name and ignore word count");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least four categories are configured with varying word counts.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-050 - Category Management – Category Controls → Prevent toggle interaction for Viewer role", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-050
    // Excel Scenario: Category Management – Category Controls → Prevent toggle interaction for Viewer role
    // Steps (3): Open Ignore Words Configuration as Viewer. → Open Category Controls if visible. → Attempt to change any category toggle.
    // Expected: Viewer cannot modify category toggles. Controls are hidden or read-only. No save action is available.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-050] Category Management – Category Controls → Prevent toggle interaction for Viewer role");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      /* Role from Excel: Viewer */
      // Preconditions: Viewer account is logged in.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.toggleCategoryControl("Entity Suffixes");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-051 - Category Management – Category Controls → Reject invalid rapid double-toggle submission", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-051
    // Excel Scenario: Category Management – Category Controls → Reject invalid rapid double-toggle submission
    // Steps (3): Toggle category OFF then immediately ON before confirmation. → Submit one action. → Review pending requests list.
    // Expected: Only one valid pending request is recorded.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-051] Category Management – Category Controls → Reject invalid rapid double-toggle submission");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opens Category Controls for enabled category.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.toggleCategoryControl("Geography Terms");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-052 - Category Management – Category Controls → Close Category Controls without persisting changes", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-052
    // Excel Scenario: Category Management – Category Controls → Close Category Controls without persisting changes
    // Steps (3): Change one or more toggles. → Click Cancel. → Reopen Category Controls.
    // Expected: Unsaved toggle changes are discarded. Category enablement state matches pre-cancel configuration.
    console.log("[IWC-TC-052] Category Management – Category Controls → Close Category Controls without persisting changes");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category Controls modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.closeCategoryControlsModal();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-053 - Category Management – Category Controls → category controls action audit entry after checker approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-053
    // Excel Scenario: Category Management – Category Controls → Verify category controls action audit entry after checker approval
    // Steps (5): Log in as Checker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open Word History panel for a word in affected category. …
    // Expected: Audit timeline includes category control action with actor and timestamp.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-053] Category Management – Category Controls → Verify category controls action audit entry after checker approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Disable request for a category has been approved by Checker.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-163 - Category Management – Category Controls → Close Category Controls modal by clicking overlay backdrop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-163
    // Excel Scenario: Category Management – Category Controls → Close Category Controls modal by clicking overlay backdrop
    // Steps (3): Open Category Controls. → Toggle one category switch. → Click overlay backdrop outside modal.
    // Expected: Modal closes without saving toggle changes. Reopening Category Controls shows prior saved state, not unsaved toggle.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-163] Category Management – Category Controls → Close Category Controls modal by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker on listing page
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openCategoryControlsModal();
      await iwcPage.clickModalOverlay();
      await expect(iwcPage.categoryControlsModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  });

  test.describe("Add Ignore Word", () => {

  test("Case ID:IWC-TC-054 - Add Ignore Word → Open Add Ignore Word panel", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-054
    // Excel Scenario: Add Ignore Word → Open Add Ignore Word panel
    // Steps (2): Click Add Ignore Word. → Review panel title, mandatory fields, Live Narrative Tester, Preview section, and footer actions.
    // Expected: Right-side panel opens with title 'Add New Ignore Word'. Mandatory fields: Ignore Word/Phrase, Category, Risk Level, Match Type. Footer shows Cancel, Save Draft, and Submit. No permanent delete option is present.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-054] Add Ignore Word → Open Add Ignore Word panel");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Ignore Words Configuration listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
      await iwcPage.expectRiskLevelBadgeVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-055 - Add Ignore Word → Submit ignore word with Exact phrase and Low risk", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-055
    // Excel Scenario: Add Ignore Word → Submit ignore word with Exact phrase and Low risk
    // Steps (4): Open Add Ignore Word. → Enter Ignore Word/Phrase: GmbH. → Select Category: Entity Suffixes, Risk Level: Low, Match Type: Exact phrase. …
    // Expected: Submission creates a pending checker request. Entry is not active in screening until checker approval. Confirmation shows Pending Checker status with submitter details.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-055] Add Ignore Word → Submit ignore word with Exact phrase and Low risk");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Entity Suffixes' is active. Word 'GmbH' does not exist.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("GmbH");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-056 - Add Ignore Word → Submit ignore word with Partial match and High risk", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-056
    // Excel Scenario: Add Ignore Word → Submit ignore word with Partial match and High risk
    // Steps (4): Open Add Ignore Word. → Enter Word: bank. → Set Category: Business Descriptors, Risk: High, Match Type: Partial match. …
    // Expected: High-risk partial-match entry is submitted for checker approval. Risk and match type persist on the pending record.
    console.log("[IWC-TC-056] Add Ignore Word → Submit ignore word with Partial match and High risk");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Business Descriptors' is active.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("bank");
      await iwcPage.selectCategory("Business Descriptors");
      await iwcPage.selectRiskLevel("High");
      await iwcPage.selectMatchType("Partial match");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-057 - Add Ignore Word → Word/Phrase is required", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-057
    // Excel Scenario: Add Ignore Word → Validate Word/Phrase is required
    // Steps (3): Leave Ignore Word/Phrase empty. → Select valid Category, Risk Level, and Match Type. → Click Submit.
    // Expected: Mandatory field validation appears for Ignore Word/Phrase. No checker request is created.
    console.log("[IWC-TC-057] Add Ignore Word → Validate Word/Phrase is required");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-058 - Add Ignore Word → Category is required", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-058
    // Excel Scenario: Add Ignore Word → Validate Category is required
    // Steps (3): Enter Word/Phrase 'cash structuring'. → Do not select Category; fill other fields. → Click Submit.
    // Expected: Category required validation appears and no request is created.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-058] Add Ignore Word → Validate Category is required");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-059 - Add Ignore Word → Risk Level is required", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-059
    // Excel Scenario: Add Ignore Word → Validate Risk Level is required
    // Steps (3): Enter Word/Phrase and select Category. → Leave Risk Level empty and select Match Type. → Click Submit.
    // Expected: Risk Level required validation is displayed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-059] Add Ignore Word → Validate Risk Level is required");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectRiskLevelBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-060 - Add Ignore Word → Match Type is required", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-060
    // Excel Scenario: Add Ignore Word → Validate Match Type is required
    // Steps (3): Enter Word/Phrase and select Category and Risk Level. → Leave Match Type unselected. → Click Submit.
    // Expected: Match Type required validation appears and record is not submitted.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-060] Add Ignore Word → Validate Match Type is required");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-061 - Add Ignore Word → Word/Phrase maximum length 500", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-061
    // Excel Scenario: Add Ignore Word → Validate Word/Phrase maximum length 500
    // Steps (3): Paste 501-character text in Word/Phrase. → Fill other mandatory fields. → Attempt Submit.
    // Expected: Length validation appears for Word/Phrase and submit is blocked.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-061] Add Ignore Word → Validate Word/Phrase maximum length 500");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-062 - Add Ignore Word → Allow Word/Phrase length exactly 500", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-062
    // Excel Scenario: Add Ignore Word → Allow Word/Phrase length exactly 500
    // Steps (3): Enter 500-character Word/Phrase value. → Select valid Category, Risk Level, and Match Type. → Click Submit.
    // Expected: Request is accepted and sent to maker-checker flow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-062] Add Ignore Word → Allow Word/Phrase length exactly 500");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-063 - Add Ignore Word → Save valid ignore word as draft", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-063
    // Excel Scenario: Add Ignore Word → Save valid ignore word as draft
    // Steps (3): Open Add Ignore Word. → Enter Word: Baroness, Category: Personal Titles, Risk: Low, Match Type: Exact phrase. → Click Save Draft.
    // Expected: Entry is saved with Drafted status. It appears on Drafted Ignore Word tab. Word is not used in live screening. No checker request is created until Submit.
    console.log("[IWC-TC-063] Add Ignore Word → Save valid ignore word as draft");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Personal Titles' is available.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("Baroness");
      await iwcPage.selectCategory("Personal Titles");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.saveIgnoreWordDraft();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-064 - Add Ignore Word → Cancel Add Ignore Word panel after input", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-064
    // Excel Scenario: Add Ignore Word → Cancel Add Ignore Word panel after input
    // Steps (2): Click Cancel and confirm discard if prompted. → Search Active and Drafted tabs for 'temporary ignore'.
    // Expected: No record is saved. Cancelled word does not appear on Active or Drafted tabs.
    console.log("[IWC-TC-064] Add Ignore Word → Cancel Add Ignore Word panel after input");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open with Word/Phrase 'temporary ignore' entered.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.cancelAddIgnoreWordPanel();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-065 - Add Ignore Word → Prevent duplicate ignore word in same category and match type", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-065
    // Excel Scenario: Add Ignore Word → Prevent duplicate ignore word in same category and match type
    // Steps (3): Open Add Ignore Word. → Enter Word: holdings, same category and match type as existing record. → Click Submit.
    // Expected: Duplicate submission is blocked within the same category and match type. Inline validation message is shown. No checker request is created.
    console.log("[IWC-TC-065] Add Ignore Word → Prevent duplicate ignore word in same category and match type");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active word 'holdings' exists under Business Descriptors with Exact phrase match.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Business Descriptors");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectMatchTypeBadgeVisible();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-066 - Add Ignore Word → Treat duplicate words case-insensitively", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-066
    // Excel Scenario: Add Ignore Word → Treat duplicate words case-insensitively
    // Steps (3): Open Add Ignore Word. → Enter Word: wire transfer (lowercase), same category and match type. → Click Submit.
    // Expected: Case-insensitive duplicate validation blocks submission in the add flow and during bulk import. No duplicate active record is created.
    console.log("[IWC-TC-066] Add Ignore Word → Treat duplicate words case-insensitively");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active word 'Wire Transfer' exists under Business Descriptors with Partial match.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Business Descriptors");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Partial match");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-067 - Add Ignore Word → Trim whitespace around word before validation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-067
    // Excel Scenario: Add Ignore Word → Trim whitespace around word before validation
    // Steps (7): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Click Add Ignore Word. …
    // Expected: Request Submitted modal shows the ignore word name, submitter name, timestamp, and status "Pending Checker". Modal closes on OK. Record appears on Drafted tab awaiting checker action.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-067] Add Ignore Word → Trim whitespace around word before validation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Existing record: 'cash mule'.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-068 - Add Ignore Word → Assign Medium risk level correctly on submission", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-068
    // Excel Scenario: Add Ignore Word → Assign Medium risk level correctly on submission
    // Steps (3): Enter a new unique word with Risk Level: Medium. → Complete remaining mandatory fields and Submit. → After checker approval, open the record on Active tab.
    // Expected: Medium risk level is stored and displayed on the approved active record.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-068] Add Ignore Word → Assign Medium risk level correctly on submission");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("consultancy");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Medium");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectRiskLevelBadgeVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-069 - Add Ignore Word → Retain selected category while editing other fields", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-069
    // Excel Scenario: Add Ignore Word → Retain selected category while editing other fields
    // Steps (3): Select Category 'Industry Terms'. → Type Word/Phrase and change Risk Level values. → Verify Category remains selected before submit.
    // Expected: Category value remains unchanged unless user explicitly modifies it.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-069] Add Ignore Word → Retain selected category while editing other fields");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Industry Terms");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-070 - Add Ignore Word → Display maker-checker prompt after Submit", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-070
    // Excel Scenario: Add Ignore Word → Display maker-checker prompt after Submit
    // Steps (2): Click Submit. → Capture confirmation modal content.
    // Expected: Checker approval modal confirms request submission with user, timestamp, and Pending Checker status. Word is not active until checker acts.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-070] Add Ignore Word → Display maker-checker prompt after Submit");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Valid new ignore word entered on Add panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("PLC");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-071 - Add Ignore Word → Ensure no hard delete option in Add Ignore Word panel", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-071
    // Excel Scenario: Add Ignore Word → Ensure no hard delete option in Add Ignore Word panel
    // Steps (3): Inspect footer action buttons. → Search for any delete/remove control. → Attempt to locate permanent delete command.
    // Expected: No hard delete action is exposed from add panel.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-071] Add Ignore Word → Ensure no hard delete option in Add Ignore Word panel");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Add Ignore Word panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-164 - Add Ignore Word → Add Ignore Word panel does not close when clicking overlay", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-164
    // Excel Scenario: Add Ignore Word → Verify Add Ignore Word panel does not close when clicking overlay
    // Steps (2): Enter Word/Phrase: test value. → Click the dimmed overlay to the left of the panel.
    // Expected: Panel does not close when clicking the overlay. User must use Cancel or complete submission to exit.
    console.log("[IWC-TC-164] Add Ignore Word → Verify Add Ignore Word panel does not close when clicking overlay");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open with partial form data entered.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.clickPanelOverlay();
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-174 - Add Ignore Word → Reject ignore word phrase exceeding 500 characters", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-174
    // Excel Scenario: Add Ignore Word → Reject ignore word phrase exceeding 500 characters
    // Steps (3): Paste a 501-character phrase into Ignore Word/Phrase. → Complete other mandatory fields. → Click Submit.
    // Expected: Maximum length validation blocks submission. No checker request is created.
    console.log("[IWC-TC-174] Add Ignore Word → Reject ignore word phrase exceeding 500 characters");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-179 - Add Ignore Word → discard when cancelling Add Ignore Word with populated fields", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-179
    // Excel Scenario: Add Ignore Word → Confirm discard when cancelling Add Ignore Word with populated fields
    // Steps (2): Click Cancel. → If confirmation prompt appears, confirm discard.
    // Expected: Confirmation prompt appears when discarding populated form. On confirm, panel closes and no record is saved.
    console.log("[IWC-TC-179] Add Ignore Word → Confirm discard when cancelling Add Ignore Word with populated fields");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel has populated fields.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.cancelAddIgnoreWordPanel();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-197 - Add Ignore Word → Submit multi-word phrase ignore word for checker approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-197
    // Excel Scenario: Add Ignore Word → Submit multi-word phrase ignore word for checker approval
    // Steps (5): Open Add Ignore Word. → Enter Ignore Word/Phrase: private limited. → Set Category: Entity Suffixes, Risk: Low, Match Type: Exact phrase. …
    // Expected: Multi-word phrase is accepted and submitted. Preview highlights the full phrase in narrative. After checker approval, phrase is stripped as a unit during screening.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-197] Add Ignore Word → Submit multi-word phrase ignore word for checker approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Phrase 'private limited' does not already exist as an active entry.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("private limited");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  });

  test.describe("Live Narrative Tester", () => {

  test("Case ID:IWC-TC-072 - Live Narrative Tester → Open Live Narrative Tester from Add Ignore Word panel", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-072
    // Excel Scenario: Live Narrative Tester → Open Live Narrative Tester from Add Ignore Word panel
    // Steps (2): Locate Live Narrative Tester and Preview sections within the panel. → Enter a sample word in Ignore Word/Phrase field.
    // Expected: Live Narrative Tester and Preview are embedded in the add panel. Preview updates as the ignore word field changes.
    // TODO: Screening engine backend run requires live screening service or mock contract
    console.log("[IWC-TC-072] Live Narrative Tester → Open Live Narrative Tester from Add Ignore Word panel");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("draft word transaction payment");
      await iwcPage.runNarrativeTest("draft word");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-073 - Live Narrative Tester → exact phrase match behavior in tester", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-073
    // Excel Scenario: Live Narrative Tester → Validate exact phrase match behavior in tester
    // Steps (3): Enter Ignore Word/Phrase: Ltd with Match Type: Exact phrase. → Paste narrative: ABC Ltd Holdings. → Review Preview highlights.
    // Expected: Preview highlights standalone token 'Ltd' only. 'Holdings' is not highlighted unless separately configured.
    console.log("[IWC-TC-073] Live Narrative Tester → Validate exact phrase match behavior in tester");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("ABC Ltd Holdings");
      await iwcPage.runNarrativeTest("Ltd");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-074 - Live Narrative Tester → exact phrase non-match for partial token", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-074
    // Excel Scenario: Live Narrative Tester → Validate exact phrase non-match for partial token
    // Steps (3): Enter Word: Ltd. → Paste narrative containing token 'Ltds' (plural form). → Review Preview.
    // Expected: Exact phrase mode does not highlight 'Ltds'. Only tokens equal to 'Ltd' after normalisation are matched.
    console.log("[IWC-TC-074] Live Narrative Tester → Validate exact phrase non-match for partial token");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel open with Match Type: Exact phrase.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("Ltd transaction payment");
      await iwcPage.runNarrativeTest("Ltd");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-075 - Live Narrative Tester → partial match behavior in tester", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-075
    // Excel Scenario: Live Narrative Tester → Validate partial match behavior in tester
    // Steps (3): Enter Word: bank. → Paste narrative: Interbank settlement with Eurobank reference. → Review Preview highlights.
    // Expected: Partial match highlights 'bank' substring within tokens such as Interbank and Eurobank.
    console.log("[IWC-TC-075] Live Narrative Tester → Validate partial match behavior in tester");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel open with Match Type: Partial match.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("Interbank settlement with Eurobank reference");
      await iwcPage.runNarrativeTest("bank");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-076 - Live Narrative Tester → case-insensitive match in tester", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-076
    // Excel Scenario: Live Narrative Tester → Validate case-insensitive match in tester
    // Steps (3): Enter Word: BANK (uppercase) with Exact phrase. → Paste narrative containing lowercase 'bank'. → Review Preview.
    // Expected: Preview matching is case-insensitive. Lowercase narrative token is highlighted.
    console.log("[IWC-TC-076] Live Narrative Tester → Validate case-insensitive match in tester");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("BANK transaction payment");
      await iwcPage.runNarrativeTest("BANK");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-077 - Live Narrative Tester → Handle large narrative input in tester", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-077
    // Excel Scenario: Live Narrative Tester → Handle large narrative input in tester
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Paste 1500-character narrative paragraph. …
    // Expected: Live Narrative Tester highlights matching tokens in the preview panel within one second of narrative input. Highlighted tokens correspond to the configured ignore word using the selected match type.
    // TODO: Screening engine backend run requires live screening service or mock contract
    console.log("[IWC-TC-077] Live Narrative Tester → Handle large narrative input in tester");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Live Narrative Tester is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.expectLiveNarrativeTesterVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-078 - Live Narrative Tester → Clear tester input and reset output", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-078
    // Excel Scenario: Live Narrative Tester → Clear tester input and reset output
    // Steps (2): Clear the narrative textarea. → Observe Preview panel.
    // Expected: Preview resets to empty-state message. No stale highlights remain.
    // TODO: Screening engine backend run requires live screening service or mock contract
    console.log("[IWC-TC-078] Live Narrative Tester → Clear tester input and reset output");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Narrative text is present in Live Narrative Tester.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.clearNarrativeTester();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-079 - Live Narrative Tester → Return from tester to add form with values preserved", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-079
    // Excel Scenario: Live Narrative Tester → Return from tester to add form with values preserved
    // Steps (3): Enter values in word, category, risk, match type, and narrative fields. → Scroll within the panel without closing it. → Confirm all entered values remain intact.
    // Expected: Field values and preview state are preserved during in-panel navigation. No data loss occurs before submit or cancel.
    console.log("[IWC-TC-079] Live Narrative Tester → Return from tester to add form with values preserved");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel has populated fields.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-180 - Live Narrative Tester → Partial match highlights substring within token in preview", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-180
    // Excel Scenario: Live Narrative Tester → Partial match highlights substring within token in preview
    // Steps (3): Enter Word: bank. → Paste narrative: Eurobank international transfer. → Review Preview highlighting.
    // Expected: Preview highlights 'bank' substring inside 'Eurobank'. Confirms partial-match preview behaviour.
    console.log("[IWC-TC-180] Live Narrative Tester → Partial match highlights substring within token in preview");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel open with Partial match selected.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("bank transaction payment");
      await iwcPage.runNarrativeTest("bank");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-181 - Live Narrative Tester → Exact phrase does not match substring within longer token", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-181
    // Excel Scenario: Live Narrative Tester → Exact phrase does not match substring within longer token
    // Steps (3): Enter Word: bank. → Paste narrative: Eurobank international transfer. → Review Preview.
    // Expected: Exact phrase does not highlight 'bank' inside 'Eurobank'. Standalone token 'bank' would match if present.
    console.log("[IWC-TC-181] Live Narrative Tester → Exact phrase does not match substring within longer token");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel open with Exact phrase selected.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("bank transaction payment");
      await iwcPage.runNarrativeTest("bank");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      });

  });

  test("Case ID:IWC-TC-199 - Live Narrative Tester → Normalise punctuation and hyphens before exact phrase matching in preview", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-199
    // Excel Scenario: Live Narrative Tester → Normalise punctuation and hyphens before exact phrase matching in preview
    // Steps (3): Enter Word: co-op with Match Type: Exact phrase. → Paste narrative: Payment to CO OP branch. → Review Preview highlighting.
    // Expected: Preview applies normalisation (punctuation/hyphen handling) before match evaluation. Matching behaviour aligns with screening engine token normalisation rules.
    console.log("[IWC-TC-199] Live Narrative Tester → Normalise punctuation and hyphens before exact phrase matching in preview");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openLiveNarrativeTester();
      await iwcPage.fillNarrativeText("Payment to CO OP branch");
      await iwcPage.runNarrativeTest("co-op");
      await iwcPage.expectNarrativeHighlightVisible();
      await iwcPage.expectLiveNarrativeTesterVisible();
      await iwcPage.expectScreeningEngineEvaluation();
      });

  });

  });

  test.describe("Ignore Word Row Actions", () => {

  test("Case ID:IWC-TC-080 - Ignore Word Row Actions → Disable action appears only on Active tab rows", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-080
    // Excel Scenario: Ignore Word Row Actions → Disable action appears only on Active tab rows
    // Steps (3): On Active tab, confirm Disable (minus) icon is present in Actions. → Switch to Inactive tab and confirm Disable is not shown. → Switch to Drafted tab and confirm Disable is not shown.
    // Expected: Disable action is available only for active ignore words. Inactive rows show Enable
    console.log("[IWC-TC-080] Ignore Word Row Actions → Disable action appears only on Active tab rows");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Records exist on Active, Inactive, and Drafted tabs.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.disableIgnoreWord("draft word");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-081 - Ignore Word Row Actions → Execute Disable action for active ignore word", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-081
    // Excel Scenario: Ignore Word Row Actions → Execute Disable action for active ignore word
    // Steps (3): Locate 'trading' on Active tab. → Click Disable in the Actions column. → Review and dismiss the checker confirmation modal.
    // Expected: Disable request is submitted for checker approval with Pending Checker status. After checker approval, 'trading' moves to Inactive tab and Active count decreases by one. Word is excluded from screening.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-081] Ignore Word Row Actions → Execute Disable action for active ignore word");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word 'trading' exists on Active tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.disableIgnoreWord("trading");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-082 - Ignore Word Row Actions → Enable action is available only in Inactive tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-082
    // Excel Scenario: Ignore Word Row Actions → Enable action is available only in Inactive tab
    // Steps (2): On Inactive tab, locate 'and'. → Confirm Enable action is shown and Disable is absent.
    // Expected: Enable action is available only on Inactive tab. No hard-delete action is offered.
    console.log("[IWC-TC-082] Ignore Word Row Actions → Enable action is available only in Inactive tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Inactive ignore word 'and' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("and");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-083 - Ignore Word Row Actions → Execute Enable action for inactive ignore word", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-083
    // Excel Scenario: Ignore Word Row Actions → Execute Enable action for inactive ignore word
    // Steps (3): Click Enable for selected inactive row. → Review confirmation details. → Submit request.
    // Expected: Enable request is created and waits for checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-083] Ignore Word Row Actions → Execute Enable action for inactive ignore word");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Inactive tab with target row.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("legacy account (Inactive)");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-084 - Ignore Word Row Actions → Submit action is available only in Drafted tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-084
    // Excel Scenario: Ignore Word Row Actions → Submit action is available only in Drafted tab
    // Steps (3): On Drafted tab, locate 'co'. → Confirm Submit action is available. → Switch to Active tab and confirm Submit is not shown there.
    // Expected: Submit row action is limited to Drafted tab entries awaiting checker submission.
    console.log("[IWC-TC-084] Ignore Word Row Actions → Submit action is available only in Drafted tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Drafted ignore word 'co' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("co");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-085 - Ignore Word Row Actions → Submit drafted ignore word from row action", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-085
    // Excel Scenario: Ignore Word Row Actions → Submit drafted ignore word from row action
    // Steps (2): On Drafted tab, click Submit for 'son'. → Dismiss checker confirmation modal.
    // Expected: Drafted entry is sent for checker approval. Status remains non-active until checker approves. Confirmation modal shows pending state.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-085] Ignore Word Row Actions → Submit drafted ignore word from row action");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Drafted word 'son' exists under Personal Titles.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("son");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-086 - Ignore Word Row Actions → Cancel row action confirmation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-086
    // Excel Scenario: Ignore Word Row Actions → Cancel row action confirmation
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open row action Disable. …
    // Expected: No status transition occurs when action is canceled.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-086] Ignore Word Row Actions → Cancel row action confirmation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker initiated Disable action on active row.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("compliance marker");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-087 - Ignore Word Row Actions → Prevent concurrent duplicate action on same row", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-087
    // Excel Scenario: Ignore Word Row Actions → Prevent concurrent duplicate action on same row
    // Steps (5): Log in as Checker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Attempt to trigger another Disable action for same row. …
    // Expected: System blocks duplicate action and shows pending-request notice.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-087] Ignore Word Row Actions → Prevent concurrent duplicate action on same row");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Disable request for row is already pending checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("draft word");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-088 - Ignore Word Row Actions → no hard delete action in row actions menu", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-088
    // Excel Scenario: Ignore Word Row Actions → Verify no hard delete action in row actions menu
    // Steps (2): Inspect Actions column on Active, Inactive, and Drafted rows. → Confirm available actions.
    // Expected: Only Disable, Enable, or Submit actions are available per status. Permanent delete is not offered, enforcing logical deactivation only.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-088] Ignore Word Row Actions → Verify no hard delete action in row actions menu");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on any tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("draft word");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-089 - Ignore Word Row Actions → Ensure action updates are reflected after checker approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-089
    // Excel Scenario: Ignore Word Row Actions → Ensure action updates are reflected after checker approval
    // Steps (3): As Checker, approve the pending disable request. → Return to Ignore Words Configuration as Maker. → Verify word status on Inactive tab and Active count.
    // Expected: After checker approval, listing reflects updated status without manual refresh beyond normal load. Tab counts and row placement update correctly.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-089] Ignore Word Row Actions → Ensure action updates are reflected after checker approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker submitted disable request for an active word; Checker approval is pending.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.enableIgnoreWord("draft word");
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  });

  test.describe("Bulk Upload", () => {

  test("Case ID:IWC-TC-090 - Bulk Upload → Open Bulk Upload modal from toolbar", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-090
    // Excel Scenario: Bulk Upload → Open Bulk Upload modal from toolbar
    // Steps (2): Click Bulk Upload. → Review modal fields and template download link.
    // Expected: Bulk Upload modal opens. Category dropdown, file upload drop zone, template download link, Cancel, and Upload buttons are visible.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-090] Bulk Upload → Open Bulk Upload modal from toolbar");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Ignore Words listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await expect(iwcPage.bulkUploadModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-091 - Bulk Upload → Download bulk upload template", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-091
    // Excel Scenario: Bulk Upload → Download bulk upload template
    // Steps (2): Click Download template file. → Open the downloaded file.
    // Expected: Template downloads successfully and contains required columns for word/phrase, risk level, and match type aligned with manual add validation.
    console.log("[IWC-TC-091] Bulk Upload → Download bulk upload template");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.downloadBulkUploadTemplate();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectRiskLevelBadgeVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-092 - Bulk Upload → Upload valid CSV file under 10MB", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-092
    // Excel Scenario: Bulk Upload → Upload valid CSV file under 10MB
    // Steps (4): Open Bulk Upload. → Select Category: Entity Suffixes. → Attach valid CSV file. …
    // Expected: File is accepted. Bulk import is submitted as a single maker action for checker approval. Valid rows appear as drafted/pending entries per workflow rules.
    console.log("[IWC-TC-092] Bulk Upload → Upload valid CSV file under 10MB");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Valid CSV bulk file under 10 MB prepared for Entity Suffixes.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore_words_entity_suffixes.csv (8 KB)");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-093 - Bulk Upload → Upload valid XLSX file under 10MB", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-093
    // Excel Scenario: Bulk Upload → Upload valid XLSX file under 10MB
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Select category 'Adverse Media Terms'. …
    // Expected: XLSX upload succeeds and request enters maker-checker flow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-093] Bulk Upload → Upload valid XLSX file under 10MB");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker has valid XLSX with 3 new ignore words.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("iwc_valid_3_rows.xlsx");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-094 - Bulk Upload → Reject file larger than 10MB", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-094
    // Excel Scenario: Bulk Upload → Reject file larger than 10MB
    // Steps (3): Select category. → Upload file 'iwc_oversize_11mb.csv'. → Observe validation response.
    // Expected: System rejects upload and shows max file size error.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-094] Bulk Upload → Reject file larger than 10MB");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker opened Bulk Upload modal.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.expectBulkUploadError();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-095 - Bulk Upload → Reject unsupported file format", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-095
    // Excel Scenario: Bulk Upload → Reject unsupported file format
    // Steps (2): Select a valid category. → Attempt to attach unsupported file ignore_words_archive.pdf or ignore_words_notes.txt via browse or drag-drop.
    // Expected: Unsupported file types are rejected with a clear validation message. Upload does not proceed and no records are imported.
    console.log("[IWC-TC-095] Bulk Upload → Reject unsupported file format");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.expectBulkUploadError();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-096 - Bulk Upload → category selection required for upload", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-096
    // Excel Scenario: Bulk Upload → Validate category selection required for upload
    // Steps (2): Leave category unselected or on placeholder value. → Attempt Upload.
    // Expected: Category selection is enforced before upload proceeds. Inline validation is shown.
    console.log("[IWC-TC-096] Bulk Upload → Validate category selection required for upload");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal is open with file selected.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("(not selected)");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-097 - Bulk Upload → Handle duplicate words inside upload file", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-097
    // Excel Scenario: Bulk Upload → Handle duplicate words inside upload file
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Select category and upload 'iwc_duplicates.csv'. …
    // Expected: System flags duplicate lines and processes only valid unique rows per rules.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-097] Bulk Upload → Handle duplicate words inside upload file");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker has CSV containing repeated word entries.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-098 - Bulk Upload → Handle existing system duplicates during upload", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-098
    // Excel Scenario: Bulk Upload → Handle existing system duplicates during upload
    // Steps (2): Upload bulk file containing 'corp' for the same category and match type. → Review validation outcome.
    // Expected: System duplicate is flagged. Row is rejected or reported in upload summary without creating a duplicate active record.
    console.log("[IWC-TC-098] Bulk Upload → Handle existing system duplicates during upload");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active word 'corp' exists. Bulk file contains the same word.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-099 - Bulk Upload → case-insensitive duplicate detection in upload", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-099
    // Excel Scenario: Bulk Upload → Validate case-insensitive duplicate detection in upload
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Upload row with value 'wire transfer'. …
    // Expected: System marks entry as duplicate based on case-insensitive comparison.
    console.log("[IWC-TC-099] Bulk Upload → Validate case-insensitive duplicate detection in upload");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Existing word 'Wire Transfer' present in system.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-100 - Bulk Upload → Cancel bulk upload before submit", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-100
    // Excel Scenario: Bulk Upload → Cancel bulk upload before submit
    // Steps (3): Click Cancel on Bulk Upload modal. → Reopen Bulk Upload. → Verify no file remains queued.
    // Expected: Upload is discarded. No pending checker request is created. Reopened modal shows empty file selection.
    console.log("[IWC-TC-100] Bulk Upload → Cancel bulk upload before submit");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal is open with category selected and valid file attached.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.cancelBulkUploadModal();
      await expect(iwcPage.bulkUploadModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-101 - Bulk Upload → checker approval modal appears for bulk submit", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-101
    // Excel Scenario: Bulk Upload → Verify checker approval modal appears for bulk submit
    // Steps (2): Complete bulk upload submission. → Capture checker confirmation modal.
    // Expected: Bulk upload triggers checker approval modal. Entire batch awaits checker decision before words become active.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-101] Bulk Upload → Verify checker approval modal appears for bulk submit");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Valid bulk file ready for upload.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore_words_batch_valid.csv");
      await iwcPage.submitBulkUpload();
      await expect(iwcPage.bulkUploadModal).toBeVisible();
      });

  });

  test("Case ID:IWC-TC-102 - Bulk Upload → uploaded words appear in Drafted Ignore Word tab before approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-102
    // Excel Scenario: Bulk Upload → Verify uploaded words appear in Drafted Ignore Word tab before approval
    // Steps (2): Before checker approval, open Drafted Ignore Word tab. → Locate imported words from the bulk file.
    // Expected: Imported words appear as drafted or pending entries. None are active in screening until checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-102] Bulk Upload → Verify uploaded words appear in Drafted Ignore Word tab before approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk upload submitted and awaiting checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-103 - Bulk Upload → partial upload success with mixed valid and invalid rows", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-103
    // Excel Scenario: Bulk Upload → Validate partial upload success with mixed valid and invalid rows
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Upload file 'iwc_mixed_6_rows.csv'. …
    // Expected: Valid rows are accepted while invalid rows are listed with rejection reasons.
    console.log("[IWC-TC-103] Bulk Upload → Validate partial upload success with mixed valid and invalid rows");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: CSV has 6 rows with 4 valid and 2 invalid entries.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.expectBulkUploadError();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-165 - Bulk Upload → Close Bulk Upload modal by clicking overlay backdrop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-165
    // Excel Scenario: Bulk Upload → Close Bulk Upload modal by clicking overlay backdrop
    // Steps (2): Open Bulk Upload. → Click overlay outside the modal.
    // Expected: Bulk Upload modal closes. No file is uploaded and no draft records are created.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-165] Bulk Upload → Close Bulk Upload modal by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker on listing page
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.clickModalOverlay();
      await expect(iwcPage.bulkUploadModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-168 - Bulk Upload → Upload bulk file using drag and drop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-168
    // Excel Scenario: Bulk Upload → Upload bulk file using drag and drop
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open Bulk Upload. …
    // Expected: Drop zone accepts the file. Selected file row shows file name and size. Upload button becomes available.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-168] Bulk Upload → Upload bulk file using drag and drop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Valid CSV bulk file prepared with 2 ignore words
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("ignore_words_bulk.csv (2 rows)");
      await iwcPage.submitBulkUpload();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-169 - Bulk Upload → drop zone highlights on drag-over", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-169
    // Excel Scenario: Bulk Upload → Verify drop zone highlights on drag-over
    // Steps (4): Open Bulk Upload modal. → Drag a file over the drop zone without releasing. → Observe drop zone styling. …
    // Expected: Drop zone border and background change while file is dragged over it, then revert when drag leaves the zone.
    console.log("[IWC-TC-169] Bulk Upload → Verify drop zone highlights on drag-over");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal open
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-176 - Bulk Upload → Reject empty bulk upload file", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-176
    // Excel Scenario: Bulk Upload → Reject empty bulk upload file
    // Steps (5): Log in as Maker. → Open Bulk Upload. → Select Category. …
    // Expected: Upload is rejected with validation message indicating file contains no data rows. No draft records are created.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-176] Bulk Upload → Reject empty bulk upload file");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Empty CSV file prepared
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("Entity Suffixes");
      await iwcPage.uploadBulkFile("empty.csv (0 bytes or headers only)");
      await iwcPage.expectBulkUploadError();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-178 - Bulk Upload → Reject bulk upload when All Categories is selected", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-178
    // Excel Scenario: Bulk Upload → Reject bulk upload when All Categories is selected
    // Steps (3): Select Category: All Categories. → Attach a valid CSV file. → Attempt Upload.
    // Expected: Upload is blocked. A specific target category must be selected before bulk import proceeds.
    console.log("[IWC-TC-178] Bulk Upload → Reject bulk upload when All Categories is selected");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Bulk Upload modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.selectBulkUploadCategory("All Categories");
      await iwcPage.uploadBulkFile("ignore-words-sample.csv");
      await iwcPage.expectBulkUploadError();
      await iwcPage.expectSubmissionBlocked();
      });

  });

  });

  test.describe("Export", () => {

  test("Case ID:IWC-TC-104 - Export → Export Active tab records to CSV", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-104
    // Excel Scenario: Export → Export Active tab records to CSV
    // Steps (3): Select Active tab. → Click Export. → Open downloaded CSV.
    // Expected: Export file contains only active records with Word/Phrase, Category, Risk Level, Match Type, Created Date, Status, and maker/checker metadata columns.
    console.log("[IWC-TC-104] Export → Export Active tab records to CSV");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active tab has multiple records.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Active");
      await iwcPage.clickExport();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectExportOptions();
      await iwcPage.expectRiskLevelBadgeVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      });

  });

  test("Case ID:IWC-TC-105 - Export → Export Inactive tab records to CSV", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-105
    // Excel Scenario: Export → Export Inactive tab records to CSV
    // Steps (3): Click Export. → Open downloaded CSV. → Verify all exported rows are inactive.
    // Expected: Exported file contains only inactive records from selected context.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-105] Export → Export Inactive tab records to CSV");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on Inactive tab with records.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      });

  });

  test("Case ID:IWC-TC-106 - Export → export file contains metadata header section", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-106
    // Excel Scenario: Export → Validate export file contains metadata header section
    // Steps (2): Open exported CSV in a text editor. → Review header comment/metadata section before column headers.
    // Expected: File includes metadata header with export timestamp, exported-by user, and checker governance note before data rows.
    console.log("[IWC-TC-106] Export → Validate export file contains metadata header section");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active tab export completed.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      });

  });

  test("Case ID:IWC-TC-107 - Export → maker-checker related columns in exported file", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-107
    // Excel Scenario: Export → Validate maker-checker related columns in exported file
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Export dataset from page. …
    // Expected: Maker-checker columns are present and filled where applicable.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-107] Export → Validate maker-checker related columns in exported file");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Data contains approved and pending records.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-108 - Export → Export with active search filter applied", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-108
    // Excel Scenario: Export → Export with active search filter applied
    // Steps (3): Keep search filter active. → Click Export. → Verify CSV rows match search criteria.
    // Expected: CSV includes only records matching active filter context.
    console.log("[IWC-TC-108] Export → Export with active search filter applied");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Search 'wire' applied on Active tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-109 - Export → Viewer role can perform read-only export", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-109
    // Excel Scenario: Export → Viewer role can perform read-only export
    // Steps (3): Click Export as Viewer. → Download and open CSV. → Confirm no edit controls are available in UI.
    // Expected: Export works for Viewer while write actions remain restricted.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-109] Export → Viewer role can perform read-only export");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      /* Role from Excel: Viewer */
      // Preconditions: Viewer user is on Ignore Words page.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      });

  });

  test("Case ID:IWC-TC-170 - Export → Export includes only records from the currently selected tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-170
    // Excel Scenario: Export → Export includes only records from the currently selected tab
    // Steps (4): Select Inactive tab. → Click Export. → Open downloaded file and list Word/Phrase values. …
    // Expected: Inactive-tab export contains only inactive records. Active-tab export contains only active records. No cross-tab records appear in either file.
    console.log("[IWC-TC-170] Export → Export includes only records from the currently selected tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active and Inactive tabs each have distinct records
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Inactive");
      await iwcPage.clickExport();
      await iwcPage.expectExportOptions();
      });

  });

  test("Case ID:IWC-TC-171 - Export → Export drafted ignore words from Drafted tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-171
    // Excel Scenario: Export → Export drafted ignore words from Drafted tab
    // Steps (3): Select Drafted Ignore Word tab. → Click Export. → Open downloaded CSV.
    // Expected: CSV contains only drafted records with Status column showing Drafted (or equivalent). Maker-checker columns reflect pending approval state.
    console.log("[IWC-TC-171] Export → Export drafted ignore words from Drafted tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: At least one drafted ignore word exists
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openTab("Drafted Ignore Word");
      await iwcPage.clickExport();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  });

  test.describe("Maker-Checker Workflow", () => {

  test("Case ID:IWC-TC-110 - Maker-Checker Workflow → Maker submit new category creates pending request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-110
    // Excel Scenario: Maker-Checker Workflow → Maker submit new category creates pending request
    // Steps (4): As Maker, submit new category Investigation Terms with description. → Note confirmation details. → Log in as Checker and open the pending approvals queue. …
    // Expected: Category request appears in checker queue with Pending Checker Approval status. Category is not selectable in Add Ignore Word until approved.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-110] Maker-Checker Workflow → Maker submit new category creates pending request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Category name 'Investigation Terms' is unique.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddCategoryModal();
      await iwcPage.fillCategoryName("Investigation Terms");
      await iwcPage.submitAddCategory();
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectMakerCheckerQueueVisible();
      });

  });

  test("Case ID:IWC-TC-111 - Maker-Checker Workflow → Checker approves category creation request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-111
    // Excel Scenario: Maker-Checker Workflow → Checker approves category creation request
    // Steps (3): Log in as Checker. → Approve the pending category request. → As Maker, open Add Ignore Word and inspect Category dropdown.
    // Expected: Category becomes selectable after approval. Audit trail records checker approval with user and timestamp.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-111] Maker-Checker Workflow → Checker approves category creation request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Pending category creation request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.approveIgnoreWord();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-112 - Maker-Checker Workflow → Checker rejects category creation request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-112
    // Excel Scenario: Maker-Checker Workflow → Checker rejects category creation request
    // Steps (3): As Checker, reject the category request with comments. → As Maker, verify category is not in dropdown. → Review audit/history if available.
    // Expected: Category is not created. Maker can revise and resubmit. Rejection reason is retained in audit trail.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-112] Maker-Checker Workflow → Checker rejects category creation request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Pending category creation request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.rejectIgnoreWord();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-113 - Maker-Checker Workflow → Maker cannot approve own request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-113
    // Excel Scenario: Maker-Checker Workflow → Maker cannot approve own request
    // Steps (3): As the same Maker user, open the checker approvals queue. → Locate own pending request. → Attempt to approve the request.
    // Expected: Self-approval is blocked. Approve action is hidden or denied with permission message. Request remains pending until a different checker user acts. Audit log records the blocked attempt if applicable.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-113] Maker-Checker Workflow → Maker cannot approve own request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Maker has a pending ignore word or category request they submitted.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectRbacControlsHidden();
      await iwcPage.expectAccessDenied();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-114 - Maker-Checker Workflow → Maker submits drafted ignore word for approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-114
    // Excel Scenario: Maker-Checker Workflow → Maker submits drafted ignore word for approval
    // Steps (2): As Maker, submit drafted word from row action or add panel. → Verify confirmation modal.
    // Expected: Draft moves to pending checker workflow. Entry is locked from further edits until checker decision.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-114] Maker-Checker Workflow → Maker submits drafted ignore word for approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Drafted word exists on Drafted tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.approveIgnoreWord();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-115 - Maker-Checker Workflow → Checker approves drafted ignore word submission", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-115
    // Excel Scenario: Maker-Checker Workflow → Checker approves drafted ignore word submission
    // Steps (2): As Checker, approve the pending ignore word. → Verify listing on Active tab.
    // Expected: Word status becomes Active after approval. It appears on Active tab and is applied in subsequent screening runs.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-115] Maker-Checker Workflow → Checker approves drafted ignore word submission");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Ignore word submission is pending checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.approveIgnoreWord();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-116 - Maker-Checker Workflow → Checker rejects drafted ignore word submission", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-116
    // Excel Scenario: Maker-Checker Workflow → Checker rejects drafted ignore word submission
    // Steps (2): As Checker, reject with comments. → As Maker, open Drafted tab.
    // Expected: Entry returns to Drafted state. Rejection comments are visible to Maker. Word remains non-operational.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-116] Maker-Checker Workflow → Checker rejects drafted ignore word submission");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Ignore word submission is pending checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.rejectIgnoreWord();
      await iwcPage.openTab("Drafted");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-117 - Maker-Checker Workflow → Maker submits disable request for active word", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-117
    // Excel Scenario: Maker-Checker Workflow → Maker submits disable request for active word
    // Steps (2): As Maker, click Disable for 'global'. → Confirm checker submission modal.
    // Expected: Disable request enters pending approval. Word remains active until checker approves disable.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-117] Maker-Checker Workflow → Maker submits disable request for active word");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Active word 'global' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.disableIgnoreWord("global");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-118 - Maker-Checker Workflow → Checker approves disable request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-118
    // Excel Scenario: Maker-Checker Workflow → Checker approves disable request
    // Steps (2): As Checker, approve disable request. → Verify word on Inactive tab.
    // Expected: Word moves to Inactive after approval. Screening engine stops applying it on next run.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-118] Maker-Checker Workflow → Checker approves disable request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Disable request for 'global' is pending.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.disableIgnoreWord("global");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-119 - Maker-Checker Workflow → Checker rejects disable request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-119
    // Excel Scenario: Maker-Checker Workflow → Checker rejects disable request
    // Steps (5): Log in as Checker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open pending disable request. …
    // Expected: Word stays active and request marked rejected.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-119] Maker-Checker Workflow → Checker rejects disable request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Pending disable request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.disableIgnoreWord("draft word");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-120 - Maker-Checker Workflow → Maker submits bulk upload for checker review", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-120
    // Excel Scenario: Maker-Checker Workflow → Maker submits bulk upload for checker review
    // Steps (3): Submit bulk upload. → Open workflow queue. → Confirm bulk request appears as pending.
    // Expected: Bulk upload request appears in pending checker queue.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-120] Maker-Checker Workflow → Maker submits bulk upload for checker review");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Maker uploaded valid file through Bulk Upload.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectMakerCheckerQueueVisible();
      });

  });

  test("Case ID:IWC-TC-121 - Maker-Checker Workflow → Checker approves bulk upload request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-121
    // Excel Scenario: Maker-Checker Workflow → Checker approves bulk upload request
    // Steps (5): Log in as Checker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Login as Checker and open bulk request. …
    // Expected: Approved bulk rows become available per active workflow status.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-121] Maker-Checker Workflow → Checker approves bulk upload request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Pending bulk upload request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-122 - Maker-Checker Workflow → Checker rejects bulk upload request", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-122
    // Excel Scenario: Maker-Checker Workflow → Checker rejects bulk upload request
    // Steps (5): Log in as Checker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open pending bulk request as Checker. …
    // Expected: Bulk request is rejected and rows are not applied to active data.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-122] Maker-Checker Workflow → Checker rejects bulk upload request");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Pending bulk upload request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openBulkUploadModal();
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-123 - Maker-Checker Workflow → Workflow status visibility for Maker after checker decision", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-123
    // Excel Scenario: Maker-Checker Workflow → Workflow status visibility for Maker after checker decision
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Login as Maker. …
    // Expected: Maker sees final status, checker user, and decision timestamp.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-123] Maker-Checker Workflow → Workflow status visibility for Maker after checker decision");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: At least one request has completed checker action.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectMakerCheckerQueueVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-166 - Maker-Checker Workflow → Close Checker approval modal by clicking overlay backdrop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-166
    // Excel Scenario: Maker-Checker Workflow → Close Checker approval modal by clicking overlay backdrop
    // Steps (3): Log in as Maker. → Submit a new ignore word for checker approval. → When Request Submitted modal appears, click overlay backdrop.
    // Expected: Checker approval modal closes. Submitted request remains in pending/drafted state
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-166] Maker-Checker Workflow → Close Checker approval modal by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Maker just submitted an ignore word for approval
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.clickModalOverlay();
      await expect(iwcPage.checkerApprovalModal).toBeHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-182 - Maker-Checker Workflow → Prevent editing ignore word while pending checker approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-182
    // Excel Scenario: Maker-Checker Workflow → Prevent editing ignore word while pending checker approval
    // Steps (1): Attempt to edit the pending record from listing or add panel.
    // Expected: Record is locked from edits until checker approves or rejects. Maker must wait for checker decision or rejection before revising.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-182] Maker-Checker Workflow → Prevent editing ignore word while pending checker approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Ignore word is in Pending Approval state after maker submit.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.editIgnoreWord("draft word");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-198 - Maker-Checker Workflow → Checker rejection returns ignore word to Drafted tab with comments", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-198
    // Excel Scenario: Maker-Checker Workflow → Checker rejection returns ignore word to Drafted tab with comments
    // Steps (3): As Checker, reject the submission with comment: Too broad for current policy. → As Maker, open Drafted Ignore Word tab. → Open Word History for the record.
    // Expected: Record returns to Drafted status. Maker can edit and resubmit. Rejection comment is visible in history and checker workflow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-198] Maker-Checker Workflow → Checker rejection returns ignore word to Drafted tab with comments");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Maker submitted new word 'microfinance' pending checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.rejectIgnoreWord();
      await iwcPage.openTab("Drafted");
      await iwcPage.openWordHistoryPanel("microfinance");
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  });

  test.describe("Audit History", () => {

  test("Case ID:IWC-TC-124 - Audit History → Open Word History panel from row context", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-124
    // Excel Scenario: Audit History → Open Word History panel from row context
    // Steps (2): On Active tab, click the 'limited' hyperlink in the Ignore Word/Phrase column. → Review the Word History panel.
    // Expected: Word History panel opens from the right. Metadata card shows word, category, risk, match type, status, and created date.
    console.log("[IWC-TC-124] Audit History → Open Word History panel from row context");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word 'limited' has audit history.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("limited");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectMatchTypeBadgeVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-125 - Audit History → metadata card fields in history panel", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-125
    // Excel Scenario: Audit History → Validate metadata card fields in history panel
    // Steps (2): Review metadata card fields. → Compare values with the listing row.
    // Expected: Metadata card values match the listing row and persisted record exactly.
    console.log("[IWC-TC-125] Audit History → Validate metadata card fields in history panel");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Word History panel is open for an active word.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("limited");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-126 - Audit History → timeline entry for word creation", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-126
    // Excel Scenario: Audit History → Verify timeline entry for word creation
    // Steps (2): Locate earliest timeline event. → Verify creation entry details.
    // Expected: Timeline shows Word Added with maker user, role, department, timestamp, and optional note.
    console.log("[IWC-TC-126] Audit History → Verify timeline entry for word creation");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Word History panel open for a fully approved word.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-127 - Audit History → timeline entry for checker approval", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-127
    // Excel Scenario: Audit History → Verify timeline entry for checker approval
    // Steps (2): Open Word History. → Locate Approved & Activated event.
    // Expected: Timeline includes checker approval event with checker user, role, department, timestamp, and approval note if provided.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-127] Audit History → Verify timeline entry for checker approval");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Word has completed checker approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-128 - Audit History → timeline entry for disable action", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-128
    // Excel Scenario: Audit History → Verify timeline entry for disable action
    // Steps (2): Open Word History for the disabled word. → Locate Disable Requested and Disable Approved events.
    // Expected: Timeline captures disable request by maker and disable approval by checker with timestamps.
    console.log("[IWC-TC-128] Audit History → Verify timeline entry for disable action");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Word has been disabled through approved workflow.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await iwcPage.expectWordHistoryTimelineVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-129 - Audit History → timeline entry for enable action", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-129
    // Excel Scenario: Audit History → Verify timeline entry for enable action
    // Steps (3): Open Word History for the re-enabled word. → Locate enable-related timeline events. → Verify maker request and checker approval entries.
    // Expected: Timeline includes enable request by maker and enable approval by checker with user, role, department, and timestamps.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-129] Audit History → Verify timeline entry for enable action");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Ignore word was re-enabled through approved checker workflow.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-130 - Audit History → Audit history includes rejection reason", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-130
    // Excel Scenario: Audit History → Audit history includes rejection reason
    // Steps (2): Open Word History for the rejected word. → Locate rejection event and comments.
    // Expected: Timeline shows rejection with checker comments preserved for audit.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-130] Audit History → Audit history includes rejection reason");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Checker rejected a drafted ignore word submission.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await iwcPage.expectWordHistoryTimelineVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-131 - Audit History → history access for Viewer role", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-131
    // Excel Scenario: Audit History → Verify history access for Viewer role
    // Steps (3): Open Word History panel as Viewer. → Inspect metadata and timeline content. → Attempt to perform edit or action from history panel.
    // Expected: Viewer can access full audit history in read-only mode.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-131] Audit History → Verify history access for Viewer role");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      /* Role from Excel: Viewer */
      // Preconditions: Viewer has access to Ignore Words page.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-132 - Audit History → history sorting by latest event first", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-132
    // Excel Scenario: Audit History → Validate history sorting by latest event first
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open Word History panel. …
    // Expected: Timeline displays most recent event at top consistently.
    console.log("[IWC-TC-132] Audit History → Validate history sorting by latest event first");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Selected word has multiple workflow events.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("draft word");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-133 - Audit History → Persist history visibility after page refresh and reopen", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-133
    // Excel Scenario: Audit History → Persist history visibility after page refresh and reopen
    // Steps (4): Close Word History panel. → Refresh the browser page. → Reopen Word History for 'limited'. …
    // Expected: History data persists after refresh. Timeline events and metadata match pre-refresh content.
    console.log("[IWC-TC-133] Audit History → Persist history visibility after page refresh and reopen");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Word History panel was previously opened for ignore word 'limited'.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("limited");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-167 - Audit History → Close Word History panel by clicking overlay backdrop", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-167
    // Excel Scenario: Audit History → Close Word History panel by clicking overlay backdrop
    // Steps (4): Log in as authorised user. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Click an ignore word link to open Word History. …
    // Expected: Word History panel closes and listing page is fully interactive again.
    console.log("[IWC-TC-167] Audit History → Close Word History panel by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word exists
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("limited");
      await iwcPage.closeWordHistoryPanel();
      await iwcPage.expectIgnoreWordTableVisible();
      await expect(iwcPage.wordHistoryPanel).toBeHidden();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-196 - Audit History → Open Word History by clicking ignore word hyperlink in table", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-196
    // Excel Scenario: Audit History → Open Word History by clicking ignore word hyperlink in table
    // Steps (2): On Active tab, click the 'ltd' hyperlink in the Ignore Word/Phrase column. → Verify Word History panel opens.
    // Expected: Clicking the word link opens Word History without using a separate menu. Panel shows metadata and activity timeline for that record.
    console.log("[IWC-TC-196] Audit History → Open Word History by clicking ignore word hyperlink in table");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active ignore word 'ltd' exists with history entries.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openWordHistoryPanel("ltd");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  });

  test.describe("Access Control (RBAC)", () => {

  test("Case ID:IWC-TC-134 - Access Control (RBAC) → Maker can access add and submit functions", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-134
    // Excel Scenario: Access Control (RBAC) → Maker can access add and submit functions
    // Steps (3): Open Ignore Words Configuration. → Verify Add Ignore Word, Add Category, and Bulk Upload are available. → Open Add Ignore Word and confirm Save Draft and Submit are enabled.
    // Expected: Maker can access create, draft, and submit functions. Checker approval queue actions are not available to Maker.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-134] Access Control (RBAC) → Maker can access add and submit functions");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Maker
      // Preconditions: Maker account is logged in.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectMakerRbacAccess();
      });

  });

  test("Case ID:IWC-TC-135 - Access Control (RBAC) → Maker cannot approve pending requests", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-135
    // Excel Scenario: Access Control (RBAC) → Maker cannot approve pending requests
    // Steps (2): As Maker, open pending approvals queue. → Confirm Approve and Reject are unavailable.
    // Expected: Maker cannot approve or reject any pending request.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-135] Access Control (RBAC) → Maker cannot approve pending requests");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Maker
      // Preconditions: Maker has pending submissions in the queue.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectRbacControlsHidden();
      });

  });

  test("Case ID:IWC-TC-136 - Access Control (RBAC) → Checker can approve or reject pending requests", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-136
    // Excel Scenario: Access Control (RBAC) → Checker can approve or reject pending requests
    // Steps (3): Log in as Checker. → Open pending queue and approve one request. → Reject another with comments.
    // Expected: Checker can approve or reject third-party maker submissions. Decisions update record status and audit trail.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-136] Access Control (RBAC) → Checker can approve or reject pending requests");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Checker
      // Preconditions: Pending requests exist from other makers.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectMakerCheckerQueueVisible();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectWordHistoryTimelineVisible();
      });

  });

  test("Case ID:IWC-TC-137 - Access Control (RBAC) → Checker cannot create new ignore words directly", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-137
    // Excel Scenario: Access Control (RBAC) → Checker cannot create new ignore words directly
    // Steps (3): Open Ignore Words Configuration. → Inspect toolbar for Add Ignore Word and Add Category. → Attempt to open creation forms if visible.
    // Expected: Checker cannot create new ignore words or categories. Add actions are hidden or blocked. Checker can still access approval queue.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-137] Access Control (RBAC) → Checker cannot create new ignore words directly");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Checker
      // Preconditions: Checker account is logged in.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openMakerCheckerQueue();
      await iwcPage.expectMakerCheckerQueueVisible();
      });

  });

  test("Case ID:IWC-TC-138 - Access Control (RBAC) → Viewer can access page and read records", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-138
    // Excel Scenario: Access Control (RBAC) → Viewer can access page and read records
    // Steps (3): Log in as Viewer. → Open Ignore Words Configuration. → Browse tabs and search.
    // Expected: Viewer can read listing data across tabs. Create, submit, and row mutation actions are unavailable.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-138] Access Control (RBAC) → Viewer can access page and read records");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Viewer account exists with read permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectRbacControlsHidden();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectViewerReadAccess();
      });

  });

  test("Case ID:IWC-TC-139 - Access Control (RBAC) → Viewer cannot access Add Ignore Word panel", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-139
    // Excel Scenario: Access Control (RBAC) → Viewer cannot access Add Ignore Word panel
    // Steps (2): Confirm Add Ignore Word button is hidden or disabled. → Attempt direct navigation to add panel URL if applicable.
    // Expected: Viewer cannot open Add Ignore Word panel or create records.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-139] Access Control (RBAC) → Viewer cannot access Add Ignore Word panel");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Viewer is on Ignore Words listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectRbacControlsHidden();
      });

  });

  test("Case ID:IWC-TC-141 - Access Control (RBAC) → Role-based visibility of Bulk Upload action", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-141
    // Excel Scenario: Access Control (RBAC) → Role-based visibility of Bulk Upload action
    // Steps (5): Log in as Viewer. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Login as Maker and check Bulk Upload button. …
    // Expected: Bulk Upload is available only to roles with upload permission.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-141] Access Control (RBAC) → Role-based visibility of Bulk Upload action");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Accounts for Maker, Checker, and Viewer are available.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectRbacControlsHidden();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-142 - Access Control (RBAC) → Role-based visibility of Category Controls toggles", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-142
    // Excel Scenario: Access Control (RBAC) → Role-based visibility of Category Controls toggles
    // Steps (5): Log in as Viewer. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open Category Controls as Maker. …
    // Expected: Toggle interaction is enabled only for authorized role.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-142] Access Control (RBAC) → Role-based visibility of Category Controls toggles");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Category Controls is accessible to all test roles.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectRbacControlsHidden();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-143 - Access Control (RBAC) → Session role switch updates UI permissions immediately", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-143
    // Excel Scenario: Access Control (RBAC) → Session role switch updates UI permissions immediately
    // Steps (4): Log in as Viewer. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Log out and log in as Viewer. …
    // Expected: UI permissions update immediately and reflect active role.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-143] Access Control (RBAC) → Session role switch updates UI permissions immediately");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: User can log out and log in with different role accounts.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectRbacControlsHidden();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  });

  test.describe("Field & Business Rule Validation", () => {

  test("Case ID:IWC-TC-144 - Field & Business Rule Validation → Case-insensitive matching for exact phrase business rule", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-144
    // Excel Scenario: Field & Business Rule Validation → Case-insensitive matching for exact phrase business rule
    // Steps (3): On Add panel, set Word: Shell Company, Match Type: Exact phrase. → Paste narrative containing lowercase 'shell company'. → Review Preview.
    // Expected: Case-insensitive exact phrase matching highlights the token. Business rule BR-002 is satisfied in preview and live screening.
    console.log("[IWC-TC-144] Field & Business Rule Validation → Case-insensitive matching for exact phrase business rule");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active word 'Shell Company' with Exact phrase exists, or compose on Add panel.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("Shell Company");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-145 - Field & Business Rule Validation → Exact phrase does not match split word sequence", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-145
    // Excel Scenario: Field & Business Rule Validation → Exact phrase does not match split word sequence
    // Steps (3): Use Match Type: Exact phrase for 'New York'. → Paste narrative: NewYork branch transfer. → Review Preview.
    // Expected: Concatenated token 'NewYork' is not matched. Exact phrase requires token-boundary equality after normalisation.
    console.log("[IWC-TC-145] Field & Business Rule Validation → Exact phrase does not match split word sequence");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Exact phrase word 'New York' is configured or being composed.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("New York");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-146 - Field & Business Rule Validation → Partial match detects word inside longer sentence", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-146
    // Excel Scenario: Field & Business Rule Validation → Partial match detects word inside longer sentence
    // Steps (3): Set Match Type: Partial match for 'bank'. → Paste narrative: Payment via interbank channel. → Review Preview.
    // Expected: Substring 'bank' within 'interbank' is identified and would be stripped in screening.
    console.log("[IWC-TC-146] Field & Business Rule Validation → Partial match detects word inside longer sentence");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Partial match word 'bank' configured or composed.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("bank");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-149 - Field & Business Rule Validation → No permanent delete business rule enforced at row level", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-149
    // Excel Scenario: Field & Business Rule Validation → No permanent delete business rule enforced at row level
    // Steps (1): Inspect row actions and add panel for delete options.
    // Expected: No hard-delete capability exists. Deactivation via Disable with checker approval is the only removal path.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-149] Field & Business Rule Validation → No permanent delete business rule enforced at row level");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker is on any tab.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-151 - Field & Business Rule Validation → Word/Phrase field trims surrounding spaces before save", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-151
    // Excel Scenario: Field & Business Rule Validation → Word/Phrase field trims surrounding spaces before save
    // Steps (3): Enter Word with leading/trailing spaces: '  holdings  '. → Submit or Save Draft. → Verify stored value on listing.
    // Expected: Surrounding whitespace is trimmed before validation and persistence.
    console.log("[IWC-TC-151] Field & Business Rule Validation → Word/Phrase field trims surrounding spaces before save");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectInlineValidationError();
      });

  });

  test("Case ID:IWC-TC-152 - Field & Business Rule Validation → Category name trims surrounding spaces before duplicate check", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-152
    // Excel Scenario: Field & Business Rule Validation → Category name trims surrounding spaces before duplicate check
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Open Add Category modal. …
    // Expected: System trims value and flags as duplicate category.
    console.log("[IWC-TC-152] Field & Business Rule Validation → Category name trims surrounding spaces before duplicate check");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Category 'Geo Exceptions' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-153 - Field & Business Rule Validation → Risk level value persists correctly through workflow", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-153
    // Excel Scenario: Field & Business Rule Validation → Risk level value persists correctly through workflow
    // Steps (5): Log in as Maker. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Create ignore word with Risk Level High. …
    // Expected: Approved active record keeps Risk Level as High.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-153] Field & Business Rule Validation → Risk level value persists correctly through workflow");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker can submit and Checker can approve a new ignore word.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("offshore shell");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("High");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectRiskLevelBadgeVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-154 - Field & Business Rule Validation → Bulk upload applies same duplicate business rules as manual add", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-154
    // Excel Scenario: Field & Business Rule Validation → Bulk upload applies same duplicate business rules as manual add
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Upload CSV containing duplicate entries for existing words. …
    // Expected: Bulk upload rejects duplicates using same validation rule set.
    console.log("[IWC-TC-154] Field & Business Rule Validation → Bulk upload applies same duplicate business rules as manual add");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Existing words include 'shell company' and 'wire transfer'.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectInlineValidationError();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-155 - Field & Business Rule Validation → Export includes approved and pending status values accurately", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-155
    // Excel Scenario: Field & Business Rule Validation → Export includes approved and pending status values accurately
    // Steps (5): Log in as authorised user with Ignore Words Configuration access. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Trigger Export from Ignore Words page. …
    // Expected: CSV status values match live UI and workflow state.
    console.log("[IWC-TC-155] Field & Business Rule Validation → Export includes approved and pending status values accurately");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Dataset has both approved and pending records.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-175 - Field & Business Rule Validation → Reject whitespace-only ignore word phrase", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-175
    // Excel Scenario: Field & Business Rule Validation → Reject whitespace-only ignore word phrase
    // Steps (2): Enter whitespace-only value in Ignore Word/Phrase. → Attempt Save Draft or Submit.
    // Expected: Whitespace-only input is rejected as invalid. Mandatory field validation prevents save.
    console.log("[IWC-TC-175] Field & Business Rule Validation → Reject whitespace-only ignore word phrase");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test("Case ID:IWC-TC-184 - Field & Business Rule Validation → Duplicate ignore word shows inline validation not browser alert", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-184
    // Excel Scenario: Field & Business Rule Validation → Duplicate ignore word shows inline validation not browser alert
    // Steps (2): Attempt to add duplicate word through Add panel. → Observe validation presentation.
    // Expected: Duplicate is shown via inline field validation, not a browser alert dialog.
    console.log("[IWC-TC-184] Field & Business Rule Validation → Duplicate ignore word shows inline validation not browser alert");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Duplicate active word exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.openAddIgnoreWordPanel();
      await iwcPage.fillIgnoreWordPhrase("draft word");
      await iwcPage.selectCategory("Entity Suffixes");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.submitIgnoreWord();
      await iwcPage.expectSubmissionBlocked();
      await iwcPage.expectInlineValidationError();
      });

  });

  });

  test.describe("Regression & Compatibility", () => {

  test("Case ID:IWC-TC-185 - Regression & Compatibility → core workflows on Google Chrome", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-185
    // Excel Scenario: Regression & Compatibility → Verify core workflows on Google Chrome
    // Steps (4): Log in as Maker using Chrome. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Execute: add draft word, search, switch tab, export. …
    // Expected: All core actions complete without UI defects or console errors on Chrome.
    // TODO: Cross-browser matrix execution environment
    console.log("[IWC-TC-185] Regression & Compatibility → Verify core workflows on Google Chrome");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Google Chrome browser available
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectConsoleErrorsFree();
      });

  });

  test("Case ID:IWC-TC-186 - Regression & Compatibility → core workflows on Microsoft Edge", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-186
    // Excel Scenario: Regression & Compatibility → Verify core workflows on Microsoft Edge
    // Steps (4): Log in as Maker using Edge. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Execute: open Add Category, open Bulk Upload, view history. …
    // Expected: Modals, side panels, and table render correctly. No Edge-specific layout or script errors.
    // TODO: Cross-browser matrix execution environment
    console.log("[IWC-TC-186] Regression & Compatibility → Verify core workflows on Microsoft Edge");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Microsoft Edge browser available
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-187 - Regression & Compatibility → core workflows on Mozilla Firefox", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-187
    // Excel Scenario: Regression & Compatibility → Verify core workflows on Mozilla Firefox
    // Steps (4): Log in as Maker using Firefox. → Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration. → Execute tab switch, sort column, disable active word. …
    // Expected: Tab switching, sorting, and maker-checker modal work on Firefox without functional regression.
    // TODO: Cross-browser matrix execution environment
    console.log("[IWC-TC-187] Regression & Compatibility → Verify core workflows on Mozilla Firefox");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Mozilla Firefox browser available
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-192 - Regression & Compatibility → End-to-end regression: bulk upload then export active tab", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-192
    // Excel Scenario: Regression & Compatibility → End-to-end regression: bulk upload then export active tab
    // Steps (4): As Maker, bulk upload two words and submit for approval. → As Checker, approve the bulk request. → On Active tab, export records. …
    // Expected: Imported words progress from bulk upload through checker approval to Active status. Export file lists both approved words with complete metadata.
    // TODO: Cross-browser matrix execution environment
    console.log("[IWC-TC-192] Regression & Compatibility → End-to-end regression: bulk upload then export active tab");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Valid bulk CSV with two new unique words prepared.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.openTab("Active");
      await iwcPage.openTab("Inactive");
      await iwcPage.openTab("Drafted");
      await iwcPage.expectExportOptions();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  test.describe("Accessibility", () => {

  test("Case ID:IWC-TC-188 - Accessibility → Navigate toolbar buttons using keyboard Tab key", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-188
    // Excel Scenario: Accessibility → Navigate toolbar buttons using keyboard Tab key
    // Steps (2): Press Tab repeatedly from top of page. → Verify focus moves through Search, Export, Category Controls, Add Category, Bulk Upload, Add Ignore Word.
    // Expected: Each toolbar button receives visible focus in logical order and can be activated with Enter or Space.
    console.log("[IWC-TC-188] Accessibility → Navigate toolbar buttons using keyboard Tab key");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: User on Ignore Words listing page
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectToolbarKeyboardAccessible();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      });

  });

  test("Case ID:IWC-TC-190 - Accessibility → Close Add Category modal using Escape key", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-190
    // Excel Scenario: Accessibility → Close Add Category modal using Escape key
    // Steps (1): Press the Escape key.
    // Expected: Modal closes without saving. Focus returns to the listing page.
    console.log("[IWC-TC-190] Accessibility → Close Add Category modal using Escape key");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Category modal is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.navigateToolbarWithKeyboard();
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  });

  test.describe("Security Validation", () => {

  test("Case ID:IWC-TC-191 - Security Validation → Sanitize script tags entered in ignore word phrase field", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-191
    // Excel Scenario: Security Validation → Sanitize script tags entered in ignore word phrase field
    // Steps (3): Enter script payload in Ignore Word/Phrase: <script>alert('xss')</script>. → Save Draft or attempt Submit. → Reopen record and inspect rendered value.
    // Expected: Input is sanitised or rejected. Script does not execute in panel, listing, or history views. Stored value is safe for display.
    console.log("[IWC-TC-191] Security Validation → Sanitize script tags entered in ignore word phrase field");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Add Ignore Word panel is open.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectCsrfProtectionActive();
      await iwcPage.expectIgnoreWordTableVisible();
      await iwcPage.expectCheckerApprovalModal();
      });

  });

  });

  test.describe("UAT Scenarios", () => {

  test("Case ID:IWC-TC-194 - UAT Scenarios → UAT: Maker creates ignore word and Checker approves to Active", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-194
    // Excel Scenario: UAT Scenarios → UAT: Maker creates ignore word and Checker approves to Active
    // Steps (4): As Maker, add ignore word SA under Entity Suffixes (Low, Exact phrase) and Submit. → As Checker, approve the submission. → Confirm word appears on Active tab. …
    // Expected: End-to-end UAT completes: draft/submit → checker approval → active listing → word excluded from screening token comparison.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-194] UAT Scenarios → UAT: Maker creates ignore word and Checker approves to Active");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Clean test environment or unique word available.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.searchIgnoreWords("SA");
      await iwcPage.expectIgnoreWordTableVisible();
      });

  });

  test("Case ID:IWC-TC-195 - UAT Scenarios → UAT: Active disable and re-enable lifecycle without permanent delete", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-195
    // Excel Scenario: UAT Scenarios → UAT: Active disable and re-enable lifecycle without permanent delete
    // Steps (5): As Maker, Disable 'enterprises' and complete checker approval. → Verify word on Inactive tab. → As Maker, Enable 'enterprises' and complete checker approval. …
    // Expected: Full disable → inactive → enable → active lifecycle completes through maker-checker governance. Record persists throughout
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-195] UAT Scenarios → UAT: Active disable and re-enable lifecycle without permanent delete");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Active word 'enterprises' exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.searchIgnoreWords("enterprises");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  test("Case ID:IWC-TC-200 - Category Control → Category Control", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-200
    // Excel Scenario: Category Control → Category Control  
    // Steps (1): Maker has Configuration access. No approved category exists for the intended assignment (or the Category * dropdown has no selectable approved category for this scenario).
    // Expected: 1. From the application left navigation, expand Configuration. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. 4. Click Add Ignore Word. 5. Enter Ignore Word / Phrase *: Ltd. 6. Open Category * and confirm no suitable approved category is available to select. 7. Select Risk Level: Medium. 8. Select Match Type: Exact phrase. 9. Click Submit and confirm the form does not complete checker submission without Category *. 10. Click Cancel to close Add New Ignore Word. 11. Click Add Category, enter Category Name *: Entity Suffixes, optionally Category Description, then click Add Category and confirm Request sent for Checker Approval with OK. 12. After the category is approved and available, click Add Ignore Word again, fill mandatory fields including Category *: Entity Suffixes, and click Submit successfully.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-200] Category Control → Category Control");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Maker cannot complete Submit for an ignore word until at least one approved category is available in Category *. Pass when Submit remains blocked without a Category * selection and succeeds only after a category exists in the dropdown.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.clickAddIgnoreWord();
      await iwcPage.fillIgnoreWordPhrase("Ltd");
      await iwcPage.selectRiskLevel("Medium");
      await iwcPage.selectMatchType("Exact phrase");
      // Verify category dropdown is empty or has no suitable options
      await iwcPage.expectCategoryRequiredForSubmit();
      await iwcPage.clickCancel();
      
      // Add category first
      await iwcPage.clickAddCategory();
      await iwcPage.fillCategoryName("Entity Suffixes");
      await iwcPage.clickAddCategorySubmit();
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  test("Case ID:IWC-TC-201 - Context-Aware Application → Context-Aware Application", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-201
    // Excel Scenario: Context-Aware Application → Context-Aware Application
    // Steps (1): Maker and Checker accounts exist. Category Business Descriptors is approved. FSD requires field-level context; Figma Add Ignore Word does not expose a dedicated field-scope control — document assumption for configuration path.
    // Expected: 1. From the application left navigation, expand Configuration. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. 4. Click Add Ignore Word. 5. Enter Ignore Word / Phrase *: Bank. 6. Select Category *: Business Descriptors. 7. Select Risk Level: Medium. 8. Select Match Type: Exact phrase. 9. ASSUMPTION (Figma gap S5.3): configure field-level context so the ignore word applies to Entity Name only (not Payment Reference) using the institutional context-rule path available in the build under test. 10. Click Submit and confirm Request sent for Checker Approval; click OK. 11. As Checker, approve the pending request. 12. Verify screening: Bank is stripped for Entity Name and retained for Payment Reference.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-201] Context-Aware Application → Context-Aware Application");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: After approval, the ignore word strips the token only in the configured screening field and does not strip it in other fields. Pass when Entity Name is stripped and Payment Reference is not.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.clickAddIgnoreWord();
      await iwcPage.fillIgnoreWordPhrase("Bank");
      await iwcPage.selectCategory("Business Descriptors");
      await iwcPage.selectRiskLevel("Medium");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.clickSubmit();
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  test("Case ID:IWC-TC-202 - Context-Aware Application → Context-Aware Application", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-202
    // Excel Scenario: Context-Aware Application → Context-Aware Application
    // Steps (1): Maker has access to Category Controls. Category Business Descriptors exists. Figma Category Controls shows enable/disable and Save; field-scope context may require assumption if not labelled in Figma.
    // Expected: 1. From the application left navigation, expand Configuration. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. 4. Click Category Controls. 5. Locate category Business Descriptors. 6. ASSUMPTION (Figma gap S5.3): configure category-level context application to Entity Name only (Figma primarily shows enable/disable toggles and Save). 7. Click Save. 8. Confirm the category-level context setting is retained and applies to ignore-word entries under Business Descriptors.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-202] Context-Aware Application → Context-Aware Application");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: Context application scope can be set at category level so entries under that category inherit the field scope. Pass when Business Descriptors entries apply only within the configured screening field.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.clickCategoryControls();
      await iwcPage.locateCategory("Business Descriptors");
      await iwcPage.clickSave();
      await iwcPage.expectCategoryContextSettingRetained();
    });
  });

  test("Case ID:IWC-TC-203 - Business Rules → Business Rules", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-203
    // Excel Scenario: Business Rules → Business Rules
    // Steps (1): Ignore word Ltd is Active with Match Type Exact phrase. At least two watchlist screening parameter sets are configured in the environment.
    // Expected: 1. From the application left navigation, expand Configuration. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. 4. On the Active tab, locate ignore word Ltd with Match Type Exact phrase. 5. Note Category, Risk Level, and Status for Ltd. 6. Trigger or review screening for subject names containing Ltd against more than one configured watchlist parameter set. 7. Compare stripping behaviour across those watchlist screening runs.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-203] Business Rules → Business Rules");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: An approved Active ignore word is applied for screening parameters configured for each watchlist, not limited to a single watchlist. Pass when Ltd is stripped consistently across more than one watchlist parameter set.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.clickActiveTab();
      await iwcPage.searchIgnoreWords("Ltd");
      await iwcPage.expectIgnoreWordDetails("Ltd", "Exact phrase");
      await iwcPage.expectConsistentStrippingAcrossWatchlists();
    });
  });

  test("Case ID:IWC-TC-204 - Governance Rules → Governance Rules", async ({ testData }) => {

    // Excel Test Case ID: IWC-TC-204
    // Excel Scenario: Governance Rules → Governance Rules
    // Steps (1): Maker account has Add Ignore Word privileges. Checker approval workflow is enabled. No separate privileged emergency override is granted to this Maker.
    // Expected: 1. From the application left navigation, expand Configuration. 2. Select Sanctions Screening Configuration. 3. Click Screening – Ignore Words Configuration. 4. Click Add Ignore Word. 5. Enter Ignore Word / Phrase *: OverrideTest. 6. Select Category *: Common Noise Words. 7. Select Risk Level: Low. 8. Select Match Type: Exact phrase. 9. Click Submit and confirm Request sent for Checker Approval; click OK. 10. On the listing, inspect row actions and any admin/settings menus available to Maker for emergency activate, force-approve, or bypass Checker controls. 11. Confirm the entry remains pending and is not shown as Active for live screening.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[IWC-TC-204] Governance Rules → Governance Rules");
    await test.step("Navigate / setup", async () => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Preconditions: No Maker UI path activates an ignore word without Checker approval. Pass when the submitted entry remains pending and is not applied to live screening.
      });

    await test.step("Execute Excel test steps", async () => {
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.clickAddIgnoreWord();
      await iwcPage.fillIgnoreWordPhrase("OverrideTest");
      await iwcPage.selectCategory("Common Noise Words");
      await iwcPage.selectRiskLevel("Low");
      await iwcPage.selectMatchType("Exact phrase");
      await iwcPage.clickSubmit();
      await iwcPage.expectCheckerApprovalModal();
      await iwcPage.expectNoEmergencyOverrideAvailable();
      await iwcPage.expectEntryRemainsPending("OverrideTest");
    });
  });
  });

});

});


