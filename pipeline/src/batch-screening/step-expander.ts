import { parseNumberedSteps } from "./excel-intent";
import { buildFocusedExcelSteps } from "./task-step-scoper";
import { mapRowToFsd } from "./fsd-mapper";
import { getCatalogEntry, type FsdCatalogEntry } from "./fsd-catalog";
import { screenForSubModule, type HtmlInventory } from "./html-inventory";
import { type HtmlNavigationMap, linksForScreen } from "./html-navigation";
import {
  ACTION_COMMENTS,
  ROLES,
  SEARCH_KEYWORDS,
  defaultPreconditions,
  formatTestData,
  resolveRecordFromContext,
} from "./batch-data";
import type { BsExcelRow, EnhancedBsRow, GapTestCaseSpec } from "./types";
import type { FsdSection } from "./fsd-index";

const BANNED_OUTPUT =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|as per documentation|per the documentation|UI Design|SCR-\d{2})\b/gi;

const DISALLOWED_WORDS = /\bdisposition(s)?\b/gi;

export function sanitizeOutput(text: string): string {
  return text
    .replace(BANNED_OUTPUT, "")
    .replace(DISALLOWED_WORDS, (m) => (m.toLowerCase().startsWith("dispositions") ? "action outcomes" : "action"))
    .replace(/aligns with the documented requirement:/gi, "meets the expected behavior:")
    .replace(/approved (?:Batch Screening )?design/gi, "expected UI presentation")
    .replace(/Requirement reference:[^\n.]+\.?/gi, "")
    .replace(/\bSCR-00\b/gi, "Match Results")
    .replace(/\bSCR-01\b/gi, "Screening Results")
    .replace(/\bSCR-02\b/gi, "Match Review — AI Summary")
    .replace(/\bSCR-03\b/gi, "Match Review — Match Details")
    .replace(/\bSCR-04\b/gi, "Match Review — View Summary")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function rowContext(row: BsExcelRow, includeTestData = true): string {
  const parts = [
    row.subModule,
    row.taskDescription,
    row.testSteps,
    row.acceptanceCriteria,
    row.expectedResult,
    row.preconditions,
  ];
  if (includeTestData) {
    parts.push(row.testData);
  }
  return parts.join(" ").toLowerCase();
}

function isRbacOrSecurity(row: BsExcelRow): boolean {
  return /rbac|security|unauthorized|unauthenticated|access denied|without permission|restricted role|direct url|session expire|token reuse/i.test(
    rowContext(row),
  );
}

function isApiCase(row: BsExcelRow): boolean {
  return /api|backend|endpoint|payload|http status|response body/i.test(rowContext(row));
}

function isPerformanceCase(row: BsExcelRow): boolean {
  return /performance|load time|sla|latency|response time|large data volume/i.test(rowContext(row));
}

function isNegativeCase(row: BsExcelRow): boolean {
  return /invalid|empty|missing|deny|block|error|failure|unauthorized|sql injection|xss|duplicate|timeout|interrupt/i.test(
    rowContext(row),
  );
}

const LOGIN_LOGOUT_PATTERN =
  /login|log\s?in|sign\s?in|log\s?out|sign\s?out|launch the application|launch the aml|enter (?:valid )?credential|submit login|authenticat|navigate to dashboard|dashboard landing|session ends successfully/i;

function isLoginOrLogoutStep(step: string): boolean {
  return LOGIN_LOGOUT_PATTERN.test(step);
}

function areaKeywords(subModule: string): string {
  const sm = subModule.toLowerCase();
  if (sm.includes("scr-01") || sm.includes("screening results")) return "Screening Results";
  if (sm.includes("match details") || sm.includes("ai summary")) return "Match Review";
  if (sm.includes("view summary")) return "Match Review — View Summary";
  if (sm.includes("comment modal") || sm.includes("disposition")) return "Actions and Comment Modal";
  if (sm.includes("filters") || sm.includes("search")) return "Match Results Filters and Search";
  if (sm.includes("export") || sm.includes("audit")) return "Export and Audit";
  if (sm.includes("rbac") || sm.includes("security")) return "Access Control";
  if (sm.includes("threshold") || sm.includes("ai logic")) return "Match Scoring and AI Summary";
  if (sm.includes("negative") || sm.includes("nfr")) return "Edge Cases and Non-Functional";
  if (sm.includes("api") || sm.includes("backend")) return "Backend Integration";
  if (sm.includes("integration") || sm.includes("sync")) return "Data Synchronization";
  return "Match Results";
}

function extractCoreTask(taskDescription: string): string {
  let base = taskDescription
    .replace(/^Verify\s+/i, "")
    .replace(/^Check that\s+/i, "")
    .trim();

  base = base.replace(
    /\.\s*Test (the Actions menu and Comment Modal|using the filters or search field|the Export Report button|the Match Review tabs|with the role from test data)\.?.*$/i,
    "",
  );
  const onTheIdx = base.search(/\s+on the\s+/i);
  if (onTheIdx > 8) {
    base = base.slice(0, onTheIdx);
  }
  const forCustomerIdx = base.search(/\s+for customer record\s+/i);
  if (forCustomerIdx > 8) {
    base = base.slice(0, forCustomerIdx);
  }
  return base.replace(/,\s*$/, "").replace(/\.\s*$/, "").trim();
}

function scenarioContext(row: BsExcelRow): string {
  const base = extractCoreTask(row.taskDescription);
  return `${row.subModule} ${base}`.toLowerCase();
}

function sanitizeSubModule(subModule: string): string {
  let s = subModule
    .replace(/\bSCR-00\b/gi, "")
    .replace(/\bSCR-01\b/gi, "")
    .replace(/\bSCR-02\b/gi, "AI Summary")
    .replace(/\bSCR-03\b/gi, "Match Details")
    .replace(/\bSCR-04\b/gi, "View Summary")
    .replace(/\s{2,}/g, " ")
    .replace(/Batch Screening\s*-\s*/i, "Batch Screening — ")
    .replace(/\baction Actions\b/gi, "Actions")
    .trim();

  s = s.replace(
    /\b(Screening Results|Match Results|AI Summary|Match Details|View Summary)(\s+\1\b)+/gi,
    "$1",
  );

  return sanitizeOutput(s);
}

function isActionScenario(sc: string): boolean {
  return /false positive|confirm match|move to case|move to whitelist|move to exception|under review|comment modal/i.test(
    sc,
  );
}

function buildDetailedTaskDescription(row: BsExcelRow): string {
  const base = extractCoreTask(row.taskDescription);
  const area = areaKeywords(row.subModule);
  const sc = scenarioContext(row);

  let desc = `Check that ${base} on the ${area} page.`;

  if (isActionScenario(sc)) {
    desc += " Test the Actions menu and Comment Modal.";
  } else if (/filter|search|clear filter/i.test(sc) && area.includes("Filter")) {
    desc += " Test using the filters or search field.";
  } else if (/export|download report/i.test(sc)) {
    desc += " Test the Export Report button.";
  } else if (/ai summary|match details|view summary/i.test(sc)) {
    desc += " Test the Match Review tabs.";
  } else if (/unauthorized|restricted|access denied/i.test(sc)) {
    desc += " Test with the role from test data.";
  }

  return sanitizeOutput(desc.charAt(0).toUpperCase() + desc.slice(1));
}

const BOILERPLATE_EXPECTED_PATTERNS = [
  /^UI Validation:/i,
  /^Business Validation:/i,
  /^System Validation:/i,
  /^Data Validation:/i,
  /^Audit Validation:/i,
  /^- Controls are visible/i,
  /^- Loading indicators/i,
  /^- Screening workflow behaves/i,
  /^- Match scores, statuses/i,
  /^- Page and grid content load/i,
  /^- Grid and detail views display/i,
  /^- Status updates and filter/i,
  /^- User action is recorded/i,
  /^- Error or validation message/i,
  /^• Controls are visible/i,
  /^• Loading indicators/i,
  /^• Screening workflow/i,
  /^• Match scores/i,
  /^• Page and grid/i,
  /^• Grid and detail/i,
  /^• Status updates/i,
  /^• User action is recorded/i,
];

function extractCoreExpectedResult(expectedResult: string): string {
  const lines = expectedResult.split("\n").map((l) => l.trim()).filter(Boolean);
  const meaningful: string[] = [];
  const seen = new Set<string>();

  for (const line of lines) {
    if (BOILERPLATE_EXPECTED_PATTERNS.some((p) => p.test(line))) continue;
    const cleaned = line.replace(/^[•\-]\s*/, "").trim();
    if (cleaned.length < 15 || /ui validation/i.test(cleaned)) continue;
    const key = cleaned.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    meaningful.push(cleaned);
  }

  return meaningful[0] ?? "";
}

function buildPrimaryOutcome(row: BsExcelRow, ctx: string): string {
  const task = extractCoreTask(row.taskDescription).toLowerCase();

  if (/landing page|loads successfully|page load/i.test(task)) {
    return "Match Results page opens with the heading, filters, data grid, and pagination.";
  }
  if (/move to case/i.test(task)) {
    return "Move to Case action is available and the record status updates after confirmation.";
  }
  if (/false positive/i.test(task)) {
    return "False Positive action works and the record status updates after a comment is saved.";
  }
  if (/confirm match/i.test(task)) {
    return "Confirm Match action works and the record status updates after a comment is saved.";
  }
  if (/under review/i.test(task)) {
    return "Under Review action is applied and the status badge updates in the grid.";
  }
  if (/export|download|report/i.test(task)) {
    return "Export Report downloads a file or shows a success message.";
  }
  if (/filter|search/i.test(task)) {
    return "Grid shows only records that match the filter or search value.";
  }
  if (/clear filter/i.test(task)) {
    return "All filters reset and the full record list is shown again.";
  }
  if (/pagination/i.test(task)) {
    return "Pagination moves between pages and shows the correct records.";
  }
  if (/sort/i.test(task)) {
    return "Column sorting reorders the grid rows correctly.";
  }
  if (/ai summary/i.test(task)) {
    return "AI Summary tab shows the screening summary and risk details.";
  }
  if (/match details/i.test(task)) {
    return "Match Details tab shows watchlist hits and attribute comparisons.";
  }
  if (/view summary/i.test(task)) {
    return "View Summary tab shows the scorecard and screening overview.";
  }
  if (/comment modal|mandatory comment/i.test(task)) {
    return "Comment Modal opens, requires a comment, and saves the action on confirm.";
  }
  if (/unauthorized|access denied|restricted/i.test(task)) {
    return "User cannot perform the action or sees an access denied message.";
  }
  if (/empty|no record|zero result/i.test(task)) {
    return "A clear empty-state message is shown when no records match.";
  }
  if (/audit|history/i.test(task)) {
    return "Audit history shows the action, user name, comment, and timestamp.";
  }
  if (/performance|load time|sla/i.test(task)) {
    return "Page or grid loads within the time limit defined in test data.";
  }

  return `${extractCoreTask(row.taskDescription)} works as described with no errors.`;
}

function buildExpectedResult(row: BsExcelRow, _fsd: FsdCatalogEntry | undefined): string {
  const sc = scenarioContext(row);
  const core = extractCoreExpectedResult(sanitizeOutput(row.expectedResult));
  const bullets: string[] = [];

  const genericCore = /should display correctly|configured ui components|works as described/i.test(core);
  if (core.length > 20 && !genericCore && !/ui validation/i.test(core)) {
    bullets.push(core.endsWith(".") ? core : `${core}.`);
  } else {
    bullets.push(buildPrimaryOutcome(row, sc));
  }

  if (isActionScenario(sc)) {
    bullets.push("Action comment is saved with the user name and time.");
  }
  if (/filter|search/i.test(sc) && !/empty|no match|landing|page load|injection|xss|sql|security/i.test(sc)) {
    bullets.push("Only matching records appear in the grid.");
  }
  if (/export|audit trail|audit log/i.test(sc)) {
    bullets.push("The action is recorded in the audit trail.");
  }
  if (isNegativeCase(row) && /invalid|error|deny|block|injection/i.test(sc)) {
    bullets.push("A clear error or validation message is shown.");
  }
  if (/refresh|persist|sync/i.test(sc) && bullets.length < 4) {
    bullets.push("The result remains correct after page refresh.");
  }

  const unique = [...new Set(bullets.map((b) => b.trim()))].slice(0, 4);
  return sanitizeOutput(unique.map((b) => `• ${b}`).join("\n"));
}

function buildPreconditions(row: BsExcelRow, _fsd: FsdCatalogEntry | undefined): string {
  const sc = scenarioContext(row);
  const lines = defaultPreconditions().split("\n").map((l) => l.replace(/^\d+\.\s*/, ""));

  if (isActionScenario(sc)) {
    lines.push("At least one screening record is in Under Review status.");
  }
  if (/export|download report/i.test(sc)) {
    lines.push("User has permission to export reports.");
  }
  if (/empty|no match|no record/i.test(sc)) {
    lines.push("Test data includes a filter or search that returns no records.");
  }
  if (/unauthorized|restricted|read-only/i.test(sc)) {
    lines.push("Test data includes a user role with limited access.");
  }

  return lines.map((l, i) => `${i + 1}. ${sanitizeOutput(l)}`).join("\n");
}

function buildAcceptanceCriteria(_row: BsExcelRow): string {
  return "Test passes when all steps are done and the expected results are met.";
}

function isRedundantScenarioStep(step: string): boolean {
  return /select (view details|false positive|confirm match|move to case|under review|move to whitelist|move to exception)/i.test(step)
    || /click the actions dropdown/i.test(step)
    || /comment modal opens/i.test(step)
    || /enter action comment/i.test(step)
    || /confirm action and verify/i.test(step);
}

function buildStandardPreamble(row: BsExcelRow): string[] {
  if (isRbacOrSecurity(row)) {
    return [
      "Open Sanctions Screening using the role from test data.",
      "Go to the Match Results page.",
    ];
  }

  return [
    "Open Sanctions Screening from the main menu.",
    "Go to the Match Results page and wait for the page to load.",
    "Check that the filter bar and results grid are visible.",
  ];
}

function buildHtmlNavigationSteps(row: BsExcelRow, navMap: HtmlNavigationMap): string[] {
  const ctx = rowContext(row);
  const screen = screenForSubModule(row.subModule);
  const steps: string[] = [];

  if (screen === "screen-landing" || !screen || screen === "screen-landing") {
    if (/watchlists/i.test(ctx)) {
      steps.push("Click the Watchlists top navigation tab and verify the tab becomes active.");
    }
    if (/manual screening|screening tab/i.test(ctx) && !/batch screening/i.test(ctx)) {
      steps.push("Click the Screening top navigation tab and verify navigation to the screening entry area.");
    }
    if (/date range|last year|custom range|preset/i.test(ctx)) {
      steps.push("Click the Date Range Preset dropdown in the page header and select a preset such as Last Year or Custom Range.");
    }
    if (/export/i.test(ctx)) {
      steps.push("Click the Export Report button in the Match Results header bar.");
    }
    for (const chip of navMap.filterChips) {
      if (ctx.includes(chip.toLowerCase().replace(/\./g, ""))) {
        steps.push(`Click the ${chip} filter chip to open its filter panel.`);
        steps.push(`Enter or select a ${chip} value from test data and click Apply.`);
        steps.push(`Verify the ${chip} chip displays the applied value and the grid refreshes.`);
      }
    }
    if (/clear filter/i.test(ctx)) {
      steps.push("Click Clear Filters and verify all filter chips reset to All.");
    }
    if (/pagination/i.test(ctx)) {
      steps.push("Click the pagination next control and verify the page index and row set update.");
      steps.push("Click the pagination previous control and verify return to the prior page.");
    }
    if (/customer name|name link|open.*record/i.test(ctx) || screen === "screen-p1") {
      steps.push("Click the customer name link in the first row of the Match Results grid.");
    }
    if (/matched list|number of matched|matched count/i.test(ctx)) {
      steps.push("Click the Number Of Matched List chip in the grid row.");
    }
    const landingLinks = linksForScreen(navMap, "screen-landing");
    for (const link of landingLinks) {
      if (link.actionMenu && /action|dropdown|under review|move to/i.test(ctx)) {
        steps.push("Click the Actions dropdown on a grid row to open the action menu.");
        break;
      }
    }
  }

  if (screen === "screen-p1" || /screening results/i.test(ctx)) {
    if (!steps.some((s) => s.includes("customer name"))) {
      steps.push("Open a screening record by clicking the customer name or Number Of Matched List chip from Match Results.");
    }
    steps.push("Verify the Screening Results page heading and Back to Match Results control are visible.");
    steps.push("Verify the subject card shows Primary Name, ID Number, Watchlist Profile, and Purpose fields.");
    steps.push("Verify the AI Screening Summary banner and statistics strip are displayed.");
    if (/new screening/i.test(ctx)) {
      steps.push("Click the New Screening button on the Screening Results page.");
    }
    if (/filter results/i.test(ctx)) {
      steps.push("Click the Filter Results button above the potential matches table.");
    }
    if (/matched list|match review|view details/i.test(ctx)) {
      steps.push("Click the Number Of Matched List chip on the Screening Results table row.");
    }
    if (/back/i.test(ctx)) {
      steps.push("Click the Back control to return to the Match Results page.");
    }
  }

  if (screen === "screen-review" || /match review|ai summary|match details|view summary/i.test(ctx)) {
    if (!steps.some((s) => /Screening Results/i.test(s))) {
      steps.push("From Screening Results, click the Number Of Matched List chip or select View Details from the Actions menu.");
    }
    steps.push("If the Comment Modal appears, enter the required action comment and click Confirm Action.");
    steps.push("Verify the Match Review header shows the reference ID and action buttons: Report, False Positive, Confirm Match.");
    for (const tab of navMap.reviewTabs) {
      if (ctx.includes(tab.toLowerCase().replace(/\s+/g, " "))) {
        steps.push(`Click the ${tab} tab and verify the tab content panel loads.`);
      }
    }
    if (/watchlist hit|attribute comparison|full profile/i.test(ctx)) {
      steps.push("On Match Details, expand a watchlist hit card and review the attribute comparison table.");
      steps.push("Click View Full Profile or Escalate Case on a watchlist hit card where applicable.");
    }
    if (/false positive/i.test(ctx)) {
      steps.push("Click the False Positive button in the Match Review header and complete the Comment Modal.");
    }
    if (/confirm match/i.test(ctx)) {
      steps.push("Click the Confirm Match button in the Match Review header and complete the Comment Modal.");
    }
    if (/report/i.test(ctx) && !/export/i.test(ctx)) {
      steps.push("Click the Report button in the Match Review header.");
    }
    if (/back/i.test(ctx)) {
      steps.push("Click Back to return to the Screening Results page.");
    }
  }

  return steps;
}

function buildActionMenuSteps(row: BsExcelRow): string[] {
  const ctx = rowContext(row);
  const steps: string[] = [];

  if (!/action|comment modal|false positive|confirm match|move to|whitelist|exception|under review/i.test(ctx)) {
    return steps;
  }

  steps.push("Click the Actions dropdown on the screening result row.");

  if (/false positive/i.test(ctx)) {
    steps.push("Select False Positive from the Actions menu.");
  } else if (/confirm match/i.test(ctx)) {
    steps.push("Select Confirm Match from the Actions menu.");
  } else if (/move to case/i.test(ctx)) {
    steps.push("Select Move to Case from the Actions menu.");
  } else if (/whitelist/i.test(ctx)) {
    steps.push("Select Move to Whitelist from the Actions menu.");
  } else if (/exception/i.test(ctx)) {
    steps.push("Select Move to Exception List from the Actions menu.");
  } else if (/under review/i.test(ctx)) {
    steps.push("Select Under Review from the Actions menu.");
  } else if (/view details/i.test(ctx)) {
    steps.push("Select View Details from the Actions menu.");
  } else {
    steps.push("Select the action described in the test objective from the Actions menu.");
  }

  steps.push("Verify the Comment Modal opens with a comment text field and Cancel and Confirm Action buttons.");

  if (/mandatory|empty|missing/i.test(ctx)) {
    steps.push("Click Confirm Action without entering a comment and verify mandatory comment validation is shown.");
  } else if (/cancel/i.test(ctx)) {
    steps.push("Click Cancel on the Comment Modal and verify the modal closes without changing the record status.");
  } else {
    steps.push(`Enter action comment: ${ACTION_COMMENTS.valid}`);
    steps.push("Click Confirm Action and verify the action completes successfully.");
  }

  steps.push("Verify the record status badge in the grid updates to reflect the selected action.");
  return steps;
}

function buildSubmoduleSteps(row: BsExcelRow, inventory: HtmlInventory): string[] {
  const ctx = rowContext(row);
  const steps: string[] = [];
  const sm = row.subModule.toLowerCase();

  if (sm.includes("scr-00") || sm === "batch screening") {
    steps.push("Verify top navigation tabs: Match Results, Watchlists, and Screening are visible.");
    steps.push("Verify grid columns include Name, Cust ID, Number Of Matched List, Highest Match Score, List Name, Match Category, Match Type, Match Date, and Actions.");
  }

  if (sm.includes("filters") || sm.includes("search")) {
    steps.push("Locate the search input above the Match Results grid.");
    if (/xss|sql|injection|special char/i.test(ctx)) {
      steps.push("Enter the test search value and submit; verify safe handling without script execution.");
    } else if (/invalid|no match/i.test(ctx)) {
      steps.push("Enter a search value that yields no matches and verify the empty-results message.");
    } else {
      steps.push("Enter the search keyword from test data and verify filtered rows match the criteria.");
    }
  }

  if (sm.includes("export") || sm.includes("audit")) {
    if (/audit|history|comment/i.test(ctx)) {
      steps.push("After completing an action, verify audit or activity history records the user, timestamp, and comment.");
    }
  }

  if (sm.includes("rbac") || sm.includes("security")) {
    if (/export/i.test(ctx)) {
      steps.push("Verify Export Report is hidden or disabled for the unauthorized role.");
    } else if (/direct url/i.test(ctx)) {
      steps.push("Open the Batch Screening URL directly and verify access is denied or redirected.");
    } else {
      steps.push("Attempt the restricted action and verify access is blocked without exposing sensitive data.");
    }
  }

  if (sm.includes("threshold") || sm.includes("ai logic")) {
    steps.push("Verify Highest Match Score displays with color-coded progress bar (red ≥90%, orange ≥75%, yellow below).");
    steps.push("Verify AI Screening Summary banner text and risk signal badges on Screening Results.");
  }

  if (sm.includes("negative") || sm.includes("nfr")) {
    if (/refresh|browser back/i.test(ctx)) {
      steps.push("Refresh the page and verify persisted status or expected reset behavior.");
    } else if (/session|timeout|expire/i.test(ctx)) {
      steps.push("Continue workflow after session expiry and verify re-authentication or access denial.");
    } else if (/empty|no result/i.test(ctx)) {
      steps.push("Apply criteria that return zero records and verify the empty-state message in the grid.");
    }
  }

  if (isApiCase(row)) {
    steps.push("Trigger the backend screening request through the UI action and observe loading and result state.");
    if (/duplicate|retry/i.test(ctx)) {
      steps.push("Repeat the request and verify duplicate processing is prevented.");
    }
  }

  if (sm.includes("integration") || sm.includes("sync")) {
    steps.push("Complete an action on a record, refresh Match Results, and verify the updated status persists.");
  }

  if (isPerformanceCase(row)) {
    steps.push("Measure time until Match Results grid is fully rendered and compare against the SLA in test data.");
  }

  if (inventory.tables.length > 0 && /column|header|grid/i.test(ctx)) {
    steps.push("Verify table column headers match the expected screening data fields for the active page.");
  }

  return steps;
}

function buildScenarioFromOriginal(row: BsExcelRow): string[] {
  const original = parseNumberedSteps(row.testSteps);
  const steps: string[] = [];
  for (const step of original) {
    const normalized = sanitizeOutput(step.trim());
    if (normalized.length > 5 && !isLoginOrLogoutStep(normalized) && !isRedundantScenarioStep(normalized)) {
      steps.push(normalized.charAt(0).toUpperCase() + normalized.slice(1));
    }
  }
  return steps;
}

function buildTaskSpecificSteps(row: BsExcelRow): string[] {
  const ctx = rowContext(row);
  const steps: string[] = [];

  if (/sort/i.test(ctx)) {
    steps.push("Click a sortable column header and verify ascending order.");
    steps.push("Click the same header again and verify descending order.");
  }

  if (/visibility|display|render|visible/i.test(ctx)) {
    steps.push("Verify the target control is visible, enabled, and labeled correctly on the active page.");
  }

  return steps;
}

function buildValidationTail(row: BsExcelRow): string[] {
  const tail: string[] = [];

  if (!isRbacOrSecurity(row)) {
    tail.push("Check that the page layout looks correct with no overlapping elements.");
  }

  if (!isApiCase(row) && !isRbacOrSecurity(row) && !/session expire/i.test(rowContext(row))) {
    tail.push("Refresh the page and confirm the result still holds.");
  }

  return tail;
}

function dedupeSteps(steps: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of steps) {
    const cleaned = sanitizeOutput(s);
    if (isLoginOrLogoutStep(cleaned)) continue;
    const key = cleaned.toLowerCase().replace(/\s+/g, " ").trim();
    if (!seen.has(key) && key.length > 8) {
      seen.add(key);
      out.push(cleaned);
    }
  }
  return out;
}

