import { parseNumberedSteps } from "./excel-intent";
import { extractResolution } from "./parser";
import { mapRowToFsd } from "./fsd-mapper";
import { getCatalogEntry, type FsdCatalogEntry } from "./fsd-catalog";
import { panelForSubModule, type HtmlInventory } from "./html-inventory";
import {
  CUSTOMER_PROFILES,
  PRIMARY_CUSTOMER_ID,
  resolveCustomerFromContext,
  type CustomerProfile,
} from "./customer-data";
import type { C360ExcelRow, EnhancedC360Row, GapTestCaseSpec } from "./types";
import type { FsdSection } from "./fsd-index";

const BLOCKED_TEST_DATA: Record<string, string> = {
  "C360-TC-301": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; Format: PDF; Scope: Full Customer 360; File name pattern: C360_{CustomerID}_{timestamp}.pdf`,
  "C360-TC-302": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; Format: XLSX; Scope: Overview Tab; File name pattern: C360_Overview_{CustomerID}_{timestamp}.xlsx`,
  "C360-TC-341": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; Browsers: Chrome 120+, Edge 120+, Firefox 115+; Resolution: 1920x1080`,
  "C360-TC-342": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.pep.name}; Browsers: Chrome 120+, Safari 17+, Edge 120+; Resolution: 1366x768`,
  "C360-TC-346": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; SLA: Initial page load ≤ 3000ms; Network: Normal`,
  "C360-TC-347": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; SLA: Tab switch ≤ 1500ms; Network: Normal`,
  "C360-TC-348": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.pep.name}; SLA: Widget render ≤ 2000ms; Network: Slow 3G`,
  "C360-TC-349": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.corporate.name}; SLA: Customer type switch ≤ 2000ms; Network: Normal`,
  "C360-TC-350": `Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; SLA: Export generation ≤ 5000ms; Format: PDF`,
  "C360-TC-351": `Role: KYC Analyst (read-only); Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; Credentials: test env vault KYC_ANALYST_RO`,
  "C360-TC-352": `Role: Compliance Officer (full access); Customer ID: ${PRIMARY_CUSTOMER_ID}; Customer Name: ${CUSTOMER_PROFILES.individual.name}; Credentials: test env vault COMP_OFFICER`,
};

