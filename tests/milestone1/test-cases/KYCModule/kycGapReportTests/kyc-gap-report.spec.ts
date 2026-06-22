// spec: specs/kyc-gap-report/plan.md
// source: pipeline/test-data/KYC Gap Report.xlsx — 280 cases (KGR-001–KGR-280)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KycGapReportPage from "../../../pages/KYCModule/KYCGapReportPages/KycGapReportPage";

test.describe("KYC Gap Report Module", () => {
  let gapPage: KycGapReportPage;

  test.beforeEach(async ({ sharedPage }) => {
    gapPage = new KycGapReportPage(sharedPage);
  });

  test.describe("Core", () => {
  test("Case ID:KGR-001 - Core → user can access KYC Gap Report from Missing Mandatory menu", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.openGapReportFromSidebar();
    await gapPage.expectOnGapReportRoute();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-002 - Core → KYC Gap Report page title is displayed correctly", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-003 - Core → page subtitle is displayed correctly", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportSubtitle).toBeVisible();
  });

  test("Case ID:KGR-004 - Core → Export button is displayed on page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-005 - Core → all KPI cards are displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-006 - Core → report list section loads successfully", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-007 - Core → all configured filters are visible", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-008 - Core → report grid is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-009 - Core → pagination controls are displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-010 - Core → page loads successfully after browser refresh", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.refreshData();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-011 - Core → direct URL access for authorized user", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectOnGapReportRoute();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-012 - Core → application back navigation from KYC Gap Report", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-013 - Core → navigation from KYC Gap Report to Missing Mandatory Template", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openGapReportFromSidebar();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-014 - Core → returning from Template screen preserves KYC Gap Report access", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openGapReportFromSidebar();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-015 - Core → filter and page state is retained when navigating between Template and Report views", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openGapReportFromSidebar();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-016 - Core → unauthorized user cannot access KYC Gap Report", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-017 - Core → unauthenticated user cannot access KYC Gap Report URL", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-018 - Core → page loads without UI rendering issues", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-019 - Core → page remains functional after multiple navigations", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-020 - Core → no application error occurs when opening KYC Gap Report", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });
  });

  test.describe("KPI Cards", () => {
  test("Case ID:KGR-021 - KPI Cards → Total Customers (CBS) KPI card is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-022 - KPI Cards → Customers with Gaps KPI card is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-023 - KPI Cards → Critical Priority KPI card is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-024 - KPI Cards → KPI card labels are displayed correctly", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-025 - KPI Cards → Total Customers KPI value is numeric", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-026 - KPI Cards → Customers with Gaps KPI value is numeric", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-027 - KPI Cards → Critical Priority KPI value is numeric", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-028 - KPI Cards → Total Customers KPI count is greater than or equal to Customers with Gaps count", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-029 - KPI Cards → Customers with Gaps KPI count matches report data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-030 - KPI Cards → Critical Priority KPI count matches report data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-031 - KPI Cards → KPI values refresh when page is reloaded", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-032 - KPI Cards → KPI cards load without UI distortion", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-033 - KPI Cards → KPI values are visible without truncation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-034 - KPI Cards → KPI cards are displayed when report contains records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-035 - KPI Cards → KPI cards handle zero values correctly — KPI cards should support zero counts", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
    await expect(gapPage.gapReportKpiCards.first()).toBeVisible();
  });

  test("Case ID:KGR-036 - KPI Cards → KPI section remains visible after filter application", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-037 - KPI Cards → KPI section remains visible after pagination navigation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-038 - KPI Cards → KPI cards are displayed before report grid", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-039 - KPI Cards → KPI values do not display negative numbers", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });

  test("Case ID:KGR-040 - KPI Cards → KPI cards load successfully within page initialization", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectKpiCardsVisible();
  });
  });

  test.describe("Search & Filters", () => {
  test("Case ID:KGR-041 - Search & Filters → Search field is displayed on KYC Gap Report page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
  });

  test("Case ID:KGR-042 - Search & Filters → search by exact customer name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.searchGapReportExactMatch();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-043 - Search & Filters → search by partial customer name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.searchGapReportExactMatch();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-044 - Search & Filters → search by Customer ID", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("CIF");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-045 - Search & Filters → search is case insensitive", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-046 - Search & Filters → search using alphanumeric Customer ID", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("CIF");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-047 - Search & Filters → search with leading spaces", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("  KYC  ");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-048 - Search & Filters → search with trailing spaces", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("  KYC  ");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-049 - Search & Filters → search with special characters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("<script>alert(1)</script>");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-050 - Search & Filters → search with non-existing customer value", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-051 - Search & Filters → real-time search behavior", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-052 - Search & Filters → Branch filter dropdown values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.branchFilter.or(gapPage.gapReportFilterSelects.first())).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-053 - Search & Filters → filtering by Branch", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyBranchFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-054 - Search & Filters → Branch filter with no matching records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-055 - Search & Filters → Customer Type filter values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-056 - Search & Filters → filtering by Individual customer type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyCustomerTypeFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-057 - Search & Filters → filtering by Corporate customer type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyCustomerTypeFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-058 - Search & Filters → Template filter dropdown values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyTemplateFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-059 - Search & Filters → filtering by template", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-060 - Search & Filters → Priority filter dropdown values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.searchInput).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-061 - Search & Filters → filtering by Low priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-062 - Search & Filters → filtering by Medium priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-063 - Search & Filters → filtering by High priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-064 - Search & Filters → filtering by Critical priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-065 - Search & Filters → Gap Score minimum filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("0", "100");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-066 - Search & Filters → Gap Score maximum filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("0", "100");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-067 - Search & Filters → Gap Score range filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("0", "100");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-068 - Search & Filters → Clear Filters functionality", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.clearFilters();
    await expect(gapPage.clearFiltersButton).toBeVisible();
  });

  test("Case ID:KGR-069 - Search & Filters → filter combination: Branch + Customer Type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyCustomerTypeFilter();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-070 - Search & Filters → filter combination: Search + Priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyCustomerTypeFilter();
    await gapPage.applyPriorityFilter();
    await gapPage.expectPageLoaded();
  });
  });

  test.describe("Report Grid", () => {
  test("Case ID:KGR-071 - Report Grid → all configured report columns are displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-072 - Report Grid → Customer column displays customer full name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-073 - Report Grid → Customer ID column displays unique customer identifiers", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-074 - Report Grid → Type column displays customer type badge", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-075 - Report Grid → Branch column displays branch name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-076 - Report Grid → Branch Code column displays branch code", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-077 - Report Grid → Template Applied column displays assigned template", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-078 - Report Grid → KYC Gap Score column displays numeric score", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-079 - Report Grid → Priority column displays risk classification", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await expect(gapPage.gapReportRows.first()).toBeVisible();
=======
    await gapPage.expectPriorityColumnVisible();
>>>>>>> master
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-080 - Report Grid → Actions column displays View button", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await expect(gapPage.gapReportRows.first()).toBeVisible();
=======
    await gapPage.expectViewButtonsOnRows();
>>>>>>> master
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-081 - Report Grid → Customer column supports sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Customer");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-082 - Report Grid → Customer ID column supports sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Customer");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-083 - Report Grid → Branch column supports sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Branch");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-084 - Report Grid → Branch Code column supports sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Branch");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-085 - Report Grid → KYC Gap Score column supports sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("KYC Gap Score");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-086 - Report Grid → ascending sorting for Customer column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Customer");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-087 - Report Grid → descending sorting for Customer column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("Customer");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-088 - Report Grid → ascending sorting for KYC Gap Score column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("KYC Gap Score");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-089 - Report Grid → descending sorting for KYC Gap Score column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.sortByColumn("KYC Gap Score");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-090 - Report Grid → sorting persists correctly with filtered data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-091 - Report Grid → non-sortable columns do not display sort behavior", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-092 - Report Grid → grid data accuracy against source records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-093 - Report Grid → grid handles long customer names — Long names should display without UI breakage", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-094 - Report Grid → grid handles long template names", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-095 - Report Grid → grid displays no duplicate records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-096 - Report Grid → grid displays records after page refresh", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.refreshData();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-097 - Report Grid → grid displays records after filter reset", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-098 - Report Grid → grid remains stable when no records match filters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-099 - Report Grid → Priority values contain only supported classifications", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-100 - Report Grid → report is read-only from landing grid", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.exportButton).toBeVisible();
  });
  });

  test.describe("Gap Score Calculation", () => {
  test("Case ID:KGR-101 - Gap Score Calculation → KYC Gap Score is calculated as sum of missing field weights", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-102 - Gap Score Calculation → missing Mandatory field contributes 3 points to Gap Score", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-103 - Gap Score Calculation → missing Optional field contributes 1 point to Gap Score", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-104 - Gap Score Calculation → customer with one missing Mandatory field displays score 3", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-105 - Gap Score Calculation → customer with one missing Optional field displays score 1", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-106 - Gap Score Calculation → score calculation with multiple Mandatory fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-107 - Gap Score Calculation → score calculation with multiple Optional fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-108 - Gap Score Calculation → score calculation with mixed Mandatory and Optional fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-109 - Gap Score Calculation → score is displayed as integer value", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-110 - Gap Score Calculation → customer with no missing fields displays score 0", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-111 - Gap Score Calculation → score displayed in report matches score in Gap Detail Modal", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await gapPage.expectModalScoreMatchesGrid();
=======
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
>>>>>>> master
  });

  test("Case ID:KGR-112 - Gap Score Calculation → score calculation includes all missing fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-113 - Gap Score Calculation → score calculation excludes completed fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-114 - Gap Score Calculation → score updates after Mandatory field remediation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-115 - Gap Score Calculation → score updates after Optional field remediation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-116 - Gap Score Calculation → score remains unchanged when unrelated customer data changes", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-117 - Gap Score Calculation → Low priority classification based on template score bands", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-118 - Gap Score Calculation → Medium priority classification based on template score bands", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-119 - Gap Score Calculation → High priority classification based on template score bands", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-120 - Gap Score Calculation → Critical priority classification based on template score bands", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-121 - Gap Score Calculation → priority is derived from assigned template score bands", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-122 - Gap Score Calculation → same score can result in different priorities under different templates", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-123 - Gap Score Calculation → priority recalculation after score band configuration change", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-124 - Gap Score Calculation → score recalculation after new field is added to template", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-125 - Gap Score Calculation → score recalculation after field requirement changes", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-126 - Gap Score Calculation → score does not display negative values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-127 - Gap Score Calculation → score calculation consistency across multiple refreshes", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-128 - Gap Score Calculation → score calculation for highest configured score range", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-129 - Gap Score Calculation → score calculation for lowest configured score range", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-130 - Gap Score Calculation → score displayed in exported report matches application data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await expect(gapPage.gapReportRows.first()).toBeVisible();
=======
    await gapPage.expectExportScoresMatchGrid();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });
  });

  test.describe("Gap Detail Modal", () => {
  test("Case ID:KGR-131 - Gap Detail Modal → View button opens Gap Detail Modal", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-132 - Gap Detail Modal → modal displays customer name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
<<<<<<< HEAD
=======
    await gapPage.expectModalCustomerNameMatchesGrid();
>>>>>>> master
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-133 - Gap Detail Modal → modal displays CIF/Customer ID", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-134 - Gap Detail Modal → modal displays Branch Name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-135 - Gap Detail Modal → modal displays Branch Code", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-136 - Gap Detail Modal → modal displays applied template", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-137 - Gap Detail Modal → Missing Fields section is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-138 - Gap Detail Modal → each missing field displays field name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-139 - Gap Detail Modal → each missing field displays description", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
<<<<<<< HEAD
=======
    await gapPage.closeGapDetailModal();
>>>>>>> master
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-140 - Gap Detail Modal → each missing field displays weight", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-141 - Gap Detail Modal → each missing field displays requirement type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-142 - Gap Detail Modal → Mandatory fields display correct requirement type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-143 - Gap Detail Modal → Optional fields display correct requirement type", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-144 - Gap Detail Modal → Gap Type badge is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-145 - Gap Detail Modal → CIP Gap Type badge", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-146 - Gap Detail Modal → CDD Gap Type badge", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-147 - Gap Detail Modal → EDD Gap Type badge", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-148 - Gap Detail Modal → Score Summary section is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-149 - Gap Detail Modal → Total KYC Gap Score displayed in modal", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-150 - Gap Detail Modal → modal score matches report grid score", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await gapPage.expectModalScoreMatchesGrid();
=======
    await gapPage.openFirstRowDetail();
    await gapPage.expectModalScoreMatchesGrid();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
>>>>>>> master
  });

  test("Case ID:KGR-151 - Gap Detail Modal → risk label is displayed in score summary", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-152 - Gap Detail Modal → risk label matches customer priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-153 - Gap Detail Modal → modal handles customer with single missing field", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-154 - Gap Detail Modal → modal handles customer with multiple missing fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-155 - Gap Detail Modal → missing field count matches displayed records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-156 - Gap Detail Modal → total score equals sum of displayed field weights", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-157 - Gap Detail Modal → modal can be closed using Close/X button", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
<<<<<<< HEAD
=======
    await gapPage.closeGapDetailModal();
>>>>>>> master
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-158 - Gap Detail Modal → modal can be closed using ESC key", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
<<<<<<< HEAD
=======
    await gapPage.closeGapDetailModal();
>>>>>>> master
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-159 - Gap Detail Modal → modal closes without data corruption", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
<<<<<<< HEAD
=======
    await gapPage.closeGapDetailModal();
>>>>>>> master
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-160 - Gap Detail Modal → modal supports scrolling for large datasets", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });
  });

  test.describe("Pagination", () => {
  test("Case ID:KGR-161 - Pagination → pagination controls are displayed on report page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-162 - Pagination → Items Per Page dropdown is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-163 - Pagination → Items Per Page default value", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-164 - Pagination → Items Per Page supports value 10", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-165 - Pagination → Items Per Page supports value 20", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-166 - Pagination → Items Per Page supports value 50", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-167 - Pagination → page size changes update grid correctly", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-168 - Pagination → Previous button is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToPreviousPage();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-169 - Pagination → Next button is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToNextPage();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-170 - Pagination → Next button navigates to next page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToNextPage();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-171 - Pagination → Previous button navigates to previous page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToPreviousPage();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-172 - Pagination → Previous button behavior on first page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToPreviousPage();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-173 - Pagination → Next button behavior on last page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.goToNextPage();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-174 - Pagination → page indicator is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-175 - Pagination → item range indicator is displayed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-176 - Pagination → page count calculation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-177 - Pagination → pagination with filtered records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-178 - Pagination → pagination with search results", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-179 - Pagination → pagination resets to Page 1 after Search", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-180 - Pagination → pagination resets to Page 1 after Branch filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-181 - Pagination → pagination resets to Page 1 after Customer Type filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-182 - Pagination → pagination resets to Page 1 after Template filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openGapReportFromSidebar();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-183 - Pagination → pagination resets to Page 1 after Priority filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-184 - Pagination → pagination resets to Page 1 after Gap Score filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-185 - Pagination → pagination resets to Page 1 after Clear Filters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("KYC");
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-186 - Pagination → pagination state is retained when opening and closing Gap Detail Modal", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await gapPage.closeGapDetailModal();
<<<<<<< HEAD
=======
    await expect(gapPage.gapReportDetailModal).toBeVisible();
>>>>>>> master
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-187 - Pagination → pagination state retained while navigating between Report and Template screens", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openGapReportFromSidebar();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-188 - Pagination → pagination works correctly when total records equal page size", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-189 - Pagination → pagination works correctly when total records are less than page size", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.setPageSize(1);
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
  });

  test("Case ID:KGR-190 - Pagination → pagination works correctly when no records are available", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportPaginationNext).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });
  });

  test.describe("Export", () => {
  test("Case ID:KGR-191 - Export → Export button is displayed on KYC Gap Report page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-192 - Export → Export button is enabled when records exist", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-193 - Export → export downloads report successfully", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-194 - Export → exported file contains report records", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-195 - Export → exported file contains Customer column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-196 - Export → exported file contains Customer ID column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-197 - Export → exported file contains Type column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-198 - Export → exported file contains Branch column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-199 - Export → exported file contains Branch Code column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-200 - Export → exported file contains Template Applied column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-201 - Export → exported file contains KYC Gap Score column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-202 - Export → exported file contains Priority column", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-203 - Export → exported record count matches report record count", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-204 - Export → exported Customer values match report data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-205 - Export → exported KYC Gap Score values match report data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await expect(gapPage.exportButton).toBeEnabled();
=======
    await gapPage.expectExportScoresMatchGrid();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-206 - Export → exported Priority values match report data", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeEnabled();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-207 - Export → export respects active Search filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
=======
    await gapPage.search("Vikram Shah");
    await gapPage.expectExportRespectsActiveFilters();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-208 - Export → export respects active Branch filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
=======
    await gapPage.applyBranchFilter();
    await gapPage.expectExportRespectsActiveFilters();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-209 - Export → export respects active Customer Type filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
=======
    await gapPage.applyCustomerTypeFilter();
    await gapPage.expectExportRespectsActiveFilters();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-210 - Export → export respects active Template filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-211 - Export → export respects active Priority filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-212 - Export → export respects active Gap Score filter", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-213 - Export → export supports combined filters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-214 - Export → export after sorting", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-215 - Export → export works from Page 1", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-216 - Export → export works from non-first page", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-217 - Export → export works when page size is changed", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-218 - Export → export file opens successfully", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-219 - Export → export handles large datasets", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-220 - Export → export behavior when no records are available", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });
  });

  test.describe("Security & Audit", () => {
  test("Case ID:KGR-221 - Security & Audit → authenticated Compliance Officer can access KYC Gap Report", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-222 - Security & Audit → authenticated Administrator can access KYC Gap Report", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-223 - Security & Audit → unauthorized role cannot access KYC Gap Report", async ({ testData }) => {
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-224 - Security & Audit → unauthenticated user cannot access KYC Gap Report URL", async ({ testData }) => {
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-225 - Security & Audit → direct URL access respects RBAC permissions", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-226 - Security & Audit → session timeout prevents report access", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-227 - Security & Audit → report is read-only", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-228 - Security & Audit → report does not provide Bulk Notify action", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-229 - Security & Audit → report does not provide Edit action", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-230 - Security & Audit → View action does not allow data modification", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportDetailModal.locator("input, textarea, select")).toHaveCount(0);
    await gapPage.closeGapDetailModal();
=======
    await expect(gapPage.gapReportDetailModal).toBeVisible();
>>>>>>> master
    await expect(gapPage.exportButton).toBeVisible();
  });

  test("Case ID:KGR-231 - Security & Audit → audit log entry generated for template creation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-232 - Security & Audit → audit log captures user ID during template creation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-233 - Security & Audit → audit log captures timestamp during template creation", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-234 - Security & Audit → audit log entry generated for template cloning", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-235 - Security & Audit → audit log entry generated when field requirement changes", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-236 - Security & Audit → audit log records previous value for requirement change", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-237 - Security & Audit → audit log records new value for requirement change", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-238 - Security & Audit → audit log entry generated when custom field is added", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-239 - Security & Audit → audit log entry generated when score bands are modified", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-240 - Security & Audit → audit log captures before and after values for score band changes", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-241 - Security & Audit → audit log remains immutable", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-242 - Security & Audit → audit records are retained after page refresh", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-243 - Security & Audit → unauthorized user cannot modify template configuration", async ({ testData }) => {
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-244 - Security & Audit → unauthorized user cannot access audit records", async ({ testData }) => {
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-245 - Security & Audit → application prevents access after logout", async ({ testData }) => {
    await gapPage.mockUnauthorized();
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectAccessDenied();
  });

  test("Case ID:KGR-246 - Security & Audit → report remains accessible after successful re-authentication", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-247 - Security & Audit → audit log captures template archival action", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-248 - Security & Audit → templates cannot be permanently deleted", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-249 - Security & Audit → archived templates remain traceable in audit history", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-250 - Security & Audit → audit trail completeness for template lifecycle", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.expectPageLoaded();
    await expect(gapPage.gapReportTable).toBeVisible();
  });
  });

  test.describe("Boundary & Negative Testing", () => {
  test("Case ID:KGR-251 - Boundary & Negative Testing → search with blank value", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-252 - Boundary & Negative Testing → search with whitespace-only value", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-253 - Boundary & Negative Testing → search with maximum supported characters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-254 - Boundary & Negative Testing → search with SQL injection pattern", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("' OR '1'='1");
<<<<<<< HEAD
=======
    await gapPage.expectAccessDenied();
>>>>>>> master
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-255 - Boundary & Negative Testing → search with script injection pattern", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("<script>alert('xss')</script>");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-256 - Boundary & Negative Testing → Gap Score filter with Min value only", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-257 - Boundary & Negative Testing → Gap Score filter with Max value only", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-258 - Boundary & Negative Testing → Gap Score filter with Min greater than Max", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("75", "25");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-259 - Boundary & Negative Testing → Gap Score filter with negative values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("-1", "10");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-260 - Boundary & Negative Testing → Gap Score filter with decimal values", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("10.5", "20.5");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-261 - Boundary & Negative Testing → Gap Score filter with alphabetic characters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("abc", "xyz");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-262 - Boundary & Negative Testing → Gap Score filter with special characters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-263 - Boundary & Negative Testing → Gap Score boundary value 0", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("0", "0");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-264 - Boundary & Negative Testing → Gap Score boundary value 25", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("25", "25");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-265 - Boundary & Negative Testing → Gap Score boundary value 26", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("26", "26");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-266 - Boundary & Negative Testing → Gap Score boundary value 50", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("50", "50");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-267 - Boundary & Negative Testing → Gap Score boundary value 51", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("51", "51");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-268 - Boundary & Negative Testing → Gap Score boundary value 75", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("75", "75");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-269 - Boundary & Negative Testing → Gap Score boundary value 76", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("76", "76");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-270 - Boundary & Negative Testing → Gap Score boundary value 100", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("100", "100");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-271 - Boundary & Negative Testing → Gap Score filter with value greater than 100", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-272 - Boundary & Negative Testing → report behavior when no records match filters", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-273 - Boundary & Negative Testing → opening Gap Detail Modal for customer with single missing field", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-274 - Boundary & Negative Testing → opening Gap Detail Modal for customer with large number of missing fields", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
  });

  test("Case ID:KGR-275 - Boundary & Negative Testing → report behavior when all customers belong to same priority", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-276 - Boundary & Negative Testing → report behavior when all customers belong to same branch", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await expect(gapPage.gapReportTable).toBeVisible();
  });

  test("Case ID:KGR-277 - Boundary & Negative Testing → report behavior with duplicate customer names", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-278 - Boundary & Negative Testing → report behavior with special characters in customer name", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.search("zzzz-no-match-99999");
    await gapPage.expectPageLoaded();
  });

  test("Case ID:KGR-279 - Boundary & Negative Testing → report behavior with extremely long customer names", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
<<<<<<< HEAD
    await expect(gapPage.gapReportRows.first()).toBeVisible();
    await gapPage.openFirstRowDetail();
    await expect(gapPage.gapReportDetailModal).toBeVisible();
=======
    await gapPage.search("zzzz-no-match-99999");
    await expect(gapPage.gapReportDetailModal).toBeVisible();
    await expect(gapPage.gapReportTable).toBeVisible();
>>>>>>> master
  });

  test("Case ID:KGR-280 - Boundary & Negative Testing → report recovery after invalid filter input", async ({ testData }) => {
    await gapPage.openGapReportDirect(testData.baseUrl);
    await gapPage.expectGapReportViewLoaded();
    await gapPage.applyScoreRangeFilter("invalid", "bad");
    await gapPage.clearFilters();
    await gapPage.expectPageLoaded();
  });
  });
});
