import { buildAssertionsForRow } from "./assertions";
import {
  extractCategory,
  extractEndpoint,
  extractIgnoreWord,
  extractMatchType,
  extractResolution,
  extractRiskLevel,
  extractTabName,
  extractUserRole,
  extractValue,
} from "./parser";
import type { IwcExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeLogic(body: string, row: IwcExcelRow): string {
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

function iwcOpenSteps(row: IwcExcelRow, useSidebar = false): string[] {
  const role = extractUserRole(row);
  const lines = ["await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)"];
  if (useSidebar || /sidebar|configuration menu|left navigation/i.test(`${row.testSteps} ${row.taskDescription}`)) {
    lines.push("await iwcPage.expandConfigurationMenu()");
    lines.push("await iwcPage.openIgnoreWordsConfigurationFromSidebar()");
  }
  if (role) {
    // TODO: RBAC role switching mechanism — login fixture per role not yet wired; using default session
    lines.push(`/* Role from Excel: ${role} */`);
  }
  return lines;
}

function withIwc(row: IwcExcelRow, extra: string[] = [], useSidebar = false): string {
  return finalizeLogic([...iwcOpenSteps(row, useSidebar), ...extra].join(";\n    "), row);
}

function withIwcTab(row: IwcExcelRow, tabName: string, extra: string[] = [], useSidebar = false): string {
  return withIwc(row, [`await iwcPage.openTab("${tabName}")`, ...extra], useSidebar);
}

function defaultIgnoreWord(row: IwcExcelRow): string {
  return extractIgnoreWord(row.testData) ?? "draft word";
}

function defaultCategory(row: IwcExcelRow): string {
  return extractCategory(row.testData) ?? "Entity Suffixes";
}

function defaultRiskLevel(row: IwcExcelRow): string {
  return extractRiskLevel(row.testData) ?? "Low";
}

function defaultMatchType(row: IwcExcelRow): string {
  return extractMatchType(row.testData) ?? "Exact phrase";
}

function resolvePageFramework(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps = row.testSteps.toLowerCase();
  const resolution = extractResolution(row.testData);
  const extra: string[] = [];

  if (task.includes("sidebar") && task.includes("navigation path")) {
    return finalizeLogic(
      [
        "await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)",
        "await iwcPage.expandConfigurationMenu()",
        "await iwcPage.openIgnoreWordsConfigurationFromSidebar()",
        "await iwcPage.expectIgnoreWordsConfigurationViewLoaded()",
      ].join(";\n    "),
      row,
    );
  }
  if (task.includes("direct url") || task.includes("route") || task.includes("deep link")) {
    return withIwc(row, ["await iwcPage.expectOnIgnoreWordsConfigurationRoute()"]);
  }
  if (task.includes("sidebar highlight") || task.includes("active sidebar")) {
    extra.push("await iwcPage.expectSidebarActiveHighlight()");
  } else if (task.includes("full-viewport") || task.includes("scrolling")) {
    extra.push("await iwcPage.expectFullViewportLayout()");
  } else if (task.includes("sidebar fixed width") || task.includes("sidebar")) {
    extra.push("await iwcPage.expectSidebarStructure()");
  } else if (task.includes("main content") || task.includes("layout structure")) {
    extra.push("await iwcPage.expectMainContentLayout()");
  } else if (task.includes("top bar")) {
    extra.push("await iwcPage.expectTopBarVisible()");
  } else if (task.includes("status bar")) {
    extra.push("await iwcPage.expectStatusBarVisible()");
  } else if (task.includes("title") || task.includes("header")) {
    extra.push("await iwcPage.expectPageTitleVisible()");
  } else if (task.includes("breadcrumb")) {
    extra.push("await iwcPage.expectBreadcrumbVisible()");
  } else if (task.includes("toolbar") || task.includes("action bar")) {
    extra.push("await iwcPage.expectToolbarVisible()");
  } else if (task.includes("responsive") || task.includes("viewport") || resolution) {
    extra.push(`await iwcPage.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
    extra.push("await iwcPage.expectPageLoaded()");
  } else if (task.includes("scroll")) {
    extra.push("await iwcPage.scrollPage()");
    extra.push("await iwcPage.expectPageLoaded()");
  } else if (task.includes("loader") || task.includes("skeleton") || task.includes("slow network")) {
    extra.push("await iwcPage.expectLoadingIndicator()");
  } else if (task.includes("console")) {
    extra.push("await iwcPage.expectConsoleErrorsFree()");
  } else if (task.includes("refresh") || task.includes("reload")) {
    extra.push("await iwcPage.refreshPage()");
  } else if (task.includes("cache")) {
    // TODO: Cache clearing mechanism — full browser cache clear not practical in shared session CI
    extra.push("await iwcPage.clearBrowserCache()");
    extra.push("await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)");
  } else {
    extra.push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
  }

  return withIwc(row, extra, /configuration menu/i.test(row.testSteps));
}

function resolveSidebarNavigation(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [
    "await iwcPage.expandConfigurationMenu()",
    "await iwcPage.openIgnoreWordsConfigurationFromSidebar()",
  ];

  if (task.includes("highlight") || task.includes("active")) {
    extra.push("await iwcPage.expectSidebarActiveHighlight()");
  } else if (task.includes("search") || task.includes("menu search")) {
    extra.push("await iwcPage.searchConfigurationMenu(\"Ignore Words\")");
  } else if (task.includes("collapse") || task.includes("expand")) {
    extra.push("await iwcPage.toggleConfigurationMenu()");
  }

  return withIwc(row, extra, true);
}

function resolveTabBar(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const tabName = extractTabName(row.testData, row.taskDescription);
  const extra: string[] = [];

  if (task.includes("default") || task.includes("page load")) {
    extra.push(`await iwcPage.expectTabSelected("${tabName}")`);
    extra.push("await iwcPage.expectTabsVisible()");
  } else if (task.includes("switch") || task.includes("click")) {
    extra.push(`await iwcPage.openTab("${tabName}")`);
    extra.push(`await iwcPage.expectTabSelected("${tabName}")`);
  } else if (task.includes("count") || task.includes("badge")) {
    extra.push(`await iwcPage.openTab("${tabName}")`);
    extra.push("await iwcPage.expectTabCountBadgeVisible()");
  } else if (task.includes("keyboard")) {
    extra.push("await iwcPage.navigateTabsWithKeyboard()");
  } else {
    for (const tab of ["Active", "Inactive", "Drafted"]) {
      extra.push(`await iwcPage.openTab("${tab}")`);
    }
    extra.push("await iwcPage.expectTabsVisible()");
  }

  return withIwc(row, extra);
}

function resolveTableAndSorting(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const column = extractValue(row.testData, "Column")
    ?? extractValue(row.testData, "Sort Column")
    ?? "Ignore Word";
  const extra: string[] = ["await iwcPage.expectIgnoreWordTableVisible()"];

  if (task.includes("header") || task.includes("column")) {
    extra.push("await iwcPage.expectTableHeadersVisible()");
  } else if (task.includes("sort") || task.includes("ascending") || task.includes("descending")) {
    extra.push(`await iwcPage.sortByColumn("${column}")`);
  } else if (task.includes("pagination")) {
    extra.push("await iwcPage.goToNextTablePage()");
  } else if (task.includes("row") || task.includes("data")) {
    extra.push("await iwcPage.expectTableRowsVisible()");
  } else if (task.includes("empty")) {
    extra.push("await iwcPage.expectEmptyTableState()");
  } else if (task.includes("status") || task.includes("badge")) {
    extra.push("await iwcPage.expectStatusBadgeVisible()");
  } else if (task.includes("category")) {
    extra.push(`await iwcPage.expectCategoryBadge("${defaultCategory(row)}")`);
  } else {
    extra.push(`await iwcPage.sortByColumn("${column}")`);
  }

  return withIwc(row, extra);
}

function resolveSearchAndFilter(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = extractIgnoreWord(row.testData) ?? "trading";
  const extra: string[] = [];

  if (task.includes("render") || task.includes("placeholder") || task.includes("visibility")) {
    extra.push("await iwcPage.expectSearchInputVisible()");
  } else if (task.includes("clear")) {
    extra.push(`await iwcPage.searchIgnoreWords("${word}")`);
    extra.push("await iwcPage.clearSearch()");
  } else if (task.includes("no result") || task.includes("empty")) {
    extra.push('await iwcPage.searchIgnoreWords("zzznomatch999")');
    extra.push("await iwcPage.expectEmptySearchResults()");
  } else if (task.includes("case") || task.includes("insensitive")) {
    extra.push(`await iwcPage.searchIgnoreWords("${word.toUpperCase()}")`);
    extra.push("await iwcPage.expectSearchResults()");
  } else if (task.includes("filter") || task.includes("category")) {
    const category = defaultCategory(row);
    extra.push(`await iwcPage.filterByCategory("${category}")`);
    extra.push("await iwcPage.expectSearchResults()");
  } else {
    extra.push(`await iwcPage.searchIgnoreWords("${word}")`);
    extra.push("await iwcPage.expectSearchResults()");
  }

  return withIwc(row, extra);
}

function resolveAddCategoryModal(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const name = extractValue(row.testData, "Category Name") ?? defaultCategory(row);
  const extra: string[] = ["await iwcPage.openAddCategoryModal()"];

  if (task.includes("overlay") || task.includes("backdrop")) {
    extra.push("await iwcPage.clickModalOverlay()");
  } else if (task.includes("cancel") || task.includes("close")) {
    extra.push("await iwcPage.cancelAddCategory()");
  } else if (task.includes("validation") || task.includes("empty") || task.includes("required")) {
    extra.push("await iwcPage.submitAddCategory()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else if (task.includes("duplicate")) {
    extra.push(`await iwcPage.fillCategoryName("${name}")`);
    extra.push("await iwcPage.submitAddCategory()");
  } else if (task.includes("description")) {
    const desc = extractValue(row.testData, "Description") ?? "Test category description";
    extra.push(`await iwcPage.fillCategoryName("${name}")`);
    extra.push(`await iwcPage.fillCategoryDescription("${desc}")`);
    extra.push("await iwcPage.submitAddCategory()");
  } else if (task.includes("submit") || task.includes("save") || task.includes("create")) {
    extra.push(`await iwcPage.fillCategoryName("${name}")`);
    extra.push("await iwcPage.submitAddCategory()");
  } else if (task.includes("visibility") || task.includes("open")) {
    extra.push("await expect(iwcPage.addCategoryModal).toBeVisible()");
  }

  return withIwc(row, extra);
}

function resolveCategoryControlsModal(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const category = defaultCategory(row);
  const extra: string[] = ["await iwcPage.openCategoryControlsModal()"];

  if (task.includes("toggle") || task.includes("enable") || task.includes("disable")) {
    extra.push(`await iwcPage.toggleCategoryControl("${category}")`);
  } else if (task.includes("overlay") || task.includes("backdrop")) {
    extra.push("await iwcPage.clickModalOverlay()");
  } else if (task.includes("close") || task.includes("cancel")) {
    extra.push("await iwcPage.closeCategoryControlsModal()");
  } else if (task.includes("reorder") || task.includes("drag")) {
    extra.push("await iwcPage.reorderCategoryInControls()");
  } else if (task.includes("visibility")) {
    extra.push("await expect(iwcPage.categoryControlsModal).toBeVisible()");
  }

  return withIwc(row, extra);
}

function resolveCategoryBadges(row: IwcExcelRow): string {
  const category = defaultCategory(row);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await iwcPage.expectIgnoreWordTableVisible()"];

  if (task.includes("color") || task.includes("colour") || task.includes("style")) {
    extra.push(`await iwcPage.expectCategoryBadgeStyle("${category}")`);
  } else {
    extra.push(`await iwcPage.expectCategoryBadge("${category}")`);
  }

  return withIwc(row, extra);
}

function resolveAddIgnoreWordPanel(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const category = defaultCategory(row);
  const risk = defaultRiskLevel(row);
  const matchType = defaultMatchType(row);
  const extra: string[] = ["await iwcPage.openAddIgnoreWordPanel()"];

  if (task.includes("overlay") && !task.includes("does not close")) {
    extra.push("await iwcPage.clickPanelOverlay()");
  } else if (task.includes("cancel") || task.includes("close") || task.includes("back arrow") || task.includes("breadcrumb")) {
    if (task.includes("overlay")) {
      extra.push("await iwcPage.clickPanelOverlay()");
    } else if (task.includes("back arrow")) {
      extra.push("await iwcPage.closeAddIgnoreWordPanelViaBackArrow()");
    } else if (task.includes("breadcrumb")) {
      extra.push("await iwcPage.closeAddIgnoreWordPanelViaBreadcrumb()");
    } else {
      extra.push("await iwcPage.cancelAddIgnoreWordPanel()");
    }
  } else if (task.includes("validation") || task.includes("required") || task.includes("empty") || task.includes("mandatory")) {
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else if (task.includes("blocked") || task.includes("prevent") || task.includes("duplicate")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectSubmissionBlocked()");
  } else if (task.includes("draft")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
    extra.push("await iwcPage.saveIgnoreWordDraft()");
  } else if (task.includes("risk level")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
  } else if (task.includes("match type")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
  } else if (task.includes("dimension") || task.includes("animation") || task.includes("overlay")) {
    extra.push("await expect(iwcPage.addIgnoreWordPanel).toBeVisible()");
  } else if (task.includes("submit") || task.includes("save") || task.includes("create") || task.includes("add")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
  } else {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${risk}")`);
    extra.push(`await iwcPage.selectMatchType("${matchType}")`);
  }

  return withIwc(row, extra);
}

function resolveRowActions(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = [];

  if (task.includes("disable") || task.includes("off")) {
    extra.push(`await iwcPage.disableIgnoreWord("${word}")`);
    if (task.includes("checker") || task.includes("approval")) {
      extra.push("await iwcPage.expectCheckerApprovalModal()");
    }
  } else if (task.includes("enable") || task.includes("on")) {
    extra.push('await iwcPage.openTab("Inactive")');
    extra.push(`await iwcPage.enableIgnoreWord("${word}")`);
    if (task.includes("checker") || task.includes("approval")) {
      extra.push("await iwcPage.expectCheckerApprovalModal()");
    }
  } else if (task.includes("edit") || task.includes("update")) {
    extra.push(`await iwcPage.editIgnoreWord("${word}")`);
  } else if (task.includes("history") || task.includes("audit")) {
    extra.push(`await iwcPage.openWordHistoryPanel("${word}")`);
  } else if (task.includes("view") || task.includes("detail")) {
    extra.push(`await iwcPage.viewIgnoreWordDetails("${word}")`);
  } else if (task.includes("delete") || task.includes("remove")) {
    extra.push(`await iwcPage.deleteIgnoreWord("${word}")`);
  } else {
    extra.push(`await iwcPage.openRowActionsMenu("${word}")`);
  }

  return withIwc(row, extra);
}

function resolveWordHistoryPanel(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = [`await iwcPage.openWordHistoryPanel("${word}")`];

  if (task.includes("audit") || task.includes("timeline") || task.includes("create") || task.includes("update")) {
    extra.push("await iwcPage.expectWordHistoryTimelineVisible()");
  } else if (task.includes("close") || task.includes("cancel")) {
    extra.push("await iwcPage.closeWordHistoryPanel()");
  } else if (task.includes("enable") || task.includes("disable")) {
    extra.push("await iwcPage.expectWordHistoryStatusChangeEntries()");
  } else {
    extra.push("await expect(iwcPage.wordHistoryPanel).toBeVisible()");
  }

  return withIwc(row, extra);
}

function resolveRiskLevelBadges(row: IwcExcelRow): string {
  const risk = defaultRiskLevel(row);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await iwcPage.expectIgnoreWordTableVisible()"];

  if (task.includes("color") || task.includes("colour") || task.includes("style")) {
    extra.push(`await iwcPage.expectRiskLevelBadgeStyle("${risk}")`);
  } else {
    extra.push(`await iwcPage.expectRiskLevelBadge("${risk}")`);
  }

  return withIwc(row, extra);
}

function resolveMatchTypeBadges(row: IwcExcelRow): string {
  const matchType = defaultMatchType(row);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await iwcPage.expectIgnoreWordTableVisible()"];

  if (task.includes("color") || task.includes("colour") || task.includes("style")) {
    extra.push(`await iwcPage.expectMatchTypeBadgeStyle("${matchType}")`);
  } else {
    extra.push(`await iwcPage.expectMatchTypeBadge("${matchType}")`);
  }

  return withIwc(row, extra);
}

function resolveStatusBadges(row: IwcExcelRow): string {
  const tab = extractTabName(row.testData, row.taskDescription);
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [`await iwcPage.openTab("${tab}")`, "await iwcPage.expectStatusBadgeVisible()"];

  if (task.includes("active")) {
    extra.push('await iwcPage.openTab("Active")');
  } else if (task.includes("inactive") || task.includes("disabled")) {
    extra.push('await iwcPage.openTab("Inactive")');
  } else if (task.includes("drafted") || task.includes("draft")) {
    extra.push('await iwcPage.openTab("Drafted")');
  }

  return withIwc(row, extra);
}

function resolveBulkUpload(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const file = extractValue(row.testData, "File") ?? "ignore-words-sample.csv";
  const category = defaultCategory(row);
  const extra: string[] = ["await iwcPage.openBulkUploadModal()"];

  if (task.includes("template") || task.includes("download")) {
    extra.push("await iwcPage.downloadBulkUploadTemplate()");
  } else if (task.includes("cancel") || task.includes("close") || (task.includes("overlay") && task.includes("backdrop"))) {
    if (task.includes("overlay") || task.includes("backdrop")) {
      extra.push("await iwcPage.clickModalOverlay()");
    } else {
      extra.push("await iwcPage.cancelBulkUploadModal()");
    }
  } else if (task.includes("invalid") || task.includes("error") || task.includes("reject")) {
    extra.push(`await iwcPage.selectBulkUploadCategory("${category}")`);
    extra.push(`await iwcPage.uploadBulkFile("${file}")`);
    extra.push("await iwcPage.expectBulkUploadError()");
  } else if (task.includes("validation")) {
    extra.push(`await iwcPage.selectBulkUploadCategory("${category}")`);
    extra.push(`await iwcPage.uploadBulkFile("${file}")`);
    extra.push("await iwcPage.submitBulkUpload()");
    extra.push("await iwcPage.expectBulkUploadValidationResults()");
  } else if (task.includes("submit") || task.includes("upload") || task.includes("import")) {
    extra.push(`await iwcPage.selectBulkUploadCategory("${category}")`);
    extra.push(`await iwcPage.uploadBulkFile("${file}")`);
    extra.push("await iwcPage.submitBulkUpload()");
  } else if (task.includes("drafted") || task.includes("checker")) {
    extra.push(`await iwcPage.selectBulkUploadCategory("${category}")`);
    extra.push(`await iwcPage.uploadBulkFile("${file}")`);
    extra.push("await iwcPage.submitBulkUpload()");
    extra.push('await iwcPage.openTab("Drafted")');
  } else if (task.includes("visibility")) {
    extra.push("await expect(iwcPage.bulkUploadModal).toBeVisible()");
  }

  return withIwc(row, extra);
}

function resolveExportFunctionality(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const format = extractValue(row.testData, "Format") ?? "CSV";
  const extra: string[] = [];

  if (task.includes("visibility")) {
    extra.push("await expect(iwcPage.exportButton).toBeVisible()");
  } else if (task.includes("click") || task.includes("download")) {
    extra.push("await iwcPage.clickExport()");
    extra.push(`await iwcPage.exportIgnoreWords("${format}")`);
  } else if (task.includes("filtered") || task.includes("tab")) {
    const tab = extractTabName(row.testData, row.taskDescription);
    extra.push(`await iwcPage.openTab("${tab}")`);
    extra.push("await iwcPage.clickExport()");
  } else {
    extra.push("await iwcPage.clickExport()");
    extra.push("await iwcPage.expectExportOptions()");
  }

  return withIwc(row, extra);
}

function resolveLiveNarrativeTester(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const narrative = extractValue(row.testData, "Narrative")
    ?? extractValue(row.testData, "Narrative Text")
    ?? `${word} transaction payment`;
  const extra: string[] = ["await iwcPage.openLiveNarrativeTester()"];

  if (task.includes("highlight") || task.includes("match") || task.includes("hit") || task.includes("ignore")) {
    extra.push(`await iwcPage.fillNarrativeText("${narrative}")`);
    extra.push(`await iwcPage.runNarrativeTest("${word}")`);
    extra.push("await iwcPage.expectNarrativeHighlightVisible()");
  } else if (task.includes("clear") || task.includes("reset")) {
    extra.push("await iwcPage.clearNarrativeTester()");
  } else if (task.includes("no match") || task.includes("negative")) {
    extra.push(`await iwcPage.fillNarrativeText("${narrative}")`);
    extra.push(`await iwcPage.runNarrativeTest("nomatchphrase")`);
  } else {
    extra.push("await iwcPage.expectLiveNarrativeTesterVisible()");
  }

  return withIwc(row, extra);
}

function resolveMakerCheckerGovernance(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row) ?? "Checker";
  const word = defaultIgnoreWord(row);
  const categoryName = extractValue(row.testData, "Category Name") ?? "Investigation Terms";
  const extra: string[] = [
    `// TODO: Maker-checker role login — switch session to role: ${role}`,
  ];

  if (task.includes("checker approval modal") && (task.includes("overlay") || task.includes("backdrop"))) {
    extra.push("await iwcPage.expectCheckerApprovalModal()");
    extra.push("await iwcPage.clickModalOverlay()");
  } else if (task.includes("overlay") || task.includes("backdrop")) {
    extra.push("await iwcPage.openAddCategoryModal()");
    extra.push("await iwcPage.clickModalOverlay()");
  } else if (task.includes("category") && (task.includes("submit") || task.includes("creates pending"))) {
    extra.push("await iwcPage.openAddCategoryModal()");
    extra.push(`await iwcPage.fillCategoryName("${categoryName}")`);
    extra.push("await iwcPage.submitAddCategory()");
    extra.push("await iwcPage.openMakerCheckerQueue()");
  } else if (task.includes("category") && task.includes("approv")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
  } else if (task.includes("category") && task.includes("reject")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.rejectIgnoreWord()");
  } else if (task.includes("cannot approve own") || task.includes("maker cannot approve")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.expectRbacControlsHidden()");
  } else if (task.includes("bulk upload")) {
    extra.push("await iwcPage.openBulkUploadModal()");
    extra.push("await iwcPage.openMakerCheckerQueue()");
  } else if (task.includes("disable request") || (task.includes("disable") && task.includes("submit"))) {
    extra.push(`await iwcPage.disableIgnoreWord("${word}")`);
  } else if (task.includes("enable") && task.includes("approv")) {
    extra.push('await iwcPage.openTab("Inactive")');
    extra.push(`await iwcPage.enableIgnoreWord("${word}")`);
    extra.push("await iwcPage.approveIgnoreWord()");
  } else if (task.includes("reject") && task.includes("disable")) {
    extra.push(`await iwcPage.disableIgnoreWord("${word}")`);
    extra.push("await iwcPage.rejectIgnoreWord()");
  } else if (task.includes("rejection returns") || task.includes("returns ignore word to drafted")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.rejectIgnoreWord()");
    extra.push('await iwcPage.openTab("Drafted")');
    extra.push(`await iwcPage.openWordHistoryPanel("${word}")`);
  } else if (task.includes("approv") && task.includes("drafted")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
  } else if ((task.includes("reject") || task.includes("decline")) && task.includes("drafted")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.rejectIgnoreWord()");
    extra.push('await iwcPage.openTab("Drafted")');
  } else if (
    task.includes("submits drafted")
    || task.includes("submit drafted")
    || (task.includes("drafted") && task.includes("submit"))
  ) {
    extra.push('await iwcPage.openTab("Drafted")');
    extra.push(`await iwcPage.submitDraftedIgnoreWord("${word}")`);
  } else if (task.includes("workflow status") || task.includes("visibility")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.expectMakerCheckerQueueVisible()");
  } else if (task.includes("prevent editing") || task.includes("pending checker")) {
    extra.push(`await iwcPage.editIgnoreWord("${word}")`);
  } else if (task.includes("reject") || task.includes("decline")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.rejectIgnoreWord()");
  } else if (task.includes("approve") || task.includes("confirm")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
  } else if (task.includes("submit") || task.includes("create")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${defaultCategory(row)}")`);
    extra.push(`await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`);
    extra.push(`await iwcPage.selectMatchType("${defaultMatchType(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.openMakerCheckerQueue()");
  } else {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.expectMakerCheckerQueueVisible()");
  }

  return withIwc(row, extra);
}

function resolveCheckerApprovalModal(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = [`await iwcPage.disableIgnoreWord("${word}")`];

  if (task.includes("approve") || task.includes("confirm")) {
    extra.push("await iwcPage.expectCheckerApprovalModal()");
    extra.push("await iwcPage.approveInCheckerModal()");
  } else if (task.includes("reject") || task.includes("decline") || task.includes("cancel")) {
    extra.push("await iwcPage.expectCheckerApprovalModal()");
    extra.push("await iwcPage.rejectInCheckerModal()");
  } else if (task.includes("comment") || task.includes("reason")) {
    extra.push("await iwcPage.expectCheckerApprovalModal()");
    extra.push('await iwcPage.fillCheckerApprovalComment("Automated test approval")');
    extra.push("await iwcPage.approveInCheckerModal()");
  } else if (task.includes("visibility") || task.includes("display")) {
    extra.push("await expect(iwcPage.checkerApprovalModal).toBeVisible()");
  } else {
    extra.push("await iwcPage.expectCheckerApprovalModal()");
  }

  return withIwc(row, extra);
}

function resolvePermissionsRbac(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row) ?? "Viewer";
  const extra: string[] = [`// TODO: RBAC — switch session to role: ${role}`];

  if (task.includes("unauthorized") || task.includes("denied") || task.includes("url manipulation")) {
    extra.push("await iwcPage.mockUnauthorized()");
    extra.push("await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)");
    extra.push("await iwcPage.expectAccessDenied()");
  } else if (task.includes("add ignore word") || task.includes("add category") || task.includes("bulk upload")) {
    if (role.toLowerCase() === "admin" || role.toLowerCase() === "maker") {
      if (task.includes("bulk")) {
        extra.push("await iwcPage.openBulkUploadModal()");
      } else if (task.includes("category")) {
        extra.push("await iwcPage.openAddCategoryModal()");
      } else {
        extra.push("await iwcPage.openAddIgnoreWordPanel()");
      }
    } else {
      extra.push("await iwcPage.expectRbacControlsHidden()");
    }
  } else if (task.includes("toggle") || task.includes("enable") || task.includes("disable")) {
    if (role.toLowerCase() === "admin") {
      extra.push(`await iwcPage.disableIgnoreWord("${defaultIgnoreWord(row)}")`);
    } else {
      extra.push("await iwcPage.expectRbacControlsHidden()");
    }
  } else if (role.toLowerCase() === "viewer" || task.includes("viewer") || task.includes("read-only") || task.includes("compliance officer")) {
    extra.push("await iwcPage.expectRbacControlsHidden()");
  } else if (role.toLowerCase() === "checker" || task.includes("checker")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
  } else {
    extra.push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
  }

  return finalizeLogic(extra.join(";\n    "), row);
}

function resolveBusinessRules(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const category = defaultCategory(row);
  const extra: string[] = [];

  if (task.includes("unique") || task.includes("duplicate") || task.includes("br-")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`);
    extra.push(`await iwcPage.selectMatchType("${defaultMatchType(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectSubmissionBlocked()");
  } else if (task.includes("disable") || task.includes("inactive") || task.includes("br-007")) {
    extra.push(`await iwcPage.disableIgnoreWord("${word}")`);
    extra.push("await iwcPage.expectCheckerApprovalModal()");
  } else if (task.includes("approval") || task.includes("checker")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
  } else if (task.includes("category") && task.includes("mandatory")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${category}")`);
    extra.push(`await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`);
    extra.push(`await iwcPage.selectMatchType("${defaultMatchType(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
  }

  return withIwc(row, extra);
}

function resolveMatchTypeBehavior(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const matchType = defaultMatchType(row);
  const narrative = extractValue(row.testData, "Narrative") ?? `${word} international transfer`;
  const extra: string[] = [
    "// TODO: Screening engine backend runs — requires live screening service or mock contract",
    "await iwcPage.openLiveNarrativeTester()",
    `await iwcPage.fillNarrativeText("${narrative}")`,
    `await iwcPage.selectMatchTypeForTest("${matchType}")`,
    `await iwcPage.runNarrativeTest("${word}")`,
  ];

  if (task.includes("exact")) {
    extra.push("await iwcPage.expectExactMatchBehavior()");
  } else if (task.includes("partial") || task.includes("fuzzy")) {
    extra.push("await iwcPage.expectPartialMatchBehavior()");
  } else if (task.includes("no match") || task.includes("negative")) {
    extra.push('await iwcPage.runNarrativeTest("nomatchphrase999")');
  } else {
    extra.push("await iwcPage.expectScreeningEngineEvaluation()");
  }

  return withIwc(row, extra);
}

function resolveDataValidation(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = ["await iwcPage.openAddIgnoreWordPanel()"];

  if (task.includes("max length") || task.includes("character limit")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${"x".repeat(256)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else if (task.includes("special character") || task.includes("unicode")) {
    extra.push('await iwcPage.fillIgnoreWordPhrase("测试@#$%word")');
    extra.push(`await iwcPage.selectCategory("${defaultCategory(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
  } else if (task.includes("category") && task.includes("required")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else if (task.includes("risk") && task.includes("required")) {
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${defaultCategory(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else {
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  }

  return withIwc(row, extra);
}

function resolveDuplicateValidation(row: IwcExcelRow): string {
  const word = defaultIgnoreWord(row);
  return withIwc(row, [
    "await iwcPage.openAddIgnoreWordPanel()",
    `await iwcPage.fillIgnoreWordPhrase("${word}")`,
    `await iwcPage.selectCategory("${defaultCategory(row)}")`,
    `await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`,
    `await iwcPage.selectMatchType("${defaultMatchType(row)}")`,
    "await iwcPage.submitIgnoreWord()",
    "await iwcPage.expectSubmissionBlocked()",
  ]);
}

function resolveErrorHandling(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("network") || task.includes("offline") || task.includes("500")) {
    extra.push("await iwcPage.mockApiFailure()");
    extra.push("await iwcPage.expectErrorStateVisible()");
  } else if (task.includes("timeout")) {
    // TODO: API timeout threshold — exact timeout value not specified in Excel
    extra.push("await iwcPage.mockApiTimeout()");
    extra.push("await iwcPage.expectErrorStateVisible()");
  } else if (task.includes("server") || task.includes("api")) {
    extra.push("await iwcPage.mockApiFailure()");
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectErrorStateVisible()");
  } else {
    extra.push("await iwcPage.mockApiFailure()");
    extra.push("await iwcPage.expectErrorStateVisible()");
  }

  return withIwc(row, extra);
}

function resolveNavigationFlow(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("sidebar") || task.includes("menu")) {
    extra.push("await iwcPage.expandConfigurationMenu()");
    extra.push("await iwcPage.openIgnoreWordsConfigurationFromSidebar()");
  } else if (task.includes("tab") && task.includes("switch")) {
    for (const tab of ["Active", "Inactive", "Drafted"]) {
      extra.push(`await iwcPage.openTab("${tab}")`);
    }
  } else if (task.includes("panel") || task.includes("add ignore word")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.cancelAddIgnoreWordPanel()");
  } else if (task.includes("breadcrumb") || task.includes("back")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.closeAddIgnoreWordPanelViaBreadcrumb()");
  } else {
    extra.push("await iwcPage.expectOnIgnoreWordsConfigurationRoute()");
  }

  return withIwc(row, extra, task.includes("sidebar"));
}

function resolveUiUxConsistency(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await iwcPage.expectPageLoaded()"];

  if (task.includes("font") || task.includes("typography")) {
    extra.push("await iwcPage.expectInterFontApplied()");
  } else if (task.includes("colour") || task.includes("color")) {
    extra.push("await iwcPage.expectBrandColorsApplied()");
  } else if (task.includes("spacing") || task.includes("padding")) {
    extra.push("await iwcPage.expectConsistentSpacing()");
  } else if (task.includes("icon") || task.includes("button")) {
    extra.push("await iwcPage.expectToolbarIconsVisible()");
  } else if (task.includes("modal") || task.includes("overlay")) {
    extra.push("await iwcPage.openAddCategoryModal()");
  } else if (task.includes("tooltip") || task.includes("hint")) {
    extra.push("await iwcPage.expectToolbarVisible()");
  }

  return withIwc(row, extra);
}

function resolveAccessibility(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("keyboard") || task.includes("tab")) {
    extra.push("await iwcPage.expectToolbarKeyboardAccessible()");
  } else if (task.includes("focus")) {
    extra.push("await iwcPage.expectFocusIndicatorsVisible()");
  } else if (task.includes("aria") || task.includes("label")) {
    extra.push("await iwcPage.expectAccessibleLabels()");
  } else if (task.includes("contrast")) {
    extra.push("await iwcPage.expectAccessibleContrast()");
  } else {
    extra.push("await iwcPage.navigateToolbarWithKeyboard()");
  }

  return withIwc(row, extra);
}

function resolveBrowserCompatibility(row: IwcExcelRow): string {
  // TODO: Cross-browser matrix — milestone1 runs Chromium only
  return withIwc(row, ["await iwcPage.expectIgnoreWordsConfigurationViewLoaded()"]);
}

function resolveSecurityValidation(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const role = extractUserRole(row);
  const extra: string[] = [];

  if (role) {
    // TODO: RBAC — switch session to role: ${role}
    extra.push(`// Role from Excel: ${role}`);
  }

  if (task.includes("xss") || task.includes("injection")) {
    extra.push('await iwcPage.searchIgnoreWords("<script>alert(1)</script>")');
    extra.push("await iwcPage.expectNoScriptExecution()");
  } else if (task.includes("csrf") || task.includes("token")) {
    extra.push("await iwcPage.expectCsrfProtectionActive()");
  } else if (task.includes("unauthorized") || task.includes("url manipulation")) {
    extra.push("await iwcPage.mockUnauthorized()");
    extra.push("await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl)");
    extra.push("await iwcPage.expectAccessDenied()");
  } else if (task.includes("session") || task.includes("logout")) {
    // TODO: Session expiry simulation — timeout duration not specified in Excel
    extra.push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
  } else {
    extra.push("await iwcPage.expectCsrfProtectionActive()");
  }

  return finalizeLogic(extra.join(";\n    "), row);
}

function resolveRegressionValidation(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await iwcPage.expectIgnoreWordsConfigurationViewLoaded()"];

  if (task.includes("tab")) {
    for (const tab of ["Active", "Inactive", "Drafted"]) {
      extra.push(`await iwcPage.openTab("${tab}")`);
    }
  } else if (task.includes("search")) {
    extra.push(`await iwcPage.searchIgnoreWords("${defaultIgnoreWord(row)}")`);
  } else if (task.includes("export")) {
    extra.push("await iwcPage.clickExport()");
  } else if (task.includes("add")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.cancelAddIgnoreWordPanel()");
  }

  return withIwc(row, extra);
}

function resolveNegativeScenarios(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const file = extractValue(row.testData, "File") ?? "empty.csv";
  const extra: string[] = [];

  if (task.includes("bulk") || task.includes("upload") || task.includes("empty file")) {
    extra.push("await iwcPage.openBulkUploadModal()");
    extra.push(`await iwcPage.uploadBulkFile("${file}")`);
    extra.push("await iwcPage.expectBulkUploadError()");
  } else if (task.includes("special character") || task.includes("unicode")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push('await iwcPage.fillIgnoreWordPhrase("测试@#$%word")');
    extra.push("await iwcPage.submitIgnoreWord()");
  } else if (task.includes("long") || task.includes("length")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${"x".repeat(256)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  } else if (task.includes("network") || task.includes("offline")) {
    extra.push("await iwcPage.mockApiFailure()");
    extra.push("await iwcPage.expectErrorStateVisible()");
  } else {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectInlineValidationError()");
  }

  return withIwc(row, extra);
}

function resolveUatScenarios(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = [];

  if (task.includes("end-to-end") || task.includes("workflow") || task.includes("complete")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${defaultCategory(row)}")`);
    extra.push(`await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`);
    extra.push(`await iwcPage.selectMatchType("${defaultMatchType(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
    extra.push('await iwcPage.openTab("Active")');
    extra.push(`await iwcPage.searchIgnoreWords("${word}")`);
  } else {
    // TODO: UAT-specific business validation steps — stakeholder sign-off criteria not in Excel
    extra.push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
    extra.push(`await iwcPage.searchIgnoreWords("${word}")`);
  }

  return withIwc(row, extra);
}

function resolveApiDataModel(row: IwcExcelRow): string {
  const endpoint = extractEndpoint(row.testData) ?? "GET /api/v1/ignore-words";
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [`// TODO: Exact API base URL — ${endpoint}`];

  if (task.includes("post") || /post/i.test(endpoint)) {
    extra.push(`await iwcPage.mockApiPostIgnoreWord("${defaultIgnoreWord(row)}")`);
    extra.push("await iwcPage.expectApiPostResponse()");
  } else if (task.includes("put") || task.includes("patch") || task.includes("update")) {
    extra.push("await iwcPage.mockApiUpdateIgnoreWord()");
    extra.push("await iwcPage.expectApiUpdateResponse()");
  } else if (task.includes("delete")) {
    extra.push("await iwcPage.mockApiDeleteIgnoreWord()");
    extra.push("await iwcPage.expectApiDeleteResponse()");
  } else if (task.includes("bulk")) {
    extra.push("await iwcPage.mockApiBulkUpload()");
    extra.push("await iwcPage.expectApiBulkResponse()");
  } else {
    extra.push("await iwcPage.mockApiListIgnoreWords()");
    extra.push("await iwcPage.expectApiListResponse()");
  }

  return withIwc(row, extra);
}

function resolveNotifications(row: IwcExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const word = defaultIgnoreWord(row);
  const extra: string[] = [];

  if (task.includes("success") || task.includes("created") || task.includes("submitted")) {
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push(`await iwcPage.fillIgnoreWordPhrase("${word}")`);
    extra.push(`await iwcPage.selectCategory("${defaultCategory(row)}")`);
    extra.push(`await iwcPage.selectRiskLevel("${defaultRiskLevel(row)}")`);
    extra.push(`await iwcPage.selectMatchType("${defaultMatchType(row)}")`);
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectSuccessNotification()");
  } else if (task.includes("error") || task.includes("failure")) {
    extra.push("await iwcPage.mockApiFailure()");
    extra.push("await iwcPage.openAddIgnoreWordPanel()");
    extra.push("await iwcPage.submitIgnoreWord()");
    extra.push("await iwcPage.expectErrorNotification()");
  } else if (task.includes("approval") || task.includes("checker")) {
    extra.push("await iwcPage.openMakerCheckerQueue()");
    extra.push("await iwcPage.approveIgnoreWord()");
    extra.push("await iwcPage.expectSuccessNotification()");
  } else {
    // TODO: Notification message text — exact toast copy not specified in Excel
    extra.push("await iwcPage.expectNotificationVisible()");
  }

  return withIwc(row, extra);
}

export function mapIwcTestLogic(row: IwcExcelRow): string {
  const sm = row.subModule;

  switch (sm) {
    case "Navigation & Page Access":
    case "Page Framework":
      return resolvePageFramework(row);
    case "Sidebar Navigation":
      return resolveSidebarNavigation(row);
    case "Status Tabs":
    case "Tab Bar":
      return resolveTabBar(row);
    case "Data Table & Sorting":
    case "Table & Sorting":
      return resolveTableAndSorting(row);
    case "Search & Filter":
      return resolveSearchAndFilter(row);
    case "Category Management – Add Category":
    case "Add Category Modal":
      return resolveAddCategoryModal(row);
    case "Category Management – Category Controls":
    case "Category Controls Modal":
      return resolveCategoryControlsModal(row);
    case "Category Badges":
      return resolveCategoryBadges(row);
    case "Add Ignore Word":
    case "Add Ignore Word Panel":
      return resolveAddIgnoreWordPanel(row);
    case "Ignore Word Row Actions":
    case "Row Actions":
      return resolveRowActions(row);
    case "Audit History":
    case "Word History Panel":
      return resolveWordHistoryPanel(row);
    case "Risk Level Badges":
      return resolveRiskLevelBadges(row);
    case "Match Type Badges":
      return resolveMatchTypeBadges(row);
    case "Status Badges":
      return resolveStatusBadges(row);
    case "Bulk Upload":
      return resolveBulkUpload(row);
    case "Export":
    case "Export Functionality":
      return resolveExportFunctionality(row);
    case "Live Narrative Tester":
      return resolveLiveNarrativeTester(row);
    case "Maker-Checker Workflow":
    case "Maker-Checker Governance":
      return resolveMakerCheckerGovernance(row);
    case "Checker Approval Modal":
      return resolveCheckerApprovalModal(row);
    case "Access Control (RBAC)":
    case "Permissions & RBAC":
      return resolvePermissionsRbac(row);
    case "Field & Business Rule Validation":
    case "Business Rules":
      return resolveBusinessRules(row);
    case "Match Type Behavior":
      return resolveMatchTypeBehavior(row);
    case "Data Validation":
      return resolveDataValidation(row);
    case "Duplicate Validation":
      return resolveDuplicateValidation(row);
    case "Error Handling":
      return resolveErrorHandling(row);
    case "Navigation Flow":
      return resolveNavigationFlow(row);
    case "UI/UX Consistency":
      return resolveUiUxConsistency(row);
    case "Accessibility":
      return resolveAccessibility(row);
    case "Browser Compatibility":
      return resolveBrowserCompatibility(row);
    case "Security Validation":
      return resolveSecurityValidation(row);
    case "Regression & Compatibility":
    case "Regression Validation":
      return resolveRegressionValidation(row);
    case "Negative Scenarios":
      return resolveNegativeScenarios(row);
    case "UAT Scenarios":
      return resolveUatScenarios(row);
    case "API & Data Model":
      return resolveApiDataModel(row);
    case "Notifications":
      return resolveNotifications(row);
    default:
      return finalizeLogic(
        "await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);\n    await iwcPage.expectIgnoreWordsConfigurationViewLoaded()",
        row,
      );
  }
}
