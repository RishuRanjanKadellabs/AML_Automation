// spec: specs/custom-list-manager/plan.md
// source: pipeline/test-data/Custom List Manager.xlsx — 578 cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import CustomListManagerPage from "../../../pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage";

test.describe("Custom List Manager Module", () => {{arti}
  let clmPage: CustomListManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    clmPage = new CustomListManagerPage(sharedPage);
  });

  test.describe("Navigation & Access", () => {
  // Excel Test Case ID: CLM-TC-001
  // Excel Scenario: Verify authorized user can access Custom List Manager module from application navigation
  // Excel Expected Result: Custom List Manager landing page should open successfully without errors
  test("Case ID:CLM-TC-001 - Navigation & Access → authorized user can access Custom List Manager module from application navigation", async ({ testData }) => {
    await test.step("[CLM-TC-001] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-001] Executing Excel test steps: 1.Navigate to application menu 2.Click Custom List Manager");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-001] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-001] Validating: Custom List Manager landing page should open successfully without errors");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-002
  // Excel Scenario: Verify sidebar is rendered correctly on Custom List Manager pages
  // Excel Expected Result: Sidebar should remain visible and properly rendered on all module pages
  test("Case ID:CLM-TC-002 - Navigation & Access → sidebar is rendered correctly on Custom List Manager pages", async ({ testData }) => {
    await test.step("[CLM-TC-002] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-002] Executing Excel test steps: 1.Open Custom List Manager 2.Navigate between available module pages");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-002] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-002] Validating: Sidebar should remain visible and properly rendered on all module pages");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-003
  // Excel Scenario: Verify all configured menu items are visible in sidebar
  // Excel Expected Result: All configured menu items should be visible and accessible
  test("Case ID:CLM-TC-003 - Navigation & Access → all configured menu items are visible in sidebar", async ({ testData }) => {
    await test.step("[CLM-TC-003] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-003] Executing Excel test steps: 1.Open module 2.Review sidebar menu structure");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-003] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-003] Validating: All configured menu items should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-004
  // Excel Scenario: Verify active menu highlighting for currently selected page
  // Excel Expected Result: Currently selected menu item should be highlighted and visually distinguishable
  test("Case ID:CLM-TC-004 - Navigation & Access → active menu highlighting for currently selected page", async ({ testData }) => {
    await test.step("[CLM-TC-004] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-004] Executing Excel test steps: 1.Open Custom Lists page 2.Navigate to Maker-Checker 3.Navigate to Audit Trail");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Maker;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-004] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-004] Validating: Currently selected menu item should be highlighted and visually distinguishable");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-005
  // Excel Scenario: Verify navigation routing between available module pages
  // Excel Expected Result: Each menu item should open the correct destination page without routing errors
  test("Case ID:CLM-TC-005 - Navigation & Access → navigation routing between available module pages", async ({ testData }) => {
    await test.step("[CLM-TC-005] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-005] Executing Excel test steps: 1.Click each available menu option one by one");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-005] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-005] Validating: Each menu item should open the correct destination page without routing errors");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-006
  // Excel Scenario: Verify navigation state is maintained after page refresh
  // Excel Expected Result: User should remain on the same page after refresh
  test("Case ID:CLM-TC-006 - Navigation & Access → navigation state is maintained after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-006] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-006] Executing Excel test steps: 1.Navigate to a module page 2.Refresh browser");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-006] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-006] Validating: User should remain on the same page after refresh");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-007
  // Excel Scenario: Verify user identity section is displayed in sidebar
  // Excel Expected Result: User identity section should display logged-in user information
  test("Case ID:CLM-TC-007 - Navigation & Access → user identity section is displayed in sidebar", async ({ testData }) => {
    await test.step("[CLM-TC-007] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-007] Executing Excel test steps: 1.Open module 2.Review user information section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-007] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-007] Validating: User identity section should display logged-in user information");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-008
  // Excel Scenario: Verify displayed user information matches logged-in user
  // Excel Expected Result: User name and role information displayed in module should match logged-in user details
  test("Case ID:CLM-TC-008 - Navigation & Access → displayed user information matches logged-in user", async ({ testData }) => {
    await test.step("[CLM-TC-008] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-008] Executing Excel test steps: 1.Note logged-in user details 2.Open Custom List Manager 3.Verify displayed user information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-008] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-008] Validating: User name and role information displayed in module should match logged-in user details");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Breadcrumb & Top Bar", () => {
  // Excel Test Case ID: CLM-TC-009
  // Excel Scenario: Verify breadcrumb is displayed on Custom List Manager pages
  // Excel Expected Result: Breadcrumb should be visible and represent the current page hierarchy
  test("Case ID:CLM-TC-009 - Breadcrumb & Top Bar → breadcrumb is displayed on Custom List Manager pages", async ({ testData }) => {
    await test.step("[CLM-TC-009] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-009] Executing Excel test steps: 1.Open Custom Lists page 2.Navigate to available module pages");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-009] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-009] Validating: Breadcrumb should be visible and represent the current page hierarchy");
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-010
  // Excel Scenario: Verify breadcrumb updates correctly during navigation
  // Excel Expected Result: Breadcrumb should update dynamically and reflect the currently opened page
  test("Case ID:CLM-TC-010 - Breadcrumb & Top Bar → breadcrumb updates correctly during navigation", async ({ testData }) => {
    await test.step("[CLM-TC-010] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-010] Executing Excel test steps: 1.Navigate between Custom Lists, Maker-Checker and Audit Trail pages");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-010] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-010] Validating: Breadcrumb should update dynamically and reflect the currently opened page");
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-011
  // Excel Scenario: Verify breadcrumb navigation redirects user to selected level
  // Excel Expected Result: User should be redirected to the corresponding page without errors
  test("Case ID:CLM-TC-011 - Breadcrumb & Top Bar → breadcrumb navigation redirects user to selected level", async ({ testData }) => {
    await test.step("[CLM-TC-011] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-011] Executing Excel test steps: 1.Open a page containing breadcrumb hierarchy 2.Click breadcrumb link");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-011] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-011] Validating: User should be redirected to the corresponding page without errors");
      await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-012
  // Excel Scenario: Verify notification icon is displayed in top bar
  // Excel Expected Result: Notification icon should be visible and accessible from the top bar
  test("Case ID:CLM-TC-012 - Breadcrumb & Top Bar → notification icon is displayed in top bar", async ({ testData }) => {
    await test.step("[CLM-TC-012] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-012] Executing Excel test steps: 1.Open Custom List Manager");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-012] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-012] Validating: Notification icon should be visible and accessible from the top bar");
      await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-013
  // Excel Scenario: Verify notification panel opens from notification icon
  // Excel Expected Result: Notification panel should open successfully displaying available notifications
  test("Case ID:CLM-TC-013 - Breadcrumb & Top Bar → notification panel opens from notification icon", async ({ testData }) => {
    await test.step("[CLM-TC-013] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-013] Executing Excel test steps: 1.Click notification icon");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-013] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-013] Validating: Notification panel should open successfully displaying available notifications");
      await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-014
  // Excel Scenario: Verify notification panel can be closed and reopened
  // Excel Expected Result: Notification panel should close and reopen successfully without UI or functional issues
  test("Case ID:CLM-TC-014 - Breadcrumb & Top Bar → notification panel can be closed and reopened", async ({ testData }) => {
    await test.step("[CLM-TC-014] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-014] Executing Excel test steps: 1.Open notification panel 2.Close panel 3.Reopen notification panel");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-014] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-014] Validating: Notification panel should close and reopen successfully without UI or functional issues");
      await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Dashboard", () => {
  // Excel Test Case ID: CLM-TC-015
  // Excel Scenario: Verify Custom Lists dashboard header is displayed
  // Excel Expected Result: Custom Lists dashboard header should be displayed correctly
  test("Case ID:CLM-TC-015 - Dashboard → Custom Lists dashboard header is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-015] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-015] Executing Excel test steps: 1.Navigate to Custom Lists landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    });
    await test.step("[CLM-TC-015] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-015] Validating: Custom Lists dashboard header should be displayed correctly");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-016
  // Excel Scenario: Verify dashboard subtitle/description is displayed
  // Excel Expected Result: Dashboard subtitle/description should be displayed below the page header
  test("Case ID:CLM-TC-016 - Dashboard → dashboard subtitle/description is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-016] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-016] Executing Excel test steps: 1.Navigate to Custom Lists landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-016] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-016] Validating: Dashboard subtitle/description should be displayed below the page header");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-017
  // Excel Scenario: Verify all configured summary cards are displayed
  // Excel Expected Result: All configured summary cards should be visible and properly rendered
  test("Case ID:CLM-TC-017 - Dashboard → all configured summary cards are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-017] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-017] Executing Excel test steps: 1.Open Custom Lists landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardSummaryVisible();
    });
    await test.step("[CLM-TC-017] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-017] Validating: All configured summary cards should be visible and properly rendered");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-018
  // Excel Scenario: Verify summary cards display numeric metric values
  // Excel Expected Result: Each summary card should display a valid numeric value
  test("Case ID:CLM-TC-018 - Dashboard → summary cards display numeric metric values", async ({ testData }) => {
    await test.step("[CLM-TC-018] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-018] Executing Excel test steps: 1.Open Custom Lists landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardSummaryVisible();
    });
    await test.step("[CLM-TC-018] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-018] Validating: Each summary card should display a valid numeric value");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-019
  // Excel Scenario: Verify Total Lists metric count accuracy
  // Excel Expected Result: Total Lists metric should match actual number of custom lists
  test("Case ID:CLM-TC-019 - Dashboard → Total Lists metric count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-019] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-019] Executing Excel test steps: 1.Note Total Lists metric 2.Count total available custom lists");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-019] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-019] Validating: Total Lists metric should match actual number of custom lists");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-020
  // Excel Scenario: Verify Active Lists metric count accuracy
  // Excel Expected Result: Active Lists metric should match actual active custom list count
  test("Case ID:CLM-TC-020 - Dashboard → Active Lists metric count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-020] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-020] Executing Excel test steps: 1.Note Active Lists metric 2.Count active custom lists");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-020] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-020] Validating: Active Lists metric should match actual active custom list count");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-021
  // Excel Scenario: Verify Total Entities and Pending Approval metrics accuracy
  // Excel Expected Result: Displayed metrics should match actual entity and pending approval counts
  test("Case ID:CLM-TC-021 - Dashboard → Total Entities and Pending Approval metrics accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-021] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-021] Executing Excel test steps: 1.Note Total Entities and Pending Approval metrics 2.Verify actual counts");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-021] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-021] Validating: Displayed metrics should match actual entity and pending approval counts");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-022
  // Excel Scenario: Verify dashboard metrics refresh after data changes
  // Excel Expected Result: Dashboard metrics should reflect latest system data
  test("Case ID:CLM-TC-022 - Dashboard → dashboard metrics refresh after data changes", async ({ testData }) => {
    await test.step("[CLM-TC-022] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-022] Executing Excel test steps: 1.Note dashboard metrics 2.Create/submit/update list request 3.Refresh dashboard");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-022] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-022] Validating: Dashboard metrics should reflect latest system data");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Search & Filters", () => {
  // Excel Test Case ID: CLM-TC-023
  // Excel Scenario: Verify search functionality using exact list name
  // Excel Expected Result: Only the matching custom list should be displayed
  test("Case ID:CLM-TC-023 - Search & Filters → search functionality using exact list name", async ({ testData }) => {
    await test.step("[CLM-TC-023] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-023] Executing Excel test steps: 1.Enter exact list name in search field 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal Fraud List");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-023] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-023] Validating: Only the matching custom list should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-024
  // Excel Scenario: Verify search functionality using partial list name
  // Excel Expected Result: All custom lists containing the entered text should be displayed
  test("Case ID:CLM-TC-024 - Search & Filters → search functionality using partial list name", async ({ testData }) => {
    await test.step("[CLM-TC-024] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-024] Executing Excel test steps: 1.Enter partial list name in search field 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Fraud");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-024] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-024] Validating: All custom lists containing the entered text should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-025
  // Excel Scenario: Verify search with non-existing list name
  // Excel Expected Result: System should display no matching records or configured no-data message
  test("Case ID:CLM-TC-025 - Search & Filters → search with non-existing list name", async ({ testData }) => {
    await test.step("[CLM-TC-025] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-025] Executing Excel test steps: 1.Enter non-existing list name 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("XYZ_INVALID_LIST");
    });
    await test.step("[CLM-TC-025] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-025] Validating: System should display no matching records or configured no-data message");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-026
  // Excel Scenario: Verify search results accuracy
  // Excel Expected Result: Only records matching the search criteria should be displayed
  test("Case ID:CLM-TC-026 - Search & Filters → search results accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-026] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-026] Executing Excel test steps: 1.Perform search using valid keyword 2.Review returned results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("Fraud");
    });
    await test.step("[CLM-TC-026] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-026] Validating: Only records matching the search criteria should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-027
  // Excel Scenario: Verify Status filter visibility and availability
  // Excel Expected Result: Status filter should be visible and available for selection
  test("Case ID:CLM-TC-027 - Search & Filters → Status filter visibility and availability", async ({ testData }) => {
    await test.step("[CLM-TC-027] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-027] Executing Excel test steps: 1.Verify Status filter control");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-027] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-027] Validating: Status filter should be visible and available for selection");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-028
  // Excel Scenario: Verify filtering custom lists by status
  // Excel Expected Result: Only custom lists matching the selected status should be displayed
  test("Case ID:CLM-TC-028 - Search & Filters → filtering custom lists by status", async ({ testData }) => {
    await test.step("[CLM-TC-028] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-028] Executing Excel test steps: 1.Select a status value from filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-028] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-028] Validating: Only custom lists matching the selected status should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-029
  // Excel Scenario: Verify status filter result accuracy
  // Excel Expected Result: All displayed records should belong to the selected status only
  test("Case ID:CLM-TC-029 - Search & Filters → status filter result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-029] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-029] Executing Excel test steps: 1.Apply status filter 2.Validate returned records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-029] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-029] Validating: All displayed records should belong to the selected status only");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-030
  // Excel Scenario: Verify combined search and status filtering
  // Excel Expected Result: Only records satisfying both search and status criteria should be displayed
  test("Case ID:CLM-TC-030 - Search & Filters → combined search and status filtering", async ({ testData }) => {
    await test.step("[CLM-TC-030] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-030] Executing Excel test steps: 1.Search using list name 2.Apply status filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-030] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-030] Validating: Only records satisfying both search and status criteria should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-031
  // Excel Scenario: Verify combined filter behavior when no matching records exist
  // Excel Expected Result: System should display no matching records or configured no-data message
  test("Case ID:CLM-TC-031 - Search & Filters → combined filter behavior when no matching records exist", async ({ testData }) => {
    await test.step("[CLM-TC-031] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-031] Executing Excel test steps: 1.Apply search criteria 2.Apply status filter with no matching combination");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-031] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-031] Validating: System should display no matching records or configured no-data message");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-032
  // Excel Scenario: Verify reset/clear functionality restores complete dataset
  // Excel Expected Result: All applied criteria should be cleared and complete dataset should be displayed
  test("Case ID:CLM-TC-032 - Search & Filters → reset/clear functionality restores complete dataset", async ({ testData }) => {
    await test.step("[CLM-TC-032] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-032] Executing Excel test steps: 1.Apply search and filters 2.Click Reset/Clear option");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal Fraud List");
    await clmPage.clearSearch();
    });
    await test.step("[CLM-TC-032] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-032] Validating: All applied criteria should be cleared and complete dataset should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-237
  // Excel Scenario: Verify entity search using exact entity name
  // Excel Expected Result: Only matching entity should be displayed
  test("Case ID:CLM-TC-237 - Search & Filters → entity search using exact entity name", async ({ testData }) => {
    await test.step("[CLM-TC-237] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-237] Executing Excel test steps: 1.Enter exact entity name in search field 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("John Smith");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-237] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-237] Validating: Only matching entity should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-238
  // Excel Scenario: Verify entity search using partial name
  // Excel Expected Result: Relevant matching entities should be displayed
  test("Case ID:CLM-TC-238 - Search & Filters → entity search using partial name", async ({ testData }) => {
    await test.step("[CLM-TC-238] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-238] Executing Excel test steps: 1.Enter partial entity name 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("John");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-238] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-238] Validating: Relevant matching entities should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-239
  // Excel Scenario: Verify search result accuracy
  // Excel Expected Result: Displayed entities should satisfy search criteria
  test("Case ID:CLM-TC-239 - Search & Filters → search result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-239] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-239] Executing Excel test steps: 1.Perform search 2.Review results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("Known Entity Name");
    });
    await test.step("[CLM-TC-239] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-239] Validating: Displayed entities should satisfy search criteria");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-240
  // Excel Scenario: Verify search with non-existing entity value
  // Excel Expected Result: System should display no matching records message
  test("Case ID:CLM-TC-240 - Search & Filters → search with non-existing entity value", async ({ testData }) => {
    await test.step("[CLM-TC-240] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-240] Executing Excel test steps: 1.Search using non-existing value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("XYZ_INVALID_ENTITY");
    });
    await test.step("[CLM-TC-240] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-240] Validating: System should display no matching records message");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-241
  // Excel Scenario: Verify status filter is available for entity management
  // Excel Expected Result: Status filter should be visible and accessible
  test("Case ID:CLM-TC-241 - Search & Filters → status filter is available for entity management", async ({ testData }) => {
    await test.step("[CLM-TC-241] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-241] Executing Excel test steps: 1.Review available filters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-241] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-241] Validating: Status filter should be visible and accessible");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-242
  // Excel Scenario: Verify status filter returns matching entities
  // Excel Expected Result: Only entities matching selected status should be displayed
  test("Case ID:CLM-TC-242 - Search & Filters → status filter returns matching entities", async ({ testData }) => {
    await test.step("[CLM-TC-242] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-242] Executing Excel test steps: 1.Select status filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-242] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-242] Validating: Only entities matching selected status should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-243
  // Excel Scenario: Verify status filter result accuracy
  // Excel Expected Result: All displayed entities should belong to selected status
  test("Case ID:CLM-TC-243 - Search & Filters → status filter result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-243] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-243] Executing Excel test steps: 1.Apply status filter 2.Validate results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-243] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-243] Validating: All displayed entities should belong to selected status");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-244
  // Excel Scenario: Verify combined search and status filtering
  // Excel Expected Result: Displayed entities should satisfy both criteria
  test("Case ID:CLM-TC-244 - Search & Filters → combined search and status filtering", async ({ testData }) => {
    await test.step("[CLM-TC-244] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-244] Executing Excel test steps: 1.Search entity 2.Apply status filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-244] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-244] Validating: Displayed entities should satisfy both criteria");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-245
  // Excel Scenario: Verify reset functionality clears applied search and filters
  // Excel Expected Result: All criteria should be cleared and complete dataset displayed
  test("Case ID:CLM-TC-245 - Search & Filters → reset functionality clears applied search and filters", async ({ testData }) => {
    await test.step("[CLM-TC-245] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-245] Executing Excel test steps: 1.Apply search and filters 2.Click Reset");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal Fraud List");
    await clmPage.clearSearch();
    });
    await test.step("[CLM-TC-245] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-245] Validating: All criteria should be cleared and complete dataset displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-246
  // Excel Scenario: Verify search and filter state remains accurate after page refresh
  // Excel Expected Result: System should display results according to implemented refresh behavior without data inconsistency
  test("Case ID:CLM-TC-246 - Search & Filters → search and filter state remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-246] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-246] Executing Excel test steps: 1.Apply criteria 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-246] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-246] Validating: System should display results according to implemented refresh behavior without data inconsistency");
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Grid & Data Presentation", () => {
  // Excel Test Case ID: CLM-TC-033
  // Excel Scenario: Verify all configured grid columns are displayed on landing page
  // Excel Expected Result: All configured columns should be visible and properly aligned in the grid
  test("Case ID:CLM-TC-033 - Grid & Data Presentation → all configured grid columns are displayed on landing page", async ({ testData }) => {
    await test.step("[CLM-TC-033] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-033] Executing Excel test steps: 1.Navigate to Custom Lists landing page 2.Review grid structure");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-033] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-033] Validating: All configured columns should be visible and properly aligned in the grid");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-034
  // Excel Scenario: Verify grid displays list information correctly
  // Excel Expected Result: Each row should display the correct information associated with the custom list
  test("Case ID:CLM-TC-034 - Grid & Data Presentation → grid displays list information correctly", async ({ testData }) => {
    await test.step("[CLM-TC-034] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-034] Executing Excel test steps: 1.Open Custom Lists landing page 2.Review displayed records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-034] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-034] Validating: Each row should display the correct information associated with the custom list");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-035
  // Excel Scenario: Verify status values are displayed for all custom list records
  // Excel Expected Result: Status should be displayed for every custom list record
  test("Case ID:CLM-TC-035 - Grid & Data Presentation → status values are displayed for all custom list records", async ({ testData }) => {
    await test.step("[CLM-TC-035] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-035] Executing Excel test steps: 1.Open Custom Lists landing page 2.Review Status column");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectStatusBadgeVisible();
    });
    await test.step("[CLM-TC-035] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-035] Validating: Status should be displayed for every custom list record");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-036
  // Excel Scenario: Verify status displayed in grid matches actual list status
  // Excel Expected Result: Status displayed in grid should match actual list status
  test("Case ID:CLM-TC-036 - Grid & Data Presentation → status displayed in grid matches actual list status", async ({ testData }) => {
    await test.step("[CLM-TC-036] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-036] Executing Excel test steps: 1.Note status from grid 2.Open list details 3.Compare status values");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectStatusBadgeVisible();
    });
    await test.step("[CLM-TC-036] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-036] Validating: Status displayed in grid should match actual list status");
      await clmPage.expectListGridVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-037
  // Excel Scenario: Verify Total Records count accuracy
  // Excel Expected Result: Total Records value should match actual number of entities in the list
  test("Case ID:CLM-TC-037 - Grid & Data Presentation → Total Records count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-037] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-037] Executing Excel test steps: 1.Note Total Records value from grid 2.Open list details 3.Verify actual entity count");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-037] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-037] Validating: Total Records value should match actual number of entities in the list");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-038
  // Excel Scenario: Verify Active Records count accuracy
  // Excel Expected Result: Active Records value should match actual active entity count
  test("Case ID:CLM-TC-038 - Grid & Data Presentation → Active Records count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-038] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-038] Executing Excel test steps: 1.Note Active Records value from grid 2.Verify actual active entity count");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-038] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-038] Validating: Active Records value should match actual active entity count");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-039
  // Excel Scenario: Verify Active Records count does not exceed Total Records
  // Excel Expected Result: Active Records count should never exceed Total Records count
  test("Case ID:CLM-TC-039 - Grid & Data Presentation → Active Records count does not exceed Total Records", async ({ testData }) => {
    await test.step("[CLM-TC-039] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-039] Executing Excel test steps: 1.Compare Total Records and Active Records values");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-039] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-039] Validating: Active Records count should never exceed Total Records count");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-040
  // Excel Scenario: Verify expiry information is displayed for custom lists
  // Excel Expected Result: Expiry information should be displayed for applicable custom lists
  test("Case ID:CLM-TC-040 - Grid & Data Presentation → expiry information is displayed for custom lists", async ({ testData }) => {
    await test.step("[CLM-TC-040] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-040] Executing Excel test steps: 1.Open Custom Lists landing page 2.Review Expiry column");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-040] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-040] Validating: Expiry information should be displayed for applicable custom lists");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-041
  // Excel Scenario: Verify expiry information accuracy
  // Excel Expected Result: Displayed expiry information should match configured list expiry details
  test("Case ID:CLM-TC-041 - Grid & Data Presentation → expiry information accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-041] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-041] Executing Excel test steps: 1.Note expiry information 2.Verify against list configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-041] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-041] Validating: Displayed expiry information should match configured list expiry details");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-042
  // Excel Scenario: Verify grid data remains consistent after refresh
  // Excel Expected Result: Grid data should remain accurate and consistent after page refresh
  test("Case ID:CLM-TC-042 - Grid & Data Presentation → grid data remains consistent after refresh", async ({ testData }) => {
    await test.step("[CLM-TC-042] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-042] Executing Excel test steps: 1.Open landing page 2.Note displayed values 3.Refresh browser");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-042] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-042] Validating: Grid data should remain accurate and consistent after page refresh");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Export & Pagination", () => {
  // Excel Test Case ID: CLM-TC-043
  // Excel Scenario: Verify CSV Export functionality
  // Excel Expected Result: CSV file should be generated successfully containing displayed custom list data
  test("Case ID:CLM-TC-043 - Export & Pagination → CSV Export functionality", async ({ testData }) => {
    await test.step("[CLM-TC-043] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-043] Executing Excel test steps: 1.Navigate to Custom Lists landing page 2.Click CSV Export");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-043] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-043] Validating: CSV file should be generated successfully containing displayed custom list data");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-044
  // Excel Scenario: Verify PDF Export functionality
  // Excel Expected Result: PDF file should be generated successfully containing displayed custom list data
  test("Case ID:CLM-TC-044 - Export & Pagination → PDF Export functionality", async ({ testData }) => {
    await test.step("[CLM-TC-044] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-044] Executing Excel test steps: 1.Navigate to Custom Lists landing page 2.Click PDF Export");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-044] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-044] Validating: PDF file should be generated successfully containing displayed custom list data");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-045
  // Excel Scenario: Verify exported data accuracy
  // Excel Expected Result: Exported data should match the records displayed on the screen
  test("Case ID:CLM-TC-045 - Export & Pagination → exported data accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-045] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-045] Executing Excel test steps: 1.Note grid data 2.Export CSV/PDF 3.Compare exported content");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-045] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-045] Validating: Exported data should match the records displayed on the screen");
      await clmPage.expectExportOptions();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-046
  // Excel Scenario: Verify export functionality with applied search criteria
  // Excel Expected Result: Exported file should contain only records matching the search criteria
  test("Case ID:CLM-TC-046 - Export & Pagination → export functionality with applied search criteria", async ({ testData }) => {
    await test.step("[CLM-TC-046] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-046] Executing Excel test steps: 1.Search for a list name 2.Export CSV/PDF");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-046] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-046] Validating: Exported file should contain only records matching the search criteria");
      await clmPage.expectExportOptions();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-047
  // Excel Scenario: Verify export functionality with applied status filter
  // Excel Expected Result: Exported file should contain only records matching the selected filter
  test("Case ID:CLM-TC-047 - Export & Pagination → export functionality with applied status filter", async ({ testData }) => {
    await test.step("[CLM-TC-047] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-047] Executing Excel test steps: 1.Apply status filter 2.Export CSV/PDF");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-047] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-047] Validating: Exported file should contain only records matching the selected filter");
      await clmPage.expectFiltersVisible();
    await clmPage.expectExportOptions();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-048
  // Excel Scenario: Verify pagination navigation between pages
  // Excel Expected Result: User should be able to move between pages successfully and view corresponding records
  test("Case ID:CLM-TC-048 - Export & Pagination → pagination navigation between pages", async ({ testData }) => {
    await test.step("[CLM-TC-048] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-048] Executing Excel test steps: 1.Navigate to next page 2.Navigate to previous page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.goToNextTablePage();
    await clmPage.expectPaginationVisible();
    });
    await test.step("[CLM-TC-048] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-048] Validating: User should be able to move between pages successfully and view corresponding records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-049
  // Excel Scenario: Verify page size selection updates displayed records
  // Excel Expected Result: Grid should display records according to the selected page size
  test("Case ID:CLM-TC-049 - Export & Pagination → page size selection updates displayed records", async ({ testData }) => {
    await test.step("[CLM-TC-049] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-049] Executing Excel test steps: 1.Change page size value 2.Review displayed records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.changePageSize(25);
    });
    await test.step("[CLM-TC-049] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-049] Validating: Grid should display records according to the selected page size");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectListGridVisible();
    await clmPage.expectPaginationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-050
  // Excel Scenario: Verify pagination remains functional after search/filter operations
  // Excel Expected Result: Pagination should function correctly while retaining applied search/filter criteria
  test("Case ID:CLM-TC-050 - Export & Pagination → pagination remains functional after search/filter operations", async ({ testData }) => {
    await test.step("[CLM-TC-050] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-050] Executing Excel test steps: 1.Apply search/filter 2.Navigate through pages");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.goToNextTablePage();
    await clmPage.expectPaginationVisible();
    });
    await test.step("[CLM-TC-050] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-050] Validating: Pagination should function correctly while retaining applied search/filter criteria");
      await clmPage.expectSearchInputVisible();
    await clmPage.expectFiltersVisible();
    await clmPage.expectPaginationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Landing Actions", () => {
  // Excel Test Case ID: CLM-TC-051
  // Excel Scenario: Verify Create List action is available and accessible
  // Excel Expected Result: Create List action should be visible and enabled
  test("Case ID:CLM-TC-051 - Landing Actions → Create List action is available and accessible", async ({ testData }) => {
    await test.step("[CLM-TC-051] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-051] Executing Excel test steps: 1.Navigate to Custom Lists landing page 2.Verify Create List action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickCreateList();
    });
    await test.step("[CLM-TC-051] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-051] Validating: Create List action should be visible and enabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-052
  // Excel Scenario: Verify Create List action redirects to Create Custom List form
  // Excel Expected Result: Create Custom List form should open successfully
  test("Case ID:CLM-TC-052 - Landing Actions → Create List action redirects to Create Custom List form", async ({ testData }) => {
    await test.step("[CLM-TC-052] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-052] Executing Excel test steps: 1.Click Create List action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickCreateList();
    });
    await test.step("[CLM-TC-052] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-052] Validating: Create Custom List form should open successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-053
  // Excel Scenario: Verify Bulk Upload action is available and accessible
  // Excel Expected Result: Bulk Upload action should be visible and enabled
  test("Case ID:CLM-TC-053 - Landing Actions → Bulk Upload action is available and accessible", async ({ testData }) => {
    await test.step("[CLM-TC-053] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-053] Executing Excel test steps: 1.Navigate to Custom Lists landing page 2.Verify Bulk Upload action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-053] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-053] Validating: Bulk Upload action should be visible and enabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-054
  // Excel Scenario: Verify Bulk Upload action redirects to upload workflow
  // Excel Expected Result: Bulk Upload screen/workflow should open successfully
  test("Case ID:CLM-TC-054 - Landing Actions → Bulk Upload action redirects to upload workflow", async ({ testData }) => {
    await test.step("[CLM-TC-054] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-054] Executing Excel test steps: 1.Click Bulk Upload action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-054] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-054] Validating: Bulk Upload screen/workflow should open successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-055
  // Excel Scenario: Verify View action opens selected custom list details
  // Excel Expected Result: Custom List Detail page should open displaying selected list information
  test("Case ID:CLM-TC-055 - Landing Actions → View action opens selected custom list details", async ({ testData }) => {
    await test.step("[CLM-TC-055] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-055] Executing Excel test steps: 1.Select a custom list 2.Click View action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-055] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-055] Validating: Custom List Detail page should open displaying selected list information");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-056
  // Excel Scenario: Verify Edit action opens selected custom list in edit mode
  // Excel Expected Result: Edit List form should open with existing list information pre-populated
  test("Case ID:CLM-TC-056 - Landing Actions → Edit action opens selected custom list in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-056] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-056] Executing Excel test steps: 1.Select a custom list 2.Click Edit action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-056] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-056] Validating: Edit List form should open with existing list information pre-populated");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-057
  // Excel Scenario: Verify Enable/Disable action initiates status change request workflow
  // Excel Expected Result: Enable/Disable request workflow should be initiated successfully
  test("Case ID:CLM-TC-057 - Landing Actions → Enable/Disable action initiates status change request workflow", async ({ testData }) => {
    await test.step("[CLM-TC-057] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-057] Executing Excel test steps: 1.Select a list 2.Click Enable or Disable action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-057] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-057] Validating: Enable/Disable request workflow should be initiated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-058
  // Excel Scenario: Verify landing page actions operate on the selected custom list only
  // Excel Expected Result: Action should be performed only on the selected custom list without impacting other records
  test("Case ID:CLM-TC-058 - Landing Actions → landing page actions operate on the selected custom list only", async ({ testData }) => {
    await test.step("[CLM-TC-058] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-058] Executing Excel test steps: 1.Select a list 2.Perform View/Edit/Enable-Disable action 3.Verify target record");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-058] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-058] Validating: Action should be performed only on the selected custom list without impacting other records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Create List Form", () => {
  // Excel Test Case ID: CLM-TC-059
  // Excel Scenario: Verify Create Custom List form is rendered successfully
  // Excel Expected Result: Create Custom List form should open successfully with all configured sections visible
  test("Case ID:CLM-TC-059 - Create List Form → Create Custom List form is rendered successfully", async ({ testData }) => {
    await test.step("[CLM-TC-059] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-059] Executing Excel test steps: 1.Click Create List");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-059] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-059] Validating: Create Custom List form should open successfully with all configured sections visible");
      await expect(clmPage.createListForm).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-060
  // Excel Scenario: Verify all configured fields are displayed on Create List form
  // Excel Expected Result: All configured fields should be visible and accessible
  test("Case ID:CLM-TC-060 - Create List Form → all configured fields are displayed on Create List form", async ({ testData }) => {
    await test.step("[CLM-TC-060] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-060] Executing Excel test steps: 1.Review Create List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-060] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-060] Validating: All configured fields should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-061
  // Excel Scenario: Verify mandatory fields are clearly identified
  // Excel Expected Result: All mandatory fields should display configured mandatory indicators
  test("Case ID:CLM-TC-061 - Create List Form → mandatory fields are clearly identified", async ({ testData }) => {
    await test.step("[CLM-TC-061] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-061] Executing Excel test steps: 1.Review field labels and indicators");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-061] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-061] Validating: All mandatory fields should display configured mandatory indicators");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-062
  // Excel Scenario: Verify Create List form layout remains intact after page refresh
  // Excel Expected Result: Form layout and configured fields should remain properly displayed
  test("Case ID:CLM-TC-062 - Create List Form → Create List form layout remains intact after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-062] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-062] Executing Excel test steps: 1.Open Create List form 2.Refresh browser");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-062] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-062] Validating: Form layout and configured fields should remain properly displayed");
      await expect(clmPage.createListForm).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-063
  // Excel Scenario: Verify Save Draft action is available
  // Excel Expected Result: Save Draft button should be visible and enabled
  test("Case ID:CLM-TC-063 - Create List Form → Save Draft action is available", async ({ testData }) => {
    await test.step("[CLM-TC-063] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-063] Executing Excel test steps: 1.Open Create List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-063] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-063] Validating: Save Draft button should be visible and enabled");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-064
  // Excel Scenario: Verify Submit For Approval action is available
  // Excel Expected Result: Submit For Approval button should be visible and enabled
  test("Case ID:CLM-TC-064 - Create List Form → Submit For Approval action is available", async ({ testData }) => {
    await test.step("[CLM-TC-064] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-064] Executing Excel test steps: 1.Open Create List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-064] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-064] Validating: Submit For Approval button should be visible and enabled");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-065
  // Excel Scenario: Verify Cancel action is available
  // Excel Expected Result: Cancel button should be visible and enabled
  test("Case ID:CLM-TC-065 - Create List Form → Cancel action is available", async ({ testData }) => {
    await test.step("[CLM-TC-065] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-065] Executing Excel test steps: 1.Open Create List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.cancelCreateList();
    });
    await test.step("[CLM-TC-065] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-065] Validating: Cancel button should be visible and enabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-066
  // Excel Scenario: Verify Cancel action returns user to landing page
  // Excel Expected Result: User should be redirected to Custom Lists landing page
  test("Case ID:CLM-TC-066 - Create List Form → Cancel action returns user to landing page", async ({ testData }) => {
    await test.step("[CLM-TC-066] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-066] Executing Excel test steps: 1.Click Cancel");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.cancelCreateList();
    });
    await test.step("[CLM-TC-066] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-066] Validating: User should be redirected to Custom Lists landing page");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("List Name Validation", () => {
  // Excel Test Case ID: CLM-TC-067
  // Excel Scenario: Verify List Name field accepts valid value
  // Excel Expected Result: List Name should be accepted successfully
  test("Case ID:CLM-TC-067 - List Name Validation → List Name field accepts valid value", async ({ testData }) => {
    await test.step("[CLM-TC-067] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-067] Executing Excel test steps: 1.Enter valid List Name");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud Watchlist");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-067] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-067] Validating: List Name should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-068
  // Excel Scenario: Verify List Name is mandatory during submission
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-068 - List Name Validation → List Name is mandatory during submission", async ({ testData }) => {
    await test.step("[CLM-TC-068] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-068] Executing Excel test steps: 1.Leave List Name blank 2.Populate remaining mandatory fields 3.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Blank Value");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-068] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-068] Validating: System should display validation message and prevent submission");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-069
  // Excel Scenario: Verify List Name does not accept blank-equivalent value
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-069 - List Name Validation → List Name does not accept blank-equivalent value", async ({ testData }) => {
    await test.step("[CLM-TC-069] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-069] Executing Excel test steps: 1.Enter only spaces in List Name field 2.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Spaces Only");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-069] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-069] Validating: System should display validation message and prevent submission");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-070
  // Excel Scenario: Verify duplicate List Name is not allowed
  // Excel Expected Result: System should prevent creation of duplicate custom list
  test("Case ID:CLM-TC-070 - List Name Validation → duplicate List Name is not allowed", async ({ testData }) => {
    await test.step("[CLM-TC-070] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-070] Executing Excel test steps: 1.Enter existing List Name 2.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Existing List Name");
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-070] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-070] Validating: System should prevent creation of duplicate custom list");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-071
  // Excel Scenario: Verify unique List Name can be submitted
  // Excel Expected Result: Custom list request should be submitted successfully
  test("Case ID:CLM-TC-071 - List Name Validation → unique List Name can be submitted", async ({ testData }) => {
    await test.step("[CLM-TC-071] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-071] Executing Excel test steps: 1.Enter unique List Name 2.Complete mandatory fields 3.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Unique List Name");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-071] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-071] Validating: Custom list request should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-072
  // Excel Scenario: Verify List Name accepts maximum supported length
  // Excel Expected Result: List Name should be accepted successfully
  test("Case ID:CLM-TC-072 - List Name Validation → List Name accepts maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-072] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-072] Executing Excel test steps: 1.Enter List Name with maximum allowed characters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-072] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-072] Validating: List Name should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-073
  // Excel Scenario: Verify List Name exceeding maximum length is restricted
  // Excel Expected Result: System should reject excess characters or display validation message
  test("Case ID:CLM-TC-073 - List Name Validation → List Name exceeding maximum length is restricted", async ({ testData }) => {
    await test.step("[CLM-TC-073] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-073] Executing Excel test steps: 1.Enter value exceeding maximum allowed length");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-073] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-073] Validating: System should reject excess characters or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-074
  // Excel Scenario: Verify List Name boundary validation
  // Excel Expected Result: System should accept valid boundary values and reject values beyond configured limit
  test("Case ID:CLM-TC-074 - List Name Validation → List Name boundary validation", async ({ testData }) => {
    await test.step("[CLM-TC-074] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-074] Executing Excel test steps: 1.Test minimum valid value 2.Test maximum valid value 3.Test value exceeding limit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Boundary Values");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-074] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-074] Validating: System should accept valid boundary values and reject values beyond configured limit");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Purpose Configuration", () => {
  // Excel Test Case ID: CLM-TC-075
  // Excel Scenario: Verify Purpose field is displayed as selectable dropdown
  // Excel Expected Result: Purpose field should be visible and displayed as dropdown
  test("Case ID:CLM-TC-075 - Purpose Configuration → Purpose field is displayed as selectable dropdown", async ({ testData }) => {
    await test.step("[CLM-TC-075] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-075] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Internal Fraud");
    });
    await test.step("[CLM-TC-075] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-075] Validating: Purpose field should be visible and displayed as dropdown");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-076
  // Excel Scenario: Verify Purpose dropdown displays configured values
  // Excel Expected Result: Configured Purpose values should be displayed for selection
  test("Case ID:CLM-TC-076 - Purpose Configuration → Purpose dropdown displays configured values", async ({ testData }) => {
    await test.step("[CLM-TC-076] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-076] Executing Excel test steps: 1.Click Purpose dropdown");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Internal Fraud");
    });
    await test.step("[CLM-TC-076] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-076] Validating: Configured Purpose values should be displayed for selection");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-077
  // Excel Scenario: Verify user can select a Purpose value
  // Excel Expected Result: Selected Purpose value should be displayed successfully
  test("Case ID:CLM-TC-077 - Purpose Configuration → user can select a Purpose value", async ({ testData }) => {
    await test.step("[CLM-TC-077] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-077] Executing Excel test steps: 1.Open Purpose dropdown 2.Select a value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Internal Fraud");
    });
    await test.step("[CLM-TC-077] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-077] Validating: Selected Purpose value should be displayed successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-078
  // Excel Scenario: Verify selected Purpose value is retained before form submission
  // Excel Expected Result: Selected Purpose value should remain unchanged until modified by user
  test("Case ID:CLM-TC-078 - Purpose Configuration → selected Purpose value is retained before form submission", async ({ testData }) => {
    await test.step("[CLM-TC-078] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-078] Executing Excel test steps: 1.Select Purpose value 2.Navigate through remaining fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Internal Fraud");
    });
    await test.step("[CLM-TC-078] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-078] Validating: Selected Purpose value should remain unchanged until modified by user");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Action On Hit Configuration", () => {
  // Excel Test Case ID: CLM-TC-079
  // Excel Scenario: Verify Action On Hit field is displayed as configurable selection control
  // Excel Expected Result: Action On Hit field should be visible and accessible
  test("Case ID:CLM-TC-079 - Action On Hit Configuration → Action On Hit field is displayed as configurable selection control", async ({ testData }) => {
    await test.step("[CLM-TC-079] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-079] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert");
    });
    await test.step("[CLM-TC-079] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-079] Validating: Action On Hit field should be visible and accessible");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-080
  // Excel Scenario: Verify Action On Hit field displays configured values
  // Excel Expected Result: Configured Action On Hit values should be displayed
  test("Case ID:CLM-TC-080 - Action On Hit Configuration → Action On Hit field displays configured values", async ({ testData }) => {
    await test.step("[CLM-TC-080] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-080] Executing Excel test steps: 1.Open Action On Hit selection control");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert");
    });
    await test.step("[CLM-TC-080] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-080] Validating: Configured Action On Hit values should be displayed");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-081
  // Excel Scenario: Verify user can select an Action On Hit value
  // Excel Expected Result: Selected Action On Hit value should be displayed successfully
  test("Case ID:CLM-TC-081 - Action On Hit Configuration → user can select an Action On Hit value", async ({ testData }) => {
    await test.step("[CLM-TC-081] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-081] Executing Excel test steps: 1.Select an Action On Hit value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert");
    });
    await test.step("[CLM-TC-081] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-081] Validating: Selected Action On Hit value should be displayed successfully");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-082
  // Excel Scenario: Verify selected Action On Hit value is retained before submission
  // Excel Expected Result: Selected Action On Hit value should remain unchanged until modified by user
  test("Case ID:CLM-TC-082 - Action On Hit Configuration → selected Action On Hit value is retained before submission", async ({ testData }) => {
    await test.step("[CLM-TC-082] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-082] Executing Excel test steps: 1.Select Action On Hit value 2.Complete remaining fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert");
    });
    await test.step("[CLM-TC-082] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-082] Validating: Selected Action On Hit value should remain unchanged until modified by user");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("TTL Configuration", () => {
  // Excel Test Case ID: CLM-TC-083
  // Excel Scenario: Verify TTL field is displayed on Create List form
  // Excel Expected Result: TTL field should be visible and accessible
  test("Case ID:CLM-TC-083 - TTL Configuration → TTL field is displayed on Create List form", async ({ testData }) => {
    await test.step("[CLM-TC-083] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-083] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("90 days");
    });
    await test.step("[CLM-TC-083] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-083] Validating: TTL field should be visible and accessible");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-084
  // Excel Scenario: Verify TTL field displays configured default value
  // Excel Expected Result: TTL field should display the configured default value
  test("Case ID:CLM-TC-084 - TTL Configuration → TTL field displays configured default value", async ({ testData }) => {
    await test.step("[CLM-TC-084] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-084] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("90 days");
    });
    await test.step("[CLM-TC-084] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-084] Validating: TTL field should display the configured default value");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-085
  // Excel Scenario: Verify user can select a TTL value
  // Excel Expected Result: Selected TTL value should be displayed successfully
  test("Case ID:CLM-TC-085 - TTL Configuration → user can select a TTL value", async ({ testData }) => {
    await test.step("[CLM-TC-085] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-085] Executing Excel test steps: 1.Open TTL control 2.Select a TTL value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("90 days");
    });
    await test.step("[CLM-TC-085] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-085] Validating: Selected TTL value should be displayed successfully");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-086
  // Excel Scenario: Verify selected TTL value is retained before submission
  // Excel Expected Result: Selected TTL value should remain unchanged until modified by user
  test("Case ID:CLM-TC-086 - TTL Configuration → selected TTL value is retained before submission", async ({ testData }) => {
    await test.step("[CLM-TC-086] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-086] Executing Excel test steps: 1.Select TTL value 2.Complete remaining fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("90 days");
    });
    await test.step("[CLM-TC-086] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-086] Validating: Selected TTL value should remain unchanged until modified by user");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Matching Configuration", () => {
  // Excel Test Case ID: CLM-TC-087
  // Excel Scenario: Verify Fuzzy Matching configuration control is displayed
  // Excel Expected Result: Fuzzy Matching configuration control should be visible and accessible
  test("Case ID:CLM-TC-087 - Matching Configuration → Fuzzy Matching configuration control is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-087] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-087] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-087] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-087] Validating: Fuzzy Matching configuration control should be visible and accessible");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-088
  // Excel Scenario: Verify user can enable or disable Fuzzy Matching configuration
  // Excel Expected Result: Fuzzy Matching setting should update successfully according to user selection
  test("Case ID:CLM-TC-088 - Matching Configuration → user can enable or disable Fuzzy Matching configuration", async ({ testData }) => {
    await test.step("[CLM-TC-088] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-088] Executing Excel test steps: 1.Modify Fuzzy Matching configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-088] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-088] Validating: Fuzzy Matching setting should update successfully according to user selection");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-089
  // Excel Scenario: Verify Multilingual Matching configuration control is displayed
  // Excel Expected Result: Multilingual Matching configuration control should be visible and accessible
  test("Case ID:CLM-TC-089 - Matching Configuration → Multilingual Matching configuration control is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-089] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-089] Executing Excel test steps: 1.Open Create Custom List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-089] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-089] Validating: Multilingual Matching configuration control should be visible and accessible");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-090
  // Excel Scenario: Verify user can enable or disable Multilingual Matching configuration
  // Excel Expected Result: Multilingual Matching setting should update successfully according to user selection
  test("Case ID:CLM-TC-090 - Matching Configuration → user can enable or disable Multilingual Matching configuration", async ({ testData }) => {
    await test.step("[CLM-TC-090] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-090] Executing Excel test steps: 1.Modify Multilingual Matching configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-090] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-090] Validating: Multilingual Matching setting should update successfully according to user selection");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-091
  // Excel Scenario: Verify matching configuration values are retained while completing the form
  // Excel Expected Result: Configured matching settings should remain unchanged until modified by user
  test("Case ID:CLM-TC-091 - Matching Configuration → matching configuration values are retained while completing the form", async ({ testData }) => {
    await test.step("[CLM-TC-091] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-091] Executing Excel test steps: 1.Configure Fuzzy Matching and Multilingual Matching 2.Populate remaining fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-091] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-091] Validating: Configured matching settings should remain unchanged until modified by user");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-092
  // Excel Scenario: Verify matching configurations are included in list creation request
  // Excel Expected Result: Submitted request should contain configured matching settings
  test("Case ID:CLM-TC-092 - Matching Configuration → matching configurations are included in list creation request", async ({ testData }) => {
    await test.step("[CLM-TC-092] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-092] Executing Excel test steps: 1.Configure matching settings 2.Complete mandatory fields 3.Submit for Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-092] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-092] Validating: Submitted request should contain configured matching settings");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Reason For Creation", () => {
  // Excel Test Case ID: CLM-TC-093
  // Excel Scenario: Verify Reason For Creation field accepts valid input
  // Excel Expected Result: Reason For Creation value should be accepted successfully
  test("Case ID:CLM-TC-093 - Reason For Creation → Reason For Creation field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-093] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-093] Executing Excel test steps: 1.Enter valid reason text");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-093] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-093] Validating: Reason For Creation value should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-094
  // Excel Scenario: Verify Reason For Creation field is mandatory during submission
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-094 - Reason For Creation → Reason For Creation field is mandatory during submission", async ({ testData }) => {
    await test.step("[CLM-TC-094] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-094] Executing Excel test steps: 1.Leave Reason For Creation blank 2.Populate remaining mandatory fields 3.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-094] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-094] Validating: System should display validation message and prevent submission");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectSubmissionBlocked();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-095
  // Excel Scenario: Verify Reason For Creation does not accept blank-equivalent value
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-095 - Reason For Creation → Reason For Creation does not accept blank-equivalent value", async ({ testData }) => {
    await test.step("[CLM-TC-095] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-095] Executing Excel test steps: 1.Enter spaces only in Reason For Creation field 2.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-095] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-095] Validating: System should display validation message and prevent submission");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectSubmissionBlocked();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-096
  // Excel Scenario: Verify Reason For Creation accepts maximum supported length
  // Excel Expected Result: Reason For Creation should be accepted successfully
  test("Case ID:CLM-TC-096 - Reason For Creation → Reason For Creation accepts maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-096] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-096] Executing Excel test steps: 1.Enter value with maximum allowed characters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-096] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-096] Validating: Reason For Creation should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-097
  // Excel Scenario: Verify Reason For Creation exceeding maximum length is restricted
  // Excel Expected Result: System should reject excess characters or display validation message
  test("Case ID:CLM-TC-097 - Reason For Creation → Reason For Creation exceeding maximum length is restricted", async ({ testData }) => {
    await test.step("[CLM-TC-097] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-097] Executing Excel test steps: 1.Enter value exceeding maximum allowed length");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-097] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-097] Validating: System should reject excess characters or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-098
  // Excel Scenario: Verify Reason For Creation boundary validation
  // Excel Expected Result: System should accept valid boundary values and reject values beyond configured limit
  test("Case ID:CLM-TC-098 - Reason For Creation → Reason For Creation boundary validation", async ({ testData }) => {
    await test.step("[CLM-TC-098] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-098] Executing Excel test steps: 1.Test valid boundary value 2.Test maximum value 3.Test value exceeding limit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-098] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-098] Validating: System should accept valid boundary values and reject values beyond configured limit");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Draft Management", () => {
  // Excel Test Case ID: CLM-TC-099
  // Excel Scenario: Verify user can save partially completed custom list as draft
  // Excel Expected Result: Draft should be saved successfully
  test("Case ID:CLM-TC-099 - Draft Management → user can save partially completed custom list as draft", async ({ testData }) => {
    await test.step("[CLM-TC-099] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-099] Executing Excel test steps: 1.Enter partial list information 2.Click Save Draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Partial List Data");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-099] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-099] Validating: Draft should be saved successfully");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-100
  // Excel Scenario: Verify draft record is available for future access
  // Excel Expected Result: Saved draft should be available for further processing
  test("Case ID:CLM-TC-100 - Draft Management → draft record is available for future access", async ({ testData }) => {
    await test.step("[CLM-TC-100] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-100] Executing Excel test steps: 1.Navigate back to module 2.Open saved draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Saved Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-100] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-100] Validating: Saved draft should be available for further processing");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-101
  // Excel Scenario: Verify saved draft loads previously entered information
  // Excel Expected Result: Previously entered values should be displayed correctly
  test("Case ID:CLM-TC-101 - Draft Management → saved draft loads previously entered information", async ({ testData }) => {
    await test.step("[CLM-TC-101] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-101] Executing Excel test steps: 1.Open saved draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Saved Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-101] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-101] Validating: Previously entered values should be displayed correctly");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-102
  // Excel Scenario: Verify all configured fields persist in draft
  // Excel Expected Result: List Name, Purpose, Action On Hit, TTL, Matching Settings and Reason For Creation should be retained
  test("Case ID:CLM-TC-102 - Draft Management → all configured fields persist in draft", async ({ testData }) => {
    await test.step("[CLM-TC-102] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-102] Executing Excel test steps: 1.Open saved draft 2.Verify configured fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Saved Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-102] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-102] Validating: List Name, Purpose, Action On Hit, TTL, Matching Settings and Reason For Creation should be retained");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-103
  // Excel Scenario: Verify user can update existing draft
  // Excel Expected Result: Draft should be updated successfully
  test("Case ID:CLM-TC-103 - Draft Management → user can update existing draft", async ({ testData }) => {
    await test.step("[CLM-TC-103] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-103] Executing Excel test steps: 1.Open draft 2.Modify values 3.Save Draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Updated Draft Data");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-103] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-103] Validating: Draft should be updated successfully");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-104
  // Excel Scenario: Verify latest changes are retained after draft update
  // Excel Expected Result: Draft should display latest saved values
  test("Case ID:CLM-TC-104 - Draft Management → latest changes are retained after draft update", async ({ testData }) => {
    await test.step("[CLM-TC-104] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-104] Executing Excel test steps: 1.Reopen updated draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Updated Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-104] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-104] Validating: Draft should display latest saved values");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-105
  // Excel Scenario: Verify draft remains accessible after browser refresh
  // Excel Expected Result: Draft should remain available with saved information intact
  test("Case ID:CLM-TC-105 - Draft Management → draft remains accessible after browser refresh", async ({ testData }) => {
    await test.step("[CLM-TC-105] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-105] Executing Excel test steps: 1.Open draft 2.Refresh page 3.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Saved Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-105] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-105] Validating: Draft should remain available with saved information intact");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-106
  // Excel Scenario: Verify draft can be submitted for approval
  // Excel Expected Result: Draft should be successfully submitted for approval
  test("Case ID:CLM-TC-106 - Draft Management → draft can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-106] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-106] Executing Excel test steps: 1.Open draft 2.Click Submit For Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Saved Draft");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-106] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-106] Validating: Draft should be successfully submitted for approval");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Submission Workflow", () => {
  // Excel Test Case ID: CLM-TC-107
  // Excel Scenario: Verify valid custom list can be submitted for approval
  // Excel Expected Result: Custom list request should be submitted successfully
  test("Case ID:CLM-TC-107 - Submission Workflow → valid custom list can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-107] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-107] Executing Excel test steps: 1.Complete mandatory fields 2.Click Submit For Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Valid List Data");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-107] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-107] Validating: Custom list request should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-108
  // Excel Scenario: Verify submission generates approval request
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-108 - Submission Workflow → submission generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-108] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-108] Executing Excel test steps: 1.Submit custom list request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Valid List Data");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-108] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-108] Validating: Approval request should be generated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-109
  // Excel Scenario: Verify submitted custom list enters Pending Approval status
  // Excel Expected Result: Request status should be displayed as Pending Approval
  test("Case ID:CLM-TC-109 - Submission Workflow → submitted custom list enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-109] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-109] Executing Excel test steps: 1.Submit custom list 2.Open request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-109] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-109] Validating: Request status should be displayed as Pending Approval");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-110
  // Excel Scenario: Verify submitted request is visible in approval queue
  // Excel Expected Result: Request should be available for checker review
  test("Case ID:CLM-TC-110 - Submission Workflow → submitted request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-110] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-110] Executing Excel test steps: 1.Navigate to approval queue");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-110] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-110] Validating: Request should be available for checker review");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-111
  // Excel Scenario: Verify submitted request retains all configured values
  // Excel Expected Result: Request should contain all values entered during list creation
  test("Case ID:CLM-TC-111 - Submission Workflow → submitted request retains all configured values", async ({ testData }) => {
    await test.step("[CLM-TC-111] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-111] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-111] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-111] Validating: Request should contain all values entered during list creation");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-112
  // Excel Scenario: Verify Pending Approval status is reflected on landing page
  // Excel Expected Result: Custom list should display Pending Approval status
  test("Case ID:CLM-TC-112 - Submission Workflow → Pending Approval status is reflected on landing page", async ({ testData }) => {
    await test.step("[CLM-TC-112] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-112] Executing Excel test steps: 1.Return to landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-112] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-112] Validating: Custom list should display Pending Approval status");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-113
  // Excel Scenario: Verify Pending Approval dashboard metric updates after submission
  // Excel Expected Result: Pending Approval metric should reflect the newly submitted request
  test("Case ID:CLM-TC-113 - Submission Workflow → Pending Approval dashboard metric updates after submission", async ({ testData }) => {
    await test.step("[CLM-TC-113] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-113] Executing Excel test steps: 1.Note Pending Approval count 2.Submit request 3.Verify dashboard");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-113] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-113] Validating: Pending Approval metric should reflect the newly submitted request");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-114
  // Excel Scenario: Verify submitted request remains pending until checker action
  // Excel Expected Result: Request should remain in Pending Approval state until checker action is completed
  test("Case ID:CLM-TC-114 - Submission Workflow → submitted request remains pending until checker action", async ({ testData }) => {
    await test.step("[CLM-TC-114] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-114] Executing Excel test steps: 1.Submit request 2.Verify status before approval/rejection");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-114] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-114] Validating: Request should remain in Pending Approval state until checker action is completed");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-354
  // Excel Scenario: Verify successfully validated upload can be submitted for onboarding approval
  // Excel Expected Result: Upload batch should be submitted successfully
  test("Case ID:CLM-TC-354 - Submission Workflow → successfully validated upload can be submitted for onboarding approval", async ({ testData }) => {
    await test.step("[CLM-TC-354] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-354] Executing Excel test steps: 1.Complete validation 2.Submit upload batch");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Validated Upload File");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-354] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-354] Validating: Upload batch should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-355
  // Excel Scenario: Verify upload submission generates onboarding request
  // Excel Expected Result: Onboarding request should be generated successfully
  test("Case ID:CLM-TC-355 - Submission Workflow → upload submission generates onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-355] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-355] Executing Excel test steps: 1.Submit upload batch");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Validated Upload File");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-355] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-355] Validating: Onboarding request should be generated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-356
  // Excel Scenario: Verify submitted upload enters Pending Approval status
  // Excel Expected Result: Request should display Pending Approval status
  test("Case ID:CLM-TC-356 - Submission Workflow → submitted upload enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-356] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-356] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted Upload Batch");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-356] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-356] Validating: Request should display Pending Approval status");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-357
  // Excel Scenario: Verify submitted upload request is visible in approval queue
  // Excel Expected Result: Upload request should be visible in approval queue
  test("Case ID:CLM-TC-357 - Submission Workflow → submitted upload request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-357] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-357] Executing Excel test steps: 1.Navigate to approval queue");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted Upload Batch");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-357] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-357] Validating: Upload request should be visible in approval queue");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-358
  // Excel Scenario: Verify submitted request retains uploaded entity information
  // Excel Expected Result: Request should display uploaded entity information accurately
  test("Case ID:CLM-TC-358 - Submission Workflow → submitted request retains uploaded entity information", async ({ testData }) => {
    await test.step("[CLM-TC-358] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-358] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted Upload Batch");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-358] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-358] Validating: Request should display uploaded entity information accurately");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-359
  // Excel Scenario: Verify upload request remains pending until checker action occurs
  // Excel Expected Result: Request should remain pending until checker approval or rejection
  test("Case ID:CLM-TC-359 - Submission Workflow → upload request remains pending until checker action occurs", async ({ testData }) => {
    await test.step("[CLM-TC-359] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-359] Executing Excel test steps: 1.Submit upload 2.Verify status before approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Submitted Upload Batch");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-359] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-359] Validating: Request should remain pending until checker approval or rejection");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-360
  // Excel Scenario: Verify approved upload results in entity onboarding
  // Excel Expected Result: Uploaded entities should be onboarded successfully
  test("Case ID:CLM-TC-360 - Submission Workflow → approved upload results in entity onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-360] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-360] Executing Excel test steps: 1.Approve upload request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Approved Upload Batch");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-360] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-360] Validating: Uploaded entities should be onboarded successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-361
  // Excel Scenario: Verify approved upload updates entity inventory statistics
  // Excel Expected Result: Entity statistics should reflect newly onboarded entities
  test("Case ID:CLM-TC-361 - Submission Workflow → approved upload updates entity inventory statistics", async ({ testData }) => {
    await test.step("[CLM-TC-361] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-361] Executing Excel test steps: 1.Note entity count 2.Approve upload 3.Verify count");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Approved Upload Batch");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-361] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-361] Validating: Entity statistics should reflect newly onboarded entities");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-362
  // Excel Scenario: Verify approved upload entities are available within associated custom list
  // Excel Expected Result: Newly onboarded entities should be visible within the correct custom list
  test("Case ID:CLM-TC-362 - Submission Workflow → approved upload entities are available within associated custom list", async ({ testData }) => {
    await test.step("[CLM-TC-362] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-362] Executing Excel test steps: 1.Open associated custom list");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Approved Upload Batch");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-362] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-362] Validating: Newly onboarded entities should be visible within the correct custom list");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-363
  // Excel Scenario: Verify approved upload creates screening-ready entities
  // Excel Expected Result: Onboarded entities should be available for subsequent AML screening and monitoring workflows
  test("Case ID:CLM-TC-363 - Submission Workflow → approved upload creates screening-ready entities", async ({ testData }) => {
    await test.step("[CLM-TC-363] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-363] Executing Excel test steps: 1.Open onboarded entities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Approved Upload Batch");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-363] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-363] Validating: Onboarded entities should be available for subsequent AML screening and monitoring workflows");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Edit List", () => {
  // Excel Test Case ID: CLM-TC-115
  // Excel Scenario: Verify Edit action opens selected custom list in edit mode
  // Excel Expected Result: Edit List form should open successfully for the selected custom list
  test("Case ID:CLM-TC-115 - Edit List → Edit action opens selected custom list in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-115] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-115] Executing Excel test steps: 1.Navigate to Custom Lists 2.Select list 3.Click Edit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Sample List");
    });
    await test.step("[CLM-TC-115] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-115] Validating: Edit List form should open successfully for the selected custom list");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-116
  // Excel Scenario: Verify existing custom list values are pre-populated in Edit form
  // Excel Expected Result: Previously configured values should be displayed in the form
  test("Case ID:CLM-TC-116 - Edit List → existing custom list values are pre-populated in Edit form", async ({ testData }) => {
    await test.step("[CLM-TC-116] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-116] Executing Excel test steps: 1.Open Edit List form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Sample List");
    });
    await test.step("[CLM-TC-116] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-116] Validating: Previously configured values should be displayed in the form");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-117
  // Excel Scenario: Verify editable fields can be modified
  // Excel Expected Result: Modified values should be accepted successfully
  test("Case ID:CLM-TC-117 - Edit List → editable fields can be modified", async ({ testData }) => {
    await test.step("[CLM-TC-117] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-117] Executing Excel test steps: 1.Modify one or more editable fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    });
    await test.step("[CLM-TC-117] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-117] Validating: Modified values should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-118
  // Excel Scenario: Verify edited values remain visible before submission
  // Excel Expected Result: Modified values should remain unchanged until user submits or cancels
  test("Case ID:CLM-TC-118 - Edit List → edited values remain visible before submission", async ({ testData }) => {
    await test.step("[CLM-TC-118] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-118] Executing Excel test steps: 1.Modify fields 2.Navigate across form sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    });
    await test.step("[CLM-TC-118] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-118] Validating: Modified values should remain unchanged until user submits or cancels");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-119
  // Excel Scenario: Verify updated custom list can be submitted for approval
  // Excel Expected Result: Updated custom list request should be submitted successfully
  test("Case ID:CLM-TC-119 - Edit List → updated custom list can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-119] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-119] Executing Excel test steps: 1.Modify fields 2.Click Submit For Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    await clmPage.fillListName("Updated List Data Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-119] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-119] Validating: Updated custom list request should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-120
  // Excel Scenario: Verify update request generates approval workflow entry
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-120 - Edit List → update request generates approval workflow entry", async ({ testData }) => {
    await test.step("[CLM-TC-120] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-120] Executing Excel test steps: 1.Submit modified custom list");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    await clmPage.fillListName("Updated List Data Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-120] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-120] Validating: Approval request should be generated successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-121
  // Excel Scenario: Verify submitted update request enters Pending Approval state
  // Excel Expected Result: Update request should display Pending Approval status
  test("Case ID:CLM-TC-121 - Edit List → submitted update request enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-121] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-121] Executing Excel test steps: 1.Open submitted update request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    await clmPage.fillListName("Updated List Data Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-121] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-121] Validating: Update request should display Pending Approval status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-122
  // Excel Scenario: Verify submitted update request retains modified values
  // Excel Expected Result: Request should display all modified values accurately
  test("Case ID:CLM-TC-122 - Edit List → submitted update request retains modified values", async ({ testData }) => {
    await test.step("[CLM-TC-122] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-122] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openEditList("Updated List Data");
    await clmPage.fillListName("Updated List Data Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-122] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-122] Validating: Request should display all modified values accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Enable Disable", () => {
  // Excel Test Case ID: CLM-TC-123
  // Excel Scenario: Verify Disable action can be initiated for active custom list
  // Excel Expected Result: Disable request workflow should be initiated successfully
  test("Case ID:CLM-TC-123 - Enable Disable → Disable action can be initiated for active custom list", async ({ testData }) => {
    await test.step("[CLM-TC-123] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-123] Executing Excel test steps: 1.Select active custom list 2.Click Disable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableList("Active List");
    });
    await test.step("[CLM-TC-123] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-123] Validating: Disable request workflow should be initiated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-124
  // Excel Scenario: Verify Enable action can be initiated for disabled custom list
  // Excel Expected Result: Enable request workflow should be initiated successfully
  test("Case ID:CLM-TC-124 - Enable Disable → Enable action can be initiated for disabled custom list", async ({ testData }) => {
    await test.step("[CLM-TC-124] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-124] Executing Excel test steps: 1.Select disabled custom list 2.Click Enable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableList("Disabled List");
    });
    await test.step("[CLM-TC-124] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-124] Validating: Enable request workflow should be initiated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-125
  // Excel Scenario: Verify Enable/Disable operation generates approval request
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-125 - Enable Disable → Enable/Disable operation generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-125] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-125] Executing Excel test steps: 1.Submit Enable/Disable request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableList("Request Data");
    });
    await test.step("[CLM-TC-125] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-125] Validating: Approval request should be generated successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-126
  // Excel Scenario: Verify Enable/Disable request enters Pending Approval state
  // Excel Expected Result: Request should display Pending Approval status
  test("Case ID:CLM-TC-126 - Enable Disable → Enable/Disable request enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-126] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-126] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableList("Request Data");
    });
    await test.step("[CLM-TC-126] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-126] Validating: Request should display Pending Approval status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-127
  // Excel Scenario: Verify list status does not change before approval
  // Excel Expected Result: List status should remain unchanged until checker action is completed
  test("Case ID:CLM-TC-127 - Enable Disable → list status does not change before approval", async ({ testData }) => {
    await test.step("[CLM-TC-127] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-127] Executing Excel test steps: 1.Submit Enable/Disable request 2.Verify current list status");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.toggleListStatus("Request Data");
    });
    await test.step("[CLM-TC-127] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-127] Validating: List status should remain unchanged until checker action is completed");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-128
  // Excel Scenario: Verify approved Disable request updates list status
  // Excel Expected Result: List status should change from Active to Disabled
  test("Case ID:CLM-TC-128 - Enable Disable → approved Disable request updates list status", async ({ testData }) => {
    await test.step("[CLM-TC-128] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-128] Executing Excel test steps: 1.Approve Disable request 2.Open custom list");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableList("Approved Disable Request");
    });
    await test.step("[CLM-TC-128] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-128] Validating: List status should change from Active to Disabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-129
  // Excel Scenario: Verify approved Enable request updates list status
  // Excel Expected Result: List status should change from Disabled to Active
  test("Case ID:CLM-TC-129 - Enable Disable → approved Enable request updates list status", async ({ testData }) => {
    await test.step("[CLM-TC-129] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-129] Executing Excel test steps: 1.Approve Enable request 2.Open custom list");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.enableList("Approved Enable Request");
    });
    await test.step("[CLM-TC-129] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-129] Validating: List status should change from Disabled to Active");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-130
  // Excel Scenario: Verify landing page reflects updated status after approval
  // Excel Expected Result: Landing page should display the updated list status
  test("Case ID:CLM-TC-130 - Enable Disable → landing page reflects updated status after approval", async ({ testData }) => {
    await test.step("[CLM-TC-130] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-130] Executing Excel test steps: 1.Open Custom Lists landing page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.toggleListStatus("Approved Request");
    });
    await test.step("[CLM-TC-130] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-130] Validating: Landing page should display the updated list status");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Metadata Integrity", () => {
  // Excel Test Case ID: CLM-TC-131
  // Excel Scenario: Verify Maker information is captured during custom list creation
  // Excel Expected Result: Maker information should be recorded and displayed correctly
  test("Case ID:CLM-TC-131 - Metadata Integrity → Maker information is captured during custom list creation", async ({ testData }) => {
    await test.step("[CLM-TC-131] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-131] Executing Excel test steps: 1.Create custom list 2.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-131] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-131] Validating: Maker information should be recorded and displayed correctly");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-132
  // Excel Scenario: Verify Checker information is captured after approval
  // Excel Expected Result: Checker information should be recorded and displayed correctly
  test("Case ID:CLM-TC-132 - Metadata Integrity → Checker information is captured after approval", async ({ testData }) => {
    await test.step("[CLM-TC-132] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-132] Executing Excel test steps: 1.Approve custom list request 2.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Approved List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-132] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-132] Validating: Checker information should be recorded and displayed correctly");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-133
  // Excel Scenario: Verify Date Created is captured for custom list
  // Excel Expected Result: Date Created should be populated correctly
  test("Case ID:CLM-TC-133 - Metadata Integrity → Date Created is captured for custom list", async ({ testData }) => {
    await test.step("[CLM-TC-133] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-133] Executing Excel test steps: 1.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-133] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-133] Validating: Date Created should be populated correctly");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-134
  // Excel Scenario: Verify Date Last Modified is updated after approved changes
  // Excel Expected Result: Date Last Modified should reflect latest approved change
  test("Case ID:CLM-TC-134 - Metadata Integrity → Date Last Modified is updated after approved changes", async ({ testData }) => {
    await test.step("[CLM-TC-134] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-134] Executing Excel test steps: 1.Modify list 2.Approve update 3.Open details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Modified List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-134] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-134] Validating: Date Last Modified should reflect latest approved change");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-135
  // Excel Scenario: Verify Total Records statistic reflects actual entity count
  // Excel Expected Result: Total Records value should match actual entity count
  test("Case ID:CLM-TC-135 - Metadata Integrity → Total Records statistic reflects actual entity count", async ({ testData }) => {
    await test.step("[CLM-TC-135] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-135] Executing Excel test steps: 1.Open list details 2.Verify entity count");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Data");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-135] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-135] Validating: Total Records value should match actual entity count");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-136
  // Excel Scenario: Verify Active Records statistic reflects active entities
  // Excel Expected Result: Active Records value should match actual active entity count
  test("Case ID:CLM-TC-136 - Metadata Integrity → Active Records statistic reflects active entities", async ({ testData }) => {
    await test.step("[CLM-TC-136] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-136] Executing Excel test steps: 1.Verify active entity count");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Data");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-136] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-136] Validating: Active Records value should match actual active entity count");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-137
  // Excel Scenario: Verify metadata values remain consistent across screens
  // Excel Expected Result: Metadata values should remain consistent across all screens
  test("Case ID:CLM-TC-137 - Metadata Integrity → metadata values remain consistent across screens", async ({ testData }) => {
    await test.step("[CLM-TC-137] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-137] Executing Excel test steps: 1.Verify metadata on landing page 2.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-137] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-137] Validating: Metadata values should remain consistent across all screens");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-138
  // Excel Scenario: Verify metadata provides complete audit traceability
  // Excel Expected Result: Complete metadata information should be available for audit and compliance review
  test("Case ID:CLM-TC-138 - Metadata Integrity → metadata provides complete audit traceability", async ({ testData }) => {
    await test.step("[CLM-TC-138] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-138] Executing Excel test steps: 1.Open custom list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Approved List");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-138] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-138] Validating: Complete metadata information should be available for audit and compliance review");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Add Entity Form", () => {
  // Excel Test Case ID: CLM-TC-139
  // Excel Scenario: Verify Add Entity action is available within approved custom list
  // Excel Expected Result: Add Entity action should be visible and enabled within the selected custom list
  test("Case ID:CLM-TC-139 - Add Entity Form → Add Entity action is available within approved custom list", async ({ testData }) => {
    await test.step("[CLM-TC-139] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-139] Executing Excel test steps: 1.Navigate to Custom Lists 2.Open approved custom list 3.Verify Add Entity action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    });
    await test.step("[CLM-TC-139] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-139] Validating: Add Entity action should be visible and enabled within the selected custom list");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-140
  // Excel Scenario: Verify Add Entity form opens successfully
  // Excel Expected Result: Add Entity form should open successfully
  test("Case ID:CLM-TC-140 - Add Entity Form → Add Entity form opens successfully", async ({ testData }) => {
    await test.step("[CLM-TC-140] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-140] Executing Excel test steps: 1.Open approved custom list 2.Click Add Entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    });
    await test.step("[CLM-TC-140] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-140] Validating: Add Entity form should open successfully");
      await expect(clmPage.addEntityForm).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-141
  // Excel Scenario: Verify all configured onboarding sections are displayed
  // Excel Expected Result: All configured onboarding sections should be displayed correctly
  test("Case ID:CLM-TC-141 - Add Entity Form → all configured onboarding sections are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-141] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-141] Executing Excel test steps: 1.Open Add Entity form 2.Review all sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    });
    await test.step("[CLM-TC-141] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-141] Validating: All configured onboarding sections should be displayed correctly");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-142
  // Excel Scenario: Verify all mandatory fields are identified
  // Excel Expected Result: All mandatory fields should display configured mandatory indicators
  test("Case ID:CLM-TC-142 - Add Entity Form → all mandatory fields are identified", async ({ testData }) => {
    await test.step("[CLM-TC-142] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-142] Executing Excel test steps: 1.Review field labels and indicators");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.submitEntity();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-142] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-142] Validating: All mandatory fields should display configured mandatory indicators");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-143
  // Excel Scenario: Verify entity onboarding form layout remains intact
  // Excel Expected Result: All fields, sections and controls should be displayed correctly without overlap or truncation
  test("Case ID:CLM-TC-143 - Add Entity Form → entity onboarding form layout remains intact", async ({ testData }) => {
    await test.step("[CLM-TC-143] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-143] Executing Excel test steps: 1.Open Add Entity form 2.Scroll through entire form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    });
    await test.step("[CLM-TC-143] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-143] Validating: All fields, sections and controls should be displayed correctly without overlap or truncation");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-144
  // Excel Scenario: Verify Save Draft action is available on Add Entity form
  // Excel Expected Result: Save Draft button should be visible and enabled
  test("Case ID:CLM-TC-144 - Add Entity Form → Save Draft action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-144] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-144] Executing Excel test steps: 1.Open Add Entity form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-144] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-144] Validating: Save Draft button should be visible and enabled");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-145
  // Excel Scenario: Verify Submit For Approval action is available on Add Entity form
  // Excel Expected Result: Submit For Approval button should be visible and enabled
  test("Case ID:CLM-TC-145 - Add Entity Form → Submit For Approval action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-145] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-145] Executing Excel test steps: 1.Open Add Entity form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-145] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-145] Validating: Submit For Approval button should be visible and enabled");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-146
  // Excel Scenario: Verify Cancel action is available on Add Entity form
  // Excel Expected Result: Cancel button should be visible and enabled
  test("Case ID:CLM-TC-146 - Add Entity Form → Cancel action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-146] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-146] Executing Excel test steps: 1.Open Add Entity form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.cancelAddEntity();
    });
    await test.step("[CLM-TC-146] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-146] Validating: Cancel button should be visible and enabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-147
  // Excel Scenario: Verify Cancel action redirects user back to entity listing
  // Excel Expected Result: User should be redirected back to entity listing page without saving changes
  test("Case ID:CLM-TC-147 - Add Entity Form → Cancel action redirects user back to entity listing", async ({ testData }) => {
    await test.step("[CLM-TC-147] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-147] Executing Excel test steps: 1.Click Cancel");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.cancelAddEntity();
    });
    await test.step("[CLM-TC-147] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-147] Validating: User should be redirected back to entity listing page without saving changes");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-148
  // Excel Scenario: Verify Add Entity form remains accessible after page refresh
  // Excel Expected Result: Entity onboarding form should reload successfully with all configured sections displayed
  test("Case ID:CLM-TC-148 - Add Entity Form → Add Entity form remains accessible after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-148] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-148] Executing Excel test steps: 1.Open Add Entity form 2.Refresh browser");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    });
    await test.step("[CLM-TC-148] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-148] Validating: Entity onboarding form should reload successfully with all configured sections displayed");
      await expect(clmPage.addEntityForm).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Minimum Screening Eligibility Rule", () => {
  // Excel Test Case ID: CLM-TC-149
  // Excel Scenario: Verify entity can be submitted when minimum screening criteria is satisfied
  // Excel Expected Result: Entity should be submitted successfully
  test("Case ID:CLM-TC-149 - Minimum Screening Eligibility Rule → entity can be submitted when minimum screening criteria is satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-149] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-149] Executing Excel test steps: 1.Enter minimum required screening information 2.Submit entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-149] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-149] Validating: Entity should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-150
  // Excel Scenario: Verify entity submission is blocked when minimum screening criteria is not satisfied
  // Excel Expected Result: System should prevent submission and display validation message
  test("Case ID:CLM-TC-150 - Minimum Screening Eligibility Rule → entity submission is blocked when minimum screening criteria is not satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-150] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-150] Executing Excel test steps: 1.Enter insufficient entity information 2.Submit entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    await clmPage.submitEntity();
    await clmPage.expectSubmissionBlocked();
    });
    await test.step("[CLM-TC-150] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-150] Validating: System should prevent submission and display validation message");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectSubmissionBlocked();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-151
  // Excel Scenario: Verify validation message is displayed for screening-ineligible entity
  // Excel Expected Result: Appropriate validation message should be displayed explaining minimum screening requirements
  test("Case ID:CLM-TC-151 - Minimum Screening Eligibility Rule → validation message is displayed for screening-ineligible entity", async ({ testData }) => {
    await test.step("[CLM-TC-151] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-151] Executing Excel test steps: 1.Enter insufficient screening data 2.Submit entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    await clmPage.submitEntity();
    await clmPage.expectSubmissionBlocked();
    });
    await test.step("[CLM-TC-151] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-151] Validating: Appropriate validation message should be displayed explaining minimum screening requirements");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-152
  // Excel Scenario: Verify screening eligibility validation occurs before request generation
  // Excel Expected Result: Approval request should not be generated for screening-ineligible entity
  test("Case ID:CLM-TC-152 - Minimum Screening Eligibility Rule → screening eligibility validation occurs before request generation", async ({ testData }) => {
    await test.step("[CLM-TC-152] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-152] Executing Excel test steps: 1.Enter invalid entity data 2.Submit entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-152] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-152] Validating: Approval request should not be generated for screening-ineligible entity");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-153
  // Excel Scenario: Verify screening-eligible entity generates onboarding request
  // Excel Expected Result: Entity onboarding request should be generated successfully
  test("Case ID:CLM-TC-153 - Minimum Screening Eligibility Rule → screening-eligible entity generates onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-153] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-153] Executing Excel test steps: 1.Enter eligible entity data 2.Submit entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-153] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-153] Validating: Entity onboarding request should be generated successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-154
  // Excel Scenario: Verify eligible entity enters Pending Approval workflow
  // Excel Expected Result: Entity request should enter Pending Approval status
  test("Case ID:CLM-TC-154 - Minimum Screening Eligibility Rule → eligible entity enters Pending Approval workflow", async ({ testData }) => {
    await test.step("[CLM-TC-154] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-154] Executing Excel test steps: 1.Submit eligible entity 2.Open request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-154] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-154] Validating: Entity request should enter Pending Approval status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-155
  // Excel Scenario: Verify screening eligibility validation is consistently enforced
  // Excel Expected Result: System should consistently reject all screening-ineligible entities
  test("Case ID:CLM-TC-155 - Minimum Screening Eligibility Rule → screening eligibility validation is consistently enforced", async ({ testData }) => {
    await test.step("[CLM-TC-155] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-155] Executing Excel test steps: 1.Perform multiple submissions using different incomplete data combinations");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-155] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-155] Validating: System should consistently reject all screening-ineligible entities");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-156
  // Excel Scenario: Verify Save Draft allows incomplete entity information
  // Excel Expected Result: Draft should be saved successfully without screening eligibility validation failure
  test("Case ID:CLM-TC-156 - Minimum Screening Eligibility Rule → Save Draft allows incomplete entity information", async ({ testData }) => {
    await test.step("[CLM-TC-156] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-156] Executing Excel test steps: 1.Enter partial information 2.Click Save Draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-156] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-156] Validating: Draft should be saved successfully without screening eligibility validation failure");
      await clmPage.expectDraftStateVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-157
  // Excel Scenario: Verify edited draft can be submitted after eligibility requirements are satisfied
  // Excel Expected Result: Entity should be submitted successfully
  test("Case ID:CLM-TC-157 - Minimum Screening Eligibility Rule → edited draft can be submitted after eligibility requirements are satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-157] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-157] Executing Excel test steps: 1.Open draft 2.Complete required screening information 3.Submit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-157] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-157] Validating: Entity should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-158
  // Excel Scenario: Verify approved entity is available for downstream screening
  // Excel Expected Result: Entity should be available for subsequent AML screening operations
  test("Case ID:CLM-TC-158 - Minimum Screening Eligibility Rule → approved entity is available for downstream screening", async ({ testData }) => {
    await test.step("[CLM-TC-158] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-158] Executing Excel test steps: 1.Approve entity onboarding request 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-158] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-158] Validating: Entity should be available for subsequent AML screening operations");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Identity Information", () => {
  // Excel Test Case ID: CLM-TC-159
  // Excel Scenario: Verify identity information section is displayed on Add Entity form
  // Excel Expected Result: Identity Information section should be displayed successfully
  test("Case ID:CLM-TC-159 - Identity Information → identity information section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-159] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-159] Executing Excel test steps: 1.Open Add Entity form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-159] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-159] Validating: Identity Information section should be displayed successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-160
  // Excel Scenario: Verify First Name field accepts valid input
  // Excel Expected Result: First Name should be accepted successfully
  test("Case ID:CLM-TC-160 - Identity Information → First Name field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-160] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-160] Executing Excel test steps: 1.Enter valid First Name");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-160] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-160] Validating: First Name should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-161
  // Excel Scenario: Verify Last Name field accepts valid input
  // Excel Expected Result: Last Name should be accepted successfully
  test("Case ID:CLM-TC-161 - Identity Information → Last Name field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-161] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-161] Executing Excel test steps: 1.Enter valid Last Name");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-161] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-161] Validating: Last Name should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-162
  // Excel Scenario: Verify Full Name is captured correctly for screening purposes
  // Excel Expected Result: Complete name information should be stored successfully
  test("Case ID:CLM-TC-162 - Identity Information → Full Name is captured correctly for screening purposes", async ({ testData }) => {
    await test.step("[CLM-TC-162] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-162] Executing Excel test steps: 1.Enter available name information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-162] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-162] Validating: Complete name information should be stored successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-163
  // Excel Scenario: Verify Alias information can be captured
  // Excel Expected Result: Alias information should be accepted successfully
  test("Case ID:CLM-TC-163 - Identity Information → Alias information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-163] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-163] Executing Excel test steps: 1.Enter alias value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-163] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-163] Validating: Alias information should be accepted successfully");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-164
  // Excel Scenario: Verify multiple aliases can be captured when supported
  // Excel Expected Result: All configured alias values should be stored successfully
  test("Case ID:CLM-TC-164 - Identity Information → multiple aliases can be captured when supported", async ({ testData }) => {
    await test.step("[CLM-TC-164] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-164] Executing Excel test steps: 1.Enter multiple aliases if supported");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-164] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-164] Validating: All configured alias values should be stored successfully");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-165
  // Excel Scenario: Verify identity fields accept maximum supported length
  // Excel Expected Result: Values within configured limits should be accepted
  test("Case ID:CLM-TC-165 - Identity Information → identity fields accept maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-165] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-165] Executing Excel test steps: 1.Enter maximum supported values");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-165] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-165] Validating: Values within configured limits should be accepted");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-166
  // Excel Scenario: Verify identity fields reject values exceeding configured limits
  // Excel Expected Result: System should reject excess input or display validation message
  test("Case ID:CLM-TC-166 - Identity Information → identity fields reject values exceeding configured limits", async ({ testData }) => {
    await test.step("[CLM-TC-166] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-166] Executing Excel test steps: 1.Enter values exceeding supported length");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-166] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-166] Validating: System should reject excess input or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-167
  // Excel Scenario: Verify identity information remains intact while completing onboarding form
  // Excel Expected Result: Identity information should remain unchanged
  test("Case ID:CLM-TC-167 - Identity Information → identity information remains intact while completing onboarding form", async ({ testData }) => {
    await test.step("[CLM-TC-167] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-167] Executing Excel test steps: 1.Enter identity information 2.Navigate through remaining sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-167] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-167] Validating: Identity information should remain unchanged");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-168
  // Excel Scenario: Verify identity information is retained in draft entity
  // Excel Expected Result: Previously entered identity information should be retained
  test("Case ID:CLM-TC-168 - Identity Information → identity information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-168] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-168] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-168] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-168] Validating: Previously entered identity information should be retained");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-169
  // Excel Scenario: Verify identity information is retained in submitted onboarding request
  // Excel Expected Result: Request should display entered identity information accurately
  test("Case ID:CLM-TC-169 - Identity Information → identity information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-169] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-169] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-169] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-169] Validating: Request should display entered identity information accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-170
  // Excel Scenario: Verify approved entity displays correct identity information
  // Excel Expected Result: Entity details should display accurate identity information
  test("Case ID:CLM-TC-170 - Identity Information → approved entity displays correct identity information", async ({ testData }) => {
    await test.step("[CLM-TC-170] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-170] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-170] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-170] Validating: Entity details should display accurate identity information");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Identifier Information", () => {
  // Excel Test Case ID: CLM-TC-171
  // Excel Scenario: Verify Identifier Information section is displayed on Add Entity form
  // Excel Expected Result: Identifier Information section should be displayed with all configured fields
  test("Case ID:CLM-TC-171 - Identifier Information → Identifier Information section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-171] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-171] Executing Excel test steps: 1.Open Add Entity form 2.Navigate to Identifier Information section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-171] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-171] Validating: Identifier Information section should be displayed with all configured fields");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-172
  // Excel Scenario: Verify user can capture government issued identifier information
  // Excel Expected Result: Identifier information should be accepted successfully
  test("Case ID:CLM-TC-172 - Identifier Information → user can capture government issued identifier information", async ({ testData }) => {
    await test.step("[CLM-TC-172] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-172] Executing Excel test steps: 1.Enter valid identifier information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-172] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-172] Validating: Identifier information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-173
  // Excel Scenario: Verify identifier fields accept alphanumeric values where supported
  // Excel Expected Result: Identifier value should be accepted successfully
  test("Case ID:CLM-TC-173 - Identifier Information → identifier fields accept alphanumeric values where supported", async ({ testData }) => {
    await test.step("[CLM-TC-173] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-173] Executing Excel test steps: 1.Enter valid alphanumeric identifier");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-173] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-173] Validating: Identifier value should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-174
  // Excel Scenario: Verify identifier fields enforce configured maximum length
  // Excel Expected Result: Identifier value within configured limit should be accepted
  test("Case ID:CLM-TC-174 - Identifier Information → identifier fields enforce configured maximum length", async ({ testData }) => {
    await test.step("[CLM-TC-174] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-174] Executing Excel test steps: 1.Enter maximum supported identifier value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-174] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-174] Validating: Identifier value within configured limit should be accepted");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-175
  // Excel Scenario: Verify identifier fields reject values exceeding configured limits
  // Excel Expected Result: System should reject excess characters or display validation message
  test("Case ID:CLM-TC-175 - Identifier Information → identifier fields reject values exceeding configured limits", async ({ testData }) => {
    await test.step("[CLM-TC-175] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-175] Executing Excel test steps: 1.Enter identifier value exceeding configured limit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-175] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-175] Validating: System should reject excess characters or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-176
  // Excel Scenario: Verify multiple identifier values can be captured for the same entity when supported
  // Excel Expected Result: All configured identifier values should be retained successfully
  test("Case ID:CLM-TC-176 - Identifier Information → multiple identifier values can be captured for the same entity when supported", async ({ testData }) => {
    await test.step("[CLM-TC-176] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-176] Executing Excel test steps: 1.Enter multiple identifier values");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-176] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-176] Validating: All configured identifier values should be retained successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-177
  // Excel Scenario: Verify identifier information remains intact while completing onboarding workflow
  // Excel Expected Result: Entered identifier information should remain unchanged
  test("Case ID:CLM-TC-177 - Identifier Information → identifier information remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-177] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-177] Executing Excel test steps: 1.Enter identifier data 2.Complete remaining onboarding sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-177] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-177] Validating: Entered identifier information should remain unchanged");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-178
  // Excel Scenario: Verify identifier information is retained in draft entity
  // Excel Expected Result: Previously entered identifier information should be retained
  test("Case ID:CLM-TC-178 - Identifier Information → identifier information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-178] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-178] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-178] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-178] Validating: Previously entered identifier information should be retained");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-179
  // Excel Scenario: Verify identifier information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate identifier information
  test("Case ID:CLM-TC-179 - Identifier Information → identifier information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-179] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-179] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-179] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-179] Validating: Submitted request should display accurate identifier information");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-180
  // Excel Scenario: Verify approved entity retains identifier information
  // Excel Expected Result: Approved entity should display correct identifier information
  test("Case ID:CLM-TC-180 - Identifier Information → approved entity retains identifier information", async ({ testData }) => {
    await test.step("[CLM-TC-180] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-180] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-180] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-180] Validating: Approved entity should display correct identifier information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Digital Identifiers", () => {
  // Excel Test Case ID: CLM-TC-181
  // Excel Scenario: Verify Digital Identifiers section is displayed on Add Entity form
  // Excel Expected Result: Digital Identifiers section should be displayed successfully
  test("Case ID:CLM-TC-181 - Digital Identifiers → Digital Identifiers section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-181] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-181] Executing Excel test steps: 1.Open Add Entity form 2.Navigate to Digital Identifiers section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-181] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-181] Validating: Digital Identifiers section should be displayed successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-182
  // Excel Scenario: Verify email identifier can be captured
  // Excel Expected Result: Email identifier should be accepted successfully
  test("Case ID:CLM-TC-182 - Digital Identifiers → email identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-182] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-182] Executing Excel test steps: 1.Enter email value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-182] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-182] Validating: Email identifier should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-183
  // Excel Scenario: Verify mobile identifier can be captured
  // Excel Expected Result: Mobile identifier should be accepted successfully
  test("Case ID:CLM-TC-183 - Digital Identifiers → mobile identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-183] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-183] Executing Excel test steps: 1.Enter mobile number");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-183] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-183] Validating: Mobile identifier should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-184
  // Excel Scenario: Verify IP Address identifier can be captured
  // Excel Expected Result: IP Address should be accepted successfully
  test("Case ID:CLM-TC-184 - Digital Identifiers → IP Address identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-184] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-184] Executing Excel test steps: 1.Enter IP Address");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-184] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-184] Validating: IP Address should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-185
  // Excel Scenario: Verify Device Identifier can be captured
  // Excel Expected Result: Device Identifier should be accepted successfully
  test("Case ID:CLM-TC-185 - Digital Identifiers → Device Identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-185] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-185] Executing Excel test steps: 1.Enter Device ID");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-185] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-185] Validating: Device Identifier should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-186
  // Excel Scenario: Verify multiple digital identifiers can be captured for a single entity
  // Excel Expected Result: All configured digital identifiers should be stored successfully
  test("Case ID:CLM-TC-186 - Digital Identifiers → multiple digital identifiers can be captured for a single entity", async ({ testData }) => {
    await test.step("[CLM-TC-186] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-186] Executing Excel test steps: 1.Enter Email, Mobile, IP and Device information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-186] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-186] Validating: All configured digital identifiers should be stored successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-187
  // Excel Scenario: Verify digital identifiers remain intact while completing onboarding workflow
  // Excel Expected Result: Entered digital identifiers should remain unchanged
  test("Case ID:CLM-TC-187 - Digital Identifiers → digital identifiers remain intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-187] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-187] Executing Excel test steps: 1.Enter digital identifiers 2.Complete remaining sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-187] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-187] Validating: Entered digital identifiers should remain unchanged");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-188
  // Excel Scenario: Verify digital identifiers are retained in draft entity
  // Excel Expected Result: Previously entered digital identifiers should be retained
  test("Case ID:CLM-TC-188 - Digital Identifiers → digital identifiers are retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-188] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-188] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-188] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-188] Validating: Previously entered digital identifiers should be retained");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-189
  // Excel Scenario: Verify digital identifiers are retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate digital identifier information
  test("Case ID:CLM-TC-189 - Digital Identifiers → digital identifiers are retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-189] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-189] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-189] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-189] Validating: Submitted request should display accurate digital identifier information");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-190
  // Excel Scenario: Verify approved entity retains digital identifiers for downstream screening
  // Excel Expected Result: Approved entity should display correct digital identifier information
  test("Case ID:CLM-TC-190 - Digital Identifiers → approved entity retains digital identifiers for downstream screening", async ({ testData }) => {
    await test.step("[CLM-TC-190] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-190] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-190] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-190] Validating: Approved entity should display correct digital identifier information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Localization", () => {
  // Excel Test Case ID: CLM-TC-191
  // Excel Scenario: Verify Localization section is displayed on Add Entity form
  // Excel Expected Result: Localization section should be displayed successfully
  test("Case ID:CLM-TC-191 - Localization → Localization section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-191] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-191] Executing Excel test steps: 1.Open Add Entity form 2.Navigate to Localization section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-191] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-191] Validating: Localization section should be displayed successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-192
  // Excel Scenario: Verify country information can be captured
  // Excel Expected Result: Country information should be accepted successfully
  test("Case ID:CLM-TC-192 - Localization → country information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-192] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-192] Executing Excel test steps: 1.Enter/select country value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-192] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-192] Validating: Country information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-193
  // Excel Scenario: Verify nationality information can be captured
  // Excel Expected Result: Nationality information should be accepted successfully
  test("Case ID:CLM-TC-193 - Localization → nationality information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-193] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-193] Executing Excel test steps: 1.Enter/select nationality value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-193] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-193] Validating: Nationality information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-194
  // Excel Scenario: Verify address information can be captured
  // Excel Expected Result: Address information should be accepted successfully
  test("Case ID:CLM-TC-194 - Localization → address information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-194] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-194] Executing Excel test steps: 1.Enter address details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-194] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-194] Validating: Address information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-195
  // Excel Scenario: Verify multilingual/localized values can be captured where supported
  // Excel Expected Result: Localized information should be accepted successfully
  test("Case ID:CLM-TC-195 - Localization → multilingual/localized values can be captured where supported", async ({ testData }) => {
    await test.step("[CLM-TC-195] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-195] Executing Excel test steps: 1.Enter localized values where applicable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-195] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-195] Validating: Localized information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-196
  // Excel Scenario: Verify localization information remains intact while completing onboarding workflow
  // Excel Expected Result: Entered localization information should remain unchanged
  test("Case ID:CLM-TC-196 - Localization → localization information remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-196] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-196] Executing Excel test steps: 1.Enter localization information 2.Complete remaining onboarding sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-196] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-196] Validating: Entered localization information should remain unchanged");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-197
  // Excel Scenario: Verify localization information is retained in draft entity
  // Excel Expected Result: Previously entered localization information should be retained
  test("Case ID:CLM-TC-197 - Localization → localization information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-197] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-197] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-197] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-197] Validating: Previously entered localization information should be retained");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-198
  // Excel Scenario: Verify localization information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate localization information
  test("Case ID:CLM-TC-198 - Localization → localization information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-198] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-198] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-198] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-198] Validating: Submitted request should display accurate localization information");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-199
  // Excel Scenario: Verify approved entity retains localization information
  // Excel Expected Result: Approved entity should display correct localization information
  test("Case ID:CLM-TC-199 - Localization → approved entity retains localization information", async ({ testData }) => {
    await test.step("[CLM-TC-199] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-199] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-199] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-199] Validating: Approved entity should display correct localization information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-200
  // Excel Scenario: Verify localization data remains available for screening and investigation workflows
  // Excel Expected Result: Localization information should remain available and complete for screening operations
  test("Case ID:CLM-TC-200 - Localization → localization data remains available for screening and investigation workflows", async ({ testData }) => {
    await test.step("[CLM-TC-200] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-200] Executing Excel test steps: 1.Open approved entity details 2.Verify localization section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-200] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-200] Validating: Localization information should remain available and complete for screening operations");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Risk & Governance", () => {
  // Excel Test Case ID: CLM-TC-201
  // Excel Scenario: Verify Risk & Governance section is displayed on Add Entity form
  // Excel Expected Result: Risk & Governance section should be displayed successfully with all configured controls
  test("Case ID:CLM-TC-201 - Risk & Governance → Risk & Governance section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-201] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-201] Executing Excel test steps: 1.Open Add Entity form 2.Navigate to Risk & Governance section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-201] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-201] Validating: Risk & Governance section should be displayed successfully with all configured controls");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-202
  // Excel Scenario: Verify user can configure available risk classification values
  // Excel Expected Result: Selected risk value should be accepted successfully
  test("Case ID:CLM-TC-202 - Risk & Governance → user can configure available risk classification values", async ({ testData }) => {
    await test.step("[CLM-TC-202] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-202] Executing Excel test steps: 1.Select available risk value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-202] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-202] Validating: Selected risk value should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-203
  // Excel Scenario: Verify risk configuration remains intact while completing onboarding workflow
  // Excel Expected Result: Configured risk values should remain unchanged until modified by user
  test("Case ID:CLM-TC-203 - Risk & Governance → risk configuration remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-203] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-203] Executing Excel test steps: 1.Configure risk settings 2.Complete remaining sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-203] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-203] Validating: Configured risk values should remain unchanged until modified by user");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-204
  // Excel Scenario: Verify governance-related information can be captured during onboarding
  // Excel Expected Result: Governance information should be accepted successfully
  test("Case ID:CLM-TC-204 - Risk & Governance → governance-related information can be captured during onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-204] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-204] Executing Excel test steps: 1.Enter governance-related information if applicable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-204] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-204] Validating: Governance information should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-205
  // Excel Scenario: Verify risk and governance information is retained in draft entity
  // Excel Expected Result: Previously entered risk and governance information should be retained
  test("Case ID:CLM-TC-205 - Risk & Governance → risk and governance information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-205] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-205] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-205] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-205] Validating: Previously entered risk and governance information should be retained");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-206
  // Excel Scenario: Verify risk and governance information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate risk and governance information
  test("Case ID:CLM-TC-206 - Risk & Governance → risk and governance information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-206] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-206] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-206] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-206] Validating: Submitted request should display accurate risk and governance information");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-207
  // Excel Scenario: Verify approved entity retains risk and governance information
  // Excel Expected Result: Approved entity should display correct risk and governance information
  test("Case ID:CLM-TC-207 - Risk & Governance → approved entity retains risk and governance information", async ({ testData }) => {
    await test.step("[CLM-TC-207] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-207] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-207] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-207] Validating: Approved entity should display correct risk and governance information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-208
  // Excel Scenario: Verify risk and governance information remains available for downstream screening activities
  // Excel Expected Result: Risk and governance information should remain available and complete for AML operations
  test("Case ID:CLM-TC-208 - Risk & Governance → risk and governance information remains available for downstream screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-208] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-208] Executing Excel test steps: 1.Open approved entity details 2.Verify risk section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-208] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-208] Validating: Risk and governance information should remain available and complete for AML operations");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Real-Time Alert Configuration", () => {
  // Excel Test Case ID: CLM-TC-209
  // Excel Scenario: Verify Real-Time Alert Configuration section is displayed
  // Excel Expected Result: Alert Configuration section should be displayed successfully
  test("Case ID:CLM-TC-209 - Real-Time Alert Configuration → Real-Time Alert Configuration section is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-209] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-209] Executing Excel test steps: 1.Open Add Entity form 2.Navigate to Alert Configuration section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-209] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-209] Validating: Alert Configuration section should be displayed successfully");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-210
  // Excel Scenario: Verify available alert configuration options can be selected
  // Excel Expected Result: Selected alert configuration should be accepted successfully
  test("Case ID:CLM-TC-210 - Real-Time Alert Configuration → available alert configuration options can be selected", async ({ testData }) => {
    await test.step("[CLM-TC-210] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-210] Executing Excel test steps: 1.Configure alert settings");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-210] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-210] Validating: Selected alert configuration should be accepted successfully");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-211
  // Excel Scenario: Verify alert configuration remains intact while completing onboarding workflow
  // Excel Expected Result: Configured alert settings should remain unchanged
  test("Case ID:CLM-TC-211 - Real-Time Alert Configuration → alert configuration remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-211] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-211] Executing Excel test steps: 1.Configure alert settings 2.Complete remaining onboarding sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-211] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-211] Validating: Configured alert settings should remain unchanged");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-212
  // Excel Scenario: Verify alert configuration is retained in draft entity
  // Excel Expected Result: Previously configured alert settings should be retained
  test("Case ID:CLM-TC-212 - Real-Time Alert Configuration → alert configuration is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-212] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-212] Executing Excel test steps: 1.Save draft 2.Reopen draft");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-212] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-212] Validating: Previously configured alert settings should be retained");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-213
  // Excel Scenario: Verify alert configuration is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate alert configuration
  test("Case ID:CLM-TC-213 - Real-Time Alert Configuration → alert configuration is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-213] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-213] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-213] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-213] Validating: Submitted request should display accurate alert configuration");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-214
  // Excel Scenario: Verify approved entity retains configured alert settings
  // Excel Expected Result: Approved entity should display configured alert settings
  test("Case ID:CLM-TC-214 - Real-Time Alert Configuration → approved entity retains configured alert settings", async ({ testData }) => {
    await test.step("[CLM-TC-214] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-214] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-214] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-214] Validating: Approved entity should display configured alert settings");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-215
  // Excel Scenario: Verify alert configuration remains associated with the correct entity
  // Excel Expected Result: Alert configuration should remain linked to the correct entity only
  test("Case ID:CLM-TC-215 - Real-Time Alert Configuration → alert configuration remains associated with the correct entity", async ({ testData }) => {
    await test.step("[CLM-TC-215] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-215] Executing Excel test steps: 1.Open multiple entities 2.Verify alert settings");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-215] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-215] Validating: Alert configuration should remain linked to the correct entity only");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-216
  // Excel Scenario: Verify alert configuration is available for downstream monitoring workflows
  // Excel Expected Result: Configured alert settings should remain available for downstream AML monitoring activities
  test("Case ID:CLM-TC-216 - Real-Time Alert Configuration → alert configuration is available for downstream monitoring workflows", async ({ testData }) => {
    await test.step("[CLM-TC-216] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-216] Executing Excel test steps: 1.Open entity details 2.Verify alert configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-216] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-216] Validating: Configured alert settings should remain available for downstream AML monitoring activities");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Submission Workflow", () => {
  // Excel Test Case ID: CLM-TC-217
  // Excel Scenario: Verify screening-eligible entity can be submitted for approval
  // Excel Expected Result: Entity onboarding request should be submitted successfully
  test("Case ID:CLM-TC-217 - Entity Submission Workflow → screening-eligible entity can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-217] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-217] Executing Excel test steps: 1.Complete onboarding form 2.Click Submit For Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-217] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-217] Validating: Entity onboarding request should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-218
  // Excel Scenario: Verify entity submission generates Maker-Checker request
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-218 - Entity Submission Workflow → entity submission generates Maker-Checker request", async ({ testData }) => {
    await test.step("[CLM-TC-218] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-218] Executing Excel test steps: 1.Submit entity onboarding request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-218] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-218] Validating: Approval request should be generated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-219
  // Excel Scenario: Verify submitted entity enters Pending Approval state
  // Excel Expected Result: Request should display Pending Approval status
  test("Case ID:CLM-TC-219 - Entity Submission Workflow → submitted entity enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-219] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-219] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-219] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-219] Validating: Request should display Pending Approval status");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-220
  // Excel Scenario: Verify submitted entity request is visible in approval queue
  // Excel Expected Result: Entity request should be visible in approval queue
  test("Case ID:CLM-TC-220 - Entity Submission Workflow → submitted entity request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-220] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-220] Executing Excel test steps: 1.Navigate to Maker-Checker queue");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-220] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-220] Validating: Entity request should be visible in approval queue");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-221
  // Excel Scenario: Verify submitted request retains complete onboarding information
  // Excel Expected Result: Request should display complete onboarding information entered during entity creation
  test("Case ID:CLM-TC-221 - Entity Submission Workflow → submitted request retains complete onboarding information", async ({ testData }) => {
    await test.step("[CLM-TC-221] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-221] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-221] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-221] Validating: Request should display complete onboarding information entered during entity creation");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-222
  // Excel Scenario: Verify entity request remains pending until checker action
  // Excel Expected Result: Request should remain in Pending Approval state until checker action occurs
  test("Case ID:CLM-TC-222 - Entity Submission Workflow → entity request remains pending until checker action", async ({ testData }) => {
    await test.step("[CLM-TC-222] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-222] Executing Excel test steps: 1.Submit request 2.Verify status before approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-222] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-222] Validating: Request should remain in Pending Approval state until checker action occurs");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-223
  // Excel Scenario: Verify approved entity becomes available within associated custom list
  // Excel Expected Result: Entity should become available within the associated custom list
  test("Case ID:CLM-TC-223 - Entity Submission Workflow → approved entity becomes available within associated custom list", async ({ testData }) => {
    await test.step("[CLM-TC-223] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-223] Executing Excel test steps: 1.Approve entity request 2.Open associated custom list");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-223] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-223] Validating: Entity should become available within the associated custom list");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-224
  // Excel Scenario: Verify approved entity retains all onboarding information
  // Excel Expected Result: Approved entity should display all onboarding information accurately
  test("Case ID:CLM-TC-224 - Entity Submission Workflow → approved entity retains all onboarding information", async ({ testData }) => {
    await test.step("[CLM-TC-224] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-224] Executing Excel test steps: 1.Open approved entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-224] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-224] Validating: Approved entity should display all onboarding information accurately");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-225
  // Excel Scenario: Verify approved entity contributes to custom list statistics
  // Excel Expected Result: Entity statistics should be updated accordingly
  test("Case ID:CLM-TC-225 - Entity Submission Workflow → approved entity contributes to custom list statistics", async ({ testData }) => {
    await test.step("[CLM-TC-225] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-225] Executing Excel test steps: 1.Note entity count 2.Approve entity 3.Verify statistics");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-225] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-225] Validating: Entity statistics should be updated accordingly");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-226
  // Excel Scenario: Verify approved entity becomes available for AML screening operations
  // Excel Expected Result: Entity should be available for subsequent AML screening and monitoring workflows
  test("Case ID:CLM-TC-226 - Entity Submission Workflow → approved entity becomes available for AML screening operations", async ({ testData }) => {
    await test.step("[CLM-TC-226] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-226] Executing Excel test steps: 1.Open approved entity details 2.Verify onboarding completion");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Test Entity Alpha");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-226] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-226] Validating: Entity should be available for subsequent AML screening and monitoring workflows");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Grid", () => {
  // Excel Test Case ID: CLM-TC-227
  // Excel Scenario: Verify Entity grid is displayed within selected custom list
  // Excel Expected Result: Entity grid should be displayed successfully
  test("Case ID:CLM-TC-227 - Entity Grid → Entity grid is displayed within selected custom list", async ({ testData }) => {
    await test.step("[CLM-TC-227] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-227] Executing Excel test steps: 1.Open approved custom list 2.Navigate to Entities tab");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Data Available");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-227] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-227] Validating: Entity grid should be displayed successfully");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-228
  // Excel Scenario: Verify all configured entity grid columns are displayed
  // Excel Expected Result: All configured grid columns should be visible and properly aligned
  test("Case ID:CLM-TC-228 - Entity Grid → all configured entity grid columns are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-228] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-228] Executing Excel test steps: 1.Open Entity grid 2.Review available columns");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-228] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-228] Validating: All configured grid columns should be visible and properly aligned");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-229
  // Excel Scenario: Verify entity information displayed in grid matches onboarded data
  // Excel Expected Result: Entity information displayed in grid should match stored entity data
  test("Case ID:CLM-TC-229 - Entity Grid → entity information displayed in grid matches onboarded data", async ({ testData }) => {
    await test.step("[CLM-TC-229] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-229] Executing Excel test steps: 1.Open Entity grid 2.Compare grid values with entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample Entity");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-229] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-229] Validating: Entity information displayed in grid should match stored entity data");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-230
  // Excel Scenario: Verify entity status is displayed for each entity
  // Excel Expected Result: Status should be displayed for all entity records
  test("Case ID:CLM-TC-230 - Entity Grid → entity status is displayed for each entity", async ({ testData }) => {
    await test.step("[CLM-TC-230] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-230] Executing Excel test steps: 1.Open Entity grid 2.Review Status column");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-230] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-230] Validating: Status should be displayed for all entity records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-231
  // Excel Scenario: Verify entity status displayed in grid matches actual entity status
  // Excel Expected Result: Status displayed in grid should match actual entity status
  test("Case ID:CLM-TC-231 - Entity Grid → entity status displayed in grid matches actual entity status", async ({ testData }) => {
    await test.step("[CLM-TC-231] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-231] Executing Excel test steps: 1.Verify status in grid 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample Entity");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-231] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-231] Validating: Status displayed in grid should match actual entity status");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-232
  // Excel Scenario: Verify grid displays multiple entity records correctly
  // Excel Expected Result: All available entity records should be displayed correctly
  test("Case ID:CLM-TC-232 - Entity Grid → grid displays multiple entity records correctly", async ({ testData }) => {
    await test.step("[CLM-TC-232] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-232] Executing Excel test steps: 1.Open Entity grid");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Multiple Entities");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-232] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-232] Validating: All available entity records should be displayed correctly");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-233
  // Excel Scenario: Verify newly approved entity appears in entity grid
  // Excel Expected Result: Newly approved entity should be visible in grid
  test("Case ID:CLM-TC-233 - Entity Grid → newly approved entity appears in entity grid", async ({ testData }) => {
    await test.step("[CLM-TC-233] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-233] Executing Excel test steps: 1.Approve entity onboarding request 2.Open Entity grid");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("New Approved Entity");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-233] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-233] Validating: Newly approved entity should be visible in grid");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-234
  // Excel Scenario: Verify disabled entity remains visible with appropriate status
  // Excel Expected Result: Disabled entity should remain visible with updated lifecycle status
  test("Case ID:CLM-TC-234 - Entity Grid → disabled entity remains visible with appropriate status", async ({ testData }) => {
    await test.step("[CLM-TC-234] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-234] Executing Excel test steps: 1.Open Entity grid");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Disabled Entity");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-234] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-234] Validating: Disabled entity should remain visible with updated lifecycle status");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-235
  // Excel Scenario: Verify entity grid data remains consistent after page refresh
  // Excel Expected Result: Entity grid should reload successfully with consistent data
  test("Case ID:CLM-TC-235 - Entity Grid → entity grid data remains consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-235] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-235] Executing Excel test steps: 1.Open Entity grid 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-235] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-235] Validating: Entity grid should reload successfully with consistent data");
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-236
  // Excel Scenario: Verify entity count displayed in grid aligns with custom list statistics
  // Excel Expected Result: Entity count should match corresponding custom list statistics
  test("Case ID:CLM-TC-236 - Entity Grid → entity count displayed in grid aligns with custom list statistics", async ({ testData }) => {
    await test.step("[CLM-TC-236] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-236] Executing Excel test steps: 1.Note entity count in grid 2.Compare with custom list statistics");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-236] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-236] Validating: Entity count should match corresponding custom list statistics");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("View Entity", () => {
  // Excel Test Case ID: CLM-TC-247
  // Excel Scenario: Verify View action is available for onboarded entities
  // Excel Expected Result: View action should be visible and accessible
  test("Case ID:CLM-TC-247 - View Entity → View action is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-247] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-247] Executing Excel test steps: 1.Open Entity grid 2.Verify View action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-247] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-247] Validating: View action should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-248
  // Excel Scenario: Verify View action opens entity details page
  // Excel Expected Result: Entity details page should open successfully
  test("Case ID:CLM-TC-248 - View Entity → View action opens entity details page", async ({ testData }) => {
    await test.step("[CLM-TC-248] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-248] Executing Excel test steps: 1.Click View action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-248] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-248] Validating: Entity details page should open successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-249
  // Excel Scenario: Verify identity information is displayed correctly in entity details
  // Excel Expected Result: Identity information should match onboarded values
  test("Case ID:CLM-TC-249 - View Entity → identity information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-249] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-249] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-249] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-249] Validating: Identity information should match onboarded values");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-250
  // Excel Scenario: Verify identifier information is displayed correctly in entity details
  // Excel Expected Result: Identifier information should match onboarded values
  test("Case ID:CLM-TC-250 - View Entity → identifier information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-250] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-250] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-250] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-250] Validating: Identifier information should match onboarded values");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-251
  // Excel Scenario: Verify digital identifiers are displayed correctly in entity details
  // Excel Expected Result: Digital identifiers should match onboarded values
  test("Case ID:CLM-TC-251 - View Entity → digital identifiers are displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-251] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-251] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-251] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-251] Validating: Digital identifiers should match onboarded values");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-252
  // Excel Scenario: Verify localization information is displayed correctly in entity details
  // Excel Expected Result: Localization information should match onboarded values
  test("Case ID:CLM-TC-252 - View Entity → localization information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-252] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-252] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-252] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-252] Validating: Localization information should match onboarded values");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-253
  // Excel Scenario: Verify risk and governance information is displayed correctly
  // Excel Expected Result: Risk and governance information should match onboarded values
  test("Case ID:CLM-TC-253 - View Entity → risk and governance information is displayed correctly", async ({ testData }) => {
    await test.step("[CLM-TC-253] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-253] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-253] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-253] Validating: Risk and governance information should match onboarded values");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-254
  // Excel Scenario: Verify entity lifecycle status is displayed in details page
  // Excel Expected Result: Entity details should display current lifecycle status
  test("Case ID:CLM-TC-254 - View Entity → entity lifecycle status is displayed in details page", async ({ testData }) => {
    await test.step("[CLM-TC-254] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-254] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-254] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-254] Validating: Entity details should display current lifecycle status");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-255
  // Excel Scenario: Verify entity metadata is displayed in details page
  // Excel Expected Result: Entity details should display available metadata information
  test("Case ID:CLM-TC-255 - View Entity → entity metadata is displayed in details page", async ({ testData }) => {
    await test.step("[CLM-TC-255] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-255] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-255] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-255] Validating: Entity details should display available metadata information");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-256
  // Excel Scenario: Verify entity details remain consistent after page refresh
  // Excel Expected Result: Entity details should reload successfully with consistent information
  test("Case ID:CLM-TC-256 - View Entity → entity details remain consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-256] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-256] Executing Excel test steps: 1.Open entity details 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-256] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-256] Validating: Entity details should reload successfully with consistent information");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Edit Entity", () => {
  // Excel Test Case ID: CLM-TC-257
  // Excel Scenario: Verify Edit action is available for onboarded entities
  // Excel Expected Result: Edit action should be visible and accessible
  test("Case ID:CLM-TC-257 - Edit Entity → Edit action is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-257] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-257] Executing Excel test steps: 1.Open Entity Grid 2.Verify Edit action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-257] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-257] Validating: Edit action should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-258
  // Excel Scenario: Verify Edit action opens entity in edit mode
  // Excel Expected Result: Edit Entity form should open successfully
  test("Case ID:CLM-TC-258 - Edit Entity → Edit action opens entity in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-258] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-258] Executing Excel test steps: 1.Click Edit action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-258] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-258] Validating: Edit Entity form should open successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-259
  // Excel Scenario: Verify existing entity information is pre-populated in Edit form
  // Excel Expected Result: Previously saved entity information should be displayed
  test("Case ID:CLM-TC-259 - Edit Entity → existing entity information is pre-populated in Edit form", async ({ testData }) => {
    await test.step("[CLM-TC-259] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-259] Executing Excel test steps: 1.Open Edit Entity form");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-259] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-259] Validating: Previously saved entity information should be displayed");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-260
  // Excel Scenario: Verify editable entity fields can be modified
  // Excel Expected Result: Modified values should be accepted successfully
  test("Case ID:CLM-TC-260 - Edit Entity → editable entity fields can be modified", async ({ testData }) => {
    await test.step("[CLM-TC-260] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-260] Executing Excel test steps: 1.Modify editable fields");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-260] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-260] Validating: Modified values should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-261
  // Excel Scenario: Verify modified values remain intact during edit session
  // Excel Expected Result: Modified values should remain unchanged until saved or submitted
  test("Case ID:CLM-TC-261 - Edit Entity → modified values remain intact during edit session", async ({ testData }) => {
    await test.step("[CLM-TC-261] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-261] Executing Excel test steps: 1.Modify fields 2.Navigate across sections");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-261] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-261] Validating: Modified values should remain unchanged until saved or submitted");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-262
  // Excel Scenario: Verify updated entity can be submitted for approval
  // Excel Expected Result: Entity update request should be submitted successfully
  test("Case ID:CLM-TC-262 - Edit Entity → updated entity can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-262] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-262] Executing Excel test steps: 1.Modify entity 2.Click Submit For Approval");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    await clmPage.fillEntityName("Test Entity Alpha Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-262] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-262] Validating: Entity update request should be submitted successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-263
  // Excel Scenario: Verify entity modification generates approval request
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-263 - Edit Entity → entity modification generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-263] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-263] Executing Excel test steps: 1.Submit modified entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-263] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-263] Validating: Approval request should be generated successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-264
  // Excel Scenario: Verify entity update request enters Pending Approval status
  // Excel Expected Result: Request should display Pending Approval status
  test("Case ID:CLM-TC-264 - Edit Entity → entity update request enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-264] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-264] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    await clmPage.fillEntityName("Test Entity Alpha Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-264] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-264] Validating: Request should display Pending Approval status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-265
  // Excel Scenario: Verify submitted update request retains modified entity information
  // Excel Expected Result: Request should display all modified information accurately
  test("Case ID:CLM-TC-265 - Edit Entity → submitted update request retains modified entity information", async ({ testData }) => {
    await test.step("[CLM-TC-265] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-265] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    await clmPage.fillEntityName("Test Entity Alpha Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-265] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-265] Validating: Request should display all modified information accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-266
  // Excel Scenario: Verify approved entity reflects updated information
  // Excel Expected Result: Entity details should display approved updated information
  test("Case ID:CLM-TC-266 - Edit Entity → approved entity reflects updated information", async ({ testData }) => {
    await test.step("[CLM-TC-266] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-266] Executing Excel test steps: 1.Approve update request 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.editEntity("Test Entity Alpha");
    await clmPage.fillEntityName("Test Entity Alpha Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-266] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-266] Validating: Entity details should display approved updated information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Enable Disable Entity", () => {
  // Excel Test Case ID: CLM-TC-267
  // Excel Scenario: Verify Disable action can be initiated for active entity
  // Excel Expected Result: Disable request workflow should be initiated successfully
  test("Case ID:CLM-TC-267 - Enable Disable Entity → Disable action can be initiated for active entity", async ({ testData }) => {
    await test.step("[CLM-TC-267] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-267] Executing Excel test steps: 1.Select active entity 2.Click Disable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-267] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-267] Validating: Disable request workflow should be initiated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-268
  // Excel Scenario: Verify Enable action can be initiated for disabled entity
  // Excel Expected Result: Enable request workflow should be initiated successfully
  test("Case ID:CLM-TC-268 - Enable Disable Entity → Enable action can be initiated for disabled entity", async ({ testData }) => {
    await test.step("[CLM-TC-268] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-268] Executing Excel test steps: 1.Select disabled entity 2.Click Enable");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-268] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-268] Validating: Enable request workflow should be initiated successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-269
  // Excel Scenario: Verify Enable/Disable request generates approval request
  // Excel Expected Result: Approval request should be generated successfully
  test("Case ID:CLM-TC-269 - Enable Disable Entity → Enable/Disable request generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-269] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-269] Executing Excel test steps: 1.Submit Enable/Disable request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-269] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-269] Validating: Approval request should be generated successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-270
  // Excel Scenario: Verify Enable/Disable request enters Pending Approval status
  // Excel Expected Result: Request should display Pending Approval status
  test("Case ID:CLM-TC-270 - Enable Disable Entity → Enable/Disable request enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-270] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-270] Executing Excel test steps: 1.Open submitted request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-270] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-270] Validating: Request should display Pending Approval status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-271
  // Excel Scenario: Verify entity status remains unchanged before approval
  // Excel Expected Result: Entity status should remain unchanged until checker approval
  test("Case ID:CLM-TC-271 - Enable Disable Entity → entity status remains unchanged before approval", async ({ testData }) => {
    await test.step("[CLM-TC-271] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-271] Executing Excel test steps: 1.Submit Enable/Disable request 2.Verify entity status");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.enableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-271] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-271] Validating: Entity status should remain unchanged until checker approval");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-272
  // Excel Scenario: Verify approved Disable request changes entity status
  // Excel Expected Result: Entity status should change to Disabled
  test("Case ID:CLM-TC-272 - Enable Disable Entity → approved Disable request changes entity status", async ({ testData }) => {
    await test.step("[CLM-TC-272] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-272] Executing Excel test steps: 1.Approve request 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-272] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-272] Validating: Entity status should change to Disabled");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-273
  // Excel Scenario: Verify approved Enable request changes entity status
  // Excel Expected Result: Entity status should change to Active
  test("Case ID:CLM-TC-273 - Enable Disable Entity → approved Enable request changes entity status", async ({ testData }) => {
    await test.step("[CLM-TC-273] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-273] Executing Excel test steps: 1.Approve request 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.enableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-273] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-273] Validating: Entity status should change to Active");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-274
  // Excel Scenario: Verify disabled entity remains visible in entity inventory
  // Excel Expected Result: Disabled entity should remain visible with correct status
  test("Case ID:CLM-TC-274 - Enable Disable Entity → disabled entity remains visible in entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-274] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-274] Executing Excel test steps: 1.Open Entity Grid");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.disableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-274] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-274] Validating: Disabled entity should remain visible with correct status");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-275
  // Excel Scenario: Verify entity grid reflects latest approved status
  // Excel Expected Result: Entity grid should display updated entity status
  test("Case ID:CLM-TC-275 - Enable Disable Entity → entity grid reflects latest approved status", async ({ testData }) => {
    await test.step("[CLM-TC-275] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-275] Executing Excel test steps: 1.Open Entity Grid");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.enableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-275] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-275] Validating: Entity grid should display updated entity status");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-276
  // Excel Scenario: Verify only approved requests trigger entity status transition
  // Excel Expected Result: Entity status should not change until approval workflow is completed
  test("Case ID:CLM-TC-276 - Enable Disable Entity → only approved requests trigger entity status transition", async ({ testData }) => {
    await test.step("[CLM-TC-276] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-276] Executing Excel test steps: 1.Submit request 2.Do not approve request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.enableEntity("Test Entity Alpha");
    });
    await test.step("[CLM-TC-276] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-276] Validating: Entity status should not change until approval workflow is completed");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Metadata", () => {
  // Excel Test Case ID: CLM-TC-277
  // Excel Scenario: Verify Maker information is captured during entity onboarding
  // Excel Expected Result: Maker information should be available and accurate
  test("Case ID:CLM-TC-277 - Entity Metadata → Maker information is captured during entity onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-277] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-277] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-277] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-277] Validating: Maker information should be available and accurate");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-278
  // Excel Scenario: Verify Checker information is captured after approval
  // Excel Expected Result: Checker information should be available and accurate
  test("Case ID:CLM-TC-278 - Entity Metadata → Checker information is captured after approval", async ({ testData }) => {
    await test.step("[CLM-TC-278] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-278] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-278] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-278] Validating: Checker information should be available and accurate");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-279
  // Excel Scenario: Verify Date Created is captured for entity
  // Excel Expected Result: Date Created should be populated correctly
  test("Case ID:CLM-TC-279 - Entity Metadata → Date Created is captured for entity", async ({ testData }) => {
    await test.step("[CLM-TC-279] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-279] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-279] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-279] Validating: Date Created should be populated correctly");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-280
  // Excel Scenario: Verify Date Last Modified is updated after approved changes
  // Excel Expected Result: Date Last Modified should reflect latest approved update
  test("Case ID:CLM-TC-280 - Entity Metadata → Date Last Modified is updated after approved changes", async ({ testData }) => {
    await test.step("[CLM-TC-280] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-280] Executing Excel test steps: 1.Modify entity 2.Approve update 3.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-280] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-280] Validating: Date Last Modified should reflect latest approved update");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-281
  // Excel Scenario: Verify metadata remains consistent across grid and entity details
  // Excel Expected Result: Metadata values should remain consistent across screens
  test("Case ID:CLM-TC-281 - Entity Metadata → metadata remains consistent across grid and entity details", async ({ testData }) => {
    await test.step("[CLM-TC-281] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-281] Executing Excel test steps: 1.Verify metadata in grid 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-281] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-281] Validating: Metadata values should remain consistent across screens");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-282
  // Excel Scenario: Verify metadata remains intact after entity status changes
  // Excel Expected Result: Metadata information should remain unchanged except applicable modification details
  test("Case ID:CLM-TC-282 - Entity Metadata → metadata remains intact after entity status changes", async ({ testData }) => {
    await test.step("[CLM-TC-282] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-282] Executing Excel test steps: 1.Change entity status through approval workflow");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-282] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-282] Validating: Metadata information should remain unchanged except applicable modification details");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-283
  // Excel Scenario: Verify metadata remains available after entity modification
  // Excel Expected Result: Maker, Checker and date information should remain available
  test("Case ID:CLM-TC-283 - Entity Metadata → metadata remains available after entity modification", async ({ testData }) => {
    await test.step("[CLM-TC-283] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-283] Executing Excel test steps: 1.Modify entity 2.Open details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-283] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-283] Validating: Maker, Checker and date information should remain available");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-284
  // Excel Scenario: Verify metadata provides complete audit traceability
  // Excel Expected Result: Entity metadata should provide complete traceability information
  test("Case ID:CLM-TC-284 - Entity Metadata → metadata provides complete audit traceability", async ({ testData }) => {
    await test.step("[CLM-TC-284] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-284] Executing Excel test steps: 1.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-284] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-284] Validating: Entity metadata should provide complete traceability information");
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity History", () => {
  // Excel Test Case ID: CLM-TC-285
  // Excel Scenario: Verify Entity History section is available for onboarded entities
  // Excel Expected Result: Entity History section should be accessible
  test("Case ID:CLM-TC-285 - Entity History → Entity History section is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-285] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-285] Executing Excel test steps: 1.Open entity details 2.Navigate to History section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-285] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-285] Validating: Entity History section should be accessible");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-286
  // Excel Scenario: Verify entity onboarding activity is recorded in history
  // Excel Expected Result: Entity onboarding event should be recorded in history
  test("Case ID:CLM-TC-286 - Entity History → entity onboarding activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-286] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-286] Executing Excel test steps: 1.Open Entity History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-286] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-286] Validating: Entity onboarding event should be recorded in history");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-287
  // Excel Scenario: Verify entity modification activity is recorded in history
  // Excel Expected Result: Entity modification event should be recorded in history
  test("Case ID:CLM-TC-287 - Entity History → entity modification activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-287] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-287] Executing Excel test steps: 1.Modify entity 2.Open History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-287] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-287] Validating: Entity modification event should be recorded in history");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-288
  // Excel Scenario: Verify entity enable activity is recorded in history
  // Excel Expected Result: Entity enable event should be recorded in history
  test("Case ID:CLM-TC-288 - Entity History → entity enable activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-288] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-288] Executing Excel test steps: 1.Enable entity 2.Open History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-288] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-288] Validating: Entity enable event should be recorded in history");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-289
  // Excel Scenario: Verify entity disable activity is recorded in history
  // Excel Expected Result: Entity disable event should be recorded in history
  test("Case ID:CLM-TC-289 - Entity History → entity disable activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-289] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-289] Executing Excel test steps: 1.Disable entity 2.Open History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-289] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-289] Validating: Entity disable event should be recorded in history");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-290
  // Excel Scenario: Verify history entries display activity timestamps
  // Excel Expected Result: History entries should display activity date and time information
  test("Case ID:CLM-TC-290 - Entity History → history entries display activity timestamps", async ({ testData }) => {
    await test.step("[CLM-TC-290] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-290] Executing Excel test steps: 1.Open Entity History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-290] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-290] Validating: History entries should display activity date and time information");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-291
  // Excel Scenario: Verify history entries display user accountability information
  // Excel Expected Result: History entries should display responsible user information
  test("Case ID:CLM-TC-291 - Entity History → history entries display user accountability information", async ({ testData }) => {
    await test.step("[CLM-TC-291] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-291] Executing Excel test steps: 1.Open Entity History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-291] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-291] Validating: History entries should display responsible user information");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-292
  // Excel Scenario: Verify Entity History maintains complete lifecycle traceability
  // Excel Expected Result: Entity History should display all recorded lifecycle activities in chronological order
  test("Case ID:CLM-TC-292 - Entity History → Entity History maintains complete lifecycle traceability", async ({ testData }) => {
    await test.step("[CLM-TC-292] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-292] Executing Excel test steps: 1.Open Entity History");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-292] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-292] Validating: Entity History should display all recorded lifecycle activities in chronological order");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Template Download", () => {
  // Excel Test Case ID: CLM-TC-293
  // Excel Scenario: Verify template download option is available on Bulk Upload screen
  // Excel Expected Result: Template Download option should be visible and accessible
  test("Case ID:CLM-TC-293 - Template Download → template download option is available on Bulk Upload screen", async ({ testData }) => {
    await test.step("[CLM-TC-293] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-293] Executing Excel test steps: 1.Navigate to Bulk Upload screen");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-293] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-293] Validating: Template Download option should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-294
  // Excel Scenario: Verify template file downloads successfully
  // Excel Expected Result: Template file should be downloaded successfully without errors
  test("Case ID:CLM-TC-294 - Template Download → template file downloads successfully", async ({ testData }) => {
    await test.step("[CLM-TC-294] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-294] Executing Excel test steps: 1.Click Download Template");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-294] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-294] Validating: Template file should be downloaded successfully without errors");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-295
  // Excel Scenario: Verify downloaded template file is not corrupted
  // Excel Expected Result: Template file should open successfully without corruption
  test("Case ID:CLM-TC-295 - Template Download → downloaded template file is not corrupted", async ({ testData }) => {
    await test.step("[CLM-TC-295] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-295] Executing Excel test steps: 1.Open downloaded template");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-295] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-295] Validating: Template file should open successfully without corruption");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-296
  // Excel Scenario: Verify template contains expected column structure
  // Excel Expected Result: Template should contain configured entity onboarding columns
  test("Case ID:CLM-TC-296 - Template Download → template contains expected column structure", async ({ testData }) => {
    await test.step("[CLM-TC-296] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-296] Executing Excel test steps: 1.Open template 2.Review available columns");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-296] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-296] Validating: Template should contain configured entity onboarding columns");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-297
  // Excel Scenario: Verify template column headers are clearly identifiable
  // Excel Expected Result: All column headers should be clearly displayed
  test("Case ID:CLM-TC-297 - Template Download → template column headers are clearly identifiable", async ({ testData }) => {
    await test.step("[CLM-TC-297] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-297] Executing Excel test steps: 1.Review template headers");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-297] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-297] Validating: All column headers should be clearly displayed");
      await clmPage.expectPageTitleVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-298
  // Excel Scenario: Verify template remains downloadable across multiple attempts
  // Excel Expected Result: Template should download successfully on each attempt
  test("Case ID:CLM-TC-298 - Template Download → template remains downloadable across multiple attempts", async ({ testData }) => {
    await test.step("[CLM-TC-298] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-298] Executing Excel test steps: 1.Download template multiple times");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-298] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-298] Validating: Template should download successfully on each attempt");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-299
  // Excel Scenario: Verify downloaded template can be used for upload preparation
  // Excel Expected Result: Template should be suitable for preparing upload records
  test("Case ID:CLM-TC-299 - Template Download → downloaded template can be used for upload preparation", async ({ testData }) => {
    await test.step("[CLM-TC-299] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-299] Executing Excel test steps: 1.Open template 2.Enter sample data");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample Entity Data");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-299] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-299] Validating: Template should be suitable for preparing upload records");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-300
  // Excel Scenario: Verify template download does not alter existing uploaded records
  // Excel Expected Result: Downloading template should not impact existing records
  test("Case ID:CLM-TC-300 - Template Download → template download does not alter existing uploaded records", async ({ testData }) => {
    await test.step("[CLM-TC-300] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-300] Executing Excel test steps: 1.Download template 2.Verify existing entity data");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-300] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-300] Validating: Downloading template should not impact existing records");
      await clmPage.expectLoadingIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Upload Validation", () => {
  // Excel Test Case ID: CLM-TC-301
  // Excel Scenario: Verify upload control is available on Bulk Upload screen
  // Excel Expected Result: Upload control should be visible and accessible
  test("Case ID:CLM-TC-301 - Upload Validation → upload control is available on Bulk Upload screen", async ({ testData }) => {
    await test.step("[CLM-TC-301] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-301] Executing Excel test steps: 1.Open Bulk Upload page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-301] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-301] Validating: Upload control should be visible and accessible");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-302
  // Excel Scenario: Verify valid upload file can be selected
  // Excel Expected Result: File should be selected successfully
  test("Case ID:CLM-TC-302 - Upload Validation → valid upload file can be selected", async ({ testData }) => {
    await test.step("[CLM-TC-302] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-302] Executing Excel test steps: 1.Click Upload 2.Select valid file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Valid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-302] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-302] Validating: File should be selected successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-303
  // Excel Scenario: Verify valid upload file can be submitted
  // Excel Expected Result: Upload request should be accepted successfully
  test("Case ID:CLM-TC-303 - Upload Validation → valid upload file can be submitted", async ({ testData }) => {
    await test.step("[CLM-TC-303] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-303] Executing Excel test steps: 1.Select valid file 2.Submit upload");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Valid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-303] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-303] Validating: Upload request should be accepted successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-304
  // Excel Scenario: Verify upload request generates processing workflow
  // Excel Expected Result: Upload processing workflow should be initiated
  test("Case ID:CLM-TC-304 - Upload Validation → upload request generates processing workflow", async ({ testData }) => {
    await test.step("[CLM-TC-304] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-304] Executing Excel test steps: 1.Submit upload");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Valid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-304] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-304] Validating: Upload processing workflow should be initiated");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-305
  // Excel Scenario: Verify uploaded file enters approval workflow when applicable
  // Excel Expected Result: Upload request should enter approval workflow
  test("Case ID:CLM-TC-305 - Upload Validation → uploaded file enters approval workflow when applicable", async ({ testData }) => {
    await test.step("[CLM-TC-305] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-305] Executing Excel test steps: 1.Submit upload request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Valid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-305] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-305] Validating: Upload request should enter approval workflow");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-306
  // Excel Scenario: Verify upload request status is displayed
  // Excel Expected Result: Current upload status should be displayed
  test("Case ID:CLM-TC-306 - Upload Validation → upload request status is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-306] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-306] Executing Excel test steps: 1.Open upload details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Valid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-306] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-306] Validating: Current upload status should be displayed");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-307
  // Excel Scenario: Verify upload with empty file is handled appropriately
  // Excel Expected Result: System should reject upload or display validation message
  test("Case ID:CLM-TC-307 - Upload Validation → upload with empty file is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-307] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-307] Executing Excel test steps: 1.Upload empty file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Empty File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-307] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-307] Validating: System should reject upload or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-308
  // Excel Scenario: Verify upload with incomplete onboarding data is validated
  // Excel Expected Result: System should display validation feedback for incomplete records
  test("Case ID:CLM-TC-308 - Upload Validation → upload with incomplete onboarding data is validated", async ({ testData }) => {
    await test.step("[CLM-TC-308] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-308] Executing Excel test steps: 1.Upload file containing incomplete records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Incomplete Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-308] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-308] Validating: System should display validation feedback for incomplete records");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-309
  // Excel Scenario: Verify upload with multiple entity records is accepted
  // Excel Expected Result: File should be accepted for processing
  test("Case ID:CLM-TC-309 - Upload Validation → upload with multiple entity records is accepted", async ({ testData }) => {
    await test.step("[CLM-TC-309] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-309] Executing Excel test steps: 1.Upload file containing multiple records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Multi-Record File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-309] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-309] Validating: File should be accepted for processing");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-310
  // Excel Scenario: Verify uploaded entity records are associated with selected custom list
  // Excel Expected Result: Uploaded entities should be associated with the correct custom list
  test("Case ID:CLM-TC-310 - Upload Validation → uploaded entity records are associated with selected custom list", async ({ testData }) => {
    await test.step("[CLM-TC-310] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-310] Executing Excel test steps: 1.Upload entity file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-310] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-310] Validating: Uploaded entities should be associated with the correct custom list");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-311
  // Excel Scenario: Verify upload processing preserves record count integrity
  // Excel Expected Result: Processed record count should match uploaded record count
  test("Case ID:CLM-TC-311 - Upload Validation → upload processing preserves record count integrity", async ({ testData }) => {
    await test.step("[CLM-TC-311] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-311] Executing Excel test steps: 1.Note upload record count 2.Verify processed records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Multi-Record File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-311] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-311] Validating: Processed record count should match uploaded record count");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-312
  // Excel Scenario: Verify upload validation messages are displayed when errors occur
  // Excel Expected Result: Appropriate validation message should be displayed
  test("Case ID:CLM-TC-312 - Upload Validation → upload validation messages are displayed when errors occur", async ({ testData }) => {
    await test.step("[CLM-TC-312] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-312] Executing Excel test steps: 1.Upload invalid file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Invalid Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-312] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-312] Validating: Appropriate validation message should be displayed");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-313
  // Excel Scenario: Verify upload request retains uploaded file details
  // Excel Expected Result: Uploaded file details should be available
  test("Case ID:CLM-TC-313 - Upload Validation → upload request retains uploaded file details", async ({ testData }) => {
    await test.step("[CLM-TC-313] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-313] Executing Excel test steps: 1.Open upload request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Upload Request");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-313] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-313] Validating: Uploaded file details should be available");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-314
  // Excel Scenario: Verify upload processing does not impact existing approved entities
  // Excel Expected Result: Existing approved entities should remain unchanged
  test("Case ID:CLM-TC-314 - Upload Validation → upload processing does not impact existing approved entities", async ({ testData }) => {
    await test.step("[CLM-TC-314] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-314] Executing Excel test steps: 1.Upload file 2.Verify existing entities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Upload File");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-314] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-314] Validating: Existing approved entities should remain unchanged");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-315
  // Excel Scenario: Verify successfully processed upload contributes to entity inventory
  // Excel Expected Result: Uploaded entities should become available in entity inventory
  test("Case ID:CLM-TC-315 - Upload Validation → successfully processed upload contributes to entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-315] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-315] Executing Excel test steps: 1.Complete upload workflow 2.Verify entity inventory");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Approved Upload");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-315] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-315] Validating: Uploaded entities should become available in entity inventory");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("File Format Validation", () => {
  // Excel Test Case ID: CLM-TC-316
  // Excel Scenario: Verify supported template file format can be uploaded
  // Excel Expected Result: Supported file should be accepted successfully
  test("Case ID:CLM-TC-316 - File Format Validation → supported template file format can be uploaded", async ({ testData }) => {
    await test.step("[CLM-TC-316] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-316] Executing Excel test steps: 1.Select supported file format");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-316] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-316] Validating: Supported file should be accepted successfully");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-317
  // Excel Scenario: Verify unsupported file format is rejected
  // Excel Expected Result: System should reject file and display validation message
  test("Case ID:CLM-TC-317 - File Format Validation → unsupported file format is rejected", async ({ testData }) => {
    await test.step("[CLM-TC-317] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-317] Executing Excel test steps: 1.Select unsupported file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-317] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-317] Validating: System should reject file and display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-318
  // Excel Scenario: Verify corrupted file upload is handled appropriately
  // Excel Expected Result: System should reject corrupted file and display appropriate feedback
  test("Case ID:CLM-TC-318 - File Format Validation → corrupted file upload is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-318] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-318] Executing Excel test steps: 1.Upload corrupted file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-318] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-318] Validating: System should reject corrupted file and display appropriate feedback");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-319
  // Excel Scenario: Verify blank file upload is handled appropriately
  // Excel Expected Result: System should reject blank file or display validation message
  test("Case ID:CLM-TC-319 - File Format Validation → blank file upload is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-319] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-319] Executing Excel test steps: 1.Upload blank file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-319] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-319] Validating: System should reject blank file or display validation message");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-320
  // Excel Scenario: Verify file containing only headers is validated
  // Excel Expected Result: System should process according to configured validation rules
  test("Case ID:CLM-TC-320 - File Format Validation → file containing only headers is validated", async ({ testData }) => {
    await test.step("[CLM-TC-320] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-320] Executing Excel test steps: 1.Upload header-only template");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-320] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-320] Validating: System should process according to configured validation rules");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-321
  // Excel Scenario: Verify file containing special characters is handled appropriately
  // Excel Expected Result: System should process file according to configured validation rules
  test("Case ID:CLM-TC-321 - File Format Validation → file containing special characters is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-321] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-321] Executing Excel test steps: 1.Upload file containing special characters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-321] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-321] Validating: System should process file according to configured validation rules");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-322
  // Excel Scenario: Verify file with altered template structure is validated
  // Excel Expected Result: System should reject file or display template validation feedback
  test("Case ID:CLM-TC-322 - File Format Validation → file with altered template structure is validated", async ({ testData }) => {
    await test.step("[CLM-TC-322] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-322] Executing Excel test steps: 1.Modify template structure 2.Upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-322] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-322] Validating: System should reject file or display template validation feedback");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-323
  // Excel Scenario: Verify upload validation occurs before onboarding request generation
  // Excel Expected Result: Onboarding request should not be generated for invalid file
  test("Case ID:CLM-TC-323 - File Format Validation → upload validation occurs before onboarding request generation", async ({ testData }) => {
    await test.step("[CLM-TC-323] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-323] Executing Excel test steps: 1.Upload invalid format file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-323] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-323] Validating: Onboarding request should not be generated for invalid file");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-324
  // Excel Scenario: Verify valid file format proceeds to upload workflow
  // Excel Expected Result: Valid file should proceed to upload workflow successfully
  test("Case ID:CLM-TC-324 - File Format Validation → valid file format proceeds to upload workflow", async ({ testData }) => {
    await test.step("[CLM-TC-324] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-324] Executing Excel test steps: 1.Upload valid file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-324] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-324] Validating: Valid file should proceed to upload workflow successfully");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-325
  // Excel Scenario: Verify file format validation results are communicated to user
  // Excel Expected Result: System should display success or validation feedback based on upload outcome
  test("Case ID:CLM-TC-325 - File Format Validation → file format validation results are communicated to user", async ({ testData }) => {
    await test.step("[CLM-TC-325] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-325] Executing Excel test steps: 1.Upload file 2.Review system response");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-invalid.txt");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-325] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-325] Validating: System should display success or validation feedback based on upload outcome");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Mandatory Columns", () => {
  // Excel Test Case ID: CLM-TC-326
  // Excel Scenario: Verify uploaded file containing all mandatory columns is accepted for processing
  // Excel Expected Result: System should successfully accept the file and allow further processing without mandatory column validation errors
  test("Case ID:CLM-TC-326 - Mandatory Columns → uploaded file containing all mandatory columns is accepted for processing", async ({ testData }) => {
    await test.step("[CLM-TC-326] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-326] Executing Excel test steps: 1.Populate upload template with valid entity data in all mandatory columns 2.Upload file through Bulk Upload screen 3.Submit upload request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-326] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-326] Validating: System should successfully accept the file and allow further processing without mandatory column validation errors");
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-327
  // Excel Scenario: Verify upload is prevented when a mandatory column is completely removed from template
  // Excel Expected Result: System should reject the file and clearly identify the missing mandatory column
  test("Case ID:CLM-TC-327 - Mandatory Columns → upload is prevented when a mandatory column is completely removed from template", async ({ testData }) => {
    await test.step("[CLM-TC-327] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-327] Executing Excel test steps: 1.Remove one mandatory column from template 2.Save file 3.Upload modified file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-327] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-327] Validating: System should reject the file and clearly identify the missing mandatory column");
      await clmPage.expectListGridVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-328
  // Excel Scenario: Verify upload validation identifies multiple missing mandatory columns
  // Excel Expected Result: System should reject the upload and display all missing mandatory columns requiring correction
  test("Case ID:CLM-TC-328 - Mandatory Columns → upload validation identifies multiple missing mandatory columns", async ({ testData }) => {
    await test.step("[CLM-TC-328] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-328] Executing Excel test steps: 1.Remove multiple mandatory columns 2.Upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-328] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-328] Validating: System should reject the upload and display all missing mandatory columns requiring correction");
      await clmPage.expectListGridVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-329
  // Excel Scenario: Verify upload validation is triggered before onboarding workflow initiation
  // Excel Expected Result: System should stop processing before onboarding request generation
  test("Case ID:CLM-TC-329 - Mandatory Columns → upload validation is triggered before onboarding workflow initiation", async ({ testData }) => {
    await test.step("[CLM-TC-329] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-329] Executing Excel test steps: 1.Upload file with missing mandatory columns 2.Attempt submission");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-329] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-329] Validating: System should stop processing before onboarding request generation");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-330
  // Excel Scenario: Verify file containing mandatory columns but blank mandatory values is validated
  // Excel Expected Result: System should identify records that do not satisfy mandatory data requirements
  test("Case ID:CLM-TC-330 - Mandatory Columns → file containing mandatory columns but blank mandatory values is validated", async ({ testData }) => {
    await test.step("[CLM-TC-330] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-330] Executing Excel test steps: 1.Populate template with blank mandatory field values 2.Upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-330] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-330] Validating: System should identify records that do not satisfy mandatory data requirements");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-331
  // Excel Scenario: Verify mandatory column validation is applied across all uploaded records
  // Excel Expected Result: System should identify all records failing mandatory data validation
  test("Case ID:CLM-TC-331 - Mandatory Columns → mandatory column validation is applied across all uploaded records", async ({ testData }) => {
    await test.step("[CLM-TC-331] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-331] Executing Excel test steps: 1.Upload file containing valid and invalid records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-331] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-331] Validating: System should identify all records failing mandatory data validation");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-332
  // Excel Scenario: Verify column order changes do not impact mandatory column validation when supported
  // Excel Expected Result: System should process the file according to configured template validation rules
  test("Case ID:CLM-TC-332 - Mandatory Columns → column order changes do not impact mandatory column validation when supported", async ({ testData }) => {
    await test.step("[CLM-TC-332] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-332] Executing Excel test steps: 1.Rearrange template columns 2.Upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-332] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-332] Validating: System should process the file according to configured template validation rules");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-333
  // Excel Scenario: Verify mandatory column validation feedback is understandable and actionable
  // Excel Expected Result: Validation feedback should clearly identify records and columns requiring correction
  test("Case ID:CLM-TC-333 - Mandatory Columns → mandatory column validation feedback is understandable and actionable", async ({ testData }) => {
    await test.step("[CLM-TC-333] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-333] Executing Excel test steps: 1.Upload file missing mandatory information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-333] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-333] Validating: Validation feedback should clearly identify records and columns requiring correction");
      await clmPage.expectListGridVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-334
  // Excel Scenario: Verify corrected file can be re-uploaded successfully after mandatory column issues are resolved
  // Excel Expected Result: Corrected file should pass mandatory column validation
  test("Case ID:CLM-TC-334 - Mandatory Columns → corrected file can be re-uploaded successfully after mandatory column issues are resolved", async ({ testData }) => {
    await test.step("[CLM-TC-334] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-334] Executing Excel test steps: 1.Correct identified issues 2.Re-upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-334] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-334] Validating: Corrected file should pass mandatory column validation");
      await clmPage.expectListGridVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-335
  // Excel Scenario: Verify mandatory column validation maintains onboarding data integrity
  // Excel Expected Result: Only records satisfying mandatory onboarding requirements should proceed for processing
  test("Case ID:CLM-TC-335 - Mandatory Columns → mandatory column validation maintains onboarding data integrity", async ({ testData }) => {
    await test.step("[CLM-TC-335] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-335] Executing Excel test steps: 1.Upload files with various mandatory data violations");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-missing-columns.csv");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-335] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-335] Validating: Only records satisfying mandatory onboarding requirements should proceed for processing");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Duplicate Detection", () => {
  // Excel Test Case ID: CLM-TC-336
  // Excel Scenario: Verify upload containing unique entity records proceeds successfully
  // Excel Expected Result: Upload should proceed successfully without duplicate warnings
  test("Case ID:CLM-TC-336 - Duplicate Detection → upload containing unique entity records proceeds successfully", async ({ testData }) => {
    await test.step("[CLM-TC-336] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-336] Executing Excel test steps: 1.Upload file containing unique entity records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-336] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-336] Validating: Upload should proceed successfully without duplicate warnings");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-337
  // Excel Scenario: Verify duplicate records within the same upload file are identified during validation
  // Excel Expected Result: System should identify duplicate records according to configured validation rules
  test("Case ID:CLM-TC-337 - Duplicate Detection → duplicate records within the same upload file are identified during validation", async ({ testData }) => {
    await test.step("[CLM-TC-337] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-337] Executing Excel test steps: 1.Upload file containing duplicate entity rows");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-337] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-337] Validating: System should identify duplicate records according to configured validation rules");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-338
  // Excel Scenario: Verify duplicate validation occurs before onboarding workflow initiation
  // Excel Expected Result: Duplicate validation should occur before onboarding request generation
  test("Case ID:CLM-TC-338 - Duplicate Detection → duplicate validation occurs before onboarding workflow initiation", async ({ testData }) => {
    await test.step("[CLM-TC-338] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-338] Executing Excel test steps: 1.Upload file containing duplicate records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-338] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-338] Validating: Duplicate validation should occur before onboarding request generation");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-339
  // Excel Scenario: Verify duplicate validation feedback identifies affected records
  // Excel Expected Result: System should clearly identify duplicate records requiring review
  test("Case ID:CLM-TC-339 - Duplicate Detection → duplicate validation feedback identifies affected records", async ({ testData }) => {
    await test.step("[CLM-TC-339] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-339] Executing Excel test steps: 1.Upload file containing duplicate records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-339] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-339] Validating: System should clearly identify duplicate records requiring review");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-340
  // Excel Scenario: Verify upload containing a mixture of unique and duplicate records is validated correctly
  // Excel Expected Result: System should identify duplicate records while validating remaining records
  test("Case ID:CLM-TC-340 - Duplicate Detection → upload containing a mixture of unique and duplicate records is validated correctly", async ({ testData }) => {
    await test.step("[CLM-TC-340] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-340] Executing Excel test steps: 1.Upload file containing both unique and duplicate records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-340] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-340] Validating: System should identify duplicate records while validating remaining records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-341
  // Excel Scenario: Verify duplicate validation remains consistent across repeated uploads
  // Excel Expected Result: Duplicate detection results should remain consistent across executions
  test("Case ID:CLM-TC-341 - Duplicate Detection → duplicate validation remains consistent across repeated uploads", async ({ testData }) => {
    await test.step("[CLM-TC-341] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-341] Executing Excel test steps: 1.Perform repeated upload attempts");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-341] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-341] Validating: Duplicate detection results should remain consistent across executions");
      await clmPage.expectDuplicateDetection();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-342
  // Excel Scenario: Verify corrected upload file can be resubmitted after duplicate issues are resolved
  // Excel Expected Result: Corrected file should pass duplicate validation
  test("Case ID:CLM-TC-342 - Duplicate Detection → corrected upload file can be resubmitted after duplicate issues are resolved", async ({ testData }) => {
    await test.step("[CLM-TC-342] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-342] Executing Excel test steps: 1.Remove duplicate records 2.Re-upload file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-342] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-342] Validating: Corrected file should pass duplicate validation");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-343
  // Excel Scenario: Verify duplicate validation does not impact unrelated valid records
  // Excel Expected Result: Validation results should accurately identify affected records only
  test("Case ID:CLM-TC-343 - Duplicate Detection → duplicate validation does not impact unrelated valid records", async ({ testData }) => {
    await test.step("[CLM-TC-343] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-343] Executing Excel test steps: 1.Upload file with duplicate and unique records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-343] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-343] Validating: Validation results should accurately identify affected records only");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-344
  // Excel Scenario: Verify duplicate validation preserves onboarding traceability
  // Excel Expected Result: Duplicate validation results should remain available for review
  test("Case ID:CLM-TC-344 - Duplicate Detection → duplicate validation preserves onboarding traceability", async ({ testData }) => {
    await test.step("[CLM-TC-344] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-344] Executing Excel test steps: 1.Upload duplicate dataset 2.Review validation outcome");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-344] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-344] Validating: Duplicate validation results should remain available for review");
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-345
  // Excel Scenario: Verify duplicate detection supports onboarding data quality objectives
  // Excel Expected Result: System should prevent duplicate onboarding according to configured rules
  test("Case ID:CLM-TC-345 - Duplicate Detection → duplicate detection supports onboarding data quality objectives", async ({ testData }) => {
    await test.step("[CLM-TC-345] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-345] Executing Excel test steps: 1.Upload duplicate records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-duplicates.csv");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-345] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-345] Validating: System should prevent duplicate onboarding according to configured rules");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Validation Report", () => {
  // Excel Test Case ID: CLM-TC-346
  // Excel Scenario: Verify validation results are generated after upload processing
  // Excel Expected Result: Validation results should be generated successfully
  test("Case ID:CLM-TC-346 - Validation Report → validation results are generated after upload processing", async ({ testData }) => {
    await test.step("[CLM-TC-346] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-346] Executing Excel test steps: 1.Upload file 2.Wait for validation completion");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-346] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-346] Validating: Validation results should be generated successfully");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-347
  // Excel Scenario: Verify validation report identifies records that passed validation
  // Excel Expected Result: Validation report should identify successfully validated records
  test("Case ID:CLM-TC-347 - Validation Report → validation report identifies records that passed validation", async ({ testData }) => {
    await test.step("[CLM-TC-347] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-347] Executing Excel test steps: 1.Process upload 2.Review validation results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-347] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-347] Validating: Validation report should identify successfully validated records");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-348
  // Excel Scenario: Verify validation report identifies records that failed validation
  // Excel Expected Result: Validation report should identify failed records and associated issues
  test("Case ID:CLM-TC-348 - Validation Report → validation report identifies records that failed validation", async ({ testData }) => {
    await test.step("[CLM-TC-348] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-348] Executing Excel test steps: 1.Process upload 2.Review validation results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-348] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-348] Validating: Validation report should identify failed records and associated issues");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-349
  // Excel Scenario: Verify validation report provides record-level traceability
  // Excel Expected Result: Validation report should identify affected records clearly
  test("Case ID:CLM-TC-349 - Validation Report → validation report provides record-level traceability", async ({ testData }) => {
    await test.step("[CLM-TC-349] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-349] Executing Excel test steps: 1.Review validation report");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-349] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-349] Validating: Validation report should identify affected records clearly");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-350
  // Excel Scenario: Verify validation report remains accessible after upload processing completes
  // Excel Expected Result: Validation report should remain available for review
  test("Case ID:CLM-TC-350 - Validation Report → validation report remains accessible after upload processing completes", async ({ testData }) => {
    await test.step("[CLM-TC-350] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-350] Executing Excel test steps: 1.Open completed upload 2.Review validation results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-350] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-350] Validating: Validation report should remain available for review");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-351
  // Excel Scenario: Verify validation report accurately reflects upload outcome
  // Excel Expected Result: Validation report should accurately reflect upload validation outcome
  test("Case ID:CLM-TC-351 - Validation Report → validation report accurately reflects upload outcome", async ({ testData }) => {
    await test.step("[CLM-TC-351] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-351] Executing Excel test steps: 1.Compare upload data with validation report");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-351] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-351] Validating: Validation report should accurately reflect upload validation outcome");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-352
  // Excel Scenario: Verify validation report supports upload correction activities
  // Excel Expected Result: Validation report should provide sufficient detail to correct upload issues
  test("Case ID:CLM-TC-352 - Validation Report → validation report supports upload correction activities", async ({ testData }) => {
    await test.step("[CLM-TC-352] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-352] Executing Excel test steps: 1.Review validation report");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-352] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-352] Validating: Validation report should provide sufficient detail to correct upload issues");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-353
  // Excel Scenario: Verify validation reporting supports AML onboarding governance requirements
  // Excel Expected Result: Validation report should provide traceable evidence of upload validation activity
  test("Case ID:CLM-TC-353 - Validation Report → validation reporting supports AML onboarding governance requirements", async ({ testData }) => {
    await test.step("[CLM-TC-353] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-353] Executing Excel test steps: 1.Review validation report");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-mixed.csv");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-353] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-353] Validating: Validation report should provide traceable evidence of upload validation activity");
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("All Requests", () => {
  // Excel Test Case ID: CLM-TC-364
  // Excel Scenario: Verify All Requests page is accessible from Custom List Manager navigation
  // Excel Expected Result: All Requests page should open successfully displaying available requests
  test("Case ID:CLM-TC-364 - All Requests → All Requests page is accessible from Custom List Manager navigation", async ({ testData }) => {
    await test.step("[CLM-TC-364] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-364] Executing Excel test steps: 1.Navigate to Custom List Manager 2.Open All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-364] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-364] Validating: All Requests page should open successfully displaying available requests");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-365
  // Excel Scenario: Verify all submitted governance requests are displayed in All Requests inventory
  // Excel Expected Result: All eligible requests should be displayed in the request inventory
  test("Case ID:CLM-TC-365 - All Requests → all submitted governance requests are displayed in All Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-365] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-365] Executing Excel test steps: 1.Open All Requests page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-365] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-365] Validating: All eligible requests should be displayed in the request inventory");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-366
  // Excel Scenario: Verify request inventory displays key request information required for review
  // Excel Expected Result: Request inventory should display configured request attributes required for governance review
  test("Case ID:CLM-TC-366 - All Requests → request inventory displays key request information required for review", async ({ testData }) => {
    await test.step("[CLM-TC-366] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-366] Executing Excel test steps: 1.Open All Requests page 2.Review displayed request information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-366] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-366] Validating: Request inventory should display configured request attributes required for governance review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-367
  // Excel Scenario: Verify requests generated from different workflows are visible in All Requests
  // Excel Expected Result: All generated requests should be visible in a consolidated inventory
  test("Case ID:CLM-TC-367 - All Requests → requests generated from different workflows are visible in All Requests", async ({ testData }) => {
    await test.step("[CLM-TC-367] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-367] Executing Excel test steps: 1.Generate requests from multiple workflows 2.Open All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-367] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-367] Validating: All generated requests should be visible in a consolidated inventory");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-368
  // Excel Scenario: Verify request status is displayed for each governance request
  // Excel Expected Result: Each request should display its current workflow status
  test("Case ID:CLM-TC-368 - All Requests → request status is displayed for each governance request", async ({ testData }) => {
    await test.step("[CLM-TC-368] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-368] Executing Excel test steps: 1.Open All Requests page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-368] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-368] Validating: Each request should display its current workflow status");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-369
  // Excel Scenario: Verify latest submitted request appears in All Requests inventory
  // Excel Expected Result: Newly generated request should be visible in the inventory
  test("Case ID:CLM-TC-369 - All Requests → latest submitted request appears in All Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-369] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-369] Executing Excel test steps: 1.Submit request 2.Open All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-369] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-369] Validating: Newly generated request should be visible in the inventory");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-370
  // Excel Scenario: Verify request inventory remains accurate after page refresh
  // Excel Expected Result: Request information should remain accurate after refresh
  test("Case ID:CLM-TC-370 - All Requests → request inventory remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-370] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-370] Executing Excel test steps: 1.Open All Requests 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-370] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-370] Validating: Request information should remain accurate after refresh");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-371
  // Excel Scenario: Verify approved requests remain traceable within request inventory
  // Excel Expected Result: Approved requests should remain available according to configured lifecycle rules
  test("Case ID:CLM-TC-371 - All Requests → approved requests remain traceable within request inventory", async ({ testData }) => {
    await test.step("[CLM-TC-371] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-371] Executing Excel test steps: 1.Open All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-371] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-371] Validating: Approved requests should remain available according to configured lifecycle rules");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-372
  // Excel Scenario: Verify rejected requests remain traceable within request inventory
  // Excel Expected Result: Rejected requests should remain available according to configured lifecycle rules
  test("Case ID:CLM-TC-372 - All Requests → rejected requests remain traceable within request inventory", async ({ testData }) => {
    await test.step("[CLM-TC-372] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-372] Executing Excel test steps: 1.Open All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-372] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-372] Validating: Rejected requests should remain available according to configured lifecycle rules");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-373
  // Excel Scenario: Verify request inventory supports governance auditability
  // Excel Expected Result: Request inventory should provide sufficient traceability for governance review
  test("Case ID:CLM-TC-373 - All Requests → request inventory supports governance auditability", async ({ testData }) => {
    await test.step("[CLM-TC-373] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-373] Executing Excel test steps: 1.Review All Requests inventory");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-373] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-373] Validating: Request inventory should provide sufficient traceability for governance review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("My Requests", () => {
  // Excel Test Case ID: CLM-TC-374
  // Excel Scenario: Verify My Requests page is accessible from governance module
  // Excel Expected Result: My Requests page should open successfully
  test("Case ID:CLM-TC-374 - My Requests → My Requests page is accessible from governance module", async ({ testData }) => {
    await test.step("[CLM-TC-374] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-374] Executing Excel test steps: 1.Navigate to My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-374] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-374] Validating: My Requests page should open successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-375
  // Excel Scenario: Verify only requests created by logged-in user are displayed
  // Excel Expected Result: Only requests created by the logged-in user should be displayed
  test("Case ID:CLM-TC-375 - My Requests → only requests created by logged-in user are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-375] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-375] Executing Excel test steps: 1.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-375] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-375] Validating: Only requests created by the logged-in user should be displayed");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-376
  // Excel Scenario: Verify requests submitted from different workflows are displayed in My Requests
  // Excel Expected Result: All requests submitted by the user should be visible
  test("Case ID:CLM-TC-376 - My Requests → requests submitted from different workflows are displayed in My Requests", async ({ testData }) => {
    await test.step("[CLM-TC-376] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-376] Executing Excel test steps: 1.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-376] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-376] Validating: All requests submitted by the user should be visible");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-377
  // Excel Scenario: Verify request status is visible within My Requests
  // Excel Expected Result: Request status should be displayed for each request
  test("Case ID:CLM-TC-377 - My Requests → request status is visible within My Requests", async ({ testData }) => {
    await test.step("[CLM-TC-377] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-377] Executing Excel test steps: 1.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-377] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-377] Validating: Request status should be displayed for each request");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-378
  // Excel Scenario: Verify newly submitted request appears in My Requests inventory
  // Excel Expected Result: Newly submitted request should appear in My Requests
  test("Case ID:CLM-TC-378 - My Requests → newly submitted request appears in My Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-378] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-378] Executing Excel test steps: 1.Submit request 2.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-378] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-378] Validating: Newly submitted request should appear in My Requests");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-379
  // Excel Scenario: Verify approved user request reflects updated status
  // Excel Expected Result: Request should display approved status
  test("Case ID:CLM-TC-379 - My Requests → approved user request reflects updated status", async ({ testData }) => {
    await test.step("[CLM-TC-379] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-379] Executing Excel test steps: 1.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-379] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-379] Validating: Request should display approved status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-380
  // Excel Scenario: Verify rejected user request reflects updated status
  // Excel Expected Result: Request should display rejected status
  test("Case ID:CLM-TC-380 - My Requests → rejected user request reflects updated status", async ({ testData }) => {
    await test.step("[CLM-TC-380] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-380] Executing Excel test steps: 1.Open My Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-380] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-380] Validating: Request should display rejected status");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-381
  // Excel Scenario: Verify My Requests inventory remains accurate after page refresh
  // Excel Expected Result: Request information should remain accurate and consistent
  test("Case ID:CLM-TC-381 - My Requests → My Requests inventory remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-381] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-381] Executing Excel test steps: 1.Open My Requests 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-381] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-381] Validating: Request information should remain accurate and consistent");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Request Details", () => {
  // Excel Test Case ID: CLM-TC-382
  // Excel Scenario: Verify user can open detailed view of governance request
  // Excel Expected Result: Request Details page should open successfully
  test("Case ID:CLM-TC-382 - Request Details → user can open detailed view of governance request", async ({ testData }) => {
    await test.step("[CLM-TC-382] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-382] Executing Excel test steps: 1.Open request from All Requests");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-382] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-382] Validating: Request Details page should open successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-383
  // Excel Scenario: Verify Request Details page displays request identification information
  // Excel Expected Result: Request Details should display request identification information
  test("Case ID:CLM-TC-383 - Request Details → Request Details page displays request identification information", async ({ testData }) => {
    await test.step("[CLM-TC-383] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-383] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-383] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-383] Validating: Request Details should display request identification information");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-384
  // Excel Scenario: Verify Request Details page displays submitted business data
  // Excel Expected Result: All submitted information should be available for review
  test("Case ID:CLM-TC-384 - Request Details → Request Details page displays submitted business data", async ({ testData }) => {
    await test.step("[CLM-TC-384] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-384] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-384] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-384] Validating: All submitted information should be available for review");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-385
  // Excel Scenario: Verify Request Details page displays request creator information
  // Excel Expected Result: Maker information should be displayed accurately
  test("Case ID:CLM-TC-385 - Request Details → Request Details page displays request creator information", async ({ testData }) => {
    await test.step("[CLM-TC-385] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-385] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-385] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-385] Validating: Maker information should be displayed accurately");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-386
  // Excel Scenario: Verify Request Details page displays request submission information
  // Excel Expected Result: Request submission details should be displayed accurately
  test("Case ID:CLM-TC-386 - Request Details → Request Details page displays request submission information", async ({ testData }) => {
    await test.step("[CLM-TC-386] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-386] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-386] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-386] Validating: Request submission details should be displayed accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-387
  // Excel Scenario: Verify Request Details page displays current request status
  // Excel Expected Result: Request status should reflect current workflow state
  test("Case ID:CLM-TC-387 - Request Details → Request Details page displays current request status", async ({ testData }) => {
    await test.step("[CLM-TC-387] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-387] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-387] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-387] Validating: Request status should reflect current workflow state");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-388
  // Excel Scenario: Verify Request Details page displays complete information required for approval decision
  // Excel Expected Result: Request Details should contain sufficient information for approval or rejection review
  test("Case ID:CLM-TC-388 - Request Details → Request Details page displays complete information required for approval decision", async ({ testData }) => {
    await test.step("[CLM-TC-388] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-388] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-388] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-388] Validating: Request Details should contain sufficient information for approval or rejection review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-389
  // Excel Scenario: Verify approved request details remain available for audit review
  // Excel Expected Result: Approved request information should remain accessible
  test("Case ID:CLM-TC-389 - Request Details → approved request details remain available for audit review", async ({ testData }) => {
    await test.step("[CLM-TC-389] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-389] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-389] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-389] Validating: Approved request information should remain accessible");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-390
  // Excel Scenario: Verify rejected request details remain available for audit review
  // Excel Expected Result: Rejected request information should remain accessible
  test("Case ID:CLM-TC-390 - Request Details → rejected request details remain available for audit review", async ({ testData }) => {
    await test.step("[CLM-TC-390] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-390] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-390] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-390] Validating: Rejected request information should remain accessible");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-391
  // Excel Scenario: Verify Request Details maintains complete governance traceability
  // Excel Expected Result: Request Details should provide complete traceability of governance activity
  test("Case ID:CLM-TC-391 - Request Details → Request Details maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-391] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-391] Executing Excel test steps: 1.Open Request Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-391] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-391] Validating: Request Details should provide complete traceability of governance activity");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Approval Workflow", () => {
  // Excel Test Case ID: CLM-TC-392
  // Excel Scenario: Verify checker can access pending approval requests from governance queue
  // Excel Expected Result: Checker should be able to access pending request details successfully
  test("Case ID:CLM-TC-392 - Approval Workflow → checker can access pending approval requests from governance queue", async ({ testData }) => {
    await test.step("[CLM-TC-392] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-392] Executing Excel test steps: 1.Open All Requests 2.Locate Pending Approval request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    // TODO: Checker role login — switch session to: checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-392] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-392] Validating: Checker should be able to access pending request details successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-393
  // Excel Scenario: Verify checker can review complete request information before approval
  // Excel Expected Result: Request details should contain complete information required for approval review
  test("Case ID:CLM-TC-393 - Approval Workflow → checker can review complete request information before approval", async ({ testData }) => {
    await test.step("[CLM-TC-393] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-393] Executing Excel test steps: 1.Open Request Details 2.Review submitted information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-393] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-393] Validating: Request details should contain complete information required for approval review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-394
  // Excel Scenario: Verify checker can approve eligible governance request
  // Excel Expected Result: Request should be approved successfully
  test("Case ID:CLM-TC-394 - Approval Workflow → checker can approve eligible governance request", async ({ testData }) => {
    await test.step("[CLM-TC-394] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-394] Executing Excel test steps: 1.Open request 2.Perform approval action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-394] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-394] Validating: Request should be approved successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-395
  // Excel Scenario: Verify approved request status is updated appropriately
  // Excel Expected Result: Request status should reflect approved state
  test("Case ID:CLM-TC-395 - Approval Workflow → approved request status is updated appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-395] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-395] Executing Excel test steps: 1.Open approved request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-395] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-395] Validating: Request status should reflect approved state");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-396
  // Excel Scenario: Verify approved request is removed from pending approval queue
  // Excel Expected Result: Approved request should no longer appear in pending approval inventory
  test("Case ID:CLM-TC-396 - Approval Workflow → approved request is removed from pending approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-396] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-396] Executing Excel test steps: 1.Approve request 2.Review pending queue");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-396] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-396] Validating: Approved request should no longer appear in pending approval inventory");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-397
  // Excel Scenario: Verify approved business object reflects requested changes
  // Excel Expected Result: Requested changes should be applied successfully after approval
  test("Case ID:CLM-TC-397 - Approval Workflow → approved business object reflects requested changes", async ({ testData }) => {
    await test.step("[CLM-TC-397] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-397] Executing Excel test steps: 1.Approve request 2.Verify target object");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-397] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-397] Validating: Requested changes should be applied successfully after approval");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-398
  // Excel Scenario: Verify approval action captures checker accountability information
  // Excel Expected Result: Checker information should be recorded successfully
  test("Case ID:CLM-TC-398 - Approval Workflow → approval action captures checker accountability information", async ({ testData }) => {
    await test.step("[CLM-TC-398] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-398] Executing Excel test steps: 1.Approve request 2.Review metadata");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-398] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-398] Validating: Checker information should be recorded successfully");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-399
  // Excel Scenario: Verify approval action captures approval timestamp
  // Excel Expected Result: Approval date and time should be recorded successfully
  test("Case ID:CLM-TC-399 - Approval Workflow → approval action captures approval timestamp", async ({ testData }) => {
    await test.step("[CLM-TC-399] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-399] Executing Excel test steps: 1.Approve request 2.Review request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-399] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-399] Validating: Approval date and time should be recorded successfully");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-400
  // Excel Scenario: Verify approved request remains available for audit review
  // Excel Expected Result: Approved request should remain available according to governance retention rules
  test("Case ID:CLM-TC-400 - Approval Workflow → approved request remains available for audit review", async ({ testData }) => {
    await test.step("[CLM-TC-400] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-400] Executing Excel test steps: 1.Open approved request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-400] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-400] Validating: Approved request should remain available according to governance retention rules");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-401
  // Excel Scenario: Verify approval workflow maintains complete governance traceability
  // Excel Expected Result: Request should contain complete approval traceability information
  test("Case ID:CLM-TC-401 - Approval Workflow → approval workflow maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-401] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-401] Executing Excel test steps: 1.Review request lifecycle");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Checker role login — switch session to: Checker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-401] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-401] Validating: Request should contain complete approval traceability information");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Rejection Workflow", () => {
  // Excel Test Case ID: CLM-TC-402
  // Excel Scenario: Verify checker can reject pending governance request
  // Excel Expected Result: Request should be rejected successfully
  test("Case ID:CLM-TC-402 - Rejection Workflow → checker can reject pending governance request", async ({ testData }) => {
    await test.step("[CLM-TC-402] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-402] Executing Excel test steps: 1.Open request 2.Perform rejection action");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-402] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-402] Validating: Request should be rejected successfully");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-403
  // Excel Scenario: Verify rejected request status is updated appropriately
  // Excel Expected Result: Request status should reflect rejected state
  test("Case ID:CLM-TC-403 - Rejection Workflow → rejected request status is updated appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-403] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-403] Executing Excel test steps: 1.Open rejected request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-403] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-403] Validating: Request status should reflect rejected state");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-404
  // Excel Scenario: Verify rejected request is removed from pending approval queue
  // Excel Expected Result: Rejected request should no longer appear in pending approval inventory
  test("Case ID:CLM-TC-404 - Rejection Workflow → rejected request is removed from pending approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-404] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-404] Executing Excel test steps: 1.Reject request 2.Review pending queue");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-404] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-404] Validating: Rejected request should no longer appear in pending approval inventory");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-405
  // Excel Scenario: Verify rejected business object does not reflect requested changes
  // Excel Expected Result: Requested changes should not be applied after rejection
  test("Case ID:CLM-TC-405 - Rejection Workflow → rejected business object does not reflect requested changes", async ({ testData }) => {
    await test.step("[CLM-TC-405] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-405] Executing Excel test steps: 1.Reject request 2.Verify target object");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-405] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-405] Validating: Requested changes should not be applied after rejection");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-406
  // Excel Scenario: Verify rejection action captures checker accountability information
  // Excel Expected Result: Checker information should be recorded successfully
  test("Case ID:CLM-TC-406 - Rejection Workflow → rejection action captures checker accountability information", async ({ testData }) => {
    await test.step("[CLM-TC-406] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-406] Executing Excel test steps: 1.Reject request 2.Review request metadata");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-406] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-406] Validating: Checker information should be recorded successfully");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-407
  // Excel Scenario: Verify rejection action captures rejection timestamp
  // Excel Expected Result: Rejection date and time should be recorded successfully
  test("Case ID:CLM-TC-407 - Rejection Workflow → rejection action captures rejection timestamp", async ({ testData }) => {
    await test.step("[CLM-TC-407] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-407] Executing Excel test steps: 1.Reject request 2.Review request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-407] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-407] Validating: Rejection date and time should be recorded successfully");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-408
  // Excel Scenario: Verify rejected request remains available for governance review
  // Excel Expected Result: Rejected request should remain available for future review
  test("Case ID:CLM-TC-408 - Rejection Workflow → rejected request remains available for governance review", async ({ testData }) => {
    await test.step("[CLM-TC-408] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-408] Executing Excel test steps: 1.Open rejected request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-408] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-408] Validating: Rejected request should remain available for future review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-409
  // Excel Scenario: Verify rejection workflow maintains complete governance traceability
  // Excel Expected Result: Request should contain complete rejection traceability information
  test("Case ID:CLM-TC-409 - Rejection Workflow → rejection workflow maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-409] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-409] Executing Excel test steps: 1.Review request lifecycle");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-409] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-409] Validating: Request should contain complete rejection traceability information");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Segregation Of Duties", () => {
  // Excel Test Case ID: CLM-TC-410
  // Excel Scenario: Verify maker identity is associated with submitted request
  // Excel Expected Result: Request should display maker information accurately
  test("Case ID:CLM-TC-410 - Segregation Of Duties → maker identity is associated with submitted request", async ({ testData }) => {
    await test.step("[CLM-TC-410] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-410] Executing Excel test steps: 1.Open request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-410] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-410] Validating: Request should display maker information accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-411
  // Excel Scenario: Verify checker identity is associated with approved request
  // Excel Expected Result: Request should display checker information accurately
  test("Case ID:CLM-TC-411 - Segregation Of Duties → checker identity is associated with approved request", async ({ testData }) => {
    await test.step("[CLM-TC-411] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-411] Executing Excel test steps: 1.Open approved request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-411] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-411] Validating: Request should display checker information accurately");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-412
  // Excel Scenario: Verify request lifecycle preserves maker and checker traceability
  // Excel Expected Result: Request should display complete maker-checker traceability
  test("Case ID:CLM-TC-412 - Segregation Of Duties → request lifecycle preserves maker and checker traceability", async ({ testData }) => {
    await test.step("[CLM-TC-412] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-412] Executing Excel test steps: 1.Open processed request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-412] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-412] Validating: Request should display complete maker-checker traceability");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-413
  // Excel Scenario: Verify governance workflow records independent review activity
  // Excel Expected Result: Request history should contain evidence of governance review activity
  test("Case ID:CLM-TC-413 - Segregation Of Duties → governance workflow records independent review activity", async ({ testData }) => {
    await test.step("[CLM-TC-413] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-413] Executing Excel test steps: 1.Open processed request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-413] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-413] Validating: Request history should contain evidence of governance review activity");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-414
  // Excel Scenario: Verify maker details remain unchanged after request processing
  // Excel Expected Result: Maker information should remain unchanged after workflow completion
  test("Case ID:CLM-TC-414 - Segregation Of Duties → maker details remain unchanged after request processing", async ({ testData }) => {
    await test.step("[CLM-TC-414] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-414] Executing Excel test steps: 1.Review maker information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // Role from Excel: maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-414] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-414] Validating: Maker information should remain unchanged after workflow completion");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-415
  // Excel Scenario: Verify checker details remain associated with final decision
  // Excel Expected Result: Checker information should remain associated with final workflow decision
  test("Case ID:CLM-TC-415 - Segregation Of Duties → checker details remain associated with final decision", async ({ testData }) => {
    await test.step("[CLM-TC-415] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-415] Executing Excel test steps: 1.Review checker information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    // Role from Excel: checker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-415] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-415] Validating: Checker information should remain associated with final workflow decision");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-416
  // Excel Scenario: Verify processed request provides complete accountability trail
  // Excel Expected Result: Request should provide complete accountability information
  test("Case ID:CLM-TC-416 - Segregation Of Duties → processed request provides complete accountability trail", async ({ testData }) => {
    await test.step("[CLM-TC-416] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-416] Executing Excel test steps: 1.Open request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-416] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-416] Validating: Request should provide complete accountability information");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-417
  // Excel Scenario: Verify governance workflow supports audit and regulatory review requirements
  // Excel Expected Result: Request should provide sufficient accountability evidence for governance review
  test("Case ID:CLM-TC-417 - Segregation Of Duties → governance workflow supports audit and regulatory review requirements", async ({ testData }) => {
    await test.step("[CLM-TC-417] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-417] Executing Excel test steps: 1.Review processed request history");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.expectRbacControlsHidden();
    });
    await test.step("[CLM-TC-417] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-417] Validating: Request should provide sufficient accountability evidence for governance review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("SLA Validation", () => {
  // Excel Test Case ID: CLM-TC-418
  // Excel Scenario: Verify request creation timestamp is captured for governance requests
  // Excel Expected Result: Request creation timestamp should be available
  test("Case ID:CLM-TC-418 - SLA Validation → request creation timestamp is captured for governance requests", async ({ testData }) => {
    await test.step("[CLM-TC-418] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-418] Executing Excel test steps: 1.Submit request 2.Open request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-418] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-418] Validating: Request creation timestamp should be available");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-419
  // Excel Scenario: Verify request processing timestamps are captured during governance workflow
  // Excel Expected Result: Relevant workflow timestamps should be available
  test("Case ID:CLM-TC-419 - SLA Validation → request processing timestamps are captured during governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-419] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-419] Executing Excel test steps: 1.Process request 2.Open request details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-419] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-419] Validating: Relevant workflow timestamps should be available");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-420
  // Excel Scenario: Verify request lifecycle provides chronological workflow visibility
  // Excel Expected Result: Request lifecycle should display chronological workflow progression
  test("Case ID:CLM-TC-420 - SLA Validation → request lifecycle provides chronological workflow visibility", async ({ testData }) => {
    await test.step("[CLM-TC-420] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-420] Executing Excel test steps: 1.Open processed request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-420] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-420] Validating: Request lifecycle should display chronological workflow progression");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-421
  // Excel Scenario: Verify request timing information remains available after approval
  // Excel Expected Result: Timing information should remain available
  test("Case ID:CLM-TC-421 - SLA Validation → request timing information remains available after approval", async ({ testData }) => {
    await test.step("[CLM-TC-421] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-421] Executing Excel test steps: 1.Open approved request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-421] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-421] Validating: Timing information should remain available");
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-422
  // Excel Scenario: Verify request timing information remains available after rejection
  // Excel Expected Result: Timing information should remain available
  test("Case ID:CLM-TC-422 - SLA Validation → request timing information remains available after rejection", async ({ testData }) => {
    await test.step("[CLM-TC-422] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-422] Executing Excel test steps: 1.Open rejected request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-422] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-422] Validating: Timing information should remain available");
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-423
  // Excel Scenario: Verify governance workflow records duration-related information when available
  // Excel Expected Result: Duration-related information should be displayed according to implementation
  test("Case ID:CLM-TC-423 - SLA Validation → governance workflow records duration-related information when available", async ({ testData }) => {
    await test.step("[CLM-TC-423] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-423] Executing Excel test steps: 1.Open processed request");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-423] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-423] Validating: Duration-related information should be displayed according to implementation");
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-424
  // Excel Scenario: Verify workflow timing information remains accurate across request lifecycle
  // Excel Expected Result: Timing information should remain consistent and accurate
  test("Case ID:CLM-TC-424 - SLA Validation → workflow timing information remains accurate across request lifecycle", async ({ testData }) => {
    await test.step("[CLM-TC-424] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-424] Executing Excel test steps: 1.Review workflow timestamps");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-424] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-424] Validating: Timing information should remain consistent and accurate");
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-425
  // Excel Scenario: Verify workflow timing information supports governance and audit review
  // Excel Expected Result: Request should provide sufficient timing traceability for governance review
  test("Case ID:CLM-TC-425 - SLA Validation → workflow timing information supports governance and audit review", async ({ testData }) => {
    await test.step("[CLM-TC-425] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-425] Executing Excel test steps: 1.Review request lifecycle details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-425] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-425] Validating: Request should provide sufficient timing traceability for governance review");
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Listing", () => {
  // Excel Test Case ID: CLM-TC-426
  // Excel Scenario: Verify Audit page is accessible from Custom List Manager navigation
  // Excel Expected Result: Audit page should open successfully displaying available audit records
  test("Case ID:CLM-TC-426 - Audit Listing → Audit page is accessible from Custom List Manager navigation", async ({ testData }) => {
    await test.step("[CLM-TC-426] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-426] Executing Excel test steps: 1.Navigate to Custom List Manager 2.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-426] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-426] Validating: Audit page should open successfully displaying available audit records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-427
  // Excel Scenario: Verify audit listing displays recorded governance activities
  // Excel Expected Result: Audit listing should display recorded governance activities
  test("Case ID:CLM-TC-427 - Audit Listing → audit listing displays recorded governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-427] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-427] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Audit Dataset");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-427] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-427] Validating: Audit listing should display recorded governance activities");
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-428
  // Excel Scenario: Verify audit listing displays sufficient information to identify audited events
  // Excel Expected Result: Audit records should contain sufficient information for activity identification
  test("Case ID:CLM-TC-428 - Audit Listing → audit listing displays sufficient information to identify audited events", async ({ testData }) => {
    await test.step("[CLM-TC-428] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-428] Executing Excel test steps: 1.Review audit listing");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Audit Dataset");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-428] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-428] Validating: Audit records should contain sufficient information for activity identification");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-429
  // Excel Scenario: Verify onboarding activities are captured within audit listing
  // Excel Expected Result: Entity onboarding activity should be available in audit listing
  test("Case ID:CLM-TC-429 - Audit Listing → onboarding activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-429] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-429] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Onboarding Event");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-429] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-429] Validating: Entity onboarding activity should be available in audit listing");
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-430
  // Excel Scenario: Verify custom list lifecycle activities are captured within audit listing
  // Excel Expected Result: 
  test("Case ID:CLM-TC-430 - Audit Listing → custom list lifecycle activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-430] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-430] Executing Excel test steps: List Governance Event");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("High");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-430] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-430] Validating: ");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-431
  // Excel Scenario: Verify bulk upload activities are captured within audit listing
  // Excel Expected Result: Bulk upload activity should be available in audit listing
  test("Case ID:CLM-TC-431 - Audit Listing → bulk upload activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-431] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-431] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Bulk Upload Event");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-431] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-431] Validating: Bulk upload activity should be available in audit listing");
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-432
  // Excel Scenario: Verify approval and rejection activities are captured within audit listing
  // Excel Expected Result: Approval and rejection activities should be available in audit listing
  test("Case ID:CLM-TC-432 - Audit Listing → approval and rejection activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-432] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-432] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Governance Event");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-432] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-432] Validating: Approval and rejection activities should be available in audit listing");
      await clmPage.expectAuditListingVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-433
  // Excel Scenario: Verify audit listing displays activities in chronological order
  // Excel Expected Result: Audit records should be displayed in chronological order according to implementation
  test("Case ID:CLM-TC-433 - Audit Listing → audit listing displays activities in chronological order", async ({ testData }) => {
    await test.step("[CLM-TC-433] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-433] Executing Excel test steps: 1.Open Audit page 2.Review activity sequence");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Audit Dataset");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-433] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-433] Validating: Audit records should be displayed in chronological order according to implementation");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-434
  // Excel Scenario: Verify newly generated activity appears in audit listing
  // Excel Expected Result: New activity should be visible in audit listing
  test("Case ID:CLM-TC-434 - Audit Listing → newly generated activity appears in audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-434] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-434] Executing Excel test steps: 1.Perform auditable action 2.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("New Audit Event");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-434] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-434] Validating: New activity should be visible in audit listing");
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-435
  // Excel Scenario: Verify audit listing remains accurate after page refresh
  // Excel Expected Result: Audit records should remain accurate and consistent after refresh
  test("Case ID:CLM-TC-435 - Audit Listing → audit listing remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-435] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-435] Executing Excel test steps: 1.Open Audit page 2.Refresh browser");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Audit Dataset");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-435] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-435] Validating: Audit records should remain accurate and consistent after refresh");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Search", () => {
  // Excel Test Case ID: CLM-TC-436
  // Excel Scenario: Verify audit search control is available
  // Excel Expected Result: Search functionality should be visible and accessible
  test("Case ID:CLM-TC-436 - Audit Search → audit search control is available", async ({ testData }) => {
    await test.step("[CLM-TC-436] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-436] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-436] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-436] Validating: Search functionality should be visible and accessible");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-437
  // Excel Scenario: Verify audit search returns matching audit records
  // Excel Expected Result: Matching audit records should be displayed successfully
  test("Case ID:CLM-TC-437 - Audit Search → audit search returns matching audit records", async ({ testData }) => {
    await test.step("[CLM-TC-437] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-437] Executing Excel test steps: 1.Enter searchable value 2.Execute search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-437] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-437] Validating: Matching audit records should be displayed successfully");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-438
  // Excel Scenario: Verify partial search returns relevant audit activities
  // Excel Expected Result: Relevant audit records should be returned
  test("Case ID:CLM-TC-438 - Audit Search → partial search returns relevant audit activities", async ({ testData }) => {
    await test.step("[CLM-TC-438] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-438] Executing Excel test steps: 1.Enter partial search value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-438] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-438] Validating: Relevant audit records should be returned");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-439
  // Excel Scenario: Verify audit search result accuracy
  // Excel Expected Result: Displayed records should satisfy entered search criteria
  test("Case ID:CLM-TC-439 - Audit Search → audit search result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-439] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-439] Executing Excel test steps: 1.Perform search 2.Validate results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-439] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-439] Validating: Displayed records should satisfy entered search criteria");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-440
  // Excel Scenario: Verify search with non-existing value returns no matching records
  // Excel Expected Result: System should display no matching records message or equivalent behavior
  test("Case ID:CLM-TC-440 - Audit Search → search with non-existing value returns no matching records", async ({ testData }) => {
    await test.step("[CLM-TC-440] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-440] Executing Excel test steps: 1.Search using invalid value");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-440] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-440] Validating: System should display no matching records message or equivalent behavior");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-441
  // Excel Scenario: Verify audit search supports retrieval of recently generated activities
  // Excel Expected Result: Recent matching activity should be returned successfully
  test("Case ID:CLM-TC-441 - Audit Search → audit search supports retrieval of recently generated activities", async ({ testData }) => {
    await test.step("[CLM-TC-441] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-441] Executing Excel test steps: 1.Search for recent audit activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-441] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-441] Validating: Recent matching activity should be returned successfully");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-442
  // Excel Scenario: Verify search results remain consistent after page refresh
  // Excel Expected Result: System should maintain consistent search behavior according to implementation
  test("Case ID:CLM-TC-442 - Audit Search → search results remain consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-442] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-442] Executing Excel test steps: 1.Perform search 2.Refresh page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-442] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-442] Validating: System should maintain consistent search behavior according to implementation");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-443
  // Excel Scenario: Verify search capability supports audit investigation activities
  // Excel Expected Result: Search functionality should allow efficient retrieval of audit evidence
  test("Case ID:CLM-TC-443 - Audit Search → search capability supports audit investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-443] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-443] Executing Excel test steps: 1.Perform audit search");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-443] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-443] Validating: Search functionality should allow efficient retrieval of audit evidence");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Filters", () => {
  // Excel Test Case ID: CLM-TC-444
  // Excel Scenario: Verify audit filter controls are available
  // Excel Expected Result: Available filter controls should be visible and accessible
  test("Case ID:CLM-TC-444 - Audit Filters → audit filter controls are available", async ({ testData }) => {
    await test.step("[CLM-TC-444] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-444] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-444] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-444] Validating: Available filter controls should be visible and accessible");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-445
  // Excel Scenario: Verify audit records can be filtered using available filter criteria
  // Excel Expected Result: Audit records matching selected filter criteria should be displayed
  test("Case ID:CLM-TC-445 - Audit Filters → audit records can be filtered using available filter criteria", async ({ testData }) => {
    await test.step("[CLM-TC-445] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-445] Executing Excel test steps: 1.Apply available filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-445] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-445] Validating: Audit records matching selected filter criteria should be displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-446
  // Excel Scenario: Verify filter results display only matching audit records
  // Excel Expected Result: Displayed records should satisfy selected filter criteria
  test("Case ID:CLM-TC-446 - Audit Filters → filter results display only matching audit records", async ({ testData }) => {
    await test.step("[CLM-TC-446] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-446] Executing Excel test steps: 1.Apply filter 2.Review results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-446] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-446] Validating: Displayed records should satisfy selected filter criteria");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-447
  // Excel Scenario: Verify multiple filters can be applied together when supported
  // Excel Expected Result: Audit records should satisfy all applied filter criteria
  test("Case ID:CLM-TC-447 - Audit Filters → multiple filters can be applied together when supported", async ({ testData }) => {
    await test.step("[CLM-TC-447] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-447] Executing Excel test steps: 1.Apply multiple filters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-447] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-447] Validating: Audit records should satisfy all applied filter criteria");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-448
  // Excel Scenario: Verify audit filters can retrieve governance-related activities
  // Excel Expected Result: Relevant governance activities should be returned
  test("Case ID:CLM-TC-448 - Audit Filters → audit filters can retrieve governance-related activities", async ({ testData }) => {
    await test.step("[CLM-TC-448] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-448] Executing Excel test steps: 1.Apply governance-related filters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-448] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-448] Validating: Relevant governance activities should be returned");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-449
  // Excel Scenario: Verify audit filters can retrieve onboarding-related activities
  // Excel Expected Result: Relevant onboarding activities should be returned
  test("Case ID:CLM-TC-449 - Audit Filters → audit filters can retrieve onboarding-related activities", async ({ testData }) => {
    await test.step("[CLM-TC-449] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-449] Executing Excel test steps: 1.Apply onboarding-related filters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-449] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-449] Validating: Relevant onboarding activities should be returned");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-450
  // Excel Scenario: Verify filter reset functionality restores complete audit inventory
  // Excel Expected Result: All filters should be cleared and complete audit inventory displayed
  test("Case ID:CLM-TC-450 - Audit Filters → filter reset functionality restores complete audit inventory", async ({ testData }) => {
    await test.step("[CLM-TC-450] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-450] Executing Excel test steps: 1.Apply filters 2.Reset filters");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-450] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-450] Validating: All filters should be cleared and complete audit inventory displayed");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-451
  // Excel Scenario: Verify audit filtering supports compliance investigation requirements
  // Excel Expected Result: Filtering functionality should enable efficient retrieval of compliance evidence
  test("Case ID:CLM-TC-451 - Audit Filters → audit filtering supports compliance investigation requirements", async ({ testData }) => {
    await test.step("[CLM-TC-451] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-451] Executing Excel test steps: 1.Perform filter-based investigation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-451] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-451] Validating: Filtering functionality should enable efficient retrieval of compliance evidence");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Date Range", () => {
  // Excel Test Case ID: CLM-TC-452
  // Excel Scenario: Verify date range filter controls are available on Audit page
  // Excel Expected Result: Date range filter controls should be visible and accessible
  test("Case ID:CLM-TC-452 - Audit Date Range → date range filter controls are available on Audit page", async ({ testData }) => {
    await test.step("[CLM-TC-452] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-452] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-452] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-452] Validating: Date range filter controls should be visible and accessible");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-453
  // Excel Scenario: Verify audit records can be retrieved using valid date range criteria
  // Excel Expected Result: Audit records within the selected date range should be displayed
  test("Case ID:CLM-TC-453 - Audit Date Range → audit records can be retrieved using valid date range criteria", async ({ testData }) => {
    await test.step("[CLM-TC-453] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-453] Executing Excel test steps: 1.Select valid From Date and To Date 2.Apply filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-453] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-453] Validating: Audit records within the selected date range should be displayed");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-454
  // Excel Scenario: Verify date range results contain only activities within selected period
  // Excel Expected Result: Displayed records should belong to the selected date range only
  test("Case ID:CLM-TC-454 - Audit Date Range → date range results contain only activities within selected period", async ({ testData }) => {
    await test.step("[CLM-TC-454] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-454] Executing Excel test steps: 1.Apply date range filter 2.Review results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-454] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-454] Validating: Displayed records should belong to the selected date range only");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-455
  // Excel Scenario: Verify audit activities generated on boundary dates are included appropriately
  // Excel Expected Result: Activities falling within configured date range boundaries should be returned
  test("Case ID:CLM-TC-455 - Audit Date Range → audit activities generated on boundary dates are included appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-455] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-455] Executing Excel test steps: 1.Apply date range including known boundary dates");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-455] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-455] Validating: Activities falling within configured date range boundaries should be returned");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-456
  // Excel Scenario: Verify date range with no matching activities is handled appropriately
  // Excel Expected Result: System should display no matching records message or equivalent behavior
  test("Case ID:CLM-TC-456 - Audit Date Range → date range with no matching activities is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-456] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-456] Executing Excel test steps: 1.Select date range with no audit activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-456] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-456] Validating: System should display no matching records message or equivalent behavior");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-457
  // Excel Scenario: Verify date range filtering can retrieve recently generated audit activities
  // Excel Expected Result: Recently generated audit activities should be retrievable
  test("Case ID:CLM-TC-457 - Audit Date Range → date range filtering can retrieve recently generated audit activities", async ({ testData }) => {
    await test.step("[CLM-TC-457] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-457] Executing Excel test steps: 1.Generate activity 2.Apply appropriate date range");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-457] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-457] Validating: Recently generated audit activities should be retrievable");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-458
  // Excel Scenario: Verify date range filter can be cleared successfully
  // Excel Expected Result: Date range criteria should be removed and complete audit inventory displayed
  test("Case ID:CLM-TC-458 - Audit Date Range → date range filter can be cleared successfully", async ({ testData }) => {
    await test.step("[CLM-TC-458] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-458] Executing Excel test steps: 1.Apply date range filter 2.Clear filter");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-458] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-458] Validating: Date range criteria should be removed and complete audit inventory displayed");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-459
  // Excel Scenario: Verify date range filtering supports compliance investigation activities
  // Excel Expected Result: Date range filtering should enable efficient retrieval of historical audit evidence
  test("Case ID:CLM-TC-459 - Audit Date Range → date range filtering supports compliance investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-459] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-459] Executing Excel test steps: 1.Perform date-based audit investigation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-459] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-459] Validating: Date range filtering should enable efficient retrieval of historical audit evidence");
      await clmPage.expectFiltersVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Event Details", () => {
  // Excel Test Case ID: CLM-TC-460
  // Excel Scenario: Verify user can open detailed view of audit event
  // Excel Expected Result: Event Details page should open successfully
  test("Case ID:CLM-TC-460 - Event Details → user can open detailed view of audit event", async ({ testData }) => {
    await test.step("[CLM-TC-460] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-460] Executing Excel test steps: 1.Open Audit page 2.Select audit event");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-460] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-460] Validating: Event Details page should open successfully");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-461
  // Excel Scenario: Verify Event Details displays sufficient information to identify audited activity
  // Excel Expected Result: Event Details should clearly identify the audited activity
  test("Case ID:CLM-TC-461 - Event Details → Event Details displays sufficient information to identify audited activity", async ({ testData }) => {
    await test.step("[CLM-TC-461] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-461] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-461] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-461] Validating: Event Details should clearly identify the audited activity");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-462
  // Excel Scenario: Verify Event Details displays associated user information
  // Excel Expected Result: User information associated with the audited activity should be displayed
  test("Case ID:CLM-TC-462 - Event Details → Event Details displays associated user information", async ({ testData }) => {
    await test.step("[CLM-TC-462] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-462] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-462] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-462] Validating: User information associated with the audited activity should be displayed");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-463
  // Excel Scenario: Verify Event Details displays activity timing information
  // Excel Expected Result: Event timing information should be displayed accurately
  test("Case ID:CLM-TC-463 - Event Details → Event Details displays activity timing information", async ({ testData }) => {
    await test.step("[CLM-TC-463] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-463] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-463] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-463] Validating: Event timing information should be displayed accurately");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-464
  // Excel Scenario: Verify Event Details displays activity outcome information
  // Excel Expected Result: Event Details should display available activity outcome information
  test("Case ID:CLM-TC-464 - Event Details → Event Details displays activity outcome information", async ({ testData }) => {
    await test.step("[CLM-TC-464] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-464] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-464] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-464] Validating: Event Details should display available activity outcome information");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-465
  // Excel Scenario: Verify Event Details remain accessible for approved governance activities
  // Excel Expected Result: Event Details should remain accessible for approved activities
  test("Case ID:CLM-TC-465 - Event Details → Event Details remain accessible for approved governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-465] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-465] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-465] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-465] Validating: Event Details should remain accessible for approved activities");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-466
  // Excel Scenario: Verify Event Details remain accessible for rejected governance activities
  // Excel Expected Result: Event Details should remain accessible for rejected activities
  test("Case ID:CLM-TC-466 - Event Details → Event Details remain accessible for rejected governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-466] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-466] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-466] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-466] Validating: Event Details should remain accessible for rejected activities");
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-467
  // Excel Scenario: Verify Event Details provide sufficient information for compliance investigations
  // Excel Expected Result: Event Details should provide complete activity traceability information
  test("Case ID:CLM-TC-467 - Event Details → Event Details provide sufficient information for compliance investigations", async ({ testData }) => {
    await test.step("[CLM-TC-467] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-467] Executing Excel test steps: 1.Open Event Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-467] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-467] Validating: Event Details should provide complete activity traceability information");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Export", () => {
  // Excel Test Case ID: CLM-TC-468
  // Excel Scenario: Verify audit export option is available
  // Excel Expected Result: Export option should be visible and accessible
  test("Case ID:CLM-TC-468 - Audit Export → audit export option is available", async ({ testData }) => {
    await test.step("[CLM-TC-468] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-468] Executing Excel test steps: 1.Open Audit page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-468] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-468] Validating: Export option should be visible and accessible");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-469
  // Excel Scenario: Verify audit records can be exported successfully
  // Excel Expected Result: Audit export should complete successfully
  test("Case ID:CLM-TC-469 - Audit Export → audit records can be exported successfully", async ({ testData }) => {
    await test.step("[CLM-TC-469] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-469] Executing Excel test steps: 1.Perform export operation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-469] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-469] Validating: Audit export should complete successfully");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-470
  // Excel Scenario: Verify exported audit data matches displayed audit inventory
  // Excel Expected Result: Exported data should match displayed audit information
  test("Case ID:CLM-TC-470 - Audit Export → exported audit data matches displayed audit inventory", async ({ testData }) => {
    await test.step("[CLM-TC-470] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-470] Executing Excel test steps: 1.Export audit records 2.Compare exported data");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-470] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-470] Validating: Exported data should match displayed audit information");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-471
  // Excel Scenario: Verify export supports filtered audit results
  // Excel Expected Result: Exported output should reflect applied filters
  test("Case ID:CLM-TC-471 - Audit Export → export supports filtered audit results", async ({ testData }) => {
    await test.step("[CLM-TC-471] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-471] Executing Excel test steps: 1.Apply filters 2.Export results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-471] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-471] Validating: Exported output should reflect applied filters");
      await clmPage.expectFiltersVisible();
    await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-472
  // Excel Scenario: Verify export supports date-range based audit investigations
  // Excel Expected Result: Exported output should reflect selected date range
  test("Case ID:CLM-TC-472 - Audit Export → export supports date-range based audit investigations", async ({ testData }) => {
    await test.step("[CLM-TC-472] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-472] Executing Excel test steps: 1.Apply date range 2.Export results");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-472] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-472] Validating: Exported output should reflect selected date range");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-473
  // Excel Scenario: Verify exported audit information remains readable and usable
  // Excel Expected Result: Exported audit data should be readable and usable for investigation purposes
  test("Case ID:CLM-TC-473 - Audit Export → exported audit information remains readable and usable", async ({ testData }) => {
    await test.step("[CLM-TC-473] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-473] Executing Excel test steps: 1.Open exported file");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-473] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-473] Validating: Exported audit data should be readable and usable for investigation purposes");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-474
  // Excel Scenario: Verify export operation does not alter audit records
  // Excel Expected Result: Export operation should not modify existing audit records
  test("Case ID:CLM-TC-474 - Audit Export → export operation does not alter audit records", async ({ testData }) => {
    await test.step("[CLM-TC-474] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-474] Executing Excel test steps: 1.Export records 2.Verify audit inventory");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-474] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-474] Validating: Export operation should not modify existing audit records");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-475
  // Excel Scenario: Verify audit export supports compliance and regulatory review requirements
  // Excel Expected Result: Exported information should provide usable audit evidence for governance review
  test("Case ID:CLM-TC-475 - Audit Export → audit export supports compliance and regulatory review requirements", async ({ testData }) => {
    await test.step("[CLM-TC-475] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-475] Executing Excel test steps: 1.Export audit records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-475] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-475] Validating: Exported information should provide usable audit evidence for governance review");
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Integrity", () => {
  // Excel Test Case ID: CLM-TC-476
  // Excel Scenario: Verify audit records remain available after related business object changes
  // Excel Expected Result: Audit records should remain available after business object modifications
  test("Case ID:CLM-TC-476 - Audit Integrity → audit records remain available after related business object changes", async ({ testData }) => {
    await test.step("[CLM-TC-476] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-476] Executing Excel test steps: 1.Perform update 2.Review related audit records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-476] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-476] Validating: Audit records should remain available after business object modifications");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-477
  // Excel Scenario: Verify audit records remain available after approval workflow completion
  // Excel Expected Result: Audit evidence should remain available after workflow completion
  test("Case ID:CLM-TC-477 - Audit Integrity → audit records remain available after approval workflow completion", async ({ testData }) => {
    await test.step("[CLM-TC-477] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-477] Executing Excel test steps: 1.Complete approval workflow 2.Review audit records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-477] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-477] Validating: Audit evidence should remain available after workflow completion");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-478
  // Excel Scenario: Verify audit records remain available after rejection workflow completion
  // Excel Expected Result: Audit evidence should remain available after workflow completion
  test("Case ID:CLM-TC-478 - Audit Integrity → audit records remain available after rejection workflow completion", async ({ testData }) => {
    await test.step("[CLM-TC-478] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-478] Executing Excel test steps: 1.Complete rejection workflow 2.Review audit records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-478] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-478] Validating: Audit evidence should remain available after workflow completion");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-479
  // Excel Scenario: Verify audit entries remain associated with the correct activity
  // Excel Expected Result: Audit entries should remain linked to the corresponding business activity
  test("Case ID:CLM-TC-479 - Audit Integrity → audit entries remain associated with the correct activity", async ({ testData }) => {
    await test.step("[CLM-TC-479] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-479] Executing Excel test steps: 1.Review audit event details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-479] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-479] Validating: Audit entries should remain linked to the corresponding business activity");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-480
  // Excel Scenario: Verify audit entries remain associated with the responsible user
  // Excel Expected Result: Audit entries should remain associated with the correct user
  test("Case ID:CLM-TC-480 - Audit Integrity → audit entries remain associated with the responsible user", async ({ testData }) => {
    await test.step("[CLM-TC-480] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-480] Executing Excel test steps: 1.Review user information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-480] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-480] Validating: Audit entries should remain associated with the correct user");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-481
  // Excel Scenario: Verify audit timestamps remain consistent throughout activity lifecycle
  // Excel Expected Result: Audit timestamps should remain accurate and consistent
  test("Case ID:CLM-TC-481 - Audit Integrity → audit timestamps remain consistent throughout activity lifecycle", async ({ testData }) => {
    await test.step("[CLM-TC-481] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-481] Executing Excel test steps: 1.Review event timestamps");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-481] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-481] Validating: Audit timestamps should remain accurate and consistent");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-482
  // Excel Scenario: Verify audit information remains consistent across listing and detail views
  // Excel Expected Result: Audit information should remain consistent across views
  test("Case ID:CLM-TC-482 - Audit Integrity → audit information remains consistent across listing and detail views", async ({ testData }) => {
    await test.step("[CLM-TC-482] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-482] Executing Excel test steps: 1.Compare audit listing and event details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-482] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-482] Validating: Audit information should remain consistent across views");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-483
  // Excel Scenario: Verify audit records support reconstruction of business activity history
  // Excel Expected Result: Audit trail should allow reconstruction of business activity history
  test("Case ID:CLM-TC-483 - Audit Integrity → audit records support reconstruction of business activity history", async ({ testData }) => {
    await test.step("[CLM-TC-483] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-483] Executing Excel test steps: 1.Review related audit events");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-483] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-483] Validating: Audit trail should allow reconstruction of business activity history");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-484
  // Excel Scenario: Verify audit records support governance accountability requirements
  // Excel Expected Result: Audit trail should provide accountability evidence for governance activities
  test("Case ID:CLM-TC-484 - Audit Integrity → audit records support governance accountability requirements", async ({ testData }) => {
    await test.step("[CLM-TC-484] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-484] Executing Excel test steps: 1.Review governance activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-484] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-484] Validating: Audit trail should provide accountability evidence for governance activities");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-485
  // Excel Scenario: Verify audit trail maintains compliance and regulatory traceability
  // Excel Expected Result: Audit trail should provide complete end-to-end compliance traceability
  test("Case ID:CLM-TC-485 - Audit Integrity → audit trail maintains compliance and regulatory traceability", async ({ testData }) => {
    await test.step("[CLM-TC-485] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-485] Executing Excel test steps: 1.Review complete audit lifecycle");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-485] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-485] Validating: Audit trail should provide complete end-to-end compliance traceability");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("TTL Display", () => {
  // Excel Test Case ID: CLM-TC-486
  // Excel Scenario: Verify TTL information is displayed for entities associated with custom lists configured with a retention period
  // Excel Expected Result: TTL information should be displayed accurately for each entity according to the configured list retention period
  test("Case ID:CLM-TC-486 - TTL Display → TTL information is displayed for entities associated with custom lists configured with a retention period", async ({ testData }) => {
    await test.step("[CLM-TC-486] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-486] Executing Excel test steps: 1.Navigate to Custom List Manager 2.Open custom list containing active entities 3.Open Entity Grid and review TTL-related columns");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity with Configured TTL");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-486] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-486] Validating: TTL information should be displayed accurately for each entity according to the configured list retention period");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-487
  // Excel Scenario: Verify TTL values displayed in Entity Grid remain consistent with entity detail information
  // Excel Expected Result: TTL information displayed in Entity Grid and Entity Details should remain consistent
  test("Case ID:CLM-TC-487 - TTL Display → TTL values displayed in Entity Grid remain consistent with entity detail information", async ({ testData }) => {
    await test.step("[CLM-TC-487] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-487] Executing Excel test steps: 1.Open Entity Grid 2.Note displayed TTL information 3.Open corresponding Entity Details page");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Sample Entity");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-487] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-487] Validating: TTL information displayed in Entity Grid and Entity Details should remain consistent");
      await clmPage.expectListGridVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-488
  // Excel Scenario: Verify TTL information remains visible after entity approval and onboarding completion
  // Excel Expected Result: TTL information should remain available after onboarding workflow completion
  test("Case ID:CLM-TC-488 - TTL Display → TTL information remains visible after entity approval and onboarding completion", async ({ testData }) => {
    await test.step("[CLM-TC-488] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-488] Executing Excel test steps: 1.Approve entity onboarding request 2.Open Entity Grid and Entity Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Approved Entity");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-488] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-488] Validating: TTL information should remain available after onboarding workflow completion");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-489
  // Excel Scenario: Verify TTL information remains available after entity modification requests are processed
  // Excel Expected Result: TTL information should remain available and accurate after approved modifications
  test("Case ID:CLM-TC-489 - TTL Display → TTL information remains available after entity modification requests are processed", async ({ testData }) => {
    await test.step("[CLM-TC-489] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-489] Executing Excel test steps: 1.Modify entity 2.Complete approval workflow 3.Review TTL information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Modified Entity");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-489] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-489] Validating: TTL information should remain available and accurate after approved modifications");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-490
  // Excel Scenario: Verify TTL information remains accurate after page refresh and navigation events
  // Excel Expected Result: TTL information should remain accurate and unchanged
  test("Case ID:CLM-TC-490 - TTL Display → TTL information remains accurate after page refresh and navigation events", async ({ testData }) => {
    await test.step("[CLM-TC-490] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-490] Executing Excel test steps: 1.Open Entity Grid 2.Note TTL information 3.Refresh page 4.Navigate away and return");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-490] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-490] Validating: TTL information should remain accurate and unchanged");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-491
  // Excel Scenario: Verify TTL information supports lifecycle monitoring and governance review activities
  // Excel Expected Result: TTL information should provide clear visibility of entity lifecycle state and retention status
  test("Case ID:CLM-TC-491 - TTL Display → TTL information supports lifecycle monitoring and governance review activities", async ({ testData }) => {
    await test.step("[CLM-TC-491] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-491] Executing Excel test steps: 1.Review TTL information across multiple entities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-491] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-491] Validating: TTL information should provide clear visibility of entity lifecycle state and retention status");
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expiry", () => {
  // Excel Test Case ID: CLM-TC-492
  // Excel Scenario: Verify entity reaches expiry state when configured TTL period is completed
  // Excel Expected Result: Entity should transition to expired lifecycle state according to configured TTL rules
  test("Case ID:CLM-TC-492 - Expiry → entity reaches expiry state when configured TTL period is completed", async ({ testData }) => {
    await test.step("[CLM-TC-492] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-492] Executing Excel test steps: 1.Identify entity approaching TTL completion 2.Allow expiry condition to occur 3.Review entity status");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Reaching Expiry");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-492] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-492] Validating: Entity should transition to expired lifecycle state according to configured TTL rules");
      await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-493
  // Excel Scenario: Verify expiry status is reflected consistently across entity inventory and details views
  // Excel Expected Result: Expired status should be displayed consistently across all views
  test("Case ID:CLM-TC-493 - Expiry → expiry status is reflected consistently across entity inventory and details views", async ({ testData }) => {
    await test.step("[CLM-TC-493] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-493] Executing Excel test steps: 1.Open Entity Grid 2.Open Entity Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-493] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-493] Validating: Expired status should be displayed consistently across all views");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-494
  // Excel Scenario: Verify expired entities remain traceable for governance and audit review
  // Excel Expected Result: Expired entity should remain available according to configured lifecycle visibility rules
  test("Case ID:CLM-TC-494 - Expiry → expired entities remain traceable for governance and audit review", async ({ testData }) => {
    await test.step("[CLM-TC-494] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-494] Executing Excel test steps: 1.Open Entity Details 2.Review entity information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-494] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-494] Validating: Expired entity should remain available according to configured lifecycle visibility rules");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-495
  // Excel Scenario: Verify entity expiry does not impact audit history and governance records
  // Excel Expected Result: Audit records and governance history should remain available after entity expiry
  test("Case ID:CLM-TC-495 - Expiry → entity expiry does not impact audit history and governance records", async ({ testData }) => {
    await test.step("[CLM-TC-495] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-495] Executing Excel test steps: 1.Open Audit History 2.Review entity-related records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-495] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-495] Validating: Audit records and governance history should remain available after entity expiry");
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-496
  // Excel Scenario: Verify expiry processing maintains entity lifecycle integrity
  // Excel Expected Result: Entity should transition cleanly into expiry state without inconsistent statuses
  test("Case ID:CLM-TC-496 - Expiry → expiry processing maintains entity lifecycle integrity", async ({ testData }) => {
    await test.step("[CLM-TC-496] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-496] Executing Excel test steps: 1.Monitor lifecycle transition from active to expired");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Lifecycle Dataset");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-496] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-496] Validating: Entity should transition cleanly into expiry state without inconsistent statuses");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expiring Soon", () => {
  // Excel Test Case ID: CLM-TC-497
  // Excel Scenario: Verify entities approaching expiry can be identified through lifecycle monitoring information
  // Excel Expected Result: Entity approaching expiry should be identifiable according to implemented lifecycle rules
  test("Case ID:CLM-TC-497 - Expiring Soon → entities approaching expiry can be identified through lifecycle monitoring information", async ({ testData }) => {
    await test.step("[CLM-TC-497] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-497] Executing Excel test steps: 1.Open Entity Grid 2.Review lifecycle-related information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Nearing Expiry");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-497] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-497] Validating: Entity approaching expiry should be identifiable according to implemented lifecycle rules");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-498
  // Excel Scenario: Verify expiring-soon indication remains consistent across system views
  // Excel Expected Result: Expiring-soon indication should remain consistent across available views
  test("Case ID:CLM-TC-498 - Expiring Soon → expiring-soon indication remains consistent across system views", async ({ testData }) => {
    await test.step("[CLM-TC-498] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-498] Executing Excel test steps: 1.Open Entity Grid 2.Open Entity Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Nearing Expiry");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-498] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-498] Validating: Expiring-soon indication should remain consistent across available views");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-499
  // Excel Scenario: Verify expiring-soon entities remain available for governance review
  // Excel Expected Result: Entity should remain fully accessible before expiry occurs
  test("Case ID:CLM-TC-499 - Expiring Soon → expiring-soon entities remain available for governance review", async ({ testData }) => {
    await test.step("[CLM-TC-499] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-499] Executing Excel test steps: 1.Open entity information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Nearing Expiry");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-499] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-499] Validating: Entity should remain fully accessible before expiry occurs");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-500
  // Excel Scenario: Verify lifecycle monitoring information updates appropriately as entity approaches expiry
  // Excel Expected Result: Lifecycle information should accurately reflect progression toward expiry
  test("Case ID:CLM-TC-500 - Expiring Soon → lifecycle monitoring information updates appropriately as entity approaches expiry", async ({ testData }) => {
    await test.step("[CLM-TC-500] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-500] Executing Excel test steps: 1.Review lifecycle information over time");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Nearing Expiry");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-500] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-500] Validating: Lifecycle information should accurately reflect progression toward expiry");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-501
  // Excel Scenario: Verify expiring-soon information supports operational review and remediation activities
  // Excel Expected Result: System should provide sufficient visibility to identify entities approaching expiry
  test("Case ID:CLM-TC-501 - Expiring Soon → expiring-soon information supports operational review and remediation activities", async ({ testData }) => {
    await test.step("[CLM-TC-501] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-501] Executing Excel test steps: 1.Review expiring entities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-501] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-501] Validating: System should provide sufficient visibility to identify entities approaching expiry");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expired Status", () => {
  // Excel Test Case ID: CLM-TC-502
  // Excel Scenario: Verify expired entities display appropriate lifecycle status
  // Excel Expected Result: Expired entity should display appropriate expired lifecycle status
  test("Case ID:CLM-TC-502 - Expired Status → expired entities display appropriate lifecycle status", async ({ testData }) => {
    await test.step("[CLM-TC-502] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-502] Executing Excel test steps: 1.Open Entity Grid 2.Review Status column");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-502] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-502] Validating: Expired entity should display appropriate expired lifecycle status");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-503
  // Excel Scenario: Verify expired entities remain distinguishable from active entities
  // Excel Expected Result: Expired entities should be clearly distinguishable from active entities
  test("Case ID:CLM-TC-503 - Expired Status → expired entities remain distinguishable from active entities", async ({ testData }) => {
    await test.step("[CLM-TC-503] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-503] Executing Excel test steps: 1.Review entity inventory");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-503] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-503] Validating: Expired entities should be clearly distinguishable from active entities");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-504
  // Excel Scenario: Verify expired status remains consistent after page refresh and navigation
  // Excel Expected Result: Expired status should remain unchanged and accurate
  test("Case ID:CLM-TC-504 - Expired Status → expired status remains consistent after page refresh and navigation", async ({ testData }) => {
    await test.step("[CLM-TC-504] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-504] Executing Excel test steps: 1.Open entity 2.Refresh page 3.Reopen entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-504] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-504] Validating: Expired status should remain unchanged and accurate");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-505
  // Excel Scenario: Verify expired entities preserve onboarding and governance information
  // Excel Expected Result: Onboarding, governance and audit information should remain available
  test("Case ID:CLM-TC-505 - Expired Status → expired entities preserve onboarding and governance information", async ({ testData }) => {
    await test.step("[CLM-TC-505] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-505] Executing Excel test steps: 1.Open Entity Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-505] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-505] Validating: Onboarding, governance and audit information should remain available");
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-506
  // Excel Scenario: Verify expired status supports lifecycle governance and compliance review
  // Excel Expected Result: Expired entity should remain traceable for governance and compliance purposes
  test("Case ID:CLM-TC-506 - Expired Status → expired status supports lifecycle governance and compliance review", async ({ testData }) => {
    await test.step("[CLM-TC-506] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-506] Executing Excel test steps: 1.Review entity lifecycle information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-506] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-506] Validating: Expired entity should remain traceable for governance and compliance purposes");
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Screening Exclusion", () => {
  // Excel Test Case ID: CLM-TC-507
  // Excel Scenario: Verify expired entities follow configured screening participation rules
  // Excel Expected Result: Entity should participate or be excluded from screening according to configured lifecycle rules
  test("Case ID:CLM-TC-507 - Screening Exclusion → expired entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-507] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-507] Executing Excel test steps: 1.Review entity lifecycle state 2.Validate screening participation behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-507] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-507] Validating: Entity should participate or be excluded from screening according to configured lifecycle rules");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-508
  // Excel Scenario: Verify active entities continue to participate in screening operations
  // Excel Expected Result: Active entities should remain available for screening operations
  test("Case ID:CLM-TC-508 - Screening Exclusion → active entities continue to participate in screening operations", async ({ testData }) => {
    await test.step("[CLM-TC-508] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-508] Executing Excel test steps: 1.Review active entity status");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Active Entity");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-508] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-508] Validating: Active entities should remain available for screening operations");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-509
  // Excel Scenario: Verify lifecycle state changes are reflected in screening eligibility behavior
  // Excel Expected Result: Screening eligibility should remain aligned with lifecycle status
  test("Case ID:CLM-TC-509 - Screening Exclusion → lifecycle state changes are reflected in screening eligibility behavior", async ({ testData }) => {
    await test.step("[CLM-TC-509] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-509] Executing Excel test steps: 1.Change lifecycle state according to configured process 2.Review screening behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Lifecycle Dataset");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-509] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-509] Validating: Screening eligibility should remain aligned with lifecycle status");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-510
  // Excel Scenario: Verify expired entities remain visible for investigation even when screening eligibility changes
  // Excel Expected Result: Entity should remain accessible for investigation and review activities
  test("Case ID:CLM-TC-510 - Screening Exclusion → expired entities remain visible for investigation even when screening eligibility changes", async ({ testData }) => {
    await test.step("[CLM-TC-510] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-510] Executing Excel test steps: 1.Open Entity Details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Expired Entity");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-510] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-510] Validating: Entity should remain accessible for investigation and review activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-511
  // Excel Scenario: Verify screening eligibility behavior remains consistent across entity inventory
  // Excel Expected Result: Screening participation behavior should remain consistent for entities in similar lifecycle states
  test("Case ID:CLM-TC-511 - Screening Exclusion → screening eligibility behavior remains consistent across entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-511] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-511] Executing Excel test steps: 1.Review entity lifecycle states");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Dataset");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-511] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-511] Validating: Screening participation behavior should remain consistent for entities in similar lifecycle states");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-512
  // Excel Scenario: Verify lifecycle-driven screening behavior supports AML governance requirements
  // Excel Expected Result: Entity lifecycle state should govern screening participation in a traceable and auditable manner
  test("Case ID:CLM-TC-512 - Screening Exclusion → lifecycle-driven screening behavior supports AML governance requirements", async ({ testData }) => {
    await test.step("[CLM-TC-512] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-512] Executing Excel test steps: 1.Review lifecycle and screening behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Governance Dataset");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-512] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-512] Validating: Entity lifecycle state should govern screening participation in a traceable and auditable manner");
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Fuzzy Matching", () => {
  // Excel Test Case ID: CLM-TC-513
  // Excel Scenario: Verify Fuzzy Matching configuration is available during custom list setup
  // Excel Expected Result: Fuzzy Matching configuration option should be displayed and available for selection
  test("Case ID:CLM-TC-513 - Fuzzy Matching → Fuzzy Matching configuration is available during custom list setup", async ({ testData }) => {
    await test.step("[CLM-TC-513] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-513] Executing Excel test steps: 1.Open Create/Edit Custom List screen 2.Review Matching Configuration section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-513] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-513] Validating: Fuzzy Matching configuration option should be displayed and available for selection");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-514
  // Excel Scenario: Verify selected Fuzzy Matching configuration is retained after list creation
  // Excel Expected Result: Fuzzy Matching configuration should remain saved and visible in list details
  test("Case ID:CLM-TC-514 - Fuzzy Matching → selected Fuzzy Matching configuration is retained after list creation", async ({ testData }) => {
    await test.step("[CLM-TC-514] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-514] Executing Excel test steps: 1.Enable Fuzzy Matching 2.Submit list 3.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Fuzzy");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-514] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-514] Validating: Fuzzy Matching configuration should remain saved and visible in list details");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-515
  // Excel Scenario: Verify selected Fuzzy Matching configuration is retained after list modification
  // Excel Expected Result: Fuzzy Matching configuration should remain accurate after approved updates
  test("Case ID:CLM-TC-515 - Fuzzy Matching → selected Fuzzy Matching configuration is retained after list modification", async ({ testData }) => {
    await test.step("[CLM-TC-515] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-515] Executing Excel test steps: 1.Modify list 2.Save changes 3.Review configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-515] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-515] Validating: Fuzzy Matching configuration should remain accurate after approved updates");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-516
  // Excel Scenario: Verify entities belonging to fuzzy-enabled list participate in screening using configured matching behavior
  // Excel Expected Result: Entities should participate in screening according to configured fuzzy matching settings
  test("Case ID:CLM-TC-516 - Fuzzy Matching → entities belonging to fuzzy-enabled list participate in screening using configured matching behavior", async ({ testData }) => {
    await test.step("[CLM-TC-516] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-516] Executing Excel test steps: 1.Configure Fuzzy Matching 2.Complete onboarding workflow 3.Review screening behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-516] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-516] Validating: Entities should participate in screening according to configured fuzzy matching settings");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-517
  // Excel Scenario: Verify similar-name screening scenarios are processed according to configured fuzzy matching settings
  // Excel Expected Result: Screening results should reflect configured fuzzy matching behavior
  test("Case ID:CLM-TC-517 - Fuzzy Matching → similar-name screening scenarios are processed according to configured fuzzy matching settings", async ({ testData }) => {
    await test.step("[CLM-TC-517] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-517] Executing Excel test steps: 1.Configure Fuzzy Matching 2.Process screening scenario containing similar names");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-517] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-517] Validating: Screening results should reflect configured fuzzy matching behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-518
  // Excel Scenario: Verify fuzzy matching configuration remains associated with correct custom list
  // Excel Expected Result: Each list should retain its own matching configuration independently
  test("Case ID:CLM-TC-518 - Fuzzy Matching → fuzzy matching configuration remains associated with correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-518] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-518] Executing Excel test steps: 1.Configure different matching settings 2.Review list configurations");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-518] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-518] Validating: Each list should retain its own matching configuration independently");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-519
  // Excel Scenario: Verify fuzzy matching configuration remains intact after entity onboarding activities
  // Excel Expected Result: Matching configuration should remain unchanged after onboarding activities
  test("Case ID:CLM-TC-519 - Fuzzy Matching → fuzzy matching configuration remains intact after entity onboarding activities", async ({ testData }) => {
    await test.step("[CLM-TC-519] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-519] Executing Excel test steps: 1.Onboard entities 2.Review matching configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-519] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-519] Validating: Matching configuration should remain unchanged after onboarding activities");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-520
  // Excel Scenario: Verify fuzzy matching configuration remains visible in governance and audit records where applicable
  // Excel Expected Result: Matching configuration changes should remain traceable through available governance records
  test("Case ID:CLM-TC-520 - Fuzzy Matching → fuzzy matching configuration remains visible in governance and audit records where applicable", async ({ testData }) => {
    await test.step("[CLM-TC-520] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-520] Executing Excel test steps: 1.Modify matching configuration 2.Review governance records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-520] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-520] Validating: Matching configuration changes should remain traceable through available governance records");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-521
  // Excel Scenario: Verify fuzzy matching behavior remains consistent across repeated screening executions
  // Excel Expected Result: Screening behavior should remain consistent for equivalent matching scenarios
  test("Case ID:CLM-TC-521 - Fuzzy Matching → fuzzy matching behavior remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-521] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-521] Executing Excel test steps: 1.Perform repeated screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-521] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-521] Validating: Screening behavior should remain consistent for equivalent matching scenarios");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-522
  // Excel Scenario: Verify fuzzy matching configuration supports AML screening objectives
  // Excel Expected Result: Fuzzy matching configuration should support effective screening of similar entity names
  test("Case ID:CLM-TC-522 - Fuzzy Matching → fuzzy matching configuration supports AML screening objectives", async ({ testData }) => {
    await test.step("[CLM-TC-522] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-522] Executing Excel test steps: 1.Review matching behavior across screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Jon Smith");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-522] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-522] Validating: Fuzzy matching configuration should support effective screening of similar entity names");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Multilingual Matching", () => {
  // Excel Test Case ID: CLM-TC-523
  // Excel Scenario: Verify Multilingual Matching configuration is available during custom list setup
  // Excel Expected Result: Multilingual Matching configuration should be displayed and available for selection
  test("Case ID:CLM-TC-523 - Multilingual Matching → Multilingual Matching configuration is available during custom list setup", async ({ testData }) => {
    await test.step("[CLM-TC-523] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-523] Executing Excel test steps: 1.Open Create/Edit Custom List screen 2.Review Matching Configuration section");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-523] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-523] Validating: Multilingual Matching configuration should be displayed and available for selection");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-524
  // Excel Scenario: Verify selected Multilingual Matching configuration is retained after list creation
  // Excel Expected Result: Multilingual Matching configuration should remain saved successfully
  test("Case ID:CLM-TC-524 - Multilingual Matching → selected Multilingual Matching configuration is retained after list creation", async ({ testData }) => {
    await test.step("[CLM-TC-524] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-524] Executing Excel test steps: 1.Enable Multilingual Matching 2.Submit list 3.Review list configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-524] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-524] Validating: Multilingual Matching configuration should remain saved successfully");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-525
  // Excel Scenario: Verify selected Multilingual Matching configuration is retained after list modification
  // Excel Expected Result: Multilingual Matching configuration should remain accurate after updates
  test("Case ID:CLM-TC-525 - Multilingual Matching → selected Multilingual Matching configuration is retained after list modification", async ({ testData }) => {
    await test.step("[CLM-TC-525] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-525] Executing Excel test steps: 1.Modify configuration 2.Save changes 3.Review settings");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-525] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-525] Validating: Multilingual Matching configuration should remain accurate after updates");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-526
  // Excel Scenario: Verify multilingual-enabled lists participate in screening using configured matching behavior
  // Excel Expected Result: Screening activity should apply configured multilingual matching behavior
  test("Case ID:CLM-TC-526 - Multilingual Matching → multilingual-enabled lists participate in screening using configured matching behavior", async ({ testData }) => {
    await test.step("[CLM-TC-526] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-526] Executing Excel test steps: 1.Enable Multilingual Matching 2.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-526] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-526] Validating: Screening activity should apply configured multilingual matching behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-527
  // Excel Scenario: Verify multilingual entity information can participate in configured screening workflow
  // Excel Expected Result: Multilingual entity information should participate in screening according to configured behavior
  test("Case ID:CLM-TC-527 - Multilingual Matching → multilingual entity information can participate in configured screening workflow", async ({ testData }) => {
    await test.step("[CLM-TC-527] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-527] Executing Excel test steps: 1.Onboard multilingual entity information 2.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-527] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-527] Validating: Multilingual entity information should participate in screening according to configured behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-528
  // Excel Scenario: Verify multilingual matching configuration remains associated with the correct custom list
  // Excel Expected Result: Each custom list should maintain independent multilingual matching settings
  test("Case ID:CLM-TC-528 - Multilingual Matching → multilingual matching configuration remains associated with the correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-528] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-528] Executing Excel test steps: 1.Configure different matching settings 2.Review list configurations");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-528] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-528] Validating: Each custom list should maintain independent multilingual matching settings");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-529
  // Excel Scenario: Verify multilingual matching configuration changes remain traceable through governance workflow
  // Excel Expected Result: Configuration changes should remain traceable through available governance records
  test("Case ID:CLM-TC-529 - Multilingual Matching → multilingual matching configuration changes remain traceable through governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-529] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-529] Executing Excel test steps: 1.Modify multilingual setting 2.Review governance records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-529] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-529] Validating: Configuration changes should remain traceable through available governance records");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-530
  // Excel Scenario: Verify multilingual matching configuration supports AML screening requirements
  // Excel Expected Result: Multilingual matching capability should support screening of multilingual entity information
  test("Case ID:CLM-TC-530 - Multilingual Matching → multilingual matching configuration supports AML screening requirements", async ({ testData }) => {
    await test.step("[CLM-TC-530] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-530] Executing Excel test steps: 1.Review multilingual screening behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-530] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-530] Validating: Multilingual matching capability should support screening of multilingual entity information");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Name Matching", () => {
  // Excel Test Case ID: CLM-TC-531
  // Excel Scenario: Verify onboarded entity names are available for screening activities
  // Excel Expected Result: Onboarded entity names should be available for screening operations
  test("Case ID:CLM-TC-531 - Name Matching → onboarded entity names are available for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-531] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-531] Executing Excel test steps: 1.Open approved entities 2.Review screening participation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-531] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-531] Validating: Onboarded entity names should be available for screening operations");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-532
  // Excel Scenario: Verify primary entity name participates in configured matching workflow
  // Excel Expected Result: Primary entity name should participate in configured matching workflow
  test("Case ID:CLM-TC-532 - Name Matching → primary entity name participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-532] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-532] Executing Excel test steps: 1.Perform screening activity using onboarded entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-532] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-532] Validating: Primary entity name should participate in configured matching workflow");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-533
  // Excel Scenario: Verify alternate names or aliases participate in configured matching workflow where available
  // Excel Expected Result: Alias information should participate in screening according to configured behavior
  test("Case ID:CLM-TC-533 - Name Matching → alternate names or aliases participate in configured matching workflow where available", async ({ testData }) => {
    await test.step("[CLM-TC-533] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-533] Executing Excel test steps: 1.Perform screening activity using alias information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-533] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-533] Validating: Alias information should participate in screening according to configured behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-534
  // Excel Scenario: Verify modified entity names are reflected in subsequent screening activities
  // Excel Expected Result: Latest approved entity name should be used during screening activities
  test("Case ID:CLM-TC-534 - Name Matching → modified entity names are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-534] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-534] Executing Excel test steps: 1.Modify entity name 2.Approve update 3.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-534] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-534] Validating: Latest approved entity name should be used during screening activities");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-535
  // Excel Scenario: Verify disabled entities follow configured screening participation rules
  // Excel Expected Result: Entity should participate or be excluded according to configured lifecycle rules
  test("Case ID:CLM-TC-535 - Name Matching → disabled entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-535] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-535] Executing Excel test steps: 1.Disable entity through governance workflow 2.Review screening behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-535] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-535] Validating: Entity should participate or be excluded according to configured lifecycle rules");
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-536
  // Excel Scenario: Verify expired entities follow configured screening participation rules
  // Excel Expected Result: Entity screening participation should align with configured lifecycle behavior
  test("Case ID:CLM-TC-536 - Name Matching → expired entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-536] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-536] Executing Excel test steps: 1.Review screening behavior for expired entity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-536] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-536] Validating: Entity screening participation should align with configured lifecycle behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-537
  // Excel Scenario: Verify entity onboarding through bulk upload contributes to screening population
  // Excel Expected Result: Bulk-onboarded entities should participate in screening according to configured rules
  test("Case ID:CLM-TC-537 - Name Matching → entity onboarding through bulk upload contributes to screening population", async ({ testData }) => {
    await test.step("[CLM-TC-537] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-537] Executing Excel test steps: 1.Complete bulk onboarding workflow 2.Review screening participation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-537] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-537] Validating: Bulk-onboarded entities should participate in screening according to configured rules");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-538
  // Excel Scenario: Verify entity onboarding through manual workflow contributes to screening population
  // Excel Expected Result: Manually onboarded entities should participate in screening according to configured rules
  test("Case ID:CLM-TC-538 - Name Matching → entity onboarding through manual workflow contributes to screening population", async ({ testData }) => {
    await test.step("[CLM-TC-538] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-538] Executing Excel test steps: 1.Create entity manually 2.Review screening participation");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-538] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-538] Validating: Manually onboarded entities should participate in screening according to configured rules");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-539
  // Excel Scenario: Verify screening behavior remains consistent across repeated executions
  // Excel Expected Result: Equivalent screening scenarios should produce consistent matching behavior
  test("Case ID:CLM-TC-539 - Name Matching → screening behavior remains consistent across repeated executions", async ({ testData }) => {
    await test.step("[CLM-TC-539] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-539] Executing Excel test steps: 1.Perform repeated screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-539] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-539] Validating: Equivalent screening scenarios should produce consistent matching behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-540
  // Excel Scenario: Verify name matching functionality supports AML screening and watchlist management objectives
  // Excel Expected Result: Name matching functionality should support effective screening and watchlist management activities
  test("Case ID:CLM-TC-540 - Name Matching → name matching functionality supports AML screening and watchlist management objectives", async ({ testData }) => {
    await test.step("[CLM-TC-540] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-540] Executing Excel test steps: 1.Review screening participation and matching behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-540] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-540] Validating: Name matching functionality should support effective screening and watchlist management activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Alias Matching", () => {
  // Excel Test Case ID: CLM-TC-541
  // Excel Scenario: Verify alias information captured during entity onboarding is retained for screening activities
  // Excel Expected Result: Alias information should remain available and associated with the correct entity
  test("Case ID:CLM-TC-541 - Alias Matching → alias information captured during entity onboarding is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-541] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-541] Executing Excel test steps: 1.Create entity with alias values 2.Complete approval workflow 3.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-541] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-541] Validating: Alias information should remain available and associated with the correct entity");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-542
  // Excel Scenario: Verify alias information participates in configured screening workflow
  // Excel Expected Result: Alias information should participate in screening according to configured matching behavior
  test("Case ID:CLM-TC-542 - Alias Matching → alias information participates in configured screening workflow", async ({ testData }) => {
    await test.step("[CLM-TC-542] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-542] Executing Excel test steps: 1.Onboard entity with alias 2.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-542] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-542] Validating: Alias information should participate in screening according to configured matching behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-543
  // Excel Scenario: Verify multiple aliases are available for screening when supported
  // Excel Expected Result: Available aliases should participate in matching workflow according to implementation
  test("Case ID:CLM-TC-543 - Alias Matching → multiple aliases are available for screening when supported", async ({ testData }) => {
    await test.step("[CLM-TC-543] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-543] Executing Excel test steps: 1.Create entity with multiple aliases 2.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-543] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-543] Validating: Available aliases should participate in matching workflow according to implementation");
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-544
  // Excel Scenario: Verify alias modifications are reflected in subsequent screening activities
  // Excel Expected Result: Latest approved alias information should be available for matching
  test("Case ID:CLM-TC-544 - Alias Matching → alias modifications are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-544] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-544] Executing Excel test steps: 1.Modify alias information 2.Approve update 3.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-544] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-544] Validating: Latest approved alias information should be available for matching");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-545
  // Excel Scenario: Verify alias information onboarded through bulk upload participates in screening
  // Excel Expected Result: Alias information should be available for screening after onboarding
  test("Case ID:CLM-TC-545 - Alias Matching → alias information onboarded through bulk upload participates in screening", async ({ testData }) => {
    await test.step("[CLM-TC-545] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-545] Executing Excel test steps: 1.Upload entity containing alias data 2.Complete onboarding workflow");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-545] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-545] Validating: Alias information should be available for screening after onboarding");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-546
  // Excel Scenario: Verify disabled entities follow configured alias matching participation rules
  // Excel Expected Result: Alias matching participation should align with configured lifecycle behavior
  test("Case ID:CLM-TC-546 - Alias Matching → disabled entities follow configured alias matching participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-546] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-546] Executing Excel test steps: 1.Disable entity 2.Review matching behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-546] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-546] Validating: Alias matching participation should align with configured lifecycle behavior");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-547
  // Excel Scenario: Verify alias matching behavior remains consistent across repeated screening executions
  // Excel Expected Result: Equivalent screening scenarios should produce consistent matching behavior
  test("Case ID:CLM-TC-547 - Alias Matching → alias matching behavior remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-547] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-547] Executing Excel test steps: 1.Perform repeated screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-547] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-547] Validating: Equivalent screening scenarios should produce consistent matching behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-548
  // Excel Scenario: Verify alias matching supports AML screening and watchlist investigation requirements
  // Excel Expected Result: Alias matching should support identification of alternate identities during screening
  test("Case ID:CLM-TC-548 - Alias Matching → alias matching supports AML screening and watchlist investigation requirements", async ({ testData }) => {
    await test.step("[CLM-TC-548] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-548] Executing Excel test steps: 1.Review screening participation using aliases");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-548] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-548] Validating: Alias matching should support identification of alternate identities during screening");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Digital Identifier Matching", () => {
  // Excel Test Case ID: CLM-TC-549
  // Excel Scenario: Verify onboarded email identifiers are retained for screening activities
  // Excel Expected Result: Email identifier should remain available for screening activities
  test("Case ID:CLM-TC-549 - Digital Identifier Matching → onboarded email identifiers are retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-549] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-549] Executing Excel test steps: 1.Onboard entity with email 2.Open entity details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-549] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-549] Validating: Email identifier should remain available for screening activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-550
  // Excel Scenario: Verify email identifiers participate in configured matching workflow
  // Excel Expected Result: Email identifier should participate in matching according to configured behavior
  test("Case ID:CLM-TC-550 - Digital Identifier Matching → email identifiers participate in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-550] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-550] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-550] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-550] Validating: Email identifier should participate in matching according to configured behavior");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-551
  // Excel Scenario: Verify onboarded mobile identifiers are retained for screening activities
  // Excel Expected Result: Mobile identifier should remain available for screening activities
  test("Case ID:CLM-TC-551 - Digital Identifier Matching → onboarded mobile identifiers are retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-551] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-551] Executing Excel test steps: 1.Onboard entity with mobile number");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-551] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-551] Validating: Mobile identifier should remain available for screening activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-552
  // Excel Scenario: Verify mobile identifiers participate in configured matching workflow
  // Excel Expected Result: Mobile identifier should participate in matching according to configured behavior
  test("Case ID:CLM-TC-552 - Digital Identifier Matching → mobile identifiers participate in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-552] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-552] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-552] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-552] Validating: Mobile identifier should participate in matching according to configured behavior");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-553
  // Excel Scenario: Verify onboarded IP Address information is retained for screening activities
  // Excel Expected Result: IP Address information should remain available for screening activities
  test("Case ID:CLM-TC-553 - Digital Identifier Matching → onboarded IP Address information is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-553] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-553] Executing Excel test steps: 1.Onboard entity with IP Address");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-553] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-553] Validating: IP Address information should remain available for screening activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-554
  // Excel Scenario: Verify IP Address participates in configured matching workflow
  // Excel Expected Result: IP Address should participate in matching according to configured behavior
  test("Case ID:CLM-TC-554 - Digital Identifier Matching → IP Address participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-554] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-554] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-554] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-554] Validating: IP Address should participate in matching according to configured behavior");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-555
  // Excel Scenario: Verify onboarded Device Identifier information is retained for screening activities
  // Excel Expected Result: Device Identifier should remain available for screening activities
  test("Case ID:CLM-TC-555 - Digital Identifier Matching → onboarded Device Identifier information is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-555] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-555] Executing Excel test steps: 1.Onboard entity with Device ID");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-555] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-555] Validating: Device Identifier should remain available for screening activities");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-556
  // Excel Scenario: Verify Device Identifier participates in configured matching workflow
  // Excel Expected Result: Device Identifier should participate in matching according to configured behavior
  test("Case ID:CLM-TC-556 - Digital Identifier Matching → Device Identifier participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-556] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-556] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-556] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-556] Validating: Device Identifier should participate in matching according to configured behavior");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-557
  // Excel Scenario: Verify multiple digital identifiers can participate in screening for the same entity
  // Excel Expected Result: Available digital identifiers should participate in screening according to implementation
  test("Case ID:CLM-TC-557 - Digital Identifier Matching → multiple digital identifiers can participate in screening for the same entity", async ({ testData }) => {
    await test.step("[CLM-TC-557] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-557] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-557] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-557] Validating: Available digital identifiers should participate in screening according to implementation");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-558
  // Excel Scenario: Verify updated digital identifiers are reflected in subsequent screening activities
  // Excel Expected Result: Latest approved digital identifiers should be used during screening
  test("Case ID:CLM-TC-558 - Digital Identifier Matching → updated digital identifiers are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-558] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-558] Executing Excel test steps: 1.Modify digital identifier information 2.Approve update 3.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-558] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-558] Validating: Latest approved digital identifiers should be used during screening");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-559
  // Excel Scenario: Verify digital identifier matching remains consistent across onboarding methods
  // Excel Expected Result: Digital identifier matching behavior should remain consistent regardless of onboarding source
  test("Case ID:CLM-TC-559 - Digital Identifier Matching → digital identifier matching remains consistent across onboarding methods", async ({ testData }) => {
    await test.step("[CLM-TC-559] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-559] Executing Excel test steps: 1.Perform screening activity across onboarding methods");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-559] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-559] Validating: Digital identifier matching behavior should remain consistent regardless of onboarding source");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-560
  // Excel Scenario: Verify digital identifier matching supports AML investigation and screening objectives
  // Excel Expected Result: Digital identifier matching should support identification of entities beyond traditional name matching
  test("Case ID:CLM-TC-560 - Digital Identifier Matching → digital identifier matching supports AML investigation and screening objectives", async ({ testData }) => {
    await test.step("[CLM-TC-560] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-560] Executing Excel test steps: 1.Review screening participation using digital identifiers");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-560] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-560] Validating: Digital identifier matching should support identification of entities beyond traditional name matching");
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Action On Hit Behaviour", () => {
  // Excel Test Case ID: CLM-TC-561
  // Excel Scenario: Verify Action On Hit configuration selected during list creation is retained
  // Excel Expected Result: Configured Action On Hit value should remain saved successfully
  test("Case ID:CLM-TC-561 - Action On Hit Behaviour → Action On Hit configuration selected during list creation is retained", async ({ testData }) => {
    await test.step("[CLM-TC-561] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-561] Executing Excel test steps: 1.Create custom list 2.Open list details");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Configured Action On Hit List");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-561] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-561] Validating: Configured Action On Hit value should remain saved successfully");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-562
  // Excel Scenario: Verify Action On Hit configuration remains unchanged after governance approval workflow
  // Excel Expected Result: Action On Hit configuration should remain accurate after approval
  test("Case ID:CLM-TC-562 - Action On Hit Behaviour → Action On Hit configuration remains unchanged after governance approval workflow", async ({ testData }) => {
    await test.step("[CLM-TC-562] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-562] Executing Excel test steps: 1.Modify list 2.Complete approval workflow 3.Review configuration");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Updated List Configuration");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-562] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-562] Validating: Action On Hit configuration should remain accurate after approval");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-563
  // Excel Scenario: Verify configured Action On Hit behavior is available during screening execution
  // Excel Expected Result: Screening process should utilize configured Action On Hit settings
  test("Case ID:CLM-TC-563 - Action On Hit Behaviour → configured Action On Hit behavior is available during screening execution", async ({ testData }) => {
    await test.step("[CLM-TC-563] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-563] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Dataset");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-563] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-563] Validating: Screening process should utilize configured Action On Hit settings");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-564
  // Excel Scenario: Verify screening hits are processed according to configured Action On Hit behavior
  // Excel Expected Result: Hit processing should follow configured Action On Hit behavior
  test("Case ID:CLM-TC-564 - Action On Hit Behaviour → screening hits are processed according to configured Action On Hit behavior", async ({ testData }) => {
    await test.step("[CLM-TC-564] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-564] Executing Excel test steps: 1.Perform screening activity generating a hit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Hit Dataset");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-564] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-564] Validating: Hit processing should follow configured Action On Hit behavior");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-565
  // Excel Scenario: Verify Action On Hit configuration remains associated with the correct custom list
  // Excel Expected Result: Each custom list should retain its own configured response behavior
  test("Case ID:CLM-TC-565 - Action On Hit Behaviour → Action On Hit configuration remains associated with the correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-565] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-565] Executing Excel test steps: 1.Configure different Action On Hit settings 2.Review behavior");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Multiple Custom Lists");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-565] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-565] Validating: Each custom list should retain its own configured response behavior");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-566
  // Excel Scenario: Verify Action On Hit configuration changes are traceable through governance workflow
  // Excel Expected Result: Configuration changes should remain traceable through governance records
  test("Case ID:CLM-TC-566 - Action On Hit Behaviour → Action On Hit configuration changes are traceable through governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-566] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-566] Executing Excel test steps: 1.Modify Action On Hit setting 2.Review governance records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Configuration Update Request");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-566] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-566] Validating: Configuration changes should remain traceable through governance records");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-567
  // Excel Scenario: Verify screening response behavior remains consistent across repeated executions
  // Excel Expected Result: Equivalent screening scenarios should result in consistent behavior
  test("Case ID:CLM-TC-567 - Action On Hit Behaviour → screening response behavior remains consistent across repeated executions", async ({ testData }) => {
    await test.step("[CLM-TC-567] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-567] Executing Excel test steps: 1.Perform repeated screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Dataset");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-567] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-567] Validating: Equivalent screening scenarios should result in consistent behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-568
  // Excel Scenario: Verify Action On Hit configuration supports AML screening governance requirements
  // Excel Expected Result: Configured response behavior should support AML screening governance objectives
  test("Case ID:CLM-TC-568 - Action On Hit Behaviour → Action On Hit configuration supports AML screening governance requirements", async ({ testData }) => {
    await test.step("[CLM-TC-568] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-568] Executing Excel test steps: 1.Review screening hit processing");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Dataset");
    // TODO: Action-on-hit behaviour — verify "Alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-568] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-568] Validating: Configured response behavior should support AML screening governance objectives");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Alert Generation", () => {
  // Excel Test Case ID: CLM-TC-569
  // Excel Scenario: Verify screening activity can generate alerts according to configured screening behavior
  // Excel Expected Result: Alerts should be generated according to configured screening behavior
  test("Case ID:CLM-TC-569 - Alert Generation → screening activity can generate alerts according to configured screening behavior", async ({ testData }) => {
    await test.step("[CLM-TC-569] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-569] Executing Excel test steps: 1.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-569] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-569] Validating: Alerts should be generated according to configured screening behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-570
  // Excel Scenario: Verify generated alert remains associated with the correct entity
  // Excel Expected Result: Alert should remain linked to the correct entity
  test("Case ID:CLM-TC-570 - Alert Generation → generated alert remains associated with the correct entity", async ({ testData }) => {
    await test.step("[CLM-TC-570] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-570] Executing Excel test steps: 1.Open generated alert");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Entity Screening Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-570] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-570] Validating: Alert should remain linked to the correct entity");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-571
  // Excel Scenario: Verify generated alert remains associated with the originating custom list
  // Excel Expected Result: Alert should identify the originating custom list
  test("Case ID:CLM-TC-571 - Alert Generation → generated alert remains associated with the originating custom list", async ({ testData }) => {
    await test.step("[CLM-TC-571] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-571] Executing Excel test steps: 1.Review alert information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Custom List Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-571] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-571] Validating: Alert should identify the originating custom list");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-572
  // Excel Scenario: Verify alert information remains available after screening execution completes
  // Excel Expected Result: Generated alert should remain accessible after screening execution
  test("Case ID:CLM-TC-572 - Alert Generation → alert information remains available after screening execution completes", async ({ testData }) => {
    await test.step("[CLM-TC-572] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-572] Executing Excel test steps: 1.Complete screening activity 2.Review alert information");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Generated Alert");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-572] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-572] Validating: Generated alert should remain accessible after screening execution");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-573
  // Excel Scenario: Verify generated alert contains sufficient information for investigation activities
  // Excel Expected Result: Alert should provide sufficient contextual information for investigation
  test("Case ID:CLM-TC-573 - Alert Generation → generated alert contains sufficient information for investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-573] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-573] Executing Excel test steps: 1.Open generated alert");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Generated Alert");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-573] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-573] Validating: Alert should provide sufficient contextual information for investigation");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-574
  // Excel Scenario: Verify alert generation remains consistent across repeated screening executions
  // Excel Expected Result: Equivalent screening scenarios should produce consistent alert behavior
  test("Case ID:CLM-TC-574 - Alert Generation → alert generation remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-574] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-574] Executing Excel test steps: 1.Perform repeated screening activities");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-574] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-574] Validating: Equivalent screening scenarios should produce consistent alert behavior");
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-575
  // Excel Scenario: Verify generated alerts remain traceable through governance and audit workflows
  // Excel Expected Result: Alert activity should remain traceable through available governance mechanisms
  test("Case ID:CLM-TC-575 - Alert Generation → generated alerts remain traceable through governance and audit workflows", async ({ testData }) => {
    await test.step("[CLM-TC-575] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-575] Executing Excel test steps: 1.Review alert and audit records");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Generated Alert");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-575] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-575] Validating: Alert activity should remain traceable through available governance mechanisms");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-576
  // Excel Scenario: Verify alert generation behavior remains aligned with configured Action On Hit settings
  // Excel Expected Result: Generated alert behavior should align with configured Action On Hit settings
  test("Case ID:CLM-TC-576 - Alert Generation → alert generation behavior remains aligned with configured Action On Hit settings", async ({ testData }) => {
    await test.step("[CLM-TC-576] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-576] Executing Excel test steps: 1.Perform screening activity generating hit");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Screening Hit Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-576] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-576] Validating: Generated alert behavior should align with configured Action On Hit settings");
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-577
  // Excel Scenario: Verify generated alerts remain associated with approved entity information
  // Excel Expected Result: Generated alerts should reflect current approved entity information
  test("Case ID:CLM-TC-577 - Alert Generation → generated alerts remain associated with approved entity information", async ({ testData }) => {
    await test.step("[CLM-TC-577] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-577] Executing Excel test steps: 1.Modify entity 2.Approve update 3.Perform screening activity");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Updated Entity Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-577] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-577] Validating: Generated alerts should reflect current approved entity information");
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-578
  // Excel Scenario: Verify alert generation supports AML screening, monitoring and investigation objectives
  // Excel Expected Result: Alert generation should support AML monitoring, investigation and risk management activities
  test("Case ID:CLM-TC-578 - Alert Generation → alert generation supports AML screening, monitoring and investigation objectives", async ({ testData }) => {
    await test.step("[CLM-TC-578] Navigate and execute documented test steps", async () => {
      console.log("[CLM-TC-578] Executing Excel test steps: 1.Perform screening activity 2.Review generated alerts");
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("AML Screening Dataset");
    await clmPage.triggerScreeningHit("Test Entity Alpha");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-578] Validate expected results from Excel", async () => {
      console.log("[CLM-TC-578] Validating: Alert generation should support AML monitoring, investigation and risk management activities");
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });
});
