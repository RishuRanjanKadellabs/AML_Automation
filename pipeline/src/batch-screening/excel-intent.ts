import { ACTION_COMMENTS, SEARCH_KEYWORDS, gridRowIndexForDisposition } from "./batch-data";
import { buildAssertionsForRow, hasAuditAssertion } from "./excel-assertions";
import { getFsdEntryForRow } from "./excel-fsd-context";
import {
  actionNameFromTask,
  filterChipNameFromTask,
  isActionTask,
  isAuditTask,
  isBulkTask,
  isBulkDispositionTask,
  isBulkUiTask,
  isCommentModalTask,
  isExportTask,
  isFilterOrSearchTask,
  isLandingOrShellTask,
  isPureExportTask,
  isRbacUnauthorizedRow,
  isUnauthorizedDirectAccessRow,
  stepMatchesTask,
  taskContext,
} from "./task-step-scoper";
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
  return subModule
    .replace(/^Batch Screening\s*[—-]\s*/i, "")
    .replace(/^action\s+Actions/i, "Actions")
    .trim() || "Core";
}

function gridRowIndex(row: BsExcelRow): number {
  const action = actionNameFromTask(row) || "";
  return gridRowIndexForDisposition(action, row.testData);
}

function actionComment(row: BsExcelRow): string {
  const match = row.testData.match(/Comment:\s*([^;]+)/i);
  return match?.[1]?.trim() ?? ACTION_COMMENTS.valid;
}

function searchKeyword(row: BsExcelRow): string {
  const match = row.testData.match(/Search:\s*([^;]+)/i);
  if (match?.[1]) return match[1].trim();
  const blob = rowBlob(row);
  if (/sql/i.test(blob)) return SEARCH_KEYWORDS.sqlInjection;
  if (/xss/i.test(blob)) return SEARCH_KEYWORDS.xssInjection;
  if (/special char/i.test(blob)) return SEARCH_KEYWORDS.specialChars;
  if (/invalid|no match/i.test(blob)) return SEARCH_KEYWORDS.invalid;
  return SEARCH_KEYWORDS.validPartial;
}

function isScreeningResultsContext(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  const blob = rowBlob(row);
  if (sm.includes("actions") || sm.includes("comment modal") || sm.includes("export")) {
    return false;
  }
  return sm.includes("screening results")
    || sm.includes("match details")
    || sm.includes("view summary")
    || sm.includes("threshold")
    || blob.includes("screening results page")
    || blob.includes("match review");
}

function isMatchResultsContext(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("match results") || sm.includes("filters") || sm.includes("export") || sm === "batch screening";
}

function isReviewContext(row: BsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  return sm.includes("match details")
    || sm.includes("ai summary")
    || sm.includes("view summary")
    || rowBlob(row).includes("match review");
}

function isApiFailureRow(row: BsExcelRow): boolean {
  const blob = rowBlob(row);
  return row.subModule.toLowerCase().includes("api")
    && /failure|error|timeout|500|null|empty array|invalid payload|connection loss|graceful|malicious/i.test(blob);
}

function isApiSuccessRow(row: BsExcelRow): boolean {
  return row.subModule.toLowerCase().includes("api") && !isApiFailureRow(row);
}

function isEmptyDatasetRow(row: BsExcelRow): boolean {
  return /row:\s*n\/a|no screening records|zero records|empty-state|returns no records/i.test(rowBlob(row));
}

function isExportContext(row: BsExcelRow): boolean {
  return row.subModule.toLowerCase().includes("export") || /export report|download/i.test(rowBlob(row));
}

function isUnauthorizedExportRestriction(row: BsExcelRow): boolean {
  return /export report.*unauthorized|without permission to export|hidden or disabled for the unauthorized/i.test(rowBlob(row));
}

function hasWorkflowAction(steps: string[]): boolean {
  return steps.some((s) =>
    s.includes("fillCommentAndConfirm")
    || s.includes("submitDispositionWithComment")
    || s.includes("submitActionWithComment")
    || s.includes("triggerDispositionAction")
    || s.includes("selectUnderReviewWithComment"),
  );
}

