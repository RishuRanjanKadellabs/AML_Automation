import type { ElmExcelRow } from "./types";

function pushUnique(steps: string[], step: string): void {
  if (!steps.includes(step)) {
    steps.push(step);
  }
}

export function isNegativeErrorContext(text: string): boolean {
  return /without\s+[^.]*error|no\s+[^.]*error|no\s+layout|without layout issues|without ui distortion|no console|frontend errors free|no missing action/i.test(
    text,
  );
}

export function buildAssertionsForRow(row: ElmExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const mod = row.module.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);

  if (er.includes("page") && (er.includes("load") || er.includes("render") || er.includes("display") || er.includes("opens"))) {
    push("await elmPage.expectExceptionListManagerViewLoaded()");
  }
  if (er.includes("route") || er.includes("url")) {
    push("await elmPage.expectOnExceptionListRoute()");
  }
  if (er.includes("summary") || er.includes("counter") || sm.includes("landing page")) {
    push("await elmPage.expectSummaryCardsVisible()");
  }
  if (er.includes("tab") && (er.includes("visible") || er.includes("display") || er.includes("status"))) {
    push("await elmPage.expectStatusTabsVisible()");
  }
  if (er.includes("grid") || er.includes("table") || er.includes("column") || er.includes("listing")) {
    if (mod.includes("register report") || sm.includes("executive summary")) {
      push("await elmPage.expectReportSectionVisible()");
    } else if (sm.includes("entry") || sm.includes("view exception list")) {
      push("await elmPage.expectEntryGridVisible()");
    } else {
      push("await elmPage.expectListGridVisible()");
    }
  }
  if (er.includes("search") && (er.includes("input") || er.includes("filter") || er.includes("refresh"))) {
    push("await elmPage.expectSearchInputVisible()");
  }
  if (
    (er.includes("pagination") || er.includes("page size") || er.includes("rows per page"))
    && mod.includes("register report")
  ) {
    push("await elmPage.expectReportSectionVisible()");
  }
  if (er.includes("export") || er.includes("download")) {
    push("await elmPage.expectExportOptions()");
  }
  if (er.includes("modal") || er.includes("dialog") || er.includes("overlay") || er.includes("prompt")) {
    if (sm.includes("bulk upload")) {
      push("await expect(elmPage.bulkUploadModal).toBeVisible()");
    } else if (sm.includes("create exception list") || sm.includes("add entry")) {
      push("await expect(elmPage.createFormModal).toBeVisible()");
    } else if (sm.includes("delete")) {
      push("await elmPage.expectDeleteWarning()");
    } else if (sm.includes("suspend")) {
      push("await elmPage.expectSuspendWarning()");
    }
  }
  if (er.includes("audit") || er.includes("trail") || er.includes("history") || mod.includes("audit trail")) {
    push("await elmPage.expectAuditPanelLoaded()");
  }
  if (er.includes("notification") || er.includes("alert") || er.includes("toast") || mod.includes("notification")) {
    push("await elmPage.expectNotificationVisible()");
  }
  if (er.includes("queue") || er.includes("pending") || sm.includes("maker-checker") || mod.includes("maker-checker")) {
    push("await elmPage.expectMakerCheckerQueueVisible()");
  }
  if (er.includes("approve") || er.includes("reject") || sm.includes("approval")) {
    if (task.includes("not available") || task.includes("hidden") || task.includes("cannot") || er.includes("does not expose")) {
      push("await elmPage.expectCheckerActionsHidden()");
    } else {
      push("await elmPage.expectCheckerActionsVisible()");
    }
  }
  if (er.includes("suppression") || er.includes("evaluat") || er.includes("match") || mod.includes("evaluation")) {
    push("await elmPage.expectEvaluationOutcome()");
  }
  if (er.includes("reason code") || sm.includes("reason code")) {
    push("await elmPage.expectReasonCodeVisible()");
  }
  if (er.includes("evidence") || sm.includes("evidence")) {
    push("await elmPage.expectEvidenceAttachmentVisible()");
  }
  if (
    er.includes("unauthorized")
    || er.includes("denied")
    || er.includes("cannot access")
    || er.includes("restricted")
    || er.includes("read-only")
    || er.includes("not available")
    || er.includes("hidden")
    || task.includes("unauthorized")
    || mod.includes("role-based access")
    || sm.includes("access control")
  ) {
    if (er.includes("denied") || er.includes("unauthorized") || task.includes("unauthorized")) {
      push("await elmPage.expectAccessDenied()");
    }
    if (mod.includes("rbac") || sm.includes("permission") || task.includes("viewer") || task.includes("restricted")) {
      push("await elmPage.expectRbacControlsHidden()");
    }
  }
  if (
    (er.includes("error") || er.includes("validation") || er.includes("warning") || er.includes("blocked") || er.includes("refused"))
    && !isNegativeErrorContext(er)
    && !isNegativeErrorContext(task)
  ) {
    if (er.includes("business-rule") || er.includes("business rule")) {
      push("await elmPage.expectBusinessRuleMessage()");
    } else if (er.includes("blocked") || er.includes("prevent") || er.includes("duplicate")) {
      push("await elmPage.expectSubmissionBlocked()");
    } else {
      push("await elmPage.expectInlineValidationError()");
    }
  }
  if (er.includes("sla") || sm.includes("sla")) {
    push("await elmPage.expectSlaIndicator()");
  }
  if (er.includes("console") || task.includes("console")) {
    push("await elmPage.expectConsoleErrorsFree()");
  }
  if (steps.length === 0) {
    push(fallbackAssertion(row));
  }

  return steps.join(";\n    ");
}

