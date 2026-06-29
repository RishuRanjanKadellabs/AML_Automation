import { buildAssertionsForRow } from "./assertions";
import {
  extractCategory,
  extractEndpoint,
  extractKeyword,
  extractResolution,
  extractScreeningField,
  extractTabName,
  extractUserRole,
  extractValue,
} from "./parser";
import type { KmExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeActionLogic(body: string): string {
  const lines = body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  return lines.join(";\n    ");
}

function finalizeLogic(body: string, row: KmExcelRow): string {
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

function kmOpenSteps(row: KmExcelRow, useSidebar = false): string[] {
  const role = extractUserRole(row);
  const lines = ["await kmPage.openKeywordManagerDirect(testData.baseUrl)"];
  if (useSidebar || /sidebar|configuration menu|left navigation/i.test(`${row.taskSteps} ${row.taskDescription}`)) {
    lines.push("await kmPage.expandConfigurationMenu()");
    lines.push("await kmPage.openKeywordManagerFromSidebar()");
  }
  if (role) {
    // TODO: RBAC role switching mechanism — login fixture per role not yet wired; using default session
    lines.push(`// Role from Excel: ${role}`);
  }
  return lines;
}

function withKm(row: KmExcelRow, extra: string[] = [], useSidebar = false): string {
  return finalizeActionLogic([...kmOpenSteps(row, useSidebar), ...extra].join(";\n    "));
}

function withKmTab(row: KmExcelRow, tabName: string, extra: string[] = [], useSidebar = false): string {
  return withKm(row, [`await kmPage.openTab("${tabName}")`, ...extra], useSidebar);
}

function defaultKeyword(row: KmExcelRow): string {
  return extractKeyword(row.testData) ?? "terror financing";
}

function defaultCategory(row: KmExcelRow): string {
  return extractCategory(row.testData) ?? "Financial Crime";
}

function resolveNavigationPageLoad(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps = row.testSteps.toLowerCase();
  const resolution = extractResolution(row.testData);
  const extra: string[] = [];

  if (task.includes("sidebar") || steps.includes("configuration")) {
    return finalizeActionLogic(
      [
        "await kmPage.openKeywordManagerDirect(testData.baseUrl)",
        "await kmPage.expandConfigurationMenu()",
        "await kmPage.openKeywordManagerFromSidebar()",
        "await kmPage.expectKeywordManagerViewLoaded()",
      ].join(";\n    "),
    );
  }
  if (task.includes("direct url") || task.includes("route") || task.includes("deep link")) {
    return withKm(row, ["await kmPage.expectOnKeywordManagerRoute()"]);
  }
  if (task.includes("title") || task.includes("header") || task.includes("breadcrumb")) {
    extra.push("await kmPage.expectPageTitleVisible()");
  } else if (task.includes("toolbar") || task.includes("action bar")) {
    extra.push("await kmPage.expectToolbarVisible()");
  } else if (task.includes("responsive") || task.includes("viewport") || resolution) {
    extra.push(`await kmPage.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
    extra.push("await kmPage.expectPageLoaded()");
  } else if (task.includes("scroll")) {
    extra.push("await kmPage.scrollPage()");
    extra.push("await kmPage.expectPageLoaded()");
  } else if (task.includes("loader") || task.includes("skeleton") || task.includes("slow network")) {
    extra.push("await kmPage.expectLoadingIndicator()");
  } else if (task.includes("console")) {
    extra.push("await kmPage.expectConsoleErrorsFree()");
  } else if (task.includes("refresh") || task.includes("reload")) {
    extra.push("await kmPage.refreshPage()");
  } else if (task.includes("cache")) {
    // TODO: Cache clearing mechanism — full browser cache clear not practical in shared session CI
    extra.push("await kmPage.clearBrowserCache()");
    extra.push("await kmPage.openKeywordManagerDirect(testData.baseUrl)");
  } else {
    extra.push("await kmPage.expectKeywordManagerViewLoaded()");
  }

  return withKm(row, extra, /configuration menu/i.test(row.testSteps));
}

function resolveTabNavigation(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const tabName = extractTabName(row.testData, row.taskDescription);
  const extra: string[] = [];

  if (task.includes("default") || task.includes("page load")) {
    extra.push(`await kmPage.expectTabSelected("${tabName}")`);
    extra.push("await kmPage.expectTabsVisible()");
  } else if (task.includes("switch") || task.includes("click")) {
    extra.push(`await kmPage.openTab("${tabName}")`);
    extra.push(`await kmPage.expectTabSelected("${tabName}")`);
  } else if (task.includes("count") || task.includes("badge")) {
    extra.push(`await kmPage.openTab("${tabName}")`);
    extra.push("await kmPage.expectTabCountBadgeVisible()");
  } else if (task.includes("keyboard")) {
    extra.push("await kmPage.navigateTabsWithKeyboard()");
  } else {
    for (const tab of ["Active", "Inactive", "Drafted"]) {
      extra.push(`await kmPage.openTab("${tab}")`);
    }
    extra.push("await kmPage.expectTabsVisible()");
  }

  return withKm(row, extra);
}

function resolveKeywordListingTable(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const column = extractValue(row.testData, "Column")
    ?? extractValue(row.testData, "Sort Column")
    ?? "Keyword";
  const extra: string[] = ["await kmPage.expectKeywordTableVisible()"];

  if (task.includes("header") || task.includes("column")) {
    extra.push("await kmPage.expectTableHeadersVisible()");
  } else if (task.includes("sort") || task.includes("ascending") || task.includes("descending")) {
    extra.push(`await kmPage.sortByColumn("${column}")`);
  } else if (task.includes("pagination")) {
    extra.push("await kmPage.goToNextTablePage()");
  } else if (task.includes("row") || task.includes("data")) {
    extra.push("await kmPage.expectTableRowsVisible()");
  } else if (task.includes("empty")) {
    extra.push("await kmPage.expectEmptyTableState()");
  } else if (task.includes("status") || task.includes("badge")) {
    extra.push("await kmPage.expectStatusBadgeVisible()");
  } else if (task.includes("category")) {
    extra.push(`await kmPage.expectCategoryBadge("${defaultCategory(row)}")`);
  } else {
    extra.push(`await kmPage.sortByColumn("${column}")`);
  }

  return withKm(row, extra);
}

function resolveSearchFunctionality(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = extractKeyword(row.testData) ?? "terror";
  const extra: string[] = [];

  if (task.includes("render") || task.includes("placeholder") || task.includes("visibility")) {
    extra.push("await kmPage.expectSearchInputVisible()");
  } else if (task.includes("clear")) {
    extra.push(`await kmPage.searchKeywords("${keyword}")`);
    extra.push("await kmPage.clearSearch()");
  } else if (task.includes("no result") || task.includes("empty")) {
    extra.push('await kmPage.searchKeywords("zzznomatch999")');
    extra.push("await kmPage.expectEmptySearchResults()");
  } else if (task.includes("case") || task.includes("insensitive")) {
    extra.push(`await kmPage.searchKeywords("${keyword.toUpperCase()}")`);
    extra.push("await kmPage.expectSearchResults()");
  } else {
    extra.push(`await kmPage.searchKeywords("${keyword}")`);
    extra.push("await kmPage.expectSearchResults()");
  }

  return withKm(row, extra);
}

function resolveAddCategory(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const name = extractValue(row.testData, "Category Name") ?? defaultCategory(row);
  const extra: string[] = ["await kmPage.openAddCategoryModal()"];

  if (task.includes("cancel") || task.includes("close")) {
    extra.push("await kmPage.cancelAddCategory()");
  } else if (task.includes("validation") || task.includes("empty") || task.includes("required")) {
    extra.push("await kmPage.submitAddCategory()");
    extra.push("await kmPage.expectInlineValidationError()");
  } else if (task.includes("duplicate")) {
    extra.push(`await kmPage.fillCategoryName("${name}")`);
    extra.push("await kmPage.submitAddCategory()");
  } else if (task.includes("submit") || task.includes("save") || task.includes("create")) {
    extra.push(`await kmPage.fillCategoryName("${name}")`);
    extra.push("await kmPage.submitAddCategory()");
  } else if (task.includes("visibility") || task.includes("open")) {
    extra.push("await expect(kmPage.addCategoryModal).toBeVisible()");
  }

  return withKm(row, extra);
}

function resolveCategoryControls(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const category = defaultCategory(row);
  const extra: string[] = ["await kmPage.openCategoryControlsModal()"];

  if (task.includes("toggle") || task.includes("enable") || task.includes("disable")) {
    extra.push(`await kmPage.toggleCategoryControl("${category}")`);
  } else if (task.includes("close") || task.includes("cancel")) {
    extra.push("await kmPage.closeCategoryControlsModal()");
  } else if (task.includes("reorder") || task.includes("drag")) {
    extra.push("await kmPage.reorderCategoryInControls()");
  } else if (task.includes("visibility")) {
    extra.push("await expect(kmPage.categoryControlsModal).toBeVisible()");
  }

  return withKm(row, extra);
}

function resolveAddKeyword(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const category = defaultCategory(row);
  const field = extractScreeningField(row.testData) ?? "Narrative";
  const extra: string[] = ["await kmPage.openAddKeywordPanel()"];

  if (task.includes("cancel") || task.includes("close")) {
    extra.push("await kmPage.cancelAddKeywordPanel()");
  } else if (task.includes("validation") || task.includes("required") || task.includes("empty") || task.includes("mandatory")) {
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectInlineValidationError()");
  } else if (task.includes("blocked") || task.includes("prevent") || task.includes("duplicate")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectSubmissionBlocked()");
  } else if (task.includes("draft")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push("await kmPage.saveKeywordDraft()");
  } else if (task.includes("screening field") || task.includes("field")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push(`await kmPage.selectScreeningFields("${field}")`);
    extra.push("await kmPage.submitKeyword()");
  } else if (task.includes("submit") || task.includes("save") || task.includes("create") || task.includes("add")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push("await kmPage.submitKeyword()");
  } else {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
  }

  return withKm(row, extra);
}

function resolveLiveNarrativeTester(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const narrative = extractValue(row.testData, "Narrative")
    ?? extractValue(row.testData, "Narrative Text")
    ?? `${keyword} transaction payment`;
  const extra: string[] = ["await kmPage.openLiveNarrativeTester()"];

  if (task.includes("highlight") || task.includes("match") || task.includes("hit")) {
    extra.push(`await kmPage.fillNarrativeText("${narrative}")`);
    extra.push(`await kmPage.runNarrativeTest("${keyword}")`);
    extra.push("await kmPage.expectNarrativeHighlightVisible()");
  } else if (task.includes("clear") || task.includes("reset")) {
    extra.push("await kmPage.clearNarrativeTester()");
  } else if (task.includes("no match") || task.includes("negative")) {
    extra.push(`await kmPage.fillNarrativeText("${narrative}")`);
    extra.push(`await kmPage.runNarrativeTest("nomatchphrase")`);
  } else {
    extra.push("await kmPage.expectLiveNarrativeTesterVisible()");
  }

  return withKm(row, extra);
}

function resolveMakerCheckerGovernance(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row) ?? "Checker";
  const keyword = defaultKeyword(row);
  const extra: string[] = [
    `// TODO: Maker-checker role login — switch session to role: ${role}`,
    "await kmPage.openMakerCheckerQueue()",
  ];

  if (task.includes("reject") || task.includes("decline")) {
    extra.push("await kmPage.rejectKeyword()");
  } else if (task.includes("approve") || task.includes("confirm")) {
    extra.push("await kmPage.approveKeyword()");
  } else if (task.includes("not available") || task.includes("hidden") || role.toLowerCase() === "maker") {
    extra.push("await kmPage.expectRbacControlsHidden()");
  } else if (task.includes("queue") || task.includes("pending")) {
    extra.push(`await kmPage.openTab("Drafted")`);
  } else if (task.includes("submit") || task.includes("create")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${defaultCategory(row)}")`);
    extra.push("await kmPage.submitKeyword()");
  } else {
    extra.push("await kmPage.expectMakerCheckerQueueVisible()");
  }

  return withKm(row, extra);
}

function resolveDisableKeyword(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const extra: string[] = [`await kmPage.disableKeyword("${keyword}")`];

  if (task.includes("confirm") || task.includes("confirmation")) {
    extra.push("await kmPage.expectDisableConfirmation()");
    extra.push("await kmPage.confirmDisableKeyword()");
  } else if (task.includes("cancel")) {
    extra.push("await kmPage.cancelDisableKeyword()");
  } else if (task.includes("inactive")) {
    extra.push('await kmPage.openTab("Inactive")');
  }

  return withKm(row, extra);
}

function resolveEnableKeyword(row: KmExcelRow): string {
  const keyword = defaultKeyword(row);
  return withKmTab(row, "Inactive", [
    `await kmPage.enableKeyword("${keyword}")`,
  ]);
}

function resolveBulkImport(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const file = extractValue(row.testData, "File") ?? "keywords-sample.csv";
  const extra: string[] = ["await kmPage.openBulkImportModal()"];

  if (task.includes("template") || task.includes("download")) {
    extra.push("await kmPage.downloadBulkImportTemplate()");
  } else if (task.includes("invalid") || task.includes("error") || task.includes("reject")) {
    extra.push(`await kmPage.uploadBulkFile("${file}")`);
    extra.push("await kmPage.expectBulkImportError()");
  } else if (task.includes("submit") || task.includes("upload") || task.includes("import")) {
    extra.push(`await kmPage.uploadBulkFile("${file}")`);
    extra.push("await kmPage.submitBulkImport()");
  } else if (task.includes("cancel") || task.includes("close")) {
    extra.push("await kmPage.cancelBulkImportModal()");
  } else if (task.includes("visibility")) {
    extra.push("await expect(kmPage.bulkImportModal).toBeVisible()");
  }

  return withKm(row, extra);
}

function resolveExport(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const format = extractValue(row.testData, "Format") ?? "CSV";
  const extra: string[] = [];

  if (task.includes("visibility")) {
    extra.push("await expect(kmPage.exportButton).toBeVisible()");
  } else if (task.includes("click") || task.includes("download")) {
    extra.push("await kmPage.clickExport()");
    extra.push(`await kmPage.exportKeywords("${format}")`);
  } else if (task.includes("filtered") || task.includes("tab")) {
    const tab = extractTabName(row.testData, row.taskDescription);
    extra.push(`await kmPage.openTab("${tab}")`);
    extra.push("await kmPage.clickExport()");
  } else {
    extra.push("await kmPage.clickExport()");
    extra.push("await kmPage.expectExportOptions()");
  }

  return withKm(row, extra);
}

function resolveScreeningEngine(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const narrative = extractValue(row.testData, "Narrative") ?? `${keyword} payment transfer`;
  const extra: string[] = [
    "// TODO: Screening engine backend runs — requires live screening service or mock contract",
    "await kmPage.openLiveNarrativeTester()",
    `await kmPage.fillNarrativeText("${narrative}")`,
    `await kmPage.runNarrativeTest("${keyword}")`,
  ];

  if (task.includes("no hit") || task.includes("negative")) {
    extra.push('await kmPage.runNarrativeTest("nomatchphrase999")');
  } else if (task.includes("fuzzy") || task.includes("partial")) {
    extra.push("await kmPage.expectScreeningEngineEvaluation()");
  } else {
    extra.push("await kmPage.expectScreeningEngineEvaluation()");
  }

  return withKm(row, extra);
}

function resolveWorkflowStates(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const tab = extractTabName(row.testData, row.taskDescription);
  const extra: string[] = [`await kmPage.openTab("${tab}")`];

  if (task.includes("draft") || task.includes("drafted")) {
    extra.push('await kmPage.openTab("Drafted")');
    extra.push(`await kmPage.searchKeywords("${keyword}")`);
  } else if (task.includes("active")) {
    extra.push('await kmPage.openTab("Active")');
  } else if (task.includes("inactive") || task.includes("disabled")) {
    extra.push('await kmPage.openTab("Inactive")');
  } else if (task.includes("transition") || task.includes("state")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push("await kmPage.submitKeyword()");
  }

  extra.push("await kmPage.expectKeywordTableVisible()");
  return withKm(row, extra);
}

function resolveRbacSecurity(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row) ?? "Viewer";
  const extra: string[] = [`// TODO: RBAC — switch session to role: ${role}`];

  if (task.includes("unauthorized") || task.includes("denied") || task.includes("url manipulation")) {
    extra.push("await kmPage.mockUnauthorized()");
    extra.push("await kmPage.openKeywordManagerDirect(testData.baseUrl)");
    extra.push("await kmPage.expectAccessDenied()");
  } else if (task.includes("xss") || task.includes("injection")) {
    extra.push('await kmPage.searchKeywords("<script>alert(1)</script>")');
    extra.push("await kmPage.expectNoScriptExecution()");
  } else if (task.includes("csrf") || task.includes("token")) {
    extra.push("await kmPage.expectCsrfProtectionActive()");
  } else if (role.toLowerCase() === "viewer" || task.includes("viewer") || task.includes("read-only")) {
    extra.push("await kmPage.expectRbacControlsHidden()");
  } else if (role.toLowerCase() === "maker" || task.includes("maker")) {
    extra.push("await kmPage.openAddKeywordPanel()");
  } else if (role.toLowerCase() === "checker" || task.includes("checker")) {
    extra.push("await kmPage.openMakerCheckerQueue()");
  } else {
    extra.push("await kmPage.expectKeywordManagerViewLoaded()");
  }

  return finalizeActionLogic(extra.join(";\n    "));
}

function resolveBusinessRules(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const category = defaultCategory(row);
  const extra: string[] = [];

  if (task.includes("unique") || task.includes("duplicate") || task.includes("br-")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectSubmissionBlocked()");
  } else if (task.includes("disable") || task.includes("inactive")) {
    extra.push(`await kmPage.disableKeyword("${keyword}")`);
  } else if (task.includes("approval") || task.includes("checker")) {
    extra.push("await kmPage.openMakerCheckerQueue()");
    extra.push("await kmPage.approveKeyword()");
  } else if (task.includes("category") && task.includes("mandatory")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectInlineValidationError()");
  } else {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${category}")`);
    extra.push("await kmPage.submitKeyword()");
  }

  return withKm(row, extra);
}

function resolveScreeningFields(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const field = extractScreeningField(row.testData) ?? "Narrative";
  const keyword = defaultKeyword(row);
  const extra: string[] = [
    "await kmPage.openAddKeywordPanel()",
    `await kmPage.fillKeywordPhrase("${keyword}")`,
    `await kmPage.selectCategory("${defaultCategory(row)}")`,
  ];

  if (task.includes("multiple") || task.includes("all")) {
    extra.push('await kmPage.selectScreeningFields("Narrative, Counterparty, Reference")');
  } else if (task.includes("required") || task.includes("mandatory")) {
    extra.push(`await kmPage.selectScreeningFields("${field}")`);
    extra.push("await kmPage.submitKeyword()");
  } else {
    extra.push(`await kmPage.selectScreeningFields("${field}")`);
  }

  return withKm(row, extra);
}

function resolveUiComponents(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await kmPage.expectPageLoaded()"];

  if (task.includes("font") || task.includes("typography")) {
    extra.push("await kmPage.expectInterFontApplied()");
  } else if (task.includes("colour") || task.includes("color")) {
    extra.push("await kmPage.expectBrandColorsApplied()");
  } else if (task.includes("spacing") || task.includes("padding")) {
    extra.push("await kmPage.expectConsistentSpacing()");
  } else if (task.includes("icon") || task.includes("button")) {
    extra.push("await kmPage.expectToolbarIconsVisible()");
  } else if (task.includes("modal") || task.includes("overlay")) {
    extra.push("await kmPage.openAddCategoryModal()");
  } else if (task.includes("tooltip") || task.includes("hint")) {
    extra.push("await kmPage.expectToolbarVisible()");
  }

  return withKm(row, extra);
}

function resolveAccessibility(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("keyboard") || task.includes("tab")) {
    extra.push("await kmPage.expectToolbarKeyboardAccessible()");
  } else if (task.includes("focus")) {
    extra.push("await kmPage.expectFocusIndicatorsVisible()");
  } else if (task.includes("aria") || task.includes("label")) {
    extra.push("await kmPage.expectAccessibleLabels()");
  } else if (task.includes("contrast")) {
    extra.push("await kmPage.expectAccessibleContrast()");
  } else {
    extra.push("await kmPage.navigateToolbarWithKeyboard()");
  }

  return withKm(row, extra);
}

function resolvePerformance(row: KmExcelRow): string {
  // TODO: Performance SLA thresholds — measure load time when baseline defined
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await kmPage.expectKeywordManagerViewLoaded()"];

  if (task.includes("search")) {
    extra.push('await kmPage.searchKeywords("terror")');
  } else if (task.includes("tab")) {
    extra.push('await kmPage.openTab("Inactive")');
  } else if (task.includes("bulk")) {
    extra.push("await kmPage.openBulkImportModal()");
  } else if (task.includes("table") || task.includes("list")) {
    extra.push("await kmPage.expectKeywordTableVisible()");
  }

  return withKm(row, extra);
}

function resolveBrowserCompatibility(row: KmExcelRow): string {
  // TODO: Cross-browser matrix — milestone1 runs Chromium only
  return withKm(row, ["await kmPage.expectKeywordManagerViewLoaded()"]);
}

function resolveNegativeEdgeCases(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const file = extractValue(row.testData, "File") ?? "empty.csv";
  const extra: string[] = [];

  if (task.includes("bulk") || task.includes("upload") || task.includes("empty file")) {
    extra.push("await kmPage.openBulkImportModal()");
    extra.push(`await kmPage.uploadBulkFile("${file}")`);
    extra.push("await kmPage.expectBulkImportError()");
  } else if (task.includes("special character") || task.includes("unicode")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push('await kmPage.fillKeywordPhrase("测试@#$%keyword")');
    extra.push("await kmPage.submitKeyword()");
  } else if (task.includes("long") || task.includes("length")) {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${"x".repeat(256)}")`);
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectInlineValidationError()");
  } else if (task.includes("network") || task.includes("offline")) {
    extra.push("await kmPage.mockApiFailure()");
    extra.push("await kmPage.expectErrorStateVisible()");
  } else {
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.expectInlineValidationError()");
  }

  return withKm(row, extra);
}

function resolveIntegration(row: KmExcelRow): string {
  const endpoint = extractEndpoint(row.testData) ?? "GET /api/v1/keywords";
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [`// TODO: Exact API base URL — ${endpoint}`];

  if (task.includes("post") || /post/i.test(endpoint)) {
    extra.push(`await kmPage.mockApiPostKeyword("${defaultKeyword(row)}")`);
    extra.push("await kmPage.expectApiPostResponse()");
  } else if (task.includes("put") || task.includes("patch") || task.includes("update")) {
    extra.push("await kmPage.mockApiUpdateKeyword()");
    extra.push("await kmPage.expectApiUpdateResponse()");
  } else if (task.includes("delete")) {
    extra.push("await kmPage.mockApiDeleteKeyword()");
    extra.push("await kmPage.expectApiDeleteResponse()");
  } else if (task.includes("bulk")) {
    extra.push("await kmPage.mockApiBulkImport()");
    extra.push("await kmPage.expectApiBulkResponse()");
  } else {
    extra.push("await kmPage.mockApiListKeywords()");
    extra.push("await kmPage.expectApiListResponse()");
  }

  return withKm(row, extra);
}

function resolveSampleKeywordValidation(row: KmExcelRow): string {
  const keyword = defaultKeyword(row);
  const narrative = extractValue(row.testData, "Narrative") ?? `${keyword} international transfer`;
  return withKm(row, [
    "await kmPage.openLiveNarrativeTester()",
    `await kmPage.fillNarrativeText("${narrative}")`,
    `await kmPage.runNarrativeTest("${keyword}")`,
    "await kmPage.expectNarrativeHighlightVisible()",
  ]);
}

function resolveAdditionalCoverage(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("end-to-end") || task.includes("workflow")) {
    const keyword = defaultKeyword(row);
    extra.push("await kmPage.openAddKeywordPanel()");
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${defaultCategory(row)}")`);
    extra.push("await kmPage.submitKeyword()");
    extra.push("await kmPage.openMakerCheckerQueue()");
    extra.push("await kmPage.approveKeyword()");
    extra.push('await kmPage.openTab("Active")');
    extra.push(`await kmPage.searchKeywords("${keyword}")`);
  } else if (task.includes("regression")) {
    extra.push("await kmPage.expectKeywordManagerViewLoaded()");
    for (const tab of ["Active", "Inactive", "Drafted"]) {
      extra.push(`await kmPage.openTab("${tab}")`);
    }
  } else {
    extra.push("await kmPage.expectKeywordManagerViewLoaded()");
  }

  return withKm(row, extra);
}

