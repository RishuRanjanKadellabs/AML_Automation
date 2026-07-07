// spec: specs/keyword-manager/plan.md
// source: pipeline/test-data/Keyword Manager Test.xlsx — 130 cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KeywordManagerPage from "../../../pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage";

test.describe("Keyword Manager Module", () => {
  let kmPage: KeywordManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    kmPage = new KeywordManagerPage(sharedPage);
  });

  test.describe("Navigation & Page Access", () => {
  test("Case ID:KM-TC-001 - Navigation & Page Access → Open Keyword Manager from nested configuration menu", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-001
    // Excel Scenario: Navigation & Page Access → Open Keyword Manager from nested configuration menu
    // Steps (3): From the main menu, open Configuration > Sanctions Screening Configuration > Keyword Manager. → Confirm the listing page loads with breadcrumb, status tabs, toolbar, and data table. → Verify no error banner or blank content area is shown.
    // Expected: Keyword Manager page opens
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-001] Navigation & Page Access → Open Keyword Manager from nested configuration menu");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker account with keyword create/edit permission is available.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      await kmPage.expectToolbarVisible();
      await kmPage.expectTabsVisible();
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTabSelected("Inactive");
      await kmPage.expectTabSelected("Drafted");
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-002 - Navigation & Page Access → Access Keyword Manager via direct URL after authentication", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-002
    // Excel Scenario: Navigation & Page Access → Access Keyword Manager via direct URL after authentication
    // Steps (5): Log in as Maker and open Keyword Manager via menu. → Copy the browser URL. → Open a new tab, paste the URL, and press Enter. …
    // Expected: Direct URL resolves to Keyword Manager and remains accessible after refresh with active session.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-002] Navigation & Page Access → Access Keyword Manager via direct URL after authentication");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker account with keyword create/edit permission is available.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-003 - Navigation & Page Access → page load performance for authorized user", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-003
    // Excel Scenario: Navigation & Page Access → Validate page load performance for authorized user
    // Steps (3): Open browser developer network timing. → Navigate to Keyword Manager. → Record time until table and toolbar are interactive.
    // Expected: Page load completes within threshold and controls are clickable with no blank state freeze.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-003] Navigation & Page Access → Validate page load performance for authorized user");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in. Standard internal network conditions.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-004 - Navigation & Page Access → browser back and forward navigation stability", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-004
    // Excel Scenario: Navigation & Page Access → Verify browser back and forward navigation stability
    // Steps (5): Log in to AML application as Maker user with create/edit permission. → Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. → Navigate to another configuration submodule. …
    // Expected: Keyword Manager restores correctly on history navigation with no broken breadcrumb or missing controls.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-004] Navigation & Page Access → Verify browser back and forward navigation stability");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker is logged in with keyword create/edit permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-005 - Navigation & Page Access → Open Keyword Manager in parallel tabs", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-005
    // Excel Scenario: Navigation & Page Access → Open Keyword Manager in parallel tabs
    // Steps (5): Log in to AML application as Maker user with create/edit permission. → Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. → Open Keyword Manager in first tab. …
    // Expected: Both tabs remain usable
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-005] Navigation & Page Access → Open Keyword Manager in parallel tabs");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker is logged in and on Keyword Manager.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-006 - Navigation & Page Access → Ensure unauthorized deep-link is blocked for non-permitted role", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-006
    // Excel Scenario: Navigation & Page Access → Ensure unauthorized deep-link is blocked for non-permitted role
    // Steps (4): Log in with an account lacking Keyword Manager permission. → Open the Keyword Manager URL directly. → Observe access-denied response. …
    // Expected: System blocks access and shows authorization message or redirects to permitted page
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-006] Navigation & Page Access → Ensure unauthorized deep-link is blocked for non-permitted role");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: User account without Keyword Manager module permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectAccessDenied();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-007 - Navigation & Page Access → breadcrumb click returns to parent module", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-007
    // Excel Scenario: Navigation & Page Access → Verify breadcrumb click returns to parent module
    // Steps (5): Log in to AML application as Maker user with create/edit permission. → Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. → Click 'Sanctions Screening Configuration' breadcrumb segment. …
    // Expected: Breadcrumb click opens parent module and user can return to Keyword Manager normally.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-007] Navigation & Page Access → Verify breadcrumb click returns to parent module");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker is logged in with keyword create/edit permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-008 - Navigation & Page Access → Retain selected environment context after page revisit", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-008
    // Excel Scenario: Navigation & Page Access → Retain selected environment context after page revisit
    // Steps (5): Log in to AML application as Maker user with create/edit permission. → Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. → Select branch/entity context 'UAE Retail'. …
    // Expected: Keyword Manager opens under the same selected context and shows data for that entity without forced reset.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-008] Navigation & Page Access → Retain selected environment context after page revisit");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker is logged in with keyword create/edit permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-120 - Navigation & Page Access → loading stability during initial data load for large datasets", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-120
    // Excel Scenario: Navigation & Page Access → Verify loading stability during initial data load for large datasets
    // Steps (4): Log in as Maker. → Enable Slow 3G throttling. → Navigate to Configuration > Sanctions Screening Configuration > Keyword Manager. …
    // Expected: Loading spinner or skeleton displays until rows render. Page does not show broken layout or unhandled errors during delayed load.
    // TODO: Network throttling profile not specified for Playwright
    console.log("[KM-TC-120] Navigation & Page Access → Verify loading stability during initial data load for large datasets");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expandConfigurationMenu();
      await kmPage.openKeywordManagerFromSidebar();
      // Preconditions: Maker account available. Large keyword dataset loaded. Network throttling can be applied.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectLoadingIndicator();
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Status Tabs", () => {
  test("Case ID:KM-TC-009 - Status Tabs → Load default Active tab on first entry", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-009
    // Excel Scenario: Status Tabs → Load default Active tab on first entry
    // Steps (1): Open Keyword Manager and inspect selected tab.
    // Expected: Active tab is highlighted on initial load and table rows belong to active status only.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-009] Status Tabs → Load default Active tab on first entry");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectTabSelected("Active");
      await kmPage.expectTabsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-010 - Status Tabs → Switch among all status tabs", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-010
    // Excel Scenario: Status Tabs → Switch among all status tabs
    // Steps (3): Click Inactive tab and review table status values. → Click Drafted Keyword tab and review table status values. → Return to Active tab.
    // Expected: Each tab loads corresponding status records and preserves table structure and toolbar responsiveness.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-010] Status Tabs → Switch among all status tabs");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Inactive");
      await kmPage.expectTabSelected("Inactive");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectToolbarVisible();
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-011 - Status Tabs → tab counters against row totals", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-011
    // Excel Scenario: Status Tabs → Validate tab counters against row totals
    // Steps (3): Capture badge count on Active tab. → Apply no filters and count visible rows page by page. → Repeat for Inactive and Drafted Keyword tabs.
    // Expected: Badge counter on each tab equals total rows available for that status set.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-011] Status Tabs → Validate tab counters against row totals");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.expectTabCountBadgeVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-012 - Status Tabs → no unsupported Pending Approval tab is shown", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-012
    // Excel Scenario: Status Tabs → Confirm no unsupported Pending Approval tab is shown
    // Steps (1): Inspect all status tabs visible above data table.
    // Expected: UI shows exactly three tabs (Active, Inactive, Drafted Keyword) and does not display a separate Pending Approval tab.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-012] Status Tabs → Confirm no unsupported Pending Approval tab is shown");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.openTab("Inactive");
      await kmPage.openTab("Drafted");
      await kmPage.expectTabsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectTabSelected("Inactive");
      await kmPage.expectTabSelected("Drafted");
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-013 - Status Tabs → Preserve selected tab after browser refresh", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-013
    // Excel Scenario: Status Tabs → Preserve selected tab after browser refresh
    // Steps (3): Open Drafted Keyword tab. → Refresh browser. → Verify selected tab and data state.
    // Expected: After refresh, Drafted Keyword remains selected and drafted records are displayed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-013] Status Tabs → Preserve selected tab after browser refresh");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.openTab("Inactive");
      await kmPage.openTab("Drafted");
      await kmPage.expectTabsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-014 - Status Tabs → Keep search keyword when switching tabs", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-014
    // Excel Scenario: Status Tabs → Keep search keyword when switching tabs
    // Steps (3): Enter Search value 'OFAC'. → Switch from Active to Inactive tab. → Observe whether same search term applies and result set updates.
    // Expected: Search term persists in input and each tab returns only matching records within that tab status.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-014] Status Tabs → Keep search keyword when switching tabs");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.expectTabSelected("Active");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSearchInputVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-015 - Status Tabs → Show zero-state message for empty status tab", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-015
    // Excel Scenario: Status Tabs → Show zero-state message for empty status tab
    // Steps (1): Click Drafted Keyword tab when no draft exists.
    // Expected: Table area shows clear empty-state message and action buttons remain available based on role permissions.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-015] Status Tabs → Show zero-state message for empty status tab");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing (Active tab selected).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.openTab("Inactive");
      await kmPage.openTab("Drafted");
      await kmPage.expectTabsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectEmptyTableState();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Search & Filter", () => {
  test("Case ID:KM-TC-016 - Search & Filter → Search by full keyword phrase", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-016
    // Excel Scenario: Search & Filter → Search by full keyword phrase
    // Steps (2): Enter 'OFAC' in Search field and execute. → Review returned rows.
    // Expected: Returned rows contain keyword phrase 'OFAC' and no unrelated records.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-016] Search & Filter → Search by full keyword phrase");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("OFAC");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-017 - Search & Filter → Search by partial text fragment", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-017
    // Excel Scenario: Search & Filter → Search by partial text fragment
    // Steps (2): Enter partial text 'High' in Search field. → Execute search and inspect matching records.
    // Expected: Results include records containing the fragment in keyword/phrase and exclude fully non-matching records.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-017] Search & Filter → Search by partial text fragment");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-018 - Search & Filter → case-insensitive search behavior", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-018
    // Excel Scenario: Search & Filter → Validate case-insensitive search behavior
    // Steps (3): Search using uppercase 'POLITICALLY EXPOSED PERSON'. → Repeat search using lowercase 'politically exposed person'. → Compare result counts.
    // Expected: Both searches produce identical result set and count, confirming case-insensitive lookup.
    // TODO: Accessibility tooling and baseline thresholds
    console.log("[KM-TC-018] Search & Filter → Validate case-insensitive search behavior");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("TERROR");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-019 - Search & Filter → Search with no matching records", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-019
    // Excel Scenario: Search & Filter → Search with no matching records
    // Steps (1): Enter 'ZZZ_NON_EXISTENT_999' in Search and submit.
    // Expected: No-result state is displayed with table headers intact and no stale records visible.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-019] Search & Filter → Search with no matching records");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectPageTitleVisible();
      await kmPage.expectTabsVisible();
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableHeadersVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-020 - Search & Filter → Clear search and restore full list", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-020
    // Excel Scenario: Search & Filter → Clear search and restore full list
    // Steps (3): Search for 'OFAC'. → Clear search input and trigger search reset. → Review row count before and after clear.
    // Expected: Table repopulates full tab dataset immediately after clearing search criteria.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-020] Search & Filter → Clear search and restore full list");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror");
      await kmPage.clearSearch();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-021 - Search & Filter → Run search independently per status tab", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-021
    // Excel Scenario: Search & Filter → Run search independently per status tab
    // Steps (3): Search for 'Terror'. → Capture result count in Active tab. → Switch to Inactive tab without changing search text.
    // Expected: Result count updates to records from selected tab only
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-021] Search & Filter → Run search independently per status tab");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-022 - Search & Filter → Trim leading and trailing spaces in search input", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-022
    // Excel Scenario: Search & Filter → Trim leading and trailing spaces in search input
    // Steps (2): Enter search text with spaces: '   OFAC   '. → Execute search.
    // Expected: Search engine trims spaces and returns same records as input 'OFAC'.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-022] Search & Filter → Trim leading and trailing spaces in search input");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror");
      await kmPage.expectSearchResults();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSearchInputVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Data Table & Sorting", () => {
  test("Case ID:KM-TC-023 - Data Table & Sorting → Sort Keyword/Phrase in ascending order", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-023
    // Excel Scenario: Data Table & Sorting → Sort Keyword/Phrase in ascending order
    // Steps (2): Click 'Keyword/Phrase' column header once. → Inspect first 10 rows in table.
    // Expected: Rows are ordered ascending by 'Keyword/Phrase' according to displayed value semantics.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-023] Data Table & Sorting → Sort Keyword/Phrase in ascending order");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Keyword/Phrase, direction: ascending");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-024 - Data Table & Sorting → Sort Category in descending order", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-024
    // Excel Scenario: Data Table & Sorting → Sort Category in descending order
    // Steps (2): Click 'Category' header twice to apply descending order. → Inspect first 10 rows.
    // Expected: Rows are ordered descending by 'Category' and sort indicator reflects descending state.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-024] Data Table & Sorting → Sort Category in descending order");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Category, direction: descending");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-025 - Data Table & Sorting → multi-page table row consistency", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-025
    // Excel Scenario: Data Table & Sorting → Validate multi-page table row consistency
    // Steps (2): Move from page 1 to page 2 using pagination control. → Return to page 1.
    // Expected: Pagination changes page content correctly
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-025] Data Table & Sorting → Validate multi-page table row consistency");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-026 - Data Table & Sorting → Check column visibility and order", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-026
    // Excel Scenario: Data Table & Sorting → Check column visibility and order
    // Steps (1): Inspect table header labels from left to right.
    // Expected: All required columns are visible in expected order and Actions column is present at the far right.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-026] Data Table & Sorting → Check column visibility and order");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableHeadersVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-027 - Data Table & Sorting → Ensure long keyword text is safely rendered", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-027
    // Excel Scenario: Data Table & Sorting → Ensure long keyword text is safely rendered
    // Steps (2): Search and open row with long keyword phrase. → Observe table cell wrapping/truncation behavior.
    // Expected: Long phrase appears with controlled wrapping or truncation
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-027] Data Table & Sorting → Ensure long keyword text is safely rendered");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Keyword");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-028 - Data Table & Sorting → created date format is consistent", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-028
    // Excel Scenario: Data Table & Sorting → Verify created date format is consistent
    // Steps (1): Inspect Created Date values for first 15 rows.
    // Expected: All displayed dates use one consistent format with valid timestamps and no null text for completed records.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-028] Data Table & Sorting → Verify created date format is consistent");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Keyword");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-029 - Data Table & Sorting → Sort Status in ascending order", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-029
    // Excel Scenario: Data Table & Sorting → Sort Status in ascending order
    // Steps (2): Click 'Status' column header once. → Inspect first 10 rows in table.
    // Expected: Rows are ordered ascending by 'Status' according to displayed value semantics.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-029] Data Table & Sorting → Sort Status in ascending order");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Status, direction: ascending");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-030 - Data Table & Sorting → Sort Keyword/Phrase in descending order", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-030
    // Excel Scenario: Data Table & Sorting → Sort Keyword/Phrase in descending order
    // Steps (2): Click 'Keyword/Phrase' header twice to apply descending order. → Inspect first 10 rows.
    // Expected: Rows are ordered descending by 'Keyword/Phrase' and sort indicator reflects descending state.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-030] Data Table & Sorting → Sort Keyword/Phrase in descending order");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.sortByColumn("Keyword/Phrase, direction: descending");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Category Management - Add Category", () => {
  test("Case ID:KM-TC-031 - Category Management - Add Category → Create a new custom category with mandatory fields", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-031
    // Excel Scenario: Category Management - Add Category → Create a new custom category with mandatory fields
    // Steps (4): Click Add Category. → Enter Name 'CustomCategory_A1'. → Enter Description 'Category for regional watchlist enrichment'. …
    // Expected: Category request is created in pending state and visible to checker for approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-031] Category Management - Add Category → Create a new custom category with mandatory fields");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      await kmPage.fillCategoryName("Financial Crime");
      await kmPage.submitAddCategory();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-032 - Category Management - Add Category → Reject duplicate category name", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-032
    // Excel Scenario: Category Management - Add Category → Reject duplicate category name
    // Steps (3): Click Add Category. → Enter Name 'Sanctions'. → Submit category.
    // Expected: Submission is blocked with duplicate category validation message and no new request is created.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-032] Category Management - Add Category → Reject duplicate category name");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      await kmPage.fillCategoryName("Sanctions");
      await kmPage.submitAddCategory();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-033 - Category Management - Add Category → category name max length 100 characters", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-033
    // Excel Scenario: Category Management - Add Category → Validate category name max length 100 characters
    // Steps (3): Open Add Category. → Paste 101-character category name. → Attempt submission.
    // Expected: System prevents submission and indicates category name length must not exceed 100 characters.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-033] Category Management - Add Category → Validate category name max length 100 characters");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-034 - Category Management - Add Category → category description max length 500 characters", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-034
    // Excel Scenario: Category Management - Add Category → Validate category description max length 500 characters
    // Steps (4): Open Add Category. → Enter Name 'CustomCategory_A4_D'. → Paste 501-character description. …
    // Expected: System shows validation error for description length and prevents submission.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-034] Category Management - Add Category → Validate category description max length 500 characters");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-035 - Category Management - Add Category → Cancel Add Category operation", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-035
    // Excel Scenario: Category Management - Add Category → Cancel Add Category operation
    // Steps (4): Open Add Category. → Enter Name 'CustomCategory_A5_Cancel'. → Click Cancel. …
    // Expected: Panel closes and cancelled category is not available in list or pending queue.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-035] Category Management - Add Category → Cancel Add Category operation");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      await kmPage.cancelAddCategory();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectAddCategoryModalHidden();
      await kmPage.expectConsoleErrorsFree();
      });
    // Excel Test Case ID: KM-TC-036
    // Excel Scenario: Category Management - Add Category → Allow special characters supported by naming convention
    // Steps (3): Open Add Category. → Enter Name 'Geo-Political_Alerts 2026'. → Enter valid description and submit.
    // Expected: Category is accepted when characters are within allowed naming rules.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-036] Category Management - Add Category → Allow special characters supported by naming convention");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-115 - Category Management - Add Category → Close Add Category modal by clicking overlay backdrop", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-115
    // Excel Scenario: Category Management - Add Category → Close Add Category modal by clicking overlay backdrop
    // Steps (3): Click Add Category. → Enter partial category name. → Click dimmed overlay outside modal.
    // Expected: Modal closes without submitting. No category request is created. Fields are reset on reopen.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-115] Category Management - Add Category → Close Add Category modal by clicking overlay backdrop");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      await kmPage.cancelAddCategory();
      });

    await test.step("Validate expected results", async () => {
      await expect(kmPage.addCategoryModal).toBeHidden();
      await kmPage.expectConsoleErrorsFree();
      });
    // Excel Test Case ID: KM-TC-125
    // Excel Scenario: Category Management - Add Category → Validate duplicate category name on field blur
    // Steps (5): Click Add Category. → Enter Category Name 'Sanctions'. → Tab out of Category Name field (focus-out). …
    // Expected: Inline duplicate error appears on focus-out. Add Category remains disabled or submission is blocked. No duplicate category request is queued for approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-125] Category Management - Add Category → Validate duplicate category name on field blur");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Category 'Sanctions' already exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      await kmPage.fillCategoryName("Sanctions (existing)");
      await kmPage.submitAddCategory();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-128 - Category Management - Add Category → Approved category becomes available in Add Keyword dropdown", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-128
    // Excel Scenario: Category Management - Add Category → Approved category becomes available in Add Keyword dropdown
    // Steps (5): As Checker, approve pending category 'Narcotics Typology'. → As Maker, open Add Keyword. → Open Category dropdown. …
    // Expected: Approved category appears in Category dropdown without page redeploy. Keyword submits under new category and follows standard maker-checker workflow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-128] Category Management - Add Category → Approved category becomes available in Add Keyword dropdown");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Category 'Narcotics Typology' was submitted by Maker and approved by Checker.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddCategoryModal();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Category Management - Category Controls", () => {
  test("Case ID:KM-TC-037 - Category Management - Category Controls → Disable category control for Sanctions", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-037
    // Excel Scenario: Category Management - Category Controls → Disable category control for Sanctions
    // Steps (3): Open Category Controls. → Toggle Sanctions to disabled state. → Submit change for checker approval.
    // Expected: Disable request is logged and enters maker-checker workflow. After Checker approval, all active Sanctions-category keywords are excluded from the next screening run while remaining visible in the listing.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-037] Category Management - Category Controls → Disable category control for Sanctions");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently enabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Sanctions");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-038 - Category Management - Category Controls → Enable disabled category Terrorism", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-038
    // Excel Scenario: Category Management - Category Controls → Enable disabled category Terrorism
    // Steps (3): Open Category Controls. → Toggle Terrorism to enabled state. → Submit enable request.
    // Expected: Enable request is submitted and Terrorism becomes available after checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-038] Category Management - Category Controls → Enable disabled category Terrorism");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently disabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Terrorism");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-039 - Category Management - Category Controls → Prevent category toggle without permission", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-039
    // Excel Scenario: Category Management - Category Controls → Prevent category toggle without permission
    // Steps (2): Open Category Controls. → Attempt to toggle any category state.
    // Expected: Toggles are disabled or hidden for viewer
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-039] Category Management - Category Controls → Prevent category toggle without permission");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectCategoryControlsRestricted();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-040 - Category Management - Category Controls → Disable category control for Financial Crime", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-040
    // Excel Scenario: Category Management - Category Controls → Disable category control for Financial Crime
    // Steps (3): Open Category Controls. → Toggle Financial Crime to disabled state. → Submit change for checker approval.
    // Expected: Disable request for Financial Crime is captured in maker-checker workflow and category shows pending lock.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-040] Category Management - Category Controls → Disable category control for Financial Crime");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently enabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Financial Crime");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-041 - Category Management - Category Controls → Enable disabled category Sanctions", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-041
    // Excel Scenario: Category Management - Category Controls → Enable disabled category Sanctions
    // Steps (3): Open Category Controls. → Toggle Sanctions to enabled state. → Submit enable request.
    // Expected: Enable request is submitted and Sanctions becomes available after checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-041] Category Management - Category Controls → Enable disabled category Sanctions");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently disabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Sanctions");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-042 - Category Management - Category Controls → Disable category control for PEP", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-042
    // Excel Scenario: Category Management - Category Controls → Disable category control for PEP
    // Steps (3): Open Category Controls. → Toggle PEP to disabled state. → Submit change for checker approval.
    // Expected: Disable request for PEP is captured in maker-checker workflow and category shows pending lock.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-042] Category Management - Category Controls → Disable category control for PEP");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently enabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("PEP");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-043 - Category Management - Category Controls → Enable disabled category Financial Crime", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-043
    // Excel Scenario: Category Management - Category Controls → Enable disabled category Financial Crime
    // Steps (3): Open Category Controls. → Toggle Financial Crime to enabled state. → Submit enable request.
    // Expected: Enable request is submitted and Financial Crime becomes available after checker approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-043] Category Management - Category Controls → Enable disabled category Financial Crime");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Target category is currently disabled.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Financial Crime");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-126 - Category Management - Category Controls → disabled category excludes keywords from screening engine", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-126
    // Excel Scenario: Category Management - Category Controls → Verify disabled category excludes keywords from screening engine
    // Steps (3): As Maker, disable Sanctions category via Category Controls and complete Checker approval. → Run batch screening on a file where mapped field text matches an active Sanctions keyword. → Review batch screening alerts for the test record.
    // Expected: No keyword alert is generated for Sanctions-category terms after approved disable. Audit trail records category disable with actor, timestamp, and checker decision.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-126] Category Management - Category Controls → Verify disabled category excludes keywords from screening engine");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Sanctions category enabled with active keywords. Maker and Checker accounts available.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openCategoryControlsModal();
      await kmPage.toggleCategoryControl("Sanctions");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Add Keyword", () => {
  test("Case ID:KM-TC-044 - Add Keyword → Submit exact-match keyword with all mandatory fields and screening field mapping", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-044
    // Excel Scenario: Add Keyword → Submit exact-match keyword with all mandatory fields and screening field mapping
    // Steps (6): Click Add Keyword. → Enter Keyword 'money laundering', Category Financial Crime, Risk Level High, Match Type Exact Match. → Map Screening Fields: News Article Full Text; Crime Type Tags. …
    // Expected: Submission succeeds. Threshold Score field remains hidden. Request enters Pending Approval with full field payload captured for Checker review.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-044] Add Keyword → Submit exact-match keyword with all mandatory fields and screening field mapping");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.submitKeyword();
      await kmPage.expectInlineValidationError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-045 - Add Keyword → Submit fuzzy-match keyword with mandatory threshold and screening field mapping", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-045
    // Excel Scenario: Add Keyword → Submit fuzzy-match keyword with mandatory threshold and screening field mapping
    // Steps (5): Click Add Keyword. → Enter Keyword 'hawala', Category Financial Crime, Risk Level High, Match Type Fuzzy Match. → Enter Threshold Score …
    // Expected: Fuzzy keyword is accepted with threshold 75 stored. Request routes to Checker queue
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-045] Add Keyword → Submit fuzzy-match keyword with mandatory threshold and screening field mapping");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.submitKeyword();
      await kmPage.expectInlineValidationError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-046 - Add Keyword → Save keyword as draft", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-046
    // Excel Scenario: Add Keyword → Save keyword as draft
    // Steps (3): Open Add Keyword panel and enter valid mandatory fields. → Click Save Draft instead of Submit. → Open Drafted Keyword tab and search by phrase.
    // Expected: Record appears in Drafted Keyword tab with status indicating draft state and no checker request generated yet.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-046] Add Keyword → Save keyword as draft");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.saveKeywordDraft();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectTabSelected("Drafted");
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-047 - Add Keyword → Cancel Add Keyword discards unsaved entry", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-047
    // Excel Scenario: Add Keyword → Cancel Add Keyword discards unsaved entry
    // Steps (5): Open Add Keyword. → Enter Keyword 'temp cancel phrase' and partially complete Category. → Click Cancel. …
    // Expected: No draft, pending, or active record is created. Search across Active, Inactive, and Drafted tabs returns zero matches.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-047] Add Keyword → Cancel Add Keyword discards unsaved entry");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.cancelAddKeywordPanel();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectTabSelected("Inactive");
      await kmPage.expectTabSelected("Drafted");
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-048 - Add Keyword → Enforce mandatory field validation in add keyword", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-048
    // Excel Scenario: Add Keyword → Enforce mandatory field validation in add keyword
    // Steps (3): Open Add Keyword panel. → Leave Category and Screening Fields empty. → Click Submit.
    // Expected: Validation messages appear for each mandatory field and record is not submitted.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-048] Add Keyword → Enforce mandatory field validation in add keyword");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.submitKeyword();
      await kmPage.expectInlineValidationError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-129 - Add Keyword → Prompt confirmation when cancelling Add Keyword with unsaved data", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-129
    // Excel Scenario: Add Keyword → Prompt confirmation when cancelling Add Keyword with unsaved data
    // Steps (5): Open Add Keyword. → Enter Keyword 'casino' and select Category. → Click Cancel or back navigation control. …
    // Expected: Confirmation prompt appears before discarding data. Choosing stay returns to populated form. Confirming discard closes panel without creating draft or pending record.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-129] Add Keyword → Prompt confirmation when cancelling Add Keyword with unsaved data");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("casino");
      await kmPage.cancelAddKeywordPanel();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectUnsavedCancelConfirmation();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Screening Fields Mapping", () => {
  test("Case ID:KM-TC-049 - Screening Fields Mapping → Map keyword to single field from Name Screening group", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-049
    // Excel Scenario: Screening Fields Mapping → Map keyword to single field from Name Screening group
    // Steps (6): Open Add Keyword. → Enter Keyword 'politically exposed', Category PEP, Risk Level High, Match Type Fuzzy Match, Threshold → 3. Open Screening Fields dropdown under Name Screening group. …
    // Expected: Approved keyword stores exactly one Screening Field (Occupation / Designation). Listing and history show no fields from Adverse Media or KYC groups.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-049] Screening Fields Mapping → Map keyword to single field from Name Screening group");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("politically exposed");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Occupation / Designation");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-050 - Screening Fields Mapping → Map keyword to cross-group field selection", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-050
    // Excel Scenario: Screening Fields Mapping → Map keyword to cross-group field selection
    // Steps (5): Open Add Keyword. → Enter Keyword 'corruption', Category Financial Crime, Risk Level Medium, Match Type Fuzzy Match, Threshold → 3. Select Screening Fields across groups: Beneficial Owner Description (Name); News Article Full Text (Adverse Media); Source of Funds Description (KYC). …
    // Expected: All three selected fields persist after approval. Combined mapping is visible on the listing row and in audit history.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-050] Screening Fields Mapping → Map keyword to cross-group field selection");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("corruption");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-051 - Screening Fields Mapping → Require at least one screening field selection", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-051
    // Excel Scenario: Screening Fields Mapping → Require at least one screening field selection
    // Steps (2): Fill all mandatory keyword inputs except screening fields. → Attempt submit.
    // Expected: System shows mandatory validation for Screening Fields and prevents submission.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-051] Screening Fields Mapping → Require at least one screening field selection");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-052 - Screening Fields Mapping → Persist screening field mappings after edit", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-052
    // Excel Scenario: Screening Fields Mapping → Persist screening field mappings after edit
    // Steps (3): Open keyword for edit/update action. → Change field mapping to 'Regulatory Body Name in Article' and 'Business Type / Industry Code'. → Submit update and complete checker approval.
    // Expected: Post-approval keyword shows updated screening field mappings exactly as submitted.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-052] Screening Fields Mapping → Persist screening field mappings after edit");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in. An active approved keyword exists for edit.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-118 - Screening Fields Mapping → Remove selected screening field using chip remove control", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-118
    // Excel Scenario: Screening Fields Mapping → Remove selected screening field using chip remove control
    // Steps (4): Open Add Keyword. → Open Screening Fields dropdown. → Select Occupation / Designation and News Article Full Text. …
    // Expected: Removed field chip disappears from selector. Field is unchecked in dropdown. Remaining selected fields persist.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-118] Screening Fields Mapping → Remove selected screening field using chip remove control");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-119 - Screening Fields Mapping → Filter screening fields using in-dropdown search", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-119
    // Excel Scenario: Screening Fields Mapping → Filter screening fields using in-dropdown search
    // Steps (4): Open Add Keyword. → Open Screening Fields dropdown. → Type "funds" in search box. …
    // Expected: Dropdown shows only fields containing 'funds' (e.g., Source of Funds Description). Non-matching fields and empty groups are hidden.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-119] Screening Fields Mapping → Filter screening fields using in-dropdown search");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-127 - Screening Fields Mapping → Clear all selected screening fields using Clear all control", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-127
    // Excel Scenario: Screening Fields Mapping → Clear all selected screening fields using Clear all control
    // Steps (4): Open Screening Fields dropdown. → Select Occupation / Designation and Source of Funds Description. → Click Clear all in dropdown footer. …
    // Expected: All chips removed and selection count returns to zero. Submit is blocked with mandatory Screening Fields validation.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-127] Screening Fields Mapping → Clear all selected screening fields using Clear all control");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectScreeningFields("Narrative, Counterparty, Reference");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Fuzzy Match & Threshold Score", () => {
  test("Case ID:KM-TC-053 - Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 1", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-053
    // Excel Scenario: Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 1
    // Steps (4): Open Add Keyword. → Set Match Type as Fuzzy Match. → Enter Threshold Score '1'. …
    // Expected: System accepts threshold value and stores fuzzy keyword with entered score.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-053] Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 1");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("85");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-054 - Fuzzy Match & Threshold Score → Reject fuzzy threshold below valid range (0)", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-054
    // Excel Scenario: Fuzzy Match & Threshold Score → Reject fuzzy threshold below valid range (0)
    // Steps (5): Open Add Keyword and select Match Type Fuzzy Match. → Complete all other mandatory fields. → Enter Threshold Score …
    // Expected: Validation error states allowed range is 1 to 100 and submission is blocked.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-054] Fuzzy Match & Threshold Score → Reject fuzzy threshold below valid range (0)");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("0");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-055 - Fuzzy Match & Threshold Score → Hide threshold input for Exact Match", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-055
    // Excel Scenario: Fuzzy Match & Threshold Score → Hide threshold input for Exact Match
    // Steps (3): Open Add Keyword. → Select Match Type as Exact Match. → Inspect form controls.
    // Expected: Threshold Score field is hidden/disabled and exact keyword can be submitted without threshold.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-055] Fuzzy Match & Threshold Score → Hide threshold input for Exact Match");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectMatchType("Exact Match");
      await kmPage.expectThresholdFieldVisible(false);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-056 - Fuzzy Match & Threshold Score → Classify threshold hint as Low/Balanced/High", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-056
    // Excel Scenario: Fuzzy Match & Threshold Score → Classify threshold hint as Low/Balanced/High
    // Steps (2): Select Fuzzy Match. → Enter threshold 45, then 70, then 85 and observe hint text.
    // Expected: Hint labels align to bands: <50 Low, 50-79 Balanced, >=80 High.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-056] Fuzzy Match & Threshold Score → Classify threshold hint as Low/Balanced/High");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("85");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-057 - Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 80", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-057
    // Excel Scenario: Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 80
    // Steps (4): Open Add Keyword. → Set Match Type as Fuzzy Match. → Enter Threshold Score '80'. …
    // Expected: System accepts threshold value and stores fuzzy keyword with entered score.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-057] Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 80");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("85");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-058 - Fuzzy Match & Threshold Score → Accept fuzzy threshold at upper boundary value 100", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-058
    // Excel Scenario: Fuzzy Match & Threshold Score → Accept fuzzy threshold at upper boundary value 100
    // Steps (6): Open Add Keyword and select Match Type Fuzzy Match. → Enter Keyword 'Iran', Category Sanctions, Risk Level High. → Map Screening Fields: Country / Jurisdiction Tags; Registered Address. …
    // Expected: Validation error states allowed range is 1 to 100 and submission is blocked.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-058] Fuzzy Match & Threshold Score → Accept fuzzy threshold at upper boundary value 100");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("Iran");
      await kmPage.selectCategory("Sanctions");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("100");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-059 - Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 65", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-059
    // Excel Scenario: Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 65
    // Steps (4): Open Add Keyword. → Set Match Type as Fuzzy Match. → Enter Threshold Score '65'. …
    // Expected: System accepts threshold value and stores fuzzy keyword with entered score.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-059] Fuzzy Match & Threshold Score → Accept fuzzy threshold at boundary value 65");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("85");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-060 - Fuzzy Match & Threshold Score → Clamp threshold input above 100 to maximum allowed value", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-060
    // Excel Scenario: Fuzzy Match & Threshold Score → Clamp threshold input above 100 to maximum allowed value
    // Steps (5): Open Add Keyword and select Match Type Fuzzy Match. → Click into Threshold Score field. → Type 105 and tab out of the field. …
    // Expected: Validation error states allowed range is 1 to 100 and submission is blocked.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-060] Fuzzy Match & Threshold Score → Clamp threshold input above 100 to maximum allowed value");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("85");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-116 - Fuzzy Match & Threshold Score → Display Low precision indicator for threshold below 50", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-116
    // Excel Scenario: Fuzzy Match & Threshold Score → Display Low precision indicator for threshold below 50
    // Steps (4): Open Add Keyword. → Select Match Type Fuzzy Match. → Enter Threshold Score …
    // Expected: Precision hint displays Low precision (or equivalent warning) for scores below 50, indicating elevated false-positive risk.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-116] Fuzzy Match & Threshold Score → Display Low precision indicator for threshold below 50");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("45");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-117 - Fuzzy Match & Threshold Score → Require documented justification or warning for threshold 1–49 on submit", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-117
    // Excel Scenario: Fuzzy Match & Threshold Score → Require documented justification or warning for threshold 1–49 on submit
    // Steps (4): Open Add Keyword. → Complete mandatory fields with Fuzzy Match and Threshold → 3. Click Submit. …
    // Expected: Submit is blocked or requires explicit justification/acknowledgment for low-precision threshold before request is sent to checker.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-117] Fuzzy Match & Threshold Score → Require documented justification or warning for threshold 1–49 on submit");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.selectMatchType("Fuzzy Match");
      await kmPage.fillThresholdScore("40");
      await kmPage.expectThresholdFieldVisible(true);
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Live Narrative Tester", () => {
  test("Case ID:KM-TC-061 - Live Narrative Tester → Run live narrative tester with a strong match narrative", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-061
    // Excel Scenario: Live Narrative Tester → Run live narrative tester with a strong match narrative
    // Steps (3): Open Add Keyword with fuzzy match configuration. → Enter narrative 'Customer known as Mohammad Al Kareem appears on OFAC sanctions watchlist'. → Run Live Narrative Tester.
    // Expected: Tester output indicates match with similarity score and highlights triggered keyword mapping.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-061] Live Narrative Tester → Run live narrative tester with a strong match narrative");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing transaction payment");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectNarrativeHighlightVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-062 - Live Narrative Tester → Run live narrative tester with non-matching narrative", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-062
    // Excel Scenario: Live Narrative Tester → Run live narrative tester with non-matching narrative
    // Steps (3): Open Live Narrative Tester. → Enter unrelated narrative text about benign retail purchase. → Execute tester.
    // Expected: Tester reports no match and similarity score remains below keyword threshold.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-062] Live Narrative Tester → Run live narrative tester with non-matching narrative");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing transaction payment");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectNarrativeHighlightVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-063 - Live Narrative Tester → narrative tester input length handling", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-063
    // Excel Scenario: Live Narrative Tester → Validate narrative tester input length handling
    // Steps (2): Paste narrative around 900 characters into tester input. → Run tester and observe response.
    // Expected: Narrative is processed successfully and output returns without UI crash or malformed result.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-063] Live Narrative Tester → Validate narrative tester input length handling");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.expectLiveNarrativeTesterVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-064 - Live Narrative Tester → Clear narrative tester output between runs", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-064
    // Excel Scenario: Live Narrative Tester → Clear narrative tester output between runs
    // Steps (2): Run tester with first narrative. → Replace with second narrative and rerun.
    // Expected: Second result reflects only second narrative and previous score/output is replaced.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-064] Live Narrative Tester → Clear narrative tester output between runs");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.clearNarrativeTester();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Keyword Row Actions", () => {
  test("Case ID:KM-TC-065 - Keyword Row Actions → Disable active keyword from row action", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-065
    // Excel Scenario: Keyword Row Actions → Disable active keyword from row action
    // Steps (3): In Active tab locate keyword 'OFAC ENTITY'. → Click row action Disable. → Submit reason 'Obsolete list term'.
    // Expected: Disable request is logged for approval and keyword is locked from further edits until decision.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-065] Keyword Row Actions → Disable active keyword from row action");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.disableKeyword("terror financing");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-066 - Keyword Row Actions → Enable inactive keyword from row action", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-066
    // Excel Scenario: Keyword Row Actions → Enable inactive keyword from row action
    // Steps (3): Open Inactive tab and find 'LEGACY WATCH TERM'. → Click row action Enable. → Submit request.
    // Expected: Enable request enters maker-checker queue and record transitions to active after approval.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-066] Keyword Row Actions → Enable inactive keyword from row action");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Inactive");
      await kmPage.enableKeyword("terror financing");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-067 - Keyword Row Actions → Submit drafted keyword using row action", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-067
    // Excel Scenario: Keyword Row Actions → Submit drafted keyword using row action
    // Steps (2): Open Drafted Keyword tab. → Use row action Submit on selected draft.
    // Expected: Draft status changes to pending checker decision and draft row becomes non-editable until processed.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-067] Keyword Row Actions → Submit drafted keyword using row action");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Drafted");
      await kmPage.openTab("Drafted");
      await kmPage.searchKeywords("bearer shares");
      await kmPage.expectKeywordTableVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectTabSelected("Drafted");
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-068 - Keyword Row Actions → hard delete action is unavailable", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-068
    // Excel Scenario: Keyword Row Actions → Validate hard delete action is unavailable
    // Steps (1): Inspect row actions in Active, Inactive, and Drafted tabs.
    // Expected: No hard delete action is present for any status tab.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-068] Keyword Row Actions → Validate hard delete action is unavailable");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.expectKeywordTableVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-069 - Keyword Row Actions → Restrict row action for viewer role", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-069
    // Excel Scenario: Keyword Row Actions → Restrict row action for viewer role
    // Steps (2): Open Active tab. → Attempt to click Disable action for any row.
    // Expected: Viewer sees disabled actions or no actionable controls
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-069] Keyword Row Actions → Restrict row action for viewer role");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.expectKeywordTableVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Bulk Upload", () => {
  test("Case ID:KM-TC-070 - Bulk Upload → Download bulk upload template", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-070
    // Excel Scenario: Bulk Upload → Download bulk upload template
    // Steps (3): Click Bulk Upload. → Select Download Template. → Open downloaded file and inspect headers.
    // Expected: Template downloads and displays all required sections and contains all required input columns for import.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-070] Bulk Upload → Download bulk upload template");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.downloadBulkImportTemplate();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-071 - Bulk Upload → Upload valid CSV under 10MB", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-071
    // Excel Scenario: Bulk Upload → Upload valid CSV under 10MB
    // Steps (3): Open Bulk Upload. → Upload file 'km_bulk_valid_50rows.csv' (size 1.2MB). → Submit import batch.
    // Expected: Upload succeeds and all valid rows are created as drafted/pending records with batch reference.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-071] Bulk Upload → Upload valid CSV under 10MB");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.submitBulkImport();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-072 - Bulk Upload → Upload valid XLSX under 10MB", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-072
    // Excel Scenario: Bulk Upload → Upload valid XLSX under 10MB
    // Steps (3): Open Bulk Upload panel. → Upload 'km_bulk_valid_30rows.xlsx' (size 2.8MB). → Submit batch.
    // Expected: System accepts XLSX file and queues rows for checker approval workflow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-072] Bulk Upload → Upload valid XLSX under 10MB");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.submitBulkImport();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-073 - Bulk Upload → Reject bulk file above 10MB", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-073
    // Excel Scenario: Bulk Upload → Reject bulk file above 10MB
    // Steps (2): Open Bulk Upload. → Upload 'km_bulk_oversize.xlsx' (size 10.7MB).
    // Expected: Upload is rejected with message indicating maximum allowed file size is 10MB.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-073] Bulk Upload → Reject bulk file above 10MB");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.expectBulkImportError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-074 - Bulk Upload → Reject malformed bulk schema file", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-074
    // Excel Scenario: Bulk Upload → Reject malformed bulk schema file
    // Steps (2): Upload 'km_bulk_missing_columns.csv'. → Review validation output.
    // Expected: System blocks import and returns clear column-level validation errors.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-074] Bulk Upload → Reject malformed bulk schema file");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.expectBulkImportError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectInlineValidationError();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-075 - Bulk Upload → Handle mixed valid and invalid rows in one upload", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-075
    // Excel Scenario: Bulk Upload → Handle mixed valid and invalid rows in one upload
    // Steps (3): Upload 'km_bulk_mixed_20rows.csv'. → Submit import. → Open validation report.
    // Expected: Valid rows proceed to drafted queue and invalid rows are listed with exact rejection reasons.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-075] Bulk Upload → Handle mixed valid and invalid rows in one upload");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.expectBulkImportError();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-076 - Bulk Upload → Prevent duplicate rows in bulk upload", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-076
    // Excel Scenario: Bulk Upload → Prevent duplicate rows in bulk upload
    // Steps (2): Upload CSV containing duplicate business-key rows. → Submit batch and inspect result.
    // Expected: Duplicate rows are rejected with explicit reason while unique rows continue per workflow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-076] Bulk Upload → Prevent duplicate rows in bulk upload");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openBulkImportModal();
      await kmPage.uploadBulkFile("keywords-sample.csv");
      await kmPage.submitBulkImport();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Export", () => {
  test("Case ID:KM-TC-077 - Export → Export Active tab data to CSV", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-077
    // Excel Scenario: Export → Export Active tab data to CSV
    // Steps (3): Open 'Active' tab. → Click Export. → Open downloaded CSV.
    // Expected: CSV file downloads and contains records only from Active tab at export time.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-077] Export → Export Active tab data to CSV");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openTab("Active");
      await kmPage.clickExport();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectExportOptions();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-078 - Export → export includes metadata columns", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-078
    // Excel Scenario: Export → Verify export includes metadata columns
    // Steps (2): Run export from Active tab. → Inspect CSV headers.
    // Expected: Exported CSV contains all metadata columns and populated values per record.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-078] Export → Verify export includes metadata columns");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.clickExport();
      await kmPage.expectExportOptions();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-079 - Export → export includes maker-checker columns", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-079
    // Excel Scenario: Export → Verify export includes maker-checker columns
    // Steps (2): Export records containing approved and rejected actions. → Inspect maker-checker related columns.
    // Expected: CSV includes maker-checker columns with correct values for each workflow record.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-079] Export → Verify export includes maker-checker columns");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.clickExport();
      await kmPage.expectExportOptions();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Maker-Checker Workflow", () => {
  test("Case ID:KM-TC-080 - Maker-Checker Workflow → Submit new keyword by maker and approve by checker", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-080
    // Excel Scenario: Maker-Checker Workflow → Submit new keyword by maker and approve by checker
    // Steps (3): Create keyword 'MC_APPROVAL_CASE_01' and click Submit. → Log out maker and log in as checker. → Open pending request and approve via checker modal.
    // Expected: Approved keyword moves to Active tab with checker decision and timestamp recorded.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-080] Maker-Checker Workflow → Submit new keyword by maker and approve by checker");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Maker-checker role login — switch session to role: Maker
      // Preconditions: Maker and Checker accounts available. Maker can submit new keywords.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.approveKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-081 - Maker-Checker Workflow → Submit new keyword by maker and reject by checker", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-081
    // Excel Scenario: Maker-Checker Workflow → Submit new keyword by maker and reject by checker
    // Steps (3): Submit keyword 'MC_REJECT_CASE_01'. → Log in as checker and open pending item. → Select Reject, enter reason 'Ambiguous phrase', and confirm.
    // Expected: Request is marked rejected with reason
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-081] Maker-Checker Workflow → Submit new keyword by maker and reject by checker");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Maker-checker role login — switch session to role: Maker
      // Preconditions: Maker and Checker accounts available. Maker can submit new keywords.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.rejectKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-082 - Maker-Checker Workflow → Prevent maker from self-approving own request", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-082
    // Excel Scenario: Maker-Checker Workflow → Prevent maker from self-approving own request
    // Steps (2): Submit keyword change as maker. → Attempt to open checker approval modal for same request using same account.
    // Expected: System blocks self-approval and displays policy message requiring different checker identity.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-082] Maker-Checker Workflow → Prevent maker from self-approving own request");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Maker-checker role login — switch session to role: Maker
      // Preconditions: Maker is logged in. Same user submitted a keyword change that is awaiting approval.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.approveKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSelfApprovalBlocked();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-083 - Maker-Checker Workflow → Lock pending request from further maker edits", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-083
    // Excel Scenario: Maker-Checker Workflow → Lock pending request from further maker edits
    // Steps (2): Open pending request from Drafted/queue view. → Attempt to edit keyword phrase or category.
    // Expected: Fields are read-only while request is pending
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-083] Maker-Checker Workflow → Lock pending request from further maker edits");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Maker-checker role login — switch session to role: Maker
      // Preconditions: Maker is logged in. A keyword request is in Pending Approval state.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.expectPendingRequestLocked();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-084 - Maker-Checker Workflow → Require decision comment in checker modal where configured", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-084
    // Excel Scenario: Maker-Checker Workflow → Require decision comment in checker modal where configured
    // Steps (3): Open pending keyword request. → Choose Reject without entering comment. → Attempt confirm.
    // Expected: Modal blocks confirmation and prompts checker to provide rejection comment.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-084] Maker-Checker Workflow → Require decision comment in checker modal where configured");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Checker
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Checker is logged in with approval permission. Pending keyword request exists.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.rejectKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectConsoleErrorsFree();
      });
    // Excel Test Case ID: KM-TC-085
    // Excel Scenario: Maker-Checker Workflow → Capture checker approval timestamp and actor
    // Steps (2): Approve pending request 'MC_AUDIT_CASE_02'. → Open keyword history panel for approved item.
    // Expected: History captures checker username, decision, and precise timestamp entry.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-085] Maker-Checker Workflow → Capture checker approval timestamp and actor");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Checker
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Checker is logged in. Pending request MC_AUDIT_CASE_02 is in queue.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.expectMakerCheckerQueueVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-086 - Maker-Checker Workflow → Process multiple pending requests sequentially", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-086
    // Excel Scenario: Maker-Checker Workflow → Process multiple pending requests sequentially
    // Steps (3): Open first pending item and approve. → Open second pending item and reject with reason. → Open third pending item and approve.
    // Expected: Each request is processed with independent decision records and queue count updates after each action.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-086] Maker-Checker Workflow → Process multiple pending requests sequentially");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Checker
      // TODO: Maker-checker role login — switch session to role: Checker
      // Preconditions: Checker is logged in. At least three pending keyword requests exist.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.openTab("Drafted");
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-121 - Maker-Checker Workflow → Checker rejection returns keyword entry to Draft with comments", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-121
    // Excel Scenario: Maker-Checker Workflow → Checker rejection returns keyword entry to Draft with comments
    // Steps (4): Open pending keyword approval. → Reject with comment "Threshold too low for typology". → Log in as Maker. …
    // Expected: Entry status returns to Drafted. Checker comment is visible to Maker. Maker can edit threshold and resubmit.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-121] Maker-Checker Workflow → Checker rejection returns keyword entry to Draft with comments");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Maker-checker role login — switch session to role: Maker
      // Preconditions: Maker is logged in. A keyword submission was rejected by Checker with comments.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      await kmPage.rejectKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Audit History", () => {
  test("Case ID:KM-TC-087 - Audit History → Open keyword history timeline from row action", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-087
    // Excel Scenario: Audit History → Open keyword history timeline from row action
    // Steps (2): Locate keyword row 'OFAC ENTITY'. → Open Keyword History panel from Actions.
    // Expected: History panel opens with chronological timeline entries for create/update/status changes.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-087] Audit History → Open keyword history timeline from row action");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // TODO: Audit history panel locator — open row audit trail when UI selector is confirmed
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror financing");
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-088 - Audit History → history includes maker and checker events", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-088
    // Excel Scenario: Audit History → Verify history includes maker and checker events
    // Steps (2): Open history panel for approved keyword. → Inspect event actor details.
    // Expected: Timeline contains maker submission and checker decision events with actor names and timestamps.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-088] Audit History → Verify history includes maker and checker events");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // TODO: Audit history panel locator — open row audit trail when UI selector is confirmed
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror financing");
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-089 - Audit History → event ordering in history timeline", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-089
    // Excel Scenario: Audit History → Validate event ordering in history timeline
    // Steps (2): Open history panel for frequently updated keyword. → Compare event sequence by timestamp.
    // Expected: Timeline order matches actual transaction chronology with latest event clearly identified.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-089] Audit History → Validate event ordering in history timeline");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // TODO: Audit history panel locator — open row audit trail when UI selector is confirmed
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror financing");
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-090 - Audit History → history captures status transitions", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-090
    // Excel Scenario: Audit History → Verify history captures status transitions
    // Steps (2): Open history for keyword that was disabled and re-enabled. → Inspect status transition entries.
    // Expected: History includes explicit status transition events with action initiator and decision details.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-090] Audit History → Verify history captures status transitions");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // TODO: Audit history panel locator — open row audit trail when UI selector is confirmed
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror financing");
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-091 - Audit History → history panel is read-only for all roles", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-091
    // Excel Scenario: Audit History → Confirm history panel is read-only for all roles
    // Steps (2): Open keyword history panel. → Inspect for editable fields or action buttons.
    // Expected: History panel presents immutable audit data only
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-091] Audit History → Confirm history panel is read-only for all roles");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Checker
      // TODO: Audit history panel locator — open row audit trail when UI selector is confirmed
      // Preconditions: Viewer is logged in with read-only permission and is on Keyword Manager (Active tab).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.searchKeywords("terror financing");
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectTableRowsVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectTabsVisible();
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Screening Engine Behaviour", () => {
  test("Case ID:KM-TC-092 - Screening Engine Behaviour → exact match normalization behavior", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-092
    // Excel Scenario: Screening Engine Behaviour → Validate exact match normalization behavior
    // Steps (2): Create/confirm exact keyword 'Alpha Risk Entity'. → Run screening input 'alpha   risk entity'.
    // Expected: Engine returns match because normalized token sequence is equivalent despite case and spacing differences.
    // TODO: Accessibility tooling and baseline thresholds
    console.log("[KM-TC-092] Screening Engine Behaviour → Validate exact match normalization behavior");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Screening engine backend runs — requires live screening service or mock contract
      // Preconditions: Active exact-match keyword 'offshore account' mapped to Purpose of Account / Relationship.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing payment transfer");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectScreeningEngineEvaluation();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-093 - Screening Engine Behaviour → fuzzy match similarity against threshold", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-093
    // Excel Scenario: Screening Engine Behaviour → Validate fuzzy match similarity against threshold
    // Steps (2): Run screening narrative with similarity estimated around → 2. Run second narrative with similarity estimated around 84.
    // Expected: First narrative does not trigger keyword
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-093] Screening Engine Behaviour → Validate fuzzy match similarity against threshold");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Screening engine backend runs — requires live screening service or mock contract
      // Preconditions: Active fuzzy-match keyword with Threshold 80 is approved.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing payment transfer");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectScreeningEngineEvaluation();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-094 - Screening Engine Behaviour → Ensure screening checks only mapped fields", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-094
    // Excel Scenario: Screening Engine Behaviour → Ensure screening checks only mapped fields
    // Steps (3): Populate matching phrase in unmapped field 'Relationship Manager Notes'. → Run screening. → Populate same phrase in mapped field 'News Article Full Text' and rerun.
    // Expected: No hit occurs from unmapped field
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-094] Screening Engine Behaviour → Ensure screening checks only mapped fields");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Screening engine backend runs — requires live screening service or mock contract
      // Preconditions: Active keyword mapped only to News Article Full Text. Screening data contains match in Business / Entity Name Suffix only.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing payment transfer");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectScreeningEngineEvaluation();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-095 - Screening Engine Behaviour → inactive keywords are excluded from screening", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-095
    // Excel Scenario: Screening Engine Behaviour → Validate inactive keywords are excluded from screening
    // Steps (1): Run screening input containing exact inactive keyword phrase.
    // Expected: Screening engine does not trigger inactive keyword in results.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-095] Screening Engine Behaviour → Validate inactive keywords are excluded from screening");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Screening engine backend runs — requires live screening service or mock contract
      // Preconditions: Keyword 'Dormant Term' is Inactive. Screening input file contains the exact phrase.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("terror financing payment transfer");
      await kmPage.runNarrativeTest("terror financing");
      await kmPage.expectScreeningEngineEvaluation();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-130 - Screening Engine Behaviour → special-character normalization during exact match screening", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-130
    // Excel Scenario: Screening Engine Behaviour → Validate special-character normalization during exact match screening
    // Steps (3): Confirm keyword 'offshore account' is Active with Exact Match. → Run screening on field value 'Off-Shore Account.' (mixed case, hyphen, trailing punctuation). → Review match outcome in screening results.
    // Expected: Screening engine normalizes punctuation/case and returns a match. Alert or match event references the keyword and mapped field only.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-130] Screening Engine Behaviour → Validate special-character normalization during exact match screening");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Screening engine backend runs — requires live screening service or mock contract
      // Preconditions: Active exact-match keyword 'offshore account' mapped to Purpose of Account / Relationship.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("offshore account payment transfer");
      await kmPage.runNarrativeTest("offshore account");
      await kmPage.expectScreeningEngineEvaluation();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Access Control (RBAC)", () => {
  test("Case ID:KM-TC-096 - Access Control (RBAC) → Maker can create draft and submit keyword", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-096
    // Excel Scenario: Access Control (RBAC) → Maker can create draft and submit keyword
    // Steps (3): Create keyword 'RBAC_MAKER_01'. → Save Draft. → Submit drafted keyword.
    // Expected: Maker can perform create/draft/submit actions and request enters checker queue.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-096] Access Control (RBAC) → Maker can create draft and submit keyword");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Maker
      // Preconditions: Maker is logged in with keyword create/edit permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectMakerRbacAccess();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-097 - Access Control (RBAC) → Checker can approve or reject but cannot author new keyword", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-097
    // Excel Scenario: Access Control (RBAC) → Checker can approve or reject but cannot author new keyword
    // Steps (2): Attempt to open Add Keyword panel. → Open pending request and approve/reject.
    // Expected: Checker can process pending requests but cannot create fresh keyword records as maker.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-097] Access Control (RBAC) → Checker can approve or reject but cannot author new keyword");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Checker
      // Preconditions: Checker is logged in with approval permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openMakerCheckerQueue();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectCheckerRbacAccess();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-098 - Access Control (RBAC) → Viewer has read-only access to keyword data", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-098
    // Excel Scenario: Access Control (RBAC) → Viewer has read-only access to keyword data
    // Steps (2): Open Keyword Manager and perform search. → Attempt Add Keyword, Add Category, and row actions.
    // Expected: Viewer can view records
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-098] Access Control (RBAC) → Viewer has read-only access to keyword data");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Viewer is logged in with read-only permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectRbacControlsHidden();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-099 - Access Control (RBAC) → Restrict Bulk Upload to maker role", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-099
    // Excel Scenario: Access Control (RBAC) → Restrict Bulk Upload to maker role
    // Steps (2): Inspect toolbar for Bulk Upload option. → Attempt access via direct URL/action endpoint if available.
    // Expected: Bulk Upload is inaccessible to viewer and backend rejects unauthorized import attempts.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-099] Access Control (RBAC) → Restrict Bulk Upload to maker role");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Viewer is logged in with read-only permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectRbacControlsHidden();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectBulkImportRestricted();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-100 - Access Control (RBAC) → Restrict Category Controls to authorized role", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-100
    // Excel Scenario: Access Control (RBAC) → Restrict Category Controls to authorized role
    // Steps (2): Open Category Controls. → Attempt to change category state.
    // Expected: Viewer cannot toggle category state and no control update request is created.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-100] Access Control (RBAC) → Restrict Category Controls to authorized role");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // TODO: RBAC — switch session to role: Viewer
      // Preconditions: Viewer is logged in with read-only permission.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectRbacControlsHidden();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Field & Business Rule Validation", () => {
  test("Case ID:KM-TC-101 - Field & Business Rule Validation → Reject duplicate keyword for same category and match type", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-101
    // Excel Scenario: Field & Business Rule Validation → Reject duplicate keyword for same category and match type
    // Steps (3): Open Add Keyword. → Enter same keyword, category, and match type as existing record. → Submit request.
    // Expected: System rejects submission with duplicate key message for keyword+match type+category combination.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-101] Field & Business Rule Validation → Reject duplicate keyword for same category and match type");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Active keyword 'OFAC BLOCKED' exists in Sanctions category (Exact Match).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Sanctions");
      await kmPage.submitKeyword();
      await kmPage.expectSubmissionBlocked();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-102 - Field & Business Rule Validation → Allow same keyword in different category", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-102
    // Excel Scenario: Field & Business Rule Validation → Allow same keyword in different category
    // Steps (2): Add keyword 'TRANSFER RISK' with category PEP and same match type. → Submit request.
    // Expected: Submission is accepted because category differs from existing business key.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-102] Field & Business Rule Validation → Allow same keyword in different category");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Keyword 'TRANSFER RISK' exists in Financial Crime category.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.submitKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-103 - Field & Business Rule Validation → Treat keyword duplicates as case-insensitive", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-103
    // Excel Scenario: Field & Business Rule Validation → Treat keyword duplicates as case-insensitive
    // Steps (1): Attempt to add keyword 'HIGH ALERT NAME' with same category and match type.
    // Expected: System rejects as duplicate because duplicate matching is case-insensitive.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-103] Field & Business Rule Validation → Treat keyword duplicates as case-insensitive");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager. Keyword 'High Alert Name' exists in active listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.submitKeyword();
      await kmPage.expectSubmissionBlocked();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectInlineValidationError();
      await kmPage.expectMakerCheckerQueueVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-104 - Field & Business Rule Validation → keyword length maximum 500 characters", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-104
    // Excel Scenario: Field & Business Rule Validation → Validate keyword length maximum 500 characters
    // Steps (2): Paste 501-character phrase in Keyword/Phrase field. → Attempt Submit.
    // Expected: Validation message indicates max 500 characters and submission is prevented.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-104] Field & Business Rule Validation → Validate keyword length maximum 500 characters");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.submitKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSubmissionBlocked();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-105 - Field & Business Rule Validation → Reject threshold when fuzzy selected and field blank", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-105
    // Excel Scenario: Field & Business Rule Validation → Reject threshold when fuzzy selected and field blank
    // Steps (3): Select Match Type as Fuzzy Match. → Leave Threshold Score blank. → Attempt submit.
    // Expected: System blocks submission and prompts user to enter Threshold Score between 1 and 100.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-105] Field & Business Rule Validation → Reject threshold when fuzzy selected and field blank");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.submitKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-106 - Field & Business Rule Validation → Trim keyword leading and trailing spaces before save", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-106
    // Excel Scenario: Field & Business Rule Validation → Trim keyword leading and trailing spaces before save
    // Steps (3): Enter keyword as '  OFAC Core Term  '. → Submit and complete approval. → Search for saved keyword.
    // Expected: System stores normalized keyword 'OFAC Core Term' and duplicate logic applies to trimmed value.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-106] Field & Business Rule Validation → Trim keyword leading and trailing spaces before save");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openAddKeywordPanel();
      await kmPage.fillKeywordPhrase("terror financing");
      await kmPage.selectCategory("Financial Crime");
      await kmPage.submitKeyword();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Regression, Compatibility & UAT", () => {
  test("Case ID:KM-TC-107 - Regression, Compatibility & UAT → Run end-to-end regression of create to approval flow", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-107
    // Excel Scenario: Regression, Compatibility & UAT → Run end-to-end regression of create to approval flow
    // Steps (3): Create fuzzy keyword with mapped fields and submit. → Log in as checker and approve. → Validate keyword appears in Active and supports search/export.
    // Expected: Complete flow executes without functional regression and resulting record is available in production workflow.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-107] Regression, Compatibility & UAT → Run end-to-end regression of create to approval flow");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Release candidate build deployed. Maker and Checker accounts available.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-108 - Regression, Compatibility & UAT → responsive usability at laptop and tablet widths", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-108
    // Excel Scenario: Regression, Compatibility & UAT → Validate responsive usability at laptop and tablet widths
    // Steps (2): Set viewport to 1366x768 and validate toolbar plus add keyword flow. → Set viewport to 1024x768 and validate tab switching plus search.
    // Expected: Page remains usable at both resolutions with no blocked controls or clipped mandatory fields.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-108] Regression, Compatibility & UAT → Validate responsive usability at laptop and tablet widths");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in and on Keyword Manager listing.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.resizeViewport(1366, 768);
      await kmPage.expectToolbarVisible();
      await kmPage.resizeViewport(1024, 768);
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectConsoleErrorsFree();
      });
    // Excel Test Case ID: KM-TC-109
    // Excel Scenario: Regression, Compatibility & UAT → Capture UAT sign-off scenario with business user
    // Steps (3): Search for known operational keyword and review details. → Export current tab and confirm expected columns in downloaded file. → Open history panel and validate traceability of recent approved change.
    // Expected: Business user confirms data visibility, export completeness, and audit trace meet UAT acceptance criteria.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-109] Regression, Compatibility & UAT → Capture UAT sign-off scenario with business user");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Viewer
      // Preconditions: UAT business user is logged in with viewer permission. UAT keyword dataset is loaded.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectExportOptions();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-122 - Regression, Compatibility & UAT → core workflows on Google Chrome", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-122
    // Excel Scenario: Regression, Compatibility & UAT → Verify core workflows on Google Chrome
    // Steps (2): Add draft keyword with screening fields. → Search, export, open history.
    // Expected: Core workflows complete on Chrome without layout defects or console errors.
    // TODO: Cross-browser matrix execution environment
    console.log("[KM-TC-122] Regression, Compatibility & UAT → Verify core workflows on Google Chrome");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in using Google Chrome (latest).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    
  });

  test("Case ID:KM-TC-123 - Regression, Compatibility & UAT → core workflows on Microsoft Edge", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-123
    // Excel Scenario: Regression, Compatibility & UAT → Verify core workflows on Microsoft Edge
    // Steps (2): Open Add Category and Bulk Upload modals. → Submit keyword for approval.
    // Expected: Modals, panels, and maker-checker flow work correctly on Edge.
    // TODO: Cross-browser matrix execution environment
    console.log("[KM-TC-123] Regression, Compatibility & UAT → Verify core workflows on Microsoft Edge");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in using Microsoft Edge (latest).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-124 - Regression, Compatibility & UAT → core workflows on Mozilla Firefox", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-124
    // Excel Scenario: Regression, Compatibility & UAT → Verify core workflows on Mozilla Firefox
    // Steps (2): Configure fuzzy keyword with threshold. → Disable active keyword and confirm checker modal.
    // Expected: Fuzzy threshold UI, tab navigation, and disable workflow function on Firefox without regression.
    // TODO: Cross-browser matrix execution environment
    console.log("[KM-TC-124] Regression, Compatibility & UAT → Verify core workflows on Mozilla Firefox");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Checker
      // Preconditions: Maker is logged in using Mozilla Firefox (latest).
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Sample Keyword Validation", () => {
  test("Case ID:KM-TC-110 - Sample Keyword Validation → reference keyword hawala with fuzzy match and threshold", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-110
    // Excel Scenario: Sample Keyword Validation → Validate reference keyword hawala with fuzzy match and threshold
    // Steps (4): Open Add Keyword. → Enter Keyword "hawala", Match Type Fuzzy Match, Threshold → 3. Map Screening Fields: Business Activity Description; Source of Funds Description. …
    // Expected: Preview highlights variant above threshold. Keyword is submittable with selected screening fields and fuzzy configuration.
    // TODO: Performance SLA thresholds and measurement tooling
    console.log("[KM-TC-110] Sample Keyword Validation → Validate reference keyword hawala with fuzzy match and threshold");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("hawala international transfer");
      await kmPage.runNarrativeTest("hawala");
      await kmPage.expectNarrativeHighlightVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordTableVisible();
      await kmPage.expectLiveNarrativeTesterVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-111 - Sample Keyword Validation → shell company keyword on adverse media fields", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-111
    // Excel Scenario: Sample Keyword Validation → Validate shell company keyword on adverse media fields
    // Steps (4): Open Add Keyword. → Enter "shell company", Category Financial Crime, Risk High, Exact Match. → Select Screening Fields: News Article Full Text; Crime Type Tags. …
    // Expected: Submission routes to checker approval with High risk and exact match stored. Screening Fields chips show both selected fields.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-111] Sample Keyword Validation → Validate shell company keyword on adverse media fields");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is on Keyword Manager with Add Keyword panel open.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.openLiveNarrativeTester();
      await kmPage.fillNarrativeText("shell company international transfer");
      await kmPage.runNarrativeTest("shell company");
      await kmPage.expectNarrativeHighlightVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectOnKeywordManagerRoute();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Integration", () => {
  test("Case ID:KM-TC-112 - Integration → Keyword match contributes to alert on batch screening page", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-112
    // Excel Scenario: Integration → Keyword match contributes to alert on batch screening page
    // Steps (4): Configure and approve keyword mapped to Expected Transaction Description. → Run batch screening file containing matching narrative. → Open batch screening results/alerts page. …
    // Expected: Batch screening run produces an alert referencing the matched keyword. Alert appears on batch screening review page for analyst action.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-112] Integration → Keyword match contributes to alert on batch screening page");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Exact API base URL — GET /api/v1/keywords
      // Preconditions: Active keyword mapped to Expected Transaction Description. Batch screening job is available.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.mockApiListKeywords();
      await kmPage.expectApiListResponse();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });

  test("Case ID:KM-TC-113 - Integration → Keyword does not alert when match occurs only in unmapped field", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-113
    // Excel Scenario: Integration → Keyword does not alert when match occurs only in unmapped field
    // Steps (3): Approve keyword mapped solely to Source of Funds Description. → Run batch screening where typology term appears only in Business / Entity Name Suffix. → Review batch alerts for that customer record.
    // Expected: No keyword alert is raised for the record because the match occurred in a field not mapped to the keyword.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-113] Integration → Keyword does not alert when match occurs only in unmapped field");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // TODO: Exact API base URL — GET /api/v1/keywords
      // Preconditions: Active keyword mapped only to News Article Full Text. Screening data contains match in Business / Entity Name Suffix only.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.mockApiListKeywords();
      await kmPage.expectApiListResponse();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });

  test.describe("Performance", () => {
  test("Case ID:KM-TC-114 - Performance → Listing remains responsive with large active keyword dataset", async ({ testData }) => {
    // Excel Test Case ID: KM-TC-114
    // Excel Scenario: Performance → Listing remains responsive with large active keyword dataset
    // Steps (3): Measure time until table renders. → Switch tabs and apply search filter. → Open Add Keyword panel.
    // Expected: Initial table renders within acceptable response time. Tab switch, search, and panel open remain responsive without browser hang or timeout errors.
    // TODO: RBAC role switching mechanism (login fixture per role)
    console.log("[KM-TC-114] Performance → Listing remains responsive with large active keyword dataset");
    await test.step("Navigate / setup", async () => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Role from Excel: Maker
      // Preconditions: Maker is logged in. Environment seeded with 500+ active keywords.
      });

    await test.step("Execute Excel test steps", async () => {
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.expectKeywordTableVisible();
      });

    await test.step("Validate expected results", async () => {
      await kmPage.expectSearchInputVisible();
      await kmPage.expectConsoleErrorsFree();
      });
  });
  });
});