function numberSteps(steps: string[]): string {
  return steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
}

function enrichTestData(row: BsExcelRow): string {
  const sc = scenarioContext(row);
  const record = resolveRecordFromContext(sc);

  let extras = "";
  if (/xss/i.test(sc)) extras = `Search: ${SEARCH_KEYWORDS.xssInjection}`;
  else if (/sql/i.test(sc)) extras = `Search: ${SEARCH_KEYWORDS.sqlInjection}`;
  else if (/special char/i.test(sc)) extras = `Search: ${SEARCH_KEYWORDS.specialChars}`;
  else if (/invalid search|no match/i.test(sc)) extras = `Search: ${SEARCH_KEYWORDS.invalid}`;
  else if (/partial search/i.test(sc)) extras = `Search: ${SEARCH_KEYWORDS.validPartial}`;
  else if (/comment modal|false positive|confirm match|move to case|under review/i.test(sc)) {
    extras = `Comment: ${ACTION_COMMENTS.valid}`;
  } else if (/unauthorized|restricted/i.test(sc)) extras = "Role: Restricted user";
  else if (/manager/i.test(sc)) extras = "Role: Compliance Manager";

  return formatTestData(record, extras);
}

function trimToTarget(steps: string[], min = 3, max = 8): string[] {
  const pad = [
    "Check that the match count badge shows the number of records in the grid.",
    "Check that all expected column headers are shown in the grid.",
    "Check that the selected filter chip shows the applied value.",
    "Check that buttons and links respond when clicked.",
    "Check that a success or confirmation message appears after the main action.",
    "Check that you stay on the correct Batch Screening page throughout the test.",
    "Check that status badges show the correct color for each status.",
    "Check that the Comment Modal accepts text and enables Confirm Action.",
    "Check that the AI Screening Summary banner appears on Screening Results.",
    "Check that Match Review tabs switch without losing context.",
  ];
  const result = steps.filter((s) => !isLoginOrLogoutStep(s));
  let padIdx = 0;
  while (result.length < min) {
    result.push(pad[padIdx % pad.length]);
    padIdx += 1;
  }
  return result.slice(0, max);
}

