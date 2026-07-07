import type { ClmExcelRow } from "./types";

function pushUnique(steps: string[], step: string): void {
  if (!steps.includes(step)) {
    steps.push(step);
  }
}

function isNegativeErrorContext(text: string): boolean {
  return /without\s+[^.]*error|no\s+[^.]*error|no\s+layout|no\s+console|frontend errors free|without layout issues|without ui distortion/i.test(
    text,
  );
}

function isBoilerplateGovernanceEr(er: string): boolean {
  return /request completes with checker attribution and timestamp.*audit event recorded/i.test(er);
}

function expectsEmptyTableState(er: string, task: string): boolean {
  return (
    (er.includes("empty") && (er.includes("state") || er.includes("table") || er.includes("result")))
    || er.includes("no matching")
    || er.includes("no records")
    || er.includes("not found")
    || task.includes("non-existing")
    || task.includes("no matching")
    || task.includes("zero rows")
  );
}

function shouldSkipConsoleCheck(row: ClmExcelRow): boolean {
  const combined = `${row.taskDescription} ${row.expectedResult} ${row.subModule}`.toLowerCase();
  return (
    combined.includes("console error")
    || combined.includes("javascript error")
    || combined.includes("api failure")
    || combined.includes("network error")
    || combined.includes("offline")
    || combined.includes("mockapi")
    || (combined.includes("unauthorized") && combined.includes("401"))
  );
}

