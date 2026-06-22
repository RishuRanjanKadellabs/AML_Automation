import { buildAssertionsForRow } from "./assertions";
import { extractCustomerId, extractResolution, extractValue } from "./parser";
import type { C360ExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeLogic(body: string, row: C360ExcelRow): string {
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

function customerOpenSteps(row: C360ExcelRow): string[] {
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  return [
    "await c360Page.openCustomer360Direct(testData.baseUrl)",
    `await c360Page.searchAndOpenCustomer("${customerId}")`,
  ];
}

function withCustomer(row: C360ExcelRow, extra: string[] = []): string {
  return finalizeLogic([...customerOpenSteps(row), ...extra].join(";\n    "), row);
}

function withTab(row: C360ExcelRow, tabName: string, extra: string[] = []): string {
  return withCustomer(row, [`await c360Page.openTab("${tabName}")`, ...extra]);
}

function resolvePageFramework(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const steps = row.testSteps.toLowerCase();
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  const resolution = extractResolution(row.testData);
  const lines: string[] = [];

  if (task.includes("sidebar") || steps.includes("customer 360 module")) {
    lines.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    lines.push("await c360Page.openCustomer360FromSidebar()");
    lines.push(`await c360Page.searchAndOpenCustomer("${customerId}")`);
  } else if (task.includes("direct url")) {
    lines.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    lines.push(`await c360Page.searchAndOpenCustomer("${customerId}")`);
    lines.push("await c360Page.expectOnCustomer360Route()");
  } else if (task.includes("overview tab") && task.includes("default")) {
    return withCustomer(row, ["await c360Page.expectOverviewTabSelected()"]);
  } else if (task.includes("sticky") || task.includes("scroll")) {
    return withCustomer(row, ["await c360Page.scrollPage()", "await c360Page.expectStickyHeader()"]);
  } else if (task.includes("medium screen") || task.includes("1024")) {
    lines.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    lines.push(`await c360Page.searchAndOpenCustomer("${customerId}")`);
    lines.push(`await c360Page.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
  } else if (task.includes("smaller screen") || task.includes("768")) {
    lines.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    lines.push(`await c360Page.searchAndOpenCustomer("${customerId}")`);
    lines.push(`await c360Page.resizeViewport(${resolution?.width ?? 768}, ${resolution?.height ?? 720})`);
  } else if (task.includes("skeleton") || task.includes("loader") || task.includes("slow network")) {
    return withCustomer(row, ["await c360Page.expectLoadingIndicator()"]);
  } else if (task.includes("empty-state") || customerId.startsWith("EMPTY")) {
    return withCustomer(row, ["await c360Page.expectEmptyState()"]);
  } else if (task.includes("console")) {
    return withCustomer(row, ["await c360Page.expectConsoleErrorsFree()"]);
  } else if (task.includes("layout") || task.includes("alignment")) {
    return withCustomer(row, ["await c360Page.expectCustomer360ViewLoaded()"]);
  } else {
    return withCustomer(row);
  }

  return finalizeLogic(lines.join(";\n    "), row);
}

function resolveHeaderStrip(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  const name = extractValue(row.testData, "Customer Name");
  const riskScore = extractValue(row.testData, "Risk Score");
  const alertCount = extractValue(row.testData, "Active Alerts");
  const extra: string[] = ["await c360Page.expectHeaderStripVisible()"];

  if (task.includes("full name") && name) {
    extra.push(`await c360Page.expectCustomerName("${name}")`);
  } else if (task.includes("long customer name") || task.includes("long name")) {
    extra.push('await c360Page.expectCustomerName("Alexander Jonathan Christopher Williamson")');
  } else if (task.includes("identifier") || task.includes("cif")) {
    const cif = extractValue(row.testData, "CIF ID") ?? "CIF458712";
    extra.push(`await c360Page.expectCustomerIdentifier("${cif}")`);
  } else if (task.includes("pep")) {
    return withCustomer({ ...row, testData: `Customer ID: ${customerId.includes("PEP") ? customerId : "PEP1001"}` }, extra.concat(["await c360Page.expectPepBadge()"]));
  } else if (task.includes("adverse media")) {
    return withCustomer({ ...row, testData: `Customer ID: ${customerId.includes("ADV") ? customerId : "ADV1001"}` }, extra.concat(["await c360Page.expectAdverseMediaBadge()"]));
  } else if (task.includes("risk score")) {
    extra.push(`await c360Page.expectRiskScoreBadge("${riskScore ?? "82"}")`);
  } else if (task.includes("alert count") || task.includes("active alert")) {
    extra.push(`await c360Page.expectActiveAlertCount("${alertCount ?? "5"}")`);
  } else if (task.includes("str") || task.includes("sar")) {
    extra.push("await c360Page.expectStrSarIndicator()");
  } else if (task.includes("tooltip")) {
    extra.push("await c360Page.hoverTruncatedHeaderValue()");
  }

  return withCustomer(row, extra);
}

function resolveCustomerTypeSwitching(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const indId = extractValue(row.testData, "Individual Customer") ?? extractValue(row.testData, "Individual") ?? "IND1001";
  const corpId = extractValue(row.testData, "Corporate Customer") ?? extractValue(row.testData, "Corporate") ?? "CORP2001";
  const extra: string[] = [];

  if (task.includes("individual") && task.includes("corporate") && task.indexOf("individual") < task.indexOf("corporate")) {
    extra.push(`await c360Page.searchAndOpenCustomer("${indId}")`);
    extra.push('await c360Page.switchCustomerType("Corporate")');
  } else if (task.includes("corporate") && task.includes("individual")) {
    extra.push(`await c360Page.searchAndOpenCustomer("${corpId}")`);
    extra.push('await c360Page.switchCustomerType("Individual")');
  } else if (task.includes("tab persistence") || task.includes("active tab")) {
    extra.push('await c360Page.openTab("Screening")');
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push('await c360Page.expectTabSelected("Screening")');
  } else if (task.includes("rapid")) {
    extra.push(`await c360Page.searchAndOpenCustomer("${indId}")`);
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push('await c360Page.switchCustomerType("Individual")');
    extra.push('await c360Page.switchCustomerType("Corporate")');
  } else if (task.includes("loading indicator") || task.includes("slow network")) {
    extra.push(`await c360Page.searchAndOpenCustomer("${indId}")`);
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push("await c360Page.expectLoadingIndicator()");
  } else if (task.includes("stale")) {
    extra.push(`await c360Page.searchAndOpenCustomer("${indId}")`);
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push("await c360Page.expectNoStaleCustomerData()");
  } else {
    extra.push(`await c360Page.searchAndOpenCustomer("${indId}")`);
    extra.push('await c360Page.switchCustomerType("Corporate")');
  }

  return finalizeLogic(
    ["await c360Page.openCustomer360Direct(testData.baseUrl)", ...extra].join(";\n    "),
    row,
  );
}

function resolveOverviewTab(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const resolution = extractResolution(row.testData);
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  const extra: string[] = ['await c360Page.openTab("Overview")', "await c360Page.expectOverviewTabSelected()"];

  if (task.includes("risk profile") || task.includes("risk score")) {
    const score = extractValue(row.testData, "Risk Score") ?? "82";
    extra.push(`await c360Page.expectOverviewKpiValue("Risk", "${score}")`);
  } else if (task.includes("kyc status")) {
    const level = extractValue(row.testData, "KYC Status") ?? "EDD";
    extra.push(`await c360Page.expectOverviewKpiValue("KYC", "${level}")`);
  } else if (task.includes("active alerts")) {
    const count = extractValue(row.testData, "Active Alerts") ?? "5";
    extra.push(`await c360Page.expectOverviewKpiValue("Alerts", "${count}")`);
  } else if (task.includes("total accounts")) {
    const count = extractValue(row.testData, "Total Accounts") ?? "7";
    extra.push(`await c360Page.expectOverviewKpiValue("Accounts", "${count}")`);
  } else if (task.includes("regulatory reports")) {
    extra.push("await c360Page.expectOverviewKpiValue(\"Regulatory\", \"3\")");
  } else if (task.includes("kyc gap score")) {
    if (task.includes("navigation") || task.includes("click")) {
      extra.push("await c360Page.clickKycGapScoreKpi()");
      extra.push('await c360Page.expectTabSelected("KYC Gap Report")');
    } else {
      const score = extractValue(row.testData, "KYC Gap Score") ?? "28";
      extra.push(`await c360Page.expectOverviewKpiValue("Gap", "${score}")`);
    }
  } else if (task.includes("alignment") || task.includes("spacing")) {
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  } else if (task.includes("responsive") || task.includes("medium screen")) {
    extra.push(`await c360Page.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  } else if (task.includes("large kpi")) {
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  } else if (task.includes("empty-state") || customerId.startsWith("EMPTY")) {
    extra.push("await c360Page.expectEmptyState()");
  } else if (task.includes("key relationships")) {
    extra.push("await c360Page.expectKeyRelationshipsWidget()");
  } else if (task.includes("relationship labels") || task.includes("relationship type")) {
    extra.push("await c360Page.expectKeyRelationshipsWidget()");
  } else if (task.includes("long relationship")) {
    extra.push("await c360Page.expectKeyRelationshipsWidget()");
  } else if (task.includes("screening summary")) {
    extra.push("await c360Page.expectScreeningSummaryWidget()");
  } else if (task.includes("sanctions match")) {
    extra.push("await c360Page.expectScreeningSummaryWidget()");
  } else if (task.includes("pep indicator")) {
    return withTab({ ...row, testData: "Customer ID: PEP1001" }, "Overview", extra.concat(["await c360Page.expectPepBadge()"]));
  } else if (task.includes("adverse media indicator")) {
    return withTab({ ...row, testData: "Customer ID: ADV1001" }, "Overview", extra.concat(["await c360Page.expectAdverseMediaBadge()"]));
  } else if (task.includes("transaction metrics") || task.includes("cash vs") || task.includes("cross-border") || task.includes("unusual transaction")) {
    extra.push("await c360Page.expectTransactionMetricsWidget()");
  } else if (task.includes("consistency") && task.includes("alert")) {
    extra.push("await c360Page.expectAlertCountConsistency()");
  } else if (task.includes("consistency") && task.includes("risk score")) {
    extra.push("await c360Page.expectRiskScoreConsistency()");
  } else if (task.includes("customer type switching") || task.includes("rerender")) {
    extra.push('await c360Page.switchCustomerType("Corporate")');
  } else if (task.includes("stale")) {
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push("await c360Page.expectNoStaleCustomerData()");
  } else if (task.includes("loading indicator") || task.includes("slow network")) {
    extra.push("await c360Page.expectLoadingIndicator()");
  } else if (task.includes("console")) {
    extra.push("await c360Page.expectConsoleErrorsFree()");
  } else {
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  }

  return withCustomer(row, extra);
}

function resolveRiskVisualization(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const resolution = extractResolution(row.testData);
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  const extra: string[] = ['await c360Page.openTab("Overview")'];

  if (task.includes("color coding")) {
    extra.push("await c360Page.expectRiskDonutChartVisible()");
    extra.push("await c360Page.expectRiskChartColorCoding()");
  } else if (task.includes("tooltip")) {
    extra.push("await c360Page.hoverRiskDonutSegment()");
  } else if (task.includes("responsive") || resolution) {
    extra.push(`await c360Page.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
    extra.push("await c360Page.expectRiskDonutChartVisible()");
  } else if (task.includes("empty-state") || customerId.startsWith("EMPTY")) {
    extra.push("await c360Page.expectEmptyState()");
  } else {
    extra.push("await c360Page.expectRiskDonutChartVisible()");
  }

  return withCustomer(row, extra);
}

function resolveTabArea(row: C360ExcelRow, tabName: string): string {
  const task = row.taskDescription.toLowerCase();
  const resolution = extractResolution(row.testData);
  const customerId = extractCustomerId(row.testData) ?? "CUST1001";
  const extra: string[] = [`await c360Page.openTab("${tabName}")`, "await c360Page.expectTabContentLoaded()"];

  if (task.includes("summary section") || task.includes("summary")) {
    extra.push(`await c360Page.expectTabSummarySection("${tabName}")`);
  } else if (task.includes("table")) {
    extra.push("await c360Page.expectTabTableVisible()");
  } else if (task.includes("empty-state") || customerId.includes("EMPTY")) {
    extra.push("await c360Page.expectEmptyState()");
  } else if (task.includes("expand")) {
    extra.push("await c360Page.expandFirstCard()");
  } else if (task.includes("collapse")) {
    extra.push("await c360Page.expandFirstCard()");
    extra.push("await c360Page.collapseFirstCard()");
  } else if (task.includes("multiple") && task.includes("expand")) {
    extra.push("await c360Page.expandFirstCard()");
    extra.push("await c360Page.expandNthCard(1)");
  } else if (task.includes("pep")) {
    extra.push("await c360Page.expectPepBadge()");
  } else if (task.includes("tooltip")) {
    extra.push("await c360Page.hoverTruncatedTabValue()");
  } else if (task.includes("responsive") || resolution) {
    extra.push(`await c360Page.resizeViewport(${resolution?.width ?? 1024}, ${resolution?.height ?? 768})`);
  } else if (task.includes("customer type") || task.includes("rerender")) {
    extra.push('await c360Page.switchCustomerType("Corporate")');
  } else if (task.includes("stale")) {
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push("await c360Page.expectNoStaleCustomerData()");
  } else if (task.includes("loading") || task.includes("slow network")) {
    extra.push("await c360Page.expectLoadingIndicator()");
  } else if (task.includes("console")) {
    extra.push("await c360Page.expectConsoleErrorsFree()");
  } else if (task.includes("sort")) {
    extra.push("await c360Page.sortTabTableByFirstColumn()");
  } else if (task.includes("filter")) {
    extra.push("await c360Page.applyTabFilter()");
  } else if (task.includes("pagination")) {
    extra.push("await c360Page.goToNextTabPage()");
  } else if (task.includes("detail") || task.includes("drill")) {
    extra.push("await c360Page.openFirstTabRowDetail()");
  }

  return withCustomer(row, extra);
}

function resolveGlobalNavigation(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const tabs = [
    "Overview",
    "Relationships",
    "Screening",
    "Risk",
    "KYC/CDD",
    "Accounts",
    "Transactions",
    "Alerts",
    "Regulatory Reports",
    "KYC Gap Report",
    "Audit",
  ];
  const extra: string[] = [];

  if (task.includes("all tabs") || task.includes("across")) {
    for (const tab of tabs.slice(0, 5)) {
      extra.push(`await c360Page.openTab("${tab}")`);
    }
  } else if (task.includes("active tab") || task.includes("highlight")) {
    extra.push('await c360Page.openTab("Screening")');
    extra.push("await c360Page.expectActiveTabHighlighted()");
  } else if (task.includes("keyboard")) {
    extra.push("await c360Page.navigateTabsWithKeyboard()");
  } else if (task.includes("back") || task.includes("browser")) {
    extra.push('await c360Page.openTab("Risk")');
    extra.push("await c360Page.goBackInBrowser()");
  } else {
    extra.push('await c360Page.openTab("Relationships")');
    extra.push('await c360Page.openTab("Overview")');
  }

  return withCustomer(row, extra);
}

function resolveExport(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const exportType = extractValue(row.testData, "Export Type") ?? "CSV";
  const extra: string[] = [];

  if (task.includes("visibility")) {
    extra.push("await expect(c360Page.exportButton).toBeVisible()");
  } else if (task.includes("click") || task.includes("download")) {
    extra.push(`await c360Page.exportCustomer360("${exportType}")`);
  } else if (task.includes("filter") || task.includes("tab")) {
    extra.push('await c360Page.openTab("Transactions")');
    extra.push("await c360Page.exportCustomer360()");
  } else if (task.includes("disabled") || task.includes("empty")) {
    extra.push("await c360Page.expectExportDisabled()");
  } else {
    extra.push("await c360Page.exportCustomer360()");
  }

  return withCustomer(row, extra);
}

function resolvePiiMasking(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("pan")) {
    extra.push('await c360Page.openTab("KYC/CDD")');
  } else if (task.includes("aadhaar")) {
    extra.push('await c360Page.openTab("KYC/CDD")');
  } else if (task.includes("account number")) {
    extra.push('await c360Page.openTab("Accounts")');
  } else {
    extra.push('await c360Page.openTab("Overview")');
  }
  extra.push("await c360Page.expectPiiMasked()");

  return withCustomer(row, extra);
}

function resolveErrorHandling(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("api failure") || task.includes("500")) {
    extra.push("await c360Page.mockApiFailure()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    extra.push('await c360Page.searchAndOpenCustomer("CUST1001")');
  } else if (task.includes("retry")) {
    extra.push("await c360Page.mockApiFailure()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    extra.push('await c360Page.searchAndOpenCustomer("CUST1001")');
    extra.push("await c360Page.clickRetry()");
  } else if (task.includes("timeout")) {
    extra.push("await c360Page.mockApiTimeout()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
  } else if (task.includes("not found") || task.includes("invalid customer")) {
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
    extra.push('await c360Page.searchAndOpenCustomer("INVALID999")');
    extra.push("await c360Page.expectEmptyState()");
  } else {
    extra.push("await c360Page.mockApiFailure()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
  }

  return finalizeLogic(extra.join(";\n    "), row);
}

function resolveAccessibility(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("keyboard")) {
    extra.push("await c360Page.navigateTabsWithKeyboard()");
  } else if (task.includes("focus")) {
    extra.push("await c360Page.expectFocusIndicatorsVisible()");
  } else if (task.includes("aria") || task.includes("label")) {
    extra.push("await c360Page.expectAccessibleLabels()");
  } else if (task.includes("contrast")) {
    extra.push("await c360Page.expectHeaderStripVisible()");
  } else {
    extra.push("await c360Page.navigateTabsWithKeyboard()");
  }

  return withCustomer(row, extra);
}

function resolveStateManagement(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("tab switching")) {
    extra.push('await c360Page.openTab("Transactions")');
    extra.push('await c360Page.openTab("Overview")');
    extra.push('await c360Page.openTab("Transactions")');
  } else if (task.includes("customer switching") || task.includes("rerender")) {
    extra.push('await c360Page.openTab("Risk")');
    extra.push('await c360Page.switchCustomerType("Corporate")');
  } else if (task.includes("refresh") || task.includes("browser")) {
    extra.push('await c360Page.openTab("Alerts")');
    extra.push("await c360Page.refreshPage()");
  } else if (task.includes("filter") || task.includes("search")) {
    extra.push('await c360Page.openTab("Transactions")');
    extra.push("await c360Page.applyTabFilter()");
    extra.push('await c360Page.openTab("Accounts")');
    extra.push('await c360Page.openTab("Transactions")');
  } else {
    extra.push('await c360Page.openTab("Screening")');
    extra.push('await c360Page.openTab("Risk")');
  }

  return withCustomer(row, extra);
}

function resolveGlobalUiConsistency(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ["await c360Page.expectHeaderStripVisible()"];

  if (task.includes("badge")) {
    extra.push("await c360Page.expectBadgeStylingConsistent()");
  } else if (task.includes("table")) {
    extra.push('await c360Page.openTab("Accounts")');
    extra.push("await c360Page.expectTabTableVisible()");
    extra.push('await c360Page.openTab("Transactions")');
    extra.push("await c360Page.expectTabTableVisible()");
  } else if (task.includes("font") || task.includes("typography")) {
    extra.push("await c360Page.expectTypographyConsistent()");
  } else {
    extra.push("await c360Page.expectBadgeStylingConsistent()");
  }

  return withCustomer(row, extra);
}

function resolveBrowserCompatibility(row: C360ExcelRow): string {
  // TODO: Cross-browser matrix — milestone1 runs Chromium only; validate core load in current project
  return withCustomer(row, ["await c360Page.expectCustomer360ViewLoaded()"]);
}

function resolveSessionManagement(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("logout") || task.includes("expiration")) {
    extra.push("await c360Page.mockUnauthorized()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
  } else {
    extra.push('await c360Page.openTab("Overview")');
    extra.push("await c360Page.expectCustomer360ViewLoaded()");
  }

  return finalizeLogic(
    ["await c360Page.openCustomer360Direct(testData.baseUrl)", `await c360Page.searchAndOpenCustomer("CUST1001")`, ...extra].join(";\n    "),
    row,
  );
}

function resolvePerformance(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("large transaction") || task.includes("10000")) {
    extra.push('await c360Page.openTab("Transactions")');
    extra.push("await c360Page.expectTabTableVisible()");
  } else if (task.includes("tab switch")) {
    extra.push('await c360Page.openTab("Risk")');
    extra.push('await c360Page.openTab("Screening")');
  } else {
    extra.push("await c360Page.expectCustomer360ViewLoaded()");
  }

  return withCustomer(row, extra);
}

function resolveSecurity(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = [];

  if (task.includes("unauthorized") || task.includes("tab access") || task.includes("url manipulation")) {
    extra.push("await c360Page.mockUnauthorized()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
  } else if (task.includes("xss") || task.includes("injection")) {
    extra.push('await c360Page.searchAndOpenCustomer("<script>alert(1)</script>")');
  } else if (task.includes("csrf") || task.includes("token")) {
    extra.push("await c360Page.expectCustomer360ViewLoaded()");
  } else {
    extra.push("await c360Page.mockUnauthorized()");
    extra.push("await c360Page.openCustomer360Direct(testData.baseUrl)");
  }

  return finalizeLogic(
    task.includes("unauthorized") || task.includes("url")
      ? extra.join(";\n    ")
      : ["await c360Page.openCustomer360Direct(testData.baseUrl)", ...extra].join(";\n    "),
    row,
  );
}

function resolveUsability(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const extra: string[] = ['await c360Page.openTab("Overview")'];

  if (task.includes("chart")) {
    extra.push("await c360Page.expectRiskDonutChartVisible()");
  } else if (task.includes("kpi")) {
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  } else if (task.includes("navigation") || task.includes("tab")) {
    extra.push('await c360Page.openTab("Relationships")');
  } else {
    extra.push("await c360Page.expectOverviewKpiCardsVisible()");
  }

  return withCustomer(row, extra);
}

function resolveRegression(row: C360ExcelRow): string {
  const task = row.taskDescription.toLowerCase();
  const tabs = ["Overview", "Relationships", "Screening", "Risk", "KYC/CDD", "Accounts", "Transactions", "Alerts"];
  const extra: string[] = [];

  if (task.includes("workflow") || task.includes("navigation")) {
    for (const tab of tabs) {
      extra.push(`await c360Page.openTab("${tab}")`);
    }
  } else if (task.includes("identity") || task.includes("consistency")) {
    extra.push("await c360Page.expectHeaderStripVisible()");
    for (const tab of tabs.slice(1, 4)) {
      extra.push(`await c360Page.openTab("${tab}")`);
      extra.push("await c360Page.expectHeaderStripVisible()");
    }
  } else if (task.includes("export")) {
    extra.push("await c360Page.exportCustomer360()");
  } else if (task.includes("customer type")) {
    extra.push('await c360Page.switchCustomerType("Corporate")');
    extra.push('await c360Page.openTab("Risk")');
  } else if (task.includes("refresh")) {
    extra.push("await c360Page.refreshPage()");
    extra.push("await c360Page.expectCustomer360ViewLoaded()");
  } else {
    for (const tab of tabs.slice(0, 5)) {
      extra.push(`await c360Page.openTab("${tab}")`);
    }
  }

  return withCustomer(row, extra);
}

export function mapC360TestLogic(row: C360ExcelRow): string {
  const sm = row.subModule;

  switch (sm) {
    case "Page Framework":
      return resolvePageFramework(row);
    case "Header Strip":
      return resolveHeaderStrip(row);
    case "Customer Type Switching":
      return resolveCustomerTypeSwitching(row);
    case "Overview Tab":
      return resolveOverviewTab(row);
    case "Risk Visualization":
      return resolveRiskVisualization(row);
    case "Relationships Tab":
      return resolveTabArea(row, "Relationships");
    case "Screening Tab":
      return resolveTabArea(row, "Screening");
    case "Risk Tab":
      return resolveTabArea(row, "Risk");
    case "KYC/CDD Tab":
      return resolveTabArea(row, "KYC/CDD");
    case "Accounts Tab":
      return resolveTabArea(row, "Accounts");
    case "Transactions Tab":
      return resolveTabArea(row, "Transactions");
    case "Alerts Tab":
      return resolveTabArea(row, "Alerts");
    case "Regulatory Reports Tab":
      return resolveTabArea(row, "Regulatory Reports");
    case "KYC Gap Report Tab":
      return resolveTabArea(row, "KYC Gap Report");
    case "Audit Tab":
      return resolveTabArea(row, "Audit");
    case "Global Navigation":
      return resolveGlobalNavigation(row);
    case "Export Functionality":
      return resolveExport(row);
    case "PII Masking":
      return resolvePiiMasking(row);
    case "Error Handling":
      return resolveErrorHandling(row);
    case "Accessibility":
      return resolveAccessibility(row);
    case "State Management":
      return resolveStateManagement(row);
    case "Global UI Consistency":
      return resolveGlobalUiConsistency(row);
    case "Browser Compatibility":
      return resolveBrowserCompatibility(row);
    case "Session Management":
      return resolveSessionManagement(row);
    case "Performance Validation":
      return resolvePerformance(row);
    case "Security Validation":
      return resolveSecurity(row);
    case "Usability Validation":
      return resolveUsability(row);
    case "Regression Validation":
      return resolveRegression(row);
    default:
      // TODO: Unknown sub-module — default to page load
      return finalizeLogic(
        "await c360Page.openCustomer360Direct(testData.baseUrl);\n    await c360Page.searchAndOpenCustomer(\"CUST1001\");\n    await c360Page.expectCustomer360ViewLoaded()",
        row,
      );
  }
}
