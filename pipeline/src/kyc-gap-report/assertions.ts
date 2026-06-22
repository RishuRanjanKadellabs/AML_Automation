import type { KgrExcelRow } from "./types";

function pushUnique(steps: string[], step: string): void {
  if (!steps.includes(step)) {
    steps.push(step);
  }
}

export function buildAssertionsForRow(row: KgrExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];

  const push = (step: string): void => pushUnique(steps, step);

  if (er.includes("kpi") || task.includes("kpi")) {
    push("await gapPage.expectKpiCardsVisible()");
  }
  if (er.includes("modal") || sm.includes("gap detail modal")) {
    push("await expect(gapPage.gapReportDetailModal).toBeVisible()");
  }
  if (
    er.includes("unauthorized") ||
    er.includes("denied") ||
    er.includes("cannot access") ||
    er.includes("not accessible") ||
    task.includes("unauthorized") ||
    task.includes("unauthenticated") ||
    task.includes("logout")
  ) {
    push("await gapPage.expectAccessDenied()");
  }
  if (task.includes("sql injection") || task.includes("script injection")) {
    push("await gapPage.expectPageLoaded()");
  }
  if (er.includes("export") || task.includes("export")) {
    push("await expect(gapPage.exportButton).toBeVisible()");
  }
  if (er.includes("pagination") || task.includes("pagination")) {
    push("await expect(gapPage.gapReportPaginationNext).toBeVisible()");
  }
  if (er.includes("title") && er.includes("kyc gap report")) {
    push("await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i)");
  }
  if (er.includes("subtitle") || task.includes("subtitle")) {
    push("await expect(gapPage.gapReportSubtitle).toBeVisible()");
  }
  if (er.includes("search field") || task.includes("search field")) {
    push("await expect(gapPage.searchInput).toBeVisible()");
  }
  if (er.includes("clear") && er.includes("filter")) {
    push("await expect(gapPage.clearFiltersButton).toBeVisible()");
  }
  if (er.includes("column") || task.includes("column")) {
    push("await expect(gapPage.gapReportTable).toBeVisible()");
  }
  if (er.includes("score") && !sm.includes("security")) {
    push("await expect(gapPage.gapReportTable).toBeVisible()");
  }
  if (er.includes("0") && task.includes("zero")) {
    push("await expect(gapPage.gapReportKpiCards.first()).toBeVisible()");
  }
  if (er.includes("grid") || er.includes("table") || er.includes("report")) {
    push("await expect(gapPage.gapReportTable).toBeVisible()");
  }
  if (er.includes("read-only") || task.includes("read-only")) {
    push("await expect(gapPage.exportButton).toBeVisible()");
  }
  if (steps.length === 0) {
    push("await gapPage.expectPageLoaded()");
  }

  if (sm.includes("security & audit") && steps.length === 1 && steps[0].includes("expectPageLoaded")) {
    if (task.includes("audit")) {
      push("await expect(gapPage.gapReportTable).toBeVisible()");
    }
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: KgrExcelRow): string {
  const feature = row.subModule
    .replace(/^KYC Gap Report\s*-?\s*/i, "")
    .trim() || "Core";
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}