export function buildAssertionsForRow(row: ClmExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);

  if (er.includes("page") && (er.includes("load") || er.includes("render") || er.includes("display") || er.includes("opens"))) {
    push("await clmPage.expectCustomListManagerViewLoaded()");
  }
  if (er.includes("route") || er.includes("url") || er.includes("breadcrumb")) {
    push("await clmPage.expectOnCustomListManagerRoute()");
  }
  if (er.includes("title") || er.includes("header") || sm.includes("dashboard")) {
    push("await clmPage.expectPageTitleVisible()");
  }
  if (er.includes("subtitle") || (er.includes("description") && sm.includes("dashboard"))) {
    push("await clmPage.expectDashboardSubtitleVisible()");
  }
  if (
    task.includes("user identity")
    || task.includes("logged-in user")
    || (er.includes("sidebar") && (er.includes("identity") || er.includes("initials") || er.includes("display name") || er.includes("role label")))
  ) {
    push("await clmPage.expectSidebarUserIdentityVisible()");
  }
  if (er.includes("breadcrumb") || sm.includes("breadcrumb")) {
    push("await clmPage.expectBreadcrumbVisible()");
  }
  if (er.includes("top bar") || er.includes("toolbar") || er.includes("action bar") || sm.includes("top bar")) {
    push("await clmPage.expectTopBarVisible()");
  }
  if (er.includes("dashboard") || sm.includes("dashboard")) {
    push("await clmPage.expectDashboardHeaderVisible()");
  }
  if (er.includes("search") && (er.includes("input") || er.includes("render") || er.includes("filter") || er.includes("field"))) {
    push("await clmPage.expectSearchInputVisible()");
  }
  if (er.includes("filter") || sm.includes("search & filters")) {
    push("await clmPage.expectFiltersVisible()");
  }
  if (er.includes("table") || er.includes("column") || er.includes("grid") || er.includes("listing")) {
    if (!expectsEmptyTableState(er, task)) {
      if (sm.includes("entity grid")) {
        push("await clmPage.expectEntityGridVisible()");
      } else if (sm.includes("audit listing")) {
        push("await clmPage.expectAuditListingVisible()");
      } else {
        push("await clmPage.expectListGridVisible()");
      }
    }
  }
  if (er.includes("header") && (er.includes("column") || er.includes("table"))) {
    push("await clmPage.expectTableHeadersVisible()");
  }
  if (er.includes("export") || sm.includes("audit export")) {
    push("await clmPage.expectExportOptions()");
  }
  if (er.includes("pagination") || er.includes("page size")) {
    push("await clmPage.expectPaginationVisible()");
  }
  if (
    er.includes("modal")
    || er.includes("popup")
    || (er.includes("overlay") && !er.includes("without overlay"))
    || er.includes("dialog")
    || er.includes("form")
  ) {
    if (sm.includes("create list")) {
      push("await expect(clmPage.createListForm).toBeVisible()");
    } else if (sm.includes("add entity")) {
      push("await expect(clmPage.addEntityForm).toBeVisible()");
    } else if (sm.includes("upload") || sm.includes("template")) {
      push("await expect(clmPage.bulkUploadModal).toBeVisible()");
    } else if (sm.includes("enable disable")) {
      push("await clmPage.expectDisableConfirmation()");
    }
  }
  if (er.includes("draft") || sm.includes("draft management")) {
    push("await clmPage.expectDraftStateVisible()");
  }
  if (er.includes("submit") || er.includes("workflow") || sm.includes("submission")) {
    push("await clmPage.expectSubmissionWorkflowState()");
  }
  if (er.includes("metadata") || sm.includes("metadata integrity")) {
    push("await clmPage.expectMetadataIntegrity()");
  }
  if (er.includes("history") || sm.includes("entity history")) {
    push("await clmPage.expectEntityHistoryVisible()");
  }
  if (er.includes("validation report") || sm.includes("validation report")) {
    push("await clmPage.expectValidationReportVisible()");
  }
  if (er.includes("duplicate") && (er.includes("detect") || er.includes("reject") || er.includes("block"))) {
    push("await clmPage.expectDuplicateDetection()");
  }
  if (er.includes("queue") || er.includes("request") || sm.includes("all requests") || sm.includes("my requests")) {
    push("await clmPage.expectRequestQueueVisible()");
  }
  if (
    (er.includes("approve") || er.includes("approval") || sm.includes("approval workflow"))
    && !(sm.includes("landing actions") && task.includes("bulk upload"))
    && !(er.includes("header") && !er.includes("pending approval"))
    && !(sm.includes("matching configuration") || sm.includes("fuzzy matching") || sm.includes("multilingual matching"))
    && !(sm.includes("all requests") && isBoilerplateGovernanceEr(er))
  ) {
    if (task.includes("not available") || task.includes("hidden") || er.includes("cannot approve")) {
      push("await clmPage.expectRbacControlsHidden()");
    } else {
      push("await clmPage.expectApprovalActionsVisible()");
    }
  }
  if (er.includes("reject") || sm.includes("rejection workflow")) {
    push("await clmPage.expectRejectionWorkflowVisible()");
  }
  if (er.includes("sla") || sm.includes("sla validation")) {
    push("await clmPage.expectSlaIndicator()");
  }
  if (
    (er.includes("audit") || er.includes("event") || sm.includes("audit"))
    && !(sm.includes("all requests") && isBoilerplateGovernanceEr(er))
    && !(sm.includes("my requests") && isBoilerplateGovernanceEr(er))
  ) {
    push("await clmPage.expectAuditPanelLoaded()");
  }
  if (er.includes("integrity") || sm.includes("audit integrity")) {
    push("await clmPage.expectAuditIntegrity()");
  }
  if (er.includes("ttl") || sm.includes("ttl display") || sm.includes("ttl configuration")) {
    push("await clmPage.expectTtlDisplay()");
  }
  if (er.includes("expir") || sm.includes("expiry") || sm.includes("expiring soon") || sm.includes("expired status")) {
    push("await clmPage.expectExpiryStatusVisible()");
  }
  if (
    er.includes("exclusion")
    || sm.includes("screening exclusion")
    || task.includes("screening exclusion")
    || (er.includes("excluded") && er.includes("screening"))
    || (er.includes("suppressed") && er.includes("screening"))
  ) {
    push("await clmPage.expectScreeningExclusionApplied()");
  }
  if (
    er.includes("fuzzy")
    || er.includes("multilingual")
    || er.includes("alias")
    || er.includes("match score")
    || sm.includes("fuzzy matching")
    || sm.includes("multilingual matching")
    || task.includes("fuzzy matching")
    || task.includes("multilingual matching")
    || (er.includes("match") && (er.includes("fuzzy") || er.includes("screening match") || er.includes("hit score") || er.includes("near-match")))
  ) {
    if (sm.includes("matching configuration") || sm.includes("fuzzy matching")) {
      push("await clmPage.expectMatchingConfigurationVisible()");
    } else {
      push("await clmPage.expectMatchingOutcome()");
    }
  }
  if (er.includes("action on hit") || sm.includes("action on hit")) {
    push("await clmPage.expectActionOnHitBehaviour()");
  }
  if (er.includes("alert") || er.includes("notification") || sm.includes("alert generation")) {
    push("await clmPage.expectAlertGeneration()");
  }
  if (
    expectsEmptyTableState(er, task)
  ) {
    push("await clmPage.expectEmptyTableState()");
  }
  if (er.includes("loading") || er.includes("skeleton") || er.includes("spinner")) {
    push("await clmPage.expectLoadingIndicator()");
  }
  if (
    (task.includes("unauthorized") || task.includes("access denied") || task.includes("no access") || task.includes("restricted user"))
    || (er.includes("unauthorized") && !/authorized user|opens for the authorized/i.test(er))
  ) {
    if (er.includes("denied") || er.includes("unauthorized") || task.includes("unauthorized") || task.includes("denied")) {
      push("await clmPage.expectAccessDenied()");
    }
    if (sm.includes("segregation") || task.includes("viewer") || task.includes("restricted") || er.includes("not permitted")) {
      push("await clmPage.expectRbacControlsHidden()");
    }
  }
  if (
    (er.includes("error") || er.includes("validation") || er.includes("warning") || er.includes("blocked"))
    || (er.includes("reject") && (er.includes("validation") || er.includes("error") || sm.includes("rejection workflow") || task.includes("reject request") || task.includes("rejection reason")))
    && !isNegativeErrorContext(er)
    && !isNegativeErrorContext(ac)
    && !(er.includes("validation") && /pass|successful|accepted|without error|no error/i.test(er))
    && !(sm.includes("landing actions") && task.includes("bulk upload") && !er.includes("validation error"))
    && !(sm.includes("audit integrity") && er.includes("reject") && !er.includes("validation error"))
    && !(sm.includes("sla validation") && er.includes("reject") && !er.includes("validation error"))
  ) {
    if (er.includes("inline") || sm.includes("validation") || sm.includes("mandatory")) {
      push("await clmPage.expectInlineValidationError()");
    } else if (er.includes("blocked") || er.includes("prevent")) {
      push("await clmPage.expectSubmissionBlocked()");
    } else if (sm.includes("upload") || sm.includes("file format")) {
      push("await clmPage.expectUploadValidationError()");
    } else {
      push("await clmPage.expectInlineValidationError()");
    }
  }
  if (er.includes("disable") && (er.includes("confirm") || er.includes("confirmation"))) {
    push("await clmPage.expectDisableConfirmation()");
  }
  if (steps.length === 0) {
    push("await clmPage.expectCustomListManagerViewLoaded()");
  }
  if (!shouldSkipConsoleCheck(row)) {
    push("await clmPage.expectConsoleErrorsFree()");
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: ClmExcelRow): string {
  const feature = row.subModule.replace(/^Custom List Manager\s*-\s*/i, "").trim() || "Core";
  const action = row.taskDescription
    .replace(/^Verify\s+(that\s+)?/i, "")
    .replace(/^Confirm\s+(that\s+)?/i, "")
    .replace(/^Validate\s+(that\s+)?/i, "")
    .replace(/^Check\s+(that\s+)?/i, "")
    .trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function escapeScenarioComment(taskDescription: string): string {
  return taskDescription.replace(/\*\//g, "* /");
}
