import * as fs from "fs";
import * as path from "path";
import { parseNumberedSteps } from "./excel-intent";
import { mapRowToFsd } from "./fsd-mapper";
import { getCatalogEntry, type FsdCatalogEntry } from "./fsd-catalog";
import type { HtmlInventory } from "./html-inventory";
import type { EnhancedKgrRow, GapTestCaseSpec, KgrExcelRow } from "./types";
import type { FsdSection } from "../missing-mandatory/fsd-index";
import { getBaselineEntry } from "./baseline-loader";
import {
  resolveCustomerFromContext,
  type GapCustomerProfile,
} from "./gap-report-data";
import {
  applyNavigationTerminology,
  NAVIGATION_BASELINE_OVERRIDES,
  NAV_OBSERVE_ONLY_IDS,
  NAV_SCENARIO_ONLY_IDS,
  resolveTaskDescription,
} from "./navigation-updates";
import { sanitizeExpectedResult, sanitizeKgrSteps, sanitizeKgrText, stripFsdAndValidationBlocks } from "./content-sanitizer";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const FIXTURE_PATH = path.join(PROJECT_ROOT, "fixtures/kyc-gap-report-data.json");

interface KgrFixture {
  defaults: { subtitle: string; scoreWeights: { mandatory: number; optional: number } };
  customers: Record<string, { cif: string; expectedScore?: number; priority?: string }>;
  search: Record<string, string>;
  roles: Record<string, { canAccessGapReport: boolean }>;
  pagination: { pageSizes: number[]; defaultPageSize: number };
}

function loadFixture(): KgrFixture {
  return JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf-8")) as KgrFixture;
}

const FIXTURE = loadFixture();

const NEW_CASE_OUTCOMES: Record<string, string> = {
  "KGR-281": "Report reloads with fresh data and active filters stay applied.",
  "KGR-282": "Breadcrumb shows KYC Gap Report in the module path.",
  "KGR-283": "Individual and Corporate rows show distinct Type badge colours.",
  "KGR-284": "Gap Score displays the correct colour-coded risk label per score band.",
  "KGR-285": "No Edit action is available in the report grid.",
  "KGR-286": "Missing Fields are not shown as a landing grid column.",
  "KGR-287": "Modal shows CIF ID and branch code for the selected customer.",
  "KGR-288": "Search, filters, grid, and pagination are reachable via keyboard tab order.",
  "KGR-289": "Table, filters, and modal expose appropriate ARIA roles and labels.",
  "KGR-290": "Initial page load completes within the SLA in test data.",
  "KGR-292": "High Priority KPI card displays the correct count from the report dataset.",
  "KGR-293": "Medium Priority KPI card displays the correct count from the report dataset.",
  "KGR-294": "Low Priority KPI card displays the correct count from the report dataset.",
};

function resolveCustomer(row: KgrExcelRow): GapCustomerProfile {
  const base = getBaselineEntry(row.id);
  return resolveCustomerFromContext(
    `${row.subModule} ${row.taskDescription} ${base?.testData ?? ""} ${row.testData}`,
  );
}

/** Scenario intent — excludes polluted Excel preconditions/steps from prior runs. */
function intentContext(row: KgrExcelRow): string {
  const base = getBaselineEntry(row.id);
  return `${row.subModule} ${row.taskDescription} ${base?.testSteps ?? ""} ${base?.testData ?? row.testData}`.toLowerCase();
}

function rowContext(row: KgrExcelRow): string {
  return `${intentContext(row)} ${row.expectedResult}`.toLowerCase();
}

function isSecurityOrSessionOnly(row: KgrExcelRow): boolean {
  const ctx = intentContext(row);
  return (
    row.subModule.includes("Security") ||
    /unauthorized user cannot|unauthenticated user cannot|access is denied|restricted role|session expire|session timeout|without login/i.test(
      `${ctx} ${row.taskDescription.toLowerCase()}`,
    )
  );
}

function isNegativeOrBoundary(row: KgrExcelRow): boolean {
  return (
    row.subModule.includes("Boundary") ||
    /negative|boundary|invalid|injection|sql|script|blank|whitespace|special character/i.test(intentContext(row))
  );
}

function isPerformanceCase(row: KgrExcelRow): boolean {
  return /performance|load time|sla|threshold|latency|within acceptable/i.test(intentContext(row));
}

