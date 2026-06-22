import type { BsExcelRow } from "./types";

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
  const parts = testSteps.split(/\s*(?=\d+\.\s)/).map((p) => p.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  if (parts.length > 0) {
    return parts;
  }
  return testSteps.split(/\.\s+/).map((p) => p.trim()).filter(Boolean);
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowBlob(row: BsExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData} ${row.preconditions}`.toLowerCase();
}

function featureGroup(subModule: string): string {
  return subModule.replace(/^Batch Screening\s*-?\s*/i, "").trim() || "Core";
}

function isScr01Context(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  const blob = rowBlob(row);
  return sm.includes("scr-01")
    || sm.includes("disposition")
    || sm.includes("match details")
    || sm.includes("view summary")
    || sm.includes("threshold")
    || blob.includes("scr-01")
    || blob.includes("screening results");
}

function numberedOpensScr01(row: BsExcelRow): boolean {
  return parseNumberedSteps(row.testSteps).some((s) =>
    stepMatches(s, "open matched record", "open screening results", "open scr-01", "click name"),
  );
}

function requiresCommentModalBeforeScr01(row: BsExcelRow): boolean {
  return /comment modal appears before|before opening scr-01|before navigation/.test(rowBlob(row));
}

function isReviewContext(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("match details")
    || sm.includes("ai summary")
    || sm.includes("view summary workspace")
    || rowBlob(row).includes("match review")
    || rowBlob(row).includes("match details")
    || rowBlob(row).includes("ai summary")
    || rowBlob(row).includes("view summary");
}

function isPositiveAuthorizedContext(row: BsExcelRow): boolean {
  return /for authorized users|authorized user|authorized analyst|authorized export|should display correctly for authorized/.test(rowBlob(row));
}

function isUnauthorizedExportRestriction(row: BsExcelRow): boolean {
  return /export report.*unauthorized|restriction for unauthorized|hidden or inaccessible for unauthorized/.test(rowBlob(row));
}

function needsUnauthorizedApiMock(row: BsExcelRow): boolean {
  const blob = rowBlob(row);
  if (isPositiveAuthorizedContext(row) || isUnauthorizedExportRestriction(row)) {
    return false;
  }
  if (/logout|re-login|login again|browser back|browser refresh|session invalid|token reuse|preserve synchronized|concurrent users|update workflow/.test(blob)) {
    return false;
  }
  return /deny direct unauthorized|restricted module url|direct url access|access denied|not authorized|without permission|restricted role|unauthenticated|sensitive data is not exposed|expired session|unauthorized disposition|unauthorized users should not/.test(blob);
}

function expectsAccessDeniedOutcome(row: BsExcelRow): boolean {
  const blob = rowBlob(row);
  if (isPositiveAuthorizedContext(row) || isUnauthorizedExportRestriction(row)) {
    return false;
  }
  return /deny direct unauthorized|should deny|access denied|not authorized|login required|restricted users should not|block disposition|invalidate active session|prevent unauthorized|continue enforcing authorization|should not view sensitive/.test(blob);
}

function expectsSessionInvalidated(row: BsExcelRow): boolean {
  return /invalidate active session|token reuse is restricted|session should be invalidated/.test(rowBlob(row));
}

function isApiFailureRow(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("api") && /failure|error|timeout|500|null|empty array|invalid payload|connection loss/.test(rowBlob(row));
}

function isEmptyDatasetRow(row: BsExcelRow): boolean {
  return /no screening records exist|when no screening records|zero records|empty-state handling when no/.test(rowBlob(row))
    && !/blank comment|comment field blank|whitespace-only/.test(rowBlob(row));
}

function isExportReportContext(step: string, blob: string): boolean {
  const sl = step.toLowerCase();
  return /export report|observe export report|click export report action|generate export|exported report|export functionality/.test(sl)
    || (/observe export|export report action/.test(sl) && /export report|export functionality|authorized users should generate exports/.test(blob));
}

function expectsCommentModalCloseOutcome(row: BsExcelRow): boolean {
  return /comment modal should close|modal should close without|cancel button closes|should close and user should remain|without changing disposition/.test(rowBlob(row));
}

function hasCommentInputAction(steps: string[]): boolean {
  return steps.some((s) => /fillCommentWith|submitWhitespaceComment|submitOversizedComment|submitBlankComment|submitDispositionWithComment|triggerBulkDispositionAction/.test(s));
}

function isBulkActionRow(row: BsExcelRow): boolean {
  return /bulk confirm|bulk false positive|bulk move to case|bulk move to whitelist|bulk exception|multiple selected records|select multiple screening/.test(rowBlob(row));
}

function needsPaginationDataset(row: BsExcelRow): boolean {
  return /next page|previous page|navigate between pages|navigate pages|pagination controls display|large dataset/.test(rowBlob(row));
}

function shouldAutoOpenScr01InSetup(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  if (requiresCommentModalBeforeScr01(row)) {
    return false;
  }
  if (sm.includes("scr-00") || sm.includes("filters") || sm.includes("export")) {
    return false;
  }
  if (numberedOpensScr01(row)) {
    return false;
  }
  if (/integration & sync|synchronized workflow state persists after browser refresh/.test(rowBlob(row)) && !/update disposition in scr-01|open scr-01/.test(rowBlob(row))) {
    return false;
  }
  return isScr01Context(row) || sm.includes("disposition");
}

const SYNC_COMMENT = "Automation disposition comment for batch screening validation.";
const OPEN = "await bsPage.openBatchScreeningDirect(testData.baseUrl)";

function appendDispositionUpdate(steps: string[]): void {
  pushUnique(steps, "await bsPage.openFirstScreeningResult()");
  pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
  pushUnique(steps, `await bsPage.selectUnderReviewWithComment('${escapeStr(SYNC_COMMENT)}')`);
}

export function buildExcelSetupActions(row: BsExcelRow): string[] {
  const steps: string[] = [];
  const sm = row.subModule.toLowerCase();
  const blob = rowBlob(row);

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await bsPage.mockMatchResultsApiFailure()");
  }

  if (needsUnauthorizedApiMock(row)) {
    pushUnique(steps, "await bsPage.mockUnauthorized()");
  }

  if (isEmptyDatasetRow(row)) {
    pushUnique(steps, OPEN);
    pushUnique(steps, "await bsPage.mockEmptyMatchResults()");
  } else if (stepMatches(blob, "sidebar", "sanction screening") && !blob.includes("direct url")) {
    pushUnique(steps, OPEN);
    pushUnique(steps, "await bsPage.openBatchScreeningFromSidebar()");
  } else {
    pushUnique(steps, OPEN);
  }

  if (isUnauthorizedExportRestriction(row)) {
    pushUnique(steps, "await bsPage.mockExportReportRestricted()");
  }

  if (sm.includes("scr-00") || sm.includes("filters") || sm.includes("export") || (sm === "batch screening" && !isScr01Context(row))) {
    if (!isEmptyDatasetRow(row)) {
      if (isUnauthorizedExportRestriction(row)) {
        pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
      } else {
        pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
      }
    }
  }

  if (shouldAutoOpenScr01InSetup(row)) {
    pushUnique(steps, "await bsPage.openFirstScreeningResult()");
    pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
  }

  if (isReviewContext(row)) {
    if (!steps.some((s) => s.includes("openFirstScreeningResult"))) {
      pushUnique(steps, "await bsPage.openFirstScreeningResult()");
    }
    pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
  }

  if (needsPaginationDataset(row)) {
    pushUnique(steps, "await bsPage.ensurePaginationEnabled()");
  }

  return steps;
}

export function buildExcelStepActions(row: BsExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const blob = rowBlob(row);

  for (const s of numbered) {
    const sl = s.toLowerCase();
    if (stepMatches(s, "login", "authorized analyst", "authorized user", "authorized export", "restricted role")) {
      continue;
    }
    if (stepMatches(s, "navigate to sanction", "open batch screening", "open match results", "observe match results", "open match results table", "open match results page", "access module")) {
      if (!steps.some((x) => x.includes("openBatchScreening"))) {
        pushUnique(steps, OPEN);
        if (!isEmptyDatasetRow(row)) {
          if (isUnauthorizedExportRestriction(row)) {
            pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
          } else {
            pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
          }
        }
      }
      continue;
    }
    if (stepMatches(s, "apply filters", "apply filter")) {
      pushUnique(steps, "await bsPage.applyFilterChip('Branch')");
    } else if (stepMatches(s, "navigate inside module", "open scr-01", "open screening results")) {
      pushUnique(steps, "await bsPage.openFirstScreeningResult()");
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    } else if (stepMatches(s, "return to match results", "navigate back", "return to scr-00")) {
      pushUnique(steps, "await bsPage.returnToMatchResultsList()");
    } else if (/enter only spaces|only spaces\/tabs|whitespace-only/.test(sl)) {
      pushUnique(steps, "await bsPage.submitWhitespaceComment()");
    } else if (/enter comment exceeding limit|comment exceeding limit|oversized comment/.test(sl)) {
      pushUnique(steps, "await bsPage.submitOversizedComment()");
    } else if (/enter special characters in comment|special characters in comment field/.test(sl)) {
      pushUnique(steps, "await bsPage.fillCommentWithSpecialChars()");
    } else if (/enter sql injection payload|sql injection payload/.test(sl)) {
      pushUnique(steps, "await bsPage.fillCommentWithSqlInjection()");
    } else if (stepMatches(s, "click cancel button", "click cancel") && /comment modal|comment field|submit comment/.test(blob)) {
      pushUnique(steps, "await bsPage.openCommentModalForDisposition()");
      pushUnique(steps, "await bsPage.cancelCommentModal()");
    } else if (/trigger move to case action|trigger move to case/.test(sl)) {
      pushUnique(steps, `await bsPage.submitDispositionWithComment('Move to Case', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/trigger move to whitelist action|trigger move to whitelist/.test(sl)) {
      pushUnique(steps, `await bsPage.submitDispositionWithComment('Move to Whitelist', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/trigger move to exception list action|trigger move to exception/.test(sl)) {
      pushUnique(steps, `await bsPage.submitDispositionWithComment('Move to Exception List', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (stepMatches(s, "navigate to page 2", "navigate to page two")) {
      const pageTwo = "await bsPage.goToNextPage()";
      if (!steps.includes(pageTwo)) {
        pushUnique(steps, pageTwo);
      }
    } else if (stepMatches(s, "navigate between pages")) {
      pushUnique(steps, "await bsPage.goToNextPage()");
    } else if (stepMatches(s, "execute search") && !steps.some((x) => x.includes("searchMatchResults"))) {
      pushUnique(steps, "await bsPage.searchMatchResults('HANIYA')");
    } else if (stepMatches(s, "enter restricted module url", "restricted module url manually", "direct url")) {
      pushUnique(steps, "await bsPage.mockUnauthorized()");
      pushUnique(steps, OPEN);
    } else if (stepMatches(s, "click view details action", "view details action")) {
      pushUnique(steps, "await bsPage.clickViewDetailsActionOnFirstRow()");
    } else if (stepMatches(s, "click view details", "open matched record", "open screening results", "open scr-01", "click name")) {
      pushUnique(steps, "await bsPage.openFirstScreeningResult()");
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    } else if (/update disposition in scr-01|update disposition|execute disposition action|execute disposition/.test(sl)) {
      appendDispositionUpdate(steps);
    } else if (/update workflow/.test(sl)) {
      appendDispositionUpdate(steps);
    } else if (/return to scr-00|return to match results/.test(sl)) {
      pushUnique(steps, "await bsPage.goBack()");
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    } else if (/open match details/.test(sl)) {
      pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
      pushUnique(steps, "await bsPage.openReviewTab('Match Details')");
    } else if (/open view summary/.test(sl)) {
      pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
      pushUnique(steps, "await bsPage.openReviewTab('View Summary')");
    } else if (/open all related workspaces|all related workspaces/.test(sl)) {
      pushUnique(steps, "await bsPage.openFirstScreeningResult()");
      pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
    } else if (/submit comment/.test(sl)) {
      if (hasCommentInputAction(steps) || /whitespace-only|only spaces\/tabs|sql injection payload|special characters in comment/.test(blob)) {
        continue;
      }
      appendDispositionUpdate(steps);
    } else if (/leave comment field blank|leave comment blank|submit form/.test(sl) && /blank|empty comment/.test(blob)) {
      if (!steps.some((x) => x.includes("openFirstScreeningResult"))) {
        pushUnique(steps, "await bsPage.openFirstScreeningResult()");
        pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
      }
      pushUnique(steps, "await bsPage.openUnderReviewActionsMenu()");
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
      pushUnique(steps, "await bsPage.submitBlankComment()");
    } else if (stepMatches(s, "click submit") && /blank comment|empty comment/.test(blob)) {
      pushUnique(steps, "await bsPage.submitBlankComment()");
    } else if (/logout user|logout\/revoke|logout\/login|login again|re-login|revoke permission/.test(sl)) {
      pushUnique(steps, "await bsPage.performLogoutAndReturn()");
      if (/login again|re-login/.test(sl)) {
        pushUnique(steps, OPEN);
        pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
      }
    } else if (/use browser back|browser back button/.test(sl)) {
      pushUnique(steps, "await bsPage.goBack()");
    } else if (/refresh all related pages|page refresh|attempt page refresh|refresh all/.test(sl)) {
      pushUnique(steps, "await bsPage.refreshPage()");
    } else if (stepMatches(s, "open actions dropdown", "actions dropdown")) {
      pushUnique(steps, "await bsPage.openUnderReviewActionsMenu()");
    } else if (stepMatches(s, "click under review")) {
      if (/mandatory comment modal should appear|before action execution|before navigation/.test(row.expectedResult.toLowerCase())) {
        pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
      } else {
        pushUnique(steps, `await bsPage.selectUnderReviewWithComment('${escapeStr(SYNC_COMMENT)}')`);
      }
    } else if (stepMatches(s, "click move to case", "move to case")) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Case')");
    } else if (stepMatches(s, "click move to whitelist", "move to whitelist")) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Whitelist')");
    } else if (stepMatches(s, "click move to exception", "move to exception")) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Exception List')");
    } else if (stepMatches(s, "trigger under review")) {
      pushUnique(steps, "await bsPage.openUnderReviewActionsMenu()");
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
    } else if (stepMatches(s, "trigger move to case")) {
      pushUnique(steps, "await bsPage.openUnderReviewActionsMenu()");
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Case')");
    } else if (stepMatches(s, "trigger any disposition", "trigger disposition")) {
      pushUnique(steps, "await bsPage.openUnderReviewActionsMenu()");
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
    } else if (stepMatches(s, "click view summary", "view summary")) {
      pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
      pushUnique(steps, "await bsPage.openReviewTab('View Summary')");
    } else if (stepMatches(s, "click view full profile", "view full profile") || (/match details/.test(s) && !/open match details/.test(s))) {
      pushUnique(steps, "await bsPage.openViewFullProfile()");
      pushUnique(steps, "await bsPage.expectMatchDetailsContentVisible()");
    } else if (stepMatches(s, "ai summary")) {
      pushUnique(steps, "await bsPage.openReviewTab('AI Summary')");
    } else if (/choose bulk confirm match|bulk confirm match/i.test(sl)) {
      pushUnique(steps, `await bsPage.triggerBulkDispositionAction('Confirm Match', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/choose bulk false positive|bulk false positive/i.test(sl)) {
      pushUnique(steps, `await bsPage.triggerBulkDispositionAction('False Positive', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/choose bulk move to case|bulk move to case/i.test(sl)) {
      pushUnique(steps, `await bsPage.triggerBulkDispositionAction('Move to Case', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/choose bulk move to whitelist|bulk move to whitelist/i.test(sl)) {
      pushUnique(steps, `await bsPage.triggerBulkDispositionAction('Move to Whitelist', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/choose bulk move to exception|bulk exception list|bulk move to exception/i.test(sl)) {
      pushUnique(steps, `await bsPage.triggerBulkDispositionAction('Move to Exception List', '${escapeStr(SYNC_COMMENT)}')`);
    } else if (/submit action/.test(sl) && isBulkActionRow(row)) {
      continue;
    } else if (stepMatches(s, "false positive") && !isBulkActionRow(row)) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('False Positive')");
    } else if (stepMatches(s, "confirm match") && !/bulk confirm match|choose bulk/.test(sl)) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('Confirm Match')");
    } else if (isExportReportContext(s, blob) || stepMatches(s, "observe export report action")) {
      pushUnique(steps, "await bsPage.expectExportReportVisible()");
    } else if (stepMatches(s, "click export report")) {
      pushUnique(steps, "await bsPage.clickExportReport()");
    } else if (stepMatches(s, "report action", "click report")) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('Report')");
    } else if (stepMatches(s, "enter comment", "fill comment") && !/blank|empty/.test(s)) {
      pushUnique(steps, `await bsPage.fillCommentAndConfirm('${escapeStr(SYNC_COMMENT)}')`);
    } else if (stepMatches(s, "cancel comment", "close modal")) {
      pushUnique(steps, "await bsPage.cancelCommentModal()");
    } else if (stepMatches(s, "select date range", "date range filter")) {
      pushUnique(steps, "await bsPage.applyFilterChip('Date Range')");
    } else if (stepMatches(s, "branch filter", "select branch")) {
      pushUnique(steps, "await bsPage.applyFilterChip('Branch')");
    } else if (stepMatches(s, "customer id", "account no", "screening type", "list name")) {
      const label = s.toLowerCase().includes("branch") ? "Branch"
        : s.toLowerCase().includes("customer") ? "Customer ID"
          : s.toLowerCase().includes("account") ? "Account No."
            : s.toLowerCase().includes("screening type") ? "Screening Type"
              : "List Name";
      pushUnique(steps, `await bsPage.applyFilterChip('${label}')`);
    } else if (stepMatches(s, "clear filter")) {
      pushUnique(steps, "await bsPage.clearFilters()");
    } else if (stepMatches(s, "search", "enter keyword", "enter invalid") && !isScr01Context(row) && !isReviewContext(row)) {
      const keyword = /invalid|non-existing|no-match/i.test(row.testData + row.testSteps)
        ? "zzzz-no-match-99999"
        : "HANIYA";
      pushUnique(steps, `await bsPage.searchMatchResults('${escapeStr(keyword)}')`);
    } else if (stepMatches(s, "export report", "observe export", "click export")) {
      if (stepMatches(s, "observe export")) {
        pushUnique(steps, "await bsPage.expectExportReportVisible()");
      } else {
        pushUnique(steps, "await bsPage.clickExportReport()");
      }
    } else if (stepMatches(s, "start batch", "run batch")) {
      pushUnique(steps, "await bsPage.runBatchWithFirstWatchlistRule()");
    } else if (stepMatches(s, "schedule batch", "save schedule")) {
      pushUnique(steps, "await bsPage.saveScheduleBatch()");
    } else if (stepMatches(s, "refresh", "reload")) {
      pushUnique(steps, "await bsPage.refreshPage()");
    } else if (stepMatches(s, "select multiple", "select multiple screening")) {
      pushUnique(steps, "await bsPage.selectBulkRecords(2)");
    } else if (stepMatches(s, "trigger match results api", "api request")) {
      pushUnique(steps, "await bsPage.mockMatchResultsApiFailure()");
      pushUnique(steps, OPEN);
    } else if (stepMatches(s, "measure load", "observe load", "open scr-01 workspace")) {
      if (/scr-01/.test(sl) || isScr01Context(row)) {
        pushUnique(steps, "await bsPage.openFirstScreeningResult()");
        pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
      } else {
        pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
      }
    } else if (stepMatches(s, "review audit", "audit history", "audit log", "open audit logs")) {
      pushUnique(steps, "await bsPage.expectPageShellLoaded()");
    } else if (stepMatches(s, "observe highest match score", "highest match score")) {
      pushUnique(steps, "await bsPage.expectHighestMatchScoreColumnVisible()");
    } else if (stepMatches(s, "pagination", "next page", "previous page")) {
      if (stepMatches(s, "next")) {
        pushUnique(steps, "await bsPage.goToNextPage()");
      } else if (stepMatches(s, "previous")) {
        pushUnique(steps, "await bsPage.goToPreviousPage()");
      }
    }
  }

  return steps;
}