export function expandRow(
  row: BsExcelRow,
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
  navMap: HtmlNavigationMap,
): EnhancedBsRow {
  const mapping = mapRowToFsd(row, sections);
  const fsd = getCatalogEntry(catalog, mapping.fsdSectionId);

  const merged = trimToTarget(
    dedupeSteps([
      ...buildFocusedExcelSteps(row, navMap),
      ...buildTaskSpecificSteps(row),
    ]),
    3,
    8,
  );

  return {
    ...row,
    subModule: sanitizeSubModule(row.subModule),
    taskDescription: buildDetailedTaskDescription(row),
    preconditions: buildPreconditions(row, fsd),
    testSteps: numberSteps(merged),
    expectedResult: buildExpectedResult(row, fsd),
    acceptanceCriteria: buildAcceptanceCriteria(row),
    testData: enrichTestData(row),
    fsdSectionId: mapping.fsdSectionId,
    fsdSectionTitle: mapping.fsdSectionTitle,
    isNew: false,
  };
}

export function expandGapRow(
  gap: GapTestCaseSpec & { id: string },
  sections: FsdSection[],
  catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
  navMap: HtmlNavigationMap,
): EnhancedBsRow {
  const baseRow: BsExcelRow = {
    id: gap.id,
    module: "Sanction Screening",
    subModule: gap.subModule,
    taskDescription: gap.taskDescription,
    acceptanceCriteria: "",
    preconditions: "",
    testSteps: `Navigate to Match Results and verify ${gap.htmlControlLabel}`,
    testData: gap.testData,
    priority: gap.priority,
    expectedResult: `${gap.htmlControlLabel} should behave as expected for authorized users.`,
  };

  const expanded = expandRow(baseRow, sections, catalog, inventory, navMap);
  const extraSteps = [
    `Locate and click the ${gap.htmlControlLabel} control in the Batch Screening workflow.`,
    `Verify ${gap.htmlControlLabel} responds correctly and updates the page or record state as expected.`,
  ];

  const steps = dedupeSteps([...parseNumberedSteps(expanded.testSteps), ...extraSteps]);
  return {
    ...expanded,
    testSteps: numberSteps(trimToTarget(steps, 12, 22)),
    isNew: true,
    fsdSectionId: gap.fsdSectionId,
  };
}

export function countSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}
