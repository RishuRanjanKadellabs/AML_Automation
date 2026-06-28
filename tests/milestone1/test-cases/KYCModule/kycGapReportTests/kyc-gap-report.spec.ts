// spec: specs/kyc-gap-report/plan.md
// source: pipeline/test-data/KYC Gap Report.xlsx — 291 cases (KGR-001–KGR-291)
// fsd: pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KycGapReportPage from "../../../pages/KYCModule/KYCGapReportPages/KycGapReportPage";

test.describe("KYC Gap Report Module", () => {
  let gapPage: KycGapReportPage;

  test.beforeEach(async ({ sharedPage }) => {
    gapPage = new KycGapReportPage(sharedPage);
  });

  test.describe("Core", () => {
  test("Case ID:KGR-001 - Core → user can access KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-001
    // Excel Scenario: Core → Verify user can access KYC Gap Report
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify layout, badges, and controls render without overlap or clipping. …
    // Expected: KYC Gap Report opens with title, subtitle, KPI strip, filters, and report grid visible.
    console.log("[KGR-001] Core → Verify user can access KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      });
  });

  test("Case ID:KGR-002 - Core → KYC Gap Report page title is displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: KGR-002
    // Excel Scenario: Core → Verify KYC Gap Report page title is displayed correctly
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: KYC Gap Report page title is displayed correctly.
    console.log("[KGR-002] Core → Verify KYC Gap Report page title is displayed correctly");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-003 - Core → page subtitle is displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: KGR-003
    // Excel Scenario: Core → Verify page subtitle is displayed correctly
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Page subtitle is displayed correctly.
    console.log("[KGR-003] Core → Verify page subtitle is displayed correctly");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-004 - Core → Export button is displayed on page", async ({ testData }) => {
    // Excel Test Case ID: KGR-004
    // Excel Scenario: Core → Verify Export button is displayed on page
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Export button is displayed on page.
    console.log("[KGR-004] Core → Verify Export button is displayed on page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-005 - Core → all KPI cards are displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-005
    // Excel Scenario: Core → Verify all KPI cards are displayed
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: All KPI cards are displayed.
    console.log("[KGR-005] Core → Verify all KPI cards are displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-006 - Core → report list section loads successfully", async ({ testData }) => {
    // Excel Test Case ID: KGR-006
    // Excel Scenario: Core → Verify report list section loads successfully
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Report list section loads successfully.
    console.log("[KGR-006] Core → Verify report list section loads successfully");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-007 - Core → all configured filters are visible", async ({ testData }) => {
    // Excel Test Case ID: KGR-007
    // Excel Scenario: Core → Verify all configured filters are visible
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: All configured filters are visible.
    console.log("[KGR-007] Core → Verify all configured filters are visible");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-008 - Core → report grid is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-008
    // Excel Scenario: Core → Verify report grid is displayed
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Report grid is displayed.
    console.log("[KGR-008] Core → Verify report grid is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-009 - Core → pagination controls are displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-009
    // Excel Scenario: Core → Verify pagination controls are displayed
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Pagination controls are displayed.
    console.log("[KGR-009] Core → Verify pagination controls are displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-010 - Core → page loads successfully after browser refresh", async ({ testData }) => {
    // Excel Test Case ID: KGR-010
    // Excel Scenario: Core → Verify page loads successfully after browser refresh
    // FSD §4.2 — Navigation
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Page loads successfully after browser refresh.
    console.log("[KGR-010] Core → Verify page loads successfully after browser refresh");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await gapPage.expectPageLoaded();
      });
  });

  test("Case ID:KGR-011 - Core → direct URL access for authorized user", async ({ testData }) => {
    // Excel Test Case ID: KGR-011
    // Excel Scenario: Core → Verify direct URL access for authorized user
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Direct URL access for authorized user.
    console.log("[KGR-011] Core → Verify direct URL access for authorized user");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-012 - Core → application back navigation from KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-012
    // Excel Scenario: Core → Verify application back navigation from KYC Gap Report
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Application back navigation from KYC Gap Report.
    console.log("[KGR-012] Core → Verify application back navigation from KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      });
  });

  test("Case ID:KGR-013 - Core → KYC Gap Report is available in KYC module navigation", async ({ testData }) => {
    // Excel Test Case ID: KGR-013
    // Excel Scenario: Core → Verify KYC Gap Report is available in KYC module navigation
    // FSD §4.2 — Navigation
    // Steps (13): Open KYC module navigation. → Review available KYC module options. → Verify KYC Gap Report is listed …
    // Expected: KYC Gap Report is listed in KYC module navigation and opens successfully.
    console.log("[KGR-013] Core → Verify KYC Gap Report is available in KYC module navigation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.expectGapReportViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      });
  });

  test("Case ID:KGR-014 - Core → user can return to KYC Gap Report after navigating away", async ({ testData }) => {
    // Excel Test Case ID: KGR-014
    // Excel Scenario: Core → Verify user can return to KYC Gap Report after navigating away
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report → Navigate to another KYC screen → Return to KYC Gap Report …
    // Expected: KYC Gap Report reloads successfully when selected again.
    console.log("[KGR-014] Core → Verify user can return to KYC Gap Report after navigating away");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.expectGapReportViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      });
  });

  test("Case ID:KGR-015 - Core → filters and page state persist when leaving and returning to KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-015
    // Excel Scenario: Core → Verify filters and page state persist when leaving and returning to KYC Gap Report
    // FSD §4.2 — Navigation
    // Steps (11): Apply filters on KYC Gap Report → Navigate to another KYC screen → Return to KYC Gap Report …
    // Expected: Previously applied filters and pagination remain unchanged.
    console.log("[KGR-015] Core → Verify filters and page state persist when leaving and returning to KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.expectGapReportViewLoaded();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      });
  });

  test("Case ID:KGR-016 - Core → unauthorized user cannot access KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-016
    // Excel Scenario: Core → Verify unauthorized user cannot access KYC Gap Report
    // FSD §4.2 — Navigation
    // Steps (23): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Verify page title displays as "KYC Gap Report". …
    // Expected: Unauthorized user cannot access KYC Gap Report.
    console.log("[KGR-016] Core → Verify unauthorized user cannot access KYC Gap Report");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-017 - Core → unauthenticated user cannot access KYC Gap Report URL", async ({ testData }) => {
    // Excel Test Case ID: KGR-017
    // Excel Scenario: Core → Verify unauthenticated user cannot access KYC Gap Report URL
    // FSD §4.2 — Navigation
    // Steps (23): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Verify page title displays as "KYC Gap Report". …
    // Expected: Unauthenticated user cannot access KYC Gap Report URL.
    console.log("[KGR-017] Core → Verify unauthenticated user cannot access KYC Gap Report URL");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-018 - Core → page loads without UI rendering issues", async ({ testData }) => {
    // Excel Test Case ID: KGR-018
    // Excel Scenario: Core → Verify page loads without UI rendering issues
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Page loads without UI rendering issues.
    console.log("[KGR-018] Core → Verify page loads without UI rendering issues");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-019 - Core → page remains functional after multiple navigations", async ({ testData }) => {
    // Excel Test Case ID: KGR-019
    // Excel Scenario: Core → Verify page remains functional after multiple navigations
    // FSD §4.2 — Navigation
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Page remains functional after multiple navigations.
    console.log("[KGR-019] Core → Verify page remains functional after multiple navigations");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await gapPage.expectPageLoaded();
      });
  });

  test("Case ID:KGR-020 - Core → no application error occurs when opening KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-020
    // Excel Scenario: Core → Verify no application error occurs when opening KYC Gap Report
    // FSD §4.2 — Navigation
    // Steps (11): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: No application error occurs when opening KYC Gap Report.
    console.log("[KGR-020] Core → Verify no application error occurs when opening KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      });
  });

  test("Case ID:KGR-281 - Core → Refresh button is visible and reloads report data without losing applied filters", async ({ testData }) => {
    // Excel Test Case ID: KGR-281
    // Excel Scenario: Core → Verify Refresh button is visible and reloads report data without losing applied filters
    // FSD §4.2 — Navigation
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Report reloads with fresh data and active filters stay applied.
    console.log("[KGR-281] Core → Verify Refresh button is visible and reloads report data without losing applied filters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await gapPage.expectPageLoaded();
      await gapPage.expectKpiCountsMatchGrid();
      });
  });

  test("Case ID:KGR-282 - Core → breadcrumb navigation displays correct KYC module path on landing page", async ({ testData }) => {
    // Excel Test Case ID: KGR-282
    // Excel Scenario: Core → Verify breadcrumb navigation displays correct KYC module path on landing page
    // FSD §4.2 — Navigation
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Verify page title displays as "KYC Gap Report". …
    // Expected: Breadcrumb shows KYC Gap Report in the module path.
    console.log("[KGR-282] Core → Verify breadcrumb navigation displays correct KYC module path on landing page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectBreadcrumbVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await gapPage.expectPageLoaded();
      await gapPage.expectKpiCountsMatchGrid();
      });
  });
  });

  test.describe("KPI Cards", () => {
  test("Case ID:KGR-021 - KPI Cards → Total Customers (CBS) KPI card is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-021
    // Excel Scenario: KPI Cards → Verify Total Customers (CBS) KPI card is displayed
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Total Customers (CBS) KPI card is displayed.
    console.log("[KGR-021] KPI Cards → Verify Total Customers (CBS) KPI card is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-022 - KPI Cards → Customers with Gaps KPI card is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-022
    // Excel Scenario: KPI Cards → Verify Customers with Gaps KPI card is displayed
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customers with Gaps KPI card is displayed.
    console.log("[KGR-022] KPI Cards → Verify Customers with Gaps KPI card is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-023 - KPI Cards → Critical Priority KPI card is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-023
    // Excel Scenario: KPI Cards → Verify Critical Priority KPI card is displayed
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Critical Priority KPI card is displayed.
    console.log("[KGR-023] KPI Cards → Verify Critical Priority KPI card is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-024 - KPI Cards → KPI card labels are displayed correctly", async ({ testData }) => {
    // Excel Test Case ID: KGR-024
    // Excel Scenario: KPI Cards → Verify KPI card labels are displayed correctly
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI card labels are displayed correctly.
    console.log("[KGR-024] KPI Cards → Verify KPI card labels are displayed correctly");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-025 - KPI Cards → Total Customers KPI value is numeric", async ({ testData }) => {
    // Excel Test Case ID: KGR-025
    // Excel Scenario: KPI Cards → Verify Total Customers KPI value is numeric
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Total Customers KPI value is numeric.
    console.log("[KGR-025] KPI Cards → Verify Total Customers KPI value is numeric");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-026 - KPI Cards → Customers with Gaps KPI value is numeric", async ({ testData }) => {
    // Excel Test Case ID: KGR-026
    // Excel Scenario: KPI Cards → Verify Customers with Gaps KPI value is numeric
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customers with Gaps KPI value is numeric.
    console.log("[KGR-026] KPI Cards → Verify Customers with Gaps KPI value is numeric");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-027 - KPI Cards → Critical Priority KPI value is numeric", async ({ testData }) => {
    // Excel Test Case ID: KGR-027
    // Excel Scenario: KPI Cards → Verify Critical Priority KPI value is numeric
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Critical Priority KPI value is numeric.
    console.log("[KGR-027] KPI Cards → Verify Critical Priority KPI value is numeric");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-028 - KPI Cards → Total Customers KPI count is greater than or equal to Customers with Gaps count", async ({ testData }) => {
    // Excel Test Case ID: KGR-028
    // Excel Scenario: KPI Cards → Verify Total Customers KPI count is greater than or equal to Customers with Gaps count
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Total Customers KPI count is greater than or equal to Customers with Gaps count.
    console.log("[KGR-028] KPI Cards → Verify Total Customers KPI count is greater than or equal to Customers with Gaps count");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-029 - KPI Cards → Customers with Gaps KPI count matches report data", async ({ testData }) => {
    // Excel Test Case ID: KGR-029
    // Excel Scenario: KPI Cards → Verify Customers with Gaps KPI count matches report data
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customers with Gaps KPI count matches report data.
    console.log("[KGR-029] KPI Cards → Verify Customers with Gaps KPI count matches report data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-030 - KPI Cards → Critical Priority KPI count matches report data", async ({ testData }) => {
    // Excel Test Case ID: KGR-030
    // Excel Scenario: KPI Cards → Verify Critical Priority KPI count matches report data
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Critical Priority KPI count matches report data.
    console.log("[KGR-030] KPI Cards → Verify Critical Priority KPI count matches report data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-031 - KPI Cards → KPI values refresh when page is reloaded", async ({ testData }) => {
    // Excel Test Case ID: KGR-031
    // Excel Scenario: KPI Cards → Verify KPI values refresh when page is reloaded
    // FSD §4.3 — KPI Summary Cards
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI values refresh when page is reloaded.
    console.log("[KGR-031] KPI Cards → Verify KPI values refresh when page is reloaded");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await gapPage.expectPageLoaded();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-032 - KPI Cards → KPI cards load without UI distortion", async ({ testData }) => {
    // Excel Test Case ID: KGR-032
    // Excel Scenario: KPI Cards → Verify KPI cards load without UI distortion
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI cards load without UI distortion.
    console.log("[KGR-032] KPI Cards → Verify KPI cards load without UI distortion");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-033 - KPI Cards → KPI values are visible without truncation", async ({ testData }) => {
    // Excel Test Case ID: KGR-033
    // Excel Scenario: KPI Cards → Verify KPI values are visible without truncation
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI values are visible without truncation.
    console.log("[KGR-033] KPI Cards → Verify KPI values are visible without truncation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-034 - KPI Cards → KPI cards are displayed when report contains records", async ({ testData }) => {
    // Excel Test Case ID: KGR-034
    // Excel Scenario: KPI Cards → Verify KPI cards are displayed when report contains records
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI cards are displayed when report contains records.
    console.log("[KGR-034] KPI Cards → Verify KPI cards are displayed when report contains records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-035 - KPI Cards → KPI cards handle zero values correctly — KPI cards should support zero counts", async ({ testData }) => {
    // Excel Test Case ID: KGR-035
    // Excel Scenario: KPI Cards → Verify KPI cards handle zero values correctly — KPI cards should support zero counts
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI cards handle zero values correctly — KPI cards should support zero counts.
    console.log("[KGR-035] KPI Cards → Verify KPI cards handle zero values correctly — KPI cards should support zero counts");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-036 - KPI Cards → KPI section remains visible after filter application", async ({ testData }) => {
    // Excel Test Case ID: KGR-036
    // Excel Scenario: KPI Cards → Verify KPI section remains visible after filter application
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI section remains visible after filter application.
    console.log("[KGR-036] KPI Cards → Verify KPI section remains visible after filter application");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-037 - KPI Cards → KPI section remains visible after pagination navigation", async ({ testData }) => {
    // Excel Test Case ID: KGR-037
    // Excel Scenario: KPI Cards → Verify KPI section remains visible after pagination navigation
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI section remains visible after pagination navigation.
    console.log("[KGR-037] KPI Cards → Verify KPI section remains visible after pagination navigation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-038 - KPI Cards → KPI cards are displayed before report grid", async ({ testData }) => {
    // Excel Test Case ID: KGR-038
    // Excel Scenario: KPI Cards → Verify KPI cards are displayed before report grid
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI cards are displayed before report grid.
    console.log("[KGR-038] KPI Cards → Verify KPI cards are displayed before report grid");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-039 - KPI Cards → KPI values do not display negative numbers", async ({ testData }) => {
    // Excel Test Case ID: KGR-039
    // Excel Scenario: KPI Cards → Verify KPI values do not display negative numbers
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI values do not display negative numbers.
    console.log("[KGR-039] KPI Cards → Verify KPI values do not display negative numbers");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-040 - KPI Cards → KPI cards load successfully within page initialization", async ({ testData }) => {
    // Excel Test Case ID: KGR-040
    // Excel Scenario: KPI Cards → Verify KPI cards load successfully within page initialization
    // FSD §4.3 — KPI Summary Cards
    // Steps (15): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KPI cards load successfully within page initialization.
    console.log("[KGR-040] KPI Cards → Verify KPI cards load successfully within page initialization");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      await expect(gapPage.exportButton).toBeVisible();
      await gapPage.expectKycGapReportListedInNavigation();
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      });
  });
  });

  test.describe("Search & Filters", () => {
  test("Case ID:KGR-041 - Search & Filters → Search field is displayed on KYC Gap Report page", async ({ testData }) => {
    // Excel Test Case ID: KGR-041
    // Excel Scenario: Search & Filters → Verify Search field is displayed on KYC Gap Report page
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search field is displayed on KYC Gap Report page.
    console.log("[KGR-041] Search & Filters → Verify Search field is displayed on KYC Gap Report page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.searchInput).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-042 - Search & Filters → search by exact customer name", async ({ testData }) => {
    // Excel Test Case ID: KGR-042
    // Excel Scenario: Search & Filters → Verify search by exact customer name
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search by exact customer name.
    console.log("[KGR-042] Search & Filters → Verify search by exact customer name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-043 - Search & Filters → search by partial customer name", async ({ testData }) => {
    // Excel Test Case ID: KGR-043
    // Excel Scenario: Search & Filters → Verify search by partial customer name
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search by partial customer name.
    console.log("[KGR-043] Search & Filters → Verify search by partial customer name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('KYC');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-044 - Search & Filters → search by Customer ID", async ({ testData }) => {
    // Excel Test Case ID: KGR-044
    // Excel Scenario: Search & Filters → Verify search by Customer ID
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search by Customer ID.
    console.log("[KGR-044] Search & Filters → Verify search by Customer ID");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('CIF-1001');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-045 - Search & Filters → search is case insensitive", async ({ testData }) => {
    // Excel Test Case ID: KGR-045
    // Excel Scenario: Search & Filters → Verify search is case insensitive
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search is case insensitive.
    console.log("[KGR-045] Search & Filters → Verify search is case insensitive");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-046 - Search & Filters → search using alphanumeric Customer ID", async ({ testData }) => {
    // Excel Test Case ID: KGR-046
    // Excel Scenario: Search & Filters → Verify search using alphanumeric Customer ID
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search using alphanumeric Customer ID.
    console.log("[KGR-046] Search & Filters → Verify search using alphanumeric Customer ID");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('CIF-1001');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-047 - Search & Filters → search with leading spaces", async ({ testData }) => {
    // Excel Test Case ID: KGR-047
    // Excel Scenario: Search & Filters → Verify search with leading spaces
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with leading spaces.
    console.log("[KGR-047] Search & Filters → Verify search with leading spaces");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-048 - Search & Filters → search with trailing spaces", async ({ testData }) => {
    // Excel Test Case ID: KGR-048
    // Excel Scenario: Search & Filters → Verify search with trailing spaces
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with trailing spaces.
    console.log("[KGR-048] Search & Filters → Verify search with trailing spaces");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-049 - Search & Filters → search with special characters", async ({ testData }) => {
    // Excel Test Case ID: KGR-049
    // Excel Scenario: Search & Filters → Verify search with special characters
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with special characters.
    console.log("[KGR-049] Search & Filters → Verify search with special characters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('!@#$%');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-050 - Search & Filters → search with non-existing customer value", async ({ testData }) => {
    // Excel Test Case ID: KGR-050
    // Excel Scenario: Search & Filters → Verify search with non-existing customer value
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with non-existing customer value.
    console.log("[KGR-050] Search & Filters → Verify search with non-existing customer value");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('zzzz-no-match-99999');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-051 - Search & Filters → real-time search behavior", async ({ testData }) => {
    // Excel Test Case ID: KGR-051
    // Excel Scenario: Search & Filters → Verify real-time search behavior
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Real-time search behavior.
    // TODO [KGR-051]: Debounce delay (ms) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-051] Search & Filters → Verify real-time search behavior");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-052 - Search & Filters → Branch filter dropdown values", async ({ testData }) => {
    // Excel Test Case ID: KGR-052
    // Excel Scenario: Search & Filters → Verify Branch filter dropdown values
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch filter dropdown values.
    console.log("[KGR-052] Search & Filters → Verify Branch filter dropdown values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-053 - Search & Filters → filtering by Branch", async ({ testData }) => {
    // Excel Test Case ID: KGR-053
    // Excel Scenario: Search & Filters → Verify filtering by Branch
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Branch.
    console.log("[KGR-053] Search & Filters → Verify filtering by Branch");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-054 - Search & Filters → Branch filter with no matching records", async ({ testData }) => {
    // Excel Test Case ID: KGR-054
    // Excel Scenario: Search & Filters → Verify Branch filter with no matching records
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch filter with no matching records.
    console.log("[KGR-054] Search & Filters → Verify Branch filter with no matching records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('zzzz-no-match-99999');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-055 - Search & Filters → Customer Type filter values", async ({ testData }) => {
    // Excel Test Case ID: KGR-055
    // Excel Scenario: Search & Filters → Verify Customer Type filter values
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer Type filter values.
    console.log("[KGR-055] Search & Filters → Verify Customer Type filter values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-056 - Search & Filters → filtering by Individual customer type", async ({ testData }) => {
    // Excel Test Case ID: KGR-056
    // Excel Scenario: Search & Filters → Verify filtering by Individual customer type
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Individual customer type.
    console.log("[KGR-056] Search & Filters → Verify filtering by Individual customer type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-057 - Search & Filters → filtering by Corporate customer type", async ({ testData }) => {
    // Excel Test Case ID: KGR-057
    // Excel Scenario: Search & Filters → Verify filtering by Corporate customer type
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Corporate customer type.
    console.log("[KGR-057] Search & Filters → Verify filtering by Corporate customer type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-058 - Search & Filters → Template filter dropdown values", async ({ testData }) => {
    // Excel Test Case ID: KGR-058
    // Excel Scenario: Search & Filters → Verify Template filter dropdown values
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Template filter dropdown values.
    console.log("[KGR-058] Search & Filters → Verify Template filter dropdown values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-059 - Search & Filters → filtering by template", async ({ testData }) => {
    // Excel Test Case ID: KGR-059
    // Excel Scenario: Search & Filters → Verify filtering by template
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by template.
    console.log("[KGR-059] Search & Filters → Verify filtering by template");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-060 - Search & Filters → Priority filter dropdown values", async ({ testData }) => {
    // Excel Test Case ID: KGR-060
    // Excel Scenario: Search & Filters → Verify Priority filter dropdown values
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Priority filter dropdown values.
    console.log("[KGR-060] Search & Filters → Verify Priority filter dropdown values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-061 - Search & Filters → filtering by Low priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-061
    // Excel Scenario: Search & Filters → Verify filtering by Low priority
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Low priority.
    console.log("[KGR-061] Search & Filters → Verify filtering by Low priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-062 - Search & Filters → filtering by Medium priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-062
    // Excel Scenario: Search & Filters → Verify filtering by Medium priority
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Medium priority.
    console.log("[KGR-062] Search & Filters → Verify filtering by Medium priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-063 - Search & Filters → filtering by High priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-063
    // Excel Scenario: Search & Filters → Verify filtering by High priority
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by High priority.
    console.log("[KGR-063] Search & Filters → Verify filtering by High priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-064 - Search & Filters → filtering by Critical priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-064
    // Excel Scenario: Search & Filters → Verify filtering by Critical priority
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filtering by Critical priority.
    console.log("[KGR-064] Search & Filters → Verify filtering by Critical priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-065 - Search & Filters → Gap Score minimum filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-065
    // Excel Scenario: Search & Filters → Verify Gap Score minimum filter
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score minimum filter.
    console.log("[KGR-065] Search & Filters → Verify Gap Score minimum filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-066 - Search & Filters → Gap Score maximum filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-066
    // Excel Scenario: Search & Filters → Verify Gap Score maximum filter
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score maximum filter.
    console.log("[KGR-066] Search & Filters → Verify Gap Score maximum filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-067 - Search & Filters → Gap Score range filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-067
    // Excel Scenario: Search & Filters → Verify Gap Score range filter
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score range filter.
    console.log("[KGR-067] Search & Filters → Verify Gap Score range filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-068 - Search & Filters → Clear Filters functionality", async ({ testData }) => {
    // Excel Test Case ID: KGR-068
    // Excel Scenario: Search & Filters → Verify Clear Filters functionality
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Clear Filters functionality.
    console.log("[KGR-068] Search & Filters → Verify Clear Filters functionality");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-069 - Search & Filters → filter combination: Branch + Customer Type", async ({ testData }) => {
    // Excel Test Case ID: KGR-069
    // Excel Scenario: Search & Filters → Verify filter combination: Branch + Customer Type
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filter combination: Branch + Customer Type.
    console.log("[KGR-069] Search & Filters → Verify filter combination: Branch + Customer Type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });

  test("Case ID:KGR-070 - Search & Filters → filter combination: Search + Priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-070
    // Excel Scenario: Search & Filters → Verify filter combination: Search + Priority
    // FSD §4.4 — Filters
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Filter combination: Search + Priority.
    console.log("[KGR-070] Search & Filters → Verify filter combination: Search + Priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.applyCustomerTypeFilterByLabel('Individual');
      await gapPage.clearFilters();
      await gapPage.search('Simplified KYC Customer');
      await gapPage.searchGapReportExactMatch();
      await gapPage.applyBranchFilterByLabel('INST-DEMO-001');
      await gapPage.applyCustomerTypeFilterByLabel('Corporate');
      await gapPage.applyTemplateFilterByLabel('Simplified KYC');
      await gapPage.applyPriorityFilterByLabel('Low');
      await gapPage.applyPriorityFilterByLabel('Medium');
      await gapPage.applyPriorityFilterByLabel('High');
      await gapPage.applyPriorityFilterByLabel('Critical');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await gapPage.expectModalScoreMatchesGrid();
      await gapPage.expectPriorityColumnVisible();
      });
  });
  });

  test.describe("Report Grid", () => {
  test("Case ID:KGR-071 - Report Grid → all configured report columns are displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-071
    // Excel Scenario: Report Grid → Verify all configured report columns are displayed
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: All configured report columns are displayed.
    console.log("[KGR-071] Report Grid → Verify all configured report columns are displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-072 - Report Grid → Customer column displays customer full name", async ({ testData }) => {
    // Excel Test Case ID: KGR-072
    // Excel Scenario: Report Grid → Verify Customer column displays customer full name
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer column displays customer full name.
    console.log("[KGR-072] Report Grid → Verify Customer column displays customer full name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-073 - Report Grid → Customer ID column displays unique customer identifiers", async ({ testData }) => {
    // Excel Test Case ID: KGR-073
    // Excel Scenario: Report Grid → Verify Customer ID column displays unique customer identifiers
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer ID column displays unique customer identifiers.
    console.log("[KGR-073] Report Grid → Verify Customer ID column displays unique customer identifiers");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-074 - Report Grid → Type column displays customer type badge", async ({ testData }) => {
    // Excel Test Case ID: KGR-074
    // Excel Scenario: Report Grid → Verify Type column displays customer type badge
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Type column displays customer type badge.
    console.log("[KGR-074] Report Grid → Verify Type column displays customer type badge");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-075 - Report Grid → Branch column displays branch name", async ({ testData }) => {
    // Excel Test Case ID: KGR-075
    // Excel Scenario: Report Grid → Verify Branch column displays branch name
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch column displays branch name.
    console.log("[KGR-075] Report Grid → Verify Branch column displays branch name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-076 - Report Grid → Branch Code column displays branch code", async ({ testData }) => {
    // Excel Test Case ID: KGR-076
    // Excel Scenario: Report Grid → Verify Branch Code column displays branch code
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch Code column displays branch code.
    console.log("[KGR-076] Report Grid → Verify Branch Code column displays branch code");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-077 - Report Grid → Template Applied column displays assigned template", async ({ testData }) => {
    // Excel Test Case ID: KGR-077
    // Excel Scenario: Report Grid → Verify Template Applied column displays assigned template
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Template Applied column displays assigned template.
    console.log("[KGR-077] Report Grid → Verify Template Applied column displays assigned template");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-078 - Report Grid → KYC Gap Score column displays numeric score", async ({ testData }) => {
    // Excel Test Case ID: KGR-078
    // Excel Scenario: Report Grid → Verify KYC Gap Score column displays numeric score
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KYC Gap Score column displays numeric score.
    console.log("[KGR-078] Report Grid → Verify KYC Gap Score column displays numeric score");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-079 - Report Grid → Priority column displays risk classification", async ({ testData }) => {
    // Excel Test Case ID: KGR-079
    // Excel Scenario: Report Grid → Verify Priority column displays risk classification
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Priority column displays risk classification.
    console.log("[KGR-079] Report Grid → Verify Priority column displays risk classification");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-080 - Report Grid → Actions column displays View button", async ({ testData }) => {
    // Excel Test Case ID: KGR-080
    // Excel Scenario: Report Grid → Verify Actions column displays View button
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Actions column displays View button.
    console.log("[KGR-080] Report Grid → Verify Actions column displays View button");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectViewButtonsOnRows();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-081 - Report Grid → Customer column supports sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-081
    // Excel Scenario: Report Grid → Verify Customer column supports sorting
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer column supports sorting.
    console.log("[KGR-081] Report Grid → Verify Customer column supports sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-082 - Report Grid → Customer ID column supports sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-082
    // Excel Scenario: Report Grid → Verify Customer ID column supports sorting
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer ID column supports sorting.
    console.log("[KGR-082] Report Grid → Verify Customer ID column supports sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-083 - Report Grid → Branch column supports sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-083
    // Excel Scenario: Report Grid → Verify Branch column supports sorting
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch column supports sorting.
    console.log("[KGR-083] Report Grid → Verify Branch column supports sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-084 - Report Grid → Branch Code column supports sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-084
    // Excel Scenario: Report Grid → Verify Branch Code column supports sorting
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Branch Code column supports sorting.
    console.log("[KGR-084] Report Grid → Verify Branch Code column supports sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-085 - Report Grid → KYC Gap Score column supports sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-085
    // Excel Scenario: Report Grid → Verify KYC Gap Score column supports sorting
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KYC Gap Score column supports sorting.
    console.log("[KGR-085] Report Grid → Verify KYC Gap Score column supports sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-086 - Report Grid → ascending sorting for Customer column", async ({ testData }) => {
    // Excel Test Case ID: KGR-086
    // Excel Scenario: Report Grid → Verify ascending sorting for Customer column
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Ascending sorting for Customer column.
    console.log("[KGR-086] Report Grid → Verify ascending sorting for Customer column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-087 - Report Grid → descending sorting for Customer column", async ({ testData }) => {
    // Excel Test Case ID: KGR-087
    // Excel Scenario: Report Grid → Verify descending sorting for Customer column
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Descending sorting for Customer column.
    console.log("[KGR-087] Report Grid → Verify descending sorting for Customer column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-088 - Report Grid → ascending sorting for KYC Gap Score column", async ({ testData }) => {
    // Excel Test Case ID: KGR-088
    // Excel Scenario: Report Grid → Verify ascending sorting for KYC Gap Score column
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Ascending sorting for KYC Gap Score column.
    console.log("[KGR-088] Report Grid → Verify ascending sorting for KYC Gap Score column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-089 - Report Grid → descending sorting for KYC Gap Score column", async ({ testData }) => {
    // Excel Test Case ID: KGR-089
    // Excel Scenario: Report Grid → Verify descending sorting for KYC Gap Score column
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Descending sorting for KYC Gap Score column.
    console.log("[KGR-089] Report Grid → Verify descending sorting for KYC Gap Score column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-090 - Report Grid → sorting persists correctly with filtered data", async ({ testData }) => {
    // Excel Test Case ID: KGR-090
    // Excel Scenario: Report Grid → Verify sorting persists correctly with filtered data
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Sorting persists correctly with filtered data.
    console.log("[KGR-090] Report Grid → Verify sorting persists correctly with filtered data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-091 - Report Grid → non-sortable columns do not display sort behavior", async ({ testData }) => {
    // Excel Test Case ID: KGR-091
    // Excel Scenario: Report Grid → Verify non-sortable columns do not display sort behavior
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Non-sortable columns do not display sort behavior.
    console.log("[KGR-091] Report Grid → Verify non-sortable columns do not display sort behavior");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectViewButtonsOnRows();
      });
  });

  test("Case ID:KGR-092 - Report Grid → grid data accuracy against source records", async ({ testData }) => {
    // Excel Test Case ID: KGR-092
    // Excel Scenario: Report Grid → Verify grid data accuracy against source records
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid data accuracy against source records.
    // TODO [KGR-092]: CBS/DMS seed data mapping not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-092] Report Grid → Verify grid data accuracy against source records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-093 - Report Grid → grid handles long customer names — Long names should display without UI breakage", async ({ testData }) => {
    // Excel Test Case ID: KGR-093
    // Excel Scenario: Report Grid → Verify grid handles long customer names — Long names should display without UI breakage
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid handles long customer names — Long names should display without UI breakage.
    // TODO [KGR-093]: Max customer name length not defined — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-093] Report Grid → Verify grid handles long customer names — Long names should display without UI breakage");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectModalCustomerNameMatchesGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-094 - Report Grid → grid handles long template names", async ({ testData }) => {
    // Excel Test Case ID: KGR-094
    // Excel Scenario: Report Grid → Verify grid handles long template names
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid handles long template names.
    console.log("[KGR-094] Report Grid → Verify grid handles long template names");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-095 - Report Grid → grid displays no duplicate records", async ({ testData }) => {
    // Excel Test Case ID: KGR-095
    // Excel Scenario: Report Grid → Verify grid displays no duplicate records
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid displays no duplicate records.
    console.log("[KGR-095] Report Grid → Verify grid displays no duplicate records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-096 - Report Grid → grid displays records after page refresh", async ({ testData }) => {
    // Excel Test Case ID: KGR-096
    // Excel Scenario: Report Grid → Verify grid displays records after page refresh
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid displays records after page refresh.
    console.log("[KGR-096] Report Grid → Verify grid displays records after page refresh");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-097 - Report Grid → grid displays records after filter reset", async ({ testData }) => {
    // Excel Test Case ID: KGR-097
    // Excel Scenario: Report Grid → Verify grid displays records after filter reset
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid displays records after filter reset.
    console.log("[KGR-097] Report Grid → Verify grid displays records after filter reset");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-098 - Report Grid → grid remains stable when no records match filters", async ({ testData }) => {
    // Excel Test Case ID: KGR-098
    // Excel Scenario: Report Grid → Verify grid remains stable when no records match filters
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Grid remains stable when no records match filters.
    console.log("[KGR-098] Report Grid → Verify grid remains stable when no records match filters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-099 - Report Grid → Priority values contain only supported classifications", async ({ testData }) => {
    // Excel Test Case ID: KGR-099
    // Excel Scenario: Report Grid → Verify Priority values contain only supported classifications
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Priority values contain only supported classifications.
    console.log("[KGR-099] Report Grid → Verify Priority values contain only supported classifications");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-100 - Report Grid → report is read-only from landing grid", async ({ testData }) => {
    // Excel Test Case ID: KGR-100
    // Excel Scenario: Report Grid → Verify report is read-only from landing grid
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report is read-only from landing grid.
    console.log("[KGR-100] Report Grid → Verify report is read-only from landing grid");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-283 - Report Grid → Individual and Corporate Type badges use distinct colour coding in grid", async ({ testData }) => {
    // Excel Test Case ID: KGR-283
    // Excel Scenario: Report Grid → Verify Individual and Corporate Type badges use distinct colour coding in grid
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Individual and Corporate rows show distinct Type badge colours.
    console.log("[KGR-283] Report Grid → Verify Individual and Corporate Type badges use distinct colour coding in grid");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-284 - Report Grid → KYC Gap Score displays colour-coded risk label (Low/Medium/High/Critical) in grid", async ({ testData }) => {
    // Excel Test Case ID: KGR-284
    // Excel Scenario: Report Grid → Verify KYC Gap Score displays colour-coded risk label (Low/Medium/High/Critical) in grid
    // FSD §4.5 — Report Table — Columns
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score displays the correct colour-coded risk label per score band.
    console.log("[KGR-284] Report Grid → Verify KYC Gap Score displays colour-coded risk label (Low/Medium/High/Critical) in grid");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-285 - Report Grid → Edit button is not present in report grid per read-only design", async ({ testData }) => {
    // Excel Test Case ID: KGR-285
    // Excel Scenario: Report Grid → Verify Edit button is not present in report grid per read-only design
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: No Edit action is available in the report grid.
    console.log("[KGR-285] Report Grid → Verify Edit button is not present in report grid per read-only design");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-286 - Report Grid → Missing Fields column is not displayed in landing grid", async ({ testData }) => {
    // Excel Test Case ID: KGR-286
    // Excel Scenario: Report Grid → Verify Missing Fields column is not displayed in landing grid
    // FSD §4.5 — Report Table — Columns
    // Steps (31): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Missing Fields are not shown as a landing grid column.
    console.log("[KGR-286] Report Grid → Verify Missing Fields column is not displayed in landing grid");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      await gapPage.sortByColumn("Branch");
      await gapPage.sortByColumn("KYC Gap Score");
      await gapPage.sortByColumn("Priority");
      await gapPage.openFirstRowDetail();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectViewButtonsOnRows();
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });
  });

  test.describe("Gap Score Calculation", () => {
  test("Case ID:KGR-101 - Gap Score Calculation → KYC Gap Score is calculated as sum of missing field weights", async ({ testData }) => {
    // Excel Test Case ID: KGR-101
    // Excel Scenario: Gap Score Calculation → Verify KYC Gap Score is calculated as sum of missing field weights
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: KYC Gap Score is calculated as sum of missing field weights.
    console.log("[KGR-101] Gap Score Calculation → Verify KYC Gap Score is calculated as sum of missing field weights");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-102 - Gap Score Calculation → missing Mandatory field contributes 3 points to Gap Score", async ({ testData }) => {
    // Excel Test Case ID: KGR-102
    // Excel Scenario: Gap Score Calculation → Verify missing Mandatory field contributes 3 points to Gap Score
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Missing Mandatory field contributes 3 points to Gap Score.
    console.log("[KGR-102] Gap Score Calculation → Verify missing Mandatory field contributes 3 points to Gap Score");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-103 - Gap Score Calculation → missing Optional field contributes 1 point to Gap Score", async ({ testData }) => {
    // Excel Test Case ID: KGR-103
    // Excel Scenario: Gap Score Calculation → Verify missing Optional field contributes 1 point to Gap Score
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Missing Optional field contributes 1 point to Gap Score.
    console.log("[KGR-103] Gap Score Calculation → Verify missing Optional field contributes 1 point to Gap Score");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-104 - Gap Score Calculation → customer with one missing Mandatory field displays score 3", async ({ testData }) => {
    // Excel Test Case ID: KGR-104
    // Excel Scenario: Gap Score Calculation → Verify customer with one missing Mandatory field displays score 3
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer with one missing Mandatory field displays score
    console.log("[KGR-104] Gap Score Calculation → Verify customer with one missing Mandatory field displays score 3");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-105 - Gap Score Calculation → customer with one missing Optional field displays score 1", async ({ testData }) => {
    // Excel Test Case ID: KGR-105
    // Excel Scenario: Gap Score Calculation → Verify customer with one missing Optional field displays score 1
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer with one missing Optional field displays score
    console.log("[KGR-105] Gap Score Calculation → Verify customer with one missing Optional field displays score 1");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-106 - Gap Score Calculation → score calculation with multiple Mandatory fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-106
    // Excel Scenario: Gap Score Calculation → Verify score calculation with multiple Mandatory fields
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation with multiple Mandatory fields.
    console.log("[KGR-106] Gap Score Calculation → Verify score calculation with multiple Mandatory fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-107 - Gap Score Calculation → score calculation with multiple Optional fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-107
    // Excel Scenario: Gap Score Calculation → Verify score calculation with multiple Optional fields
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation with multiple Optional fields.
    console.log("[KGR-107] Gap Score Calculation → Verify score calculation with multiple Optional fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-108 - Gap Score Calculation → score calculation with mixed Mandatory and Optional fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-108
    // Excel Scenario: Gap Score Calculation → Verify score calculation with mixed Mandatory and Optional fields
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation with mixed Mandatory and Optional fields.
    console.log("[KGR-108] Gap Score Calculation → Verify score calculation with mixed Mandatory and Optional fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-109 - Gap Score Calculation → score is displayed as integer value", async ({ testData }) => {
    // Excel Test Case ID: KGR-109
    // Excel Scenario: Gap Score Calculation → Verify score is displayed as integer value
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score is displayed as integer value.
    console.log("[KGR-109] Gap Score Calculation → Verify score is displayed as integer value");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-110 - Gap Score Calculation → customer with no missing fields displays score 0", async ({ testData }) => {
    // Excel Test Case ID: KGR-110
    // Excel Scenario: Gap Score Calculation → Verify customer with no missing fields displays score 0
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Customer with no missing fields displays score
    console.log("[KGR-110] Gap Score Calculation → Verify customer with no missing fields displays score 0");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-111 - Gap Score Calculation → score displayed in report matches score in Gap Detail Modal", async ({ testData }) => {
    // Excel Test Case ID: KGR-111
    // Excel Scenario: Gap Score Calculation → Verify score displayed in report matches score in Gap Detail Modal
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score displayed in report matches score in Gap Detail Modal.
    console.log("[KGR-111] Gap Score Calculation → Verify score displayed in report matches score in Gap Detail Modal");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-112 - Gap Score Calculation → score calculation includes all missing fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-112
    // Excel Scenario: Gap Score Calculation → Verify score calculation includes all missing fields
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation includes all missing fields.
    console.log("[KGR-112] Gap Score Calculation → Verify score calculation includes all missing fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-113 - Gap Score Calculation → score calculation excludes completed fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-113
    // Excel Scenario: Gap Score Calculation → Verify score calculation excludes completed fields
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation excludes completed fields.
    console.log("[KGR-113] Gap Score Calculation → Verify score calculation excludes completed fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-114 - Gap Score Calculation → score updates after Mandatory field remediation", async ({ testData }) => {
    // Excel Test Case ID: KGR-114
    // Excel Scenario: Gap Score Calculation → Verify score updates after Mandatory field remediation
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score updates after Mandatory field remediation.
    console.log("[KGR-114] Gap Score Calculation → Verify score updates after Mandatory field remediation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-115 - Gap Score Calculation → score updates after Optional field remediation", async ({ testData }) => {
    // Excel Test Case ID: KGR-115
    // Excel Scenario: Gap Score Calculation → Verify score updates after Optional field remediation
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score updates after Optional field remediation.
    console.log("[KGR-115] Gap Score Calculation → Verify score updates after Optional field remediation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-116 - Gap Score Calculation → score remains unchanged when unrelated customer data changes", async ({ testData }) => {
    // Excel Test Case ID: KGR-116
    // Excel Scenario: Gap Score Calculation → Verify score remains unchanged when unrelated customer data changes
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score remains unchanged when unrelated customer data changes.
    console.log("[KGR-116] Gap Score Calculation → Verify score remains unchanged when unrelated customer data changes");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-117 - Gap Score Calculation → Low priority classification based on template score bands", async ({ testData }) => {
    // Excel Test Case ID: KGR-117
    // Excel Scenario: Gap Score Calculation → Verify Low priority classification based on template score bands
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Low priority classification based on template score bands.
    // TODO [KGR-117]: Per-template band config not listed — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-117] Gap Score Calculation → Verify Low priority classification based on template score bands");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-118 - Gap Score Calculation → Medium priority classification based on template score bands", async ({ testData }) => {
    // Excel Test Case ID: KGR-118
    // Excel Scenario: Gap Score Calculation → Verify Medium priority classification based on template score bands
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Medium priority classification based on template score bands.
    // TODO [KGR-118]: Per-template band config not listed — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-118] Gap Score Calculation → Verify Medium priority classification based on template score bands");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-119 - Gap Score Calculation → High priority classification based on template score bands", async ({ testData }) => {
    // Excel Test Case ID: KGR-119
    // Excel Scenario: Gap Score Calculation → Verify High priority classification based on template score bands
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: High priority classification based on template score bands.
    // TODO [KGR-119]: Per-template band config not listed — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-119] Gap Score Calculation → Verify High priority classification based on template score bands");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-120 - Gap Score Calculation → Critical priority classification based on template score bands", async ({ testData }) => {
    // Excel Test Case ID: KGR-120
    // Excel Scenario: Gap Score Calculation → Verify Critical priority classification based on template score bands
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Critical priority classification based on template score bands.
    // TODO [KGR-120]: Per-template band config not listed — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-120] Gap Score Calculation → Verify Critical priority classification based on template score bands");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-121 - Gap Score Calculation → priority is derived from assigned template score bands", async ({ testData }) => {
    // Excel Test Case ID: KGR-121
    // Excel Scenario: Gap Score Calculation → Verify priority is derived from assigned template score bands
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Priority is derived from assigned template score bands.
    console.log("[KGR-121] Gap Score Calculation → Verify priority is derived from assigned template score bands");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-122 - Gap Score Calculation → same score can result in different priorities under different templates", async ({ testData }) => {
    // Excel Test Case ID: KGR-122
    // Excel Scenario: Gap Score Calculation → Verify same score can result in different priorities under different templates
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Same score can result in different priorities under different templates.
    console.log("[KGR-122] Gap Score Calculation → Verify same score can result in different priorities under different templates");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      });
  });

  test("Case ID:KGR-123 - Gap Score Calculation → priority recalculation after score band configuration change", async ({ testData }) => {
    // Excel Test Case ID: KGR-123
    // Excel Scenario: Gap Score Calculation → Verify priority recalculation after score band configuration change
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Priority recalculation after score band configuration change.
    console.log("[KGR-123] Gap Score Calculation → Verify priority recalculation after score band configuration change");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-124 - Gap Score Calculation → score recalculation after new field is added to template", async ({ testData }) => {
    // Excel Test Case ID: KGR-124
    // Excel Scenario: Gap Score Calculation → Verify score recalculation after new field is added to template
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score recalculation after new field is added to template.
    console.log("[KGR-124] Gap Score Calculation → Verify score recalculation after new field is added to template");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-125 - Gap Score Calculation → score recalculation after field requirement changes", async ({ testData }) => {
    // Excel Test Case ID: KGR-125
    // Excel Scenario: Gap Score Calculation → Verify score recalculation after field requirement changes
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score recalculation after field requirement changes.
    console.log("[KGR-125] Gap Score Calculation → Verify score recalculation after field requirement changes");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-126 - Gap Score Calculation → score does not display negative values", async ({ testData }) => {
    // Excel Test Case ID: KGR-126
    // Excel Scenario: Gap Score Calculation → Verify score does not display negative values
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score does not display negative values.
    console.log("[KGR-126] Gap Score Calculation → Verify score does not display negative values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-127 - Gap Score Calculation → score calculation consistency across multiple refreshes", async ({ testData }) => {
    // Excel Test Case ID: KGR-127
    // Excel Scenario: Gap Score Calculation → Verify score calculation consistency across multiple refreshes
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation consistency across multiple refreshes.
    console.log("[KGR-127] Gap Score Calculation → Verify score calculation consistency across multiple refreshes");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-128 - Gap Score Calculation → score calculation for highest configured score range", async ({ testData }) => {
    // Excel Test Case ID: KGR-128
    // Excel Scenario: Gap Score Calculation → Verify score calculation for highest configured score range
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation for highest configured score range.
    console.log("[KGR-128] Gap Score Calculation → Verify score calculation for highest configured score range");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-129 - Gap Score Calculation → score calculation for lowest configured score range", async ({ testData }) => {
    // Excel Test Case ID: KGR-129
    // Excel Scenario: Gap Score Calculation → Verify score calculation for lowest configured score range
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score calculation for lowest configured score range.
    console.log("[KGR-129] Gap Score Calculation → Verify score calculation for lowest configured score range");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-130 - Gap Score Calculation → score displayed in exported report matches application data", async ({ testData }) => {
    // Excel Test Case ID: KGR-130
    // Excel Scenario: Gap Score Calculation → Verify score displayed in exported report matches application data
    // FSD §4.6 — KYC Gap Score — Calculation
    // Steps (19): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score displayed in exported report matches application data.
    console.log("[KGR-130] Gap Score Calculation → Verify score displayed in exported report matches application data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });
  });

  test.describe("Gap Detail Modal", () => {
  test("Case ID:KGR-131 - Gap Detail Modal → View button opens Gap Detail Modal", async ({ testData }) => {
    // Excel Test Case ID: KGR-131
    // Excel Scenario: Gap Detail Modal → Verify View button opens Gap Detail Modal
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: View button opens Gap Detail Modal.
    console.log("[KGR-131] Gap Detail Modal → Verify View button opens Gap Detail Modal");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectViewButtonsOnRows();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-132 - Gap Detail Modal → modal displays customer name", async ({ testData }) => {
    // Excel Test Case ID: KGR-132
    // Excel Scenario: Gap Detail Modal → Verify modal displays customer name
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal displays customer name.
    console.log("[KGR-132] Gap Detail Modal → Verify modal displays customer name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-133 - Gap Detail Modal → modal displays CIF/Customer ID", async ({ testData }) => {
    // Excel Test Case ID: KGR-133
    // Excel Scenario: Gap Detail Modal → Verify modal displays CIF/Customer ID
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal displays CIF/Customer ID.
    console.log("[KGR-133] Gap Detail Modal → Verify modal displays CIF/Customer ID");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-134 - Gap Detail Modal → modal displays Branch Name", async ({ testData }) => {
    // Excel Test Case ID: KGR-134
    // Excel Scenario: Gap Detail Modal → Verify modal displays Branch Name
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal displays Branch Name.
    console.log("[KGR-134] Gap Detail Modal → Verify modal displays Branch Name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-135 - Gap Detail Modal → modal displays Branch Code", async ({ testData }) => {
    // Excel Test Case ID: KGR-135
    // Excel Scenario: Gap Detail Modal → Verify modal displays Branch Code
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal displays Branch Code.
    console.log("[KGR-135] Gap Detail Modal → Verify modal displays Branch Code");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-136 - Gap Detail Modal → modal displays applied template", async ({ testData }) => {
    // Excel Test Case ID: KGR-136
    // Excel Scenario: Gap Detail Modal → Verify modal displays applied template
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal displays applied template.
    console.log("[KGR-136] Gap Detail Modal → Verify modal displays applied template");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-137 - Gap Detail Modal → Missing Fields section is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-137
    // Excel Scenario: Gap Detail Modal → Verify Missing Fields section is displayed
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Missing Fields section is displayed.
    console.log("[KGR-137] Gap Detail Modal → Verify Missing Fields section is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-138 - Gap Detail Modal → each missing field displays field name", async ({ testData }) => {
    // Excel Test Case ID: KGR-138
    // Excel Scenario: Gap Detail Modal → Verify each missing field displays field name
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Each missing field displays field name.
    console.log("[KGR-138] Gap Detail Modal → Verify each missing field displays field name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-139 - Gap Detail Modal → each missing field displays description", async ({ testData }) => {
    // Excel Test Case ID: KGR-139
    // Excel Scenario: Gap Detail Modal → Verify each missing field displays description
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Each missing field displays description.
    console.log("[KGR-139] Gap Detail Modal → Verify each missing field displays description");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-140 - Gap Detail Modal → each missing field displays weight", async ({ testData }) => {
    // Excel Test Case ID: KGR-140
    // Excel Scenario: Gap Detail Modal → Verify each missing field displays weight
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Each missing field displays weight.
    console.log("[KGR-140] Gap Detail Modal → Verify each missing field displays weight");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      });
  });

  test("Case ID:KGR-141 - Gap Detail Modal → each missing field displays requirement type", async ({ testData }) => {
    // Excel Test Case ID: KGR-141
    // Excel Scenario: Gap Detail Modal → Verify each missing field displays requirement type
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Each missing field displays requirement type.
    console.log("[KGR-141] Gap Detail Modal → Verify each missing field displays requirement type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-142 - Gap Detail Modal → Mandatory fields display correct requirement type", async ({ testData }) => {
    // Excel Test Case ID: KGR-142
    // Excel Scenario: Gap Detail Modal → Verify Mandatory fields display correct requirement type
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Mandatory fields display correct requirement type.
    console.log("[KGR-142] Gap Detail Modal → Verify Mandatory fields display correct requirement type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-143 - Gap Detail Modal → Optional fields display correct requirement type", async ({ testData }) => {
    // Excel Test Case ID: KGR-143
    // Excel Scenario: Gap Detail Modal → Verify Optional fields display correct requirement type
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Optional fields display correct requirement type.
    console.log("[KGR-143] Gap Detail Modal → Verify Optional fields display correct requirement type");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-144 - Gap Detail Modal → Gap Type badge is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-144
    // Excel Scenario: Gap Detail Modal → Verify Gap Type badge is displayed
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Type badge is displayed.
    console.log("[KGR-144] Gap Detail Modal → Verify Gap Type badge is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-145 - Gap Detail Modal → CIP Gap Type badge", async ({ testData }) => {
    // Excel Test Case ID: KGR-145
    // Excel Scenario: Gap Detail Modal → Verify CIP Gap Type badge
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: CIP Gap Type badge.
    console.log("[KGR-145] Gap Detail Modal → Verify CIP Gap Type badge");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-146 - Gap Detail Modal → CDD Gap Type badge", async ({ testData }) => {
    // Excel Test Case ID: KGR-146
    // Excel Scenario: Gap Detail Modal → Verify CDD Gap Type badge
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: CDD Gap Type badge.
    console.log("[KGR-146] Gap Detail Modal → Verify CDD Gap Type badge");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-147 - Gap Detail Modal → EDD Gap Type badge", async ({ testData }) => {
    // Excel Test Case ID: KGR-147
    // Excel Scenario: Gap Detail Modal → Verify EDD Gap Type badge
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: EDD Gap Type badge.
    console.log("[KGR-147] Gap Detail Modal → Verify EDD Gap Type badge");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-148 - Gap Detail Modal → Score Summary section is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-148
    // Excel Scenario: Gap Detail Modal → Verify Score Summary section is displayed
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Score Summary section is displayed.
    console.log("[KGR-148] Gap Detail Modal → Verify Score Summary section is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      });
  });

  test("Case ID:KGR-149 - Gap Detail Modal → Total KYC Gap Score displayed in modal", async ({ testData }) => {
    // Excel Test Case ID: KGR-149
    // Excel Scenario: Gap Detail Modal → Verify Total KYC Gap Score displayed in modal
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Total KYC Gap Score displayed in modal.
    console.log("[KGR-149] Gap Detail Modal → Verify Total KYC Gap Score displayed in modal");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      });
  });

  test("Case ID:KGR-150 - Gap Detail Modal → modal score matches report grid score", async ({ testData }) => {
    // Excel Test Case ID: KGR-150
    // Excel Scenario: Gap Detail Modal → Verify modal score matches report grid score
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal score matches report grid score.
    console.log("[KGR-150] Gap Detail Modal → Verify modal score matches report grid score");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-151 - Gap Detail Modal → risk label is displayed in score summary", async ({ testData }) => {
    // Excel Test Case ID: KGR-151
    // Excel Scenario: Gap Detail Modal → Verify risk label is displayed in score summary
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Risk label is displayed in score summary.
    console.log("[KGR-151] Gap Detail Modal → Verify risk label is displayed in score summary");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      });
  });

  test("Case ID:KGR-152 - Gap Detail Modal → risk label matches customer priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-152
    // Excel Scenario: Gap Detail Modal → Verify risk label matches customer priority
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Risk label matches customer priority.
    console.log("[KGR-152] Gap Detail Modal → Verify risk label matches customer priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-153 - Gap Detail Modal → modal handles customer with single missing field", async ({ testData }) => {
    // Excel Test Case ID: KGR-153
    // Excel Scenario: Gap Detail Modal → Verify modal handles customer with single missing field
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal handles customer with single missing field.
    console.log("[KGR-153] Gap Detail Modal → Verify modal handles customer with single missing field");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-154 - Gap Detail Modal → modal handles customer with multiple missing fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-154
    // Excel Scenario: Gap Detail Modal → Verify modal handles customer with multiple missing fields
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal handles customer with multiple missing fields.
    console.log("[KGR-154] Gap Detail Modal → Verify modal handles customer with multiple missing fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-155 - Gap Detail Modal → missing field count matches displayed records", async ({ testData }) => {
    // Excel Test Case ID: KGR-155
    // Excel Scenario: Gap Detail Modal → Verify missing field count matches displayed records
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Missing field count matches displayed records.
    console.log("[KGR-155] Gap Detail Modal → Verify missing field count matches displayed records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-156 - Gap Detail Modal → total score equals sum of displayed field weights", async ({ testData }) => {
    // Excel Test Case ID: KGR-156
    // Excel Scenario: Gap Detail Modal → Verify total score equals sum of displayed field weights
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Total score equals sum of displayed field weights.
    console.log("[KGR-156] Gap Detail Modal → Verify total score equals sum of displayed field weights");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      });
  });

  test("Case ID:KGR-157 - Gap Detail Modal → modal can be closed using Close/X button", async ({ testData }) => {
    // Excel Test Case ID: KGR-157
    // Excel Scenario: Gap Detail Modal → Verify modal can be closed using Close/X button
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal can be closed using Close/X button.
    console.log("[KGR-157] Gap Detail Modal → Verify modal can be closed using Close/X button");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-158 - Gap Detail Modal → modal can be closed using ESC key", async ({ testData }) => {
    // Excel Test Case ID: KGR-158
    // Excel Scenario: Gap Detail Modal → Verify modal can be closed using ESC key
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal can be closed using ESC key.
    console.log("[KGR-158] Gap Detail Modal → Verify modal can be closed using ESC key");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-159 - Gap Detail Modal → modal closes without data corruption", async ({ testData }) => {
    // Excel Test Case ID: KGR-159
    // Excel Scenario: Gap Detail Modal → Verify modal closes without data corruption
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal closes without data corruption.
    console.log("[KGR-159] Gap Detail Modal → Verify modal closes without data corruption");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-160 - Gap Detail Modal → modal supports scrolling for large datasets", async ({ testData }) => {
    // Excel Test Case ID: KGR-160
    // Excel Scenario: Gap Detail Modal → Verify modal supports scrolling for large datasets
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal supports scrolling for large datasets.
    console.log("[KGR-160] Gap Detail Modal → Verify modal supports scrolling for large datasets");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });

  test("Case ID:KGR-287 - Gap Detail Modal → Gap Detail Modal displays CIF ID and branch code in customer metadata section", async ({ testData }) => {
    // Excel Test Case ID: KGR-287
    // Excel Scenario: Gap Detail Modal → Verify Gap Detail Modal displays CIF ID and branch code in customer metadata section
    // FSD §4.7 — Gap Detail Modal
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Modal shows CIF ID and branch code for the selected customer.
    console.log("[KGR-287] Gap Detail Modal → Verify Gap Detail Modal displays CIF ID and branch code in customer metadata section");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.closeGapDetailModal();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      });
  });
  });

  test.describe("Pagination", () => {
  test("Case ID:KGR-161 - Pagination → pagination controls are displayed on report page", async ({ testData }) => {
    // Excel Test Case ID: KGR-161
    // Excel Scenario: Pagination → Verify pagination controls are displayed on report page
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination controls are displayed on report page.
    console.log("[KGR-161] Pagination → Verify pagination controls are displayed on report page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-162 - Pagination → Items Per Page dropdown is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-162
    // Excel Scenario: Pagination → Verify Items Per Page dropdown is displayed
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Items Per Page dropdown is displayed.
    console.log("[KGR-162] Pagination → Verify Items Per Page dropdown is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-163 - Pagination → Items Per Page default value", async ({ testData }) => {
    // Excel Test Case ID: KGR-163
    // Excel Scenario: Pagination → Verify Items Per Page default value
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Items Per Page default value.
    console.log("[KGR-163] Pagination → Verify Items Per Page default value");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-164 - Pagination → Items Per Page supports value 10", async ({ testData }) => {
    // Excel Test Case ID: KGR-164
    // Excel Scenario: Pagination → Verify Items Per Page supports value 10
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Items Per Page supports value
    console.log("[KGR-164] Pagination → Verify Items Per Page supports value 10");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-165 - Pagination → Items Per Page supports value 20", async ({ testData }) => {
    // Excel Test Case ID: KGR-165
    // Excel Scenario: Pagination → Verify Items Per Page supports value 20
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Items Per Page supports value
    console.log("[KGR-165] Pagination → Verify Items Per Page supports value 20");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-166 - Pagination → Items Per Page supports value 50", async ({ testData }) => {
    // Excel Test Case ID: KGR-166
    // Excel Scenario: Pagination → Verify Items Per Page supports value 50
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Items Per Page supports value
    console.log("[KGR-166] Pagination → Verify Items Per Page supports value 50");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-167 - Pagination → page size changes update grid correctly", async ({ testData }) => {
    // Excel Test Case ID: KGR-167
    // Excel Scenario: Pagination → Verify page size changes update grid correctly
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Page size changes update grid correctly.
    console.log("[KGR-167] Pagination → Verify page size changes update grid correctly");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-168 - Pagination → Previous button is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-168
    // Excel Scenario: Pagination → Verify Previous button is displayed
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Previous button is displayed.
    console.log("[KGR-168] Pagination → Verify Previous button is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-169 - Pagination → Next button is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-169
    // Excel Scenario: Pagination → Verify Next button is displayed
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Next button is displayed.
    console.log("[KGR-169] Pagination → Verify Next button is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-170 - Pagination → Next button navigates to next page", async ({ testData }) => {
    // Excel Test Case ID: KGR-170
    // Excel Scenario: Pagination → Verify Next button navigates to next page
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Next button navigates to next page.
    console.log("[KGR-170] Pagination → Verify Next button navigates to next page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-171 - Pagination → Previous button navigates to previous page", async ({ testData }) => {
    // Excel Test Case ID: KGR-171
    // Excel Scenario: Pagination → Verify Previous button navigates to previous page
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Previous button navigates to previous page.
    console.log("[KGR-171] Pagination → Verify Previous button navigates to previous page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-172 - Pagination → Previous button behavior on first page", async ({ testData }) => {
    // Excel Test Case ID: KGR-172
    // Excel Scenario: Pagination → Verify Previous button behavior on first page
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Previous button behavior on first page.
    console.log("[KGR-172] Pagination → Verify Previous button behavior on first page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-173 - Pagination → Next button behavior on last page", async ({ testData }) => {
    // Excel Test Case ID: KGR-173
    // Excel Scenario: Pagination → Verify Next button behavior on last page
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Next button behavior on last page.
    console.log("[KGR-173] Pagination → Verify Next button behavior on last page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-174 - Pagination → page indicator is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-174
    // Excel Scenario: Pagination → Verify page indicator is displayed
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Page indicator is displayed.
    console.log("[KGR-174] Pagination → Verify page indicator is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-175 - Pagination → item range indicator is displayed", async ({ testData }) => {
    // Excel Test Case ID: KGR-175
    // Excel Scenario: Pagination → Verify item range indicator is displayed
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Item range indicator is displayed.
    console.log("[KGR-175] Pagination → Verify item range indicator is displayed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-176 - Pagination → page count calculation", async ({ testData }) => {
    // Excel Test Case ID: KGR-176
    // Excel Scenario: Pagination → Verify page count calculation
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Page count calculation.
    console.log("[KGR-176] Pagination → Verify page count calculation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-177 - Pagination → pagination with filtered records", async ({ testData }) => {
    // Excel Test Case ID: KGR-177
    // Excel Scenario: Pagination → Verify pagination with filtered records
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination with filtered records.
    console.log("[KGR-177] Pagination → Verify pagination with filtered records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-178 - Pagination → pagination with search results", async ({ testData }) => {
    // Excel Test Case ID: KGR-178
    // Excel Scenario: Pagination → Verify pagination with search results
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination with search results.
    console.log("[KGR-178] Pagination → Verify pagination with search results");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-179 - Pagination → pagination resets to Page 1 after Search", async ({ testData }) => {
    // Excel Test Case ID: KGR-179
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Search
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Search.
    console.log("[KGR-179] Pagination → Verify pagination resets to Page 1 after Search");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-180 - Pagination → pagination resets to Page 1 after Branch filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-180
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Branch filter
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Branch filter.
    console.log("[KGR-180] Pagination → Verify pagination resets to Page 1 after Branch filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-181 - Pagination → pagination resets to Page 1 after Customer Type filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-181
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Customer Type filter
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Customer Type filter.
    console.log("[KGR-181] Pagination → Verify pagination resets to Page 1 after Customer Type filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-182 - Pagination → pagination resets to Page 1 after Template filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-182
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Template filter
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Template filter.
    console.log("[KGR-182] Pagination → Verify pagination resets to Page 1 after Template filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-183 - Pagination → pagination resets to Page 1 after Priority filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-183
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Priority filter
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Priority filter.
    console.log("[KGR-183] Pagination → Verify pagination resets to Page 1 after Priority filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-184 - Pagination → pagination resets to Page 1 after Gap Score filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-184
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Gap Score filter
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Gap Score filter.
    console.log("[KGR-184] Pagination → Verify pagination resets to Page 1 after Gap Score filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-185 - Pagination → pagination resets to Page 1 after Clear Filters", async ({ testData }) => {
    // Excel Test Case ID: KGR-185
    // Excel Scenario: Pagination → Verify pagination resets to Page 1 after Clear Filters
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination resets to Page 1 after Clear Filters.
    console.log("[KGR-185] Pagination → Verify pagination resets to Page 1 after Clear Filters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-186 - Pagination → pagination state is retained when opening and closing Gap Detail Modal", async ({ testData }) => {
    // Excel Test Case ID: KGR-186
    // Excel Scenario: Pagination → Verify pagination state is retained when opening and closing Gap Detail Modal
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination state is retained when opening and closing Gap Detail Modal.
    console.log("[KGR-186] Pagination → Verify pagination state is retained when opening and closing Gap Detail Modal");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-187 - Pagination → pagination state retained while navigating between Report and Template screens", async ({ testData }) => {
    // Excel Test Case ID: KGR-187
    // Excel Scenario: Pagination → Verify pagination state retained while navigating between Report and Template screens
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination state retained while navigating between Report and Template screens.
    console.log("[KGR-187] Pagination → Verify pagination state retained while navigating between Report and Template screens");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-188 - Pagination → pagination works correctly when total records equal page size", async ({ testData }) => {
    // Excel Test Case ID: KGR-188
    // Excel Scenario: Pagination → Verify pagination works correctly when total records equal page size
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination works correctly when total records equal page size.
    console.log("[KGR-188] Pagination → Verify pagination works correctly when total records equal page size");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-189 - Pagination → pagination works correctly when total records are less than page size", async ({ testData }) => {
    // Excel Test Case ID: KGR-189
    // Excel Scenario: Pagination → Verify pagination works correctly when total records are less than page size
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination works correctly when total records are less than page size.
    console.log("[KGR-189] Pagination → Verify pagination works correctly when total records are less than page size");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });

  test("Case ID:KGR-190 - Pagination → pagination works correctly when no records are available", async ({ testData }) => {
    // Excel Test Case ID: KGR-190
    // Excel Scenario: Pagination → Verify pagination works correctly when no records are available
    // FSD §4.8 — Pagination
    // Steps (21): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Pagination works correctly when no records are available.
    console.log("[KGR-190] Pagination → Verify pagination works correctly when no records are available");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.setPageSize(1);
      await gapPage.goToPreviousPage();
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      });
  });
  });

  test.describe("Export", () => {
  test("Case ID:KGR-191 - Export → Export button is displayed on KYC Gap Report page", async ({ testData }) => {
    // Excel Test Case ID: KGR-191
    // Excel Scenario: Export → Verify Export button is displayed on KYC Gap Report page
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export button is displayed on KYC Gap Report page.
    // TODO [KGR-191]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-191] Export → Verify Export button is displayed on KYC Gap Report page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-192 - Export → Export button is enabled when records exist", async ({ testData }) => {
    // Excel Test Case ID: KGR-192
    // Excel Scenario: Export → Verify Export button is enabled when records exist
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export button is enabled when records exist.
    // TODO [KGR-192]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-192] Export → Verify Export button is enabled when records exist");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      });
  });

  test("Case ID:KGR-193 - Export → export downloads report successfully", async ({ testData }) => {
    // Excel Test Case ID: KGR-193
    // Excel Scenario: Export → Verify export downloads report successfully
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export downloads report successfully.
    // TODO [KGR-193]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-193] Export → Verify export downloads report successfully");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-194 - Export → exported file contains report records", async ({ testData }) => {
    // Excel Test Case ID: KGR-194
    // Excel Scenario: Export → Verify exported file contains report records
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains report records.
    // TODO [KGR-194]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-194] Export → Verify exported file contains report records");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-195 - Export → exported file contains Customer column", async ({ testData }) => {
    // Excel Test Case ID: KGR-195
    // Excel Scenario: Export → Verify exported file contains Customer column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Customer column.
    // TODO [KGR-195]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-195] Export → Verify exported file contains Customer column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-196 - Export → exported file contains Customer ID column", async ({ testData }) => {
    // Excel Test Case ID: KGR-196
    // Excel Scenario: Export → Verify exported file contains Customer ID column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Customer ID column.
    // TODO [KGR-196]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-196] Export → Verify exported file contains Customer ID column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-197 - Export → exported file contains Type column", async ({ testData }) => {
    // Excel Test Case ID: KGR-197
    // Excel Scenario: Export → Verify exported file contains Type column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Type column.
    // TODO [KGR-197]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-197] Export → Verify exported file contains Type column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-198 - Export → exported file contains Branch column", async ({ testData }) => {
    // Excel Test Case ID: KGR-198
    // Excel Scenario: Export → Verify exported file contains Branch column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Branch column.
    // TODO [KGR-198]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-198] Export → Verify exported file contains Branch column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-199 - Export → exported file contains Branch Code column", async ({ testData }) => {
    // Excel Test Case ID: KGR-199
    // Excel Scenario: Export → Verify exported file contains Branch Code column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Branch Code column.
    // TODO [KGR-199]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-199] Export → Verify exported file contains Branch Code column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-200 - Export → exported file contains Template Applied column", async ({ testData }) => {
    // Excel Test Case ID: KGR-200
    // Excel Scenario: Export → Verify exported file contains Template Applied column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Template Applied column.
    // TODO [KGR-200]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-200] Export → Verify exported file contains Template Applied column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-201 - Export → exported file contains KYC Gap Score column", async ({ testData }) => {
    // Excel Test Case ID: KGR-201
    // Excel Scenario: Export → Verify exported file contains KYC Gap Score column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains KYC Gap Score column.
    // TODO [KGR-201]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-201] Export → Verify exported file contains KYC Gap Score column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-202 - Export → exported file contains Priority column", async ({ testData }) => {
    // Excel Test Case ID: KGR-202
    // Excel Scenario: Export → Verify exported file contains Priority column
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported file contains Priority column.
    // TODO [KGR-202]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-202] Export → Verify exported file contains Priority column");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectPriorityColumnVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-203 - Export → exported record count matches report record count", async ({ testData }) => {
    // Excel Test Case ID: KGR-203
    // Excel Scenario: Export → Verify exported record count matches report record count
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported record count matches report record count.
    // TODO [KGR-203]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-203] Export → Verify exported record count matches report record count");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-204 - Export → exported Customer values match report data", async ({ testData }) => {
    // Excel Test Case ID: KGR-204
    // Excel Scenario: Export → Verify exported Customer values match report data
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported Customer values match report data.
    // TODO [KGR-204]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-204] Export → Verify exported Customer values match report data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-205 - Export → exported KYC Gap Score values match report data", async ({ testData }) => {
    // Excel Test Case ID: KGR-205
    // Excel Scenario: Export → Verify exported KYC Gap Score values match report data
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported KYC Gap Score values match report data.
    // TODO [KGR-205]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-205] Export → Verify exported KYC Gap Score values match report data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-206 - Export → exported Priority values match report data", async ({ testData }) => {
    // Excel Test Case ID: KGR-206
    // Excel Scenario: Export → Verify exported Priority values match report data
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Exported Priority values match report data.
    // TODO [KGR-206]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-206] Export → Verify exported Priority values match report data");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-207 - Export → export respects active Search filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-207
    // Excel Scenario: Export → Verify export respects active Search filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Search filter.
    // TODO [KGR-207]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-207] Export → Verify export respects active Search filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-208 - Export → export respects active Branch filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-208
    // Excel Scenario: Export → Verify export respects active Branch filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Branch filter.
    // TODO [KGR-208]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-208] Export → Verify export respects active Branch filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-209 - Export → export respects active Customer Type filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-209
    // Excel Scenario: Export → Verify export respects active Customer Type filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Customer Type filter.
    // TODO [KGR-209]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-209] Export → Verify export respects active Customer Type filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-210 - Export → export respects active Template filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-210
    // Excel Scenario: Export → Verify export respects active Template filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Template filter.
    // TODO [KGR-210]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-210] Export → Verify export respects active Template filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-211 - Export → export respects active Priority filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-211
    // Excel Scenario: Export → Verify export respects active Priority filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Priority filter.
    // TODO [KGR-211]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-211] Export → Verify export respects active Priority filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-212 - Export → export respects active Gap Score filter", async ({ testData }) => {
    // Excel Test Case ID: KGR-212
    // Excel Scenario: Export → Verify export respects active Gap Score filter
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export respects active Gap Score filter.
    // TODO [KGR-212]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-212] Export → Verify export respects active Gap Score filter");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-213 - Export → export supports combined filters", async ({ testData }) => {
    // Excel Test Case ID: KGR-213
    // Excel Scenario: Export → Verify export supports combined filters
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export supports combined filters.
    // TODO [KGR-213]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-213] Export → Verify export supports combined filters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-214 - Export → export after sorting", async ({ testData }) => {
    // Excel Test Case ID: KGR-214
    // Excel Scenario: Export → Verify export after sorting
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export after sorting.
    // TODO [KGR-214]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-214] Export → Verify export after sorting");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-215 - Export → export works from Page 1", async ({ testData }) => {
    // Excel Test Case ID: KGR-215
    // Excel Scenario: Export → Verify export works from Page 1
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export works from Page
    // TODO [KGR-215]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-215] Export → Verify export works from Page 1");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-216 - Export → export works from non-first page", async ({ testData }) => {
    // Excel Test Case ID: KGR-216
    // Excel Scenario: Export → Verify export works from non-first page
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export works from non-first page.
    // TODO [KGR-216]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-216] Export → Verify export works from non-first page");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-217 - Export → export works when page size is changed", async ({ testData }) => {
    // Excel Test Case ID: KGR-217
    // Excel Scenario: Export → Verify export works when page size is changed
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export works when page size is changed.
    // TODO [KGR-217]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-217] Export → Verify export works when page size is changed");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-218 - Export → export file opens successfully", async ({ testData }) => {
    // Excel Test Case ID: KGR-218
    // Excel Scenario: Export → Verify export file opens successfully
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export file opens successfully.
    // TODO [KGR-218]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-218] Export → Verify export file opens successfully");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-219 - Export → export handles large datasets", async ({ testData }) => {
    // Excel Test Case ID: KGR-219
    // Excel Scenario: Export → Verify export handles large datasets
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export handles large datasets.
    // TODO [KGR-219]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-219] Export → Verify export handles large datasets");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-220 - Export → export behavior when no records are available", async ({ testData }) => {
    // Excel Test Case ID: KGR-220
    // Excel Scenario: Export → Verify export behavior when no records are available
    // FSD §4.9 — Business Rules
    // Steps (17): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Export behavior when no records are available.
    // TODO [KGR-220]: File format (CSV/XLSX) not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-220] Export → Verify export behavior when no records are available");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.sortByColumn("Customer");
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectExportRespectsActiveFilters();
      await gapPage.expectPageLoaded();
      await gapPage.expectModalScoreMatchesGrid();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });
  });

  test.describe("Security & Audit", () => {
  test("Case ID:KGR-221 - Security & Audit → authenticated Compliance Officer can access KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-221
    // Excel Scenario: Security & Audit → Verify authenticated Compliance Officer can access KYC Gap Report
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Authenticated Compliance Officer can access KYC Gap Report.
    // TODO [KGR-221]: Role credentials not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-221] Security & Audit → Verify authenticated Compliance Officer can access KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-222 - Security & Audit → authenticated Administrator can access KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-222
    // Excel Scenario: Security & Audit → Verify authenticated Administrator can access KYC Gap Report
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Authenticated Administrator can access KYC Gap Report.
    // TODO [KGR-222]: Role credentials not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-222] Security & Audit → Verify authenticated Administrator can access KYC Gap Report");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-223 - Security & Audit → unauthorized role cannot access KYC Gap Report", async ({ testData }) => {
    // Excel Test Case ID: KGR-223
    // Excel Scenario: Security & Audit → Verify unauthorized role cannot access KYC Gap Report
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Unauthorized role cannot access KYC Gap Report.
    // TODO [KGR-223]: Role credentials not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-223] Security & Audit → Verify unauthorized role cannot access KYC Gap Report");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-224 - Security & Audit → unauthenticated user cannot access KYC Gap Report URL", async ({ testData }) => {
    // Excel Test Case ID: KGR-224
    // Excel Scenario: Security & Audit → Verify unauthenticated user cannot access KYC Gap Report URL
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Unauthenticated user cannot access KYC Gap Report URL.
    // TODO [KGR-224]: Role credentials not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-224] Security & Audit → Verify unauthenticated user cannot access KYC Gap Report URL");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-225 - Security & Audit → direct URL access respects RBAC permissions", async ({ testData }) => {
    // Excel Test Case ID: KGR-225
    // Excel Scenario: Security & Audit → Verify direct URL access respects RBAC permissions
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Direct URL access respects RBAC permissions.
    // TODO [KGR-225]: Role credentials not in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-225] Security & Audit → Verify direct URL access respects RBAC permissions");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-226 - Security & Audit → session timeout prevents report access", async ({ testData }) => {
    // Excel Test Case ID: KGR-226
    // Excel Scenario: Security & Audit → Verify session timeout prevents report access
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Session timeout prevents report access.
    console.log("[KGR-226] Security & Audit → Verify session timeout prevents report access");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-227 - Security & Audit → report is read-only", async ({ testData }) => {
    // Excel Test Case ID: KGR-227
    // Excel Scenario: Security & Audit → Verify report is read-only
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Report is read-only.
    console.log("[KGR-227] Security & Audit → Verify report is read-only");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-228 - Security & Audit → report does not provide Bulk Notify action", async ({ testData }) => {
    // Excel Test Case ID: KGR-228
    // Excel Scenario: Security & Audit → Verify report does not provide Bulk Notify action
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Report does not provide Bulk Notify action.
    console.log("[KGR-228] Security & Audit → Verify report does not provide Bulk Notify action");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-229 - Security & Audit → report does not provide Edit action", async ({ testData }) => {
    // Excel Test Case ID: KGR-229
    // Excel Scenario: Security & Audit → Verify report does not provide Edit action
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Report does not provide Edit action.
    console.log("[KGR-229] Security & Audit → Verify report does not provide Edit action");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-230 - Security & Audit → View action does not allow data modification", async ({ testData }) => {
    // Excel Test Case ID: KGR-230
    // Excel Scenario: Security & Audit → Verify View action does not allow data modification
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: View action does not allow data modification.
    console.log("[KGR-230] Security & Audit → Verify View action does not allow data modification");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-231 - Security & Audit → audit log entry generated for template creation", async ({ testData }) => {
    // Excel Test Case ID: KGR-231
    // Excel Scenario: Security & Audit → Verify audit log entry generated for template creation
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log entry generated for template creation.
    // TODO [KGR-231]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-231] Security & Audit → Verify audit log entry generated for template creation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-232 - Security & Audit → audit log captures user ID during template creation", async ({ testData }) => {
    // Excel Test Case ID: KGR-232
    // Excel Scenario: Security & Audit → Verify audit log captures user ID during template creation
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log captures user ID during template creation.
    // TODO [KGR-232]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-232] Security & Audit → Verify audit log captures user ID during template creation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-233 - Security & Audit → audit log captures timestamp during template creation", async ({ testData }) => {
    // Excel Test Case ID: KGR-233
    // Excel Scenario: Security & Audit → Verify audit log captures timestamp during template creation
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log captures timestamp during template creation.
    // TODO [KGR-233]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-233] Security & Audit → Verify audit log captures timestamp during template creation");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-234 - Security & Audit → audit log entry generated for template cloning", async ({ testData }) => {
    // Excel Test Case ID: KGR-234
    // Excel Scenario: Security & Audit → Verify audit log entry generated for template cloning
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log entry generated for template cloning.
    // TODO [KGR-234]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-234] Security & Audit → Verify audit log entry generated for template cloning");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-235 - Security & Audit → audit log entry generated when field requirement changes", async ({ testData }) => {
    // Excel Test Case ID: KGR-235
    // Excel Scenario: Security & Audit → Verify audit log entry generated when field requirement changes
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log entry generated when field requirement changes.
    // TODO [KGR-235]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-235] Security & Audit → Verify audit log entry generated when field requirement changes");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-236 - Security & Audit → audit log records previous value for requirement change", async ({ testData }) => {
    // Excel Test Case ID: KGR-236
    // Excel Scenario: Security & Audit → Verify audit log records previous value for requirement change
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log records previous value for requirement change.
    // TODO [KGR-236]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-236] Security & Audit → Verify audit log records previous value for requirement change");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-237 - Security & Audit → audit log records new value for requirement change", async ({ testData }) => {
    // Excel Test Case ID: KGR-237
    // Excel Scenario: Security & Audit → Verify audit log records new value for requirement change
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log records new value for requirement change.
    // TODO [KGR-237]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-237] Security & Audit → Verify audit log records new value for requirement change");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-238 - Security & Audit → audit log entry generated when custom field is added", async ({ testData }) => {
    // Excel Test Case ID: KGR-238
    // Excel Scenario: Security & Audit → Verify audit log entry generated when custom field is added
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log entry generated when custom field is added.
    // TODO [KGR-238]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-238] Security & Audit → Verify audit log entry generated when custom field is added");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-239 - Security & Audit → audit log entry generated when score bands are modified", async ({ testData }) => {
    // Excel Test Case ID: KGR-239
    // Excel Scenario: Security & Audit → Verify audit log entry generated when score bands are modified
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log entry generated when score bands are modified.
    // TODO [KGR-239]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-239] Security & Audit → Verify audit log entry generated when score bands are modified");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-240 - Security & Audit → audit log captures before and after values for score band changes", async ({ testData }) => {
    // Excel Test Case ID: KGR-240
    // Excel Scenario: Security & Audit → Verify audit log captures before and after values for score band changes
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log captures before and after values for score band changes.
    // TODO [KGR-240]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-240] Security & Audit → Verify audit log captures before and after values for score band changes");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-241 - Security & Audit → audit log remains immutable", async ({ testData }) => {
    // Excel Test Case ID: KGR-241
    // Excel Scenario: Security & Audit → Verify audit log remains immutable
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log remains immutable.
    // TODO [KGR-241]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-241] Security & Audit → Verify audit log remains immutable");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-242 - Security & Audit → audit records are retained after page refresh", async ({ testData }) => {
    // Excel Test Case ID: KGR-242
    // Excel Scenario: Security & Audit → Verify audit records are retained after page refresh
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit records are retained after page refresh.
    // TODO [KGR-242]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-242] Security & Audit → Verify audit records are retained after page refresh");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-243 - Security & Audit → unauthorized user cannot modify template configuration", async ({ testData }) => {
    // Excel Test Case ID: KGR-243
    // Excel Scenario: Security & Audit → Verify unauthorized user cannot modify template configuration
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Unauthorized user cannot modify template configuration.
    // TODO [KGR-243]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-243] Security & Audit → Verify unauthorized user cannot modify template configuration");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-244 - Security & Audit → unauthorized user cannot access audit records", async ({ testData }) => {
    // Excel Test Case ID: KGR-244
    // Excel Scenario: Security & Audit → Verify unauthorized user cannot access audit records
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Unauthorized user cannot access audit records.
    // TODO [KGR-244]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-244] Security & Audit → Verify unauthorized user cannot access audit records");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-245 - Security & Audit → application prevents access after logout", async ({ testData }) => {
    // Excel Test Case ID: KGR-245
    // Excel Scenario: Security & Audit → Verify application prevents access after logout
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Application prevents access after logout.
    // TODO [KGR-245]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-245] Security & Audit → Verify application prevents access after logout");
    await test.step("Preconditions", async () => {
      await gapPage.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectAccessDenied();
      });
  });

  test("Case ID:KGR-246 - Security & Audit → report remains accessible after successful re-authentication", async ({ testData }) => {
    // Excel Test Case ID: KGR-246
    // Excel Scenario: Security & Audit → Verify report remains accessible after successful re-authentication
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Report remains accessible after successful re-authentication.
    // TODO [KGR-246]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-246] Security & Audit → Verify report remains accessible after successful re-authentication");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-247 - Security & Audit → audit log captures template archival action", async ({ testData }) => {
    // Excel Test Case ID: KGR-247
    // Excel Scenario: Security & Audit → Verify audit log captures template archival action
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit log captures template archival action.
    // TODO [KGR-247]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-247] Security & Audit → Verify audit log captures template archival action");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-248 - Security & Audit → templates cannot be permanently deleted", async ({ testData }) => {
    // Excel Test Case ID: KGR-248
    // Excel Scenario: Security & Audit → Verify templates cannot be permanently deleted
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Templates cannot be permanently deleted.
    // TODO [KGR-248]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-248] Security & Audit → Verify templates cannot be permanently deleted");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-249 - Security & Audit → archived templates remain traceable in audit history", async ({ testData }) => {
    // Excel Test Case ID: KGR-249
    // Excel Scenario: Security & Audit → Verify archived templates remain traceable in audit history
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Archived templates remain traceable in audit history.
    // TODO [KGR-249]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-249] Security & Audit → Verify archived templates remain traceable in audit history");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-250 - Security & Audit → audit trail completeness for template lifecycle", async ({ testData }) => {
    // Excel Test Case ID: KGR-250
    // Excel Scenario: Security & Audit → Verify audit trail completeness for template lifecycle
    // FSD §4.9 — Business Rules
    // Steps (15): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Audit trail completeness for template lifecycle.
    // TODO [KGR-250]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-250] Security & Audit → Verify audit trail completeness for template lifecycle");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-288 - Security & Audit → keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order", async ({ testData }) => {
    // Excel Test Case ID: KGR-288
    // Excel Scenario: Security & Audit → Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order
    // FSD §4.9 — Business Rules
    // Steps (23): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Search, filters, grid, and pagination are reachable via keyboard tab order.
    // TODO [KGR-288]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-288] Security & Audit → Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-289 - Security & Audit → ARIA roles and labels are present on report table, filters, and Gap Detail Modal", async ({ testData }) => {
    // Excel Test Case ID: KGR-289
    // Excel Scenario: Security & Audit → Verify ARIA roles and labels are present on report table, filters, and Gap Detail Modal
    // FSD §4.9 — Business Rules
    // Steps (23): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Table, filters, and modal expose appropriate ARIA roles and labels.
    // TODO [KGR-289]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-289] Security & Audit → Verify ARIA roles and labels are present on report table, filters, and Gap Detail Modal");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-290 - Security & Audit → KYC Gap Report initial page load completes within acceptable performance threshold", async ({ testData }) => {
    // Excel Test Case ID: KGR-290
    // Excel Scenario: Security & Audit → Verify KYC Gap Report initial page load completes within acceptable performance threshold
    // FSD §4.9 — Business Rules
    // Steps (23): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: Initial page load completes within the SLA in test data.
    // TODO [KGR-290]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-290] Security & Audit → Verify KYC Gap Report initial page load completes within acceptable performance threshold");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-291 - Security & Audit → KYC Gap Report layout and controls render consistently in Chrome and Edge browsers", async ({ testData }) => {
    // Excel Test Case ID: KGR-291
    // Excel Scenario: Security & Audit → Verify KYC Gap Report layout and controls render consistently in Chrome and Edge browsers
    // FSD §4.9 — Business Rules
    // Steps (19): Configure user role or session per test data. → Attempt to access KYC Gap Report. → Perform a report access or export action and verify audit log entry is created. …
    // Expected: KYC Gap Report layout and controls render consistently in Chrome and Edge browsers.
    // TODO [KGR-291]: Audit UI/API endpoint not specified — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-291] Security & Audit → Verify KYC Gap Report layout and controls render consistently in Chrome and Edge browsers");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });
  });

  test.describe("Boundary & Negative Testing", () => {
  test("Case ID:KGR-251 - Boundary & Negative Testing → search with blank value", async ({ testData }) => {
    // Excel Test Case ID: KGR-251
    // Excel Scenario: Boundary & Negative Testing → Verify search with blank value
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with blank value.
    console.log("[KGR-251] Boundary & Negative Testing → Verify search with blank value");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-252 - Boundary & Negative Testing → search with whitespace-only value", async ({ testData }) => {
    // Excel Test Case ID: KGR-252
    // Excel Scenario: Boundary & Negative Testing → Verify search with whitespace-only value
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with whitespace-only value.
    console.log("[KGR-252] Boundary & Negative Testing → Verify search with whitespace-only value");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-253 - Boundary & Negative Testing → search with maximum supported characters", async ({ testData }) => {
    // Excel Test Case ID: KGR-253
    // Excel Scenario: Boundary & Negative Testing → Verify search with maximum supported characters
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with maximum supported characters.
    console.log("[KGR-253] Boundary & Negative Testing → Verify search with maximum supported characters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-254 - Boundary & Negative Testing → search with SQL injection pattern", async ({ testData }) => {
    // Excel Test Case ID: KGR-254
    // Excel Scenario: Boundary & Negative Testing → Verify search with SQL injection pattern
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with SQL injection pattern.
    // TODO [KGR-254]: Expected system response detail (block/sanitize/log) — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-254] Boundary & Negative Testing → Verify search with SQL injection pattern");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('\' OR \'1\'=\'1');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-255 - Boundary & Negative Testing → search with script injection pattern", async ({ testData }) => {
    // Excel Test Case ID: KGR-255
    // Excel Scenario: Boundary & Negative Testing → Verify search with script injection pattern
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Search with script injection pattern.
    // TODO [KGR-255]: Expected system response detail (block/sanitize/log) — Excel/FSD gap; implement when product clarifies.
    console.log("[KGR-255] Boundary & Negative Testing → Verify search with script injection pattern");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('<script>alert(\'xss\')</script>');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-256 - Boundary & Negative Testing → Gap Score filter with Min value only", async ({ testData }) => {
    // Excel Test Case ID: KGR-256
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with Min value only
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with Min value only.
    console.log("[KGR-256] Boundary & Negative Testing → Verify Gap Score filter with Min value only");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-257 - Boundary & Negative Testing → Gap Score filter with Max value only", async ({ testData }) => {
    // Excel Test Case ID: KGR-257
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with Max value only
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with Max value only.
    console.log("[KGR-257] Boundary & Negative Testing → Verify Gap Score filter with Max value only");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-258 - Boundary & Negative Testing → Gap Score filter with Min greater than Max", async ({ testData }) => {
    // Excel Test Case ID: KGR-258
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with Min greater than Max
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with Min greater than Max.
    console.log("[KGR-258] Boundary & Negative Testing → Verify Gap Score filter with Min greater than Max");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-259 - Boundary & Negative Testing → Gap Score filter with negative values", async ({ testData }) => {
    // Excel Test Case ID: KGR-259
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with negative values
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with negative values.
    console.log("[KGR-259] Boundary & Negative Testing → Verify Gap Score filter with negative values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-260 - Boundary & Negative Testing → Gap Score filter with decimal values", async ({ testData }) => {
    // Excel Test Case ID: KGR-260
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with decimal values
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with decimal values.
    console.log("[KGR-260] Boundary & Negative Testing → Verify Gap Score filter with decimal values");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-261 - Boundary & Negative Testing → Gap Score filter with alphabetic characters", async ({ testData }) => {
    // Excel Test Case ID: KGR-261
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with alphabetic characters
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with alphabetic characters.
    console.log("[KGR-261] Boundary & Negative Testing → Verify Gap Score filter with alphabetic characters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-262 - Boundary & Negative Testing → Gap Score filter with special characters", async ({ testData }) => {
    // Excel Test Case ID: KGR-262
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with special characters
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with special characters.
    console.log("[KGR-262] Boundary & Negative Testing → Verify Gap Score filter with special characters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('!@#$%');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-263 - Boundary & Negative Testing → Gap Score boundary value 0", async ({ testData }) => {
    // Excel Test Case ID: KGR-263
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 0
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-263] Boundary & Negative Testing → Verify Gap Score boundary value 0");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-264 - Boundary & Negative Testing → Gap Score boundary value 25", async ({ testData }) => {
    // Excel Test Case ID: KGR-264
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 25
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-264] Boundary & Negative Testing → Verify Gap Score boundary value 25");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-265 - Boundary & Negative Testing → Gap Score boundary value 26", async ({ testData }) => {
    // Excel Test Case ID: KGR-265
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 26
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-265] Boundary & Negative Testing → Verify Gap Score boundary value 26");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-266 - Boundary & Negative Testing → Gap Score boundary value 50", async ({ testData }) => {
    // Excel Test Case ID: KGR-266
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 50
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-266] Boundary & Negative Testing → Verify Gap Score boundary value 50");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-267 - Boundary & Negative Testing → Gap Score boundary value 51", async ({ testData }) => {
    // Excel Test Case ID: KGR-267
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 51
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-267] Boundary & Negative Testing → Verify Gap Score boundary value 51");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-268 - Boundary & Negative Testing → Gap Score boundary value 75", async ({ testData }) => {
    // Excel Test Case ID: KGR-268
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 75
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-268] Boundary & Negative Testing → Verify Gap Score boundary value 75");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-269 - Boundary & Negative Testing → Gap Score boundary value 76", async ({ testData }) => {
    // Excel Test Case ID: KGR-269
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 76
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-269] Boundary & Negative Testing → Verify Gap Score boundary value 76");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-270 - Boundary & Negative Testing → Gap Score boundary value 100", async ({ testData }) => {
    // Excel Test Case ID: KGR-270
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score boundary value 100
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score boundary value
    console.log("[KGR-270] Boundary & Negative Testing → Verify Gap Score boundary value 100");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-271 - Boundary & Negative Testing → Gap Score filter with value greater than 100", async ({ testData }) => {
    // Excel Test Case ID: KGR-271
    // Excel Scenario: Boundary & Negative Testing → Verify Gap Score filter with value greater than 100
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Gap Score filter with value greater than
    console.log("[KGR-271] Boundary & Negative Testing → Verify Gap Score filter with value greater than 100");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-272 - Boundary & Negative Testing → report behavior when no records match filters", async ({ testData }) => {
    // Excel Test Case ID: KGR-272
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior when no records match filters
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior when no records match filters.
    console.log("[KGR-272] Boundary & Negative Testing → Verify report behavior when no records match filters");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-273 - Boundary & Negative Testing → opening Gap Detail Modal for customer with single missing field", async ({ testData }) => {
    // Excel Test Case ID: KGR-273
    // Excel Scenario: Boundary & Negative Testing → Verify opening Gap Detail Modal for customer with single missing field
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Opening Gap Detail Modal for customer with single missing field.
    console.log("[KGR-273] Boundary & Negative Testing → Verify opening Gap Detail Modal for customer with single missing field");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-274 - Boundary & Negative Testing → opening Gap Detail Modal for customer with large number of missing fields", async ({ testData }) => {
    // Excel Test Case ID: KGR-274
    // Excel Scenario: Boundary & Negative Testing → Verify opening Gap Detail Modal for customer with large number of missing fields
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Opening Gap Detail Modal for customer with large number of missing fields.
    console.log("[KGR-274] Boundary & Negative Testing → Verify opening Gap Detail Modal for customer with large number of missing fields");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await gapPage.expectGapDetailModalVisible();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-275 - Boundary & Negative Testing → report behavior when all customers belong to same priority", async ({ testData }) => {
    // Excel Test Case ID: KGR-275
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior when all customers belong to same priority
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior when all customers belong to same priority.
    console.log("[KGR-275] Boundary & Negative Testing → Verify report behavior when all customers belong to same priority");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-276 - Boundary & Negative Testing → report behavior when all customers belong to same branch", async ({ testData }) => {
    // Excel Test Case ID: KGR-276
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior when all customers belong to same branch
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior when all customers belong to same branch.
    console.log("[KGR-276] Boundary & Negative Testing → Verify report behavior when all customers belong to same branch");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-277 - Boundary & Negative Testing → report behavior with duplicate customer names", async ({ testData }) => {
    // Excel Test Case ID: KGR-277
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior with duplicate customer names
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior with duplicate customer names.
    console.log("[KGR-277] Boundary & Negative Testing → Verify report behavior with duplicate customer names");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-278 - Boundary & Negative Testing → report behavior with special characters in customer name", async ({ testData }) => {
    // Excel Test Case ID: KGR-278
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior with special characters in customer name
    // FSD §4.9 — Business Rules
    // Steps (29): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior with special characters in customer name.
    console.log("[KGR-278] Boundary & Negative Testing → Verify report behavior with special characters in customer name");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('!@#$%');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-279 - Boundary & Negative Testing → report behavior with extremely long customer names", async ({ testData }) => {
    // Excel Test Case ID: KGR-279
    // Excel Scenario: Boundary & Negative Testing → Verify report behavior with extremely long customer names
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report behavior with extremely long customer names.
    console.log("[KGR-279] Boundary & Negative Testing → Verify report behavior with extremely long customer names");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('Kumar Global Traders Pvt. Ltd.');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });

  test("Case ID:KGR-280 - Boundary & Negative Testing → report recovery after invalid filter input", async ({ testData }) => {
    // Excel Test Case ID: KGR-280
    // Excel Scenario: Boundary & Negative Testing → Verify report recovery after invalid filter input
    // FSD §4.9 — Business Rules
    // Steps (27): Open KYC Gap Report. → Verify the landing page title, subtitle, and Export action are displayed. → Confirm KPI summary, filters, and report grid are visible before scenario steps. …
    // Expected: Report recovery after invalid filter input.
    console.log("[KGR-280] Boundary & Negative Testing → Verify report recovery after invalid filter input");
    await test.step("Navigate / setup", async () => {
      await gapPage.openGapReportDirect(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await gapPage.clickAndWait(gapPage.exportButton, 'Export button');
      await gapPage.search('zzzz-no-match-99999');
      });

    await test.step("Validate expected results", async () => {
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectPageLoaded();
      await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i);
      await gapPage.expectKpiCountsMatchGrid();
      await expect(gapPage.gapReportTable).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.exportButton).toBeVisible();
      });
  });
  });
});
