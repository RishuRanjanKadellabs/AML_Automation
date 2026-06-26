import { buildGapMatrixEntry } from "./gap-analysis";
import {
  extractAllCustomerIds,
  extractCaseId,
  extractCustomerId,
  extractResolution,
} from "./parser";
import type { C360ExcelRow, ExcelAlignedPhases } from "./types";

const OPEN = "await c360Page.openCustomer360Direct(testData.baseUrl)";

const TAB_ALIASES: Record<string, string> = {
  overview: "Overview",
  relationships: "Relationships",
  screening: "Screening",
  risk: "Risk",
  "kyc/cdd": "KYC/CDD",
  "kyc / cdd": "KYC/CDD",
  kyc: "KYC/CDD",
  cdd: "KYC/CDD",
  accounts: "Accounts",
  transactions: "Transactions",
  alerts: "Alerts",
  regulatory: "Regulatory Reports",
  "regulatory reports": "Regulatory Reports",
  "reg reports": "Regulatory Reports",
  "kyc gap report": "KYC Gap Report",
  gap: "KYC Gap Report",
  audit: "Audit",
};

export function escapeStr(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }
  const normalized = testSteps.replace(/(\d+)\.\s*/g, "\n$1. ").trim();
  return normalized
    .split(/\s*(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

function splitExpectedClauses(text: string): string[] {
  if (!text.trim()) {
    return [];
  }
  return text
    .split(/(?:\d+\.\s+|;\s+|\n+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
}

function pushUnique(steps: string[], step: string): void {
  if (step && !steps.includes(step)) {
    steps.push(step);
  }
}

function rowContext(row: C360ExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.preconditions} ${row.testData}`.toLowerCase();
}

function rowMatches(row: C360ExcelRow, ...patterns: string[]): boolean {
  const ctx = rowContext(row);
  return patterns.some((p) => ctx.includes(p.toLowerCase()));
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function customerIdForRow(row: C360ExcelRow): string {
  const ids = extractAllCustomerIds(row.testData);
  return ids[0] ?? extractCustomerId(row.testData);
}

function tabNameFromSubModule(subModule: string): string | null {
  const map: Record<string, string> = {
    "Overview Tab": "Overview",
    "Relationships Tab": "Relationships",
    "Screening Tab": "Screening",
    "Risk Tab": "Risk",
    "KYC/CDD Tab": "KYC/CDD",
    "Accounts Tab": "Accounts",
    "Transactions Tab": "Transactions",
    "Alerts Tab": "Alerts",
    "Regulatory Reports Tab": "Regulatory Reports",
    "KYC Gap Report Tab": "KYC Gap Report",
    "Audit Tab": "Audit",
  };
  return map[subModule] ?? null;
}

function resolveTabFromStep(step: string): string | null {
  const s = step.toLowerCase();
  for (const [key, label] of Object.entries(TAB_ALIASES)) {
    if (s.includes(`${key} tab`) || s.includes(`open ${key}`) || s === key) {
      return label;
    }
  }
  const generic = s.match(/open\s+([a-z/ ]+?)\s+tab/);
  if (generic?.[1]) {
    const key = generic[1].trim();
    return TAB_ALIASES[key] ?? null;
  }
  return null;
}

function switchTypeFromRow(row: C360ExcelRow): "individual" | "corporate" {
  const ids = extractAllCustomerIds(row.testData);
  if (ids.some((id) => id.startsWith("CORP"))) return "corporate";
  if (row.testData.toLowerCase().includes("corporate")) return "corporate";
  return "individual";
}

function normalizeStepOrder(steps: string[]): string[] {
  const customerSteps = steps.filter((s) => s.includes("searchAndOpenCustomer") || s.includes("openFirstCustomerProfile"));
  const rest = steps.filter((s) => !customerSteps.includes(s));
  if (customerSteps.length > 0 && rest.some((s) => s.includes("clickTab"))) {
    return [...customerSteps, ...rest];
  }
  return steps;
}

function needsCustomerProfile(row: C360ExcelRow): boolean {
  if (rowMatches(row, "unauthorized", "unauthenticated", "without customer", "without opening customer")) {
    return false;
  }
  const sm = row.subModule;
  if (["Session Management", "Security Validation"].includes(sm) && rowMatches(row, "unauthorized", "restricted", "session")) {
    return false;
  }
  return true;
}

export function buildGapTodoComment(row: C360ExcelRow): string | null {
  const gap = buildGapMatrixEntry(row);
  if (gap.testable === "Yes") {
    return null;
  }
  return `// TODO [${row.id}]: ${gap.missingInformation} — Excel/FSD gap; implement when product clarifies.`;
}

export function buildPreconditionActions(row: C360ExcelRow): string[] {
  const steps: string[] = [];
  const pre = row.preconditions.toLowerCase();

  if (
    rowMatches(row, "unauthorized", "unauthenticated", "restricted role", "restricted user", "logout") ||
    pre.includes("unauthorized") ||
    pre.includes("restricted")
  ) {
    pushUnique(steps, "await c360Page.mockUnauthorized()");
  }

  if (rowMatches(row, "session expire", "session timeout", "expired session") || pre.includes("session expire")) {
    pushUnique(steps, "await c360Page.mockSessionExpired()");
  }

  if (rowMatches(row, "api failure", "load failure", "server error") && !rowMatches(row, "timeout", "slow network")) {
    pushUnique(steps, "await c360Page.mockApiFailure()");
  }

  return steps;
}

export function buildExcelSetupActions(row: C360ExcelRow, preconditions: string[]): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);

  pushUnique(steps, OPEN);

  const resolution = extractResolution(row.testData);
  if (resolution) {
    pushUnique(steps, `await c360Page.setViewport(${resolution.width}, ${resolution.height})`);
  }

  if (numbered.some((s) => stepMatches(s, "slow network", "slow 3g", "throttl"))) {
    pushUnique(steps, "await c360Page.enableSlowNetwork()");
  }

  return steps;
}

function mapSingleStepToActions(step: string, row: C360ExcelRow): string[] {
  const actions: string[] = [];
  const s = step.toLowerCase();
  const customerId = customerIdForRow(row);
  const caseId = extractCaseId(row.testData);

  if (stepMatches(s, "login", "authenticate", "launch", "dashboard", "observe", "note ", "inspect", "check console", "measure load", "compare rendered")) {
    return actions;
  }

  if (stepMatches(s, "customer 360 module", "navigate to customer 360")) {
    actions.push("await c360Page.openCustomer360FromSidebar()");
    return actions;
  }

  if (
    stepMatches(s, "search and open", "search for", "open customer profile", "select customer", "open a valid customer", "open first customer profile", "open customer 360 page", "open customer 360 for")
  ) {
    const id = stepMatches(s, "first customer") ? customerId : customerId;
    actions.push(`await c360Page.searchAndOpenCustomer('${escapeStr(id)}')`);
    return actions;
  }

  if (stepMatches(s, "click individual toggle", "individual toggle")) {
    actions.push("await c360Page.switchCustomerType('individual')");
    return actions;
  }

  if (stepMatches(s, "click corporate toggle", "corporate toggle")) {
    actions.push("await c360Page.switchCustomerType('corporate')");
    return actions;
  }

  if (stepMatches(s, "switch customer type", "switch to corporate", "switch to individual")) {
    const type = stepMatches(s, "corporate") ? "corporate" : switchTypeFromRow(row);
    actions.push(`await c360Page.switchCustomerType('${type}')`);
    return actions;
  }

  const tab = resolveTabFromStep(step);
  if (tab) {
    actions.push(`await c360Page.clickTab('${escapeStr(tab)}')`);
    return actions;
  }

  if (stepMatches(s, "expand", "expand icon", "expand card")) {
    actions.push("await c360Page.expandFirstCard()");
    return actions;
  }

  if (stepMatches(s, "collapse", "collapse icon")) {
    actions.push("await c360Page.collapseFirstCard()");
    return actions;
  }

  if (stepMatches(s, "export", "download", "download statement")) {
    actions.push("await c360Page.exportCustomer360()");
    return actions;
  }

  if (stepMatches(s, "retry")) {
    actions.push("await c360Page.clickRetry()");
    return actions;
  }

  if (stepMatches(s, "re-screen")) {
    actions.push("await c360Page.clickReScreen()");
    return actions;
  }

  if (stepMatches(s, "refresh", "reload", "auto-refresh")) {
    actions.push("await c360Page.refreshData()");
    return actions;
  }

  if (stepMatches(s, "logout", "session expire", "unauthorized session", "allow session to expire", "remain inactive")) {
    actions.push("await c360Page.mockSessionExpired()");
    return actions;
  }

  if (stepMatches(s, "attempt module interaction", "module interaction", "attempt access")) {
    actions.push("await c360Page.openCustomer360FromSidebar()");
    return actions;
  }

  if (stepMatches(s, "press esc", "escape", "close modal")) {
    actions.push("await c360Page.pressEscape()");
    return actions;
  }

  if (stepMatches(s, "filter", "apply filter", "apply audit", "apply account", "apply transaction", "date range")) {
    const filterVal = caseId ?? "test";
    actions.push(`await c360Page.filterTabTable('${escapeStr(filterVal)}')`);
    return actions;
  }

  if (stepMatches(s, "pagination", "next page")) {
    actions.push("await c360Page.goToNextTabPage()");
    return actions;
  }

  if (stepMatches(s, "slow network", "throttl")) {
    actions.push("await c360Page.enableSlowNetwork()");
    return actions;
  }

  if (stepMatches(s, "direct tab", "modify url", "url manipulation", "restricted section")) {
    actions.push("await c360Page.attemptDirectRestrictedAccess()");
    return actions;
  }

  if (stepMatches(s, "browser back", "navigate back")) {
    actions.push("await c360Page.clickBrowserBack()");
    return actions;
  }

  if (stepMatches(s, "kpi card", "gap score kpi")) {
    actions.push("await c360Page.clickKpiCard()");
    return actions;
  }

  return actions;
}

export function buildExcelStepActions(row: C360ExcelRow): string[] {
  const numbered = parseNumberedSteps(row.testSteps);
  const steps: string[] = [];

  if (numbered.length === 0) {
    return buildFallbackSteps(row);
  }

  for (const step of numbered) {
    for (const action of mapSingleStepToActions(step, row)) {
      pushUnique(steps, action);
    }
  }

  const hasCustomer = steps.some((s) => s.includes("searchAndOpenCustomer"));
  if (needsCustomerProfile(row) && !hasCustomer) {
    pushUnique(steps, `await c360Page.searchAndOpenCustomer('${escapeStr(customerIdForRow(row))}')`);
  }

  const tab = tabNameFromSubModule(row.subModule);
  if (tab && !steps.some((l) => l.includes("clickTab"))) {
    pushUnique(steps, `await c360Page.clickTab('${escapeStr(tab)}')`);
  }

  if (steps.length === 0) {
    return buildFallbackSteps(row);
  }

  return normalizeStepOrder(steps);
}

function buildFallbackSteps(row: C360ExcelRow): string[] {
  const steps: string[] = [];
  const customerId = customerIdForRow(row);
  const tab = tabNameFromSubModule(row.subModule);
  const sm = row.subModule;

  if (rowMatches(row, "unauthorized", "unauthenticated", "session timeout") && !needsCustomerProfile(row)) {
    return steps;
  }

  if (sm === "Page Framework" || sm === "Global Navigation") {
    pushUnique(steps, "await c360Page.openCustomer360FromSidebar()");
    if (needsCustomerProfile(row)) {
      pushUnique(steps, `await c360Page.searchAndOpenCustomer('${escapeStr(customerId)}')`);
    }
  } else if (tab) {
    if (needsCustomerProfile(row)) {
      pushUnique(steps, `await c360Page.searchAndOpenCustomer('${escapeStr(customerId)}')`);
    }
    pushUnique(steps, `await c360Page.clickTab('${escapeStr(tab)}')`);
  } else if (sm === "Export Functionality") {
    pushUnique(steps, `await c360Page.searchAndOpenCustomer('${escapeStr(customerId)}')`);
    pushUnique(steps, "await c360Page.exportCustomer360()");
  } else if (sm === "Error Handling") {
    pushUnique(steps, "await c360Page.mockApiFailure()");
  } else if (needsCustomerProfile(row)) {
    pushUnique(steps, `await c360Page.searchAndOpenCustomer('${escapeStr(customerId)}')`);
  }

  return normalizeStepOrder(steps);
}

function buildAssertionFromClause(c: string, row: C360ExcelRow): string[] {
  const out: string[] = [];
  const push = (s: string): void => pushUnique(out, s);
  const caseId = extractCaseId(row.testData);

  if (/customer 360 page.*load|page.*load.*success|rendered correctly|loads within acceptable/i.test(c)) {
    push("await c360Page.expectCustomer360ProfileLoaded()");
  }
  if (/lookup|search box|search page|landing/i.test(c) && !/profile|tab|kpi|widget/i.test(c)) {
    push("await c360Page.expectCustomer360LandingLoaded()");
  }
  if (/overview tab.*selected|overview tab.*active|default.*overview/i.test(c)) {
    push("await c360Page.expectOverviewTabActive()");
  }
  if (/customer name|customer identifier|header strip|pep badge|risk score badge/i.test(c)) {
    push("await c360Page.expectHeaderStripVisible()");
  }
  if (/kpi|widget|tile/i.test(c)) {
    push("await c360Page.expectKpiCardsVisible()");
  }
  if (/all tabs|tab bar|tabs should/i.test(c)) {
    push("await expect(c360Page.tabList).toBeVisible()");
  }
  if (/case id/i.test(c) && caseId) {
    push(`await c360Page.expectCaseIdVisible('${escapeStr(caseId)}')`);
  }
  if (/screening status|history record/i.test(c)) {
    push("await c360Page.expectScreeningStatusVisible()");
  }
  if (/relationship/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Relationships')");
  }
  if (/screening/i.test(c) && !/screening status/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Screening')");
  }
  if (/risk visualization|donut|chart|risk breakdown/i.test(c)) {
    push("await c360Page.expectRiskVisualizationVisible()");
  }
  if (/account/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Accounts')");
  }
  if (/transaction/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Transactions')");
  }
  if (/alert/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Alerts')");
  }
  if (/audit/i.test(c)) {
    push("await c360Page.expectTabContentVisible('Audit')");
  }
  if (/gap report|missing field|kyc gap/i.test(c)) {
    push("await c360Page.expectTabContentVisible('KYC Gap Report')");
  }
  if (/kyc record|document information|stale|should not remain visible|rerender/i.test(c)) {
    push("await c360Page.expectKycDataRefreshedAfterTypeSwitch()");
  }
  if (/loader|skeleton|loading/i.test(c)) {
    push("await c360Page.expectLoadingOrSkeletonVisible()");
  }
  if (/export|download/i.test(c)) {
    push("await expect(c360Page.exportButton).toBeVisible()");
  }
  if (/mask|pii|redact/i.test(c)) {
    push("await c360Page.expectPiiMasked()");
  }
  if (/error|unable to load|failure/i.test(c) && !/without.*error|no error|no frontend|without layout issues or frontend errors/i.test(c)) {
    push("await c360Page.expectErrorState()");
  }
  if (/empty|no data|no record/i.test(c)) {
    push("await c360Page.expectEmptyState()");
  }
  if (/unauthorized|access denied|cannot access|not accessible|forbidden|inaccessible/i.test(c)) {
    push("await c360Page.expectAccessDenied()");
  }
  if (/individual|corporate|customer type/i.test(c)) {
    push("await c360Page.expectCustomerTypeSwitchVisible()");
  }
  if (/table|grid|list|row|column/i.test(c)) {
    push("await c360Page.expectTabTableVisible()");
  }
  if (/route|url|navigat/i.test(c) && /customer 360/i.test(c)) {
    push("await c360Page.expectOnCustomer360Route()");
  }
  if (/retain|persist|state|preserved/i.test(c)) {
    push("await c360Page.expectCustomer360ViewLoaded()");
  }
  if (/performance|load duration|threshold|acceptable time/i.test(c)) {
    push("await c360Page.expectPageLoadPerformanceRecorded()");
  }

  return out;
}

export function buildExcelAssertionActions(row: C360ExcelRow): string[] {
  const steps: string[] = [];
  const er = row.expectedResult.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const clauses = [
    ...splitExpectedClauses(row.expectedResult),
    ...splitExpectedClauses(row.acceptanceCriteria),
  ];

  for (const clause of clauses) {
    for (const assertion of buildAssertionFromClause(clause, row)) {
      pushUnique(steps, assertion);
    }
  }

  if (steps.length === 0) {
    if (task.includes("unauthorized") || task.includes("unauthenticated")) {
      pushUnique(steps, "await c360Page.expectAccessDenied()");
    } else if (task.includes("error") || row.subModule === "Error Handling") {
      pushUnique(steps, "await c360Page.expectErrorState()");
    } else if (task.includes("export")) {
      pushUnique(steps, "await expect(c360Page.exportButton).toBeVisible()");
    } else if (er.includes("overview")) {
      pushUnique(steps, "await c360Page.expectOverviewTabActive()");
    } else if (tabNameFromSubModule(row.subModule)) {
      pushUnique(steps, `await c360Page.expectTabContentVisible('${escapeStr(tabNameFromSubModule(row.subModule)!)}')`);
    } else {
      pushUnique(steps, "await c360Page.expectCustomer360ViewLoaded()");
    }
  }

  return steps;
}

export function buildExcelAlignedPhases(row: C360ExcelRow): ExcelAlignedPhases {
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