function rowContext(row: C360ExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.expectedResult} ${row.testData}`.toLowerCase();
}

function resolveCustomer(row: C360ExcelRow): CustomerProfile {
  return resolveCustomerFromContext(rowContext(row));
}

function sanitizeIds(text: string, cust: CustomerProfile): string {
  return text.replace(/\b(?:CUST|IND|CORP|PEP|ADV|EMPTYREL|EMPTY)\d+\b/gi, cust.id);
}

function isSecurityOrSessionOnly(row: C360ExcelRow): boolean {
  return (
    row.subModule === "Security Validation" ||
    row.subModule === "Session Management" ||
    /unauthorized|unauthenticated|session expire|session timeout|without login/i.test(rowContext(row))
  );
}

function isPerformanceCase(row: C360ExcelRow): boolean {
  return row.subModule === "Performance Validation" || /performance|load time|sla|threshold|latency/i.test(rowContext(row));
}

function isBrowserCase(row: C360ExcelRow): boolean {
  return row.subModule === "Browser Compatibility" || /browser|safari|firefox|edge|chrome/i.test(rowContext(row));
}

function tabForSubModule(subModule: string): string | null {
  const map: Record<string, string> = {
    "Overview Tab": "Overview",
    "Risk Visualization": "Overview",
    "Relationships Tab": "Relationships",
    "Screening Tab": "Screening",
    "Risk Tab": "Risk",
    "KYC/CDD Tab": "KYC / CDD",
    "Accounts Tab": "Accounts",
    "Transactions Tab": "Transactions",
    "Alerts Tab": "Alerts",
    "Regulatory Reports Tab": "Reg Reports",
    "KYC Gap Report Tab": "KYC Gap Report",
    "Audit Tab": "Audit",
  };
  return map[subModule] ?? null;
}

function buildStandardPreamble(row: C360ExcelRow): string[] {
  const cust = resolveCustomer(row);

  if (isSecurityOrSessionOnly(row)) {
    return [
      "Configure the user role or session state described in test data (restricted, expired, or unauthorized).",
      "Attempt to access the Customer 360 View under the configured condition.",
    ];
  }

  const steps = [
    "Navigate to the KYC module from the primary application navigation menu.",
    "Open Customer 360 View from the KYC module menu or sidebar.",
    `Open the Customer 360 profile for ${cust.name} (Customer ID ${cust.id}).`,
    "Verify the Customer 360 profile opens and displays the correct customer record.",
    "Verify Customer 360 shell loads with header strip, customer type switcher, and tab bar visible.",
  ];

  const tab = tabForSubModule(row.subModule);
  if (tab && tab !== "Overview") {
    steps.push(`Navigate to the ${tab} tab and verify it becomes the active tab.`);
  } else if (tab === "Overview" || row.subModule === "Page Framework" || row.subModule === "Header Strip") {
    steps.push("Verify Overview tab is selected by default with active tab styling applied.");
  }

  return steps;
}

const LOGIN_STEP_PATTERN =
  /login|log\s?in|sign\s?in|launch the application|launch the aml|launch application|enter (?:valid )?credential|submit login|authenticat|navigate to dashboard|dashboard landing|search for customer using customer id|search customer using customer id|cust1001/i;

function isLoginOrSearchStep(step: string): boolean {
  return LOGIN_STEP_PATTERN.test(step);
}

function buildScenarioSteps(row: C360ExcelRow, inventory: HtmlInventory, fsd: FsdCatalogEntry | undefined): string[] {
  const original = parseNumberedSteps(row.testSteps);
  const steps: string[] = [];
  const ctx = rowContext(row);
  const cust = resolveCustomer(row);
  const panel = panelForSubModule(row.subModule);
  const tab = tabForSubModule(row.subModule);

  for (const step of original) {
    const normalized = sanitizeIds(step.trim(), cust);
    if (normalized.length > 5 && !isLoginOrSearchStep(normalized)) {
      steps.push(normalized.charAt(0).toUpperCase() + normalized.slice(1));
    }
  }

  if (row.subModule === "Customer Type Switching" || /switch.*customer type|individual|corporate|non-individual/i.test(ctx)) {
    if (!steps.some((s) => /individual|corporate|non-individual/i.test(s))) {
      steps.push("Locate the Customer Type switcher in the header area below the top navigation bar.");
      steps.push("Click the Individual customer type button and verify Individual mode activates.");
      steps.push("Click the Non-Individual customer type button and verify Corporate mode activates.");
    }
    steps.push("Verify header strip, avatar, and identifier fields update for the selected customer type.");
    steps.push("Verify all visible widgets rerender without full page reload.");
  }

  if (row.subModule === "Header Strip" || /header strip|badge|pep|adverse|risk score|alert count|str|sar/i.test(ctx)) {
    steps.push("Verify customer full name displays in the header strip with correct font weight and truncation handling.");
    steps.push("Verify customer unique identifier and metadata tags render in the header row.");
    steps.push("Verify risk score badge color coding matches the customer risk classification.");
    steps.push("Verify PEP, adverse media, alert count, and STR/SAR indicators when applicable.");
    steps.push("Hover over truncated header values and verify tooltip displays full value if truncated.");
  }

  if (row.subModule === "Overview Tab" || row.subModule === "Risk Visualization") {
    const panelCards = inventory.cards.filter((c) => c.label.length > 3).slice(0, 8);
    steps.push("Verify all six Overview KPI tiles render: Risk Profile, KYC Status, Active Alerts, Total Accounts, Regulatory Reports, KYC Gap Score.");
    for (const kpi of inventory.kpiTiles) {
      steps.push(`Verify ${kpi.label} tile label, value, and sub-text display correctly.`);
    }
    for (const card of panelCards.slice(0, 5)) {
      if (!steps.some((s) => s.includes(card.label))) {
        steps.push(`Verify "${card.label}" card header, body content, and field alignment in Overview tab.`);
      }
    }
    if (/risk donut|donut chart|risk wheel|risk visualization/i.test(ctx)) {
      steps.push("Verify Risk Donut Chart / risk wheel renders with correct segment colors and legend.");
      steps.push("Hover over chart segments and verify tooltip displays segment name and percentage.");
    }
    if (/transaction metric|cash|cross-border|unusual/i.test(ctx)) {
      steps.push("Verify Transaction Metrics section displays Avg Daily, Avg Monthly, and Total YTD values.");
      steps.push("Verify Cash vs Non-Cash ratio bar visualization renders with correct proportions.");
    }
    if (/relationship|screening summary|key relationship/i.test(ctx)) {
      steps.push("Verify Key Relationships and Screening Matches widgets display linked entity names and counts.");
    }
  }

  if (row.subModule === "Relationships Tab") {
    steps.push("Verify relationship cards display entity name, relationship type label, and relationship count.");
    steps.push("Expand a relationship card and verify additional linked entity details are revealed.");
    steps.push("Collapse the expanded relationship card and verify details are hidden.");
    if (/graphical link|link analysis/i.test(ctx)) {
      steps.push("Locate Graphical Link Analysis shortcut and verify navigation behavior.");
    }
    if (/pep/i.test(ctx)) {
      steps.push("Verify PEP-linked relationship banner and badge styling for flagged relationships.");
    }
  }

  if (row.subModule === "Screening Tab") {
    steps.push("Verify Sanctions Screening section displays match score, list source, and jurisdiction.");
    steps.push("Verify PEP Screening section displays political role and relationship type where applicable.");
    steps.push("Verify Adverse Media section displays risk classification and match score.");
    steps.push("Verify Screening History table displays trigger type, status, Case ID, and screened list name.");
    if (/re-screen|rescreen/i.test(ctx)) {
      steps.push("Locate Re-Screen button and click to initiate re-screening process.");
      steps.push("Verify loading indicator appears and Re-Screen button becomes disabled during processing.");
    }
    if (/auto-refresh|autorefresh/i.test(ctx)) {
      steps.push("Locate Auto-Refresh toggle and verify enable/disable state changes persist.");
    }
  }

  if (row.subModule === "Risk Tab") {
    steps.push("Verify composite risk score circle displays with correct color coding.");
    steps.push("Verify Risk Gauge visualization and Risk Factor table with names, scores, and weights.");
    steps.push("Verify Risk Breakdown categories expand and collapse correctly.");
    if (/override|manual/i.test(ctx)) {
      steps.push("Verify manual risk override banner displays reason and timestamp when override is active.");
    }
    if (/history|timeline/i.test(ctx)) {
      steps.push("Verify Risk History Timeline entries are in chronological order with correct event descriptions.");
    }
  }

  if (row.subModule === "KYC/CDD Tab") {
    steps.push("Verify CDD Level, Last Review Date, and Next Review Date display in the KYC summary strip.");
    steps.push("Verify Submitted Documents table displays document name, verification status, and submission date.");
    steps.push("Verify Source of Funds and Source of Wealth sections render with expected financial profile data.");
    if (/edd|enhanced due diligence/i.test(ctx)) {
      steps.push("Verify EDD-specific sections display for EDD customers and remain hidden for standard CDD customers.");
    }
    if (/start new review/i.test(ctx)) {
      steps.push("Locate Start New Review button and verify click initiates the KYC review workflow.");
    }
  }

  if (row.subModule === "Accounts Tab") {
    steps.push("Verify accounts table displays account number, type, status, balance, and branch columns.");
    steps.push("Verify account status pills use correct color coding for Active, Dormant, and Escalated states.");
    if (/sort|filter|pagination|search/i.test(ctx)) {
      steps.push("Apply table sort, filter, or pagination controls and verify data updates correctly.");
    }
  }

  if (row.subModule === "Transactions Tab") {
    steps.push("Verify transactions table displays date, type, amount, channel, and counterparty columns.");
    steps.push("Verify transaction amount formatting uses correct currency and locale conventions.");
    if (/filter|date range|search/i.test(ctx)) {
      steps.push("Apply transaction filters or date range and verify filtered results match criteria.");
    }
  }

  if (row.subModule === "Alerts Tab") {
    steps.push("Verify alert summary bar displays active alert count and closed alert count.");
    steps.push("Verify alerts table displays alert ID, type, severity, status, and assigned user columns.");
    if (/escalat|view alert|hyperlink/i.test(ctx)) {
      steps.push("Verify alert hyperlinks navigate to the correct alert detail view.");
    }
  }

  if (row.subModule === "Regulatory Reports Tab") {
    steps.push("Verify Regulatory Report Summary table displays report type, last filed date, Case ID, and status.");
    steps.push("Verify report status pills display Filed and Not Filed states with correct styling.");
    steps.push("Verify View action links navigate to the regulatory report detail.");
  }

  if (row.subModule === "KYC Gap Report Tab") {
    steps.push("Verify KYC Gap Report header, description, and Export button visibility.");
    steps.push("Verify KPI summary strip displays KYC Gap Score, Missing Fields count, and Template Applied.");
    steps.push("Verify Missing Fields Detail rows display field name, description, and mandatory weight badge.");
  }

  if (row.subModule === "Audit Tab") {
    steps.push("Verify Full Audit Trail table displays Log ID, Category, Action, Details, User, and Timestamp columns.");
    steps.push("Verify audit entries are sorted with most recent activity first or in documented chronological order.");
  }

  if (row.subModule === "Export Functionality") {
    steps.push("Locate Export button in the top navigation bar.");
    steps.push("Click Export and verify export dialog or download initiates.");
    steps.push("Verify exported file format, scope, and file naming match test data specifications.");
  }

  if (row.subModule === "Global Navigation") {
    steps.push("Verify breadcrumb navigation displays correct module path.");
    steps.push("Verify tab bar horizontal scroll behavior when viewport is narrow.");
    steps.push("Verify browser back and forward navigation preserve Customer 360 context where applicable.");
  }

  if (row.subModule === "PII Masking") {
    steps.push("Verify PII fields such as account numbers, phone, and email display masked values per policy.");
    steps.push("Verify masked fields reveal full value only when authorized user has unmask permission.");
  }

  if (row.subModule === "Error Handling") {
    steps.push("Simulate or trigger the error condition described in test data.");
    steps.push("Verify user-friendly error message displays without exposing internal system details.");
    steps.push("Verify Retry or recovery action is available where specified in the requirements.");
  }

  if (row.subModule === "Accessibility") {
    steps.push("Verify keyboard navigation reaches all interactive controls in logical tab order.");
    steps.push("Verify focus indicators are visible on tabs, buttons, and form controls.");
    steps.push("Verify ARIA labels and roles are present on primary navigation and tab elements.");
  }

  if (row.subModule === "State Management") {
    steps.push("Perform the state-changing action described in the original test steps.");
    steps.push("Refresh the browser and verify persisted state or expected reset behavior.");
    steps.push("Open Customer 360 in a second browser tab and verify session consistency.");
  }

  if (isPerformanceCase(row)) {
    steps.push("Open browser developer tools Performance or Network panel.");
    steps.push("Record page load or tab switch timing and compare against SLA thresholds in test data.");
    steps.push("Verify no memory leaks or runaway network requests during the measured operation.");
  }

  if (isBrowserCase(row)) {
    steps.push("Repeat the test scenario in each browser version listed in test data.");
    steps.push("Verify layout, fonts, and interactive controls render consistently across browsers.");
  }

  if (isSecurityOrSessionOnly(row)) {
    steps.push("Attempt access with the restricted role or expired session per test data.");
    steps.push("Verify unauthorized access is blocked with appropriate message or redirect.");
  }

  if (panel) {
    steps.push("Verify the active content area matches the approved Customer 360 design and layout.");
  }

  if (fsd) {
    const refs = fsd.bullets.slice(0, 2).map((b) => b.text.slice(0, 80));
    for (const ref of refs) {
      if (ref.length > 15) {
        steps.push(`Verify behavior aligns with the documented requirement: ${ref}.`);
      }
    }
  }

  if (tab && !steps.some((s) => s.includes("active tab styling"))) {
    steps.push(`Confirm ${tab} tab remains active and content area displays the correct panel.`);
  }

  return steps;
}

function buildValidationTail(row: C360ExcelRow): string[] {
  const tail: string[] = [];

  if (!isSecurityOrSessionOnly(row)) {
    tail.push("Verify UI alignment, spacing, and responsive layout without overlap or clipping.");
  }

  tail.push("Cross-reference displayed values and behavior against the documented business requirements.");
  tail.push("Compare visible labels, controls, and layout against the approved Customer 360 design.");
  tail.push("Verify no JavaScript console errors or broken network requests during test execution.");

  if (row.subModule !== "Session Management") {
    tail.push("Verify workflow continuity: breadcrumb, active tab state, and navigation context remain correct.");
  }

  const resolution = extractResolution(row.testData);
  if (resolution) {
    tail.push(`Verify layout at resolution ${resolution.width}x${resolution.height} matches responsive design expectations.`);
  }

  return tail;
}

function dedupeSteps(steps: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of steps) {
    const key = s.toLowerCase().replace(/\s+/g, " ").trim();
    if (!seen.has(key) && key.length > 8) {
      seen.add(key);
      out.push(s);
    }
  }
  return out;
}

function numberSteps(steps: string[]): string {
  return steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
}

function buildPreconditions(row: C360ExcelRow, fsd: FsdCatalogEntry | undefined): string {
  const cust = resolveCustomer(row);
  const lines: string[] = [
    "AML application is accessible and test environment is available.",
  ];

  if (isSecurityOrSessionOnly(row)) {
    lines.push("Test user role or session state is configured per test data (restricted, expired, or unauthorized).");
  } else {
    lines.push("Valid AML user with Customer 360 module access is available.");
    lines.push(`Test customer ${cust.name} (Customer ID ${cust.id}) exists in CBS/KYC with profile data matching test scenario.`);
  }

  if (row.subModule === "Customer Type Switching" || /corporate|individual|corp|ind/i.test(row.testData)) {
    lines.push("Customer profile supports both Individual and Corporate viewing modes.");
  }

  if (/pep/i.test(rowContext(row))) {
    lines.push("Test customer has PEP linkage or screening flag configured in backend.");
  }

  if (/slow network|slow 3g|throttl/i.test(rowContext(row))) {
    lines.push("Browser network throttling is enabled to simulate slow network conditions.");
  }

  if (/alert/i.test(rowContext(row)) && !/no alert/i.test(rowContext(row))) {
    lines.push("Customer has active alerts configured in the alert management service.");
  }

  if (fsd?.businessRules.length) {
    lines.push(`Business context: ${fsd.businessRules[0].slice(0, 120)}.`);
  }

  lines.push("Database/backend services for customer, screening, risk, and audit data are operational.");

  return lines.map((l, i) => `${i + 1}. ${l}`).join("\n");
}

function buildExpectedResult(row: C360ExcelRow, fsd: FsdCatalogEntry | undefined): string {
  const original = row.expectedResult.trim();
  const cust = resolveCustomer(row);
  const sections: string[] = [];

  sections.push("UI Validation:");
  sections.push(`- ${sanitizeIds(original, cust) || "All relevant UI elements render correctly with proper labels, colors, badges, tooltips, and layout alignment."}`);
  sections.push("- Visible controls match the approved Customer 360 design and field specifications.");
  sections.push("- No overlapping, clipping, or broken layout behavior is observed.");

  sections.push("Business Validation:");
  if (fsd?.businessRules.length) {
    for (const rule of fsd.businessRules.slice(0, 3)) {
      sections.push(`- ${rule}`);
    }
  } else {
    sections.push("- Customer 360 behavior complies with the defined AML/KYC business rules.");
  }
  sections.push("- Risk, screening, KYC, and regulatory indicators reflect accurate customer profile state.");

  sections.push("System Validation:");
  sections.push("- Page and tab content load within acceptable response time without unhandled errors.");
  sections.push("- API responses return expected data; loading indicators appear and dismiss correctly.");
  if (/error|failure|retry/i.test(rowContext(row))) {
    sections.push("- Error handling displays user-friendly message without exposing internal stack traces.");
  }

  sections.push("Navigation Validation:");
  sections.push("- Active tab, breadcrumb, and hyperlinks navigate to the correct destination.");
  sections.push("- Deep links and cross-tab navigation maintain customer context without data loss.");

  sections.push("Data Validation:");
  sections.push(`- Displayed field values match CBS/KYC source data for ${cust.name} (Customer ID ${cust.id}).`);
  sections.push("- Cross-widget counts and scores remain consistent across header, Overview KPIs, and detail tabs.");

  if (row.subModule === "Audit Tab" || /audit|log|trail/i.test(rowContext(row))) {
    sections.push("Database/Audit Expectation:");
    sections.push("- User action is recorded in audit trail with correct category, timestamp, and user ID.");
  } else if (/re-screen|export|override|review|escalat/i.test(rowContext(row))) {
    sections.push("Database/Audit Expectation:");
    sections.push("- Backend transaction completes successfully and audit log entry is created for the action.");
  }

  sections.push("Audit Expectation:");
  sections.push("- Test execution trace is available for compliance review; no unauthorized data exposure occurs.");

  return sections.join("\n");
}

function buildAcceptanceCriteria(row: C360ExcelRow, fsdTitle: string): string {
  const cust = resolveCustomer(row);
  if (row.acceptanceCriteria.trim().length > 40) {
    return `${sanitizeIds(row.acceptanceCriteria, cust)}\nRequirement reference: ${fsdTitle}.`;
  }
  return `Acceptance criteria for ${row.taskDescription} (${fsdTitle}): all UI, business, system, navigation, data, and audit validations must pass for ${cust.name} (Customer ID ${cust.id}).`;
}

function enrichTestData(row: C360ExcelRow): string {
  if (BLOCKED_TEST_DATA[row.id]) {
    return BLOCKED_TEST_DATA[row.id];
  }
  const cust = resolveCustomer(row);
  const extras = row.testData
    .split(/;|\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .filter((s) => !/customer\s*id|customer\s*name|individual customer|corporate customer/i.test(s))
    .filter((s) => !/^(cust|ind|corp|pep|adv|empty|emptyrel)\d+$/i.test(s))
    .filter((s) => !/^[A-Za-z]+\d+$/.test(s));
  const tail = extras.length ? `; ${extras.join("; ")}` : "; Environment: dev; Module: Customer 360 View";
  return `Customer ID: ${cust.id}; Customer Name: ${cust.name}${tail}`;
}

function trimToTarget(steps: string[], min = 10, max = 20): string[] {
  if (steps.length <= max) {
    while (steps.length < min && steps.length > 0) {
      steps.push("Verify all displayed values remain stable after interaction with no stale data visible.");
    }
    return steps.slice(0, max);
  }
  return steps.slice(0, max);
}

export function expandRow(
  row: C360ExcelRow,
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedC360Row {
  const mapping = mapRowToFsd(row, sections);
  const fsd = getCatalogEntry(catalog, mapping.fsdSectionId);
  const fsdSectionId = mapping.fsdSectionId || "3.1";
  const fsdTitle = mapping.fsdSectionTitle || "Layout Structure";

  const preamble = buildStandardPreamble(row);
  const scenario = buildScenarioSteps(row, inventory, fsd);
  const tail = buildValidationTail(row);

  const minSteps = isSecurityOrSessionOnly(row) || row.subModule === "Regression Validation" ? 8 : 10;
  const cleaned = dedupeSteps([...preamble, ...scenario, ...tail]).filter((s) => !isLoginOrSearchStep(s));
  const merged = trimToTarget(cleaned, minSteps, 20);

  return {
    ...row,
    preconditions: buildPreconditions(row, fsd),
    testSteps: numberSteps(merged),
    expectedResult: buildExpectedResult(row, fsd),
    acceptanceCriteria: buildAcceptanceCriteria(row, fsdTitle),
    testData: enrichTestData(row),
    fsdSectionId,
    fsdSectionTitle: fsdTitle,
    isNew: false,
  };
}

export function expandGapRow(
  gap: GapTestCaseSpec & { id: string },
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedC360Row {
  const baseRow: C360ExcelRow = {
    id: gap.id,
    module: "Customer 360 View",
    subModule: gap.subModule,
    taskDescription: gap.taskDescription,
    acceptanceCriteria: "",
    preconditions: "",
    testSteps: `Open Customer 360 and verify ${gap.htmlControlLabel}`,
    testData: gap.testData,
    priority: gap.priority,
    expectedResult: `${gap.htmlControlLabel} should render correctly as per the approved design.`,
  };

  const expanded = expandRow(baseRow, sections, catalog, inventory);

  const extraSteps = [
    `Locate the "${gap.htmlControlLabel}" section in the Customer 360 ${gap.subModule}.`,
    `Verify "${gap.htmlControlLabel}" card/section header label and icon match the approved Customer 360 design.`,
    `Verify all fields, table columns, and values within "${gap.htmlControlLabel}" display accurately.`,
    `Verify "${gap.htmlControlLabel}" layout alignment and responsive behavior at standard viewport.`,
  ];

  const steps = dedupeSteps([...parseNumberedSteps(expanded.testSteps), ...extraSteps]);
  return {
    ...expanded,
    testSteps: numberSteps(trimToTarget(steps, 12, 20)),
    isNew: true,
    fsdSectionId: gap.fsdSectionId,
  };
}

export function countSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}
