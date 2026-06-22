import { buildAssertionsForRow } from "./assertions";
import type { KgrExcelRow } from "./types";

const OPEN = "await gapPage.openGapReportDirect(testData.baseUrl);";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeLogic(body: string, row: KgrExcelRow): string {
  const assertions = buildAssertionsForRow(row);
  const lines = body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  const assertionLines = assertions
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  for (const a of assertionLines) {
    if (!lines.includes(a)) {
      lines.push(a);
    }
  }
  return lines.join(";\n    ");
}

function resolveCore(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN];

  if (task.includes("sidebar") || task.includes("menu")) {
    steps.push("await gapPage.openGapReportFromSidebar()");
    steps.push("await gapPage.expectOnGapReportRoute()");
  } else if (task.includes("direct url")) {
    steps.push("await gapPage.expectOnGapReportRoute()");
  } else if (task.includes("refresh") || task.includes("browser refresh")) {
    steps.push("await gapPage.expectGapReportViewLoaded()");
    steps.push("await gapPage.refreshData()");
  } else if (task.includes("unauthorized") || task.includes("unauthenticated")) {
    steps.push("await gapPage.mockUnauthorized()");
    steps.push("await gapPage.openGapReportDirect(testData.baseUrl)");
  } else if (task.includes("template")) {
    steps.push("await gapPage.expectGapReportViewLoaded()");
    steps.push("await gapPage.openGapReportFromSidebar()");
  } else if (task.includes("back navigation")) {
    steps.push("await gapPage.expectGapReportViewLoaded()");
  } else {
    steps.push("await gapPage.expectGapReportViewLoaded()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveKpi(row: KgrExcelRow): string {
  return finalizeLogic(`${OPEN}\n    await gapPage.expectKpiCardsVisible()`, row);
}

function resolveFilters(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()"];

  if (task.includes("search field")) {
    steps.push("await expect(gapPage.searchInput).toBeVisible()");
  } else if (task.includes("exact") || task.includes("customer name")) {
    steps.push("await gapPage.searchGapReportExactMatch()");
  } else if (task.includes("partial")) {
    steps.push('await gapPage.search("KYC")');
  } else if (task.includes("customer id") || task.includes("cif")) {
    steps.push('await gapPage.search("CIF")');
  } else if (task.includes("non-existing") || task.includes("invalid keyword")) {
    steps.push('await gapPage.search("zzzz-no-match-99999")');
  } else if (task.includes("blank") || task.includes("whitespace")) {
    steps.push('await gapPage.search("")');
  } else if (task.includes("leading spaces") || task.includes("trailing spaces")) {
    steps.push('await gapPage.search("  KYC  ")');
  } else if (task.includes("special character") || task.includes("injection")) {
    steps.push('await gapPage.search("<script>alert(1)</script>")');
  } else if (task.includes("branch filter") && task.includes("dropdown")) {
    steps.push("await expect(gapPage.branchFilter.or(gapPage.gapReportFilterSelects.first())).toBeVisible()");
  } else if (task.includes("filtering by branch")) {
    steps.push("await gapPage.applyBranchFilter()");
  } else if (task.includes("individual")) {
    steps.push("await gapPage.applyCustomerTypeFilter()");
  } else if (task.includes("corporate") && task.includes("customer")) {
    steps.push("await gapPage.applyCustomerTypeFilter()");
  } else if (task.includes("template filter")) {
    steps.push("await gapPage.applyTemplateFilter()");
  } else if (task.includes("low priority")) {
    steps.push("await gapPage.applyPriorityFilter()");
  } else if (task.includes("medium priority")) {
    steps.push("await gapPage.applyPriorityFilter()");
  } else if (task.includes("high priority")) {
    steps.push("await gapPage.applyPriorityFilter()");
  } else if (task.includes("critical priority")) {
    steps.push("await gapPage.applyPriorityFilter()");
  } else if (task.includes("minimum") || task.includes("maximum") || task.includes("range")) {
    steps.push('await gapPage.applyScoreRangeFilter("0", "100")');
  } else if (task.includes("clear filter")) {
    steps.push("await gapPage.clearFilters()");
  } else if (task.includes("combination") || task.includes("combined")) {
    steps.push("await gapPage.applyCustomerTypeFilter()");
    steps.push("await gapPage.applyPriorityFilter()");
  } else {
    steps.push("await expect(gapPage.searchInput).toBeVisible()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveGrid(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()"];

  if (task.includes("sort") && task.includes("score")) {
    steps.push('await gapPage.sortByColumn("KYC Gap Score")');
  } else if (task.includes("sort") && task.includes("customer")) {
    steps.push('await gapPage.sortByColumn("Customer")');
  } else if (task.includes("sort") && task.includes("priority")) {
    steps.push('await gapPage.sortByColumn("Priority")');
  } else if (task.includes("sort") && task.includes("branch")) {
    steps.push('await gapPage.sortByColumn("Branch")');
  } else if (task.includes("view button") || task.includes("actions")) {
    steps.push("await expect(gapPage.gapReportRows.first()).toBeVisible()");
  } else if (task.includes("refresh")) {
    steps.push("await gapPage.refreshData()");
  } else if (task.includes("duplicate")) {
    steps.push("await expect(gapPage.gapReportRows.first()).toBeVisible()");
  } else {
    steps.push("await expect(gapPage.gapReportRows.first()).toBeVisible()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveScore(row: KgrExcelRow): string {
  const steps = `${OPEN}\n    await gapPage.expectGapReportViewLoaded();\n    await expect(gapPage.gapReportRows.first()).toBeVisible()`;
  return finalizeLogic(steps, row);
}

function resolveModal(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()", "await gapPage.openFirstRowDetail()"];

  if (task.includes("close") || task.includes("esc")) {
    steps.push("await gapPage.closeGapDetailModal()");
  } else if (task.includes("score") && task.includes("match")) {
    steps.push("await gapPage.expectModalScoreMatchesGrid()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolvePagination(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()"];

  if (task.includes("page size") || task.includes("items per page")) {
    steps.push("await gapPage.setPageSize(1)");
  } else if (task.includes("next")) {
    steps.push("await gapPage.goToNextPage()");
  } else if (task.includes("previous")) {
    steps.push("await gapPage.goToPreviousPage()");
  } else if (task.includes("modal")) {
    steps.push("await gapPage.openFirstRowDetail()");
    steps.push("await gapPage.closeGapDetailModal()");
  } else if (task.includes("template")) {
    steps.push("await gapPage.openGapReportFromSidebar()");
  } else if (task.includes("search") || task.includes("filter")) {
    steps.push('await gapPage.search("KYC")');
  } else if (task.includes("clear")) {
    steps.push("await gapPage.clearFilters()");
  } else {
    steps.push("await expect(gapPage.gapReportPaginationNext).toBeVisible()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveExport(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()"];

  if (task.includes("download") || task.includes("exported")) {
    steps.push("await expect(gapPage.exportButton).toBeEnabled()");
  } else if (task.includes("filter") || task.includes("search") || task.includes("sort") || task.includes("page")) {
    steps.push("await expect(gapPage.exportButton).toBeVisible()");
  } else {
    steps.push("await expect(gapPage.exportButton).toBeVisible()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveSecurity(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];

  if (task.includes("logout")) {
    steps.push("await gapPage.mockUnauthorized()");
    steps.push("await gapPage.openGapReportDirect(testData.baseUrl)");
    steps.push("await gapPage.expectAccessDenied()");
  } else if (task.includes("unauthorized") || task.includes("unauthenticated")) {
    steps.push("await gapPage.mockUnauthorized()");
    steps.push("await gapPage.openGapReportDirect(testData.baseUrl)");
  } else if (task.includes("audit")) {
    steps.push(OPEN);
    steps.push("await gapPage.expectGapReportViewLoaded()");
  } else {
    steps.push(OPEN);
    steps.push("await gapPage.expectGapReportViewLoaded()");
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

function resolveBoundary(row: KgrExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [OPEN, "await gapPage.expectGapReportViewLoaded()"];

  if (task.includes("sql injection")) {
    steps.push(`await gapPage.search("' OR '1'='1")`);
  } else if (task.includes("script injection")) {
    steps.push(`await gapPage.search("<script>alert('xss')</script>")`);
  } else if (task.includes("min greater than max")) {
    steps.push('await gapPage.applyScoreRangeFilter("75", "25")');
  } else if (task.includes("negative")) {
    steps.push('await gapPage.applyScoreRangeFilter("-1", "10")');
  } else if (task.includes("decimal")) {
    steps.push('await gapPage.applyScoreRangeFilter("10.5", "20.5")');
  } else if (task.includes("alphabetic")) {
    steps.push('await gapPage.applyScoreRangeFilter("abc", "xyz")');
  } else if (task.includes("boundary value")) {
    const match = task.match(/value (\d+)/);
    const val = match?.[1] ?? "0";
    steps.push(`await gapPage.applyScoreRangeFilter("${val}", "${val}")`);
  } else if (task.includes("blank") || task.includes("whitespace")) {
    steps.push('await gapPage.search("")');
  } else if (task.includes("modal")) {
    steps.push("await gapPage.openFirstRowDetail()");
  } else if (task.includes("recovery") || task.includes("invalid filter")) {
    steps.push('await gapPage.applyScoreRangeFilter("invalid", "bad")');
    steps.push("await gapPage.clearFilters()");
  } else {
    steps.push('await gapPage.search("zzzz-no-match-99999")');
  }

  return finalizeLogic(steps.join(";\n    "), row);
}

export function mapKgrTestLogic(row: KgrExcelRow): string {
  const sm = row.subModule;

  if (sm === "KYC Gap Report") return resolveCore(row);
  if (sm === "KYC Gap Report - KPI Cards") return resolveKpi(row);
  if (sm === "KYC Gap Report - Search & Filters") return resolveFilters(row);
  if (sm === "KYC Gap Report - Report Grid") return resolveGrid(row);
  if (sm === "KYC Gap Report - Gap Score Calculation") return resolveScore(row);
  if (sm === "KYC Gap Report - Gap Detail Modal") return resolveModal(row);
  if (sm === "KYC Gap Report - Pagination") return resolvePagination(row);
  if (sm === "KYC Gap Report - Export") return resolveExport(row);
  if (sm === "KYC Gap Report - Security & Audit") return resolveSecurity(row);
  if (sm === "KYC Gap Report - Boundary & Negative Testing") return resolveBoundary(row);

  return finalizeLogic(`${OPEN}\n    await gapPage.expectGapReportViewLoaded()`, row);
}