/** Module/sub-module-aware fallback when no keyword rule matched. Uses heal-backed assertions only. */
function fallbackAssertion(row: ElmExcelRow): string {
  const mod = row.module.toLowerCase();
  const sm = row.subModule.toLowerCase();

  if (mod.includes("register report")) {
    if (sm.includes("executive summary")) return "await elmPage.expectExecutiveSummaryVisible()";
    if (sm.includes("reason code analysis")) return "await elmPage.expectReasonCodeAnalysisVisible()";
    if (sm.includes("watchlist analysis")) return "await elmPage.expectWatchlistAnalysisVisible()";
    if (sm.includes("data integrity") || sm.includes("layout")) return "await elmPage.expectReportLayoutIntact()";
    return "await elmPage.expectReportSectionVisible()";
  }
  if (mod.includes("audit")) return "await elmPage.expectAuditPanelLoaded()";
  if (mod.includes("evaluation") || mod.includes("matching")) return "await elmPage.expectEvaluationOutcome()";
  if (mod.includes("maker-checker")) return "await elmPage.expectMakerCheckerQueueVisible()";
  if (mod.includes("reason code") || mod.includes("evidence")) return "await elmPage.expectReasonCodeVisible()";
  if (mod.includes("notification")) return "await elmPage.expectNotificationVisible()";
  if (mod.includes("role-based") || mod.includes("rbac")) return "await elmPage.expectMenuAccess()";

  if (mod.includes("non-functional")) {
    if (sm.includes("performance")) return "await elmPage.expectPerformanceBaseline()";
    if (sm.includes("scalability")) return "await elmPage.expectScalabilityIndicators()";
    if (sm.includes("ttl")) return "await elmPage.expectTtlEnforcement()";
    if (sm.includes("retention")) return "await elmPage.expectDataRetentionPolicy()";
    if (sm.includes("evidence security")) return "await elmPage.expectEvidenceSecurityControls()";
    if (sm.includes("availability")) return "await elmPage.expectAvailabilityStatus()";
    return "await elmPage.expectExceptionListManagerViewLoaded()";
  }

  if (mod.includes("entry")) {
    if (sm.includes("bulk upload")) return "await expect(elmPage.bulkUploadModal).toBeVisible()";
    if (sm.includes("api")) return "await elmPage.expectApiSyncResponse()";
    if (sm.includes("ttl") || sm.includes("renewal")) return "await elmPage.expectTtlEnforcement()";
    return "await elmPage.expectEntryGridVisible()";
  }

  if (mod.includes("exception list management")) {
    if (sm.includes("view") || sm.includes("edit")) return "await elmPage.expectListMetadataVisible()";
    return "await elmPage.expectListGridVisible()";
  }

  return "await elmPage.expectExceptionListManagerViewLoaded()";
}

export function formatTestTitle(row: ElmExcelRow): string {
  const feature = row.subModule.trim() || "Core";
  const action = row.taskDescription
    .replace(/^Verify\s+(that\s+)?/i, "")
    .replace(/^Confirm\s+(that\s+)?/i, "")
    .replace(/^Validate\s+(that\s+)?/i, "")
    .replace(/^Check\s+(that\s+)?/i, "")
    .replace(/^Ensure\s+(that\s+)?/i, "")
    .trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function escapeScenarioComment(taskDescription: string): string {
  return taskDescription.replace(/\*\//g, "* /");
}
