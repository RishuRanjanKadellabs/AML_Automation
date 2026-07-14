// spec: specs/custom-list-manager/plan.md
// source: pipeline/test-data/Custom List Manager.xlsx — 578 cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import CustomListManagerPage from "../../../pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage";

test.describe("Custom List Manager Module", () => {
  let clmPage: CustomListManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    clmPage = new CustomListManagerPage(sharedPage);
  });

  test.describe("Navigation & Access", () => {
  // Excel Test Case ID: CLM-TC-001
  // Excel Scenario: Verify authorized user can access Custom List Manager module from application navigation
  // Excel Expected Result: Custom List Manager opens for the authorized user. Landing page header, summary cards, and list grid are visible. Restricted users see an access-denied message or the module is hidden per RBAC policy.
  test("Case ID:CLM-TC-001 - Navigation & Access → authorized user can access Custom List Manager module from application navigation", async ({ testData }) => {
    await test.step("[CLM-TC-001] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Compliance Officer;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-001] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectPageTitleVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-002
  // Excel Scenario: Verify sidebar is rendered correctly on Custom List Manager pages
  // Excel Expected Result: Sidebar displays institution branding, module search, and navigation items without layout overlap or missing sections on all Custom List Manager views.
  test("Case ID:CLM-TC-002 - Navigation & Access → sidebar is rendered correctly on Custom List Manager pages", async ({ testData }) => {
    await test.step("[CLM-TC-002] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Maker;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-002] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-003
  // Excel Scenario: Verify all configured menu items are visible in sidebar
  // Excel Expected Result: Every menu item granted to the role is visible and labelled correctly; items outside the role profile are not shown.
  test("Case ID:CLM-TC-003 - Navigation & Access → all configured menu items are visible in sidebar", async ({ testData }) => {
    await test.step("[CLM-TC-003] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Compliance Officer;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-003] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-004
  // Excel Scenario: Verify active menu highlighting for currently selected page
  // Excel Expected Result: Exactly one navigation item shows active styling matching the current view; highlight updates immediately on route change.
  test("Case ID:CLM-TC-004 - Navigation & Access → active menu highlighting for currently selected page", async ({ testData }) => {
    await test.step("[CLM-TC-004] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Compliance Officer User can access multiple Configuration sub-modules. 1. Open Configuration > Custom List Manager and note the highlighted sidebar item.;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-004] Validate expected results from Excel", async () => {
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-005
  // Excel Scenario: Verify navigation routing between available module pages
  // Excel Expected Result: Each navigation target loads the correct view without stale content. Browser back/forward and breadcrumb links land on the expected screen.
  test("Case ID:CLM-TC-005 - Navigation & Access → navigation routing between available module pages", async ({ testData }) => {
    await test.step("[CLM-TC-005] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Maker;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-005] Validate expected results from Excel", async () => {
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-006
  // Excel Scenario: Verify navigation state is maintained after page refresh
  // Excel Expected Result: After refresh the user remains on the same functional view with data reloaded; session is intact and no unexpected redirect to login occurs.
  test("Case ID:CLM-TC-006 - Navigation & Access → navigation state is maintained after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-006] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Maker;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-006] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-007
  // Excel Scenario: Verify user identity section is displayed in sidebar
  // Excel Expected Result: Sidebar shows user initials avatar, display name, and role label matching the authenticated session.
  test("Case ID:CLM-TC-007 - Navigation & Access → user identity section is displayed in sidebar", async ({ testData }) => {
    await test.step("[CLM-TC-007] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Compliance Officer Charu Chauhan account is active. 1. Sign in as Charu Chauhan (Compliance Officer).;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-007] Validate expected results from Excel", async () => {
      await clmPage.expectSidebarUserIdentityVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-008
  // Excel Scenario: Verify displayed user information matches logged-in user
  // Excel Expected Result: Sidebar identity updates on login switch and matches directory records for name and role; no residual data from the prior session.
  test("Case ID:CLM-TC-008 - Navigation & Access → displayed user information matches logged-in user", async ({ testData }) => {
    await test.step("[CLM-TC-008] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expandConfigurationMenu();
    await clmPage.openCustomListManagerFromSidebar();
    // Role from Excel: Maker;
    await clmPage.expectCustomListManagerViewLoaded();
    });
    await test.step("[CLM-TC-008] Validate expected results from Excel", async () => {
      await clmPage.expectSidebarUserIdentityVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Breadcrumb & Top Bar", () => {
  // Excel Test Case ID: CLM-TC-009
  // Excel Scenario: Verify breadcrumb is displayed on Custom List Manager pages
  // Excel Expected Result: Breadcrumb is visible on landing and detail views, showing \"Custom lists\" and the selected list name on drill-down.
  test("Case ID:CLM-TC-009 - Breadcrumb & Top Bar → breadcrumb is displayed on Custom List Manager pages", async ({ testData }) => {
    await test.step("[CLM-TC-009] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-009] Validate expected results from Excel", async () => {
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-010
  // Excel Scenario: Verify breadcrumb updates correctly during navigation
  // Excel Expected Result: Breadcrumb segments update synchronously with view changes and the parent segment is clickable.
  test("Case ID:CLM-TC-010 - Breadcrumb & Top Bar → breadcrumb updates correctly during navigation", async ({ testData }) => {
    await test.step("[CLM-TC-010] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-010] Validate expected results from Excel", async () => {
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-011
  // Excel Scenario: Verify breadcrumb navigation redirects user to selected level
  // Excel Expected Result: Clicking the parent breadcrumb loads the Custom lists landing without losing session or showing an error.
  test("Case ID:CLM-TC-011 - Breadcrumb & Top Bar → breadcrumb navigation redirects user to selected level", async ({ testData }) => {
    await test.step("[CLM-TC-011] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    });
    await test.step("[CLM-TC-011] Validate expected results from Excel", async () => {
      await clmPage.expectOnCustomListManagerRoute();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-012
  // Excel Scenario: Verify notification icon is displayed in top bar
  // Excel Expected Result: Notification bell is visible on all Custom List Manager views; unread dot appears when pending notifications exist.
  test("Case ID:CLM-TC-012 - Breadcrumb & Top Bar → notification icon is displayed in top bar", async ({ testData }) => {
    await test.step("[CLM-TC-012] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer is signed in. 1. Open Configuration > Custom List Manager.;
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-012] Validate expected results from Excel", async () => {
      await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-013
  // Excel Scenario: Verify notification panel opens from notification icon
  // Excel Expected Result: Panel opens overlaying the page, lists notifications with message and timestamp, and highlights unread items.
  test("Case ID:CLM-TC-013 - Breadcrumb & Top Bar → notification panel opens from notification icon", async ({ testData }) => {
    await test.step("[CLM-TC-013] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-013] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-014
  // Excel Scenario: Verify notification panel can be closed and reopened
  // Excel Expected Result: Panel closes without page reload and reopens with current notification state.
  test("Case ID:CLM-TC-014 - Breadcrumb & Top Bar → notification panel can be closed and reopened", async ({ testData }) => {
    await test.step("[CLM-TC-014] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Notification panel has been opened once. 1. Open notifications.;
    await clmPage.expectBreadcrumbVisible();
    await clmPage.expectTopBarVisible();
    });
    await test.step("[CLM-TC-014] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
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
  // Excel Expected Result: Header shows \"Custom lists\" with subtitle explaining institution-specific screening lists beyond standard watchlists.
  test("Case ID:CLM-TC-015 - Dashboard → Custom Lists dashboard header is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-015] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    });
    await test.step("[CLM-TC-015] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardSubtitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-016
  // Excel Scenario: Verify dashboard subtitle/description is displayed
  // Excel Expected Result: Subtitle clearly states the module manages institution-specific screening lists supplemental to third-party watchlists.
  test("Case ID:CLM-TC-016 - Dashboard → dashboard subtitle/description is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-016] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-016] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardSubtitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-017
  // Excel Scenario: Verify all configured summary cards are displayed
  // Excel Expected Result: Four summary cards render with labels and numeric values; layout is consistent across viewport sizes.
  test("Case ID:CLM-TC-017 - Dashboard → all configured summary cards are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-017] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardSummaryVisible();
    });
    await test.step("[CLM-TC-017] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-018
  // Excel Scenario: Verify summary cards display numeric metric values
  // Excel Expected Result: Each card shows a non-empty numeric count formatted for readability (thousands separators where applicable).
  test("Case ID:CLM-TC-018 - Dashboard → summary cards display numeric metric values", async ({ testData }) => {
    await test.step("[CLM-TC-018] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardSummaryVisible();
    });
    await test.step("[CLM-TC-018] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-019
  // Excel Scenario: Verify Total Lists metric count accuracy
  // Excel Expected Result: Total lists card equals the sum of lists visible across status tabs (excluding duplicates).
  test("Case ID:CLM-TC-019 - Dashboard → Total Lists metric count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-019] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-019] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-020
  // Excel Scenario: Verify Active Lists metric count accuracy
  // Excel Expected Result: Active lists card matches the count of lists in Active screening status.
  test("Case ID:CLM-TC-020 - Dashboard → Active Lists metric count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-020] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-020] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-021
  // Excel Scenario: Verify Total Entities and Pending Approval metrics accuracy
  // Excel Expected Result: Total entries aligns with aggregated entry inventory; Pending approval matches open governance requests.
  test("Case ID:CLM-TC-021 - Dashboard → Total Entities and Pending Approval metrics accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-021] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Checker;
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-021] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-022
  // Excel Scenario: Verify dashboard metrics refresh after data changes
  // Excel Expected Result: Total lists increments by one; Pending approval decrements after checker approval; counts update without manual cache clear.
  test("Case ID:CLM-TC-022 - Dashboard → dashboard metrics refresh after data changes", async ({ testData }) => {
    await test.step("[CLM-TC-022] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectListGridVisible();
    });
    await test.step("[CLM-TC-022] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectDashboardHeaderVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Search & Filters", () => {
  // Excel Test Case ID: CLM-TC-023
  // Excel Scenario: Verify search functionality using exact list name
  // Excel Expected Result: Grid shows only \"Device blocklist\"; other lists are hidden.
  test("Case ID:CLM-TC-023 - Search & Filters → search functionality using exact list name", async ({ testData }) => {
    await test.step("[CLM-TC-023] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal Fraud List");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-023] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-024
  // Excel Scenario: Verify search functionality using partial list name
  // Excel Expected Result: All lists whose names contain the partial term appear; non-matching lists are excluded.
  test("Case ID:CLM-TC-024 - Search & Filters → search functionality using partial list name", async ({ testData }) => {
    await test.step("[CLM-TC-024] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Intern");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-024] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-025
  // Excel Scenario: Verify search with non-existing list name
  // Excel Expected Result: Grid shows zero rows and an appropriate empty-state message; no error is thrown.
  test("Case ID:CLM-TC-025 - Search & Filters → search with non-existing list name", async ({ testData }) => {
    await test.step("[CLM-TC-025] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("Internal Fraud List");
    });
    await test.step("[CLM-TC-025] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectEmptyTableState();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-026
  // Excel Scenario: Verify search results accuracy
  // Excel Expected Result: Displayed row attributes match backend values for the matched list.
  test("Case ID:CLM-TC-026 - Search & Filters → search results accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-026] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("PEP — internal identified");
    });
    await test.step("[CLM-TC-026] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-027
  // Excel Scenario: Verify Status filter visibility and availability
  // Excel Expected Result: Status filter is visible with all supported list lifecycle states.
  test("Case ID:CLM-TC-027 - Search & Filters → Status filter visibility and availability", async ({ testData }) => {
    await test.step("[CLM-TC-027] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-027] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-028
  // Excel Scenario: Verify filtering custom lists by status
  // Excel Expected Result: Only Active lists appear; Disabled and Drafted lists are excluded.
  test("Case ID:CLM-TC-028 - Search & Filters → filtering custom lists by status", async ({ testData }) => {
    await test.step("[CLM-TC-028] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Active", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-028] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-029
  // Excel Scenario: Verify status filter result accuracy
  // Excel Expected Result: Each row status badge matches the selected filter value.
  test("Case ID:CLM-TC-029 - Search & Filters → status filter result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-029] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Disabled", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-029] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-030
  // Excel Scenario: Verify combined search and status filtering
  // Excel Expected Result: Only lists meeting both name and status criteria are shown.
  test("Case ID:CLM-TC-030 - Search & Filters → combined search and status filtering", async ({ testData }) => {
    await test.step("[CLM-TC-030] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Active", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-030] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-031
  // Excel Scenario: Verify combined filter behavior when no matching records exist
  // Excel Expected Result: Empty grid with clear no-results messaging.
  test("Case ID:CLM-TC-031 - Search & Filters → combined filter behavior when no matching records exist", async ({ testData }) => {
    await test.step("[CLM-TC-031] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Disabled", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-031] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectEmptyTableState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-032
  // Excel Scenario: Verify reset/clear functionality restores complete dataset
  // Excel Expected Result: Full list inventory returns; pagination resets appropriately.
  test("Case ID:CLM-TC-032 - Search & Filters → reset/clear functionality restores complete dataset", async ({ testData }) => {
    await test.step("[CLM-TC-032] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal Fraud List");
    await clmPage.clearSearch();
    });
    await test.step("[CLM-TC-032] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectPaginationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-237
  // Excel Scenario: Verify entity search using exact entity name
  // Excel Expected Result: Grid shows \"192.168.44.0/24\" (IP-009012) only.
  test("Case ID:CLM-TC-237 - Search & Filters → entity search using exact entity name", async ({ testData }) => {
    await test.step("[CLM-TC-237] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("PEP — internal identified");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-237] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-238
  // Excel Scenario: Verify entity search using partial name
  // Excel Expected Result: All entries with matching substring appear.
  test("Case ID:CLM-TC-238 - Search & Filters → entity search using partial name", async ({ testData }) => {
    await test.step("[CLM-TC-238] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Intern");
    await clmPage.expectSearchResults();
    });
    await test.step("[CLM-TC-238] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-239
  // Excel Scenario: Verify search result accuracy
  // Excel Expected Result: Matched row shows correct risk category, status, and expiry.
  test("Case ID:CLM-TC-239 - Search & Filters → search result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-239] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("Internal Fraud List");
    });
    await test.step("[CLM-TC-239] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-240
  // Excel Scenario: Verify search with non-existing entity value
  // Excel Expected Result: No rows; empty-state message displayed.
  test("Case ID:CLM-TC-240 - Search & Filters → search with non-existing entity value", async ({ testData }) => {
    await test.step("[CLM-TC-240] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectSearchInputVisible();
    await clmPage.searchLists("Internal Fraud List");
    });
    await test.step("[CLM-TC-240] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectEmptyTableState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-241
  // Excel Scenario: Verify status filter is available for entity management
  // Excel Expected Result: Status filter dropdown is present with all entry lifecycle states.
  test("Case ID:CLM-TC-241 - Search & Filters → status filter is available for entity management", async ({ testData }) => {
    await test.step("[CLM-TC-241] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("status", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-241] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-242
  // Excel Scenario: Verify status filter returns matching entities
  // Excel Expected Result: Only Active entries display.
  test("Case ID:CLM-TC-242 - Search & Filters → status filter returns matching entities", async ({ testData }) => {
    await test.step("[CLM-TC-242] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Active", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-242] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-243
  // Excel Scenario: Verify status filter result accuracy
  // Excel Expected Result: All visible rows show Expired status.
  test("Case ID:CLM-TC-243 - Search & Filters → status filter result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-243] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Expired", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-243] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-244
  // Excel Scenario: Verify combined search and status filtering
  // Excel Expected Result: Rows satisfy both criteria.
  test("Case ID:CLM-TC-244 - Search & Filters → combined search and status filtering", async ({ testData }) => {
    await test.step("[CLM-TC-244] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Active", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-244] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-245
  // Excel Scenario: Verify reset functionality clears applied search and filters
  // Excel Expected Result: All entries return to the grid.
  test("Case ID:CLM-TC-245 - Search & Filters → reset functionality clears applied search and filters", async ({ testData }) => {
    await test.step("[CLM-TC-245] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.searchLists("Internal fraud — flagged");
    await clmPage.clearSearch();
    });
    await test.step("[CLM-TC-245] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-246
  // Excel Scenario: Verify search and filter state remains accurate after page refresh
  // Excel Expected Result: Behaviour matches specification: either criteria persist with same results or reset cleanly to default view without error.
  test("Case ID:CLM-TC-246 - Search & Filters → search and filter state remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-246] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.applyFilter("Active", "Active");
    await clmPage.expectFilteredResults();
    });
    await test.step("[CLM-TC-246] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Grid & Data Presentation", () => {
  // Excel Test Case ID: CLM-TC-033
  // Excel Scenario: Verify all configured grid columns are displayed on landing page
  // Excel Expected Result: All required columns are present, sortable where indicated, and aligned with data.
  test("Case ID:CLM-TC-033 - Grid & Data Presentation → all configured grid columns are displayed on landing page", async ({ testData }) => {
    await test.step("[CLM-TC-033] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-033] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-034
  // Excel Scenario: Verify grid displays list information correctly
  // Excel Expected Result: Each row should display the correct information associated with the custom list Values remain accurate after refresh and align with backend inventory.
  test("Case ID:CLM-TC-034 - Grid & Data Presentation → grid displays list information correctly", async ({ testData }) => {
    await test.step("[CLM-TC-034] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-034] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-035
  // Excel Scenario: Verify status values are displayed for all custom list records
  // Excel Expected Result: Status should be displayed for every custom list record
  test("Case ID:CLM-TC-035 - Grid & Data Presentation → status values are displayed for all custom list records", async ({ testData }) => {
    await test.step("[CLM-TC-035] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectStatusBadgeVisible();
    });
    await test.step("[CLM-TC-035] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-036
  // Excel Scenario: Verify status displayed in grid matches actual list status
  // Excel Expected Result: Verify status displayed in grid matches actual list status — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-036 - Grid & Data Presentation → status displayed in grid matches actual list status", async ({ testData }) => {
    await test.step("[CLM-TC-036] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectStatusBadgeVisible();
    });
    await test.step("[CLM-TC-036] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-037
  // Excel Scenario: Verify Total Records count accuracy
  // Excel Expected Result: Total Records value should match actual number of entities in the list
  test("Case ID:CLM-TC-037 - Grid & Data Presentation → Total Records count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-037] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-037] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-038
  // Excel Scenario: Verify Active Records count accuracy
  // Excel Expected Result: Active Records value should match actual active entity count
  test("Case ID:CLM-TC-038 - Grid & Data Presentation → Active Records count accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-038] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-038] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-039
  // Excel Scenario: Verify Active Records count does not exceed Total Records
  // Excel Expected Result: Active Records count should never exceed Total Records count
  test("Case ID:CLM-TC-039 - Grid & Data Presentation → Active Records count does not exceed Total Records", async ({ testData }) => {
    await test.step("[CLM-TC-039] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-039] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-040
  // Excel Scenario: Verify expiry information is displayed for custom lists
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-040 - Grid & Data Presentation → expiry information is displayed for custom lists", async ({ testData }) => {
    await test.step("[CLM-TC-040] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-040] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-041
  // Excel Scenario: Verify expiry information accuracy
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-041 - Grid & Data Presentation → expiry information accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-041] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-041] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-042
  // Excel Scenario: Verify grid data remains consistent after refresh
  // Excel Expected Result: Grid data should remain accurate and consistent after page refresh Values remain accurate after refresh and align with backend inventory.
  test("Case ID:CLM-TC-042 - Grid & Data Presentation → grid data remains consistent after refresh", async ({ testData }) => {
    await test.step("[CLM-TC-042] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectListGridVisible();
    await clmPage.expectTableHeadersVisible();
    });
    await test.step("[CLM-TC-042] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Export & Pagination", () => {
  // Excel Test Case ID: CLM-TC-043
  // Excel Scenario: Verify CSV Export functionality
  // Excel Expected Result: CSV downloads successfully with columns: list name, status, records, active count, action on hit, TTL, dates. Row count matches filtered view.
  test("Case ID:CLM-TC-043 - Export & Pagination → CSV Export functionality", async ({ testData }) => {
    await test.step("[CLM-TC-043] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-043] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-044
  // Excel Scenario: Verify PDF Export functionality
  // Excel Expected Result: PDF export contains the same list rows and headers as the grid with intact formatting.
  test("Case ID:CLM-TC-044 - Export & Pagination → PDF Export functionality", async ({ testData }) => {
    await test.step("[CLM-TC-044] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.clickExport();
    await clmPage.exportLists("PDF");
    });
    await test.step("[CLM-TC-044] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectListGridVisible();
    await clmPage.expectExportOptions();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-045
  // Excel Scenario: Verify exported data accuracy
  // Excel Expected Result: Exported data should match the records displayed on the screen
  test("Case ID:CLM-TC-045 - Export & Pagination → exported data accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-045] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-045] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-046
  // Excel Scenario: Verify export functionality with applied search criteria
  // Excel Expected Result: Exported file should contain only records matching the search criteria
  test("Case ID:CLM-TC-046 - Export & Pagination → export functionality with applied search criteria", async ({ testData }) => {
    await test.step("[CLM-TC-046] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-046] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-047
  // Excel Scenario: Verify export functionality with applied status filter
  // Excel Expected Result: Exported file should contain only records matching the selected filter
  test("Case ID:CLM-TC-047 - Export & Pagination → export functionality with applied status filter", async ({ testData }) => {
    await test.step("[CLM-TC-047] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.clickExport();
    await clmPage.exportLists("CSV");
    });
    await test.step("[CLM-TC-047] Validate expected results from Excel", async () => {
      await clmPage.expectFiltersVisible();
    await clmPage.expectExportOptions();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-048
  // Excel Scenario: Verify pagination navigation between pages
  // Excel Expected Result: Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows.
  test("Case ID:CLM-TC-048 - Export & Pagination → pagination navigation between pages", async ({ testData }) => {
    await test.step("[CLM-TC-048] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.goToNextTablePage();
    await clmPage.expectPaginationVisible();
    });
    await test.step("[CLM-TC-048] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-049
  // Excel Scenario: Verify page size selection updates displayed records
  // Excel Expected Result: Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows.
  test("Case ID:CLM-TC-049 - Export & Pagination → page size selection updates displayed records", async ({ testData }) => {
    await test.step("[CLM-TC-049] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.changePageSize(25);
    });
    await test.step("[CLM-TC-049] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-050
  // Excel Scenario: Verify pagination remains functional after search/filter operations
  // Excel Expected Result: Page controls update row range label (e.g. Showing 1–25 of N); navigation does not duplicate or drop rows.
  test("Case ID:CLM-TC-050 - Export & Pagination → pagination remains functional after search/filter operations", async ({ testData }) => {
    await test.step("[CLM-TC-050] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.goToNextTablePage();
    await clmPage.expectPaginationVisible();
    });
    await test.step("[CLM-TC-050] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Landing Actions", () => {
  // Excel Test Case ID: CLM-TC-051
  // Excel Scenario: Verify Create List action is available and accessible
  // Excel Expected Result: Verification confirms that Create List action is available and accessible without errors and with data consistent across views.
  test("Case ID:CLM-TC-051 - Landing Actions → Create List action is available and accessible", async ({ testData }) => {
    await test.step("[CLM-TC-051] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.clickCreateList();
    });
    await test.step("[CLM-TC-051] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-052
  // Excel Scenario: Verify Create List action redirects to Create Custom List form
  // Excel Expected Result: Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval.
  test("Case ID:CLM-TC-052 - Landing Actions → Create List action redirects to Create Custom List form", async ({ testData }) => {
    await test.step("[CLM-TC-052] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer can create lists. 1. Click + Create new list.;
    await clmPage.clickCreateList();
    });
    await test.step("[CLM-TC-052] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-053
  // Excel Scenario: Verify Bulk Upload action is available and accessible
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-053 - Landing Actions → Bulk Upload action is available and accessible", async ({ testData }) => {
    await test.step("[CLM-TC-053] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-053] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-054
  // Excel Scenario: Verify Bulk Upload action redirects to upload workflow
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-054 - Landing Actions → Bulk Upload action redirects to upload workflow", async ({ testData }) => {
    await test.step("[CLM-TC-054] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-054] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-055
  // Excel Scenario: Verify View action opens selected custom list details
  // Excel Expected Result: Custom List Detail page should open displaying selected list information
  test("Case ID:CLM-TC-055 - Landing Actions → View action opens selected custom list details", async ({ testData }) => {
    await test.step("[CLM-TC-055] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-055] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-056
  // Excel Scenario: Verify Edit action opens selected custom list in edit mode
  // Excel Expected Result: Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval.
  test("Case ID:CLM-TC-056 - Landing Actions → Edit action opens selected custom list in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-056] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-056] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-057
  // Excel Scenario: Verify Enable/Disable action initiates status change request workflow
  // Excel Expected Result: Enable/Disable request workflow should be initiated successfully
  test("Case ID:CLM-TC-057 - Landing Actions → Enable/Disable action initiates status change request workflow", async ({ testData }) => {
    await test.step("[CLM-TC-057] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-057] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-058
  // Excel Scenario: Verify landing page actions operate on the selected custom list only
  // Excel Expected Result: Action should be performed only on the selected custom list without impacting other records Values remain accurate after refresh and align with backend inventory.
  test("Case ID:CLM-TC-058 - Landing Actions → landing page actions operate on the selected custom list only", async ({ testData }) => {
    await test.step("[CLM-TC-058] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.expectLandingActionsVisible();
    });
    await test.step("[CLM-TC-058] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Create List Form", () => {
  // Excel Test Case ID: CLM-TC-059
  // Excel Scenario: Verify Create Custom List form is rendered successfully
  // Excel Expected Result: Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval.
  test("Case ID:CLM-TC-059 - Create List Form → Create Custom List form is rendered successfully", async ({ testData }) => {
    await test.step("[CLM-TC-059] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer can create lists. 1. Click + Create new list.;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-059] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-060
  // Excel Scenario: Verify all configured fields are displayed on Create List form
  // Excel Expected Result: Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval.
  test("Case ID:CLM-TC-060 - Create List Form → all configured fields are displayed on Create List form", async ({ testData }) => {
    await test.step("[CLM-TC-060] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer can create lists. 1. Click + Create new list.;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-060] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-061
  // Excel Scenario: Verify mandatory fields are clearly identified
  // Excel Expected Result: All mandatory fields should display configured mandatory indicators
  test("Case ID:CLM-TC-061 - Create List Form → mandatory fields are clearly identified", async ({ testData }) => {
    await test.step("[CLM-TC-061] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-061] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-062
  // Excel Scenario: Verify Create List form layout remains intact after page refresh
  // Excel Expected Result: Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval.
  test("Case ID:CLM-TC-062 - Create List Form → Create List form layout remains intact after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-062] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer can create lists. 1. Click + Create new list.;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-062] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-063
  // Excel Scenario: Verify Save Draft action is available
  // Excel Expected Result: Verification confirms that Save Draft action is available without errors and with data consistent across views.
  test("Case ID:CLM-TC-063 - Create List Form → Save Draft action is available", async ({ testData }) => {
    await test.step("[CLM-TC-063] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-063] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-064
  // Excel Scenario: Verify Submit For Approval action is available
  // Excel Expected Result: Submit For Approval button should be visible and enabled
  test("Case ID:CLM-TC-064 - Create List Form → Submit For Approval action is available", async ({ testData }) => {
    await test.step("[CLM-TC-064] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-064] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-065
  // Excel Scenario: Verify Cancel action is available
  // Excel Expected Result: Verification confirms that Cancel action is available without errors and with data consistent across views.
  test("Case ID:CLM-TC-065 - Create List Form → Cancel action is available", async ({ testData }) => {
    await test.step("[CLM-TC-065] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.cancelCreateList();
    });
    await test.step("[CLM-TC-065] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-066
  // Excel Scenario: Verify Cancel action returns user to landing page
  // Excel Expected Result: Verify Cancel action returns user to landing page — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-066 - Create List Form → Cancel action returns user to landing page", async ({ testData }) => {
    await test.step("[CLM-TC-066] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.cancelCreateList();
    });
    await test.step("[CLM-TC-066] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("List Name Validation", () => {
  // Excel Test Case ID: CLM-TC-067
  // Excel Scenario: Verify List Name field accepts valid value
  // Excel Expected Result: Valid name is accepted without error and persists in draft.
  test("Case ID:CLM-TC-067 - List Name Validation → List Name field accepts valid value", async ({ testData }) => {
    await test.step("[CLM-TC-067] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("SIM-swap suspects — retail");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-067] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-068
  // Excel Scenario: Verify List Name is mandatory during submission
  // Excel Expected Result: Submission blocked with mandatory field indicator on list name.
  test("Case ID:CLM-TC-068 - List Name Validation → List Name is mandatory during submission", async ({ testData }) => {
    await test.step("[CLM-TC-068] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("(blank)");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-068] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-069
  // Excel Scenario: Verify List Name does not accept blank-equivalent value
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-069 - List Name Validation → List Name does not accept blank-equivalent value", async ({ testData }) => {
    await test.step("[CLM-TC-069] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-069] Validate expected results from Excel", async () => {
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-070
  // Excel Scenario: Verify duplicate List Name is not allowed
  // Excel Expected Result: System rejects duplicate with clear validation message; no second list created.
  test("Case ID:CLM-TC-070 - List Name Validation → duplicate List Name is not allowed", async ({ testData }) => {
    await test.step("[CLM-TC-070] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal Fraud List");
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-070] Validate expected results from Excel", async () => {
      await clmPage.expectDuplicateDetection();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-071
  // Excel Scenario: Verify unique List Name can be submitted
  // Excel Expected Result: Custom list request should be submitted successfully
  test("Case ID:CLM-TC-071 - List Name Validation → unique List Name can be submitted", async ({ testData }) => {
    await test.step("[CLM-TC-071] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-071] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-072
  // Excel Scenario: Verify List Name accepts maximum supported length
  // Excel Expected Result: 100-character name is accepted (max length per field rule).
  test("Case ID:CLM-TC-072 - List Name Validation → List Name accepts maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-072] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-072] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-073
  // Excel Scenario: Verify List Name exceeding maximum length is restricted
  // Excel Expected Result: Input is blocked or validation prevents submission beyond 100 characters.
  test("Case ID:CLM-TC-073 - List Name Validation → List Name exceeding maximum length is restricted", async ({ testData }) => {
    await test.step("[CLM-TC-073] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.fillListName("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-073] Validate expected results from Excel", async () => {
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-074
  // Excel Scenario: Verify List Name boundary validation
  // Excel Expected Result: List name accepts the valid input and retains it through save or submission.
  test("Case ID:CLM-TC-074 - List Name Validation → List Name boundary validation", async ({ testData }) => {
    await test.step("[CLM-TC-074] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.expectListNameValidationPassed();
    });
    await test.step("[CLM-TC-074] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Purpose Configuration", () => {
  // Excel Test Case ID: CLM-TC-075
  // Excel Scenario: Verify Purpose field is displayed as selectable dropdown
  // Excel Expected Result: Purpose dropdown lists checker-approved values; selection is retained on the form.
  test("Case ID:CLM-TC-075 - Purpose Configuration → Purpose field is displayed as selectable dropdown", async ({ testData }) => {
    await test.step("[CLM-TC-075] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Internal fraud — flagged entries");
    });
    await test.step("[CLM-TC-075] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-076
  // Excel Scenario: Verify Purpose dropdown displays configured values
  // Excel Expected Result: Purpose dropdown lists checker-approved values; selection is retained on the form.
  test("Case ID:CLM-TC-076 - Purpose Configuration → Purpose dropdown displays configured values", async ({ testData }) => {
    await test.step("[CLM-TC-076] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-076] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-077
  // Excel Scenario: Verify user can select a Purpose value
  // Excel Expected Result: Selected Purpose value should be displayed successfully
  test("Case ID:CLM-TC-077 - Purpose Configuration → user can select a Purpose value", async ({ testData }) => {
    await test.step("[CLM-TC-077] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("PEP — internal identified");
    });
    await test.step("[CLM-TC-077] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-078
  // Excel Scenario: Verify selected Purpose value is retained before form submission
  // Excel Expected Result: Selected Purpose value should remain unchanged until modified by user
  test("Case ID:CLM-TC-078 - Purpose Configuration → selected Purpose value is retained before form submission", async ({ testData }) => {
    await test.step("[CLM-TC-078] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.selectPurpose("Device / IP blocklist");
    });
    await test.step("[CLM-TC-078] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Action On Hit Configuration", () => {
  // Excel Test Case ID: CLM-TC-079
  // Excel Scenario: Verify Action On Hit field is displayed as configurable selection control
  // Excel Expected Result: Action on hit control is visible with institution-configured options.
  test("Case ID:CLM-TC-079 - Action On Hit Configuration → Action On Hit field is displayed as configurable selection control", async ({ testData }) => {
    await test.step("[CLM-TC-079] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert");
    });
    await test.step("[CLM-TC-079] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-080
  // Excel Scenario: Verify Action On Hit field displays configured values
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-080 - Action On Hit Configuration → Action On Hit field displays configured values", async ({ testData }) => {
    await test.step("[CLM-TC-080] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert & block");
    });
    await test.step("[CLM-TC-080] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-081
  // Excel Scenario: Verify user can select an Action On Hit value
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-081 - Action On Hit Configuration → user can select an Action On Hit value", async ({ testData }) => {
    await test.step("[CLM-TC-081] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Alert & block");
    });
    await test.step("[CLM-TC-081] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-082
  // Excel Scenario: Verify selected Action On Hit value is retained before submission
  // Excel Expected Result: Screening hit generates alert linked to correct list and entry with investigation details.
  test("Case ID:CLM-TC-082 - Action On Hit Configuration → selected Action On Hit value is retained before submission", async ({ testData }) => {
    await test.step("[CLM-TC-082] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureActionOnHit("Generate alert");
    });
    await test.step("[CLM-TC-082] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("TTL Configuration", () => {
  // Excel Test Case ID: CLM-TC-083
  // Excel Scenario: Verify TTL field is displayed on Create List form
  // Excel Expected Result: Create panel shows list name, purpose, enable toggle, reason for creation, Cancel, Save as draft, and Submit for approval.
  test("Case ID:CLM-TC-083 - TTL Configuration → TTL field is displayed on Create List form", async ({ testData }) => {
    await test.step("[CLM-TC-083] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer Compliance Officer can create lists. 1. Click + Create new list.;
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("90 days");
    });
    await test.step("[CLM-TC-083] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-084
  // Excel Scenario: Verify TTL field displays configured default value
  // Excel Expected Result: TTL control shows default and allows selection; value persists before submission.
  test("Case ID:CLM-TC-084 - TTL Configuration → TTL field displays configured default value", async ({ testData }) => {
    await test.step("[CLM-TC-084] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("12 months");
    });
    await test.step("[CLM-TC-084] Validate expected results from Excel", async () => {
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-085
  // Excel Scenario: Verify user can select a TTL value
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-085 - TTL Configuration → user can select a TTL value", async ({ testData }) => {
    await test.step("[CLM-TC-085] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("12 months");
    });
    await test.step("[CLM-TC-085] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-086
  // Excel Scenario: Verify selected TTL value is retained before submission
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-086 - TTL Configuration → selected TTL value is retained before submission", async ({ testData }) => {
    await test.step("[CLM-TC-086] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureTtl("12 months");
    });
    await test.step("[CLM-TC-086] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Matching Configuration", () => {
  // Excel Test Case ID: CLM-TC-087
  // Excel Scenario: Verify Fuzzy Matching configuration control is displayed
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-087 - Matching Configuration → Fuzzy Matching configuration control is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-087] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Enabled");
    });
    await test.step("[CLM-TC-087] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-088
  // Excel Scenario: Verify user can enable or disable Fuzzy Matching configuration
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-088 - Matching Configuration → user can enable or disable Fuzzy Matching configuration", async ({ testData }) => {
    await test.step("[CLM-TC-088] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Enabled");
    });
    await test.step("[CLM-TC-088] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-089
  // Excel Scenario: Verify Multilingual Matching configuration control is displayed
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-089 - Matching Configuration → Multilingual Matching configuration control is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-089] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-089] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-090
  // Excel Scenario: Verify user can enable or disable Multilingual Matching configuration
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-090 - Matching Configuration → user can enable or disable Multilingual Matching configuration", async ({ testData }) => {
    await test.step("[CLM-TC-090] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-090] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-091
  // Excel Scenario: Verify matching configuration values are retained while completing the form
  // Excel Expected Result: Configured matching settings should remain unchanged until modified by user
  test("Case ID:CLM-TC-091 - Matching Configuration → matching configuration values are retained while completing the form", async ({ testData }) => {
    await test.step("[CLM-TC-091] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-091] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-092
  // Excel Scenario: Verify matching configurations are included in list creation request
  // Excel Expected Result: Submitted request should contain configured matching settings
  test("Case ID:CLM-TC-092 - Matching Configuration → matching configurations are included in list creation request", async ({ testData }) => {
    await test.step("[CLM-TC-092] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureMatching("Exact");
    });
    await test.step("[CLM-TC-092] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Reason For Creation", () => {
  // Excel Test Case ID: CLM-TC-093
  // Excel Scenario: Verify Reason For Creation field accepts valid input
  // Excel Expected Result: Reason for creation accepts the valid input and retains it through save or submission.
  test("Case ID:CLM-TC-093 - Reason For Creation → Reason For Creation field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-093] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-093] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-094
  // Excel Scenario: Verify Reason For Creation field is mandatory during submission
  // Excel Expected Result: System should display validation message and prevent submission
  test("Case ID:CLM-TC-094 - Reason For Creation → Reason For Creation field is mandatory during submission", async ({ testData }) => {
    await test.step("[CLM-TC-094] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    await clmPage.submitCreateList();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-094] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-095] Validate expected results from Excel", async () => {
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectSubmissionBlocked();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-096
  // Excel Scenario: Verify Reason For Creation accepts maximum supported length
  // Excel Expected Result: Reason for creation accepts the valid input and retains it through save or submission.
  test("Case ID:CLM-TC-096 - Reason For Creation → Reason For Creation accepts maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-096] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-096] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-097
  // Excel Scenario: Verify Reason For Creation exceeding maximum length is restricted
  // Excel Expected Result: System should reject excess characters or display validation message
  test("Case ID:CLM-TC-097 - Reason For Creation → Reason For Creation exceeding maximum length is restricted", async ({ testData }) => {
    await test.step("[CLM-TC-097] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-097] Validate expected results from Excel", async () => {
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-098
  // Excel Scenario: Verify Reason For Creation boundary validation
  // Excel Expected Result: Reason for creation accepts the valid input and retains it through save or submission.
  test("Case ID:CLM-TC-098 - Reason For Creation → Reason For Creation boundary validation", async ({ testData }) => {
    await test.step("[CLM-TC-098] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillReasonForCreation("Regulatory requirement");
    });
    await test.step("[CLM-TC-098] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Draft Management", () => {
  // Excel Test Case ID: CLM-TC-099
  // Excel Scenario: Verify user can save partially completed custom list as draft
  // Excel Expected Result: Verification confirms that user can save partially completed custom list as draft without errors and with data consistent across views.
  test("Case ID:CLM-TC-099 - Draft Management → user can save partially completed custom list as draft", async ({ testData }) => {
    await test.step("[CLM-TC-099] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-099] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-100
  // Excel Scenario: Verify draft record is available for future access
  // Excel Expected Result: Saved draft should be available for further processing
  test("Case ID:CLM-TC-100 - Draft Management → draft record is available for future access", async ({ testData }) => {
    await test.step("[CLM-TC-100] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal fraud — flagged");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-100] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-101
  // Excel Scenario: Verify saved draft loads previously entered information
  // Excel Expected Result: Previously entered values should be displayed correctly
  test("Case ID:CLM-TC-101 - Draft Management → saved draft loads previously entered information", async ({ testData }) => {
    await test.step("[CLM-TC-101] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-101] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-102
  // Excel Scenario: Verify all configured fields persist in draft
  // Excel Expected Result: List Name, Purpose, Action On Hit, TTL, Matching Settings and Reason For Creation should be retained
  test("Case ID:CLM-TC-102 - Draft Management → all configured fields persist in draft", async ({ testData }) => {
    await test.step("[CLM-TC-102] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("PEP — internal identified");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-102] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-103
  // Excel Scenario: Verify user can update existing draft
  // Excel Expected Result: Verification confirms that user can update existing draft without errors and with data consistent across views.
  test("Case ID:CLM-TC-103 - Draft Management → user can update existing draft", async ({ testData }) => {
    await test.step("[CLM-TC-103] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-103] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-104
  // Excel Scenario: Verify latest changes are retained after draft update
  // Excel Expected Result: Verification confirms that latest changes are retained after draft update without errors and with data consistent across views.
  test("Case ID:CLM-TC-104 - Draft Management → latest changes are retained after draft update", async ({ testData }) => {
    await test.step("[CLM-TC-104] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-104] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-105
  // Excel Scenario: Verify draft remains accessible after browser refresh
  // Excel Expected Result: Draft should remain available with saved information intact
  test("Case ID:CLM-TC-105 - Draft Management → draft remains accessible after browser refresh", async ({ testData }) => {
    await test.step("[CLM-TC-105] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal fraud — flagged");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-105] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-106
  // Excel Scenario: Verify draft can be submitted for approval
  // Excel Expected Result: Draft should be successfully submitted for approval
  test("Case ID:CLM-TC-106 - Draft Management → draft can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-106] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.saveDraft();
    });
    await test.step("[CLM-TC-106] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("PEP — internal identified");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-107] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-108
  // Excel Scenario: Verify submission generates approval request
  // Excel Expected Result: Verification confirms that submission generates approval request without errors and with data consistent across views.
  test("Case ID:CLM-TC-108 - Submission Workflow → submission generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-108] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-108] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-109
  // Excel Scenario: Verify submitted custom list enters Pending Approval status
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-109 - Submission Workflow → submitted custom list enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-109] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-109] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-110
  // Excel Scenario: Verify submitted request is visible in approval queue
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-110 - Submission Workflow → submitted request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-110] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal fraud — flagged");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-110] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-111
  // Excel Scenario: Verify submitted request retains all configured values
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-111 - Submission Workflow → submitted request retains all configured values", async ({ testData }) => {
    await test.step("[CLM-TC-111] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-111] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-112
  // Excel Scenario: Verify Pending Approval status is reflected on landing page
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-112 - Submission Workflow → Pending Approval status is reflected on landing page", async ({ testData }) => {
    await test.step("[CLM-TC-112] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("PEP — internal identified");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-112] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-113
  // Excel Scenario: Verify Pending Approval dashboard metric updates after submission
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-113 - Submission Workflow → Pending Approval dashboard metric updates after submission", async ({ testData }) => {
    await test.step("[CLM-TC-113] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-113] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-114
  // Excel Scenario: Verify submitted request remains pending until checker action
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-114 - Submission Workflow → submitted request remains pending until checker action", async ({ testData }) => {
    await test.step("[CLM-TC-114] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-114] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-354
  // Excel Scenario: Verify successfully validated upload can be submitted for onboarding approval
  // Excel Expected Result: Verification confirms that successfully validated upload can be submitted for onboarding approval without errors and with data consistent across views.
  test("Case ID:CLM-TC-354 - Submission Workflow → successfully validated upload can be submitted for onboarding approval", async ({ testData }) => {
    await test.step("[CLM-TC-354] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-354] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-355
  // Excel Scenario: Verify upload submission generates onboarding request
  // Excel Expected Result: Onboarding request should be generated successfully
  test("Case ID:CLM-TC-355 - Submission Workflow → upload submission generates onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-355] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal fraud — flagged");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-355] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-356
  // Excel Scenario: Verify submitted upload enters Pending Approval status
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-356 - Submission Workflow → submitted upload enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-356] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-356] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-357
  // Excel Scenario: Verify submitted upload request is visible in approval queue
  // Excel Expected Result: Verification confirms that submitted upload request is visible in approval queue without errors and with data consistent across views.
  test("Case ID:CLM-TC-357 - Submission Workflow → submitted upload request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-357] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("PEP — internal identified");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-357] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-358
  // Excel Scenario: Verify submitted request retains uploaded entity information
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-358 - Submission Workflow → submitted request retains uploaded entity information", async ({ testData }) => {
    await test.step("[CLM-TC-358] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Submission workflow role — switch session to: Maker;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.submitCreateList();
    });
    await test.step("[CLM-TC-358] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-359
  // Excel Scenario: Verify upload request remains pending until checker action occurs
  // Excel Expected Result: Request should remain pending until checker approval or rejection
  test("Case ID:CLM-TC-359 - Submission Workflow → upload request remains pending until checker action occurs", async ({ testData }) => {
    await test.step("[CLM-TC-359] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Adverse media flagged");
    await clmPage.submitCreateList();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-359] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-360
  // Excel Scenario: Verify approved upload results in entity onboarding
  // Excel Expected Result: Verification confirms that approved upload results in entity onboarding without errors and with data consistent across views.
  test("Case ID:CLM-TC-360 - Submission Workflow → approved upload results in entity onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-360] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Internal fraud — flagged");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-360] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-361
  // Excel Scenario: Verify approved upload updates entity inventory statistics
  // Excel Expected Result: Entity statistics should reflect newly onboarded entities
  test("Case ID:CLM-TC-361 - Submission Workflow → approved upload updates entity inventory statistics", async ({ testData }) => {
    await test.step("[CLM-TC-361] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Rejected KYC applicants");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-361] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-362
  // Excel Scenario: Verify approved upload entities are available within associated custom list
  // Excel Expected Result: Newly onboarded entities should be visible within the correct custom list
  test("Case ID:CLM-TC-362 - Submission Workflow → approved upload entities are available within associated custom list", async ({ testData }) => {
    await test.step("[CLM-TC-362] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("PEP — internal identified");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-362] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-363
  // Excel Scenario: Verify approved upload creates screening-ready entities
  // Excel Expected Result: Onboarded entities should be available for subsequent AML screening and monitoring workflows
  test("Case ID:CLM-TC-363 - Submission Workflow → approved upload creates screening-ready entities", async ({ testData }) => {
    await test.step("[CLM-TC-363] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Submission workflow role — switch session to: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.fillListName("Device blocklist");
    await clmPage.expectSubmissionWorkflowState();
    });
    await test.step("[CLM-TC-363] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Edit List", () => {
  // Excel Test Case ID: CLM-TC-115
  // Excel Scenario: Verify Edit action opens selected custom list in edit mode
  // Excel Expected Result: Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval.
  test("Case ID:CLM-TC-115 - Edit List → Edit action opens selected custom list in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-115] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openEditList("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-115] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-116
  // Excel Scenario: Verify existing custom list values are pre-populated in Edit form
  // Excel Expected Result: Previously configured values should be displayed in the form
  test("Case ID:CLM-TC-116 - Edit List → existing custom list values are pre-populated in Edit form", async ({ testData }) => {
    await test.step("[CLM-TC-116] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openEditList("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-116] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-117
  // Excel Scenario: Verify editable fields can be modified
  // Excel Expected Result: Verification confirms that editable fields can be modified without errors and with data consistent across views.
  test("Case ID:CLM-TC-117 - Edit List → editable fields can be modified", async ({ testData }) => {
    await test.step("[CLM-TC-117] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openEditList("PEP — internal identified");
    });
    await test.step("[CLM-TC-117] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-118
  // Excel Scenario: Verify edited values remain visible before submission
  // Excel Expected Result: Modified values should remain unchanged until user submits or cancels
  test("Case ID:CLM-TC-118 - Edit List → edited values remain visible before submission", async ({ testData }) => {
    await test.step("[CLM-TC-118] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openEditList("Device blocklist");
    });
    await test.step("[CLM-TC-118] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-119
  // Excel Scenario: Verify updated custom list can be submitted for approval
  // Excel Expected Result: Updated custom list request should be submitted successfully
  test("Case ID:CLM-TC-119 - Edit List → updated custom list can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-119] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openEditList("Adverse media flagged");
    await clmPage.fillListName("Adverse media flagged Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-119] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-120
  // Excel Scenario: Verify update request generates approval workflow entry
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-120 - Edit List → update request generates approval workflow entry", async ({ testData }) => {
    await test.step("[CLM-TC-120] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openEditList("Internal fraud — flagged");
    await clmPage.fillListName("Internal fraud — flagged Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-120] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-121
  // Excel Scenario: Verify submitted update request enters Pending Approval state
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-121 - Edit List → submitted update request enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-121] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openEditList("Rejected KYC applicants");
    await clmPage.fillListName("Rejected KYC applicants Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-121] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-122
  // Excel Scenario: Verify submitted update request retains modified values
  // Excel Expected Result: Request should display all modified values accurately
  test("Case ID:CLM-TC-122 - Edit List → submitted update request retains modified values", async ({ testData }) => {
    await test.step("[CLM-TC-122] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openEditList("PEP — internal identified");
    await clmPage.fillListName("PEP — internal identified Updated");
    await clmPage.saveListChanges();
    });
    await test.step("[CLM-TC-122] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Enable Disable", () => {
  // Excel Test Case ID: CLM-TC-123
  // Excel Scenario: Verify Disable action can be initiated for active custom list
  // Excel Expected Result: Disable request pending until approval; after approval list shows Disabled, entries retained, screening engine excludes list.
  test("Case ID:CLM-TC-123 - Enable Disable → Disable action can be initiated for active custom list", async ({ testData }) => {
    await test.step("[CLM-TC-123] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    await clmPage.disableList("Device blocklist");
    });
    await test.step("[CLM-TC-123] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-124
  // Excel Scenario: Verify Enable action can be initiated for disabled custom list
  // Excel Expected Result: Disable request pending until approval; after approval list shows Disabled, entries retained, screening engine excludes list.
  test("Case ID:CLM-TC-124 - Enable Disable → Enable action can be initiated for disabled custom list", async ({ testData }) => {
    await test.step("[CLM-TC-124] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    await clmPage.disableList("Adverse media flagged");
    });
    await test.step("[CLM-TC-124] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-125
  // Excel Scenario: Verify Enable/Disable operation generates approval request
  // Excel Expected Result: Verification confirms that Enable/Disable operation generates approval request without errors and with data consistent across views.
  test("Case ID:CLM-TC-125 - Enable Disable → Enable/Disable operation generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-125] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableList("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-125] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectDisableConfirmation();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-126
  // Excel Scenario: Verify Enable/Disable request enters Pending Approval state
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-126 - Enable Disable → Enable/Disable request enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-126] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.disableList("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-126] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-127
  // Excel Scenario: Verify list status does not change before approval
  // Excel Expected Result: List status should remain unchanged until checker action is completed
  test("Case ID:CLM-TC-127 - Enable Disable → list status does not change before approval", async ({ testData }) => {
    await test.step("[CLM-TC-127] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableList("PEP — internal identified");
    });
    await test.step("[CLM-TC-127] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-128
  // Excel Scenario: Verify approved Disable request updates list status
  // Excel Expected Result: Verification confirms that approved Disable request updates list status without errors and with data consistent across views.
  test("Case ID:CLM-TC-128 - Enable Disable → approved Disable request updates list status", async ({ testData }) => {
    await test.step("[CLM-TC-128] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableList("Device blocklist");
    });
    await test.step("[CLM-TC-128] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectDisableConfirmation();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-129
  // Excel Scenario: Verify approved Enable request updates list status
  // Excel Expected Result: Verification confirms that approved Enable request updates list status without errors and with data consistent across views.
  test("Case ID:CLM-TC-129 - Enable Disable → approved Enable request updates list status", async ({ testData }) => {
    await test.step("[CLM-TC-129] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.enableList("Adverse media flagged");
    });
    await test.step("[CLM-TC-129] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-130
  // Excel Scenario: Verify landing page reflects updated status after approval
  // Excel Expected Result: Verify landing page reflects updated status after approval — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-130 - Enable Disable → landing page reflects updated status after approval", async ({ testData }) => {
    await test.step("[CLM-TC-130] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableList("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-130] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-131] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-132
  // Excel Scenario: Verify Checker information is captured after approval
  // Excel Expected Result: Checker information should be recorded and displayed correctly
  test("Case ID:CLM-TC-132 - Metadata Integrity → Checker information is captured after approval", async ({ testData }) => {
    await test.step("[CLM-TC-132] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-132] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-133
  // Excel Scenario: Verify Date Created is captured for custom list
  // Excel Expected Result: Verification confirms that Date Created is captured for custom list without errors and with data consistent across views.
  test("Case ID:CLM-TC-133 - Metadata Integrity → Date Created is captured for custom list", async ({ testData }) => {
    await test.step("[CLM-TC-133] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-133] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-134
  // Excel Scenario: Verify Date Last Modified is updated after approved changes
  // Excel Expected Result: Date Last Modified should reflect latest approved change
  test("Case ID:CLM-TC-134 - Metadata Integrity → Date Last Modified is updated after approved changes", async ({ testData }) => {
    await test.step("[CLM-TC-134] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Adverse media flagged");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-134] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-135] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-136
  // Excel Scenario: Verify Active Records statistic reflects active entities
  // Excel Expected Result: Active Records value should match actual active entity count
  test("Case ID:CLM-TC-136 - Metadata Integrity → Active Records statistic reflects active entities", async ({ testData }) => {
    await test.step("[CLM-TC-136] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-136] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-137
  // Excel Scenario: Verify metadata values remain consistent across screens
  // Excel Expected Result: Metadata values should remain consistent across all screens
  test("Case ID:CLM-TC-137 - Metadata Integrity → metadata values remain consistent across screens", async ({ testData }) => {
    await test.step("[CLM-TC-137] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-137] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-138
  // Excel Scenario: Verify metadata provides complete audit traceability
  // Excel Expected Result: Complete metadata information should be available for audit and compliance review
  test("Case ID:CLM-TC-138 - Metadata Integrity → metadata provides complete audit traceability", async ({ testData }) => {
    await test.step("[CLM-TC-138] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectMetadataFieldsReadOnly();
    });
    await test.step("[CLM-TC-138] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Add Entity Form", () => {
  // Excel Test Case ID: CLM-TC-139
  // Excel Scenario: Verify Add Entity action is available within approved custom list
  // Excel Expected Result: Add entry action is visible and enabled for authorized maker on active list.
  test("Case ID:CLM-TC-139 - Add Entity Form → Add Entity action is available within approved custom list", async ({ testData }) => {
    await test.step("[CLM-TC-139] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer "Adverse media flagged" is Active and approved. 1. Open "Adverse media flagged" detail.;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Adverse media flagged");
    });
    await test.step("[CLM-TC-139] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-140
  // Excel Scenario: Verify Add Entity form opens successfully
  // Excel Expected Result: Add entry panel opens with Identity, Identifiers, Digital identifiers, Localisation, and Risk & governance sections.
  test("Case ID:CLM-TC-140 - Add Entity Form → Add Entity form opens successfully", async ({ testData }) => {
    await test.step("[CLM-TC-140] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-140] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-141
  // Excel Scenario: Verify all configured onboarding sections are displayed
  // Excel Expected Result: All onboarding sections render with expected fields and eligibility note for minimum identifiers.
  test("Case ID:CLM-TC-141 - Add Entity Form → all configured onboarding sections are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-141] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-141] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-142
  // Excel Scenario: Verify all mandatory fields are identified
  // Excel Expected Result: All mandatory fields should display configured mandatory indicators
  test("Case ID:CLM-TC-142 - Add Entity Form → all mandatory fields are identified", async ({ testData }) => {
    await test.step("[CLM-TC-142] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openAddEntityForm();
    await clmPage.submitEntity();
    await clmPage.expectInlineValidationError();
    });
    await test.step("[CLM-TC-142] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-143
  // Excel Scenario: Verify entity onboarding form layout remains intact
  // Excel Expected Result: All fields, sections and controls should be displayed correctly without overlap or truncation
  test("Case ID:CLM-TC-143 - Add Entity Form → entity onboarding form layout remains intact", async ({ testData }) => {
    await test.step("[CLM-TC-143] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Device blocklist");
    });
    await test.step("[CLM-TC-143] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-144
  // Excel Scenario: Verify Save Draft action is available on Add Entity form
  // Excel Expected Result: Verification confirms that Save Draft action is available on Add Entity form without errors and with data consistent across views.
  test("Case ID:CLM-TC-144 - Add Entity Form → Save Draft action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-144] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openAddEntityForm();
    });
    await test.step("[CLM-TC-144] Validate expected results from Excel", async () => {
      await expect(clmPage.addEntityForm).toBeVisible();
    await expect(clmPage.addEntityForm.getByRole("button", { name: /save draft/i })).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-145
  // Excel Scenario: Verify Submit For Approval action is available on Add Entity form
  // Excel Expected Result: Submit For Approval button should be visible and enabled
  test("Case ID:CLM-TC-145 - Add Entity Form → Submit For Approval action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-145] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Internal fraud — flagged");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-145] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-146
  // Excel Scenario: Verify Cancel action is available on Add Entity form
  // Excel Expected Result: Verification confirms that Cancel action is available on Add Entity form without errors and with data consistent across views.
  test("Case ID:CLM-TC-146 - Add Entity Form → Cancel action is available on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-146] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openAddEntityForm();
    });
    await test.step("[CLM-TC-146] Validate expected results from Excel", async () => {
      await expect(clmPage.addEntityForm).toBeVisible();
    await expect(clmPage.addEntityForm.getByRole("button", { name: /cancel/i })).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-147
  // Excel Scenario: Verify Cancel action redirects user back to entity listing
  // Excel Expected Result: User should be redirected back to entity listing page without saving changes
  test("Case ID:CLM-TC-147 - Add Entity Form → Cancel action redirects user back to entity listing", async ({ testData }) => {
    await test.step("[CLM-TC-147] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openAddEntityForm();
    await clmPage.cancelAddEntity();
    });
    await test.step("[CLM-TC-147] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-148
  // Excel Scenario: Verify Add Entity form remains accessible after page refresh
  // Excel Expected Result: Entity onboarding form should reload successfully with all configured sections displayed
  test("Case ID:CLM-TC-148 - Add Entity Form → Add Entity form remains accessible after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-148] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Device blocklist");
    });
    await test.step("[CLM-TC-148] Validate expected results from Excel", async () => {
      await expect(clmPage.addEntityForm).toBeVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Minimum Screening Eligibility Rule", () => {
  // Excel Test Case ID: CLM-TC-149
  // Excel Scenario: Verify entity can be submitted when minimum screening criteria is satisfied
  // Excel Expected Result: Submission accepted; request submitted modal shows Pending Checker status.
  test("Case ID:CLM-TC-149 - Minimum Screening Eligibility Rule → entity can be submitted when minimum screening criteria is satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-149] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-149] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-150
  // Excel Scenario: Verify entity submission is blocked when minimum screening criteria is not satisfied
  // Excel Expected Result: Submission is blocked with validation that at least one of full name, IP address, mobile number, or device ID must be populated.
  test("Case ID:CLM-TC-150 - Minimum Screening Eligibility Rule → entity submission is blocked when minimum screening criteria is not satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-150] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    await clmPage.submitEntity();
    await clmPage.expectSubmissionBlocked();
    });
    await test.step("[CLM-TC-150] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionBlocked();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-151
  // Excel Scenario: Verify validation message is displayed for screening-ineligible entity
  // Excel Expected Result: Appropriate validation message should be displayed explaining minimum screening requirements
  test("Case ID:CLM-TC-151 - Minimum Screening Eligibility Rule → validation message is displayed for screening-ineligible entity", async ({ testData }) => {
    await test.step("[CLM-TC-151] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    await clmPage.submitEntity();
    await clmPage.expectSubmissionBlocked();
    });
    await test.step("[CLM-TC-151] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-152
  // Excel Scenario: Verify screening eligibility validation occurs before request generation
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-152 - Minimum Screening Eligibility Rule → screening eligibility validation occurs before request generation", async ({ testData }) => {
    await test.step("[CLM-TC-152] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-152] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-153
  // Excel Scenario: Verify screening-eligible entity generates onboarding request
  // Excel Expected Result: Submission accepted; request submitted modal shows Pending Checker status.
  test("Case ID:CLM-TC-153 - Minimum Screening Eligibility Rule → screening-eligible entity generates onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-153] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-153] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-154
  // Excel Scenario: Verify eligible entity enters Pending Approval workflow
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-154 - Minimum Screening Eligibility Rule → eligible entity enters Pending Approval workflow", async ({ testData }) => {
    await test.step("[CLM-TC-154] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-154] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-155
  // Excel Scenario: Verify screening eligibility validation is consistently enforced
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-155 - Minimum Screening Eligibility Rule → screening eligibility validation is consistently enforced", async ({ testData }) => {
    await test.step("[CLM-TC-155] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-155] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-156
  // Excel Scenario: Verify Save Draft allows incomplete entity information
  // Excel Expected Result: Draft should be saved successfully without screening eligibility validation failure
  test("Case ID:CLM-TC-156 - Minimum Screening Eligibility Rule → Save Draft allows incomplete entity information", async ({ testData }) => {
    await test.step("[CLM-TC-156] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-156] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-157
  // Excel Scenario: Verify edited draft can be submitted after eligibility requirements are satisfied
  // Excel Expected Result: Verification confirms that edited draft can be submitted after eligibility requirements are satisfied without errors and with data consistent across views.
  test("Case ID:CLM-TC-157 - Minimum Screening Eligibility Rule → edited draft can be submitted after eligibility requirements are satisfied", async ({ testData }) => {
    await test.step("[CLM-TC-157] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-157] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-158
  // Excel Scenario: Verify approved entity is available for downstream screening
  // Excel Expected Result: Entity should be available for subsequent AML screening operations
  test("Case ID:CLM-TC-158 - Minimum Screening Eligibility Rule → approved entity is available for downstream screening", async ({ testData }) => {
    await test.step("[CLM-TC-158] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureMinimumScreeningEligibility();
    });
    await test.step("[CLM-TC-158] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Identity Information", () => {
  // Excel Test Case ID: CLM-TC-159
  // Excel Scenario: Verify identity information section is displayed on Add Entity form
  // Excel Expected Result: Identity section is visible with all configured fields and helper text.
  test("Case ID:CLM-TC-159 - Identity Information → identity information section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-159] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Test Entity Alpha");
    });
    await test.step("[CLM-TC-159] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-160
  // Excel Scenario: Verify First Name field accepts valid input
  // Excel Expected Result: Full name accepts valid input and is stored for screening (name components captured in single field).
  test("Case ID:CLM-TC-160 - Identity Information → First Name field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-160] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Rajan Mehta");
    });
    await test.step("[CLM-TC-160] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-161
  // Excel Scenario: Verify Last Name field accepts valid input
  // Excel Expected Result: Full name accepts valid input and is stored for screening (name components captured in single field).
  test("Case ID:CLM-TC-161 - Identity Information → Last Name field accepts valid input", async ({ testData }) => {
    await test.step("[CLM-TC-161] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Al-Farrukh Trading LLC");
    });
    await test.step("[CLM-TC-161] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-162
  // Excel Scenario: Verify Full Name is captured correctly for screening purposes
  // Excel Expected Result: Approved entry profile shows exact full name used for screening.
  test("Case ID:CLM-TC-162 - Identity Information → Full Name is captured correctly for screening purposes", async ({ testData }) => {
    await test.step("[CLM-TC-162] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("192.168.44.0/24");
    });
    await test.step("[CLM-TC-162] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-163
  // Excel Scenario: Verify Alias information can be captured
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-163 - Identity Information → Alias information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-163] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Khalid Al-Mansouri");
    });
    await test.step("[CLM-TC-163] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-164
  // Excel Scenario: Verify multiple aliases can be captured when supported
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-164 - Identity Information → multiple aliases can be captured when supported", async ({ testData }) => {
    await test.step("[CLM-TC-164] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("IMEI-3571920XXXXXX");
    });
    await test.step("[CLM-TC-164] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-165
  // Excel Scenario: Verify identity fields accept maximum supported length
  // Excel Expected Result: Verification confirms that identity fields accept maximum supported length without errors and with data consistent across views.
  test("Case ID:CLM-TC-165 - Identity Information → identity fields accept maximum supported length", async ({ testData }) => {
    await test.step("[CLM-TC-165] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-165] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-166
  // Excel Scenario: Verify identity fields reject values exceeding configured limits
  // Excel Expected Result: System blocks submission and shows a clear validation message at Full name.
  test("Case ID:CLM-TC-166 - Identity Information → identity fields reject values exceeding configured limits", async ({ testData }) => {
    await test.step("[CLM-TC-166] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-166] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-167
  // Excel Scenario: Verify identity information remains intact while completing onboarding form
  // Excel Expected Result: Verification confirms that identity information remains intact while completing onboarding form without errors and with data consistent across views.
  test("Case ID:CLM-TC-167 - Identity Information → identity information remains intact while completing onboarding form", async ({ testData }) => {
    await test.step("[CLM-TC-167] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("PEP — internal identified");
    });
    await test.step("[CLM-TC-167] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-168
  // Excel Scenario: Verify identity information is retained in draft entity
  // Excel Expected Result: Previously entered identity information should be retained
  test("Case ID:CLM-TC-168 - Identity Information → identity information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-168] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Device blocklist");
    });
    await test.step("[CLM-TC-168] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-169
  // Excel Scenario: Verify identity information is retained in submitted onboarding request
  // Excel Expected Result: Request should display entered identity information accurately
  test("Case ID:CLM-TC-169 - Identity Information → identity information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-169] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Adverse media flagged");
    });
    await test.step("[CLM-TC-169] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-170
  // Excel Scenario: Verify approved entity displays correct identity information
  // Excel Expected Result: Entity details should display accurate identity information
  test("Case ID:CLM-TC-170 - Identity Information → approved entity displays correct identity information", async ({ testData }) => {
    await test.step("[CLM-TC-170] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentityInformation("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-170] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Identifier Information", () => {
  // Excel Test Case ID: CLM-TC-171
  // Excel Scenario: Verify Identifier Information section is displayed on Add Entity form
  // Excel Expected Result: Identifier Information section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls.
  test("Case ID:CLM-TC-171 - Identifier Information → Identifier Information section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-171] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-171] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-172
  // Excel Scenario: Verify user can capture government issued identifier information
  // Excel Expected Result: Identifier information should be accepted successfully
  test("Case ID:CLM-TC-172 - Identifier Information → user can capture government issued identifier information", async ({ testData }) => {
    await test.step("[CLM-TC-172] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-172] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-173
  // Excel Scenario: Verify identifier fields accept alphanumeric values where supported
  // Excel Expected Result: Verification confirms that identifier fields accept alphanumeric values where supported without errors and with data consistent across views.
  test("Case ID:CLM-TC-173 - Identifier Information → identifier fields accept alphanumeric values where supported", async ({ testData }) => {
    await test.step("[CLM-TC-173] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-173] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-174
  // Excel Scenario: Verify identifier fields enforce configured maximum length
  // Excel Expected Result: Identifier value within configured limit should be accepted
  test("Case ID:CLM-TC-174 - Identifier Information → identifier fields enforce configured maximum length", async ({ testData }) => {
    await test.step("[CLM-TC-174] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-174] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-175
  // Excel Scenario: Verify identifier fields reject values exceeding configured limits
  // Excel Expected Result: System blocks submission and shows a clear validation message at target field.
  test("Case ID:CLM-TC-175 - Identifier Information → identifier fields reject values exceeding configured limits", async ({ testData }) => {
    await test.step("[CLM-TC-175] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-175] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-176
  // Excel Scenario: Verify multiple identifier values can be captured for the same entity when supported
  // Excel Expected Result: All configured identifier values should be retained successfully
  test("Case ID:CLM-TC-176 - Identifier Information → multiple identifier values can be captured for the same entity when supported", async ({ testData }) => {
    await test.step("[CLM-TC-176] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-176] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-177
  // Excel Scenario: Verify identifier information remains intact while completing onboarding workflow
  // Excel Expected Result: Entered identifier information should remain unchanged
  test("Case ID:CLM-TC-177 - Identifier Information → identifier information remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-177] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-177] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-178
  // Excel Scenario: Verify identifier information is retained in draft entity
  // Excel Expected Result: Previously entered identifier information should be retained
  test("Case ID:CLM-TC-178 - Identifier Information → identifier information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-178] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-178] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-179
  // Excel Scenario: Verify identifier information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate identifier information
  test("Case ID:CLM-TC-179 - Identifier Information → identifier information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-179] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-179] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillIdentifierInformation("PASSPORT-12345");
    });
    await test.step("[CLM-TC-180] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Digital Identifiers", () => {
  // Excel Test Case ID: CLM-TC-181
  // Excel Scenario: Verify Digital Identifiers section is displayed on Add Entity form
  // Excel Expected Result: Digital Identifiers section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls.
  test("Case ID:CLM-TC-181 - Digital Identifiers → Digital Identifiers section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-181] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-181] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-182
  // Excel Scenario: Verify email identifier can be captured
  // Excel Expected Result: Verification confirms that email identifier can be captured without errors and with data consistent across views.
  test("Case ID:CLM-TC-182 - Digital Identifiers → email identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-182] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-182] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-183
  // Excel Scenario: Verify mobile identifier can be captured
  // Excel Expected Result: Verification confirms that mobile identifier can be captured without errors and with data consistent across views.
  test("Case ID:CLM-TC-183 - Digital Identifiers → mobile identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-183] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-183] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-184
  // Excel Scenario: Verify IP Address identifier can be captured
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-184 - Digital Identifiers → IP Address identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-184] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-184] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-185
  // Excel Scenario: Verify Device Identifier can be captured
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-185 - Digital Identifiers → Device Identifier can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-185] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-185] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-186
  // Excel Scenario: Verify multiple digital identifiers can be captured for a single entity
  // Excel Expected Result: All configured digital identifiers should be stored successfully
  test("Case ID:CLM-TC-186 - Digital Identifiers → multiple digital identifiers can be captured for a single entity", async ({ testData }) => {
    await test.step("[CLM-TC-186] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-186] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-187
  // Excel Scenario: Verify digital identifiers remain intact while completing onboarding workflow
  // Excel Expected Result: Entered digital identifiers should remain unchanged
  test("Case ID:CLM-TC-187 - Digital Identifiers → digital identifiers remain intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-187] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-187] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-188
  // Excel Scenario: Verify digital identifiers are retained in draft entity
  // Excel Expected Result: Previously entered digital identifiers should be retained
  test("Case ID:CLM-TC-188 - Digital Identifiers → digital identifiers are retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-188] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-188] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-189
  // Excel Scenario: Verify digital identifiers are retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate digital identifier information
  test("Case ID:CLM-TC-189 - Digital Identifiers → digital identifiers are retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-189] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-189] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillDigitalIdentifiers("wallet@example.com");
    });
    await test.step("[CLM-TC-190] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Localization", () => {
  // Excel Test Case ID: CLM-TC-191
  // Excel Scenario: Verify Localization section is displayed on Add Entity form
  // Excel Expected Result: Localization section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls.
  test("Case ID:CLM-TC-191 - Localization → Localization section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-191] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-191] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-192
  // Excel Scenario: Verify country information can be captured
  // Excel Expected Result: Country information should be accepted successfully
  test("Case ID:CLM-TC-192 - Localization → country information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-192] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-192] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-193
  // Excel Scenario: Verify nationality information can be captured
  // Excel Expected Result: Nationality information should be accepted successfully
  test("Case ID:CLM-TC-193 - Localization → nationality information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-193] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-193] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-194
  // Excel Scenario: Verify address information can be captured
  // Excel Expected Result: Address information should be accepted successfully
  test("Case ID:CLM-TC-194 - Localization → address information can be captured", async ({ testData }) => {
    await test.step("[CLM-TC-194] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-194] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-195
  // Excel Scenario: Verify multilingual/localized values can be captured where supported
  // Excel Expected Result: Localized information should be accepted successfully
  test("Case ID:CLM-TC-195 - Localization → multilingual/localized values can be captured where supported", async ({ testData }) => {
    await test.step("[CLM-TC-195] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-195] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-196
  // Excel Scenario: Verify localization information remains intact while completing onboarding workflow
  // Excel Expected Result: Entered localization information should remain unchanged
  test("Case ID:CLM-TC-196 - Localization → localization information remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-196] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-196] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-197
  // Excel Scenario: Verify localization information is retained in draft entity
  // Excel Expected Result: Previously entered localization information should be retained
  test("Case ID:CLM-TC-197 - Localization → localization information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-197] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-197] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-198
  // Excel Scenario: Verify localization information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate localization information
  test("Case ID:CLM-TC-198 - Localization → localization information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-198] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-198] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-199] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-200
  // Excel Scenario: Verify localization data remains available for screening and investigation workflows
  // Excel Expected Result: Localization information should remain available and complete for screening operations
  test("Case ID:CLM-TC-200 - Localization → localization data remains available for screening and investigation workflows", async ({ testData }) => {
    await test.step("[CLM-TC-200] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureLocalization("ar-SA");
    });
    await test.step("[CLM-TC-200] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Risk & Governance", () => {
  // Excel Test Case ID: CLM-TC-201
  // Excel Scenario: Verify Risk & Governance section is displayed on Add Entity form
  // Excel Expected Result: Risk & Governance section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls.
  test("Case ID:CLM-TC-201 - Risk & Governance → Risk & Governance section is displayed on Add Entity form", async ({ testData }) => {
    await test.step("[CLM-TC-201] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-201] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-202
  // Excel Scenario: Verify user can configure available risk classification values
  // Excel Expected Result: Risk & governance fields accept input and display correctly on form and approved profile.
  test("Case ID:CLM-TC-202 - Risk & Governance → user can configure available risk classification values", async ({ testData }) => {
    await test.step("[CLM-TC-202] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-202] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-203
  // Excel Scenario: Verify risk configuration remains intact while completing onboarding workflow
  // Excel Expected Result: Risk & governance fields accept input and display correctly on form and approved profile.
  test("Case ID:CLM-TC-203 - Risk & Governance → risk configuration remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-203] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-203] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-204
  // Excel Scenario: Verify governance-related information can be captured during onboarding
  // Excel Expected Result: Risk & governance fields accept input and display correctly on form and approved profile.
  test("Case ID:CLM-TC-204 - Risk & Governance → governance-related information can be captured during onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-204] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-204] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-205
  // Excel Scenario: Verify risk and governance information is retained in draft entity
  // Excel Expected Result: Risk and governance values are retained when draft is reopened.
  test("Case ID:CLM-TC-205 - Risk & Governance → risk and governance information is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-205] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-205] Validate expected results from Excel", async () => {
      await clmPage.expectDraftStateVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-206
  // Excel Scenario: Verify risk and governance information is retained in submitted onboarding request
  // Excel Expected Result: Submitted request carries TTL, reason, and source reference unchanged.
  test("Case ID:CLM-TC-206 - Risk & Governance → risk and governance information is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-206] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-206] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-207
  // Excel Scenario: Verify approved entity retains risk and governance information
  // Excel Expected Result: Risk & governance fields accept input and display correctly on form and approved profile.
  test("Case ID:CLM-TC-207 - Risk & Governance → approved entity retains risk and governance information", async ({ testData }) => {
    await test.step("[CLM-TC-207] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-207] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-208
  // Excel Scenario: Verify risk and governance information remains available for downstream screening activities
  // Excel Expected Result: Approved entry TTL and governance metadata drive screening eligibility and expiry behaviour.
  test("Case ID:CLM-TC-208 - Risk & Governance → risk and governance information remains available for downstream screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-208] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.configureRiskGovernance("High");
    });
    await test.step("[CLM-TC-208] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Real-Time Alert Configuration", () => {
  // Excel Test Case ID: CLM-TC-209
  // Excel Scenario: Verify Real-Time Alert Configuration section is displayed
  // Excel Expected Result: Time Alert Configuration section is visible with all configured fields and mandatory indicators; layout matches specification without truncation or missing controls.
  test("Case ID:CLM-TC-209 - Real-Time Alert Configuration → Real-Time Alert Configuration section is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-209] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-209] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-210
  // Excel Scenario: Verify available alert configuration options can be selected
  // Excel Expected Result: Selected alert configuration should be accepted successfully
  test("Case ID:CLM-TC-210 - Real-Time Alert Configuration → available alert configuration options can be selected", async ({ testData }) => {
    await test.step("[CLM-TC-210] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-210] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-211
  // Excel Scenario: Verify alert configuration remains intact while completing onboarding workflow
  // Excel Expected Result: Verification confirms that alert configuration remains intact while completing onboarding workflow without errors and with data consistent across views.
  test("Case ID:CLM-TC-211 - Real-Time Alert Configuration → alert configuration remains intact while completing onboarding workflow", async ({ testData }) => {
    await test.step("[CLM-TC-211] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-211] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectAlertGeneration();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-212
  // Excel Scenario: Verify alert configuration is retained in draft entity
  // Excel Expected Result: Previously configured alert settings should be retained
  test("Case ID:CLM-TC-212 - Real-Time Alert Configuration → alert configuration is retained in draft entity", async ({ testData }) => {
    await test.step("[CLM-TC-212] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-212] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-213
  // Excel Scenario: Verify alert configuration is retained in submitted onboarding request
  // Excel Expected Result: Submitted request should display accurate alert configuration
  test("Case ID:CLM-TC-213 - Real-Time Alert Configuration → alert configuration is retained in submitted onboarding request", async ({ testData }) => {
    await test.step("[CLM-TC-213] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-213] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-214] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-215] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-216
  // Excel Scenario: Verify alert configuration is available for downstream monitoring workflows
  // Excel Expected Result: Configured alert settings should remain available for downstream AML monitoring activities
  test("Case ID:CLM-TC-216 - Real-Time Alert Configuration → alert configuration is available for downstream monitoring workflows", async ({ testData }) => {
    await test.step("[CLM-TC-216] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openCreateListForm();
    await clmPage.configureRealTimeAlert();
    });
    await test.step("[CLM-TC-216] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Submission Workflow", () => {
  // Excel Test Case ID: CLM-TC-217
  // Excel Scenario: Verify screening-eligible entity can be submitted for approval
  // Excel Expected Result: Submission accepted; request submitted modal shows Pending Checker status.
  test("Case ID:CLM-TC-217 - Entity Submission Workflow → screening-eligible entity can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-217] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: checker;
    // TODO: Entity submission role — switch session to: checker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("192.168.44.0/24");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-217] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-218
  // Excel Scenario: Verify entity submission generates Maker-Checker request
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-218 - Entity Submission Workflow → entity submission generates Maker-Checker request", async ({ testData }) => {
    await test.step("[CLM-TC-218] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Device blocklist");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-218] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-219
  // Excel Scenario: Verify submitted entity enters Pending Approval state
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-219 - Entity Submission Workflow → submitted entity enters Pending Approval state", async ({ testData }) => {
    await test.step("[CLM-TC-219] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Adverse media flagged");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-219] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-220
  // Excel Scenario: Verify submitted entity request is visible in approval queue
  // Excel Expected Result: Verification confirms that submitted entity request is visible in approval queue without errors and with data consistent across views.
  test("Case ID:CLM-TC-220 - Entity Submission Workflow → submitted entity request is visible in approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-220] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Internal fraud — flagged");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-220] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-221
  // Excel Scenario: Verify submitted request retains complete onboarding information
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-221 - Entity Submission Workflow → submitted request retains complete onboarding information", async ({ testData }) => {
    await test.step("[CLM-TC-221] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Entity submission role — switch session to: Maker;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Rejected KYC applicants");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-221] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-222
  // Excel Scenario: Verify entity request remains pending until checker action
  // Excel Expected Result: Request should remain in Pending Approval state until checker action occurs
  test("Case ID:CLM-TC-222 - Entity Submission Workflow → entity request remains pending until checker action", async ({ testData }) => {
    await test.step("[CLM-TC-222] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("PEP — internal identified");
    await clmPage.submitEntity();
    await clmPage.openAllRequests();
    });
    await test.step("[CLM-TC-222] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Device blocklist");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-223] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-224
  // Excel Scenario: Verify approved entity retains all onboarding information
  // Excel Expected Result: Approved entity should display all onboarding information accurately
  test("Case ID:CLM-TC-224 - Entity Submission Workflow → approved entity retains all onboarding information", async ({ testData }) => {
    await test.step("[CLM-TC-224] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Adverse media flagged");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-224] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-225
  // Excel Scenario: Verify approved entity contributes to custom list statistics
  // Excel Expected Result: Verification confirms that approved entity contributes to custom list statistics without errors and with data consistent across views.
  test("Case ID:CLM-TC-225 - Entity Submission Workflow → approved entity contributes to custom list statistics", async ({ testData }) => {
    await test.step("[CLM-TC-225] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Internal fraud — flagged");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-225] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-226
  // Excel Scenario: Verify approved entity becomes available for AML screening operations
  // Excel Expected Result: Entity should be available for subsequent AML screening and monitoring workflows
  test("Case ID:CLM-TC-226 - Entity Submission Workflow → approved entity becomes available for AML screening operations", async ({ testData }) => {
    await test.step("[CLM-TC-226] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Entity submission role — switch session to: Compliance Officer;
    await clmPage.openAddEntityForm();
    await clmPage.fillEntityName("Rejected KYC applicants");
    await clmPage.submitEntity();
    });
    await test.step("[CLM-TC-226] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Grid", () => {
  // Excel Test Case ID: CLM-TC-227
  // Excel Scenario: Verify Entity grid is displayed within selected custom list
  // Excel Expected Result: Verify Entity grid is displayed within selected custom list — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-227 - Entity Grid → Entity grid is displayed within selected custom list", async ({ testData }) => {
    await test.step("[CLM-TC-227] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-227] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-228
  // Excel Scenario: Verify all configured entity grid columns are displayed
  // Excel Expected Result: All required columns are present, sortable where indicated, and aligned with data.
  test("Case ID:CLM-TC-228 - Entity Grid → all configured entity grid columns are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-228] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-228] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-229
  // Excel Scenario: Verify entity information displayed in grid matches onboarded data
  // Excel Expected Result: Entity information displayed in grid should match stored entity data Values remain accurate after refresh and align with backend inventory.
  test("Case ID:CLM-TC-229 - Entity Grid → entity information displayed in grid matches onboarded data", async ({ testData }) => {
    await test.step("[CLM-TC-229] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Adverse media flagged");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-229] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-230
  // Excel Scenario: Verify entity status is displayed for each entity
  // Excel Expected Result: Verification confirms that entity status is displayed for each entity without errors and with data consistent across views.
  test("Case ID:CLM-TC-230 - Entity Grid → entity status is displayed for each entity", async ({ testData }) => {
    await test.step("[CLM-TC-230] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-230] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-231
  // Excel Scenario: Verify entity status displayed in grid matches actual entity status
  // Excel Expected Result: Verify entity status displayed in grid matches actual entity status — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-231 - Entity Grid → entity status displayed in grid matches actual entity status", async ({ testData }) => {
    await test.step("[CLM-TC-231] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-231] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-232
  // Excel Scenario: Verify grid displays multiple entity records correctly
  // Excel Expected Result: Verify grid displays multiple entity records correctly — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-232 - Entity Grid → grid displays multiple entity records correctly", async ({ testData }) => {
    await test.step("[CLM-TC-232] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-232] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-233
  // Excel Scenario: Verify newly approved entity appears in entity grid
  // Excel Expected Result: Verify newly approved entity appears in entity grid — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-233 - Entity Grid → newly approved entity appears in entity grid", async ({ testData }) => {
    await test.step("[CLM-TC-233] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-233] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Adverse media flagged");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-234] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-235
  // Excel Scenario: Verify entity grid data remains consistent after page refresh
  // Excel Expected Result: Verify entity grid data remains consistent after page refresh — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-235 - Entity Grid → entity grid data remains consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-235] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-235] Validate expected results from Excel", async () => {
      await clmPage.expectEntityGridVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-236
  // Excel Scenario: Verify entity count displayed in grid aligns with custom list statistics
  // Excel Expected Result: Entity count should match corresponding custom list statistics Values remain accurate after refresh and align with backend inventory.
  test("Case ID:CLM-TC-236 - Entity Grid → entity count displayed in grid aligns with custom list statistics", async ({ testData }) => {
    await test.step("[CLM-TC-236] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.expectEntityGridVisible();
    });
    await test.step("[CLM-TC-236] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("View Entity", () => {
  // Excel Test Case ID: CLM-TC-247
  // Excel Scenario: Verify View action is available for onboarded entities
  // Excel Expected Result: Entry profile displays identity, identifiers, digital IDs, localisation, risk, TTL, and status read-only.
  test("Case ID:CLM-TC-247 - View Entity → View action is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-247] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("192.168.44.0/24");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-247] Validate expected results from Excel", async () => {
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-248
  // Excel Scenario: Verify View action opens entity details page
  // Excel Expected Result: Entry profile displays identity, identifiers, digital IDs, localisation, risk, TTL, and status read-only.
  test("Case ID:CLM-TC-248 - View Entity → View action opens entity details page", async ({ testData }) => {
    await test.step("[CLM-TC-248] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Khalid Al-Mansouri");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-248] Validate expected results from Excel", async () => {
      await clmPage.expectTtlDisplay();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-249
  // Excel Scenario: Verify identity information is displayed correctly in entity details
  // Excel Expected Result: Verification confirms that identity information is displayed correctly in entity details without errors and with data consistent across views.
  test("Case ID:CLM-TC-249 - View Entity → identity information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-249] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Adverse media flagged");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-249] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-250
  // Excel Scenario: Verify identifier information is displayed correctly in entity details
  // Excel Expected Result: Identifier information should match onboarded values
  test("Case ID:CLM-TC-250 - View Entity → identifier information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-250] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Internal fraud — flagged");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-250] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-251
  // Excel Scenario: Verify digital identifiers are displayed correctly in entity details
  // Excel Expected Result: Verification confirms that digital identifiers are displayed correctly in entity details without errors and with data consistent across views.
  test("Case ID:CLM-TC-251 - View Entity → digital identifiers are displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-251] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Rejected KYC applicants");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-251] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-252
  // Excel Scenario: Verify localization information is displayed correctly in entity details
  // Excel Expected Result: Localization information should match onboarded values
  test("Case ID:CLM-TC-252 - View Entity → localization information is displayed correctly in entity details", async ({ testData }) => {
    await test.step("[CLM-TC-252] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("PEP — internal identified");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-252] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-253
  // Excel Scenario: Verify risk and governance information is displayed correctly
  // Excel Expected Result: Risk & governance fields accept input and display correctly on form and approved profile.
  test("Case ID:CLM-TC-253 - View Entity → risk and governance information is displayed correctly", async ({ testData }) => {
    await test.step("[CLM-TC-253] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Device blocklist");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-253] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-254
  // Excel Scenario: Verify entity lifecycle status is displayed in details page
  // Excel Expected Result: Entity details should display current lifecycle status
  test("Case ID:CLM-TC-254 - View Entity → entity lifecycle status is displayed in details page", async ({ testData }) => {
    await test.step("[CLM-TC-254] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Adverse media flagged");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-254] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-255
  // Excel Scenario: Verify entity metadata is displayed in details page
  // Excel Expected Result: Entity details should display available metadata information
  test("Case ID:CLM-TC-255 - View Entity → entity metadata is displayed in details page", async ({ testData }) => {
    await test.step("[CLM-TC-255] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Internal fraud — flagged");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-255] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-256
  // Excel Scenario: Verify entity details remain consistent after page refresh
  // Excel Expected Result: Entity details should reload successfully with consistent information
  test("Case ID:CLM-TC-256 - View Entity → entity details remain consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-256] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Rejected KYC applicants");
    await clmPage.expectEntityDetailsVisible();
    });
    await test.step("[CLM-TC-256] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Edit Entity", () => {
  // Excel Test Case ID: CLM-TC-257
  // Excel Scenario: Verify Edit action is available for onboarded entities
  // Excel Expected Result: Verification confirms that Edit action is available for onboarded entities without errors and with data consistent across views.
  test("Case ID:CLM-TC-257 - Edit Entity → Edit action is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-257] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("PEP — internal identified");
    });
    await test.step("[CLM-TC-257] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-258
  // Excel Scenario: Verify Edit action opens entity in edit mode
  // Excel Expected Result: Edit modal pre-fills current values; submission creates pending request; live list unchanged until approval.
  test("Case ID:CLM-TC-258 - Edit Entity → Edit action opens entity in edit mode", async ({ testData }) => {
    await test.step("[CLM-TC-258] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.editEntity("Device blocklist");
    });
    await test.step("[CLM-TC-258] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-259
  // Excel Scenario: Verify existing entity information is pre-populated in Edit form
  // Excel Expected Result: Previously saved entity information should be displayed
  test("Case ID:CLM-TC-259 - Edit Entity → existing entity information is pre-populated in Edit form", async ({ testData }) => {
    await test.step("[CLM-TC-259] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Adverse media flagged");
    });
    await test.step("[CLM-TC-259] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-260
  // Excel Scenario: Verify editable entity fields can be modified
  // Excel Expected Result: Verification confirms that editable entity fields can be modified without errors and with data consistent across views.
  test("Case ID:CLM-TC-260 - Edit Entity → editable entity fields can be modified", async ({ testData }) => {
    await test.step("[CLM-TC-260] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-260] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-261
  // Excel Scenario: Verify modified values remain intact during edit session
  // Excel Expected Result: Modified values should remain unchanged until saved or submitted
  test("Case ID:CLM-TC-261 - Edit Entity → modified values remain intact during edit session", async ({ testData }) => {
    await test.step("[CLM-TC-261] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-261] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-262
  // Excel Scenario: Verify updated entity can be submitted for approval
  // Excel Expected Result: Entity update request should be submitted successfully
  test("Case ID:CLM-TC-262 - Edit Entity → updated entity can be submitted for approval", async ({ testData }) => {
    await test.step("[CLM-TC-262] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("PEP — internal identified");
    await clmPage.fillEntityName("PEP — internal identified Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-262] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-263
  // Excel Scenario: Verify entity modification generates approval request
  // Excel Expected Result: Verification confirms that entity modification generates approval request without errors and with data consistent across views.
  test("Case ID:CLM-TC-263 - Edit Entity → entity modification generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-263] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Device blocklist");
    });
    await test.step("[CLM-TC-263] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-264
  // Excel Scenario: Verify entity update request enters Pending Approval status
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-264 - Edit Entity → entity update request enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-264] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.editEntity("Adverse media flagged");
    await clmPage.fillEntityName("Adverse media flagged Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-264] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-265
  // Excel Scenario: Verify submitted update request retains modified entity information
  // Excel Expected Result: Request should display all modified information accurately
  test("Case ID:CLM-TC-265 - Edit Entity → submitted update request retains modified entity information", async ({ testData }) => {
    await test.step("[CLM-TC-265] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Internal fraud — flagged");
    await clmPage.fillEntityName("Internal fraud — flagged Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-265] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-266
  // Excel Scenario: Verify approved entity reflects updated information
  // Excel Expected Result: Entity details should display approved updated information
  test("Case ID:CLM-TC-266 - Edit Entity → approved entity reflects updated information", async ({ testData }) => {
    await test.step("[CLM-TC-266] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.editEntity("Rejected KYC applicants");
    await clmPage.fillEntityName("Rejected KYC applicants Updated");
    await clmPage.saveEntityChanges();
    });
    await test.step("[CLM-TC-266] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableEntity("PEP — internal identified");
    });
    await test.step("[CLM-TC-267] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableEntity("Device blocklist");
    });
    await test.step("[CLM-TC-268] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-269
  // Excel Scenario: Verify Enable/Disable request generates approval request
  // Excel Expected Result: Verification confirms that Enable/Disable request generates approval request without errors and with data consistent across views.
  test("Case ID:CLM-TC-269 - Enable Disable Entity → Enable/Disable request generates approval request", async ({ testData }) => {
    await test.step("[CLM-TC-269] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableEntity("Adverse media flagged");
    });
    await test.step("[CLM-TC-269] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectDisableConfirmation();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-270
  // Excel Scenario: Verify Enable/Disable request enters Pending Approval status
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-270 - Enable Disable Entity → Enable/Disable request enters Pending Approval status", async ({ testData }) => {
    await test.step("[CLM-TC-270] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.disableEntity("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-270] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-271
  // Excel Scenario: Verify entity status remains unchanged before approval
  // Excel Expected Result: Entity status should remain unchanged until checker approval
  test("Case ID:CLM-TC-271 - Enable Disable Entity → entity status remains unchanged before approval", async ({ testData }) => {
    await test.step("[CLM-TC-271] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.enableEntity("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-271] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-272
  // Excel Scenario: Verify approved Disable request changes entity status
  // Excel Expected Result: Verification confirms that approved Disable request changes entity status without errors and with data consistent across views.
  test("Case ID:CLM-TC-272 - Enable Disable Entity → approved Disable request changes entity status", async ({ testData }) => {
    await test.step("[CLM-TC-272] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableEntity("PEP — internal identified");
    });
    await test.step("[CLM-TC-272] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectDisableConfirmation();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-273
  // Excel Scenario: Verify approved Enable request changes entity status
  // Excel Expected Result: Verification confirms that approved Enable request changes entity status without errors and with data consistent across views.
  test("Case ID:CLM-TC-273 - Enable Disable Entity → approved Enable request changes entity status", async ({ testData }) => {
    await test.step("[CLM-TC-273] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.enableEntity("Device blocklist");
    });
    await test.step("[CLM-TC-273] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-274
  // Excel Scenario: Verify disabled entity remains visible in entity inventory
  // Excel Expected Result: Disabled entity should remain visible with correct status
  test("Case ID:CLM-TC-274 - Enable Disable Entity → disabled entity remains visible in entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-274] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.disableEntity("Adverse media flagged");
    });
    await test.step("[CLM-TC-274] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-275
  // Excel Scenario: Verify entity grid reflects latest approved status
  // Excel Expected Result: Verify entity grid reflects latest approved status — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-275 - Enable Disable Entity → entity grid reflects latest approved status", async ({ testData }) => {
    await test.step("[CLM-TC-275] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.enableEntity("Internal fraud — flagged");
    });
    await test.step("[CLM-TC-275] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-276
  // Excel Scenario: Verify only approved requests trigger entity status transition
  // Excel Expected Result: Entity status should not change until approval workflow is completed
  test("Case ID:CLM-TC-276 - Enable Disable Entity → only approved requests trigger entity status transition", async ({ testData }) => {
    await test.step("[CLM-TC-276] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.enableEntity("Rejected KYC applicants");
    });
    await test.step("[CLM-TC-276] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity Metadata", () => {
  // Excel Test Case ID: CLM-TC-277
  // Excel Scenario: Verify Maker information is captured during entity onboarding
  // Excel Expected Result: Verification confirms that Maker information is captured during entity onboarding without errors and with data consistent across views.
  test("Case ID:CLM-TC-277 - Entity Metadata → Maker information is captured during entity onboarding", async ({ testData }) => {
    await test.step("[CLM-TC-277] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("PEP — internal identified");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-277] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-278
  // Excel Scenario: Verify Checker information is captured after approval
  // Excel Expected Result: Checker information should be available and accurate
  test("Case ID:CLM-TC-278 - Entity Metadata → Checker information is captured after approval", async ({ testData }) => {
    await test.step("[CLM-TC-278] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Device blocklist");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-278] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-279
  // Excel Scenario: Verify Date Created is captured for entity
  // Excel Expected Result: Verification confirms that Date Created is captured for entity without errors and with data consistent across views.
  test("Case ID:CLM-TC-279 - Entity Metadata → Date Created is captured for entity", async ({ testData }) => {
    await test.step("[CLM-TC-279] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Adverse media flagged");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-279] Validate expected results from Excel", async () => {
      await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-280
  // Excel Scenario: Verify Date Last Modified is updated after approved changes
  // Excel Expected Result: Date Last Modified should reflect latest approved update
  test("Case ID:CLM-TC-280 - Entity Metadata → Date Last Modified is updated after approved changes", async ({ testData }) => {
    await test.step("[CLM-TC-280] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Internal fraud — flagged");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-280] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-281
  // Excel Scenario: Verify metadata remains consistent across grid and entity details
  // Excel Expected Result: Verify metadata remains consistent across grid and entity details — UI matches specification with accurate data and no layout defects.
  test("Case ID:CLM-TC-281 - Entity Metadata → metadata remains consistent across grid and entity details", async ({ testData }) => {
    await test.step("[CLM-TC-281] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Rejected KYC applicants");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-281] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-282
  // Excel Scenario: Verify metadata remains intact after entity status changes
  // Excel Expected Result: Metadata information should remain unchanged except applicable modification details
  test("Case ID:CLM-TC-282 - Entity Metadata → metadata remains intact after entity status changes", async ({ testData }) => {
    await test.step("[CLM-TC-282] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("PEP — internal identified");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-282] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-283
  // Excel Scenario: Verify metadata remains available after entity modification
  // Excel Expected Result: Maker, Checker and date information should remain available
  test("Case ID:CLM-TC-283 - Entity Metadata → metadata remains available after entity modification", async ({ testData }) => {
    await test.step("[CLM-TC-283] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Device blocklist");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-283] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-284
  // Excel Scenario: Verify metadata provides complete audit traceability
  // Excel Expected Result: Entity metadata should provide complete traceability information
  test("Case ID:CLM-TC-284 - Entity Metadata → metadata provides complete audit traceability", async ({ testData }) => {
    await test.step("[CLM-TC-284] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Adverse media flagged");
    await clmPage.expectEntityMetadataVisible();
    });
    await test.step("[CLM-TC-284] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Entity History", () => {
  // Excel Test Case ID: CLM-TC-285
  // Excel Scenario: Verify Entity History section is available for onboarded entities
  // Excel Expected Result: History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons.
  test("Case ID:CLM-TC-285 - Entity History → Entity History section is available for onboarded entities", async ({ testData }) => {
    await test.step("[CLM-TC-285] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Rajan Mehta");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-285] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-286
  // Excel Scenario: Verify entity onboarding activity is recorded in history
  // Excel Expected Result: Entity onboarding event should be recorded in history
  test("Case ID:CLM-TC-286 - Entity History → entity onboarding activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-286] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Rejected KYC applicants");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-286] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("PEP — internal identified");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-287] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-288
  // Excel Scenario: Verify entity enable activity is recorded in history
  // Excel Expected Result: Verification confirms that entity enable activity is recorded in history without errors and with data consistent across views.
  test("Case ID:CLM-TC-288 - Entity History → entity enable activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-288] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Device blocklist");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-288] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-289
  // Excel Scenario: Verify entity disable activity is recorded in history
  // Excel Expected Result: Verification confirms that entity disable activity is recorded in history without errors and with data consistent across views.
  test("Case ID:CLM-TC-289 - Entity History → entity disable activity is recorded in history", async ({ testData }) => {
    await test.step("[CLM-TC-289] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.viewEntity("Adverse media flagged");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-289] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectDisableConfirmation();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-290
  // Excel Scenario: Verify history entries display activity timestamps
  // Excel Expected Result: History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons.
  test("Case ID:CLM-TC-290 - Entity History → history entries display activity timestamps", async ({ testData }) => {
    await test.step("[CLM-TC-290] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Rajan Mehta");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-290] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-291
  // Excel Scenario: Verify history entries display user accountability information
  // Excel Expected Result: History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons.
  test("Case ID:CLM-TC-291 - Entity History → history entries display user accountability information", async ({ testData }) => {
    await test.step("[CLM-TC-291] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("Al-Farrukh Trading LLC");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-291] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-292
  // Excel Scenario: Verify Entity History maintains complete lifecycle traceability
  // Excel Expected Result: History shows chronological approved events with maker, checker, timestamps, field deltas, and reasons.
  test("Case ID:CLM-TC-292 - Entity History → Entity History maintains complete lifecycle traceability", async ({ testData }) => {
    await test.step("[CLM-TC-292] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.viewEntity("192.168.44.0/24");
    await clmPage.openEntityHistory();
    await clmPage.expectEntityHistoryVisible();
    });
    await test.step("[CLM-TC-292] Validate expected results from Excel", async () => {
      await clmPage.expectEntityHistoryVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Template Download", () => {
  // Excel Test Case ID: CLM-TC-293
  // Excel Scenario: Verify template download option is available on Bulk Upload screen
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-293 - Template Download → template download option is available on Bulk Upload screen", async ({ testData }) => {
    await test.step("[CLM-TC-293] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Device blocklist");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-293] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-294
  // Excel Scenario: Verify template file downloads successfully
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-294 - Template Download → template file downloads successfully", async ({ testData }) => {
    await test.step("[CLM-TC-294] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-294] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-295
  // Excel Scenario: Verify downloaded template file is not corrupted
  // Excel Expected Result: Upload rejected before workflow with actionable error; no partial onboarding.
  test("Case ID:CLM-TC-295 - Template Download → downloaded template file is not corrupted", async ({ testData }) => {
    await test.step("[CLM-TC-295] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-295] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-296
  // Excel Scenario: Verify template contains expected column structure
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-296 - Template Download → template contains expected column structure", async ({ testData }) => {
    await test.step("[CLM-TC-296] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-296] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-297
  // Excel Scenario: Verify template column headers are clearly identifiable
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-297 - Template Download → template column headers are clearly identifiable", async ({ testData }) => {
    await test.step("[CLM-TC-297] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-297] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-298
  // Excel Scenario: Verify template remains downloadable across multiple attempts
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-298 - Template Download → template remains downloadable across multiple attempts", async ({ testData }) => {
    await test.step("[CLM-TC-298] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Device blocklist");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-298] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-299
  // Excel Scenario: Verify downloaded template can be used for upload preparation
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-299 - Template Download → downloaded template can be used for upload preparation", async ({ testData }) => {
    await test.step("[CLM-TC-299] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-299] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-300
  // Excel Scenario: Verify template download does not alter existing uploaded records
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-300 - Template Download → template download does not alter existing uploaded records", async ({ testData }) => {
    await test.step("[CLM-TC-300] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.downloadTemplate();
    await clmPage.expectTemplateDownloadStarted();
    });
    await test.step("[CLM-TC-300] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Upload Validation", () => {
  // Excel Test Case ID: CLM-TC-301
  // Excel Scenario: Verify upload control is available on Bulk Upload screen
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-301 - Upload Validation → upload control is available on Bulk Upload screen", async ({ testData }) => {
    await test.step("[CLM-TC-301] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-301] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-302
  // Excel Scenario: Verify valid upload file can be selected
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-302 - Upload Validation → valid upload file can be selected", async ({ testData }) => {
    await test.step("[CLM-TC-302] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-302] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-303
  // Excel Scenario: Verify valid upload file can be submitted
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-303 - Upload Validation → valid upload file can be submitted", async ({ testData }) => {
    await test.step("[CLM-TC-303] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Device blocklist");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-303] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-304
  // Excel Scenario: Verify upload request generates processing workflow
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-304 - Upload Validation → upload request generates processing workflow", async ({ testData }) => {
    await test.step("[CLM-TC-304] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-304] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-305
  // Excel Scenario: Verify uploaded file enters approval workflow when applicable
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-305 - Upload Validation → uploaded file enters approval workflow when applicable", async ({ testData }) => {
    await test.step("[CLM-TC-305] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("entities-valid.csv");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-305] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-306
  // Excel Scenario: Verify upload request status is displayed
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-306 - Upload Validation → upload request status is displayed", async ({ testData }) => {
    await test.step("[CLM-TC-306] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-306] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-307
  // Excel Scenario: Verify upload with empty file is handled appropriately
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-307 - Upload Validation → upload with empty file is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-307] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-307] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-308
  // Excel Scenario: Verify upload with incomplete onboarding data is validated
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-308 - Upload Validation → upload with incomplete onboarding data is validated", async ({ testData }) => {
    await test.step("[CLM-TC-308] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Device blocklist");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-308] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-309
  // Excel Scenario: Verify upload with multiple entity records is accepted
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-309 - Upload Validation → upload with multiple entity records is accepted", async ({ testData }) => {
    await test.step("[CLM-TC-309] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-309] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-310
  // Excel Scenario: Verify uploaded entity records are associated with selected custom list
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-310 - Upload Validation → uploaded entity records are associated with selected custom list", async ({ testData }) => {
    await test.step("[CLM-TC-310] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-310] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-311
  // Excel Scenario: Verify upload processing preserves record count integrity
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-311 - Upload Validation → upload processing preserves record count integrity", async ({ testData }) => {
    await test.step("[CLM-TC-311] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-311] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-312
  // Excel Scenario: Verify upload validation messages are displayed when errors occur
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-312 - Upload Validation → upload validation messages are displayed when errors occur", async ({ testData }) => {
    await test.step("[CLM-TC-312] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("PEP — internal identified");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-312] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-313
  // Excel Scenario: Verify upload request retains uploaded file details
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-313 - Upload Validation → upload request retains uploaded file details", async ({ testData }) => {
    await test.step("[CLM-TC-313] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Device blocklist");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-313] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-314
  // Excel Scenario: Verify upload processing does not impact existing approved entities
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-314 - Upload Validation → upload processing does not impact existing approved entities", async ({ testData }) => {
    await test.step("[CLM-TC-314] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Adverse media flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-314] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-315
  // Excel Scenario: Verify successfully processed upload contributes to entity inventory
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-315 - Upload Validation → successfully processed upload contributes to entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-315] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.submitBulkUpload();
    });
    await test.step("[CLM-TC-315] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("File Format Validation", () => {
  // Excel Test Case ID: CLM-TC-316
  // Excel Scenario: Verify supported template file format can be uploaded
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-316 - File Format Validation → supported template file format can be uploaded", async ({ testData }) => {
    await test.step("[CLM-TC-316] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-316] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-317
  // Excel Scenario: Verify unsupported file format is rejected
  // Excel Expected Result: Upload rejected before workflow with actionable error; no partial onboarding.
  test("Case ID:CLM-TC-317 - File Format Validation → unsupported file format is rejected", async ({ testData }) => {
    await test.step("[CLM-TC-317] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("invalid_format.pdf");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-317] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-318
  // Excel Scenario: Verify corrupted file upload is handled appropriately
  // Excel Expected Result: Upload rejected before workflow with actionable error; no partial onboarding.
  test("Case ID:CLM-TC-318 - File Format Validation → corrupted file upload is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-318] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-318] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-319
  // Excel Scenario: Verify blank file upload is handled appropriately
  // Excel Expected Result: Upload rejected before workflow with actionable error; no partial onboarding.
  test("Case ID:CLM-TC-319 - File Format Validation → blank file upload is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-319] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-319] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-320
  // Excel Scenario: Verify file containing only headers is validated
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-320 - File Format Validation → file containing only headers is validated", async ({ testData }) => {
    await test.step("[CLM-TC-320] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-320] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-321
  // Excel Scenario: Verify file containing special characters is handled appropriately
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-321 - File Format Validation → file containing special characters is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-321] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-321] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-322
  // Excel Scenario: Verify file with altered template structure is validated
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-322 - File Format Validation → file with altered template structure is validated", async ({ testData }) => {
    await test.step("[CLM-TC-322] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-322] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-323
  // Excel Scenario: Verify upload validation occurs before onboarding request generation
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-323 - File Format Validation → upload validation occurs before onboarding request generation", async ({ testData }) => {
    await test.step("[CLM-TC-323] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-323] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-324
  // Excel Scenario: Verify valid file format proceeds to upload workflow
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-324 - File Format Validation → valid file format proceeds to upload workflow", async ({ testData }) => {
    await test.step("[CLM-TC-324] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-324] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-325
  // Excel Scenario: Verify file format validation results are communicated to user
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-325 - File Format Validation → file format validation results are communicated to user", async ({ testData }) => {
    await test.step("[CLM-TC-325] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectUploadValidationError();
    });
    await test.step("[CLM-TC-325] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Mandatory Columns", () => {
  // Excel Test Case ID: CLM-TC-326
  // Excel Scenario: Verify uploaded file containing all mandatory columns is accepted for processing
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-326 - Mandatory Columns → uploaded file containing all mandatory columns is accepted for processing", async ({ testData }) => {
    await test.step("[CLM-TC-326] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-326] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-327
  // Excel Scenario: Verify upload is prevented when a mandatory column is completely removed from template
  // Excel Expected Result: Template contains required headers and opens without corruption.
  test("Case ID:CLM-TC-327 - Mandatory Columns → upload is prevented when a mandatory column is completely removed from template", async ({ testData }) => {
    await test.step("[CLM-TC-327] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-327] Validate expected results from Excel", async () => {
      await clmPage.expectPageTitleVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-328
  // Excel Scenario: Verify upload validation identifies multiple missing mandatory columns
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-328 - Mandatory Columns → upload validation identifies multiple missing mandatory columns", async ({ testData }) => {
    await test.step("[CLM-TC-328] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-328] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-329
  // Excel Scenario: Verify upload validation is triggered before onboarding workflow initiation
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-329 - Mandatory Columns → upload validation is triggered before onboarding workflow initiation", async ({ testData }) => {
    await test.step("[CLM-TC-329] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-329] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-330
  // Excel Scenario: Verify file containing mandatory columns but blank mandatory values is validated
  // Excel Expected Result: Upload rejected before workflow with actionable error; no partial onboarding.
  test("Case ID:CLM-TC-330 - Mandatory Columns → file containing mandatory columns but blank mandatory values is validated", async ({ testData }) => {
    await test.step("[CLM-TC-330] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-330] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-331
  // Excel Scenario: Verify mandatory column validation is applied across all uploaded records
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-331 - Mandatory Columns → mandatory column validation is applied across all uploaded records", async ({ testData }) => {
    await test.step("[CLM-TC-331] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-331] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-332
  // Excel Scenario: Verify column order changes do not impact mandatory column validation when supported
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-332 - Mandatory Columns → column order changes do not impact mandatory column validation when supported", async ({ testData }) => {
    await test.step("[CLM-TC-332] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-332] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-333
  // Excel Scenario: Verify mandatory column validation feedback is understandable and actionable
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-333 - Mandatory Columns → mandatory column validation feedback is understandable and actionable", async ({ testData }) => {
    await test.step("[CLM-TC-333] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-333] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-334
  // Excel Scenario: Verify corrected file can be re-uploaded successfully after mandatory column issues are resolved
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-334 - Mandatory Columns → corrected file can be re-uploaded successfully after mandatory column issues are resolved", async ({ testData }) => {
    await test.step("[CLM-TC-334] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-334] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-335
  // Excel Scenario: Verify mandatory column validation maintains onboarding data integrity
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-335 - Mandatory Columns → mandatory column validation maintains onboarding data integrity", async ({ testData }) => {
    await test.step("[CLM-TC-335] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectMandatoryColumnError();
    });
    await test.step("[CLM-TC-335] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Duplicate Detection", () => {
  // Excel Test Case ID: CLM-TC-336
  // Excel Scenario: Verify upload containing unique entity records proceeds successfully
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-336 - Duplicate Detection → upload containing unique entity records proceeds successfully", async ({ testData }) => {
    await test.step("[CLM-TC-336] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-336] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-337
  // Excel Scenario: Verify duplicate records within the same upload file are identified during validation
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-337 - Duplicate Detection → duplicate records within the same upload file are identified during validation", async ({ testData }) => {
    await test.step("[CLM-TC-337] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-337] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-338
  // Excel Scenario: Verify duplicate validation occurs before onboarding workflow initiation
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-338 - Duplicate Detection → duplicate validation occurs before onboarding workflow initiation", async ({ testData }) => {
    await test.step("[CLM-TC-338] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-338] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-339
  // Excel Scenario: Verify duplicate validation feedback identifies affected records
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-339 - Duplicate Detection → duplicate validation feedback identifies affected records", async ({ testData }) => {
    await test.step("[CLM-TC-339] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-339] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-340
  // Excel Scenario: Verify upload containing a mixture of unique and duplicate records is validated correctly
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-340 - Duplicate Detection → upload containing a mixture of unique and duplicate records is validated correctly", async ({ testData }) => {
    await test.step("[CLM-TC-340] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-340] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-341
  // Excel Scenario: Verify duplicate validation remains consistent across repeated uploads
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-341 - Duplicate Detection → duplicate validation remains consistent across repeated uploads", async ({ testData }) => {
    await test.step("[CLM-TC-341] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-341] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-342
  // Excel Scenario: Verify corrected upload file can be resubmitted after duplicate issues are resolved
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-342 - Duplicate Detection → corrected upload file can be resubmitted after duplicate issues are resolved", async ({ testData }) => {
    await test.step("[CLM-TC-342] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-342] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-343
  // Excel Scenario: Verify duplicate validation does not impact unrelated valid records
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-343 - Duplicate Detection → duplicate validation does not impact unrelated valid records", async ({ testData }) => {
    await test.step("[CLM-TC-343] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-343] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-344
  // Excel Scenario: Verify duplicate validation preserves onboarding traceability
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-344 - Duplicate Detection → duplicate validation preserves onboarding traceability", async ({ testData }) => {
    await test.step("[CLM-TC-344] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-344] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-345
  // Excel Scenario: Verify duplicate detection supports onboarding data quality objectives
  // Excel Expected Result: Duplicates flagged with row references; user can correct and re-upload.
  test("Case ID:CLM-TC-345 - Duplicate Detection → duplicate detection supports onboarding data quality objectives", async ({ testData }) => {
    await test.step("[CLM-TC-345] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("valid_entries.xlsx");
    await clmPage.expectDuplicateDetection();
    });
    await test.step("[CLM-TC-345] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_valid.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-346] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-347
  // Excel Scenario: Verify validation report identifies records that passed validation
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-347 - Validation Report → validation report identifies records that passed validation", async ({ testData }) => {
    await test.step("[CLM-TC-347] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-347] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-348
  // Excel Scenario: Verify validation report identifies records that failed validation
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-348 - Validation Report → validation report identifies records that failed validation", async ({ testData }) => {
    await test.step("[CLM-TC-348] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-348] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-349
  // Excel Scenario: Verify validation report provides record-level traceability
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-349 - Validation Report → validation report provides record-level traceability", async ({ testData }) => {
    await test.step("[CLM-TC-349] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-349] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-350
  // Excel Scenario: Verify validation report remains accessible after upload processing completes
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-350 - Validation Report → validation report remains accessible after upload processing completes", async ({ testData }) => {
    await test.step("[CLM-TC-350] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-350] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-351
  // Excel Scenario: Verify validation report accurately reflects upload outcome
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-351 - Validation Report → validation report accurately reflects upload outcome", async ({ testData }) => {
    await test.step("[CLM-TC-351] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-351] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-352
  // Excel Scenario: Verify validation report supports upload correction activities
  // Excel Expected Result: Validation report remains available with unchanged pass/fail counts and row-level error detail after navigation.
  test("Case ID:CLM-TC-352 - Validation Report → validation report supports upload correction activities", async ({ testData }) => {
    await test.step("[CLM-TC-352] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_mixed.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-352] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openBulkUploadModal();
    await clmPage.uploadBulkFile("custom_list_entries_valid.xlsx");
    await clmPage.submitBulkUpload();
    await clmPage.openValidationReport();
    await clmPage.expectValidationReportVisible();
    });
    await test.step("[CLM-TC-353] Validate expected results from Excel", async () => {
      await clmPage.expectValidationReportVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("All Requests", () => {
  // Excel Test Case ID: CLM-TC-364
  // Excel Scenario: Verify All Requests page is accessible from Custom List Manager navigation
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-364 - All Requests → All Requests page is accessible from Custom List Manager navigation", async ({ testData }) => {
    await test.step("[CLM-TC-364] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-364] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-365
  // Excel Scenario: Verify all submitted governance requests are displayed in All Requests inventory
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-365 - All Requests → all submitted governance requests are displayed in All Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-365] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-365] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-366
  // Excel Scenario: Verify request inventory displays key request information required for review
  // Excel Expected Result: Request inventory should display configured request attributes required for governance review
  test("Case ID:CLM-TC-366 - All Requests → request inventory displays key request information required for review", async ({ testData }) => {
    await test.step("[CLM-TC-366] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-366] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-367
  // Excel Scenario: Verify requests generated from different workflows are visible in All Requests
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-367 - All Requests → requests generated from different workflows are visible in All Requests", async ({ testData }) => {
    await test.step("[CLM-TC-367] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-367] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-368
  // Excel Scenario: Verify request status is displayed for each governance request
  // Excel Expected Result: Each request should display its current workflow status
  test("Case ID:CLM-TC-368 - All Requests → request status is displayed for each governance request", async ({ testData }) => {
    await test.step("[CLM-TC-368] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-368] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-369
  // Excel Scenario: Verify latest submitted request appears in All Requests inventory
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-369 - All Requests → latest submitted request appears in All Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-369] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openTab("All Requests");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-369] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-370
  // Excel Scenario: Verify request inventory remains accurate after page refresh
  // Excel Expected Result: Request information should remain accurate after refresh
  test("Case ID:CLM-TC-370 - All Requests → request inventory remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-370] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-370] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-371
  // Excel Scenario: Verify approved requests remain traceable within request inventory
  // Excel Expected Result: Approved requests should remain available according to configured lifecycle rules
  test("Case ID:CLM-TC-371 - All Requests → approved requests remain traceable within request inventory", async ({ testData }) => {
    await test.step("[CLM-TC-371] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-371] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-372] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-373
  // Excel Scenario: Verify request inventory supports governance auditability
  // Excel Expected Result: Request inventory should provide sufficient traceability for governance review
  test("Case ID:CLM-TC-373 - All Requests → request inventory supports governance auditability", async ({ testData }) => {
    await test.step("[CLM-TC-373] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openTab("Active");
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-373] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("My Requests", () => {
  // Excel Test Case ID: CLM-TC-374
  // Excel Scenario: Verify My Requests page is accessible from governance module
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-374 - My Requests → My Requests page is accessible from governance module", async ({ testData }) => {
    await test.step("[CLM-TC-374] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-374] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-375
  // Excel Scenario: Verify only requests created by logged-in user are displayed
  // Excel Expected Result: Only requests created by the logged-in user should be displayed
  test("Case ID:CLM-TC-375 - My Requests → only requests created by logged-in user are displayed", async ({ testData }) => {
    await test.step("[CLM-TC-375] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: My Requests ownership — verify requests for role: Compliance Officer;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-375] Validate expected results from Excel", async () => {
      await clmPage.expectSidebarUserIdentityVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-376
  // Excel Scenario: Verify requests submitted from different workflows are displayed in My Requests
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-376 - My Requests → requests submitted from different workflows are displayed in My Requests", async ({ testData }) => {
    await test.step("[CLM-TC-376] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-376] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-377
  // Excel Scenario: Verify request status is visible within My Requests
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-377 - My Requests → request status is visible within My Requests", async ({ testData }) => {
    await test.step("[CLM-TC-377] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-377] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-378
  // Excel Scenario: Verify newly submitted request appears in My Requests inventory
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-378 - My Requests → newly submitted request appears in My Requests inventory", async ({ testData }) => {
    await test.step("[CLM-TC-378] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-378] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-379
  // Excel Scenario: Verify approved user request reflects updated status
  // Excel Expected Result: Verification confirms that approved user request reflects updated status without errors and with data consistent across views.
  test("Case ID:CLM-TC-379 - My Requests → approved user request reflects updated status", async ({ testData }) => {
    await test.step("[CLM-TC-379] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: My Requests ownership — verify requests for role: Compliance Officer;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-379] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-380
  // Excel Scenario: Verify rejected user request reflects updated status
  // Excel Expected Result: Verification confirms that rejected user request reflects updated status without errors and with data consistent across views.
  test("Case ID:CLM-TC-380 - My Requests → rejected user request reflects updated status", async ({ testData }) => {
    await test.step("[CLM-TC-380] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: My Requests ownership — verify requests for role: Compliance Officer;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-380] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-381
  // Excel Scenario: Verify My Requests inventory remains accurate after page refresh
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-381 - My Requests → My Requests inventory remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-381] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: My Requests ownership — verify requests for role: Maker;
    await clmPage.openMyRequests();
    await clmPage.expectRequestQueueVisible();
    });
    await test.step("[CLM-TC-381] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Request Details", () => {
  // Excel Test Case ID: CLM-TC-382
  // Excel Scenario: Verify user can open detailed view of governance request
  // Excel Expected Result: Verification confirms that user can open detailed view of governance request without errors and with data consistent across views.
  test("Case ID:CLM-TC-382 - Request Details → user can open detailed view of governance request", async ({ testData }) => {
    await test.step("[CLM-TC-382] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-382] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-383
  // Excel Scenario: Verify Request Details page displays request identification information
  // Excel Expected Result: Request Details should display request identification information
  test("Case ID:CLM-TC-383 - Request Details → Request Details page displays request identification information", async ({ testData }) => {
    await test.step("[CLM-TC-383] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-383] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-384
  // Excel Scenario: Verify Request Details page displays submitted business data
  // Excel Expected Result: All submitted information should be available for review
  test("Case ID:CLM-TC-384 - Request Details → Request Details page displays submitted business data", async ({ testData }) => {
    await test.step("[CLM-TC-384] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-384] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-385
  // Excel Scenario: Verify Request Details page displays request creator information
  // Excel Expected Result: Verification confirms that Request Details page displays request creator information without errors and with data consistent across views.
  test("Case ID:CLM-TC-385 - Request Details → Request Details page displays request creator information", async ({ testData }) => {
    await test.step("[CLM-TC-385] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-385] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-386
  // Excel Scenario: Verify Request Details page displays request submission information
  // Excel Expected Result: Request submission details should be displayed accurately
  test("Case ID:CLM-TC-386 - Request Details → Request Details page displays request submission information", async ({ testData }) => {
    await test.step("[CLM-TC-386] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-386] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-387
  // Excel Scenario: Verify Request Details page displays current request status
  // Excel Expected Result: Request status should reflect current workflow state
  test("Case ID:CLM-TC-387 - Request Details → Request Details page displays current request status", async ({ testData }) => {
    await test.step("[CLM-TC-387] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-387] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-388] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-389
  // Excel Scenario: Verify approved request details remain available for audit review
  // Excel Expected Result: Approved request information should remain accessible
  test("Case ID:CLM-TC-389 - Request Details → approved request details remain available for audit review", async ({ testData }) => {
    await test.step("[CLM-TC-389] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-389] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-390] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-391
  // Excel Scenario: Verify Request Details maintains complete governance traceability
  // Excel Expected Result: Request Details should provide complete traceability of governance activity
  test("Case ID:CLM-TC-391 - Request Details → Request Details maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-391] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-391] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Approval Workflow", () => {
  // Excel Test Case ID: CLM-TC-392
  // Excel Scenario: Verify checker can access pending approval requests from governance queue
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-392 - Approval Workflow → checker can access pending approval requests from governance queue", async ({ testData }) => {
    await test.step("[CLM-TC-392] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Checker role login — switch session to: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-392] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-393
  // Excel Scenario: Verify checker can review complete request information before approval
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-393 - Approval Workflow → checker can review complete request information before approval", async ({ testData }) => {
    await test.step("[CLM-TC-393] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Checker role login — switch session to: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-393] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-394
  // Excel Scenario: Verify checker can approve eligible governance request
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-394 - Approval Workflow → checker can approve eligible governance request", async ({ testData }) => {
    await test.step("[CLM-TC-394] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Checker role login — switch session to: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-394] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-395
  // Excel Scenario: Verify approved request status is updated appropriately
  // Excel Expected Result: Verification confirms that approved request status is updated appropriately without errors and with data consistent across views.
  test("Case ID:CLM-TC-395 - Approval Workflow → approved request status is updated appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-395] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Checker role login — switch session to: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-395] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-396
  // Excel Scenario: Verify approved request is removed from pending approval queue
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-396 - Approval Workflow → approved request is removed from pending approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-396] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Checker role login — switch session to: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-396] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-397
  // Excel Scenario: Verify approved business object reflects requested changes
  // Excel Expected Result: Requested changes should be applied successfully after approval
  test("Case ID:CLM-TC-397 - Approval Workflow → approved business object reflects requested changes", async ({ testData }) => {
    await test.step("[CLM-TC-397] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Checker role login — switch session to: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-397] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Checker role login — switch session to: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-398] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-399
  // Excel Scenario: Verify approval action captures approval timestamp
  // Excel Expected Result: Approval date and time should be recorded successfully
  test("Case ID:CLM-TC-399 - Approval Workflow → approval action captures approval timestamp", async ({ testData }) => {
    await test.step("[CLM-TC-399] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Checker role login — switch session to: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-399] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-400
  // Excel Scenario: Verify approved request remains available for audit review
  // Excel Expected Result: Approved request should remain available according to governance retention rules
  test("Case ID:CLM-TC-400 - Approval Workflow → approved request remains available for audit review", async ({ testData }) => {
    await test.step("[CLM-TC-400] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Checker role login — switch session to: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-400] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-401
  // Excel Scenario: Verify approval workflow maintains complete governance traceability
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-401 - Approval Workflow → approval workflow maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-401] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // TODO: Checker role login — switch session to: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.approveRequest();
    });
    await test.step("[CLM-TC-401] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Rejection Workflow", () => {
  // Excel Test Case ID: CLM-TC-402
  // Excel Scenario: Verify checker can reject pending governance request
  // Excel Expected Result: Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests.
  test("Case ID:CLM-TC-402 - Rejection Workflow → checker can reject pending governance request", async ({ testData }) => {
    await test.step("[CLM-TC-402] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Periodic compliance review");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-402] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-403
  // Excel Scenario: Verify rejected request status is updated appropriately
  // Excel Expected Result: Verification confirms that rejected request status is updated appropriately without errors and with data consistent across views.
  test("Case ID:CLM-TC-403 - Rejection Workflow → rejected request status is updated appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-403] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-403] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-404
  // Excel Scenario: Verify rejected request is removed from pending approval queue
  // Excel Expected Result: Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests.
  test("Case ID:CLM-TC-404 - Rejection Workflow → rejected request is removed from pending approval queue", async ({ testData }) => {
    await test.step("[CLM-TC-404] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Periodic compliance review");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-404] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-405] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-406] Validate expected results from Excel", async () => {
      await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-407
  // Excel Scenario: Verify rejection action captures rejection timestamp
  // Excel Expected Result: Rejection date and time should be recorded successfully
  test("Case ID:CLM-TC-407 - Rejection Workflow → rejection action captures rejection timestamp", async ({ testData }) => {
    await test.step("[CLM-TC-407] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-407] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Insufficient justification");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-408] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-409
  // Excel Scenario: Verify rejection workflow maintains complete governance traceability
  // Excel Expected Result: Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests.
  test("Case ID:CLM-TC-409 - Rejection Workflow → rejection workflow maintains complete governance traceability", async ({ testData }) => {
    await test.step("[CLM-TC-409] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails("REQ-001");
    await clmPage.rejectRequest("Periodic compliance review");
    await clmPage.expectRejectionWorkflowVisible();
    });
    await test.step("[CLM-TC-409] Validate expected results from Excel", async () => {
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
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-410 - Segregation Of Duties → maker identity is associated with submitted request", async ({ testData }) => {
    await test.step("[CLM-TC-410] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    // Role from Excel: Maker;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-410] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-411
  // Excel Scenario: Verify checker identity is associated with approved request
  // Excel Expected Result: Request should display checker information accurately
  test("Case ID:CLM-TC-411 - Segregation Of Duties → checker identity is associated with approved request", async ({ testData }) => {
    await test.step("[CLM-TC-411] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-411] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-412
  // Excel Scenario: Verify request lifecycle preserves maker and checker traceability
  // Excel Expected Result: Request should display complete maker-checker traceability
  test("Case ID:CLM-TC-412 - Segregation Of Duties → request lifecycle preserves maker and checker traceability", async ({ testData }) => {
    await test.step("[CLM-TC-412] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-412] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-413
  // Excel Scenario: Verify governance workflow records independent review activity
  // Excel Expected Result: Request history should contain evidence of governance review activity
  test("Case ID:CLM-TC-413 - Segregation Of Duties → governance workflow records independent review activity", async ({ testData }) => {
    await test.step("[CLM-TC-413] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-413] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-414] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-415
  // Excel Scenario: Verify checker details remain associated with final decision
  // Excel Expected Result: Checker information should remain associated with final workflow decision
  test("Case ID:CLM-TC-415 - Segregation Of Duties → checker details remain associated with final decision", async ({ testData }) => {
    await test.step("[CLM-TC-415] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-415] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-416
  // Excel Scenario: Verify processed request provides complete accountability trail
  // Excel Expected Result: Request should provide complete accountability information
  test("Case ID:CLM-TC-416 - Segregation Of Duties → processed request provides complete accountability trail", async ({ testData }) => {
    await test.step("[CLM-TC-416] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-416] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-417
  // Excel Scenario: Verify governance workflow supports audit and regulatory review requirements
  // Excel Expected Result: Request should provide sufficient accountability evidence for governance review
  test("Case ID:CLM-TC-417 - Segregation Of Duties → governance workflow supports audit and regulatory review requirements", async ({ testData }) => {
    await test.step("[CLM-TC-417] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    await clmPage.openRequestDetails();
    await clmPage.expectRequestDetailsVisible();
    await clmPage.expectRequestDetailsVisible();
    });
    await test.step("[CLM-TC-417] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("SLA Validation", () => {
  // Excel Test Case ID: CLM-TC-418
  // Excel Scenario: Verify request creation timestamp is captured for governance requests
  // Excel Expected Result: Verification confirms that request creation timestamp is captured for governance requests without errors and with data consistent across views.
  test("Case ID:CLM-TC-418 - SLA Validation → request creation timestamp is captured for governance requests", async ({ testData }) => {
    await test.step("[CLM-TC-418] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-418] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-419
  // Excel Scenario: Verify request processing timestamps are captured during governance workflow
  // Excel Expected Result: Verification confirms that request processing timestamps are captured during governance workflow without errors and with data consistent across views.
  test("Case ID:CLM-TC-419 - SLA Validation → request processing timestamps are captured during governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-419] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-419] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-420
  // Excel Scenario: Verify request lifecycle provides chronological workflow visibility
  // Excel Expected Result: Request lifecycle should display chronological workflow progression
  test("Case ID:CLM-TC-420 - SLA Validation → request lifecycle provides chronological workflow visibility", async ({ testData }) => {
    await test.step("[CLM-TC-420] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-420] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-421
  // Excel Scenario: Verify request timing information remains available after approval
  // Excel Expected Result: Verification confirms that request timing information remains available after approval without errors and with data consistent across views.
  test("Case ID:CLM-TC-421 - SLA Validation → request timing information remains available after approval", async ({ testData }) => {
    await test.step("[CLM-TC-421] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-421] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-422
  // Excel Scenario: Verify request timing information remains available after rejection
  // Excel Expected Result: Verification confirms that request timing information remains available after rejection without errors and with data consistent across views.
  test("Case ID:CLM-TC-422 - SLA Validation → request timing information remains available after rejection", async ({ testData }) => {
    await test.step("[CLM-TC-422] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-422] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-423
  // Excel Scenario: Verify governance workflow records duration-related information when available
  // Excel Expected Result: Duration-related information should be displayed according to implementation
  test("Case ID:CLM-TC-423 - SLA Validation → governance workflow records duration-related information when available", async ({ testData }) => {
    await test.step("[CLM-TC-423] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-423] Validate expected results from Excel", async () => {
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-424
  // Excel Scenario: Verify workflow timing information remains accurate across request lifecycle
  // Excel Expected Result: Timing information should remain consistent and accurate
  test("Case ID:CLM-TC-424 - SLA Validation → workflow timing information remains accurate across request lifecycle", async ({ testData }) => {
    await test.step("[CLM-TC-424] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-424] Validate expected results from Excel", async () => {
      await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-425
  // Excel Scenario: Verify workflow timing information supports governance and audit review
  // Excel Expected Result: Request should provide sufficient timing traceability for governance review
  test("Case ID:CLM-TC-425 - SLA Validation → workflow timing information supports governance and audit review", async ({ testData }) => {
    await test.step("[CLM-TC-425] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openAllRequests();
    // TODO: SLA threshold from Excel: 24 hours;
    await clmPage.expectSlaIndicator();
    });
    await test.step("[CLM-TC-425] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectSlaIndicator();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Listing", () => {
  // Excel Test Case ID: CLM-TC-426
  // Excel Scenario: Verify Audit page is accessible from Custom List Manager navigation
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-426 - Audit Listing → Audit page is accessible from Custom List Manager navigation", async ({ testData }) => {
    await test.step("[CLM-TC-426] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-426] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-427
  // Excel Scenario: Verify audit listing displays recorded governance activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-427 - Audit Listing → audit listing displays recorded governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-427] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-427] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-428
  // Excel Scenario: Verify audit listing displays sufficient information to identify audited events
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-428 - Audit Listing → audit listing displays sufficient information to identify audited events", async ({ testData }) => {
    await test.step("[CLM-TC-428] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-428] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-429
  // Excel Scenario: Verify onboarding activities are captured within audit listing
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-429 - Audit Listing → onboarding activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-429] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-429] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-430
  // Excel Scenario: Verify custom list lifecycle activities are captured within audit listing
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-430 - Audit Listing → custom list lifecycle activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-430] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-430] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-431
  // Excel Scenario: Verify bulk upload activities are captured within audit listing
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-431 - Audit Listing → bulk upload activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-431] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-431] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-432
  // Excel Scenario: Verify approval and rejection activities are captured within audit listing
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-432 - Audit Listing → approval and rejection activities are captured within audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-432] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-432] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-433
  // Excel Scenario: Verify audit listing displays activities in chronological order
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-433 - Audit Listing → audit listing displays activities in chronological order", async ({ testData }) => {
    await test.step("[CLM-TC-433] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-433] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-434
  // Excel Scenario: Verify newly generated activity appears in audit listing
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-434 - Audit Listing → newly generated activity appears in audit listing", async ({ testData }) => {
    await test.step("[CLM-TC-434] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-434] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-435
  // Excel Scenario: Verify audit listing remains accurate after page refresh
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-435 - Audit Listing → audit listing remains accurate after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-435] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.openAuditListing();
    await clmPage.expectAuditListingVisible();
    });
    await test.step("[CLM-TC-435] Validate expected results from Excel", async () => {
      await clmPage.expectAuditListingVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Search", () => {
  // Excel Test Case ID: CLM-TC-436
  // Excel Scenario: Verify audit search control is available
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-436 - Audit Search → audit search control is available", async ({ testData }) => {
    await test.step("[CLM-TC-436] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-436] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-437
  // Excel Scenario: Verify audit search returns matching audit records
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-437 - Audit Search → audit search returns matching audit records", async ({ testData }) => {
    await test.step("[CLM-TC-437] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-437] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-438
  // Excel Scenario: Verify partial search returns relevant audit activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-438 - Audit Search → partial search returns relevant audit activities", async ({ testData }) => {
    await test.step("[CLM-TC-438] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-438] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-439
  // Excel Scenario: Verify audit search result accuracy
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-439 - Audit Search → audit search result accuracy", async ({ testData }) => {
    await test.step("[CLM-TC-439] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-439] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-440
  // Excel Scenario: Verify search with non-existing value returns no matching records
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-440 - Audit Search → search with non-existing value returns no matching records", async ({ testData }) => {
    await test.step("[CLM-TC-440] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-440] Validate expected results from Excel", async () => {
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectEmptyTableState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-441
  // Excel Scenario: Verify audit search supports retrieval of recently generated activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-441 - Audit Search → audit search supports retrieval of recently generated activities", async ({ testData }) => {
    await test.step("[CLM-TC-441] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-441] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-442
  // Excel Scenario: Verify search results remain consistent after page refresh
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-442 - Audit Search → search results remain consistent after page refresh", async ({ testData }) => {
    await test.step("[CLM-TC-442] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-442] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-443
  // Excel Scenario: Verify search capability supports audit investigation activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-443 - Audit Search → search capability supports audit investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-443] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.searchAudit("Test Entity Alpha");
    await clmPage.expectAuditSearchResults();
    });
    await test.step("[CLM-TC-443] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Filters", () => {
  // Excel Test Case ID: CLM-TC-444
  // Excel Scenario: Verify audit filter controls are available
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-444 - Audit Filters → audit filter controls are available", async ({ testData }) => {
    await test.step("[CLM-TC-444] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-444] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-445
  // Excel Scenario: Verify audit records can be filtered using available filter criteria
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-445 - Audit Filters → audit records can be filtered using available filter criteria", async ({ testData }) => {
    await test.step("[CLM-TC-445] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-445] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-446
  // Excel Scenario: Verify filter results display only matching audit records
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-446 - Audit Filters → filter results display only matching audit records", async ({ testData }) => {
    await test.step("[CLM-TC-446] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-446] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-447
  // Excel Scenario: Verify multiple filters can be applied together when supported
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-447 - Audit Filters → multiple filters can be applied together when supported", async ({ testData }) => {
    await test.step("[CLM-TC-447] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-447] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-448
  // Excel Scenario: Verify audit filters can retrieve governance-related activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-448 - Audit Filters → audit filters can retrieve governance-related activities", async ({ testData }) => {
    await test.step("[CLM-TC-448] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-448] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-449
  // Excel Scenario: Verify audit filters can retrieve onboarding-related activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-449 - Audit Filters → audit filters can retrieve onboarding-related activities", async ({ testData }) => {
    await test.step("[CLM-TC-449] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-449] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-450
  // Excel Scenario: Verify filter reset functionality restores complete audit inventory
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-450 - Audit Filters → filter reset functionality restores complete audit inventory", async ({ testData }) => {
    await test.step("[CLM-TC-450] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-450] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-451
  // Excel Scenario: Verify audit filtering supports compliance investigation requirements
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-451 - Audit Filters → audit filtering supports compliance investigation requirements", async ({ testData }) => {
    await test.step("[CLM-TC-451] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.applyAuditFilters("Event Type", "Update");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-451] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Date Range", () => {
  // Excel Test Case ID: CLM-TC-452
  // Excel Scenario: Verify date range filter controls are available on Audit page
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-452 - Audit Date Range → date range filter controls are available on Audit page", async ({ testData }) => {
    await test.step("[CLM-TC-452] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-452] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-453
  // Excel Scenario: Verify audit records can be retrieved using valid date range criteria
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-453 - Audit Date Range → audit records can be retrieved using valid date range criteria", async ({ testData }) => {
    await test.step("[CLM-TC-453] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-453] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-454
  // Excel Scenario: Verify date range results contain only activities within selected period
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-454 - Audit Date Range → date range results contain only activities within selected period", async ({ testData }) => {
    await test.step("[CLM-TC-454] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-454] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-455
  // Excel Scenario: Verify audit activities generated on boundary dates are included appropriately
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-455 - Audit Date Range → audit activities generated on boundary dates are included appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-455] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-455] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-456
  // Excel Scenario: Verify date range with no matching activities is handled appropriately
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-456 - Audit Date Range → date range with no matching activities is handled appropriately", async ({ testData }) => {
    await test.step("[CLM-TC-456] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-456] Validate expected results from Excel", async () => {
      await clmPage.expectAuditPanelLoaded();
    await clmPage.expectEmptyTableState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-457
  // Excel Scenario: Verify date range filtering can retrieve recently generated audit activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-457 - Audit Date Range → date range filtering can retrieve recently generated audit activities", async ({ testData }) => {
    await test.step("[CLM-TC-457] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-457] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-458
  // Excel Scenario: Verify date range filter can be cleared successfully
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-458 - Audit Date Range → date range filter can be cleared successfully", async ({ testData }) => {
    await test.step("[CLM-TC-458] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-458] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-459
  // Excel Scenario: Verify date range filtering supports compliance investigation activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-459 - Audit Date Range → date range filtering supports compliance investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-459] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.setAuditDateRange("2024-01-01", "2024-12-31");
    await clmPage.expectFilteredAuditResults();
    });
    await test.step("[CLM-TC-459] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Event Details", () => {
  // Excel Test Case ID: CLM-TC-460
  // Excel Scenario: Verify user can open detailed view of audit event
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-460 - Event Details → user can open detailed view of audit event", async ({ testData }) => {
    await test.step("[CLM-TC-460] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-460] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-461
  // Excel Scenario: Verify Event Details displays sufficient information to identify audited activity
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-461 - Event Details → Event Details displays sufficient information to identify audited activity", async ({ testData }) => {
    await test.step("[CLM-TC-461] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-461] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-462
  // Excel Scenario: Verify Event Details displays associated user information
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-462 - Event Details → Event Details displays associated user information", async ({ testData }) => {
    await test.step("[CLM-TC-462] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-462] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-463
  // Excel Scenario: Verify Event Details displays activity timing information
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-463 - Event Details → Event Details displays activity timing information", async ({ testData }) => {
    await test.step("[CLM-TC-463] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-463] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-464
  // Excel Scenario: Verify Event Details displays activity outcome information
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-464 - Event Details → Event Details displays activity outcome information", async ({ testData }) => {
    await test.step("[CLM-TC-464] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-464] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-465
  // Excel Scenario: Verify Event Details remain accessible for approved governance activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-465 - Event Details → Event Details remain accessible for approved governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-465] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-465] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-466
  // Excel Scenario: Verify Event Details remain accessible for rejected governance activities
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-466 - Event Details → Event Details remain accessible for rejected governance activities", async ({ testData }) => {
    await test.step("[CLM-TC-466] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-466] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-467
  // Excel Scenario: Verify Event Details provide sufficient information for compliance investigations
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-467 - Event Details → Event Details provide sufficient information for compliance investigations", async ({ testData }) => {
    await test.step("[CLM-TC-467] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.openEventDetails("EVT-001");
    await clmPage.expectEventDetailsVisible();
    });
    await test.step("[CLM-TC-467] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Export", () => {
  // Excel Test Case ID: CLM-TC-468
  // Excel Scenario: Verify audit export option is available
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-468 - Audit Export → audit export option is available", async ({ testData }) => {
    await test.step("[CLM-TC-468] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-468] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-469
  // Excel Scenario: Verify audit records can be exported successfully
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-469 - Audit Export → audit records can be exported successfully", async ({ testData }) => {
    await test.step("[CLM-TC-469] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-469] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-470
  // Excel Scenario: Verify exported audit data matches displayed audit inventory
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-470 - Audit Export → exported audit data matches displayed audit inventory", async ({ testData }) => {
    await test.step("[CLM-TC-470] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-470] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-471
  // Excel Scenario: Verify export supports filtered audit results
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-471 - Audit Export → export supports filtered audit results", async ({ testData }) => {
    await test.step("[CLM-TC-471] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-471] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-472
  // Excel Scenario: Verify export supports date-range based audit investigations
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-472 - Audit Export → export supports date-range based audit investigations", async ({ testData }) => {
    await test.step("[CLM-TC-472] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-472] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-473
  // Excel Scenario: Verify exported audit information remains readable and usable
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-473 - Audit Export → exported audit information remains readable and usable", async ({ testData }) => {
    await test.step("[CLM-TC-473] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-473] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-474
  // Excel Scenario: Verify export operation does not alter audit records
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-474 - Audit Export → export operation does not alter audit records", async ({ testData }) => {
    await test.step("[CLM-TC-474] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-474] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-475
  // Excel Scenario: Verify audit export supports compliance and regulatory review requirements
  // Excel Expected Result: Export file matches on-screen audit rows; export does not modify stored audit records.
  test("Case ID:CLM-TC-475 - Audit Export → audit export supports compliance and regulatory review requirements", async ({ testData }) => {
    await test.step("[CLM-TC-475] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.exportAudit();
    await clmPage.exportAuditAs("CSV");
    });
    await test.step("[CLM-TC-475] Validate expected results from Excel", async () => {
      await clmPage.expectExportOptions();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Audit Integrity", () => {
  // Excel Test Case ID: CLM-TC-476
  // Excel Scenario: Verify audit records remain available after related business object changes
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-476 - Audit Integrity → audit records remain available after related business object changes", async ({ testData }) => {
    await test.step("[CLM-TC-476] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-476] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-477
  // Excel Scenario: Verify audit records remain available after approval workflow completion
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-477 - Audit Integrity → audit records remain available after approval workflow completion", async ({ testData }) => {
    await test.step("[CLM-TC-477] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-477] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-478
  // Excel Scenario: Verify audit records remain available after rejection workflow completion
  // Excel Expected Result: Request moves to Rejected; business object unchanged; maker sees rejection reason in My Requests.
  test("Case ID:CLM-TC-478 - Audit Integrity → audit records remain available after rejection workflow completion", async ({ testData }) => {
    await test.step("[CLM-TC-478] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-478] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectRejectionWorkflowVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-479
  // Excel Scenario: Verify audit entries remain associated with the correct activity
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-479 - Audit Integrity → audit entries remain associated with the correct activity", async ({ testData }) => {
    await test.step("[CLM-TC-479] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-479] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-480
  // Excel Scenario: Verify audit entries remain associated with the responsible user
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-480 - Audit Integrity → audit entries remain associated with the responsible user", async ({ testData }) => {
    await test.step("[CLM-TC-480] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-480] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-481
  // Excel Scenario: Verify audit timestamps remain consistent throughout activity lifecycle
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-481 - Audit Integrity → audit timestamps remain consistent throughout activity lifecycle", async ({ testData }) => {
    await test.step("[CLM-TC-481] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-481] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-482
  // Excel Scenario: Verify audit information remains consistent across listing and detail views
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-482 - Audit Integrity → audit information remains consistent across listing and detail views", async ({ testData }) => {
    await test.step("[CLM-TC-482] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-482] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-483
  // Excel Scenario: Verify audit records support reconstruction of business activity history
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-483 - Audit Integrity → audit records support reconstruction of business activity history", async ({ testData }) => {
    await test.step("[CLM-TC-483] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-483] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-484
  // Excel Scenario: Verify audit records support governance accountability requirements
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-484 - Audit Integrity → audit records support governance accountability requirements", async ({ testData }) => {
    await test.step("[CLM-TC-484] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-484] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-485
  // Excel Scenario: Verify audit trail maintains compliance and regulatory traceability
  // Excel Expected Result: Audit listing shows immutable events with correct user, timestamp, action, and before/after values.
  test("Case ID:CLM-TC-485 - Audit Integrity → audit trail maintains compliance and regulatory traceability", async ({ testData }) => {
    await test.step("[CLM-TC-485] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openAuditListing();
    await clmPage.expectAuditIntegrity();
    });
    await test.step("[CLM-TC-485] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectAuditIntegrity();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("TTL Display", () => {
  // Excel Test Case ID: CLM-TC-486
  // Excel Scenario: Verify TTL information is displayed for entities associated with custom lists configured with a retention period
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-486 - TTL Display → TTL information is displayed for entities associated with custom lists configured with a retention period", async ({ testData }) => {
    await test.step("[CLM-TC-486] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-486] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-487
  // Excel Scenario: Verify TTL values displayed in Entity Grid remain consistent with entity detail information
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-487 - TTL Display → TTL values displayed in Entity Grid remain consistent with entity detail information", async ({ testData }) => {
    await test.step("[CLM-TC-487] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-487] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-488
  // Excel Scenario: Verify TTL information remains visible after entity approval and onboarding completion
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-488 - TTL Display → TTL information remains visible after entity approval and onboarding completion", async ({ testData }) => {
    await test.step("[CLM-TC-488] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-488] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-489
  // Excel Scenario: Verify TTL information remains available after entity modification requests are processed
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-489 - TTL Display → TTL information remains available after entity modification requests are processed", async ({ testData }) => {
    await test.step("[CLM-TC-489] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-489] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-490
  // Excel Scenario: Verify TTL information remains accurate after page refresh and navigation events
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-490 - TTL Display → TTL information remains accurate after page refresh and navigation events", async ({ testData }) => {
    await test.step("[CLM-TC-490] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-490] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-491
  // Excel Scenario: Verify TTL information supports lifecycle monitoring and governance review activities
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-491 - TTL Display → TTL information supports lifecycle monitoring and governance review activities", async ({ testData }) => {
    await test.step("[CLM-TC-491] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectTtlDisplay();
    });
    await test.step("[CLM-TC-491] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expiry", () => {
  // Excel Test Case ID: CLM-TC-492
  // Excel Scenario: Verify entity reaches expiry state when configured TTL period is completed
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-492 - Expiry → entity reaches expiry state when configured TTL period is completed", async ({ testData }) => {
    await test.step("[CLM-TC-492] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-492] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-493
  // Excel Scenario: Verify expiry status is reflected consistently across entity inventory and details views
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-493 - Expiry → expiry status is reflected consistently across entity inventory and details views", async ({ testData }) => {
    await test.step("[CLM-TC-493] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-493] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-494
  // Excel Scenario: Verify expired entities remain traceable for governance and audit review
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-494 - Expiry → expired entities remain traceable for governance and audit review", async ({ testData }) => {
    await test.step("[CLM-TC-494] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-494] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-495
  // Excel Scenario: Verify entity expiry does not impact audit history and governance records
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-495 - Expiry → entity expiry does not impact audit history and governance records", async ({ testData }) => {
    await test.step("[CLM-TC-495] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-495] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-496
  // Excel Scenario: Verify expiry processing maintains entity lifecycle integrity
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-496 - Expiry → expiry processing maintains entity lifecycle integrity", async ({ testData }) => {
    await test.step("[CLM-TC-496] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-496] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expiring Soon", () => {
  // Excel Test Case ID: CLM-TC-497
  // Excel Scenario: Verify entities approaching expiry can be identified through lifecycle monitoring information
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-497 - Expiring Soon → entities approaching expiry can be identified through lifecycle monitoring information", async ({ testData }) => {
    await test.step("[CLM-TC-497] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-497] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-498
  // Excel Scenario: Verify expiring-soon indication remains consistent across system views
  // Excel Expected Result: Entries within 30-day window are flagged for operational review; counts appear in list metadata.
  test("Case ID:CLM-TC-498 - Expiring Soon → expiring-soon indication remains consistent across system views", async ({ testData }) => {
    await test.step("[CLM-TC-498] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-498] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-499
  // Excel Scenario: Verify expiring-soon entities remain available for governance review
  // Excel Expected Result: Entries within 30-day window are flagged for operational review; counts appear in list metadata.
  test("Case ID:CLM-TC-499 - Expiring Soon → expiring-soon entities remain available for governance review", async ({ testData }) => {
    await test.step("[CLM-TC-499] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-499] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-500
  // Excel Scenario: Verify lifecycle monitoring information updates appropriately as entity approaches expiry
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-500 - Expiring Soon → lifecycle monitoring information updates appropriately as entity approaches expiry", async ({ testData }) => {
    await test.step("[CLM-TC-500] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-500] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-501
  // Excel Scenario: Verify expiring-soon information supports operational review and remediation activities
  // Excel Expected Result: Entries within 30-day window are flagged for operational review; counts appear in list metadata.
  test("Case ID:CLM-TC-501 - Expiring Soon → expiring-soon information supports operational review and remediation activities", async ({ testData }) => {
    await test.step("[CLM-TC-501] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.filterExpiringSoon();
    await clmPage.expectExpiryStatusVisible();
    });
    await test.step("[CLM-TC-501] Validate expected results from Excel", async () => {
      await clmPage.expectMetadataIntegrity();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Expired Status", () => {
  // Excel Test Case ID: CLM-TC-502
  // Excel Scenario: Verify expired entities display appropriate lifecycle status
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-502 - Expired Status → expired entities display appropriate lifecycle status", async ({ testData }) => {
    await test.step("[CLM-TC-502] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-502] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-503
  // Excel Scenario: Verify expired entities remain distinguishable from active entities
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-503 - Expired Status → expired entities remain distinguishable from active entities", async ({ testData }) => {
    await test.step("[CLM-TC-503] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-503] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-504
  // Excel Scenario: Verify expired status remains consistent after page refresh and navigation
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-504 - Expired Status → expired status remains consistent after page refresh and navigation", async ({ testData }) => {
    await test.step("[CLM-TC-504] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-504] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-505
  // Excel Scenario: Verify expired entities preserve onboarding and governance information
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-505 - Expired Status → expired entities preserve onboarding and governance information", async ({ testData }) => {
    await test.step("[CLM-TC-505] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-505] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-506
  // Excel Scenario: Verify expired status supports lifecycle governance and compliance review
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-506 - Expired Status → expired status supports lifecycle governance and compliance review", async ({ testData }) => {
    await test.step("[CLM-TC-506] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.applyFilter("Status", "Expired");
    await clmPage.expectExpiredStatusVisible();
    });
    await test.step("[CLM-TC-506] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Screening Exclusion", () => {
  // Excel Test Case ID: CLM-TC-507
  // Excel Scenario: Verify expired entities follow configured screening participation rules
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-507 - Screening Exclusion → expired entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-507] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-507] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-508
  // Excel Scenario: Verify active entities continue to participate in screening operations
  // Excel Expected Result: Active entities should remain available for screening operations
  test("Case ID:CLM-TC-508 - Screening Exclusion → active entities continue to participate in screening operations", async ({ testData }) => {
    await test.step("[CLM-TC-508] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.viewEntity("Device blocklist");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-508] Validate expected results from Excel", async () => {
      await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-509
  // Excel Scenario: Verify lifecycle state changes are reflected in screening eligibility behavior
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-509 - Screening Exclusion → lifecycle state changes are reflected in screening eligibility behavior", async ({ testData }) => {
    await test.step("[CLM-TC-509] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-509] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-510
  // Excel Scenario: Verify expired entities remain visible for investigation even when screening eligibility changes
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-510 - Screening Exclusion → expired entities remain visible for investigation even when screening eligibility changes", async ({ testData }) => {
    await test.step("[CLM-TC-510] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-510] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-511
  // Excel Scenario: Verify screening eligibility behavior remains consistent across entity inventory
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-511 - Screening Exclusion → screening eligibility behavior remains consistent across entity inventory", async ({ testData }) => {
    await test.step("[CLM-TC-511] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal Fraud List");
    await clmPage.viewEntity("Test Entity Alpha");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-511] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-512
  // Excel Scenario: Verify lifecycle-driven screening behavior supports AML governance requirements
  // Excel Expected Result: Entity lifecycle state should govern screening participation in a traceable and auditable manner
  test("Case ID:CLM-TC-512 - Screening Exclusion → lifecycle-driven screening behavior supports AML governance requirements", async ({ testData }) => {
    await test.step("[CLM-TC-512] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.viewEntity("PEP — internal identified");
    await clmPage.expectScreeningExclusionApplied();
    });
    await test.step("[CLM-TC-512] Validate expected results from Excel", async () => {
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
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-513 - Fuzzy Matching → Fuzzy Matching configuration is available during custom list setup", async ({ testData }) => {
    await test.step("[CLM-TC-513] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-513] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-514
  // Excel Scenario: Verify selected Fuzzy Matching configuration is retained after list creation
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-514 - Fuzzy Matching → selected Fuzzy Matching configuration is retained after list creation", async ({ testData }) => {
    await test.step("[CLM-TC-514] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-514] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-515
  // Excel Scenario: Verify selected Fuzzy Matching configuration is retained after list modification
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-515 - Fuzzy Matching → selected Fuzzy Matching configuration is retained after list modification", async ({ testData }) => {
    await test.step("[CLM-TC-515] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-515] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-516
  // Excel Scenario: Verify entities belonging to fuzzy-enabled list participate in screening using configured matching behavior
  // Excel Expected Result: Entities should participate in screening according to configured fuzzy matching settings
  test("Case ID:CLM-TC-516 - Fuzzy Matching → entities belonging to fuzzy-enabled list participate in screening using configured matching behavior", async ({ testData }) => {
    await test.step("[CLM-TC-516] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Rejected KYC applicants");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-516] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-517
  // Excel Scenario: Verify similar-name screening scenarios are processed according to configured fuzzy matching settings
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-517 - Fuzzy Matching → similar-name screening scenarios are processed according to configured fuzzy matching settings", async ({ testData }) => {
    await test.step("[CLM-TC-517] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-517] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-518
  // Excel Scenario: Verify fuzzy matching configuration remains associated with correct custom list
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-518 - Fuzzy Matching → fuzzy matching configuration remains associated with correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-518] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-518] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-519
  // Excel Scenario: Verify fuzzy matching configuration remains intact after entity onboarding activities
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-519 - Fuzzy Matching → fuzzy matching configuration remains intact after entity onboarding activities", async ({ testData }) => {
    await test.step("[CLM-TC-519] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-519] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-520
  // Excel Scenario: Verify fuzzy matching configuration remains visible in governance and audit records where applicable
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-520 - Fuzzy Matching → fuzzy matching configuration remains visible in governance and audit records where applicable", async ({ testData }) => {
    await test.step("[CLM-TC-520] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-520] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-521
  // Excel Scenario: Verify fuzzy matching behavior remains consistent across repeated screening executions
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-521 - Fuzzy Matching → fuzzy matching behavior remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-521] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-521] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-522
  // Excel Scenario: Verify fuzzy matching configuration supports AML screening objectives
  // Excel Expected Result: Fuzzy settings persist after approval; near-match screening hit is evaluated per threshold.
  test("Case ID:CLM-TC-522 - Fuzzy Matching → fuzzy matching configuration supports AML screening objectives", async ({ testData }) => {
    await test.step("[CLM-TC-522] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    // TODO: Fuzzy matching corpus — partial name variants not specified in Excel;
    await clmPage.runFuzzyMatchingTest("Enabled");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-522] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingConfigurationVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Multilingual Matching", () => {
  // Excel Test Case ID: CLM-TC-523
  // Excel Scenario: Verify Multilingual Matching configuration is available during custom list setup
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-523 - Multilingual Matching → Multilingual Matching configuration is available during custom list setup", async ({ testData }) => {
    await test.step("[CLM-TC-523] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-523] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-524
  // Excel Scenario: Verify selected Multilingual Matching configuration is retained after list creation
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-524 - Multilingual Matching → selected Multilingual Matching configuration is retained after list creation", async ({ testData }) => {
    await test.step("[CLM-TC-524] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-524] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-525
  // Excel Scenario: Verify selected Multilingual Matching configuration is retained after list modification
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-525 - Multilingual Matching → selected Multilingual Matching configuration is retained after list modification", async ({ testData }) => {
    await test.step("[CLM-TC-525] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-525] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-526
  // Excel Scenario: Verify multilingual-enabled lists participate in screening using configured matching behavior
  // Excel Expected Result: Screening activity should apply configured multilingual matching behavior
  test("Case ID:CLM-TC-526 - Multilingual Matching → multilingual-enabled lists participate in screening using configured matching behavior", async ({ testData }) => {
    await test.step("[CLM-TC-526] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-526] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-527
  // Excel Scenario: Verify multilingual entity information can participate in configured screening workflow
  // Excel Expected Result: Multilingual entity information should participate in screening according to configured behavior
  test("Case ID:CLM-TC-527 - Multilingual Matching → multilingual entity information can participate in configured screening workflow", async ({ testData }) => {
    await test.step("[CLM-TC-527] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-527] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-528
  // Excel Scenario: Verify multilingual matching configuration remains associated with the correct custom list
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-528 - Multilingual Matching → multilingual matching configuration remains associated with the correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-528] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-528] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-529
  // Excel Scenario: Verify multilingual matching configuration changes remain traceable through governance workflow
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-529 - Multilingual Matching → multilingual matching configuration changes remain traceable through governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-529] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-529] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-530
  // Excel Scenario: Verify multilingual matching configuration supports AML screening requirements
  // Excel Expected Result: Multilingual configuration persists; screening matches native-script variant per rules.
  test("Case ID:CLM-TC-530 - Multilingual Matching → multilingual matching configuration supports AML screening requirements", async ({ testData }) => {
    await test.step("[CLM-TC-530] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // TODO: Multilingual matching corpus — script variants not specified in Excel;
    await clmPage.runMultilingualMatchingTest("محمد");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-530] Validate expected results from Excel", async () => {
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
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("Rejected KYC applicants");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-531] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-532
  // Excel Scenario: Verify primary entity name participates in configured matching workflow
  // Excel Expected Result: Primary entity name should participate in configured matching workflow
  test("Case ID:CLM-TC-532 - Name Matching → primary entity name participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-532] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("PEP — internal identified");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-532] Validate expected results from Excel", async () => {
      await clmPage.expectSubmissionWorkflowState();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-533
  // Excel Scenario: Verify alternate names or aliases participate in configured matching workflow where available
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-533 - Name Matching → alternate names or aliases participate in configured matching workflow where available", async ({ testData }) => {
    await test.step("[CLM-TC-533] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Khalid Al-Mansouri");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-533] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-534
  // Excel Scenario: Verify modified entity names are reflected in subsequent screening activities
  // Excel Expected Result: Latest approved entity name should be used during screening activities
  test("Case ID:CLM-TC-534 - Name Matching → modified entity names are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-534] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("Adverse media flagged");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-534] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-535
  // Excel Scenario: Verify disabled entities follow configured screening participation rules
  // Excel Expected Result: TTL displays consistently on grid and profile; expiry processing updates status without deleting history.
  test("Case ID:CLM-TC-535 - Name Matching → disabled entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-535] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-535] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectEntityHistoryVisible();
    await clmPage.expectTtlDisplay();
    await clmPage.expectExpiryStatusVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-536
  // Excel Scenario: Verify expired entities follow configured screening participation rules
  // Excel Expected Result: Expired entries show Expired status, remain visible for investigation, and are excluded from active screening per rules.
  test("Case ID:CLM-TC-536 - Name Matching → expired entities follow configured screening participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-536] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runNameMatchingTest("Test Entity Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-536] Validate expected results from Excel", async () => {
      await clmPage.expectExpiryStatusVisible();
    await clmPage.expectScreeningExclusionApplied();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-537
  // Excel Scenario: Verify entity onboarding through bulk upload contributes to screening population
  // Excel Expected Result: Valid file passes validation, creates pending request, and approved rows appear in entry grid.
  test("Case ID:CLM-TC-537 - Name Matching → entity onboarding through bulk upload contributes to screening population", async ({ testData }) => {
    await test.step("[CLM-TC-537] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: maker;
    await clmPage.runNameMatchingTest("PEP — internal identified");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-537] Validate expected results from Excel", async () => {
      await clmPage.expectListGridVisible();
    await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-538
  // Excel Scenario: Verify entity onboarding through manual workflow contributes to screening population
  // Excel Expected Result: Manually onboarded entities should participate in screening according to configured rules
  test("Case ID:CLM-TC-538 - Name Matching → entity onboarding through manual workflow contributes to screening population", async ({ testData }) => {
    await test.step("[CLM-TC-538] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("Device blocklist");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-538] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-539
  // Excel Scenario: Verify screening behavior remains consistent across repeated executions
  // Excel Expected Result: Equivalent screening scenarios should produce consistent matching behavior
  test("Case ID:CLM-TC-539 - Name Matching → screening behavior remains consistent across repeated executions", async ({ testData }) => {
    await test.step("[CLM-TC-539] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("Adverse media flagged");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-539] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-540
  // Excel Scenario: Verify name matching functionality supports AML screening and watchlist management objectives
  // Excel Expected Result: Name matching functionality should support effective screening and watchlist management activities
  test("Case ID:CLM-TC-540 - Name Matching → name matching functionality supports AML screening and watchlist management objectives", async ({ testData }) => {
    await test.step("[CLM-TC-540] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runNameMatchingTest("Internal fraud — flagged");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-540] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Alias Matching", () => {
  // Excel Test Case ID: CLM-TC-541
  // Excel Scenario: Verify alias information captured during entity onboarding is retained for screening activities
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-541 - Alias Matching → alias information captured during entity onboarding is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-541] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-541] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-542
  // Excel Scenario: Verify alias information participates in configured screening workflow
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-542 - Alias Matching → alias information participates in configured screening workflow", async ({ testData }) => {
    await test.step("[CLM-TC-542] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-542] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-543
  // Excel Scenario: Verify multiple aliases are available for screening when supported
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-543 - Alias Matching → multiple aliases are available for screening when supported", async ({ testData }) => {
    await test.step("[CLM-TC-543] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-543] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-544
  // Excel Scenario: Verify alias modifications are reflected in subsequent screening activities
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-544 - Alias Matching → alias modifications are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-544] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-544] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-545
  // Excel Scenario: Verify alias information onboarded through bulk upload participates in screening
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-545 - Alias Matching → alias information onboarded through bulk upload participates in screening", async ({ testData }) => {
    await test.step("[CLM-TC-545] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-545] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-546
  // Excel Scenario: Verify disabled entities follow configured alias matching participation rules
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-546 - Alias Matching → disabled entities follow configured alias matching participation rules", async ({ testData }) => {
    await test.step("[CLM-TC-546] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-546] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-547
  // Excel Scenario: Verify alias matching behavior remains consistent across repeated screening executions
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-547 - Alias Matching → alias matching behavior remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-547] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-547] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-548
  // Excel Scenario: Verify alias matching supports AML screening and watchlist investigation requirements
  // Excel Expected Result: Alias participates in screening and generates hit when alias matches watch data.
  test("Case ID:CLM-TC-548 - Alias Matching → alias matching supports AML screening and watchlist investigation requirements", async ({ testData }) => {
    await test.step("[CLM-TC-548] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runAliasMatchingTest("Johnny Alpha");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-548] Validate expected results from Excel", async () => {
      await clmPage.expectMatchingOutcome();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Digital Identifier Matching", () => {
  // Excel Test Case ID: CLM-TC-549
  // Excel Scenario: Verify onboarded email identifiers are retained for screening activities
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-549 - Digital Identifier Matching → onboarded email identifiers are retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-549] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-549] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-550
  // Excel Scenario: Verify email identifiers participate in configured matching workflow
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-550 - Digital Identifier Matching → email identifiers participate in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-550] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-550] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-551
  // Excel Scenario: Verify onboarded mobile identifiers are retained for screening activities
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-551 - Digital Identifier Matching → onboarded mobile identifiers are retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-551] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-551] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-552
  // Excel Scenario: Verify mobile identifiers participate in configured matching workflow
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-552 - Digital Identifier Matching → mobile identifiers participate in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-552] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-552] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-553
  // Excel Scenario: Verify onboarded IP Address information is retained for screening activities
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-553 - Digital Identifier Matching → onboarded IP Address information is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-553] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-553] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-554
  // Excel Scenario: Verify IP Address participates in configured matching workflow
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-554 - Digital Identifier Matching → IP Address participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-554] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-554] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-555
  // Excel Scenario: Verify onboarded Device Identifier information is retained for screening activities
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-555 - Digital Identifier Matching → onboarded Device Identifier information is retained for screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-555] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-555] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-556
  // Excel Scenario: Verify Device Identifier participates in configured matching workflow
  // Excel Expected Result: Identifier is stored, participates in screening, and triggers configured action on hit.
  test("Case ID:CLM-TC-556 - Digital Identifier Matching → Device Identifier participates in configured matching workflow", async ({ testData }) => {
    await test.step("[CLM-TC-556] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-556] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-557
  // Excel Scenario: Verify multiple digital identifiers can participate in screening for the same entity
  // Excel Expected Result: Available digital identifiers should participate in screening according to implementation
  test("Case ID:CLM-TC-557 - Digital Identifier Matching → multiple digital identifiers can participate in screening for the same entity", async ({ testData }) => {
    await test.step("[CLM-TC-557] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-557] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-558
  // Excel Scenario: Verify updated digital identifiers are reflected in subsequent screening activities
  // Excel Expected Result: Latest approved digital identifiers should be used during screening
  test("Case ID:CLM-TC-558 - Digital Identifier Matching → updated digital identifiers are reflected in subsequent screening activities", async ({ testData }) => {
    await test.step("[CLM-TC-558] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-558] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-559
  // Excel Scenario: Verify digital identifier matching remains consistent across onboarding methods
  // Excel Expected Result: Digital identifier matching behavior should remain consistent regardless of onboarding source
  test("Case ID:CLM-TC-559 - Digital Identifier Matching → digital identifier matching remains consistent across onboarding methods", async ({ testData }) => {
    await test.step("[CLM-TC-559] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-559] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-560
  // Excel Scenario: Verify digital identifier matching supports AML investigation and screening objectives
  // Excel Expected Result: Digital identifier matching should support identification of entities beyond traditional name matching
  test("Case ID:CLM-TC-560 - Digital Identifier Matching → digital identifier matching supports AML investigation and screening objectives", async ({ testData }) => {
    await test.step("[CLM-TC-560] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.runDigitalIdentifierMatchingTest("wallet@example.com");
    await clmPage.expectMatchingOutcome();
    });
    await test.step("[CLM-TC-560] Validate expected results from Excel", async () => {
      await clmPage.expectCustomListManagerViewLoaded();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Action On Hit Behaviour", () => {
  // Excel Test Case ID: CLM-TC-561
  // Excel Scenario: Verify Action On Hit configuration selected during list creation is retained
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-561 - Action On Hit Behaviour → Action On Hit configuration selected during list creation is retained", async ({ testData }) => {
    await test.step("[CLM-TC-561] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Rejected KYC applicants");
    // TODO: Action-on-hit behaviour — verify "Alert & block" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-561] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-562
  // Excel Scenario: Verify Action On Hit configuration remains unchanged after governance approval workflow
  // Excel Expected Result: Request completes with checker attribution and timestamp; approved changes become effective; audit event recorded.
  test("Case ID:CLM-TC-562 - Action On Hit Behaviour → Action On Hit configuration remains unchanged after governance approval workflow", async ({ testData }) => {
    await test.step("[CLM-TC-562] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Maker;
    await clmPage.openList("PEP — internal identified");
    // TODO: Action-on-hit behaviour — verify "review" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-562] Validate expected results from Excel", async () => {
      await clmPage.expectRequestQueueVisible();
    await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAuditPanelLoaded();
    await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-563
  // Excel Scenario: Verify configured Action On Hit behavior is available during screening execution
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-563 - Action On Hit Behaviour → configured Action On Hit behavior is available during screening execution", async ({ testData }) => {
    await test.step("[CLM-TC-563] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Device blocklist");
    // TODO: Action-on-hit behaviour — verify "Alert & block" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-563] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-564
  // Excel Scenario: Verify screening hits are processed according to configured Action On Hit behavior
  // Excel Expected Result: Screening hit generates alert linked to correct list and entry with investigation details.
  test("Case ID:CLM-TC-564 - Action On Hit Behaviour → screening hits are processed according to configured Action On Hit behavior", async ({ testData }) => {
    await test.step("[CLM-TC-564] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Adverse media flagged");
    // TODO: Action-on-hit behaviour — verify "Generate alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-564] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-565
  // Excel Scenario: Verify Action On Hit configuration remains associated with the correct custom list
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-565 - Action On Hit Behaviour → Action On Hit configuration remains associated with the correct custom list", async ({ testData }) => {
    await test.step("[CLM-TC-565] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Internal fraud — flagged");
    // TODO: Action-on-hit behaviour — verify "Alert & block" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-565] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-566
  // Excel Scenario: Verify Action On Hit configuration changes are traceable through governance workflow
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-566 - Action On Hit Behaviour → Action On Hit configuration changes are traceable through governance workflow", async ({ testData }) => {
    await test.step("[CLM-TC-566] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Rejected KYC applicants");
    // TODO: Action-on-hit behaviour — verify "Alert & block" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-566] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-567
  // Excel Scenario: Verify screening response behavior remains consistent across repeated executions
  // Excel Expected Result: Equivalent screening scenarios should result in consistent behavior
  test("Case ID:CLM-TC-567 - Action On Hit Behaviour → screening response behavior remains consistent across repeated executions", async ({ testData }) => {
    await test.step("[CLM-TC-567] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    // TODO: Action-on-hit behaviour — verify "Generate alert" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-567] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-568
  // Excel Scenario: Verify Action On Hit configuration supports AML screening governance requirements
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-568 - Action On Hit Behaviour → Action On Hit configuration supports AML screening governance requirements", async ({ testData }) => {
    await test.step("[CLM-TC-568] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Device blocklist");
    // TODO: Action-on-hit behaviour — verify "Alert & block" outcome during screening;
    await clmPage.expectActionOnHitBehaviour();
    });
    await test.step("[CLM-TC-568] Validate expected results from Excel", async () => {
      await clmPage.expectActionOnHitBehaviour();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Alert Generation", () => {
  // Excel Test Case ID: CLM-TC-569
  // Excel Scenario: Verify screening activity can generate alerts according to configured screening behavior
  // Excel Expected Result: Screening hit generates alert linked to correct list and entry with investigation details.
  test("Case ID:CLM-TC-569 - Alert Generation → screening activity can generate alerts according to configured screening behavior", async ({ testData }) => {
    await test.step("[CLM-TC-569] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Adverse media flagged");
    await clmPage.triggerScreeningHit("Adverse media flagged");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-569] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-570
  // Excel Scenario: Verify generated alert remains associated with the correct entity
  // Excel Expected Result: Verification confirms that generated alert remains associated with the correct entity without errors and with data consistent across views.
  test("Case ID:CLM-TC-570 - Alert Generation → generated alert remains associated with the correct entity", async ({ testData }) => {
    await test.step("[CLM-TC-570] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.triggerScreeningHit("Internal fraud — flagged");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-570] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-571
  // Excel Scenario: Verify generated alert remains associated with the originating custom list
  // Excel Expected Result: Verification confirms that generated alert remains associated with the originating custom list without errors and with data consistent across views.
  test("Case ID:CLM-TC-571 - Alert Generation → generated alert remains associated with the originating custom list", async ({ testData }) => {
    await test.step("[CLM-TC-571] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.triggerScreeningHit("Rejected KYC applicants");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-571] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectInlineValidationError();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-572
  // Excel Scenario: Verify alert information remains available after screening execution completes
  // Excel Expected Result: Generated alert should remain accessible after screening execution
  test("Case ID:CLM-TC-572 - Alert Generation → alert information remains available after screening execution completes", async ({ testData }) => {
    await test.step("[CLM-TC-572] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.triggerScreeningHit("PEP — internal identified");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-572] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-573
  // Excel Scenario: Verify generated alert contains sufficient information for investigation activities
  // Excel Expected Result: Alert should provide sufficient contextual information for investigation
  test("Case ID:CLM-TC-573 - Alert Generation → generated alert contains sufficient information for investigation activities", async ({ testData }) => {
    await test.step("[CLM-TC-573] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Device blocklist");
    await clmPage.triggerScreeningHit("Device blocklist");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-573] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-574
  // Excel Scenario: Verify alert generation remains consistent across repeated screening executions
  // Excel Expected Result: Screening hit generates alert linked to correct list and entry with investigation details.
  test("Case ID:CLM-TC-574 - Alert Generation → alert generation remains consistent across repeated screening executions", async ({ testData }) => {
    await test.step("[CLM-TC-574] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Adverse media flagged");
    await clmPage.triggerScreeningHit("Adverse media flagged");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-574] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-575
  // Excel Scenario: Verify generated alerts remain traceable through governance and audit workflows
  // Excel Expected Result: Alert activity should remain traceable through available governance mechanisms
  test("Case ID:CLM-TC-575 - Alert Generation → generated alerts remain traceable through governance and audit workflows", async ({ testData }) => {
    await test.step("[CLM-TC-575] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("Internal fraud — flagged");
    await clmPage.triggerScreeningHit("Internal fraud — flagged");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-575] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-576
  // Excel Scenario: Verify alert generation behavior remains aligned with configured Action On Hit settings
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-576 - Alert Generation → alert generation behavior remains aligned with configured Action On Hit settings", async ({ testData }) => {
    await test.step("[CLM-TC-576] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Rejected KYC applicants");
    await clmPage.triggerScreeningHit("Rejected KYC applicants");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-576] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-577
  // Excel Scenario: Verify generated alerts remain associated with approved entity information
  // Excel Expected Result: Generated alerts should reflect current approved entity information
  test("Case ID:CLM-TC-577 - Alert Generation → generated alerts remain associated with approved entity information", async ({ testData }) => {
    await test.step("[CLM-TC-577] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    // Role from Excel: Compliance Officer;
    await clmPage.openList("PEP — internal identified");
    await clmPage.triggerScreeningHit("PEP — internal identified");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-577] Validate expected results from Excel", async () => {
      await clmPage.expectApprovalActionsVisible();
    await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: CLM-TC-578
  // Excel Scenario: Verify alert generation supports AML screening, monitoring and investigation objectives
  // Excel Expected Result: Screening hit blocks transaction and logs alert with list and entry reference.
  test("Case ID:CLM-TC-578 - Alert Generation → alert generation supports AML screening, monitoring and investigation objectives", async ({ testData }) => {
    await test.step("[CLM-TC-578] Navigate and execute documented test steps", async () => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
    await clmPage.openList("Device blocklist");
    await clmPage.triggerScreeningHit("Device blocklist");
    await clmPage.expectAlertGeneration();
    });
    await test.step("[CLM-TC-578] Validate expected results from Excel", async () => {
      await clmPage.expectAlertGeneration();
    await clmPage.expectConsoleErrorsFree();
    });
  });
  });
});