export function buildExcelAssertionActions(row: BsExcelRow): string[] {
  const steps: string[] = [];
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const blob = `${er} ${ac} ${task}`;

  if (expectsSessionInvalidated(row)) {
    pushUnique(steps, "await bsPage.expectSessionInvalidated()");
  }
  if (expectsAccessDeniedOutcome(row) && !expectsSessionInvalidated(row)) {
    pushUnique(steps, "await bsPage.expectAccessDenied()");
  }
  if (isUnauthorizedExportRestriction(row)) {
    pushUnique(steps, "await bsPage.expectExportReportRestricted()");
  }
  if (expectsCommentModalCloseOutcome(row)) {
    pushUnique(steps, "await bsPage.expectCommentModalClosed()");
    if (isScr01Context(row)) {
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    } else {
      pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
    }
  } else if (/comment modal|mandatory comment|modal component|before navigation/.test(blob) && !/blank comment|empty comment|whitespace-only|modal should close|cancel button|without changing disposition/.test(blob)) {
    pushUnique(steps, "await bsPage.expectCommentModalVisible()");
  }
  if (/blank comment|empty comment|prevent action execution for blank|prevent blank comment|whitespace-only comments are restricted|reject whitespace-only/.test(blob)) {
    pushUnique(steps, "await bsPage.expectCommentValidationVisible()");
  }
  if (/validate and restrict oversized|oversized comments|comment exceeding limit|character limit/.test(blob)) {
    pushUnique(steps, "await bsPage.expectCommentValidationVisible()");
  }
  if (/match details workspace|match details content|latest synchronized workflow information/.test(blob) && isReviewContext(row) && !/mandatory comment modal should appear before opening match details/.test(blob)) {
    pushUnique(steps, "await bsPage.expectMatchDetailsContentVisible()");
  } else if (/view summary workspace|view summary content/.test(blob) && isReviewContext(row)) {
    pushUnique(steps, "await bsPage.expectViewSummaryContentVisible()");
  } else if (/ai summary/.test(blob) && isReviewContext(row)) {
    pushUnique(steps, "await bsPage.expectAiSummaryContentVisible()");
  } else if (/screening results workspace|scr-01 workspace/.test(blob) && isScr01Context(row) && !/scr-00 and scr-01|synchronized workflow state persists after browser refresh|preserve synchronized workflow state after refresh/.test(blob)) {
    pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
  }
  if (/export report/.test(blob) && !isUnauthorizedExportRestriction(row)) {
    pushUnique(steps, "await bsPage.expectExportReportVisible()");
  }
  if (/list name with highest match score/.test(blob) && !isReviewContext(row)) {
    pushUnique(steps, "await bsPage.expectListNameWithHighestMatchScoreColumnVisible()");
  } else if (/highest match score|scoring/.test(blob) && !isReviewContext(row)) {
    pushUnique(steps, "await bsPage.expectHighestMatchScoreColumnVisible()");
  }
  if (isEmptyDatasetRow(row)) {
    pushUnique(steps, "await bsPage.expectEmptyStateVisible()");
  }
  if (/pagination/.test(blob)) {
    pushUnique(steps, "await bsPage.expectPaginationVisible()");
  }
  if (/filter/.test(blob) && !/clear/.test(blob)) {
    pushUnique(steps, "await bsPage.expectFiltersVisible()");
  }
  if (/api/.test(sm) && /successful|correct screening data/.test(blob)) {
    pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
  }
  if (/api/.test(sm) && /failure|error|graceful/.test(blob)) {
    pushUnique(steps, "await bsPage.expectApiFailureHandledGracefully()");
  }
  if (/batch screening module|match results landing|match results page|ui components|match results table/.test(blob) && !isScr01Context(row)) {
    if (isUnauthorizedExportRestriction(row)) {
      pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
    } else {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    }
  }
  if (/synchronized|synchronize|sync/.test(blob)) {
    if (isReviewContext(row)) {
      if (/match details/.test(blob)) {
        pushUnique(steps, "await bsPage.expectMatchDetailsContentVisible()");
      } else if (/view summary/.test(blob)) {
        pushUnique(steps, "await bsPage.expectViewSummaryContentVisible()");
      } else if (/comment/.test(blob)) {
        pushUnique(steps, "await bsPage.expectCommentModalVisible()");
      } else {
        pushUnique(steps, "await bsPage.expectPageShellLoaded()");
      }
    } else if (/scr-00 and scr-01|disposition status/.test(blob)) {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    } else if (/after browser refresh|after refresh|after re-login/.test(blob)) {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    } else if (/highest match score remains synchronized/.test(blob)) {
      pushUnique(steps, "await bsPage.expectHighestMatchScoreColumnVisible()");
    } else if (isScr01Context(row)) {
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    } else {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    }
  }
  if (/audit/.test(blob)) {
    pushUnique(steps, "await bsPage.expectPageShellLoaded()");
  }
  if (/load within|response threshold|sla|performance/.test(blob)) {
    if (isReviewContext(row)) {
      if (/match details/.test(blob)) {
        pushUnique(steps, "await bsPage.expectMatchDetailsContentVisible()");
      } else if (/view summary|ai summary/.test(blob)) {
        pushUnique(steps, "await bsPage.expectViewSummaryContentVisible()");
      } else {
        pushUnique(steps, "await bsPage.expectPageShellLoaded()");
      }
    } else if (isScr01Context(row)) {
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    } else {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    }
  }
  if (/bulk confirm|selected records/.test(blob)) {
    pushUnique(steps, "await bsPage.expectPageShellLoaded()");
  }
  if (steps.length === 0) {
    pushUnique(steps, "await bsPage.expectPageShellLoaded()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: BsExcelRow): string {
  const lines: string[] = [];
  let setup = buildExcelSetupActions(row);
  let actions = buildExcelStepActions(row);
  let assertions = buildExcelAssertionActions(row);

  const onScr01 = [
    ...setup,
    ...actions,
    ...assertions,
  ].some((s) => s.includes("expectScreeningResultsWorkspaceLoaded") || s.includes("openFirstScreeningResult"));

  const onReview = isReviewContext(row) && [
    ...setup,
    ...actions,
  ].some((s) => s.includes("openReviewTab") || s.includes("openMatchReviewFromResultsDetail"));

  if (onScr01 || onReview) {
    actions = actions.filter((s) => !s.includes("expectMatchResultsPageLoaded"));
    assertions = assertions.filter((s) => !s.includes("expectMatchResultsPageLoaded"));
  }

  if (isUnauthorizedExportRestriction(row)) {
    setup = setup.filter((s) => !s.includes("expectMatchResultsPageLoaded") && !s.includes("expectExportReportVisible"));
    actions = actions.filter((s) => !s.includes("expectMatchResultsPageLoaded") && !s.includes("expectExportReportVisible"));
    assertions = assertions.filter((s) => !s.includes("expectMatchResultsPageLoaded") && !s.includes("expectExportReportVisible"));
  }

  for (const block of [setup, actions, assertions]) {
    for (const step of block) {
      pushUnique(lines, step);
    }
  }
  return lines.join(";\n    ");
}

export function formatTestTitle(row: BsExcelRow): string {
  const feature = featureGroup(row.subModule);
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function formatExcelComment(row: BsExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Excel Scenario: ${row.taskDescription}`;
}
