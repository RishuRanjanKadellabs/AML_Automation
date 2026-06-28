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

/**
 * Scenario context deliberately EXCLUDES the verbose "expectedResult" /
 * "acceptanceCriteria" validation boilerplate, which contains generic phrases
 * (e.g. "no unauthorized data exposure occurs", "loading indicators appear")
 * for every row. Using those for precondition/assertion selection would make
 * every test simultaneously a happy-path, an unauthorized, and an error test.
 * Selection must be driven by the actual scenario instead.
 */
function scenarioContext(row: C360ExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.preconditions} ${row.testData}`.toLowerCase();
}

function scenarioMatches(row: C360ExcelRow, ...patterns: string[]): boolean {
  const ctx = scenarioContext(row);
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
  const ctx = rowContext(row);
  if (/corporate|non-individual|kumar global|traders/i.test(ctx)) return "corporate";
  return "individual";
}

function openProfileAction(row: C360ExcelRow): string {
  const customerId = customerIdForRow(row);
  return `await c360Page.openCustomerProfile('${escapeStr(customerId)}')`;
}

function normalizeStepOrder(steps: string[]): string[] {
  const customerSteps = steps.filter((s) => s.includes("searchAndOpenCustomer") || s.includes("openFirstCustomerProfile"));
  const rest = steps.filter((s) => !customerSteps.includes(s));
  if (customerSteps.length > 0 && rest.some((s) => s.includes("clickTab"))) {
    return [...customerSteps, ...rest];
  }
  return steps;
}

function isNegativeAccessScenario(row: C360ExcelRow): boolean {
  return scenarioMatches(
    row,
    "unauthorized",
    "unauthenticated",
    "restricted role",
    "restricted user",
    "without login",
    "access denied",
    "forbidden",
    "session expire",
    "session timeout",
    "expired session",
    "without opening customer",
    "without customer",
  );
}

function needsCustomerProfile(row: C360ExcelRow): boolean {
  if (isNegativeAccessScenario(row)) {
    return false;
  }
  const sm = row.subModule;
  if (["Session Management", "Security Validation"].includes(sm) && scenarioMatches(row, "unauthorized", "restricted", "session")) {
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

  const sessionExpiry = scenarioMatches(row, "session expire", "session timeout", "expired session");
  if (sessionExpiry) {
    pushUnique(steps, "await c360Page.mockSessionExpired()");
  } else if (scenarioMatches(row, "unauthorized", "unauthenticated", "restricted role", "restricted user", "logout", "access denied", "forbidden")) {
    pushUnique(steps, "await c360Page.mockUnauthorized()");
  }

  if (
    scenarioMatches(row, "api failure", "load failure", "server error", "unable to load") &&
    !scenarioMatches(row, "timeout", "slow network")
  ) {
    pushUnique(steps, "await c360Page.mockApiFailure()");
  }

  // Error-handling scenarios assert an error/retry state. If no failure-inducing
  // mock has been configured from the step text, inject a generic API failure so
  // the asserted error state is actually reproducible (and not a guaranteed miss).
  if (
    isErrorScenario(row) &&
    !isNegativeAccessScenario(row) &&
    steps.length === 0
  ) {
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

  if (stepMatches(s, "login", "authenticate", "launch", "dashboard", "observe", "note ", "inspect", "check console", "measure load", "compare rendered", "login page", "credentials")) {
    return actions;
  }

  if (stepMatches(s, "kyc module", "navigate to the kyc")) {
    actions.push("await c360Page.openCustomer360FromSidebar()");
    return actions;
  }

  if (stepMatches(s, "customer 360 module", "navigate to customer 360", "open customer 360 view")) {
    actions.push("await c360Page.openCustomer360FromSidebar()");
    return actions;
  }

  if (
    stepMatches(s, "open the customer 360 profile", "open customer profile", "open customer 360 profile", "open the customer profile")
  ) {
    actions.push(openProfileAction(row));
    return actions;
  }

  if (
    stepMatches(s, "search and open", "search for", "select customer", "open a valid customer", "open first customer profile", "open customer 360 page", "open customer 360 for")
  ) {
    actions.push(openProfileAction(row));
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

  if (
    stepMatches(s, "navigate across", "across all tabs", "each tab", "all tabs", "rapid tab", "tab navigation", "switch between tabs")
  ) {
    actions.push("await c360Page.clickTab('Overview')");
    actions.push("await c360Page.clickTab('Screening')");
    actions.push("await c360Page.clickTab('Risk')");
    return actions;
  }

  if (stepMatches(s, "kpi card", "gap score kpi")) {
    actions.push("await c360Page.clickKpiCard()");
    return actions;
  }

  return actions;
}

/**
 * In a negative-access scenario (session expired / unauthorized / restricted),
 * the Customer 360 page renders an "Access Denied" shell. Any content action
 * (open profile, click tab, export, switch type) would target controls that do
 * not exist and time out. Only access-attempt and mock actions are meaningful.
 */
function filterNegativeAccessSteps(steps: string[]): string[] {
  const allowed = [
    "openCustomer360FromSidebar",
    "openCustomer360Direct",
    "attemptDirectRestrictedAccess",
    "mockSessionExpired",
    "mockUnauthorized",
    "mockApiFailure",
    "clickRetry",
    "clickBrowserBack",
  ];
  const filtered = steps.filter((s) => allowed.some((a) => s.includes(a)));
  if (!filtered.some((s) => s.includes("openCustomer360FromSidebar") || s.includes("attemptDirectRestrictedAccess"))) {
    filtered.push("await c360Page.openCustomer360FromSidebar()");
  }
  return filtered;
}

export function buildExcelStepActions(row: C360ExcelRow): string[] {
  const numbered = parseNumberedSteps(row.testSteps);
  const steps: string[] = [];

  if (numbered.length === 0) {
    return isNegativeAccessScenario(row)
      ? filterNegativeAccessSteps(buildFallbackSteps(row))
      : buildFallbackSteps(row);
  }

  for (const step of numbered) {
    for (const action of mapSingleStepToActions(step, row)) {
      pushUnique(steps, action);
    }
  }

  if (isNegativeAccessScenario(row)) {
    return filterNegativeAccessSteps(steps);
  }

  const hasCustomer = steps.some((s) => s.includes("openCustomerProfile") || s.includes("searchAndOpenCustomer"));
  if (needsCustomerProfile(row) && !hasCustomer) {
    pushUnique(steps, openProfileAction(row));
  }

  const tab = tabNameFromSubModule(row.subModule);
  if (tab && !steps.some((l) => l.includes("clickTab"))) {
    pushUnique(steps, `await c360Page.clickTab('${escapeStr(tab)}')`);
  }

  if (row.subModule === "Global Navigation" && !steps.some((l) => l.includes("clickTab"))) {
    pushUnique(steps, "await c360Page.clickTab('Overview')");
    pushUnique(steps, "await c360Page.clickTab('Screening')");
    pushUnique(steps, "await c360Page.clickTab('Risk')");
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

  if (isNegativeAccessScenario(row) && !needsCustomerProfile(row)) {
    return steps;
  }

  if (sm === "Page Framework") {
    pushUnique(steps, "await c360Page.openCustomer360FromSidebar()");
    if (needsCustomerProfile(row)) {
      pushUnique(steps, openProfileAction(row));
    }
  } else if (sm === "Global Navigation") {
    pushUnique(steps, "await c360Page.openCustomer360FromSidebar()");
    pushUnique(steps, openProfileAction(row));
    pushUnique(steps, "await c360Page.clickTab('Overview')");
    pushUnique(steps, "await c360Page.clickTab('Screening')");
    pushUnique(steps, "await c360Page.clickTab('Risk')");
  } else if (tab) {
    if (needsCustomerProfile(row)) {
      pushUnique(steps, openProfileAction(row));
    }
    pushUnique(steps, `await c360Page.clickTab('${escapeStr(tab)}')`);
  } else if (sm === "Export Functionality") {
    pushUnique(steps, openProfileAction(row));
    pushUnique(steps, "await c360Page.exportCustomer360()");
  } else if (sm === "Error Handling") {
    pushUnique(steps, "await c360Page.mockApiFailure()");
  } else if (needsCustomerProfile(row)) {
    pushUnique(steps, openProfileAction(row));
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

function isErrorScenario(row: C360ExcelRow): boolean {
  if (row.subModule === "Error Handling") {
    return true;
  }
  return (
    scenarioMatches(row, "api failure", "load failure", "server error", "unable to load", "error state", "retry") &&
    !scenarioMatches(row, "without error", "no error", "slow network")
  );
}

function isEmptyScenario(row: C360ExcelRow): boolean {
  return scenarioMatches(row, "empty state", "no data", "no record", "no alert", "no relationship", "zero results");
}

function isLandingScenario(row: C360ExcelRow): boolean {
  if (needsCustomerProfile(row)) {
    return false;
  }
  return scenarioMatches(row, "lookup", "search box", "search page", "landing", "customer search", "search for a customer");
}

/**
 * Positive scenarios should assert only what the scenario exercises. We derive
 * candidate assertions from the task description (the scenario), then drop
 * negative-path and cross-tab assertions that would never be reachable in a
 * happy-path test (those caused the contradictory all-fail behaviour).
 */
function buildPositiveAssertions(row: C360ExcelRow): string[] {
  const ownTab = tabNameFromSubModule(row.subModule);
  const profileOpened = needsCustomerProfile(row);
  const out: string[] = [];

  // Global Navigation scenarios often end on landing or profile after back/refresh;
  // assert whichever valid Customer 360 shell is present rather than forcing profile.
  if (row.subModule === "Global Navigation") {
    pushUnique(out, "await c360Page.expectCustomer360ViewAfterNavigation()");
    pushUnique(out, "await c360Page.expectOnCustomer360Route()");
  } else {
    pushUnique(out, profileOpened ? "await c360Page.expectCustomer360ProfileLoaded()" : "await c360Page.expectCustomer360LandingLoaded()");
  }

  const candidates = [
    ...splitExpectedClauses(row.taskDescription),
    ...splitExpectedClauses(row.acceptanceCriteria),
  ];

  const negativeAssertions = new Set([
    "await c360Page.expectAccessDenied()",
    "await c360Page.expectErrorState()",
    "await c360Page.expectEmptyState()",
  ]);

  for (const clause of candidates) {
    for (const assertion of buildAssertionFromClause(clause, row)) {
      if (negativeAssertions.has(assertion)) {
        continue;
      }
      // Only assert tab content for the tab this scenario actually opens.
      const tabMatch = assertion.match(/expectTabContentVisible\('([^']+)'\)/);
      if (tabMatch && ownTab && tabMatch[1] !== ownTab) {
        continue;
      }
      pushUnique(out, assertion);
    }
  }

  if (ownTab && !out.some((a) => a.includes(`expectTabContentVisible('${ownTab}'`))) {
    pushUnique(out, `await c360Page.expectTabContentVisible('${escapeStr(ownTab)}')`);
  }

  return out;
}

export function buildExcelAssertionActions(row: C360ExcelRow): string[] {
  if (isNegativeAccessScenario(row)) {
    return ["await c360Page.expectAccessDenied()"];
  }

  if (isErrorScenario(row)) {
    return ["await c360Page.expectErrorState()"];
  }

  if (isEmptyScenario(row)) {
    const base = needsCustomerProfile(row)
      ? "await c360Page.expectCustomer360ProfileLoaded()"
      : "await c360Page.expectCustomer360LandingLoaded()";
    return [base, "await c360Page.expectEmptyState()"];
  }

  if (isLandingScenario(row)) {
    return ["await c360Page.expectCustomer360LandingLoaded()"];
  }

  const steps = buildPositiveAssertions(row);
  if (steps.length === 0) {
    pushUnique(steps, "await c360Page.expectCustomer360ViewLoaded()");
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
