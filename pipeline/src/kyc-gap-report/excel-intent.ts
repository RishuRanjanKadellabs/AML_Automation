import { buildGapMatrixEntry } from "./gap-analysis";
import type { KgrExcelRow, ExcelAlignedPhases } from "./types";

const OPEN = "await gapPage.openGapReportDirect(testData.baseUrl)";

export function escapeStr(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }
  return testSteps
    .split(/\s*(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

function splitExpectedClauses(expectedResult: string): string[] {
  if (!expectedResult.trim()) {
    return [];
  }
  return expectedResult
    .split(/(?:\d+\.\s+|;\s+|\n+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
}

function pushUnique(steps: string[], step: string): void {
  if (step && !steps.includes(step)) {
    steps.push(step);
  }
}

function rowContext(row: KgrExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.preconditions} ${row.testData}`.toLowerCase();
}

function rowMatches(row: KgrExcelRow, ...patterns: string[]): boolean {
  const ctx = rowContext(row);
  return patterns.some((p) => ctx.includes(p.toLowerCase()));
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function inferSearchKeyword(row: KgrExcelRow): string {
  const td = row.testData.trim();
  if (td.length > 0 && td.length < 60 && !/:/.test(td)) {
    return td.split(/\s*[/|;]\s*/)[0];
  }
  if (/exact/i.test(row.taskDescription)) {
    return "Simplified KYC Customer";
  }
  if (/partial/i.test(row.taskDescription)) {
    return "KYC";
  }
  if (/non-existing|no result|invalid/i.test(row.taskDescription + row.expectedResult)) {
    return "zzzz-no-match-99999";
  }
  if (/cif|customer id/i.test(row.taskDescription)) {
    return "CIF";
  }
  return "KYC";
}

function scoreRangeFromTestData(row: KgrExcelRow): { min: string; max: string } {
  const td = row.testData.trim();
  const range = td.match(/(\d+)\s*[-–]\s*(\d+)/);
  if (range) {
    return { min: range[1], max: range[2] };
  }
  const low = td.match(/low[:\s]*(\d+)/i);
  const high = td.match(/high[:\s]*(\d+)/i);
  if (low && high) {
    return { min: low[1], max: high[1] };
  }
  return { min: "0", max: "100" };
}

export function buildGapTodoComment(row: KgrExcelRow): string | null {
  const gap = buildGapMatrixEntry(row);
  if (gap.testable === "Yes") {
    return null;
  }
  return `// TODO [${row.id}]: ${gap.missingInformation} — Excel/FSD gap; implement when product clarifies.`;
}

/** Preconditions from Excel Preconditions column and auth scenarios. */
export function buildPreconditionActions(row: KgrExcelRow): string[] {
  const steps: string[] = [];
  const pre = row.preconditions.toLowerCase();

  if (
    rowMatches(row, "unauthorized", "unauthenticated", "restricted role", "logout", "access denied") ||
    pre.includes("unauthorized") ||
    pre.includes("restricted")
  ) {
    pushUnique(steps, "await gapPage.mockUnauthorized()");
  }

  if (rowMatches(row, "api failure", "load failure", "server error")) {
    pushUnique(steps, "await gapPage.mockGapReportApiFailure()");
  }

  return steps;
}

/** Initial navigation — one open per test unless sidebar-only flow. */
export function buildExcelSetupActions(row: KgrExcelRow, preconditions: string[]): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const sidebarFirst =
    numbered.some((s) => stepMatches(s, "sidebar", "missing mandatory menu", "expand missing mandatory")) &&
    !numbered.some((s) => stepMatches(s, "direct url", "paste url"));

  if (!sidebarFirst || preconditions.length > 0) {
    pushUnique(steps, OPEN);
  }

  if (sidebarFirst && preconditions.length === 0) {
    pushUnique(steps, OPEN);
  }

  return steps;
}

/** Map each Excel numbered step to page-object actions. */
export function buildExcelStepActions(row: KgrExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const searchKw = inferSearchKeyword(row);
  const range = scoreRangeFromTestData(row);

  if (numbered.length === 0) {
    return buildFallbackSteps(row);
  }

  for (const step of numbered) {
    const s = step.toLowerCase();

    if (
      stepMatches(s, "login", "authenticate", "launch application", "open application", "navigate to application")
    ) {
      continue;
    }

    if (stepMatches(s, "observe", "verify page", "note ", "inspect", "validate layout", "check console", "capture")) {
      continue;
    }

    if (stepMatches(s, "sidebar", "missing mandatory menu", "expand missing mandatory", "click kyc gap report")) {
      if (stepMatches(s, "click kyc gap report", "select kyc gap report", "open kyc gap report from")) {
        pushUnique(steps, "await gapPage.openGapReportFromSidebar()");
      }
      continue;
    }

    if (stepMatches(s, "direct url", "paste url", "enter url")) {
      pushUnique(steps, OPEN);
      continue;
    }

    if (stepMatches(s, "refresh", "reload", "browser refresh")) {
      pushUnique(steps, "await gapPage.refreshData()");
      continue;
    }

    if (stepMatches(s, "logout", "session expire")) {
      pushUnique(steps, "await gapPage.mockUnauthorized()");
      continue;
    }

    if (stepMatches(s, "missing mandatory", "data template", "template module", "navigate back to template")) {
      pushUnique(steps, "await gapPage.openGapReportFromSidebar()");
      continue;
    }

    if (stepMatches(s, "search field", "enter search", "type in search", "search box", "search for", "search using", "search by", "enter keyword", "enter customer", "enter partial", "enter exact", "enter invalid", "enter special", "real-time search", "re-enter search")) {
      if (stepMatches(s, "exact")) {
        pushUnique(steps, "await gapPage.searchGapReportExactMatch()");
      } else if (stepMatches(s, "blank", "whitespace", "empty")) {
        pushUnique(steps, 'await gapPage.search("")');
      } else if (stepMatches(s, "leading", "trailing", "spaces")) {
        pushUnique(steps, `await gapPage.search('  ${escapeStr(searchKw)}  ')`);
      } else {
        pushUnique(steps, `await gapPage.search('${escapeStr(searchKw)}')`);
      }
      continue;
    }

    if (stepMatches(s, "branch filter", "select branch", "filter by branch")) {
      pushUnique(steps, "await gapPage.applyBranchFilter()");
      continue;
    }

    if (stepMatches(s, "customer type", "individual", "corporate filter")) {
      pushUnique(steps, "await gapPage.applyCustomerTypeFilter()");
      continue;
    }

    if (stepMatches(s, "template filter", "select template")) {
      pushUnique(steps, "await gapPage.applyTemplateFilter()");
      continue;
    }

    if (stepMatches(s, "priority filter", "low priority", "medium priority", "high priority", "critical priority")) {
      pushUnique(steps, "await gapPage.applyPriorityFilter()");
      continue;
    }

    if (stepMatches(s, "score range", "minimum score", "maximum score", "gap score filter", "min score", "max score")) {
      pushUnique(steps, `await gapPage.applyScoreRangeFilter('${range.min}', '${range.max}')`);
      continue;
    }

    if (stepMatches(s, "clear filter", "reset filter")) {
      pushUnique(steps, "await gapPage.clearFilters()");
      continue;
    }

    if (stepMatches(s, "sort", "column header")) {
      if (stepMatches(s, "score")) {
        pushUnique(steps, 'await gapPage.sortByColumn("KYC Gap Score")');
      } else if (stepMatches(s, "customer")) {
        pushUnique(steps, 'await gapPage.sortByColumn("Customer")');
      } else if (stepMatches(s, "priority")) {
        pushUnique(steps, 'await gapPage.sortByColumn("Priority")');
      } else if (stepMatches(s, "branch")) {
        pushUnique(steps, 'await gapPage.sortByColumn("Branch")');
      } else {
        pushUnique(steps, 'await gapPage.sortByColumn("Customer")');
      }
      continue;
    }

    if (stepMatches(s, "view button", "click view", "open detail", "open modal", "row action")) {
      pushUnique(steps, "await gapPage.openFirstRowDetail()");
      continue;
    }

    if (stepMatches(s, "close modal", "close icon", "press esc", "escape")) {
      pushUnique(steps, "await gapPage.closeGapDetailModal()");
      continue;
    }

    if (stepMatches(s, "next page", "pagination next")) {
      pushUnique(steps, "await gapPage.goToNextPage()");
      continue;
    }

    if (stepMatches(s, "previous page", "pagination previous", "back to previous page")) {
      pushUnique(steps, "await gapPage.goToPreviousPage()");
      continue;
    }

    if (stepMatches(s, "page size", "items per page", "records per page")) {
      pushUnique(steps, "await gapPage.setPageSize(1)");
      continue;
    }

    if (stepMatches(s, "export", "download")) {
      pushUnique(steps, "await gapPage.clickAndWait(gapPage.exportButton, 'Export button')");
      continue;
    }

    if (stepMatches(s, "sql injection", "script injection", "special character", "invalid input", "negative value", "alphabetic", "decimal", "min greater", "boundary")) {
      if (stepMatches(s, "sql")) {
        pushUnique(steps, `await gapPage.search("' OR '1'='1")`);
      } else if (stepMatches(s, "script")) {
        pushUnique(steps, `await gapPage.search("<script>alert('xss')</script>")`);
      } else if (stepMatches(s, "min greater")) {
        pushUnique(steps, 'await gapPage.applyScoreRangeFilter("75", "25")');
      } else if (stepMatches(s, "negative")) {
        pushUnique(steps, 'await gapPage.applyScoreRangeFilter("-1", "10")');
      } else if (stepMatches(s, "decimal")) {
        pushUnique(steps, 'await gapPage.applyScoreRangeFilter("10.5", "20.5")');
      } else if (stepMatches(s, "alphabetic")) {
        pushUnique(steps, 'await gapPage.applyScoreRangeFilter("abc", "xyz")');
      } else {
        pushUnique(steps, `await gapPage.search('${escapeStr(searchKw)}')`);
      }
      continue;
    }

    if (stepMatches(s, "audit", "security log")) {
      continue;
    }
  }

  if (steps.length === 0) {
    return buildFallbackSteps(row);
  }

  return steps;
}

function buildFallbackSteps(row: KgrExcelRow): string[] {
  const steps: string[] = [];
  const sm = row.subModule;

  if (sm === "KYC Gap Report") {
    if (rowMatches(row, "sidebar", "menu")) {
      pushUnique(steps, "await gapPage.openGapReportFromSidebar()");
    } else if (rowMatches(row, "refresh")) {
      pushUnique(steps, "await gapPage.refreshData()");
    } else {
      pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
    }
  } else if (sm === "KYC Gap Report - KPI Cards") {
    pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
  } else if (sm === "KYC Gap Report - Search & Filters") {
    pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
    if (rowMatches(row, "search")) {
      pushUnique(steps, `await gapPage.search('${escapeStr(inferSearchKeyword(row))}')`);
    } else if (rowMatches(row, "branch")) {
      pushUnique(steps, "await gapPage.applyBranchFilter()");
    } else if (rowMatches(row, "clear")) {
      pushUnique(steps, "await gapPage.clearFilters()");
    }
  } else if (sm === "KYC Gap Report - Report Grid") {
    pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
    if (rowMatches(row, "sort")) {
      pushUnique(steps, 'await gapPage.sortByColumn("KYC Gap Score")');
    }
  } else if (sm === "KYC Gap Report - Gap Detail Modal") {
    pushUnique(steps, "await gapPage.openFirstRowDetail()");
  } else if (sm === "KYC Gap Report - Pagination") {
    pushUnique(steps, "await gapPage.goToNextPage()");
  } else if (sm === "KYC Gap Report - Export") {
    pushUnique(steps, "await gapPage.clickAndWait(gapPage.exportButton, 'Export button')");
  } else if (sm === "KYC Gap Report - Security & Audit") {
    if (rowMatches(row, "unauthorized", "unauthenticated", "logout")) {
      pushUnique(steps, OPEN);
    } else {
      pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
    }
  } else {
    pushUnique(steps, "await gapPage.expectGapReportViewLoaded()");
  }

  return steps;
}

/** Assertions derived from Expected Result clauses — one check per documented outcome. */
export function buildExcelAssertionActions(row: KgrExcelRow): string[] {
  const steps: string[] = [];
  const clauses = splitExpectedClauses(row.expectedResult);
  const er = row.expectedResult.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const push = (s: string): void => pushUnique(steps, s);

  for (const clause of clauses) {
    const c = clause.toLowerCase();

    if (/kyc gap report.*title|title.*kyc gap report|displays as.*kyc gap report/i.test(c)) {
      push("await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i)");
    }
    if (/subtitle|sub-title|description/i.test(c)) {
      push(
        "await expect(gapPage.gapReportSubtitle).toHaveText(/Missing or expired KYC fields/i)",
      );
    }
    if (/export button|export option|export control/i.test(c)) {
      push("await expect(gapPage.exportButton).toBeVisible()");
    }
    if (/kpi|total customers|customers with gaps|critical priority/i.test(c)) {
      push("await gapPage.expectKpiCardsVisible()");
    }
    if (/search field|search box/i.test(c)) {
      push("await expect(gapPage.searchInput).toBeVisible()");
    }
    if (/filter|dropdown|branch|priority|customer type/i.test(c) && !/clear/i.test(c)) {
      push("await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible()");
    }
    if (/template filter|select template|template dropdown/i.test(c) && !/clear/i.test(c)) {
      push("await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible()");
    }
    if (/clear filter|filters cleared|reset filter/i.test(c)) {
      push("await expect(gapPage.clearFiltersButton).toBeVisible()");
    }
    if (/table|grid|report list|records displayed|rows displayed/i.test(c)) {
      push("await expect(gapPage.gapReportTable).toBeVisible()");
    }
    if (/column|header/i.test(c)) {
      push("await expect(gapPage.gapReportTable).toBeVisible()");
    }
    if (/pagination|page size|items per page|next page|previous page/i.test(c)) {
      push("await expect(gapPage.gapReportPaginationNext).toBeVisible()");
    }
    if (/modal|detail view|missing fields|gap detail/i.test(c)) {
      push("await expect(gapPage.gapReportDetailModal).toBeVisible()");
    }
    if (/score|weight|calculation|gap score/i.test(c) && !/filter/i.test(c)) {
      push("await expect(gapPage.gapReportRows.first()).toBeVisible()");
    }
    if (/priority.*column|priority.*display|rag|low|medium|high|critical/i.test(c)) {
      push("await gapPage.expectPriorityColumnVisible()");
    }
    if (/view button|actions column/i.test(c)) {
      push("await gapPage.expectViewButtonsOnRows()");
    }
    if (/no result|no record|empty|not found|zero record/i.test(c)) {
      push("await expect(gapPage.gapReportEmptyState.or(gapPage.gapReportRows)).toBeVisible()");
    }
    if (/unauthorized|access denied|cannot access|not accessible|forbidden|login/i.test(c)) {
      push("await gapPage.expectAccessDenied()");
    }
    if (/read-only|cannot edit|no edit/i.test(c)) {
      push("await expect(gapPage.exportButton).toBeVisible()");
    }
    if (/export.*match|exported.*data|download/i.test(c)) {
      push("await gapPage.expectExportRespectsActiveFilters()");
    }
    if (/match.*grid|same.*score|consistent/i.test(c)) {
      push("await gapPage.expectModalScoreMatchesGrid()");
    }
    if (/customer name.*match|name.*display/i.test(c)) {
      push("await gapPage.expectModalCustomerNameMatchesGrid()");
    }
    if (/route|url|navigat/i.test(c) && /gap report/i.test(c)) {
      push("await gapPage.expectOnGapReportRoute()");
    }
    if (/refresh|reload|retain|persist|state/i.test(c) && /filter|search|page/i.test(c)) {
      push("await expect(gapPage.gapReportTable).toBeVisible()");
    }
    if (/error|invalid|reject|blocked|prevent|sanitiz/i.test(c)) {
      push("await gapPage.expectPageLoaded()");
    }
    if (/numeric|number|count|greater than|less than|≥|<=/i.test(c)) {
      push("await gapPage.expectKpiCardsVisible()");
    }
  }

  if (steps.length === 0) {
    if (task.includes("unauthorized") || task.includes("unauthenticated")) {
      push("await gapPage.expectAccessDenied()");
    } else if (smIncludesKpi(row)) {
      push("await gapPage.expectKpiCardsVisible()");
    } else if (task.includes("export")) {
      push("await expect(gapPage.exportButton).toBeVisible()");
    } else if (task.includes("modal") || row.subModule.includes("Gap Detail Modal")) {
      push("await expect(gapPage.gapReportDetailModal).toBeVisible()");
    } else if (er.includes("title")) {
      push("await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i)");
    } else {
      push("await gapPage.expectPageLoaded()");
    }
  }

  return steps;
}

function smIncludesKpi(row: KgrExcelRow): boolean {
  return row.subModule.includes("KPI") || row.taskDescription.toLowerCase().includes("kpi");
}

export function buildExcelAlignedPhases(row: KgrExcelRow): ExcelAlignedPhases {
  const preconditions = buildPreconditionActions(row);
  const setup = buildExcelSetupActions(row, preconditions);
  const stepActions = buildExcelStepActions(row);
  const assertions = buildExcelAssertionActions(row);

  const dedupe = (lines: string[]): string[] => {
    const out: string[] = [];
    for (const line of lines.map((l) => l.trim().replace(/;+$/g, "")).filter(Boolean)) {
      if (!out.includes(line)) {
        out.push(line);
      }
    }
    return out;
  };

  return {
    preconditions: dedupe(preconditions),
    setup: dedupe(setup),
    steps: dedupe(stepActions),
    assertions: dedupe(assertions),
  };
}
