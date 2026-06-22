import type { MsExcelRow } from "./types";

function escapeStr(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function pushUnique(steps: string[], step: string): void {
  if (step && !steps.includes(step)) {
    steps.push(step);
  }
}

export function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) {
    return [];
  }
  const normalized = testSteps.replace(/(\d+)\./g, "$1. ").replace(/\s+/g, " ").trim();
  const parts = normalized.split(/\s*(?=\d+\.\s)/).map((p) => p.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  if (parts.length > 0) {
    return parts;
  }
  return testSteps.split(/\.\s+/).map((p) => p.trim()).filter(Boolean);
}

function stepMatchesWord(step: string, word: string): boolean {
  return new RegExp(`\\b${word}\\b`, "i").test(step);
}

function isFormSectionStep(step: string): boolean {
  return /screening configuration|watchlist configuration|basic information|joint account holder/.test(step.toLowerCase());
}

function isSidebarNavigationStep(step: string): boolean {
  if (isFormSectionStep(step)) {
    return false;
  }
  const s = step.toLowerCase();
  return /dashboard navigation|navigate to dashboard|click dashboard/.test(s)
    || /kyc navigation|verify kyc/.test(s)
    || /sanction screening navigation|sanctions screening navigation/.test(s)
    || /customer risk/.test(s)
    || /real-time monitoring|batch monitoring|payments workflow/.test(s)
    || /ai-powered investigation/.test(s)
    || /lea \/ rfi|lea tracker|rfi tracker/.test(s)
    || /mis reports navigation|navigate to mis reports/.test(s)
    || /regulatory reports navigation/.test(s)
    || /simulation module|navigate to simulation/.test(s)
    || /configurations module|navigate to config|open config module|administration module|navigate to administration/.test(s);
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowBlob(row: MsExcelRow): string {
  return `${row.module} ${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData} ${row.preconditions}`.toLowerCase();
}

function assertionBlob(row: MsExcelRow): string {
  return `${row.taskDescription} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testSteps} ${row.testData}`.toLowerCase();
}

function inferEntityType(row: MsExcelRow): "Individual" | "Non-Individuals" | "Vessel" | null {
  const steps = parseNumberedSteps(row.testSteps).join(" ").toLowerCase();
  const task = `${row.taskDescription} ${row.subModule}`.toLowerCase();
  const scoped = `${steps} ${task}`;
  if (/vessel form|switch to vessel|vessel section|vessel entity/.test(scoped)) {
    return "Vessel";
  }
  if (/non-individual form|non individual form|switch to non-individual|non-individual section|registered name/.test(scoped)) {
    return "Non-Individuals";
  }
  if (/individual form|switch to individual|individual section/.test(scoped)) {
    return "Individual";
  }
  if (row.module === "Vessel Form") {
    return "Vessel";
  }
  if (row.module === "Non-Individual Form") {
    return "Non-Individuals";
  }
  if (row.module === "Individual Form") {
    return "Individual";
  }
  return null;
}

function isBulkContext(row: MsExcelRow): boolean {
  return row.module === "Bulk Upload"
    || row.module === "Bulk Upload Validation"
    || row.module === "Bulk Screening Results"
    || /bulk upload/.test(assertionBlob(row));
}

function expectsResultsNavigationBlocked(row: MsExcelRow): boolean {
  return /results page is not opened|not opened|does not navigate|navigation is blocked|no navigation|prevented from moving|form does not navigate|remain on the same page|does not proceed|submission is blocked|without navigating|without navigation|not navigate away|does not navigate away|does not open results|without opening results/.test(assertionBlob(row));
}

function isResultsContext(row: MsExcelRow): boolean {
  if (isBulkContext(row) && row.module !== "Bulk Screening Results") {
    return false;
  }
  if (isFormActionsModule(row) && expectsResultsNavigationBlocked(row)) {
    return false;
  }
  if (expectsResultsNavigationBlocked(row)) {
    return false;
  }
  return row.module === "Screening Results"
    || row.module === "AI Summary Panel"
    || row.module === "Results Table"
    || row.module === "Bulk Screening Results"
    || row.module === "Screening Results Page — Retry Behavior"
    || row.module === "Screening Results Page – Timeout Handling"
    || row.module === "Screening Results Page – Watchlist Availability"
    || row.module === "Screening Results Page – Zero Results"
    || row.module === "Screening Results Page – Network Error Handling"
    || row.module === "Screening Results Page – Network Retry"
    || row.module.startsWith("Manual Screening UI – Badge")
    || row.module.startsWith("Manual Screening – Color")
    || row.module.startsWith("Manual Screening – Screen Reader")
    || (/screening results page|results page|result set|view last results|opens the screening results page/.test(assertionBlob(row))
      && !expectsResultsNavigationBlocked(row));
}

function isNetworkFailureRow(row: MsExcelRow): boolean {
  return /network error|connection loss|timeout|api failure|retry/.test(assertionBlob(row));
}

function isZeroResultsRow(row: MsExcelRow): boolean {
  return /zero results|no matches found|0 potential matches|empty when no matches|table body remains empty|no match rows/.test(assertionBlob(row));
}

function needsMatchResultsData(row: MsExcelRow): boolean {
  if (!isResultsContext(row) || isZeroResultsRow(row)) {
    return false;
  }
  return /result data|contains rows|with matches|match rows|results table|highest score|top list|view details|filter bar|export report|ai summary|subject summary|metric card|potential matches found|severity badge|critical and high|genai badge|badge colour|badge color|customer id|match score|screening dates|timestamps|badges shown|badge includes clear text|badge text is announced|status badges communicate/.test(assertionBlob(row))
    || row.module === "Results Table"
    || row.module === "AI Summary Panel"
    || row.module === "Screening Results"
    || row.module.startsWith("Manual Screening UI – Badge");
}

function expectsValidationClearedOnEntitySwitch(row: MsExcelRow): boolean {
  return /do not appear in another entity form|does not carry errors|remain scoped to the entity form/.test(assertionBlob(row));
}

function parseExpectedWatchlistCount(row: MsExcelRow): number | null {
  const match = assertionBlob(row).match(/exactly (\d+) watchlist cards/);
  return match ? Number.parseInt(match[1], 10) : null;
}

function expectsBulkUploadFileSelectionOnly(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  return isBulkContext(row)
    && row.module === "Bulk Upload"
    && /file is accepted|zone updates|upload zone shows|selected file details|zone reflects the selected file|drag-and-drop selection works|file is selected|shows the file as selected/.test(blob)
    && !/navigates to|redirected|screening results page|processed successfully does not|start bulk screening works|bulk screening results|ready to screen and navigates/.test(blob);
}

function expectsBulkUploadSuccess(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  if (expectsBulkUploadFileSelectionOnly(row)) {
    return false;
  }
  return isBulkContext(row)
    && /redirected|navigates to the screening results|processed successfully|ready to screen and navigates|bulk screening results|start bulk screening works|accepts the csv file and navigates|xls file is processed successfully|xlsx file is accepted/.test(blob)
    && !/validation message|rejected|unsupported|missing mandatory|without uploading|without selecting|zone updates with the selected file details|upload zone shows the file as selected/.test(blob);
}

function inferBulkFileFormat(row: MsExcelRow): "csv" | "xls" | "xlsx" | "invalid" | "empty" {
  const blob = rowBlob(row);
  if (/empty file|zero-byte|zero byte/.test(blob)) {
    return "empty";
  }
  if (/unsupported|invalid extension|\.txt|non-csv mime|wrong format/.test(blob)) {
    return "invalid";
  }
  if (/\bxls\b(?!x)/.test(blob)) {
    return "xls";
  }
  if (/xlsx/.test(blob)) {
    return "xlsx";
  }
  return "csv";
}

function isPositiveAuthorizedContext(row: MsExcelRow): boolean {
  return /for authorized users|authorized user|authorized analyst|should display correctly for authorized/.test(assertionBlob(row));
}

function needsUnauthorizedApiMock(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  if (isPositiveAuthorizedContext(row)) {
    return false;
  }
  if (/logout|re-login|login again|browser back|browser refresh|session invalid/.test(blob)) {
    return false;
  }
  return /deny direct unauthorized|restricted module url|direct url access|access denied|not authorized|without permission|restricted role|unauthenticated|expired session/.test(blob);
}

function expectsAccessDeniedOutcome(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  if (isPositiveAuthorizedContext(row)) {
    return false;
  }
  return /should deny|access denied|not authorized|login required|restricted users should not|prevent unauthorized|should not view sensitive/.test(blob);
}

function isLayoutNavigationRow(row: MsExcelRow): boolean {
  return row.module === "Layout & Navigation" || /^TC-MS-/i.test(row.id);
}

function isFormActionsModule(row: MsExcelRow): boolean {
  return row.module === "Form Actions & Validation";
}

function isLicenseBannerModule(row: MsExcelRow): boolean {
  return row.module === "License Warning Banner";
}

function expectsBulkUploadValidation(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  return isBulkContext(row)
    && /unsupported|rejected|empty file|25 mb|validation message|mime type|client-side validation|zero-byte|wrong format|invalid extension|before any upload|inside the upload zone/.test(blob);
}

function expectsInlineFieldValidation(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  if (expectsBulkUploadValidation(row)) {
    return false;
  }
  return /inline error appears|inline mandatory field error|mandatory validation|validation message on empty|required error clears|both mandatory validation messages|registration number is required|registered name is required|vessel name is required|purpose is not selected|leave purpose unselected|leave registration number empty|leave registered name|leave vessel name empty/.test(blob);
}

function inferInlineFieldLabel(row: MsExcelRow): string {
  const blob = assertionBlob(row);
  if (/registration number/.test(blob)) {
    return "Registration Number";
  }
  if (/registered name/.test(blob)) {
    return "Registered Name";
  }
  if (/vessel name/.test(blob)) {
    return "Vessel Name";
  }
  if (/purpose/.test(blob)) {
    return "Purpose";
  }
  return "Name in English";
}

function expectsValidationOutcome(row: MsExcelRow): boolean {
  const blob = assertionBlob(row);
  if (isLicenseBannerModule(row) || isFormActionsModule(row)) {
    return false;
  }
  if (expectsInlineFieldValidation(row)) {
    return true;
  }
  if (expectsBulkUploadSuccess(row)) {
    return false;
  }
  if (isNetworkFailureRow(row)) {
    return false;
  }
  if (/without validation|no validation error|accepted without error|without error|does not incorrectly show/.test(blob)) {
    return false;
  }
  return /validation message appears|inline validation message|inline mandatory field error|mandatory validation|validation errors remain scoped|validation errors triggered|shows validation|displays validation|field is required|required field error|cannot submit|prevent submission|rejected with|is rejected|missing mandatory|without uploading|without selecting a watchlist|please upload a valid file/.test(blob)
    && !/license warning|license will expire|license expiry/.test(blob);
}

function appendInferredActions(row: MsExcelRow, steps: string[]): void {
  const blob = rowBlob(row);
  const task = row.taskDescription.toLowerCase();

  if (row.module === "Top Bar" && /view last results|opens the screening results page|button is clicked/.test(assertionBlob(row))) {
    return;
  }

  if (/reset form/.test(task) && !steps.some((s) => s.includes("clickResetButton"))) {
    pushUnique(steps, "await msPage.clickResetButton()");
  }
  if (/without uploading|without selecting a watchlist|without a valid uploaded file/.test(blob) && !steps.some((s) => s.includes("clickScreenButton"))) {
    pushUnique(steps, "await msPage.clickScreenButton()");
  }
  if (/drag-and-drop|upload.*valid|file status|row-level error badge/.test(blob) && !steps.some((s) => s.includes("uploadBulkFile"))) {
    const format = inferBulkFileFormat(row);
    pushUnique(steps, `await msPage.uploadBulkFile('${format}')`);
  }
  if (expectsBulkUploadSuccess(row) || /navigates to the screening results page|redirected to the screening results|processed successfully does not display|bulk screening results|start bulk screening works/.test(blob)) {
    pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
    if (!steps.some((s) => s.includes("clickScreenButton") || s.includes("clickStartBulkScreening"))) {
      pushUnique(steps, "await msPage.clickStartBulkScreening()");
    }
  }
  if (/fill all required fields|valid form submission|navigates to the screening results flow|allows navigation after valid|validation passes with no error|validation succeeds/.test(blob) && !expectsResultsNavigationBlocked(row)) {
    pushUnique(steps, "await msPage.submitValidIndividualScreening()");
  }
  if (/fill only a few optional fields|submission is blocked until validation|without filling any mandatory|without filling required/.test(blob)) {
    if (!steps.some((s) => s.includes("clickScreenButton"))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    }
  }
  if (/leave purpose unselected|purpose is not selected|purpose unselected/.test(blob)) {
    pushUnique(steps, "await msPage.resetPurposeSelection()");
    if (!steps.some((s) => s.includes("clickScreenButton"))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    }
  }
  if (/leave registration number empty|registration number validation/.test(blob)) {
    pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
    if (!steps.some((s) => s.includes("clickScreenButton"))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    }
  }
  if (/leave registered name|registered name validation/.test(blob)) {
    pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
    if (!steps.some((s) => s.includes("clickScreenButton"))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    }
  }
  if (/leave vessel name empty|vessel name validation/.test(blob)) {
    pushUnique(steps, "await msPage.selectEntityType('Vessel')");
    if (!steps.some((s) => s.includes("clickScreenButton"))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    }
  }
  if (/apply a category filter|select a category|changing category while text filter/.test(blob)) {
    pushUnique(steps, "await msPage.selectResultsCategoryFilter('Critical')");
  }
  if (/enter a search term|apply any text filter|apply a text filter|text filter and select a category/.test(blob)) {
    pushUnique(steps, "await msPage.searchResultsTable('HANIYA')");
  }
  if (/click any watchlist card|selected watchlist card displays|active selected styling/.test(blob) && !steps.some((s) => s.includes("selectFirstWatchlistCard"))) {
    pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
  }
  if (/banner remains fixed|while the user works in the form/.test(blob) && isLicenseBannerModule(row)) {
    pushUnique(steps, "await msPage.fillNameInEnglish('License Banner Interaction')");
  }
  if (/session expiry|expired session|session-expired/.test(blob)) {
    pushUnique(steps, "await msPage.mockSessionExpired()");
  }
  if (/view the badges|badges shown in the interface|open results containing|open a result set with critical/.test(blob)) {
    pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
  }
  if (/enter valid screening data|run a screening request expected to return no matches|screening returns zero/.test(blob) && !steps.some((s) => s.includes("runZeroMatchScreening"))) {
    pushUnique(steps, "await msPage.runZeroMatchScreening()");
  }
  if (/trigger a timeout|trigger a network failure|launch a screening request and force it to timeout|start a screening request using valid input/.test(blob) && !steps.some((s) => s.includes("clickScreenButton"))) {
    pushUnique(steps, "await msPage.fillNameInEnglish('HANIYA')");
    pushUnique(steps, "await msPage.selectPurpose('Onboarding Screening')");
    pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
    pushUnique(steps, "await msPage.clickScreenButton()");
  }
  if (/select multiple watchlists|select several watchlists|trigger the watchlist unavailable/.test(blob)) {
    pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
    pushUnique(steps, "await msPage.clickScreenButton()");
  }
}

const OPEN = "await msPage.openManualScreeningDirect(testData.baseUrl)";
const MATCH_NAME = "HANIYA";

export function buildExcelSetupActions(row: MsExcelRow): string[] {
  const steps: string[] = [];
  const blob = rowBlob(row);

  if (isLayoutNavigationRow(row)) {
    pushUnique(steps, "await msPage.openAppHome(testData.baseUrl)");
    pushUnique(steps, "await msPage.expectSidebarNavigationVisible()");
    return steps;
  }

  if (isNetworkFailureRow(row)) {
    pushUnique(steps, "await msPage.mockScreeningApiFailure()");
  }

  if (/watchlists are currently unavailable|watchlist unavailable/.test(assertionBlob(row))) {
    pushUnique(steps, "await msPage.mockWatchlistUnavailable()");
  }

  if (needsUnauthorizedApiMock(row)) {
    pushUnique(steps, "await msPage.mockUnauthorized()");
  }

  if (stepMatches(blob, "sidebar", "sanction screening") && !blob.includes("direct url")) {
    pushUnique(steps, OPEN);
    pushUnique(steps, "await msPage.openManualScreeningFromSidebar()");
  } else {
    pushUnique(steps, OPEN);
  }

  if (isBulkContext(row)) {
    pushUnique(steps, "await msPage.selectScreeningModeTab('Bulk Upload')");
    pushUnique(steps, "await msPage.expectBulkUploadPanelVisible()");
  } else if (!isResultsContext(row)) {
    pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
  }

  const entity = inferEntityType(row);
  if (entity && entity !== "Individual") {
    pushUnique(steps, `await msPage.selectEntityType('${entity}')`);
  }

  if (needsMatchResultsData(row)) {
    pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
  } else if (isResultsContext(row) && !isZeroResultsRow(row) && !isNetworkFailureRow(row)) {
    pushUnique(steps, "await msPage.openViewLastResults()");
    pushUnique(steps, "await msPage.expectResultsPageLoaded()");
  } else if (row.module === "Top Bar" && /view last results|opens the screening results page|button is clicked/.test(assertionBlob(row))) {
    pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
  }

  return steps;
}

export function buildExcelStepActions(row: MsExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const blob = rowBlob(row);

  for (const s of numbered) {
    if (stepMatches(s, "login", "log in", "logged in")) {
      continue;
    }
    if (isLayoutNavigationRow(row) && stepMatches(s, "open the aml application", "open manual screening", "open the application")) {
      continue;
    }
    if (stepMatches(s, "open the aml application", "open manual screening")) {
      if (isLayoutNavigationRow(row)) {
        continue;
      }
      if (!steps.some((x) => x.includes("openManualScreening") || x.includes("openAppHome"))) {
        pushUnique(steps, OPEN);
        pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
      }
      continue;
    }
    if (stepMatches(s, "select individual entity", "select individual")) {
      pushUnique(steps, "await msPage.selectEntityType('Individual')");
      continue;
    }
    if (stepMatches(s, "select non-individual entity", "select non individual entity")) {
      pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
      continue;
    }
    if (stepMatches(s, "select vessel entity")) {
      pushUnique(steps, "await msPage.selectEntityType('Vessel')");
      continue;
    }
    if (/start a screening request using valid input data|launch a screening request|trigger a timeout|trigger a network failure|force it to timeout/.test(s.toLowerCase())) {
      pushUnique(steps, "await msPage.fillNameInEnglish('HANIYA')");
      pushUnique(steps, "await msPage.selectPurpose('Onboarding Screening')");
      pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
      pushUnique(steps, "await msPage.clickScreenButton()");
      continue;
    }
    if (stepMatches(s, "open the manual screening page", "open manual screening page")) {
      if (!steps.some((x) => x.includes("openManualScreening"))) {
        pushUnique(steps, OPEN);
        if (!/view last results|opens the screening results page|button is clicked/.test(assertionBlob(row))) {
          pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
        }
      }
      if (/view last results|opens the screening results page|button is clicked/.test(assertionBlob(row))) {
        pushUnique(steps, "await msPage.openViewLastResults()");
      }
      continue;
    }
    if (stepMatches(s, "open any entity form", "open entity form", "open the individual form", "open the non-individual form", "open the vessel form")) {
      pushUnique(steps, "await msPage.expectActiveEntityFormVisible()");
      continue;
    }
    if (stepMatches(s, "select and populate a form under one entity type", "populate a form under one entity")) {
      pushUnique(steps, "await msPage.fillNameInEnglish('HANIYA')");
      continue;
    }
    if (stepMatches(s, "locate the reset form", "locate reset form")) {
      pushUnique(steps, "await msPage.expectResetFormButtonVisible()");
      continue;
    }
    if (stepMatches(s, "locate the start screening", "locate start screening")) {
      pushUnique(steps, "await msPage.expectStartScreeningButtonVisible()");
      continue;
    }
    if (stepMatches(s, "locate the screening configuration", "screening configuration section", "screening configuration header")) {
      pushUnique(steps, "await msPage.expectScreeningConfigurationSectionVisible()");
      continue;
    }
    if (stepMatches(s, "locate the watchlist configuration", "watchlist configuration grid", "watchlist card")) {
      pushUnique(steps, "await msPage.expectWatchlistGridVisible()");
      continue;
    }
    if (stepMatches(s, "open a completed screening", "open completed screening", "open the ai summary", "open the screening results page", "open screening results page")) {
      if (needsMatchResultsData(row)) {
        pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
      } else {
        pushUnique(steps, "await msPage.openViewLastResults()");
        pushUnique(steps, "await msPage.expectResultsPageLoaded()");
      }
      continue;
    }
    if (stepMatches(s, "leave purpose unselected", "purpose unselected", "leave purpose blank")) {
      pushUnique(steps, "await msPage.resetPurposeSelection()");
      pushUnique(steps, "await msPage.clickScreenButton()");
      continue;
    }
    if (stepMatches(s, "leave registration number empty")) {
      pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
      pushUnique(steps, "await msPage.clickScreenButton()");
      continue;
    }
    if (stepMatches(s, "leave registered name")) {
      pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
      pushUnique(steps, "await msPage.clickScreenButton()");
      continue;
    }
    if (stepMatches(s, "leave vessel name empty")) {
      pushUnique(steps, "await msPage.selectEntityType('Vessel')");
      pushUnique(steps, "await msPage.clickScreenButton()");
      continue;
    }
    if (/fill all required fields|enter valid screening data|valid screening data/.test(s.toLowerCase())) {
      if (isZeroResultsRow(row)) {
        pushUnique(steps, "await msPage.runZeroMatchScreening()");
      } else {
        pushUnique(steps, "await msPage.submitValidIndividualScreening()");
      }
      continue;
    }
    if (stepMatches(s, "apply a category filter", "select a category", "changing category")) {
      pushUnique(steps, "await msPage.selectResultsCategoryFilter('Critical')");
      continue;
    }
    if (stepMatches(s, "click any watchlist card", "click a watchlist card")) {
      pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
      continue;
    }
    if (stepMatches(s, "upload a valid csv", "upload a valid xls", "upload a valid csv/xls/xlsx")) {
      const format = inferBulkFileFormat(row);
      pushUnique(steps, `await msPage.uploadBulkFile('${format}')`);
      continue;
    }
    if (stepMatches(s, "select manual screening or bulk upload", "select manual screening", "select bulk upload as the active tab")) {
      if (/bulk upload tab|bulk upload as the active tab/.test(s.toLowerCase()) || isBulkContext(row)) {
        pushUnique(steps, "await msPage.selectScreeningModeTab('Bulk Upload')");
      } else {
        pushUnique(steps, "await msPage.selectScreeningModeTab('Manual Screening')");
      }
      continue;
    }
    if (stepMatches(s, "select a watchlist configuration card", "select watchlist card", "select a watchlist")) {
      pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
      continue;
    }
    if (stepMatches(s, "enter valid screening data", "run a screening request")) {
      pushUnique(steps, "await msPage.runZeroMatchScreening()");
      continue;
    }
    if (isSidebarNavigationStep(s)) {
      const label = stepMatches(s, "customer risk") ? "Customer Risk View"
        : stepMatches(s, "real-time") ? "Real-time Monitoring"
          : stepMatches(s, "batch monitoring") ? "Batch Monitoring"
            : stepMatches(s, "payments") ? "Payments Workflow"
              : stepMatches(s, "ai-powered") ? "AI-Powered Investigation"
                : stepMatches(s, "lea") || stepMatches(s, "rfi") ? "LEA / RFI Tracker"
                  : stepMatches(s, "mis reports") ? "MIS Reports"
                    : stepMatches(s, "regulatory") ? "Regulatory Reports"
                      : stepMatches(s, "simulation") ? "Simulation"
                        : stepMatches(s, "config") ? "Config"
                          : "Administration";
      pushUnique(steps, `await msPage.navigateSidebarModule('${label}')`);
    } else if (stepMatches(s, "open the screening page", "screening results page", "screening page", "open the screening results")) {
      if (/results/.test(blob)) {
        if (needsMatchResultsData(row)) {
          pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
        } else {
          pushUnique(steps, "await msPage.openViewLastResults()");
          pushUnique(steps, "await msPage.expectResultsPageLoaded()");
        }
      } else {
        pushUnique(steps, OPEN);
        pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
      }
    } else if (stepMatches(s, "retry", "click retry")) {
      pushUnique(steps, "await msPage.clickRetryButton()");
    } else if (stepMatches(s, "open the manual screening", "open manual screening", "navigate to manual screening")) {
      if (!steps.some((x) => x.includes("openManualScreening"))) {
        pushUnique(steps, OPEN);
        pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
      }
      continue;
    } else if (stepMatches(s, "open the bulk upload", "open bulk upload", "bulk upload tab")) {
      pushUnique(steps, "await msPage.selectScreeningModeTab('Bulk Upload')");
      pushUnique(steps, "await msPage.expectBulkUploadPanelVisible()");
    } else if (stepMatches(s, "switch from individual to non-individual", "switch to non-individual")) {
      pushUnique(steps, "await msPage.selectEntityType('Non-Individuals')");
    } else if (stepMatches(s, "switch to vessel")) {
      pushUnique(steps, "await msPage.selectEntityType('Vessel')");
    } else if (stepMatches(s, "switch to individual")) {
      pushUnique(steps, "await msPage.selectEntityType('Individual')");
    } else if (/^(click start screening|start screening without|start bulk screening|click screen\b)/i.test(s) || (stepMatches(s, "submit") && !/select manual screening/.test(s.toLowerCase()))) {
      pushUnique(steps, "await msPage.clickScreenButton()");
    } else if (stepMatches(s, "resize the browser", "resize window", "smaller desktop")) {
      pushUnique(steps, "await msPage.setDesktopViewport('narrow')");
    } else if (stepMatches(s, "scroll below", "scroll to", "inspect")) {
      if (/joint account/.test(blob)) {
        pushUnique(steps, "await msPage.expectJointAccountHolderSectionVisible()");
      } else if (/watchlist/.test(blob) && !isResultsContext(row)) {
        pushUnique(steps, "await msPage.expectWatchlistGridVisible()");
      }
    } else if (stepMatches(s, "open the country", "open dropdown", "open the purpose", "open the category")) {
      const label = stepMatches(s, "purpose") ? "Purpose"
        : stepMatches(s, "category") ? "Category"
          : stepMatches(s, "incorporation") ? "Country of Incorporation"
            : stepMatches(s, "nationality") ? "Nationality"
              : stepMatches(s, "country of birth") ? "Country of Birth"
                : stepMatches(s, "country of residence") ? "Country of Residence"
                  : "Country of Birth";
      pushUnique(steps, `await msPage.openCombobox('${label}')`);
    } else if (stepMatches(s, "select purpose", "choose purpose")) {
      const purpose = /transaction screening/i.test(row.testData + blob) ? "Transaction Screening" : "Onboarding Screening";
      pushUnique(steps, `await msPage.selectPurpose('${purpose}')`);
    } else if (stepMatches(s, "select watchlist", "click watchlist")) {
      pushUnique(steps, "await msPage.selectFirstWatchlistCard()");
    } else if (stepMatches(s, "click reset", "reset form", "reset the form")) {
      pushUnique(steps, "await msPage.clickResetButton()");
    } else if (stepMatches(s, "fill", "enter name", "partially fill", "type")) {
      if (/name/i.test(s)) {
        const name = /test entity/i.test(blob) ? "Test Entity" : MATCH_NAME;
        pushUnique(steps, `await msPage.fillNameInEnglish('${escapeStr(name)}')`);
      }
      if (/purpose/i.test(s)) {
        pushUnique(steps, "await msPage.selectPurpose('Onboarding Screening')");
      }
    } else if (/^(upload\b|drag-and-drop|drag and drop a|drop a valid)/i.test(s)) {
      const format = inferBulkFileFormat(row);
      pushUnique(steps, `await msPage.uploadBulkFile('${format}')`);
    } else if (stepMatches(s, "download template")) {
      pushUnique(steps, "await msPage.clickDownloadTemplate()");
    } else if (stepMatches(s, "view last results", "open the screening results", "open screening results")) {
      if (needsMatchResultsData(row)) {
        pushUnique(steps, "await msPage.ensureMatchResultsAvailable()");
      } else {
        pushUnique(steps, "await msPage.openViewLastResults()");
        pushUnique(steps, "await msPage.expectResultsPageLoaded()");
      }
    } else if (stepMatches(s, "export", "click export")) {
      pushUnique(steps, "await msPage.clickExportReport()");
    } else if (stepMatches(s, "clear filter", "reset filter", "all categories")) {
      pushUnique(steps, "await msPage.clearResultFilters()");
    } else if (stepMatches(s, "search", "enter text", "filter", "type in")) {
      const keyword = /no-match|invalid|zzzz/i.test(row.testData + blob) ? "zzzz-no-match-99999" : MATCH_NAME;
      pushUnique(steps, `await msPage.searchResultsTable('${escapeStr(keyword)}')`);
    } else if (stepMatches(s, "logout", "log out")) {
      pushUnique(steps, "await msPage.performLogoutAndReturn()");
    } else if (stepMatches(s, "refresh", "reload")) {
      pushUnique(steps, "await msPage.refreshPage()");
    } else if (stepMatches(s, "keyboard", "tab key", "focus")) {
      pushUnique(steps, "await msPage.expectKeyboardFocusableControls()");
    } else if (stepMatches(s, "click new screening", "new screening")) {
      pushUnique(steps, "await msPage.clickNewScreening()");
    } else {
      pushUnique(steps, `// TODO: Excel step not mapped — "${escapeStr(s)}"`);
    }
  }

  appendInferredActions(row, steps);

  return steps;
}

export function buildExcelAssertionActions(row: MsExcelRow): string[] {
  const steps: string[] = [];
  const ac = assertionBlob(row);

  if (expectsAccessDeniedOutcome(row)) {
    pushUnique(steps, "await msPage.expectAccessDenied()");
  }
  if (/sidebar|fixed sidebar|menu item|navigation|brand block|search box|identity bar|232px|sidebar width/.test(ac) && (isLayoutNavigationRow(row) || /sidebar|navigation|menu item|brand block|search box/.test(ac))) {
    pushUnique(steps, "await msPage.expectSidebarNavigationVisible()");
  }
  if (/232px|sidebar width/.test(ac)) {
    pushUnique(steps, "await msPage.expectSidebarWidthStable()");
  }
  if (/brand block|clari5 logo|application name/.test(ac) && isLayoutNavigationRow(row)) {
    pushUnique(steps, "await msPage.expectBrandBlockVisible()");
  }
  if (/search box|sidebar search/.test(ac) && isLayoutNavigationRow(row)) {
    pushUnique(steps, "await msPage.expectSidebarSearchVisible()");
  }
  if (/top bar|breadcrumb|title display|manual screening page/.test(ac) && !isResultsContext(row) && row.module === "Top Bar" && !/opens the screening results page|view last results button|after the button is clicked/.test(ac)) {
    pushUnique(steps, "await msPage.expectTopBarVisible()");
  }
  if (/tab|manual screening tab|bulk upload tab|panel visibility/.test(ac) && !isResultsContext(row) && row.module === "Tab Navigation") {
    pushUnique(steps, "await msPage.expectScreeningModeTabsVisible()");
  }
  if (/individual|non-individual|vessel|entity type|toggle/.test(ac) && row.module === "Entity Type Toggle") {
    pushUnique(steps, "await msPage.expectEntityTypeToggleVisible()");
  }
  if (/basic information|joint account|form field|mandatory|text input|date picker|dropdown/.test(ac) && !isResultsContext(row) && !isBulkContext(row) && !isFormActionsModule(row) && /individual form|non-individual form|vessel form|form field|basic information/.test(row.module.toLowerCase() + ac)) {
    pushUnique(steps, "await msPage.expectActiveEntityFormVisible()");
  }
  if (/watchlist|card|grid|selection/.test(ac) && !isResultsContext(row) && row.module === "Watchlist Configuration") {
    pushUnique(steps, "await msPage.expectWatchlistGridVisible()");
  }
  if (/exactly 6 watchlist cards|6 watchlist cards/.test(ac)) {
    const count = parseExpectedWatchlistCount(row) ?? 6;
    pushUnique(steps, `await msPage.expectWatchlistCardCount(${count})`);
  }
  if (/screening configuration section|purpose dropdown is visible|purpose label|section title displays|screening configuration is rendered/.test(ac) && !isResultsContext(row)) {
    pushUnique(steps, "await msPage.expectScreeningConfigurationSectionVisible()");
  }
  if (expectsValidationClearedOnEntitySwitch(row)) {
    pushUnique(steps, "await msPage.expectValidationFeedbackHidden()");
  } else if (expectsInlineFieldValidation(row)) {
    pushUnique(steps, `await msPage.expectInlineFieldError('${escapeStr(inferInlineFieldLabel(row))}')`);
  } else if (expectsBulkUploadValidation(row)) {
    pushUnique(steps, "await msPage.expectBulkUploadValidationMessage()");
  } else if (expectsValidationOutcome(row)) {
    if (isBulkContext(row)) {
      pushUnique(steps, "await msPage.expectBulkUploadValidationMessage()");
    } else {
      pushUnique(steps, "await msPage.expectValidationFeedbackVisible()");
    }
  }
  if (expectsBulkUploadFileSelectionOnly(row)) {
    pushUnique(steps, "await msPage.expectBulkUploadFileSelected()");
  }
  if (expectsBulkUploadSuccess(row) || /navigates to the screening results page|redirected to the screening results|accepts the csv file and navigates|xls file is processed successfully|xlsx file is accepted/.test(ac)) {
    pushUnique(steps, "await msPage.expectResultsPageLoaded()");
  }
  if (expectsBulkUploadSuccess(row)) {
    pushUnique(steps, "await msPage.expectBulkUploadFileSelected()");
  }
  if (/selected card shows|active selected styling|blue border|✓ badge/.test(ac)) {
    pushUnique(steps, "await msPage.expectWatchlistCardSelectedStyling()");
  }
  if (/active top-level tab remains unchanged|remains unchanged after reset|entity type remains unchanged|currently active entity type remains unchanged/.test(ac) && isFormActionsModule(row)) {
    pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
    pushUnique(steps, "await msPage.expectScreeningModeTabsVisible()");
  }
  if (/navigates to the screening results flow|passes validation and navigates|allows navigation after valid|validation passes with no error|validation succeeds, no error/.test(ac) && isFormActionsModule(row)) {
    pushUnique(steps, "await msPage.expectResultsPageLoaded()");
  }
  if (/watchlists are currently unavailable|watchlist unavailable/.test(ac)) {
    pushUnique(steps, "await msPage.expectWatchlistUnavailableMessage()");
  }
  if (/session-expired|expired session|redirects to the login page/.test(ac)) {
    pushUnique(steps, "await msPage.expectSessionExpiredState()");
  }
  if (/badge includes clear text|badge text is announced|badges communicate meaning|sanctions, pep, or under review/.test(ac)) {
    pushUnique(steps, "await msPage.expectBadgeAccessibilityLabels()");
  }
  if (/no unauthorized inline styles|inline styles override/.test(ac)) {
    pushUnique(steps, "await msPage.expectManualScreeningPageLoaded()");
  }
  if (/row error|row-level error badge|row error – skipped/.test(ac) && row.module === "Bulk Screening Results") {
    pushUnique(steps, "await msPage.expectResultsTableVisible()");
  }
  if (isLicenseBannerModule(row) || (/license will expire|license warning|license expiry/.test(ac) && !expectsValidationOutcome(row))) {
    pushUnique(steps, "await msPage.expectLicenseBannerVisible()");
  }
  if (/bulk upload|upload zone|file status|template|csv|xls|xlsx/.test(ac) && isBulkContext(row)) {
    pushUnique(steps, "await msPage.expectBulkUploadPanelVisible()");
  }
  if (isFormActionsModule(row)) {
    if (/reset form|start screening|action button|bottom-left|bottom-right/.test(ac)) {
      pushUnique(steps, "await msPage.expectFormActionButtonsVisible()");
    }
    if (/reset form.*ghost|ghost\/outlined|outlined styling/.test(ac)) {
      pushUnique(steps, "await msPage.expectResetFormButtonVisible()");
    }
    if (/start screening.*primary|primary navy|navy button/.test(ac)) {
      pushUnique(steps, "await msPage.expectStartScreeningButtonVisible()");
    }
  }
  if ((isResultsContext(row) || /screening results|subject summary|metric|avatar|new screening|opens the screening results page|after the button is clicked/.test(ac)) && !isBulkContext(row) && !expectsResultsNavigationBlocked(row) && !isNetworkFailureRow(row)) {
    pushUnique(steps, "await msPage.expectResultsPageLoaded()");
  }
  if (/export report|downloadable report|exported report contains/.test(ac) && isResultsContext(row)) {
    pushUnique(steps, "await msPage.clickExportReport()");
  }
  if (/all available results are restored|clearing all active filters|no filtering applied/.test(ac) && isResultsContext(row)) {
    pushUnique(steps, "await msPage.clearResultFilters()");
    pushUnique(steps, "await msPage.expectResultsTableVisible()");
  }
  if (isZeroResultsRow(row)) {
    pushUnique(steps, "await msPage.expectZeroResultsState()");
  }
  if (/ai summary|genai|investigation narrative|ai panel|ai screening summary|screening engine/.test(ac)) {
    pushUnique(steps, "await msPage.expectAiSummaryPanelVisible()");
  }
  if (/genai badge|gpt-4o|pulse dot/.test(ac)) {
    pushUnique(steps, "await msPage.expectGenAiBadgeVisible()");
  }
  if (/pulse dot|animated pulse/.test(ac)) {
    pushUnique(steps, "await msPage.expectGenAiPulseDotVisible()");
  }
  if (/metric card|five stat cards|stat cards/.test(ac) && isResultsContext(row)) {
    pushUnique(steps, "await msPage.expectMetricCardsVisible()");
  }
  if (/severity badge|critical and high|medium and under review|sanctions, pep|onboarding, monitoring|regulatory badges/.test(ac)) {
    pushUnique(steps, "await msPage.expectSeverityBadgesVisible()");
  }
  if (/results table|column|row|filter bar|score|category filter|export report|highest score|top list|view details|status badge|match date/.test(ac) && isResultsContext(row) && !isZeroResultsRow(row)) {
    pushUnique(steps, "await msPage.expectResultsTableVisible()");
  }
  if (/highest score|progress bar|numeric %|numeric percentage/.test(ac) && isResultsContext(row)) {
    pushUnique(steps, "await msPage.expectHighestScoreColumnVisible()");
  }
  if (/retry|network|timeout|error recovery|api failure/.test(ac) && isNetworkFailureRow(row)) {
    if (/loading indicator|spinner|progress bar|disabled retry|loading spinner is dismissed|spinner stops|spinner is dismissed/.test(ac)) {
      pushUnique(steps, "await msPage.expectRetryLoadingIndicatorVisible()");
    } else if (/timeout message|network error message|retry button is available/.test(ac)) {
      pushUnique(steps, "await msPage.expectNetworkOrTimeoutErrorVisible()");
    } else {
      pushUnique(steps, "await msPage.expectApiFailureHandledGracefully()");
    }
  }
  if (/keyboard accessibility for.*view last results|view last results button.*keyboard/.test(ac)) {
    pushUnique(steps, "await msPage.expectViewLastResultsKeyboardAccessible()");
  } else if (/accessibility|keyboard|screen reader|focus/.test(ac)) {
    pushUnique(steps, "await msPage.expectAccessibilityBasics()");
  }
  if (/responsive|resize|layout|alignment|typography|styling|2-column layout|grid layout/.test(ac) && !isLayoutNavigationRow(row)) {
    if (/screening configuration|watchlist configuration|section title|purpose label/.test(ac)) {
      if (/watchlist/.test(ac)) {
        pushUnique(steps, "await msPage.expectWatchlistGridVisible()");
      } else {
        pushUnique(steps, "await msPage.expectScreeningConfigurationSectionVisible()");
      }
    } else {
      pushUnique(steps, "await msPage.expectLayoutStable()");
    }
  }
  if (steps.length === 0) {
    pushUnique(steps, "await msPage.expectPageShellLoaded()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: MsExcelRow): string {
  const lines: string[] = [];
  const setup = buildExcelSetupActions(row);
  let actions = buildExcelStepActions(row);
  let assertions = buildExcelAssertionActions(row);

  if (isLayoutNavigationRow(row)) {
    actions = actions.filter((s) => !s.includes("openManualScreening") && !s.includes("expectManualScreeningPageLoaded"));
    assertions = assertions.filter((s) => !s.includes("expectManualScreeningPageLoaded") && !s.includes("expectTopBarVisible"));
  }

  if (isLicenseBannerModule(row)) {
    assertions = assertions.filter((s) => !s.includes("expectActiveEntityFormVisible()"));
  }

  const onResultsWithData = [
    ...setup,
    ...actions,
    ...assertions,
  ].some((s) => s.includes("ensureMatchResultsAvailable") || s.includes("expectResultsTableVisible") || s.includes("expectHighestScoreColumnVisible"));

  if (onResultsWithData) {
    assertions = assertions.filter((s) => !s.includes("expectZeroResultsState()"));
  }

  if (isNetworkFailureRow(row)) {
    assertions = assertions.filter((s) => !s.includes("expectResultsPageLoaded()") && !s.includes("expectResultsTableVisible()"));
  }

  if (expectsBulkUploadValidation(row)) {
    assertions = assertions.filter((s) => !s.includes("expectInlineFieldError("));
  }

  if (expectsValidationClearedOnEntitySwitch(row)) {
    actions = actions.filter((s) => !s.includes("selectEntityType('Non-Individuals')") && !s.includes("clickScreenButton()") && !s.includes("openManualScreeningDirect"));
    for (const step of setup) {
      pushUnique(lines, step);
    }
    pushUnique(lines, "await msPage.clickScreenButton()");
    pushUnique(lines, "await msPage.expectValidationFeedbackVisible()");
    pushUnique(lines, "await msPage.selectEntityType('Non-Individuals')");
    for (const step of actions) {
      pushUnique(lines, step);
    }
    for (const step of assertions) {
      pushUnique(lines, step);
    }
    return lines.join(";\n    ");
  }

  for (const block of [setup, actions, assertions]) {
    for (const step of block) {
      pushUnique(lines, step);
    }
  }
  return lines.join(";\n    ");
}

export function formatTestTitle(row: MsExcelRow): string {
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${row.module} → ${action}`;
}

export function formatExcelComment(row: MsExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Excel Scenario: ${row.taskDescription}`;
}