function resolveFuzzyMatchThreshold(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const threshold = extractValue(row.testData, "Threshold Score") ?? "85";
  const extra: string[] = ["await kmPage.openAddKeywordPanel()"];

  if (task.includes("narrative") || task.includes("tester")) {
    return resolveLiveNarrativeTester(row);
  }
  if (task.includes("exact")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push('await kmPage.selectMatchType("Exact Match")');
    extra.push("await kmPage.expectThresholdFieldVisible(false)");
  } else if (task.includes("threshold") || task.includes("score") || task.includes("fuzzy")) {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${defaultCategory(row)}")`);
    extra.push('await kmPage.selectMatchType("Fuzzy Match")');
    extra.push(`await kmPage.fillThresholdScore("${threshold}")`);
    extra.push("await kmPage.expectThresholdFieldVisible(true)");
  } else {
    extra.push(`await kmPage.fillKeywordPhrase("${keyword}")`);
    extra.push(`await kmPage.selectCategory("${defaultCategory(row)}")`);
    extra.push('await kmPage.selectMatchType("Fuzzy Match")');
  }

  return withKm(row, extra);
}

function resolveKeywordRowActions(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  if (task.includes("enable") || task.includes("reactivate")) {
    return resolveEnableKeyword(row);
  }
  if (task.includes("disable") || task.includes("deactivate")) {
    return resolveDisableKeyword(row);
  }
  if (task.includes("edit") || task.includes("update")) {
    const keyword = defaultKeyword(row);
    return withKm(row, [
      `await kmPage.searchKeywords("${keyword}")`,
      "await kmPage.openAddKeywordPanel()",
      `await kmPage.fillKeywordPhrase("${keyword}")`,
      "await kmPage.submitKeyword()",
    ]);
  }
  return resolveWorkflowStates(row);
}

