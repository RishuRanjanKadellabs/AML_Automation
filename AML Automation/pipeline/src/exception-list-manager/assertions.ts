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
    push("await elmPage.expectExceptionListManagerViewLoaded()");
  }

  return steps.join(";\n    ");
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
