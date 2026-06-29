import type { ScExcelRow } from "./types";

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
  const normalized = testSteps.replace(/(\d+)\.(?=[A-Za-z])/g, "$1. ");
  const parts = normalized.split(/\s*(?=\d+\.\s)/).map((p) => p.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  if (parts.length > 0) {
    return parts;
  }
  return testSteps.split(/\n+/).map((p) => p.trim()).filter(Boolean);
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowBlob(row: ScExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData} ${row.preconditions}`.toLowerCase();
}

function subModuleKey(row: ScExcelRow): string {
  return row.subModule.toLowerCase();
}

function isAuthDeniedScenario(row: ScExcelRow): boolean {
  const blob = rowBlob(row);
  if (/rbac -/i.test(subModuleKey(row))) {
    return false;
  }
  return (/unauthorized|without permission|not authorized|restricted role/.test(blob)
    || (/access denied/.test(blob) && !/unavailable or access is denied|permitted screens/.test(blob)))
    && !/authorized access|authorized user/.test(blob);
}

function isApiFailureRow(row: ScExcelRow): boolean {
  return /api failure|network error|timeout|service unavailable|save failure/.test(rowBlob(row));
}

function isEditWatchlistContext(row: ScExcelRow): boolean {
  return /edit watchlist|edit configuration/.test(rowBlob(row));
}

function isViewDetailsContext(row: ScExcelRow): boolean {
  return /view watchlist details/.test(subModuleKey(row));
}

function isUploadCustomContext(row: ScExcelRow): boolean {
  return /upload custom list/.test(subModuleKey(row));
}

function isListsLibraryContext(row: ScExcelRow): boolean {
  return /lists library/.test(subModuleKey(row));
}

function isCreateWizardContext(row: ScExcelRow): boolean {
  const sub = subModuleKey(row);
  if (isEditWatchlistContext(row) || isUploadCustomContext(row) || isListsLibraryContext(row) || isViewDetailsContext(row)) {
    return false;
  }
  return [
    "basic information",
    "list selection",
    "field mapping",
    "match score configuration",
    "result configuration",
    "create watchlist",
  ].some((key) => sub.includes(key));
}

function isPaginationContext(row: ScExcelRow): boolean {
  return subModuleKey(row) === "pagination";
}

function isSecurityInputContext(row: ScExcelRow): boolean {
  return /security -|xss|sql injection|html injection|csv injection|parameter tampering/.test(subModuleKey(row));
}

function isScreeningExecutionContext(row: ScExcelRow): boolean {
  return /execute screening|screening using|screening with/.test(row.testSteps.toLowerCase());
}

function isResultConfigurationContext(row: ScExcelRow): boolean {
  return subModuleKey(row) === "result configuration";
}

function isMatchLogicContext(row: ScExcelRow): boolean {
  return /name matching|alias matching|date of birth matching|nationality matching|country matching|passport matching|threshold logic|composite score|alert generation|no match logic|minimum match score|result ranking|end-to-end aml validation/.test(subModuleKey(row));
}

function testDataValue(row: ScExcelRow, fallback: string): string {
  const data = row.testData.trim();
  if (!data || /^n\/a$/i.test(data) || /^(existing|inactive) watchlist$/i.test(data)) {
    return fallback;
  }
  return data;
}

function isListSelectionContext(row: ScExcelRow): boolean {
  return subModuleKey(row) === "list selection";
}

function isFieldMappingContext(row: ScExcelRow): boolean {
  return subModuleKey(row) === "field mapping";
}

function isEmptyStateRow(row: ScExcelRow): boolean {
  return subModuleKey(row) === "empty state"
    || /no watchlist records exist/.test(row.taskDescription.toLowerCase());
}

function needsWizardAtListSelection(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isListSelectionContext(row)
    && /list selection step|completed basic information|step 2/.test(pre);
}

function needsWizardAtFieldMapping(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isFieldMappingContext(row)
    && (/field mapping step|completed list selection|list selection step|selected at least one watchlist|step 3/.test(pre)
      || /navigate to step 3|field mapping/.test(row.testSteps.toLowerCase()));
}

function needsListSelectionWithWatchlistSelected(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isListSelectionContext(row) && /selected at least one watchlist|has selected.*watchlist/.test(pre);
}

function needsWizardAtResultConfiguration(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isResultConfigurationContext(row) && /result configuration step/.test(pre);
}

function appendWizardReachMatchScore(steps: string[]): void {
  appendWizardReachFieldMapping(steps);
  pushUnique(steps, "await scPage.attemptWizardNext()");
}

function needsWizardAtMatchScoreBroad(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isMatchScoreWizardContext(row)
    && (/match score configuration step|completed field mapping|field mapping step|step 4|selected watchlist/.test(pre)
      || /navigate to step 4|match score configuration/.test(row.testSteps.toLowerCase()));
}

function needsWizardAtResultConfigurationBroad(row: ScExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  return isResultConfigurationContext(row)
    && (/result configuration step|completed match score|match score configuration step|step 5/.test(pre)
      || /navigate to step 5|result configuration/.test(row.testSteps.toLowerCase()));
}

function appendWizardReachResultConfiguration(steps: string[]): void {
  pushUnique(steps, "await scPage.completeBasicInformationStep()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
  pushUnique(steps, "await scPage.selectFirstAvailableList()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
}

function appendWizardReachFieldMapping(steps: string[]): void {
  pushUnique(steps, "await scPage.completeBasicInformationStep()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
  pushUnique(steps, "await scPage.selectFirstAvailableList()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
}

function appendWizardReachListSelection(steps: string[]): void {
  pushUnique(steps, "await scPage.completeBasicInformationStep()");
  pushUnique(steps, "await scPage.attemptWizardNext()");
}

function isViewDetailsNavigationBack(row: ScExcelRow): boolean {
  return isViewDetailsContext(row) && /back button|navigation control|listing page/.test(rowBlob(row));
}

function expectsPostSaveListing(row: ScExcelRow): boolean {
  return /updated successfully|persisted successfully|reflected in listing|reflected in view details|status change is completed/.test(rowBlob(row));
}

function isRbacRestrictedContext(row: ScExcelRow): boolean {
  const blob = rowBlob(row);
  return /cannot create|cannot edit|access is denied|restricted role|not authorized to/.test(blob)
    || (/rbac - viewer/i.test(subModuleKey(row)) && /cannot|not able|denied|unavailable/.test(blob));
}

function isRbacViewerPositiveAccess(row: ScExcelRow): boolean {
  return /rbac - viewer/i.test(subModuleKey(row)) && /can access|can view|permitted/.test(rowBlob(row));
}

function isMatchScoreWizardContext(row: ScExcelRow): boolean {
  return subModuleKey(row) === "match score configuration";
}

function isTrimWhitespaceScenario(row: ScExcelRow): boolean {
  return /trims leading|trim extra spaces|trimmed before|leading and trailing spaces/.test(rowBlob(row));
}

function saveStep(row: ScExcelRow): string {
  return isEditWatchlistContext(row)
    ? "await scPage.submitEditWizardChanges()"
    : "await scPage.clickSaveConfiguration()";
}

const OPEN = "await scPage.openScreeningConfigDirect(testData.baseUrl)";

export function buildExcelSetupActions(row: ScExcelRow): string[] {
  const steps: string[] = [];

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await scPage.mockScreeningConfigApiFailure()");
  }

  if (isAuthDeniedScenario(row)) {
    pushUnique(steps, "await scPage.mockUnauthorized()");
  }

  pushUnique(steps, OPEN);

  if (isEmptyStateRow(row)) {
    pushUnique(steps, "await scPage.mockEmptyWatchlistGrid()");
  }

  if (isUploadCustomContext(row)) {
    pushUnique(steps, "await scPage.clickUploadList()");
  } else if (isListsLibraryContext(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
    pushUnique(steps, "await scPage.clickViewListsLibrary()");
  } else if (isEditWatchlistContext(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
    pushUnique(steps, "await scPage.ensureWatchlistConfigurationExists()");
    pushUnique(steps, "await scPage.clickEditConfigurationOnFirstRow()");
  } else if (isViewDetailsContext(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
    pushUnique(steps, "await scPage.ensureWatchlistConfigurationExists()");
    pushUnique(steps, "await scPage.clickViewDetailsOnFirstRow()");
  } else if (isCreateWizardContext(row)) {
    pushUnique(steps, "await scPage.clickCreateWatchlist()");
    pushUnique(steps, "await scPage.expectConfigurationWizardStepVisible()");
    if (needsWizardAtResultConfiguration(row) || isResultConfigurationContext(row)) {
      appendWizardReachResultConfiguration(steps);
    } else if (needsWizardAtMatchScoreBroad(row) || isMatchScoreWizardContext(row)) {
      appendWizardReachMatchScore(steps);
    } else if (isFieldMappingContext(row) || needsWizardAtFieldMapping(row)) {
      appendWizardReachFieldMapping(steps);
    } else if (needsListSelectionWithWatchlistSelected(row)) {
      appendWizardReachListSelection(steps);
      pushUnique(steps, "await scPage.selectFirstAvailableList()");
    } else if (needsWizardAtListSelection(row) || isListSelectionContext(row)) {
      appendWizardReachListSelection(steps);
    }
  } else if (isSecurityInputContext(row) && /watchlist name|description/i.test(row.testSteps)) {
    pushUnique(steps, "await scPage.clickCreateWatchlist()");
    pushUnique(steps, "await scPage.expectConfigurationWizardStepVisible()");
  } else if (isMatchLogicContext(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
  } else if (!isAuthDeniedScenario(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
  }

  return steps;
}

export function buildExcelStepActions(row: ScExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const blob = rowBlob(row);

  for (const s of numbered) {
    if (stepMatches(s, "login", "log in", "logged in")) {
      continue;
    }
    if (
      stepMatches(
        s,
        "open screening configuration",
        "navigate to watchlist",
        "screening configuration module",
        "configurations",
        "sanction screening",
        "sanctions screening configuration",
        "application menu",
      )
      || /open\s+sanction/i.test(s)
    ) {
      if (!steps.some((x) => x.includes("openScreeningConfig"))) {
        pushUnique(steps, OPEN);
        pushUnique(steps, "await scPage.openScreeningConfigFromSidebar()");
        pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
      }
      continue;
    }
    if (stepMatches(s, "confirm the listing", "confirm listing", "listing page is displayed", "listing page loads")) {
      pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
      pushUnique(steps, "await scPage.expectWatchlistGridVisible()");
      continue;
    }
    if (stepMatches(s, "direct url", "enter url")) {
      pushUnique(steps, OPEN);
      pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
      continue;
    }
    if (stepMatches(s, "open watchlist configuration page", "open watchlist configuration", "open listing page")) {
      pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
    } else if (stepMatches(s, "create watchlist", "click create")) {
      pushUnique(steps, "await scPage.clickCreateWatchlist()");
    } else if (/update watchlist name and save/i.test(s)) {
      pushUnique(steps, "await scPage.fillConfigurationName('Updated Automation Watchlist')");
      pushUnique(steps, saveStep(row));
    } else if (/update watchlist name to existing value|duplicate watchlist name during edit/i.test(s)) {
      pushUnique(steps, "await scPage.fillConfigurationNameFromExistingRow()");
      pushUnique(steps, saveStep(row));
    } else if (/enter name with leading and trailing spaces/i.test(s) && subModuleKey(row) === "basic information") {
      pushUnique(steps, "await scPage.fillConfigurationName('  Automation Trimmed Name  ')");
      pushUnique(steps, "await scPage.attemptWizardNext()");
      pushUnique(steps, "await scPage.expectWatchlistNameTrimmed()");
    } else if (/leading and trailing spaces/i.test(s) && subModuleKey(row) === "search") {
      pushUnique(steps, "await scPage.searchWatchlists('  Batch Screening  ')");
    } else if (/select un consolidated list and click next|un consolidated list/i.test(s)) {
      pushUnique(steps, "await scPage.selectWatchlistSourceByName('UN Consolidated')");
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/select watchlist and click next|select a watchlist and click next/i.test(s)) {
      pushUnique(steps, "await scPage.selectFirstAvailableList()");
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/select regulatory and custom lists|regulatory and custom/i.test(s)) {
      pushUnique(steps, "await scPage.selectRegulatoryAndCustomWatchlists()");
    } else if (/enter valid watchlist name|mandatory fields|all mandatory/i.test(s)) {
      pushUnique(steps, "await scPage.completeBasicInformationStep()");
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/enable and disable|disable and enable/i.test(s)) {
      pushUnique(steps, "await scPage.clickRowAction('Disable')");
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
      pushUnique(steps, "await scPage.dismissModalIfOpen()");
      pushUnique(steps, "await scPage.selectStatusTab('Inactive')");
      pushUnique(steps, "await scPage.clickRowAction('Enable')");
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
      pushUnique(steps, "await scPage.dismissModalIfOpen()");
    } else if (/attempt to create new watchlist|attempt to create/i.test(s)) {
      pushUnique(steps, "await scPage.expectCreateWatchlistRestricted()");
    } else if (/open lists library after selection|open lists library/i.test(s) && isListsLibraryContext(row)) {
      pushUnique(steps, "await scPage.clickViewListsLibrary()");
    } else if (/click back button|navigation control/i.test(s) && isViewDetailsContext(row)) {
      pushUnique(steps, "await scPage.closeWatchlistDetailsPanel()");
    } else if (/select lists, navigate back|navigate back to step 1/i.test(s)) {
      pushUnique(steps, "await scPage.clickWizardBack()");
      pushUnique(steps, "await scPage.completeBasicInformationStep()");
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/return to step 2|navigate to step 2/i.test(s)) {
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/open enable, disable or delete confirmation|confirmation modal is open/i.test(s)) {
      pushUnique(steps, "await scPage.selectStatusTab('Inactive')");
      pushUnique(steps, "await scPage.clickRowAction('Enable')");
      pushUnique(steps, "await scPage.expectModalFocusTrapped()");
    } else if (/modify watchlist id|parameter tampering|unauthorized modification/i.test(s)) {
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/update description and save/i.test(s)) {
      pushUnique(steps, "await scPage.fillConfigurationDescription('Updated automation description')");
      pushUnique(steps, saveStep(row));
    } else if (/modify field mappings|field mappings can be modified/i.test(s)) {
      pushUnique(steps, "await scPage.navigateToWizardStep('Field Mapping')");
      pushUnique(steps, saveStep(row));
    } else if (/modify.*threshold|threshold score configuration/i.test(s)) {
      pushUnique(steps, "await scPage.navigateToWizardStep('Match Score Configuration')");
      pushUnique(steps, "await scPage.setMatchScoreThreshold('85')");
      pushUnique(steps, saveStep(row));
    } else if (/selected watchlists can be modified|modify.*watchlist selection/i.test(s)) {
      pushUnique(steps, "await scPage.navigateToWizardStep('List Selection')");
      pushUnique(steps, "await scPage.selectFirstAvailableList()");
      pushUnique(steps, saveStep(row));
    } else if (/result configuration can be modified/i.test(s)) {
      pushUnique(steps, "await scPage.navigateToWizardStep('Result Configuration')");
      pushUnique(steps, saveStep(row));
    } else if (stepMatches(s, "open watchlist details", "watchlist details screen")) {
      pushUnique(steps, "await scPage.clickViewDetailsOnFirstRow()");
    } else if (/verify all configured columns|review displayed columns|listing grid columns/i.test(s)) {
      pushUnique(steps, "await scPage.expectGridColumnsVisible()");
    } else if (/compare displayed grid data|against watchlist details/i.test(s)) {
      pushUnique(steps, "await scPage.clickViewDetailsOnFirstRow()");
    } else if (stepMatches(s, "step 3", "navigate to step 3", "field mapping step") || /step 3 - field mapping/i.test(s)) {
      if (!steps.some((x) => x.includes("appendWizardReachFieldMapping") || x.includes("selectFirstAvailableList"))) {
        appendWizardReachFieldMapping(steps);
      }
      pushUnique(steps, "await scPage.navigateToWizardStep('Field Mapping')");
    } else if (stepMatches(s, "step 2", "navigate to list selection", "list selection step")) {
      if (!steps.some((x) => x.includes("completeBasicInformationStep"))) {
        pushUnique(steps, "await scPage.completeBasicInformationStep()");
      }
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/review result configuration|result configuration screen/i.test(s)) {
      pushUnique(steps, "await scPage.navigateToWizardStep('Result Configuration')");
    } else if (isScreeningExecutionContext(row) || stepMatches(s, "execute screening")) {
      pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
    } else if (/enter script payload in watchlist name|html content.*watchlist name|sql payload and save/i.test(s) && /name/i.test(s)) {
      pushUnique(steps, `await scPage.fillConfigurationName('${escapeStr(testDataValue(row, "<script>alert('XSS')</script>"))}')`);
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/enter script payload in description|html content and save/i.test(s) && /description/i.test(s)) {
      pushUnique(steps, `await scPage.fillConfigurationDescription('${escapeStr(testDataValue(row, "<img src=x onerror=alert(1)>"))}')`);
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (/enter script payload in search|sql payload in search/i.test(s)) {
      pushUnique(steps, `await scPage.searchWatchlists('${escapeStr(testDataValue(row, "' OR 1=1 --"))}')`);
    } else if (/click enable action|enable action for an inactive/i.test(s)) {
      pushUnique(steps, "await scPage.selectStatusTab('Inactive')");
      pushUnique(steps, "await scPage.clickRowAction('Enable')");
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
    } else if (stepMatches(s, "upload list", "upload custom", "upload file")) {
      pushUnique(steps, "await scPage.clickUploadList()");
      pushUnique(steps, "await scPage.uploadCustomListPlaceholder()");
    } else if (stepMatches(s, "view lists library", "lists library")) {
      pushUnique(steps, "await scPage.clickViewListsLibrary()");
    } else if (stepMatches(s, "search", "enter search", "type in search") && !/payload|script|sql/i.test(s)) {
      const keyword = /invalid|no match|zzzz/i.test(row.testData + blob) ? "zzzz-no-match" : "Batch Screening";
      pushUnique(steps, `await scPage.searchWatchlists('${escapeStr(keyword)}')`);
    } else if (stepMatches(s, "active tab", "inactive tab", "all rules")) {
      const tab = stepMatches(s, "inactive") ? "Inactive" : stepMatches(s, "all rules") ? "All Rules" : "Active";
      pushUnique(steps, `await scPage.selectStatusTab('${tab}')`);
    } else if (stepMatches(s, "filter", "apply filter")) {
      pushUnique(steps, "await scPage.applyFilter()");
    } else if (stepMatches(s, "view details", "click view")) {
      pushUnique(steps, "await scPage.clickViewDetailsOnFirstRow()");
    } else if (stepMatches(s, "edit configuration", "edit watchlist", "click edit")) {
      pushUnique(steps, "await scPage.clickEditConfigurationOnFirstRow()");
    } else if (stepMatches(s, "disable", "deactivate")) {
      pushUnique(steps, "await scPage.clickRowAction('Disable')");
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
    } else if (stepMatches(s, "activate", "enable") && !/inactive watchlist can be enabled/.test(blob)) {
      pushUnique(steps, "await scPage.clickRowAction('Enable')");
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
    } else if (stepMatches(s, "save", "submit") && !/and save|payload|script|html|sql/i.test(s)) {
      pushUnique(steps, saveStep(row));
    } else if (stepMatches(s, "confirm action", "confirm enable", "confirm disable")) {
      pushUnique(steps, "await scPage.confirmRowActionIfPresent()");
    } else if (stepMatches(s, "cancel", "close", "discard")) {
      pushUnique(steps, "await scPage.closeActiveDialog()");
    } else if (isPaginationContext(row) && stepMatches(s, "next page", "next pagination", "navigate to next")) {
      pushUnique(steps, "await scPage.clickPaginationNext()");
    } else if (isPaginationContext(row) && stepMatches(s, "previous page", "prev page", "navigate to previous")) {
      pushUnique(steps, "await scPage.clickPaginationPrevious()");
    } else if (!isPaginationContext(row) && stepMatches(s, "next", "continue", "proceed")) {
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (!isPaginationContext(row) && stepMatches(s, "previous", "back") && !stepMatches(s, "browser", "listing") && !isViewDetailsNavigationBack(row)) {
      pushUnique(steps, "await scPage.clickWizardBack()");
    } else if (/select .+ list and click next/i.test(s)) {
      const listName = s.replace(/select/i, "").replace(/and click next/i, "").trim();
      pushUnique(steps, `await scPage.selectWatchlistSourceByName('${escapeStr(listName)}')`);
      pushUnique(steps, "await scPage.attemptWizardNext()");
    } else if (stepMatches(s, "select list", "choose list", "select watchlist", "select regulatory")) {
      pushUnique(steps, "await scPage.selectFirstAvailableList()");
    } else if (stepMatches(s, "field mapping", "map field", "drag field", "add field mapping")) {
      pushUnique(steps, "await scPage.expectFieldMappingPanelVisible()");
    } else if (stepMatches(s, "match score", "threshold", "minimum score")) {
      pushUnique(steps, "await scPage.setMatchScoreThreshold('80')");
    } else if (stepMatches(s, "clear", "leave blank", "empty") && /name|watchlist/.test(s)) {
      pushUnique(steps, "await scPage.clearWatchlistName()");
    } else if (stepMatches(s, "enter", "fill", "input", "type", "provide")) {
      if (/name|watchlist|configuration/.test(s)) {
        pushUnique(steps, "await scPage.fillConfigurationName('Automation Watchlist Config')");
      }
      if (/description/.test(s)) {
        pushUnique(steps, "await scPage.fillConfigurationDescription('Automation test configuration')");
      }
    } else if (stepMatches(s, "sort", "column header")) {
      const col = /watchlist name/i.test(s) ? "Watchlist Name" : /type/i.test(s) ? "Type" : "Created Date";
      pushUnique(steps, `await scPage.sortWatchlistColumn('${col}')`);
    } else if (stepMatches(s, "pagination", "items per page", "page number")) {
      pushUnique(steps, "await scPage.expectPaginationVisible()");
    } else if (stepMatches(s, "refresh", "reload")) {
      pushUnique(steps, "await scPage.refreshPage()");
    } else if (stepMatches(s, "logout", "log out", "session")) {
      pushUnique(steps, "await scPage.performLogoutAndReturn()");
    } else if (stepMatches(s, "compare tab badge", "badge count", "tab counter")) {
      pushUnique(steps, "await scPage.expectStatusTabsVisible()");
    } else if (stepMatches(s, "select all tab", "all tab")) {
      pushUnique(steps, "await scPage.selectStatusTab('All Rules')");
    } else if (/locate .+ in the grid/i.test(s)) {
      const keyword = s.replace(/locate/i, "").replace(/in the grid/i, "").replace(/"/g, "").trim();
      pushUnique(steps, `await scPage.searchWatchlists('${escapeStr(keyword || "Batch Screening")}')`);
    } else if (stepMatches(s, "review the grid", "grid body", "review grid")) {
      pushUnique(steps, "await scPage.expectWatchlistGridVisible()");
    } else if (stepMatches(s, "scroll", "paginate", "pagination")) {
      pushUnique(steps, "await scPage.expectPaginationVisible()");
      pushUnique(steps, "await scPage.clickPaginationNext()");
    } else if (stepMatches(s, "wizard opens", "step indicator", "basic information")) {
      pushUnique(steps, "await scPage.expectConfigurationWizardStepVisible()");
    } else if (stepMatches(s, "inspect", "observe", "verify", "validate", "check", "review", "confirm", "compare", "locate", "read", "monitor")) {
      // Assertion phase covers observation-only Excel steps.
    } else {
      pushUnique(steps, `// TODO: Excel step not mapped — "${escapeStr(s)}"`);
    }
  }

  return steps;
}

export function buildExcelAssertionActions(row: ScExcelRow): string[] {
  const steps: string[] = [];
  const blob = rowBlob(row);
  const sub = subModuleKey(row);

  if (/unauthorized|access denied|cannot access|not authorized|denied/.test(blob)) {
    pushUnique(steps, "await scPage.expectAccessDenied()");
  }
  if (
    /page loads|landing page|configuration page|without ui issues|successfully/.test(blob)
    && /page|header|grid|listing/.test(blob)
    && !isFieldMappingContext(row)
    && !isListSelectionContext(row)
    && !isMatchScoreWizardContext(row)
    && !isResultConfigurationContext(row)
  ) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
  }
  if (/breadcrumb|page title|header/.test(blob)) {
    pushUnique(steps, "await scPage.expectPageHeaderVisible()");
  }
  if (/tab|active|inactive|all rules|status filter/.test(blob)) {
    pushUnique(steps, "await scPage.expectStatusTabsVisible()");
  }
  if (/search|search box|search field/.test(blob)) {
    pushUnique(steps, "await scPage.expectSearchControlVisible()");
  }
  if (/filter/.test(blob) && !/clear/.test(blob)) {
    pushUnique(steps, "await scPage.expectFilterControlsVisible()");
  }
  if (
    /grid|table|listing/.test(blob)
    && !/field mapping/.test(blob)
    && !isCreateWizardContext(row)
    && !isEditWatchlistContext(row)
    && !(/watchlist name/.test(blob) && /mandatory|required|validation/.test(blob))
  ) {
    pushUnique(steps, "await scPage.expectWatchlistGridVisible()");
  }
  if (/pagination/.test(blob)) {
    pushUnique(steps, "await scPage.expectPaginationVisible()");
  }
  if (/create watchlist|upload list|view lists library|action button/.test(blob) && !isCreateWizardContext(row) && !isEditWatchlistContext(row) && !isSecurityInputContext(row) && !isRbacRestrictedContext(row)) {
    pushUnique(steps, "await scPage.expectActionButtonsVisible()");
  }
  if (/view details|watchlist details screen|open watchlist details/.test(blob) && !isViewDetailsContext(row) && !isMatchLogicContext(row) && !isScreeningExecutionContext(row)) {
    pushUnique(steps, "await scPage.expectWatchlistDetailsVisible()");
  }
  if (isViewDetailsContext(row)) {
    const isDetailsNavigationBack = /navigation back|listing page from details|redirected back/.test(blob);
    if (!isDetailsNavigationBack) {
      pushUnique(steps, "await scPage.expectWatchlistDetailsVisible()");
    }
    if (/basic information|watchlist name, screening type|purpose and description/.test(blob)) {
      pushUnique(steps, "await scPage.expectViewDetailsBasicInformationVisible()");
    }
    if (/field mapping|source and target mappings/.test(blob)) {
      pushUnique(steps, "await scPage.expectViewDetailsFieldMappingsVisible()");
    }
    if (/match score configuration/.test(blob)) {
      pushUnique(steps, "await scPage.expectViewDetailsMatchScoreVisible()");
    }
    if (/result configuration/.test(blob)) {
      pushUnique(steps, "await scPage.expectViewDetailsResultConfigurationVisible()");
    }
    if (/all configured sections|correct sequence/.test(blob)) {
      pushUnique(steps, "await scPage.expectViewDetailsAllSectionsVisible()");
    }
    if (/listing page|redirected back/.test(blob)) {
      pushUnique(steps, "await scPage.expectWatchlistGridVisible()");
    }
  }
  if (/all expected columns|configured columns|column header/.test(blob)) {
    pushUnique(steps, "await scPage.expectGridColumnsVisible()");
  }
  if (/edit configuration|edit watchlist|edit wizard|pre-populated|pre populated/.test(blob) && !expectsPostSaveListing(row) && !/duplicate|validation/.test(blob) && !(isRbacRestrictedContext(row) && /cannot edit/.test(blob))) {
    pushUnique(steps, "await scPage.expectEditConfigurationFormVisible()");
  }
  if (/disable|deactivate|activate|enable|status/.test(blob) && sub.includes("status management")) {
    pushUnique(steps, "await scPage.expectWatchlistStatusUpdated()");
  }
  if (/mandatory|required|validation|error message|invalid|blank|cannot proceed|sanitizes|script executes|xss|sql injection|html injection/.test(blob) && !/without errors|no errors|no script executes/.test(blob) && !isTrimWhitespaceScenario(row)) {
    pushUnique(steps, "await scPage.expectValidationFeedbackVisible()");
  }
  if (/saved successfully|configuration created|configuration updated|persisted successfully|updated successfully/.test(blob) && !/saved basic information|pre-populated|pre populated/.test(blob)) {
    pushUnique(steps, "await scPage.expectConfigurationSavedSuccessfully()");
  }
  if (/upload|custom list|file upload/.test(blob)) {
    pushUnique(steps, "await scPage.expectUploadCustomListPanelVisible()");
  }
  if (/field mapping|map field/.test(blob)) {
    pushUnique(steps, "await scPage.expectFieldMappingPanelVisible()");
  }
  if (/list selection|select list/.test(blob) && !isFieldMappingContext(row) && !needsWizardAtFieldMapping(row)) {
    pushUnique(steps, "await scPage.expectListSelectionPanelVisible()");
  }
  if (/navigates to field mapping|field mapping step|step 3/.test(blob) && isListSelectionContext(row)) {
    pushUnique(steps, "await scPage.expectFieldMappingPanelVisible()");
  }
  if (/match score|minimum score/.test(blob) && isMatchScoreWizardContext(row) && !/threshold score configuration can be modified/.test(blob)) {
    pushUnique(steps, "await scPage.expectMatchScoreConfigurationVisible()");
  }
  if (/no match threshold/.test(blob)) {
    pushUnique(steps, "await scPage.expectNoMatchThresholdFieldVisible()");
  }
  if (/result configuration|list selection step|field mapping step/.test(blob) && isCreateWizardContext(row)) {
    pushUnique(steps, "await scPage.expectConfigurationWizardStepVisible()");
  }
  if (/edit wizard|pre-populated|pre populated/.test(blob) && isEditWatchlistContext(row)) {
    pushUnique(steps, "await scPage.expectConfigurationWizardStepVisible()");
  }
  if (isMatchLogicContext(row) || isScreeningExecutionContext(row)) {
    pushUnique(steps, "await scPage.expectScreeningConfigPageLoaded()");
  }
  if (isRbacRestrictedContext(row) && !isRbacViewerPositiveAccess(row)) {
    pushUnique(steps, "await scPage.expectCreateWatchlistRestricted()");
  }
  if (/cannot edit|cannot approve|access is denied/.test(blob) && /rbac - viewer/i.test(subModuleKey(row))) {
    pushUnique(steps, "await scPage.expectAccessDenied()");
  }
  if (isSecurityInputContext(row)) {
    pushUnique(steps, "await scPage.expectValidationFeedbackVisible()");
  }
  if (/sort|ascending|descending|column order/.test(blob)) {
    pushUnique(steps, "await scPage.expectWatchlistColumnSorted()");
  }
  if (/empty state|no records|no watchlist|non-existing|not found/.test(blob) && !/no match threshold/.test(blob)) {
    pushUnique(steps, "await scPage.expectEmptyStateVisible()");
  }
  if (/api failure|network error|timeout|graceful|error message/.test(blob)) {
    pushUnique(steps, "await scPage.expectApiFailureHandledGracefully()");
  }
  if (/layout|alignment|responsive|ui integrity|mandatory page components/.test(blob)) {
    pushUnique(steps, "await scPage.expectLayoutStable()");
  }
  if (steps.length === 0) {
    pushUnique(steps, "await scPage.expectPageShellLoaded()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: ScExcelRow): string {
  const lines: string[] = [];
  for (const block of [
    buildExcelSetupActions(row),
    buildExcelStepActions(row),
    buildExcelAssertionActions(row),
  ]) {
    for (const step of block) {
      pushUnique(lines, step);
    }
  }
  return lines.join(";\n    ");
}

export function formatTestTitle(row: ScExcelRow): string {
  const feature = row.subModule.trim() || "Core";
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function formatExcelComment(row: ScExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Excel Scenario: ${row.taskDescription}`;
}