function isBrowserCase(row: KgrExcelRow): boolean {
  return /browser|chrome|edge|firefox|safari/i.test(intentContext(row));
}

const LOGIN_STEP_PATTERN =
  /login|log\s?in|sign\s?in|launch the application|launch application|enter (?:valid )?credential|submit login|authenticat/i;

function buildStandardPreamble(row: KgrExcelRow): string[] {
  if (isSecurityOrSessionOnly(row)) {
    return [
      "Configure user role or session per test data.",
      "Attempt to access KYC Gap Report.",
    ];
  }

  if (NAV_OBSERVE_ONLY_IDS.has(row.id)) {
    return ["Open KYC module navigation.", "Review available KYC module options."];
  }

  if (NAV_SCENARIO_ONLY_IDS.has(row.id)) {
    return [];
  }

  const steps = [
    "Open KYC Gap Report.",
    "Verify the landing page title, subtitle, and Export action are displayed.",
  ];

  if (row.subModule !== "KYC Gap Report") {
    steps.push("Confirm KPI summary, filters, and report grid are visible before scenario steps.");
  }

  return steps;
}

function isLoginStep(step: string): boolean {
  return LOGIN_STEP_PATTERN.test(step);
}

function buildSubmoduleSteps(row: KgrExcelRow, inventory: HtmlInventory, fsd: FsdCatalogEntry | undefined): string[] {
  const steps: string[] = [];
  const ctx = intentContext(row);
  const sm = row.subModule;
  const isNavScenario =
    NAV_OBSERVE_ONLY_IDS.has(row.id) ||
    NAV_SCENARIO_ONLY_IDS.has(row.id) ||
    /navigation|breadcrumb|direct url|back navigation|return|listed|module navigation/i.test(ctx);

  if (sm === "KYC Gap Report" || sm === "KYC Gap Report - KPI Cards") {
    if (!isNavScenario && /kpi|total customers|customers with gaps|critical priority/i.test(ctx)) {
      for (const kpi of inventory.kpiCards) {
        steps.push(`Verify ${kpi.label} KPI card label, numeric value, and card layout are displayed correctly.`);
      }
      steps.push("Verify Total Customers (CBS) count is greater than or equal to Customers with Gaps count.");
      steps.push("Verify Critical Priority KPI count reconciles with customers classified as Critical in the filtered dataset.");
      steps.push("Verify KPI values remain visible and are not truncated at standard desktop viewport.");
    }
    if (
      !NAV_OBSERVE_ONLY_IDS.has(row.id) &&
      /title|subtitle|export|refresh|back|breadcrumb/i.test(ctx)
    ) {
      steps.push(`Verify page title displays as "${inventory.pageTitle}".`);
      steps.push(`Verify page subtitle displays as "${inventory.pageSubtitle}".`);
      steps.push("Verify Export button is visible, enabled, and positioned in the page header.");
    }
    if (/listed|module navigation|available in kyc/i.test(ctx)) {
      steps.push("Verify KYC Gap Report is listed in KYC module navigation.");
      if (NAV_OBSERVE_ONLY_IDS.has(row.id)) {
        steps.push("Open KYC Gap Report and verify the report screen loads.");
        steps.push(`Verify page title displays as "${inventory.pageTitle}".`);
      }
    }
    if (/return|another kyc|navigat.*away/i.test(ctx) && !NAV_SCENARIO_ONLY_IDS.has(row.id)) {
      steps.push("Navigate to another KYC screen.");
      steps.push("Return to KYC Gap Report and verify the report reloads successfully.");
    }
    if (/state.*retain|filter.*retain|pagination.*retain/i.test(ctx)) {
      if (NAV_SCENARIO_ONLY_IDS.has(row.id)) {
        steps.push("Verify filters and pagination state are preserved after returning to KYC Gap Report.");
      } else {
        steps.push("Apply Branch, Priority, or Gap Score filters and note the current page index.");
        steps.push("Navigate to another KYC screen without clearing active filters.");
        steps.push("Return to KYC Gap Report and verify filters and pagination state are preserved.");
      }
    }
    if (/unauthorized|unauthenticated|access denied/i.test(ctx)) {
      steps.push("Verify access is blocked with appropriate unauthorized message, redirect, or HTTP 403 response.");
      steps.push("Verify no KPI data, customer records, or export controls are exposed to unauthorized users.");
    }
    if (/refresh|reload/i.test(ctx)) {
      steps.push("Note current KPI values, filter selections, and visible grid rows.");
      steps.push("Refresh the browser or click Refresh control and wait for data reload to complete.");
      steps.push("Verify page components reload successfully without JavaScript errors or broken layout.");
    }
  }

  if (sm === "KYC Gap Report - Search & Filters") {
    steps.push("Locate the global search input and verify placeholder text indicates customer name or ID search.");
    steps.push("Verify Row 1 dropdown filters: Branch, Customer Type, Template, and Priority are visible and enabled.");
    steps.push("Verify Row 2 Gap Score Min and Max range inputs accept numeric values only.");
    steps.push("Verify Clear Filters control resets all search and filter inputs to default state.");
    if (/search/i.test(ctx)) {
      steps.push(`Enter search keyword "${FIXTURE.search.partialMatch}" and verify grid filters in real time.`);
      steps.push(`Enter exact customer name "${FIXTURE.search.exactMatch}" and verify precise match behavior.`);
      steps.push(`Enter non-matching value "${FIXTURE.search.noMatch}" and verify empty or no-records state.`);
    }
    if (/branch/i.test(ctx)) {
      steps.push("Open Branch filter dropdown and verify branch names display with branch codes in parentheses.");
      steps.push("Select a branch filter value and verify only matching branch records appear in the grid.");
    }
    if (/customer type|individual|corporate/i.test(ctx)) {
      steps.push("Apply Individual customer type filter and verify only Individual badge rows are displayed.");
      steps.push("Apply Corporate customer type filter and verify only Corporate badge rows are displayed.");
    }
    if (/template/i.test(ctx) && !/score band|configuration/i.test(ctx)) {
      steps.push("Open Template filter and verify available template names match assigned templates in grid data.");
      steps.push("Select a template filter and verify grid shows only customers with that template applied.");
    }
    if (/priority/i.test(ctx)) {
      for (const level of ["Low", "Medium", "High", "Critical"]) {
        steps.push(`Apply ${level} priority filter and verify grid rows display matching ${level} priority classification.`);
      }
    }
    if (/score range|min|max|boundary/i.test(ctx)) {
      steps.push("Enter Gap Score Min and Max values and verify only records within the inclusive range are shown.");
      steps.push("Verify invalid ranges (Min greater than Max) are rejected or produce validation feedback.");
    }
    if (/clear|reset/i.test(ctx)) {
      steps.push("Apply multiple filters concurrently, then click Clear Filters.");
      steps.push("Verify all filter controls reset and full dataset is restored in the grid.");
    }
  }

  if (sm === "KYC Gap Report - Report Grid") {
    for (const col of inventory.gridColumns) {
      if (!steps.some((s) => s.includes(col.label))) {
        steps.push(`Verify "${col.label}" column header is displayed in the report grid.`);
      }
    }
    if (/sort/i.test(ctx)) {
      steps.push("Click sortable column headers (Customer, Customer ID, Branch, Branch Code, KYC Gap Score) and verify ascending sort order.");
      steps.push("Click the same column header again and verify descending sort order is applied.");
      steps.push("Verify non-sortable columns (Type, Template Applied, Priority, Actions) do not change row order on click.");
    }
    if (/view button|actions/i.test(ctx)) {
      steps.push("Verify each grid row displays a View action button in the Actions column.");
      steps.push("Click View on the first visible row and verify Gap Detail Modal opens.");
    }
    if (/read-only|edit|bulk notify|missing fields column|gap type column/i.test(ctx)) {
      steps.push("Verify no Edit button or inline edit controls are present in the landing grid.");
      steps.push("Verify Missing Fields and Gap Type are not shown as landing table columns.");
      steps.push("Verify Bulk Notify or bulk remediation actions are not available on the landing page.");
    }
    if (/empty|no record|no result/i.test(ctx)) {
      steps.push("Apply filters that yield zero matches and verify empty state or no-records message is displayed.");
    }
  }

  if (sm === "KYC Gap Report - Gap Score Calculation") {
    steps.push(`Verify mandatory missing field weight contributes +${FIXTURE.defaults.scoreWeights.mandatory} to KYC Gap Score.`);
    steps.push(`Verify optional missing field weight contributes +${FIXTURE.defaults.scoreWeights.optional} to KYC Gap Score.`);
    steps.push("Verify KYC Gap Score displays as a raw integer (not a percentage) with colour-coded risk label.");
    steps.push("Verify priority classification (Low/Medium/High/Critical) aligns with template score band configuration.");
    if (/zero|no gap|no missing/i.test(ctx)) {
      steps.push("Verify customer with zero missing fields displays KYC Gap Score of 0.");
    }
    if (/modal|grid|consistent|match/i.test(ctx)) {
      steps.push("Open Gap Detail Modal and verify modal Total KYC Gap Score matches the grid row score.");
    }
    if (/template|score band|field requirement/i.test(ctx)) {
      steps.push("Refresh report data after backend template or field changes and verify scores recalculate correctly.");
    }
  }

  if (sm === "KYC Gap Report - Gap Detail Modal") {
    steps.push("Open Gap Detail Modal via View action on a customer row with known gaps.");
    steps.push("Verify modal header displays customer name, CIF ID, branch name, branch code, and template applied.");
    steps.push("Verify Missing Fields list shows field name, description, requirement type, and weight for each gap.");
    steps.push("Verify Gap Type badge (CIP / CDD / EDD) is displayed alongside missing fields section.");
    steps.push("Verify Score Summary shows Total KYC Gap Score as sum of missing field weights with risk label.");
    if (/close|esc|escape/i.test(ctx)) {
      steps.push("Close modal using close icon or Escape key and verify focus returns to the originating grid row.");
    }
    if (/mandatory|optional|weight/i.test(ctx)) {
      steps.push("Verify Mandatory fields display weight 3 and Optional fields display weight 1 in modal detail rows.");
    }
  }

  if (sm === "KYC Gap Report - Pagination") {
    steps.push(`Verify default page size is ${FIXTURE.pagination.defaultPageSize} records per page.`);
    for (const size of FIXTURE.pagination.pageSizes) {
      steps.push(`Change items per page to ${size} and verify grid displays at most ${size} rows.`);
    }
    steps.push("Click Next page and verify page indicator updates to next page number.");
    steps.push("Click Previous page and verify navigation returns to prior page.");
    steps.push('Verify page indicator displays "Page X of Y" and item range "A–B of N items" format.');
    if (/filter|reset/i.test(ctx)) {
      steps.push("Navigate to a later page, apply a filter change, and verify pagination resets to page 1.");
    }
  }

  if (sm === "KYC Gap Report - Export") {
    steps.push("Click Export button in the page header action area.");
    steps.push("Verify export initiates download or export dialog without errors.");
    steps.push("Verify exported dataset includes only currently filtered and sorted visible records per business rules.");
    steps.push("Verify exported columns match on-screen grid columns and exclude modal-only fields.");
    if (/filter|sort|pagination/i.test(ctx)) {
      steps.push("Apply filters and sorting, export data, and verify export respects active view state.");
    }
  }

  if (sm === "KYC Gap Report - Security & Audit") {
    if (/audit|log|trail/i.test(ctx)) {
      steps.push("Perform a report access or export action and verify audit log entry is created.");
      steps.push("Verify audit record includes user ID, timestamp, action type, and module identifier.");
      steps.push("Refresh page and verify audit records remain available and immutable.");
    }
    if (/role|rbac|compliance|administrator/i.test(ctx)) {
      steps.push("Authenticate as Compliance Officer and verify full read access to KYC Gap Report.");
      steps.push("Authenticate as Administrator and verify report access per role permissions.");
      steps.push("Authenticate as unauthorized role and verify access is denied.");
    }
    if (/injection|xss|sanitize/i.test(ctx)) {
      steps.push(`Enter SQL injection pattern "${FIXTURE.search.sqlInjection}" in search and verify input is sanitized.`);
      steps.push(`Enter script injection pattern in search and verify script is not executed.`);
    }
    if (isPerformanceCase(row)) {
      steps.push("Open browser developer tools Performance or Network panel.");
      steps.push("Measure initial page load time and verify it meets SLA threshold defined in test data.");
    }
    if (isBrowserCase(row)) {
      steps.push("Repeat scenario in each browser version listed in test data.");
      steps.push("Verify layout, fonts, filters, grid, and modal render consistently across browsers.");
    }
    if (/keyboard|aria|accessibility/i.test(ctx)) {
      steps.push("Tab through search, filters, grid headers, pagination, and Export using keyboard only.");
      steps.push("Verify visible focus indicators and ARIA roles on table, combobox, and dialog elements.");
    }
  }

  if (sm === "KYC Gap Report - Boundary & Negative Testing") {
    if (/blank|whitespace|empty/i.test(ctx)) {
      steps.push("Submit search with blank or whitespace-only value and verify full dataset or validation behavior.");
    }
    if (/negative|decimal|alphabetic|special|min greater/i.test(ctx)) {
      steps.push("Enter invalid Gap Score filter values and verify validation prevents incorrect filtering.");
    }
    for (const boundary of FIXTURE.pagination.pageSizes.length ? [0, 25, 26, 50, 51, 75, 76, 100, 101] : []) {
      if (/boundary|score/i.test(ctx)) {
        steps.push(`Apply Gap Score boundary filter at value ${boundary} and verify inclusive/exclusive boundary behavior.`);
      }
    }
    if (/duplicate|long name|special character/i.test(ctx)) {
      steps.push("Verify grid handles edge-case customer names without layout breakage or data misalignment.");
    }
  }

  if (fsd) {
    for (const rule of fsd.businessRules.slice(0, 1)) {
      if (rule.length > 20 && !/template editor/i.test(rule)) {
        steps.push(`Verify ${rule.replace(/\.$/, "")}.`);
      }
    }
  }

  return steps;
}