function resolveAuditHistory(row: KmExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const keyword = defaultKeyword(row);
  const extra: string[] = [
    "// TODO: Audit history panel locator — open row audit trail when UI selector is confirmed",
    `await kmPage.searchKeywords("${keyword}")`,
    "await kmPage.expectKeywordTableVisible()",
  ];

  if (task.includes("timeline") || task.includes("history") || task.includes("audit")) {
    extra.push("await kmPage.expectTableRowsVisible()");
  }

  return withKm(row, extra);
}

const SUB_MODULE_RESOLVERS: Record<string, (row: KmExcelRow) => string> = {
  "Navigation & Page Access": resolveNavigationPageLoad,
  "Navigation & Page Load": resolveNavigationPageLoad,
  "Status Tabs": resolveTabNavigation,
  "Tab Navigation": resolveTabNavigation,
  "Search & Filter": resolveSearchFunctionality,
  "Search Functionality": resolveSearchFunctionality,
  "Data Table & Sorting": resolveKeywordListingTable,
  "Keyword Listing Table": resolveKeywordListingTable,
  "Category Management - Add Category": resolveAddCategory,
  "Add Category": resolveAddCategory,
  "Category Management - Category Controls": resolveCategoryControls,
  "Category Controls": resolveCategoryControls,
  "Add Keyword": resolveAddKeyword,
  "Screening Fields Mapping": resolveScreeningFields,
  "Screening Fields": resolveScreeningFields,
  "Fuzzy Match & Threshold Score": resolveFuzzyMatchThreshold,
  "Live Narrative Tester": resolveLiveNarrativeTester,
  "Keyword Row Actions": resolveKeywordRowActions,
  "Disable Keyword": resolveDisableKeyword,
  "Enable Keyword": resolveEnableKeyword,
  "Bulk Upload": resolveBulkImport,
  "Bulk Import": resolveBulkImport,
  Export: resolveExport,
  "Maker-Checker Workflow": resolveMakerCheckerGovernance,
  "Maker-Checker Governance": resolveMakerCheckerGovernance,
  "Audit History": resolveAuditHistory,
  "Screening Engine Behaviour": resolveScreeningEngine,
  "Screening Engine": resolveScreeningEngine,
  "Access Control (RBAC)": resolveRbacSecurity,
  "RBAC & Security": resolveRbacSecurity,
  "Field & Business Rule Validation": resolveBusinessRules,
  "Business Rules": resolveBusinessRules,
  "Regression, Compatibility & UAT": resolveBrowserCompatibility,
  "Browser Compatibility": resolveBrowserCompatibility,
  "Sample Keyword Validation": resolveSampleKeywordValidation,
  Integration: resolveIntegration,
  Performance: resolvePerformance,
  "UI Components": resolveUiComponents,
  Accessibility: resolveAccessibility,
  "Negative Edge Cases": resolveNegativeEdgeCases,
  "Workflow States": resolveWorkflowStates,
  "Additional Coverage": resolveAdditionalCoverage,
};

export function mapKmActionLogic(row: KmExcelRow): string {
  const resolver = SUB_MODULE_RESOLVERS[row.subModule];
  if (resolver) {
    return resolver(row);
  }

  return finalizeActionLogic(
    "await kmPage.openKeywordManagerDirect(testData.baseUrl);\n    await kmPage.expectKeywordManagerViewLoaded()",
  );
}

/** @deprecated Use mapKmActionLogic + buildAssertionsForRow for spec generation */
export function mapKmTestLogic(row: KmExcelRow): string {
  return finalizeLogic(mapKmActionLogic(row), row);
}
