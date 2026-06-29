import type { KmExcelRow } from "./types";

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

function shouldSkipConsoleCheck(row: KmExcelRow): boolean {
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

export function buildAssertionsForRow(row: KmExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);

  if (er.includes("page") && (er.includes("load") || er.includes("render") || er.includes("display"))) {
    push("await kmPage.expectKeywordManagerViewLoaded()");
  }
  if (er.includes("route") || er.includes("url") || er.includes("breadcrumb")) {
    push("await kmPage.expectOnKeywordManagerRoute()");
  }
  if (er.includes("title") || er.includes("header")) {
    push("await kmPage.expectPageTitleVisible()");
  }
  if (er.includes("toolbar") || er.includes("action bar")) {
    push("await kmPage.expectToolbarVisible()");
  }
  if (er.includes("active tab") && (er.includes("selected") || er.includes("default"))) {
    push('await kmPage.expectTabSelected("Active")');
  }
  if (er.includes("tab") && (er.includes("visible") || er.includes("display"))) {
    push("await kmPage.expectTabsVisible()");
  }
  if (er.includes("search") && (er.includes("input") || er.includes("render") || er.includes("filter") || er.includes("field"))) {
    push("await kmPage.expectSearchInputVisible()");
  }
  if (er.includes("table") || er.includes("column") || er.includes("grid") || er.includes("listing")) {
    push("await kmPage.expectKeywordTableVisible()");
  }
  if (er.includes("header") && (er.includes("column") || er.includes("table"))) {
    push("await kmPage.expectTableHeadersVisible()");
  }
  if (er.includes("export")) {
    push("await kmPage.expectExportOptions()");
  }
  if (
    er.includes("modal")
    || er.includes("popup")
    || (er.includes("overlay") && !er.includes("without overlay"))
    || er.includes("dialog")
  ) {
    if (sm.includes("add category")) {
      push("await expect(kmPage.addCategoryModal).toBeVisible()");
    } else if (sm.includes("category controls")) {
      push("await expect(kmPage.categoryControlsModal).toBeVisible()");
    } else if (sm.includes("bulk import")) {
      push("await expect(kmPage.bulkImportModal).toBeVisible()");
    }
  }
  if (er.includes("panel") || er.includes("slides in") || er.includes("drawer")) {
    if (sm.includes("add keyword")) {
      push("await expect(kmPage.addKeywordPanel).toBeVisible()");
    }
  }
  if (er.includes("narrative") || sm.includes("live narrative") || er.includes("highlight")) {
    push("await kmPage.expectLiveNarrativeTesterVisible()");
  }
  if (er.includes("narrative") && (er.includes("highlight") || er.includes("match"))) {
    push("await kmPage.expectNarrativeHighlightVisible()");
  }
  if (er.includes("empty") && (er.includes("state") || er.includes("table") || er.includes("result"))) {
    push("await kmPage.expectEmptyTableState()");
  }
  if (er.includes("loading") || er.includes("skeleton") || er.includes("spinner")) {
    push("await kmPage.expectLoadingIndicator()");
  }
  if (
    er.includes("unauthorized")
    || er.includes("denied")
    || er.includes("cannot access")
    || er.includes("not available")
    || er.includes("hidden")
    || er.includes("restricted")
    || task.includes("unauthorized")
    || sm.includes("rbac")
  ) {
    if (er.includes("denied") || er.includes("unauthorized") || task.includes("unauthorized")) {
      push("await kmPage.expectAccessDenied()");
    }
    if (sm.includes("rbac") || task.includes("viewer") || task.includes("restricted") || er.includes("not permitted")) {
      push("await kmPage.expectRbacControlsHidden()");
    }
  }
  if (
    (er.includes("error") || er.includes("validation") || er.includes("warning") || er.includes("blocked") || er.includes("reject"))
    && !isNegativeErrorContext(er)
    && !isNegativeErrorContext(ac)
  ) {
    if (er.includes("inline") || sm.includes("add keyword") || sm.includes("add category") || sm.includes("bulk import")) {
      push("await kmPage.expectInlineValidationError()");
    } else if (er.includes("blocked") || er.includes("prevent")) {
      push("await kmPage.expectSubmissionBlocked()");
    } else if (sm.includes("negative") || sm.includes("integration")) {
      push("await kmPage.expectErrorStateVisible()");
    } else {
      push("await kmPage.expectInlineValidationError()");
    }
  }
  if (er.includes("disable") && (er.includes("confirm") || er.includes("confirmation"))) {
    push("await kmPage.expectDisableConfirmation()");
  }
  if (er.includes("approve") || er.includes("reject") || er.includes("pending") || sm.includes("maker-checker")) {
    if (task.includes("not available") || task.includes("hidden") || er.includes("not available") || er.includes("cannot approve")) {
      push("await kmPage.expectRbacControlsHidden()");
    } else {
      push("await kmPage.expectMakerCheckerQueueVisible()");
    }
  }
  if (er.includes("audit") || er.includes("history") || er.includes("timeline")) {
    push("await kmPage.expectKeywordManagerViewLoaded()");
  }
  if (
    (er.includes("screening") && (er.includes("match") || er.includes("evaluat") || er.includes("hit")))
    && (sm.includes("live narrative") || sm.includes("narrative") || task.includes("tester") || task.includes("narrative"))
  ) {
    push("await kmPage.expectScreeningEngineEvaluation()");
  }
  if (er.includes("inactive") && (er.includes("tab") || er.includes("move"))) {
    push('await kmPage.expectTabSelected("Inactive")');
  }
  if (er.includes("draft") && (er.includes("tab") || er.includes("state"))) {
    push('await kmPage.expectTabSelected("Drafted")');
  }
  if (er.includes("duplicate") && er.includes("reject")) {
    push("await kmPage.expectInlineValidationError()");
  }
  if (steps.length === 0) {
    push("await kmPage.expectKeywordManagerViewLoaded()");
  }
  if (!shouldSkipConsoleCheck(row)) {
    push("await kmPage.expectConsoleErrorsFree()");
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: KmExcelRow): string {
  const feature = row.subModule.trim() || "Core";
  const action = row.taskDescription.replace(/^Verify\s+/i, "").replace(/^Confirm\s+/i, "").replace(/^Validate\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function escapeScenarioComment(taskDescription: string): string {
  return taskDescription.replace(/\*\//g, "* /");
}