function buildValidationTail(row: KgrExcelRow): string[] {
  const tail: string[] = [];
  if (!isSecurityOrSessionOnly(row)) {
    tail.push("Verify layout, badges, and controls render without overlap or clipping.");
  }
  tail.push("Verify displayed values reconcile with CBS/DMS gap data for the test customer.");
  tail.push("Verify no unhandled errors occur during test execution.");
  if (!NAV_SCENARIO_ONLY_IDS.has(row.id)) {
    tail.push("Verify active filters and grid state remain consistent after interactions.");
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

function trimToTarget(steps: string[], min = 10, max = 20): string[] {
  if (steps.length <= max) {
    while (steps.length < min && steps.length > 0) {
      steps.push("Verify all displayed values remain stable after interaction with no stale or duplicated records visible.");
    }
    return steps.slice(0, max);
  }
  return steps.slice(0, max);
}

function buildPreconditions(row: KgrExcelRow, _fsd: FsdCatalogEntry | undefined): string {
  const override = NAVIGATION_BASELINE_OVERRIDES[row.id]?.preconditions;
  if (override) {
    return sanitizeKgrText(override.startsWith("1.") ? override : `1. ${override}`);
  }

  if (isSecurityOrSessionOnly(row)) {
    return "1. User role or session configured per test data.";
  }

  const lines: string[] = ["1. Valid user with KYC Gap Report access is logged in."];

  if (row.subModule.includes("Pagination")) {
    lines.push("2. Report dataset exceeds default page size.");
  } else if (row.subModule.includes("Export")) {
    lines.push("2. Browser allows file downloads.");
  } else if (row.subModule.includes("Gap Detail Modal")) {
    lines.push("2. At least one customer with documented KYC gaps exists in the report.");
  } else if (isNegativeOrBoundary(row)) {
    lines.push("2. Boundary and invalid inputs prepared per test data.");
  } else if (NAV_SCENARIO_ONLY_IDS.has(row.id)) {
    lines.push("2. KYC Gap Report is open with scenario state from test data.");
  } else {
    const cust = resolveCustomer(row);
    lines.push(`2. Customer ${cust.name} (${cust.cif}) exists with gap profile matching the scenario.`);
  }

  return sanitizeKgrText(lines.join("\n"));
}

const TAIL_OUTCOME_SKIP =
  /verify (?:no unhandled errors|layout, badges|displayed values reconcile|active filters and grid state)|remain stable after interaction|all displayed values remain stable/i;

function normalizeOutcomeKey(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function stepToOutcome(step: string): string | null {
  const s = step.trim().replace(/^\d+\.\s*/, "");
  if (!s || TAIL_OUTCOME_SKIP.test(s) || /fsd|requirement reference/i.test(s)) {
    return null;
  }

  if (/^verify /i.test(s)) {
    let body = s.replace(/^verify /i, "").replace(/\.$/, "");
    if (/ and verify /i.test(body)) {
      body = body.split(/ and verify /i).pop() ?? body;
    }
    return `${body.charAt(0).toUpperCase()}${body.slice(1)}.`;
  }
  if (/^confirm /i.test(s)) {
    const body = s.replace(/^confirm /i, "").replace(/\.$/, "");
    return `${body.charAt(0).toUpperCase()}${body.slice(1)} are confirmed.`;
  }
  if (/^open /i.test(s)) {
    const andVerify = s.match(/^open .+ and verify (.+)$/i);
    if (andVerify?.[1]) {
      const body = andVerify[1].replace(/\.$/, "");
      return `${body.charAt(0).toUpperCase()}${body.slice(1)}.`;
    }
    const target = s.replace(/^open /i, "").replace(/\.$/, "");
    return `${target.charAt(0).toUpperCase()}${target.slice(1)} opens successfully.`;
  }
  if (/^apply /i.test(s)) {
    if (/ and verify /i.test(s)) {
      const body = (s.split(/ and verify /i).pop() ?? s).replace(/\.$/, "");
      return `${body.charAt(0).toUpperCase()}${body.slice(1)}.`;
    }
    return `${s.replace(/^apply /i, "Applied ").replace(/\.$/, "")} and the report updates accordingly.`;
  }
  if (/^navigate /i.test(s)) {
    return `${s.replace(/^navigate /i, "").replace(/\.$/, "")} completes successfully.`;
  }
  if (/^return /i.test(s)) {
    return "Return to KYC Gap Report completes with expected report state.";
  }
  if (/^enter /i.test(s)) {
    return "Search or filter input returns the expected matching or empty result set.";
  }
  if (/^click /i.test(s)) {
    return "Selected action completes and shows the expected screen, modal, or download.";
  }
  if (/^select /i.test(s)) {
    return "Selected filter value is applied and grid data updates correctly.";
  }
  if (/^change /i.test(s)) {
    return "Pagination or page size change updates the grid as expected.";
  }
  if (/^close /i.test(s)) {
    return "Modal closes and focus returns to the report grid.";
  }
  if (/^note /i.test(s)) {
    return null;
  }
  if (/^attempt /i.test(s)) {
    return "Access attempt produces the expected allow or deny result.";
  }
  if (/^configure /i.test(s)) {
    return "Configured role or session behaves per test data.";
  }
  if (/^review /i.test(s)) {
    return "Listed KYC module options include KYC Gap Report.";
  }
  if (/^locate /i.test(s)) {
    let body = s.replace(/^locate /i, "").replace(/\.$/, "");
    if (/ and verify /i.test(body)) {
      body = body.split(/ and verify /i).pop() ?? body;
    }
    return `${body.charAt(0).toUpperCase()}${body.slice(1)}.`;
  }
  if (/^execute /i.test(s)) {
    return "Scenario-specific control behavior matches the approved report design.";
  }

  return `${s.charAt(0).toUpperCase()}${s.slice(1).replace(/\.$/, "")}.`;
}

function primaryOutcome(row: KgrExcelRow): string {
  const fromNew = NEW_CASE_OUTCOMES[row.id];
  if (fromNew) {
    return fromNew.endsWith(".") ? fromNew : `${fromNew}.`;
  }

  const nav = NAVIGATION_BASELINE_OVERRIDES[row.id]?.expectedResult;
  if (nav) {
    const cleaned = stripFsdAndValidationBlocks(nav);
    return cleaned.endsWith(".") ? cleaned : `${cleaned}.`;
  }

  const task = resolveTaskDescription(row.id, row.taskDescription);
  let plain = task
    .replace(/^Verify\s+/i, "")
    .replace(/^user can\s+/i, "User can ")
    .replace(/\s+/g, " ")
    .trim();
  if (!plain.endsWith(".")) {
    plain = `${plain}.`;
  }
  return plain.charAt(0).toUpperCase() + plain.slice(1);
}

export function buildExpectedResult(row: KgrExcelRow, mergedSteps: string[]): string {
  const seen = new Set<string>();
  const outcomes: string[] = [];

  const primary = primaryOutcome(row);
  seen.add(normalizeOutcomeKey(primary));
  outcomes.push(primary);

  for (const step of mergedSteps) {
    const outcome = stepToOutcome(step);
    if (!outcome) continue;
    const key = normalizeOutcomeKey(outcome);
    if (seen.has(key) || key.length < 12) continue;
    seen.add(key);
    outcomes.push(outcome);
  }

  return outcomes.map((o, i) => `${i + 1}. ${o}`).join("\n");
}

function buildAcceptanceCriteria(row: KgrExcelRow): string {
  const navAcceptance = NAVIGATION_BASELINE_OVERRIDES[row.id]?.acceptanceCriteria;
  if (navAcceptance) {
    return stripFsdAndValidationBlocks(navAcceptance);
  }

  const taskDesc = resolveTaskDescription(row.id, row.taskDescription);
  const cleaned = stripFsdAndValidationBlocks(
    applyNavigationTerminology(
      row.acceptanceCriteria.replace(/\nRequirement reference:.*/gi, "").trim(),
    ),
  );
  const fromTask = `The system should ${taskDesc
    .replace(/^Verify\s+/i, "")
    .replace(/^user can/i, "allow user to")}`;
  const staleNavigation =
    /missing mandatory navigation|missing mandatory menu|navigation from kyc gap report to missing mandatory/i.test(
      cleaned,
    );
  const base =
    cleaned.length > 30 && !cleaned.startsWith("Acceptance criteria for") && !staleNavigation
      ? cleaned
      : fromTask;
  return stripFsdAndValidationBlocks(base);
}

function enrichTestData(row: KgrExcelRow): string {
  const override = NAVIGATION_BASELINE_OVERRIDES[row.id]?.testData;
  if (override) {
    return sanitizeKgrText(override);
  }

  const cust = resolveCustomer(row);
  const sm = row.subModule;
  const ctx = intentContext(row);

  let role = "Compliance Officer";
  if (isSecurityOrSessionOnly(row)) {
    role = /unauthorized|restricted/i.test(ctx) ? "Unauthorized User" : "Expired Session User";
    return sanitizeKgrText(`Role: ${role}; Action: Attempt KYC Gap Report access`);
  }
  if (/administrator/i.test(ctx)) {
    role = "Administrator";
  }

  const parts: string[] = [`Role: ${role}`];

  if (sm.includes("Search & Filters")) {
    parts.push(`Search keyword: ${FIXTURE.search.partialMatch}`);
    if (/exact/i.test(ctx)) parts.push(`Exact match: ${FIXTURE.search.exactMatch}`);
    if (/no match|no result/i.test(ctx)) parts.push(`No-match value: ${FIXTURE.search.noMatch}`);
    if (/branch/i.test(ctx)) parts.push(`Branch: ${cust.branch} (${cust.branchCode})`);
    if (/priority/i.test(ctx)) parts.push(`Priority filter: ${cust.priority ?? "High"}`);
    if (/score range|min|max/i.test(ctx)) parts.push("Gap Score range: 10–50");
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("KPI Cards") || (sm === "KYC Gap Report" && /kpi/i.test(ctx))) {
    parts.push(`Customer: ${cust.name} (${cust.cif})`);
    parts.push(`Gap score: ${cust.expectedScore ?? "per CBS/DMS"}; Priority: ${cust.priority ?? "per band"}`);
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Gap Detail Modal")) {
    parts.push(`Customer: ${cust.name} (${cust.cif}); Template: ${cust.template ?? "Simplified KYC"}`);
    parts.push(`Weights: mandatory +${FIXTURE.defaults.scoreWeights.mandatory}, optional +${FIXTURE.defaults.scoreWeights.optional}`);
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Export")) {
    parts.push(`Branch filter: ${cust.branch}; Customer: ${cust.name} (${cust.cif})`);
    parts.push("Action: Export filtered grid");
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Pagination")) {
    parts.push(`Page sizes: ${FIXTURE.pagination.pageSizes.join(", ")}; Default: ${FIXTURE.pagination.defaultPageSize}`);
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Gap Score")) {
    parts.push(`Customer: ${cust.name} (${cust.cif}); Score: ${cust.expectedScore}; Priority: ${cust.priority}`);
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Report Grid")) {
    parts.push(`Customer: ${cust.name} (${cust.cif}); Type: ${cust.type === "corporate" ? "Corporate" : "Individual"}`);
    if (/sort/i.test(ctx)) parts.push("Sort column: KYC Gap Score");
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm.includes("Security")) {
    if (isPerformanceCase(row)) parts.push("SLA: page load ≤ 3000ms");
    if (isBrowserCase(row)) parts.push("Browsers: Chrome 120+, Edge 120+");
    if (/injection|sql|xss/i.test(ctx)) parts.push(`Injection input: ${FIXTURE.search.sqlInjection}`);
    if (parts.length === 1) parts.push("Action: Security validation on KYC Gap Report");
    return sanitizeKgrText(parts.join("; "));
  }

  if (sm === "KYC Gap Report") {
    parts.push("Action: Open KYC Gap Report");
    return sanitizeKgrText(parts.join("; "));
  }

  parts.push(`Customer: ${cust.name} (${cust.cif}); Branch: ${cust.branch}; Template: ${cust.template}`);
  return sanitizeKgrText(parts.join("; "));
}

function stepOverlapsPreamble(step: string, preamble: string[]): boolean {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const ns = norm(step);
  return preamble.some((p) => {
    const np = norm(p);
    return ns === np || (ns.length > 12 && np.includes(ns)) || (np.length > 12 && ns.includes(np));
  });
}

function mergeOriginalSteps(row: KgrExcelRow, preamble: string[]): string[] {
  if (!NAV_OBSERVE_ONLY_IDS.has(row.id) && !NAV_SCENARIO_ONLY_IDS.has(row.id)) {
    return [];
  }

  const baseline = getBaselineEntry(row.id);
  const source = baseline?.testSteps ?? row.testSteps;
  return sanitizeKgrSteps(
    parseNumberedSteps(source)
      .map((s) => s.trim())
      .filter((s) => s.length > 5 && !isLoginStep(s))
      .filter((s) => !stepOverlapsPreamble(s, preamble))
      .filter((s) => {
        if (!NAV_OBSERVE_ONLY_IDS.has(row.id)) return true;
        return !/expand kyc module|observe available kyc/i.test(s);
      })
      .map((s) => (s.charAt(0) === s.charAt(0).toUpperCase() ? s : s.charAt(0).toUpperCase() + s.slice(1))),
  );
}

export function expandRow(
  row: KgrExcelRow,
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedKgrRow {
  const mapping = mapRowToFsd(row, sections);
  const fsd = getCatalogEntry(catalog, mapping.fsdSectionId);
  const fsdSectionId = mapping.fsdSectionId || "4.1";
  const fsdSectionTitle = mapping.fsdSectionTitle || "Module Overview";

  const preamble = buildStandardPreamble(row);
  const original = mergeOriginalSteps(row, preamble);
  const scenario = buildSubmoduleSteps(row, inventory, fsd);
  const tail = buildValidationTail(row);

  const minSteps = 10;
  const merged = trimToTarget(
    sanitizeKgrSteps(dedupeSteps([...preamble, ...original, ...scenario, ...tail])),
    minSteps,
    20,
  );

  return {
    ...row,
    taskDescription: sanitizeKgrText(resolveTaskDescription(row.id, row.taskDescription)),
    preconditions: buildPreconditions(row, fsd),
    testSteps: numberSteps(merged),
    expectedResult: sanitizeExpectedResult(buildExpectedResult(row, merged)),
    acceptanceCriteria: sanitizeKgrText(buildAcceptanceCriteria(row)),
    testData: enrichTestData(row),
    fsdSectionId,
    fsdSectionTitle,
    isNew: false,
  };
}

export function expandGapRow(
  gap: GapTestCaseSpec & { id: string },
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): EnhancedKgrRow {
  const baseRow: KgrExcelRow = {
    id: gap.id,
    module: "KYC Module",
    subModule: gap.subModule,
    taskDescription: gap.taskDescription,
    acceptanceCriteria: "",
    preconditions: "",
    testSteps: `Navigate to KYC Gap Report and verify ${gap.uiControlLabel}`,
    testData: gap.testData,
    priority: gap.priority,
    expectedResult: "",
  };

  const expanded = expandRow(baseRow, sections, catalog, inventory);
  const extraSteps = [
    `Locate the "${gap.uiControlLabel}" element or verify its documented absence on the KYC Gap Report screen.`,
    `Verify "${gap.uiControlLabel}" behavior matches the approved report design and functional rules.`,
  ];

  const steps = trimToTarget(sanitizeKgrSteps(dedupeSteps([...parseNumberedSteps(expanded.testSteps), ...extraSteps])), 12, 20);
  return {
    ...expanded,
    testSteps: numberSteps(steps),
    expectedResult: sanitizeExpectedResult(buildExpectedResult(baseRow, steps)),
    isNew: true,
    fsdSectionId: gap.fsdSectionId,
  };
}

export function countSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}