function injectAuditPrerequisite(row: BsExcelRow, setup: string[], actions: string[]): void {
  if (!isAuditTask(row)) {
    return;
  }
  if (hasWorkflowAction([...setup, ...actions])) {
    return;
  }

  const rowIdx = gridRowIndex(row);
  const comment = escapeStr(actionComment(row));
  const action = actionNameFromTask(row) || "Under Review";

  if (!setup.some((s) => s.includes("openScreeningResultByGridRow"))) {
    if (row.subModule.toLowerCase().includes("screening results") && !row.subModule.toLowerCase().includes("actions")) {
      pushUnique(setup, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
      pushUnique(setup, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    }
  }
  const auditAction = /under review/i.test(action) ? "Move to Case" : action;
  const prereq = [
    `await bsPage.openUnderReviewActionsMenu(${rowIdx})`,
    `await bsPage.clickDispositionMenuItem('${auditAction}')`,
    `await bsPage.fillCommentAndConfirm('${comment}')`,
  ];
  for (let i = prereq.length - 1; i >= 0; i -= 1) {
    if (!actions.includes(prereq[i])) {
      actions.unshift(prereq[i]);
    }
  }
}

function injectCommentModalActions(row: BsExcelRow, setup: string[], actions: string[]): void {
  if (!isCommentModalTask(row)) {
    return;
  }

  const sm = row.subModule.toLowerCase();
  if (sm.includes("actions") || sm.includes("comment modal")) {
    pushUnique(setup, "await bsPage.expectMatchResultsPageLoaded()");
  }

  const rowIdx = gridRowIndex(row);
  const comment = escapeStr(actionComment(row));
  const action = actionNameFromTask(row) || "Under Review";
  const ctx = taskContext(row);
  const allSteps = [...setup, ...actions];

  if (!allSteps.some((s) => s.includes("openScreeningResultByGridRow"))) {
    if (row.subModule.toLowerCase().includes("screening results") && !sm.includes("actions")) {
      pushUnique(setup, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
      pushUnique(setup, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    }
  }
  if (!allSteps.some((s) => s.includes("openUnderReviewActionsMenu"))) {
    pushUnique(actions, `await bsPage.openUnderReviewActionsMenu(${rowIdx})`);
  }
  if (!allSteps.some((s) => s.includes("clickDispositionMenuItem"))) {
    pushUnique(actions, `await bsPage.clickDispositionMenuItem('${action}')`);
  }

  const hasModalStep = [...setup, ...actions].some((s) =>
    s.includes("expectCommentModalVisible")
    || s.includes("fillCommentAndConfirm")
    || s.includes("submitBlankComment")
    || s.includes("cancelCommentModal")
    || s.includes("fillCommentWithSpecialChars")
    || s.includes("fillCommentWithSqlInjection"),
  );
  if (hasModalStep) {
    return;
  }

  if (/keyboard focus|focus trap|modal opens|modal displayed/i.test(ctx)) {
    for (let i = actions.length - 1; i >= 0; i -= 1) {
      if (actions[i].includes("fillCommentAndConfirm") || actions[i].includes("expectCommentModalClosed")) {
        actions.splice(i, 1);
      }
    }
    pushUnique(actions, "await bsPage.expectCommentModalVisible()");
  } else if (/blank|mandatory|whitespace|without entering/i.test(ctx)) {
    pushUnique(actions, "await bsPage.submitBlankComment()");
  } else if (/cancel/i.test(ctx)) {
    pushUnique(actions, "await bsPage.cancelCommentModal()");
  } else if (/sql injection/i.test(ctx)) {
    pushUnique(actions, "await bsPage.fillCommentWithSqlInjection()");
  } else if (/special char|xss/i.test(ctx)) {
    pushUnique(actions, "await bsPage.fillCommentWithSpecialChars()");
  } else if (!/mandatory|blank/i.test(ctx)) {
    pushUnique(actions, `await bsPage.fillCommentAndConfirm('${comment}')`);
  }
}

function normalizeExportSteps(actions: string[], assertions: string[]): { actions: string[]; assertions: string[] } {
  const nextActions = [...actions];
  let nextAssertions = [...assertions];

  const expectsDownload = nextAssertions.some((s) => s.includes("expectExportDownloadStarted"))
    || nextActions.some((s) => s.includes("expectExportDownloadStarted"));

  if (expectsDownload) {
    for (let i = nextActions.length - 1; i >= 0; i -= 1) {
      if (nextActions[i].includes("clickExportReport")) {
        nextActions.splice(i, 1);
      }
    }
    nextAssertions = nextAssertions.filter((s) => !s.includes("expectExportDownloadStarted"));
    pushUnique(nextActions, "await bsPage.expectExportDownloadStarted()");
  }

  return { actions: nextActions, assertions: nextAssertions };
}

function shouldAutoOpenScreeningResults(row: BsExcelRow): boolean {
  if (isActionTask(row) || isReviewContext(row)) {
    return true;
  }
  const sm = row.subModule.toLowerCase();
  if (isMatchResultsContext(row) && !isScreeningResultsContext(row)) {
    return false;
  }
  if (numberedOpensScreeningResults(row)) {
    return false;
  }
  if (sm.includes("filters") || sm.includes("export") || sm.includes("rbac") || sm.includes("api")) {
    return false;
  }
  return isScreeningResultsContext(row);
}

function shouldOpenScreeningResultDetail(row: BsExcelRow): boolean {
  if (isBulkTask(row)) {
    return false;
  }
  const sm = row.subModule.toLowerCase();
  if (sm.includes("actions") || sm.includes("comment modal") || sm.includes("export")) {
    return false;
  }
  if (shouldAutoOpenScreeningResults(row) || isReviewContext(row)) {
    return true;
  }
  return isActionTask(row) && sm.includes("screening results");
}

function numberedOpensScreeningResults(row: BsExcelRow): boolean {
  return parseNumberedSteps(row.testSteps).some((s) =>
    stepMatches(s, "customer name", "matched list", "number of matched", "screening result", "view details"),
  );
}

const OPEN = "await bsPage.openBatchScreeningDirect(testData.baseUrl)";

export function buildExcelSetupActions(row: BsExcelRow): string[] {
  const steps: string[] = [];
  const rowIdx = gridRowIndex(row);

  if (isRbacUnauthorizedRow(row) || isUnauthorizedDirectAccessRow(row)) {
    pushUnique(steps, "await bsPage.mockUnauthorized()");
    pushUnique(steps, OPEN);
    return steps;
  }

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await bsPage.mockMatchResultsApiFailure()");
  }

  if (isEmptyDatasetRow(row)) {
    pushUnique(steps, "await bsPage.mockEmptyMatchResults()");
    pushUnique(steps, OPEN);
    pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
    pushUnique(steps, "await bsPage.simulateEmptyGridView()");
    return steps;
  }

  if (isUnauthorizedExportRestriction(row)) {
    pushUnique(steps, "await bsPage.mockExportReportRestricted()");
  }

  pushUnique(steps, OPEN);

  if (isMatchResultsContext(row) || row.subModule.toLowerCase() === "batch screening") {
    if (isUnauthorizedExportRestriction(row) || isRbacUnauthorizedRow(row)) {
      pushUnique(steps, "await bsPage.expectMatchResultsPageShellLoaded()");
    } else {
      pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
    }
  }

  if (shouldOpenScreeningResultDetail(row)) {
    if (!steps.some((s) => s.includes("openScreeningResultByGridRow"))) {
      pushUnique(steps, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
    }
  }

  if (isReviewContext(row)) {
    pushUnique(steps, "await bsPage.openMatchReviewFromResultsDetail()");
  }

  if (/pagination/i.test(rowBlob(row)) && !isLandingOrShellTask(row)) {
    pushUnique(steps, "await bsPage.ensurePaginationEnabled()");
  }

  return steps;
}

export function buildExcelStepActions(row: BsExcelRow): string[] {
  const steps: string[] = [];

  if (isRbacUnauthorizedRow(row)) {
    return steps;
  }

  if (isUnauthorizedExportRestriction(row)) {
    return steps;
  }

  if (isLandingOrShellTask(row) && !isFilterOrSearchTask(row) && !isExportTask(row) && !isActionTask(row)) {
    return steps;
  }

  const numbered = parseNumberedSteps(row.testSteps).filter((s) => stepMatchesTask(s, row));
  const rowIdx = gridRowIndex(row);
  const comment = escapeStr(actionComment(row));

  for (const s of numbered) {
    const sl = s.toLowerCase();

    if (stepMatches(s, "login", "log in", "log out", "credential")) {
      continue;
    }
    if (stepMatches(s, "open sanctions screening", "open the sanctions screening")) {
      continue;
    }
    if (stepMatches(s, "go to the match results", "navigate to the match results", "match results page under")) {
      continue;
    }
    if (/check that the filter bar|filter bar and results grid/i.test(sl)) {
      pushUnique(steps, "await bsPage.expectFiltersVisible()");
      continue;
    }
    if (/watchlists top navigation|click the watchlists/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickTopTab('Watchlists')");
      continue;
    }
    if (/screening top navigation|click the screening tab/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickTopTab('Screening')");
      continue;
    }
    if (/date range preset|date preset/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyDateRangePreset('Last Year')");
      continue;
    }
    if (/clear filters/i.test(sl)) {
      pushUnique(steps, "await bsPage.clearFilters()");
      continue;
    }
    if (/pagination next/i.test(sl)) {
      pushUnique(steps, "await bsPage.goToNextPage()");
      continue;
    }
    if (/pagination previous/i.test(sl)) {
      pushUnique(steps, "await bsPage.goToPreviousPage()");
      continue;
    }
    if (/customer name link|first row of the match results grid|open a screening record/i.test(sl)) {
      if (row.subModule.toLowerCase().includes("actions") || row.subModule.toLowerCase().includes("comment modal")) {
        continue;
      }
      pushUnique(steps, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
      pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
      continue;
    }
    if (/number of matched list/i.test(sl)) {
      pushUnique(steps, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
      pushUnique(steps, `await bsPage.openMatchReviewFromListRow(${rowIdx})`);
      continue;
    }
    if (/click the actions dropdown/i.test(sl)) {
      pushUnique(steps, `await bsPage.openUnderReviewActionsMenu(${rowIdx})`);
      continue;
    }
    if (/select false positive from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('False Positive')");
      continue;
    }
    if (/select confirm match from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Confirm Match')");
      continue;
    }
    if (/select move to case from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Case')");
      continue;
    }
    if (/select move to whitelist from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Whitelist')");
      continue;
    }
    if (/select move to exception/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Move to Exception List')");
      continue;
    }
    if (/select under review from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
      continue;
    }
    if (/select view details from the actions menu/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickViewDetailsActionOnFirstRow()");
      continue;
    }
    if (/comment modal opens|verify the comment modal/i.test(sl)) {
      pushUnique(steps, "await bsPage.expectCommentModalVisible()");
      continue;
    }
    if (/click confirm action without entering|without entering a comment/i.test(sl)) {
      pushUnique(steps, "await bsPage.submitBlankComment()");
      continue;
    }
    if (/click cancel on the comment modal/i.test(sl)) {
      pushUnique(steps, "await bsPage.cancelCommentModal()");
      continue;
    }
    if (/enter action comment/i.test(sl)) {
      pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
      continue;
    }
    if (/click confirm action/i.test(sl)) {
      pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
      continue;
    }
    if (/click the false positive button in the match review/i.test(sl)) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('False Positive')");
      pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
      continue;
    }
    if (/click the confirm match button in the match review/i.test(sl)) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('Confirm Match')");
      pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
      continue;
    }
    if (/click the report button in the match review/i.test(sl)) {
      pushUnique(steps, "await bsPage.triggerDispositionAction('Report')");
      continue;
    }
    if (/ai summary tab/i.test(sl)) {
      pushUnique(steps, "await bsPage.openReviewTab('AI Summary')");
      continue;
    }
    if (/match details tab/i.test(sl)) {
      pushUnique(steps, "await bsPage.openReviewTab('Match Details')");
      continue;
    }
    if (/view summary tab/i.test(sl)) {
      pushUnique(steps, "await bsPage.openReviewTab('View Summary')");
      continue;
    }
    if (/export report button|click export report/i.test(sl)) {
      pushUnique(steps, "await bsPage.clickExportReport()");
      continue;
    }
    if (/search keyword|search field|search input|enter the test search|enter the search keyword/i.test(sl)) {
      pushUnique(steps, `await bsPage.searchMatchResults('${escapeStr(searchKeyword(row))}')`);
      continue;
    }
    if (/filter chip/i.test(sl) && /branch/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('Branch')");
      continue;
    }
    if (/filter chip/i.test(sl) && /customer id/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('Customer ID')");
      continue;
    }
    if (/filter chip/i.test(sl) && /account/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('Account No.')");
      continue;
    }
    if (/filter chip/i.test(sl) && /screening type/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('Screening Type')");
      continue;
    }
    if (/filter chip/i.test(sl) && /list name/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('List Name')");
      continue;
    }
    if (/filter chip/i.test(sl) && /date range/i.test(sl)) {
      pushUnique(steps, "await bsPage.applyFilterChip('Date Range')");
      continue;
    }
    if (/refresh the page|refresh the page and confirm/i.test(sl)) {
      pushUnique(steps, "await bsPage.refreshPage()");
      continue;
    }
    if (/back to match results|back control to return to the match results/i.test(sl)) {
      pushUnique(steps, "await bsPage.returnToMatchResultsList()");
      continue;
    }
    if (/back to return to the screening results/i.test(sl)) {
      pushUnique(steps, "await bsPage.goBack()");
      continue;
    }
    if (/new screening button/i.test(sl)) {
      pushUnique(steps, "await bsPage.openStartBatchPanel()");
      continue;
    }
    if (/filter results button/i.test(sl)) {
      pushUnique(steps, "await bsPage.expectFiltersVisible()");
      continue;
    }
    if (/sortable column header/i.test(sl)) {
      pushUnique(steps, "await bsPage.sortFirstColumn()");
      continue;
    }
    if (/start batch|run batch/i.test(sl)) {
      pushUnique(steps, "await bsPage.runBatchWithFirstWatchlistRule()");
      continue;
    }
    if (/schedule batch|save schedule/i.test(sl)) {
      pushUnique(steps, "await bsPage.saveScheduleBatch()");
      continue;
    }
    if (/select multiple|bulk row selection/i.test(sl)) {
      pushUnique(steps, "await bsPage.selectBulkRecords(2)");
      continue;
    }
    if (/direct url|batch screening url directly/i.test(sl)) {
      pushUnique(steps, "await bsPage.mockUnauthorized()");
      pushUnique(steps, OPEN);
      continue;
    }
    if (/legacy|scr-01|disposition|open matched record|open screening results/i.test(sl)) {
      if (/move to case/i.test(sl)) {
        pushUnique(steps, `await bsPage.submitDispositionWithComment('Move to Case', '${comment}')`);
      } else if (/false positive/i.test(sl)) {
        pushUnique(steps, `await bsPage.submitDispositionWithComment('False Positive', '${comment}')`);
      } else if (/confirm match/i.test(sl)) {
        pushUnique(steps, `await bsPage.submitDispositionWithComment('Confirm Match', '${comment}')`);
      } else if (/view details|open matched|screening result/i.test(sl)) {
        pushUnique(steps, `await bsPage.openScreeningResultByGridRow(${rowIdx})`);
        pushUnique(steps, "await bsPage.expectScreeningResultsWorkspaceLoaded()");
      }
    }
  }

  if (steps.length === 0) {
    const chip = filterChipNameFromTask(row);
    if (chip) {
      pushUnique(steps, `await bsPage.applyFilterChip('${chip}')`);
    } else if (isExportTask(row) && !/audit|history/i.test(taskContext(row))) {
      pushUnique(steps, "await bsPage.clickExportReport()");
    } else if (/search/i.test(taskContext(row))) {
      pushUnique(steps, `await bsPage.searchMatchResults('${escapeStr(searchKeyword(row))}')`);
    } else if (isCommentModalTask(row)) {
      pushUnique(steps, `await bsPage.openUnderReviewActionsMenu(${rowIdx})`);
      pushUnique(steps, "await bsPage.clickDispositionMenuItem('Under Review')");
      if (/keyboard focus|focus trap/i.test(taskContext(row))) {
        pushUnique(steps, "await bsPage.expectCommentModalVisible()");
      } else if (/blank|mandatory|whitespace/i.test(taskContext(row))) {
        pushUnique(steps, "await bsPage.submitBlankComment()");
      } else if (/cancel/i.test(taskContext(row))) {
        pushUnique(steps, "await bsPage.cancelCommentModal()");
      } else {
        pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
      }
    } else if (isActionTask(row)) {
      const action = actionNameFromTask(row);
      if (action) {
        pushUnique(steps, `await bsPage.openUnderReviewActionsMenu(${rowIdx})`);
        pushUnique(steps, `await bsPage.clickDispositionMenuItem('${action}')`);
        if (!/mandatory|blank/i.test(taskContext(row))) {
          pushUnique(steps, `await bsPage.fillCommentAndConfirm('${comment}')`);
        }
      }
    }
  }

  if (isEmptyDatasetRow(row)) {
    pushUnique(steps, "await bsPage.simulateEmptyGridView()");
  }

  return steps;
}

export function buildExcelAssertionActions(row: BsExcelRow): string[] {
  const steps = buildAssertionsForRow(row, getFsdEntryForRow(row));
  const blob = rowBlob(row);

  if (isRbacUnauthorizedRow(row) || isUnauthorizedDirectAccessRow(row)) {
    pushUnique(steps, "await bsPage.expectAccessDenied()");
  }

  if (isUnauthorizedExportRestriction(row)) {
    const filtered = steps.filter((s) =>
      !s.includes("expectExportReportVisible")
      && !s.includes("expectExportDownloadStarted")
      && !s.includes("expectAuditTrailVisible"),
    );
    steps.length = 0;
    for (const s of filtered) {
      pushUnique(steps, s);
    }
    pushUnique(steps, "await bsPage.expectExportReportRestricted()");
    return steps;
  }

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await bsPage.expectApiFailureHandledGracefully()");
  } else if (isApiSuccessRow(row)) {
    pushUnique(steps, "await bsPage.expectMatchResultsPageLoaded()");
  }

  if (isEmptyDatasetRow(row)) {
    pushUnique(steps, "await bsPage.expectEmptyStateVisible()");
  }

  if (/filter|search/i.test(blob) && steps.length === 0) {
    pushUnique(steps, "await bsPage.expectFiltersVisible()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: BsExcelRow): string {
  const lines: string[] = [];
  let setup = buildExcelSetupActions(row);
  let actions = buildExcelStepActions(row);
  let assertions = buildExcelAssertionActions(row);

  const onScreeningResults = [...setup, ...actions, ...assertions].some(
    (s) => s.includes("expectScreeningResultsWorkspaceLoaded") || s.includes("openScreeningResultByGridRow"),
  );

  if (onScreeningResults) {
    assertions = assertions.filter((s) => !s.includes("expectMatchResultsPageLoaded"));
  }

  if (isRbacUnauthorizedRow(row) || isUnauthorizedDirectAccessRow(row)) {
    setup = setup.filter((s) => !s.includes("expectMatchResultsPageLoaded"));
    actions = [];
    assertions = assertions.filter((s) =>
      s.includes("expectAccessDenied") || s.includes("expectExportReportRestricted"),
    );
    if (!assertions.some((s) => s.includes("expectAccessDenied"))) {
      assertions.push("await bsPage.expectAccessDenied()");
    }
  } else if (isUnauthorizedExportRestriction(row)) {
    setup = setup.filter((s) =>
      !s.includes("openScreeningResult")
      && !s.includes("expectScreeningResults")
      && !s.includes("openMatchReview")
      && !s.includes("expectMatchResultsPageLoaded")
      && !s.includes("expectExportReportVisible"),
    );
    actions = [];
    assertions = assertions.filter((s) =>
      s.includes("expectExportReportRestricted") || s.includes("expectMatchResultsPageShellLoaded"),
    );
    if (!assertions.some((s) => s.includes("expectExportReportRestricted"))) {
      assertions.push("await bsPage.expectExportReportRestricted()");
    }
  } else if (isBulkDispositionTask(row)) {
    setup = setup.filter((s) =>
      !s.includes("openScreeningResult")
      && !s.includes("expectScreeningResults")
      && !s.includes("openMatchReview"),
    );
    const action = actionNameFromTask(row) || "Confirm Match";
    const comment = escapeStr(actionComment(row));
    actions = [
      "await bsPage.selectBulkRecords(2)",
      `await bsPage.triggerBulkDispositionAction('${action}', '${comment}')`,
    ];
    ({ actions, assertions } = normalizeExportSteps(actions, assertions));
  } else if (isBulkUiTask(row)) {
    setup = setup.filter((s) =>
      !s.includes("openScreeningResult")
      && !s.includes("expectScreeningResults")
      && !s.includes("openMatchReview"),
    );
    actions = ["await bsPage.selectBulkRecords(2)"];
    assertions = assertions.filter((s) => !s.includes("triggerBulkDispositionAction"));
    if (!assertions.some((s) => s.includes("expectBatchControlsVisible"))) {
      assertions.push("await bsPage.expectBatchControlsVisible()");
    }
  } else {
    if (isPureExportTask(row)) {
      setup = setup.filter((s) =>
        !s.includes("openScreeningResultByGridRow")
        && !s.includes("expectScreeningResultsWorkspaceLoaded"),
      );
      actions = actions.filter((s) =>
        !s.includes("openUnderReviewActionsMenu")
        && !s.includes("clickDispositionMenuItem")
        && !s.includes("fillCommentAndConfirm")
        && !s.includes("expectAuditTrailVisible"),
      );
      assertions = assertions.filter((s) => !s.includes("expectAuditTrailVisible"));
    } else {
      injectAuditPrerequisite(row, setup, actions);
    }
    injectCommentModalActions(row, setup, actions);
    if (isCommentModalTask(row) || row.subModule.toLowerCase().includes("actions")) {
      setup = setup.filter((s) =>
        !s.includes("openScreeningResultByGridRow")
        && !s.includes("expectScreeningResultsWorkspaceLoaded"),
      );
      if (actions.some((s) => s.includes("submitBlankComment"))) {
        assertions = assertions.filter((s) => !s.includes("expectCommentModalClosed"));
        if (!assertions.some((s) => s.includes("expectCommentValidationVisible"))) {
          assertions.push("await bsPage.expectCommentValidationVisible()");
        }
      }
    }
    if (isCommentModalTask(row) && /keyboard focus|focus trap/i.test(taskContext(row))) {
      actions = actions.filter((s) =>
        !s.includes("fillCommentAndConfirm") && !s.includes("expectCommentModalClosed"),
      );
      assertions = assertions.filter((s) => !s.includes("expectCommentModalClosed"));
      const menuIdx = actions.findIndex((s) => s.includes("clickDispositionMenuItem"));
      const modalIdx = actions.findIndex((s) => s.includes("expectCommentModalVisible"));
      if (menuIdx >= 0 && modalIdx >= 0 && modalIdx < menuIdx) {
        const modalStep = actions.splice(modalIdx, 1)[0];
        actions.splice(menuIdx + 1, 0, modalStep);
      }
      if (!actions.some((s) => s.includes("expectCommentModalVisible"))) {
        actions.push("await bsPage.expectCommentModalVisible()");
      }
    }
    ({ actions, assertions } = normalizeExportSteps(actions, assertions));
  }

  if (isUnauthorizedExportRestriction(row)) {
    setup = setup.filter((s) => !s.includes("expectMatchResultsPageLoaded") && !s.includes("expectExportReportVisible"));
    actions = actions.filter((s) =>
      !s.includes("expectMatchResultsPageLoaded")
      && !s.includes("expectExportReportVisible")
      && !s.includes("clickExportReport")
      && !s.includes("applyFilterChip")
      && !s.includes("clickTopTab")
      && !s.includes("goToNextPage")
      && !s.includes("goToPreviousPage")
      && !s.includes("openScreeningResult")
      && !s.includes("openMatchReview")
      && !s.includes("openUnderReviewActionsMenu"),
    );
  }

  const seen = new Set<string>();
  for (const block of [setup, actions, assertions]) {
    for (const step of block) {
      const key = step.replace(/\s+/g, " ").trim();
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);
      lines.push(step);
    }
  }

  return lines.join(";\n    ");
}

export function formatTestTitle(row: BsExcelRow): string {
  const feature = featureGroup(row.subModule);
  const action = row.taskDescription.replace(/^(Verify|Check that)\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function formatExcelComment(row: BsExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Task: ${row.taskDescription}`;
}
