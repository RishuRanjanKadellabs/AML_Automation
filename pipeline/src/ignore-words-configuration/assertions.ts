import type { IwcExcelRow } from "./types";

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

function modalShouldClose(er: string, task: string): boolean {
  const combined = `${er} ${task}`;
  if (/does not close|remains open|stays open/i.test(combined)) {
    return false;
  }
  return (
    /\b(modal|panel)\s+closes?\b/i.test(combined)
    || /\bcloses?\s+without\b/i.test(combined)
    || /fields? (are )?discarded/i.test(combined)
    || /not retained on reopen/i.test(combined)
    || (task.includes("overlay") && task.includes("backdrop"))
    || (task.includes("cancel") && /without saving|without creating|discarded/i.test(combined))
  );
}

function panelShouldStayOpen(er: string, task: string): boolean {
  return /does not close|remains open|stays open|not close when clicking overlay/i.test(`${er} ${task}`);
}

export function buildAssertionsForRow(row: IwcExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);
  const closes = modalShouldClose(er, task);
  const staysOpen = panelShouldStayOpen(er, task);

  if (er.includes("breadcrumb") || task.includes("breadcrumb")) {
    push("await iwcPage.expectBreadcrumbVisible()");
  }
  if (er.includes("page title") || (task.includes("title") && !task.includes("breadcrumb"))) {
    push("await iwcPage.expectPageTitleVisible()");
  }
  if (
    er.includes("page")
    && (er.includes("load") || er.includes("render") || er.includes("display"))
    && !er.includes("breadcrumb")
  ) {
    push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
  }
  if (er.includes("route") || er.includes("url")) {
    push("await iwcPage.expectOnIgnoreWordsConfigurationRoute()");
  }
  if (er.includes("active tab") && (er.includes("selected") || er.includes("default"))) {
    push('await iwcPage.expectTabSelected("Active")');
  }
  if (er.includes("tab") && (er.includes("visible") || er.includes("display"))) {
    push("await iwcPage.expectTabsVisible()");
  }
  if (er.includes("search") && (er.includes("input") || er.includes("render") || er.includes("filter"))) {
    push("await iwcPage.expectSearchInputVisible()");
  }
  if (er.includes("table") || er.includes("column") || er.includes("grid") || er.includes("listing")) {
    push("await iwcPage.expectIgnoreWordTableVisible()");
  }
  if (er.includes("export") && !closes) {
    push("await iwcPage.expectExportOptions()");
  }
  if (closes) {
    if (sm.includes("add category")) {
      push("await expect(iwcPage.addCategoryModal).toBeHidden()");
    } else if (sm.includes("category controls")) {
      push("await expect(iwcPage.categoryControlsModal).toBeHidden()");
    } else if (sm.includes("bulk upload")) {
      push("await expect(iwcPage.bulkUploadModal).toBeHidden()");
    } else if (sm.includes("word history") || sm.includes("audit history")) {
      push("await expect(iwcPage.wordHistoryPanel).toBeHidden()");
    } else if (sm.includes("maker-checker")) {
      push("await expect(iwcPage.checkerApprovalModal).toBeHidden()");
    }
    push("await iwcPage.expectIgnoreWordTableVisible()");
  } else if (staysOpen && sm.includes("add ignore word")) {
    push("await expect(iwcPage.addIgnoreWordPanel).toBeVisible()");
  } else if (
    (er.includes("modal") || er.includes("popup") || er.includes("dialog") || er.includes("confirmation"))
    && !(er.includes("overlay") && er.includes("without"))
  ) {
    if (sm.includes("add category") && (er.includes("confirmation") || er.includes("pending checker"))) {
      if (!(er.includes("no checker") || er.includes("not created") || er.includes("prevents submission"))) {
        push("await expect(iwcPage.checkerApprovalModal).toBeVisible()");
      }
    } else if (sm.includes("add category")) {
      push("await expect(iwcPage.addCategoryModal).toBeVisible()");
    } else if (sm.includes("category controls")) {
      push("await expect(iwcPage.categoryControlsModal).toBeVisible()");
    } else if (sm.includes("bulk upload")) {
      push("await expect(iwcPage.bulkUploadModal).toBeVisible()");
    } else if (sm.includes("checker approval") || sm.includes("maker-checker")) {
      push("await expect(iwcPage.checkerApprovalModal).toBeVisible()");
    }
  }
  if (!closes && (er.includes("panel") || er.includes("slides in") || er.includes("drawer"))) {
    if (sm.includes("add ignore word")) {
      push("await expect(iwcPage.addIgnoreWordPanel).toBeVisible()");
    } else if (sm.includes("word history") || sm.includes("audit history")) {
      push("await expect(iwcPage.wordHistoryPanel).toBeVisible()");
    }
  }
  if (er.includes("narrative") || sm.includes("live narrative")) {
    push("await iwcPage.expectLiveNarrativeTesterVisible()");
  }
  if (er.includes("risk level") || sm.includes("risk level")) {
    push("await iwcPage.expectRiskLevelBadgeVisible()");
  }
  if (er.includes("match type") || sm.includes("match type")) {
    push("await iwcPage.expectMatchTypeBadgeVisible()");
  }
  if (er.includes("status") && (er.includes("badge") || sm.includes("status badge"))) {
    push("await iwcPage.expectStatusBadgeVisible()");
  }
  if (er.includes("category") && er.includes("badge")) {
    push("await iwcPage.expectCategoryBadgeVisible()");
  }
  if (er.includes("notification") || er.includes("toast") || sm.includes("notifications")) {
    push("await iwcPage.expectNotificationVisible()");
  }
  if (
    er.includes("unauthorized")
    || er.includes("denied")
    || er.includes("cannot access")
    || task.includes("unauthorized")
  ) {
    push("await iwcPage.expectAccessDenied()");
  }
  if (sm.includes("rbac") || sm.includes("access control")) {
    if (row.id === "IWC-TC-134") {
      push("await iwcPage.expectMakerRbacAccess()");
    } else if (row.id === "IWC-TC-136") {
      push("await iwcPage.expectMakerCheckerQueueVisible()");
    } else if (row.id === "IWC-TC-137") {
      push("await iwcPage.expectMakerCheckerQueueVisible()");
    } else if (row.id === "IWC-TC-138") {
      push("await iwcPage.expectViewerReadAccess()");
    } else if (
      task.includes("viewer")
      || task.includes("cannot")
      || task.includes("prevent")
      || er.includes("hidden")
      || er.includes("disabled")
      || er.includes("not available")
      || er.includes("unavailable")
    ) {
      push("await iwcPage.expectRbacControlsHidden()");
    }
  }
  if (
    (er.includes("error") || er.includes("validation") || er.includes("warning") || er.includes("blocked"))
    && !isNegativeErrorContext(er)
    && !isNegativeErrorContext(ac)
    && !/successful validation|closes after successful/i.test(er)
  ) {
    if (er.includes("inline") || sm.includes("add ignore word") || sm.includes("duplicate")) {
      push("await iwcPage.expectInlineValidationError()");
    } else if (er.includes("blocked") || er.includes("prevent")) {
      if (row.id !== "IWC-TC-137") {
        push("await iwcPage.expectSubmissionBlocked()");
      }
    } else if (sm.includes("error handling")) {
      push("await iwcPage.expectErrorStateVisible()");
    } else {
      push("await iwcPage.expectInlineValidationError()");
    }
  }
  if (er.includes("disable") && (er.includes("confirm") || er.includes("confirmation") || er.includes("checker"))) {
    push("await iwcPage.expectCheckerApprovalModal()");
  }
  if (
    (er.includes("approve") || er.includes("reject") || sm.includes("maker-checker"))
    && !closes
    && !task.includes("cannot approve")
  ) {
    if (task.includes("not available") || task.includes("hidden") || er.includes("not available") || er.includes("unavailable")) {
      push("await iwcPage.expectRbacControlsHidden()");
    } else {
      push("await iwcPage.expectCheckerApprovalModal()");
    }
  }
  if (er.includes("audit") || ((er.includes("history") || er.includes("timeline")) && (sm.includes("audit") || sm.includes("word history")))) {
    push("await iwcPage.expectWordHistoryTimelineVisible()");
  }
  if (er.includes("checker queue") || er.includes("pending checker approval") || er.includes("pending approvals queue")) {
    push("await iwcPage.expectMakerCheckerQueueVisible()");
  }
  if (
    (er.includes("screening") && (er.includes("match") || er.includes("evaluat") || er.includes("hit") || er.includes("ignore")))
    && (sm.includes("live narrative") || sm.includes("narrative") || task.includes("tester") || task.includes("narrative"))
  ) {
    push("await iwcPage.expectScreeningEngineEvaluation()");
  }
  if (er.includes("console") || task.includes("console")) {
    push("await iwcPage.expectConsoleErrorsFree()");
  }
  if (er.includes("duplicate") && (er.includes("reject") || er.includes("prevent") || er.includes("blocked"))) {
    push("await iwcPage.expectInlineValidationError()");
  }
  if (steps.length === 0) {
    push("await iwcPage.expectIgnoreWordsConfigurationViewLoaded()");
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: IwcExcelRow): string {
  const feature = row.subModule.trim() || "Core";
  const action = row.taskDescription.replace(/^Verify\s+/i, "").replace(/^Confirm\s+/i, "").replace(/^Validate\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function escapeScenarioComment(taskDescription: string): string {
  return taskDescription.replace(/\*\//g, "* /");
}
