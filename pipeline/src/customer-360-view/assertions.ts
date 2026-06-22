import type { C360ExcelRow } from "./types";

function pushUnique(steps: string[], step: string): void {
  if (!steps.includes(step)) {
    steps.push(step);
  }
}

export function buildAssertionsForRow(row: C360ExcelRow): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const sm = row.subModule.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);

  if (er.includes("overview tab") && (er.includes("selected") || er.includes("active"))) {
    push("await c360Page.expectOverviewTabSelected()");
  }
  if (er.includes("sticky") || task.includes("sticky")) {
    push("await c360Page.expectStickyHeader()");
  }
  if (er.includes("empty") || er.includes("no-data") || er.includes("no data")) {
    push("await c360Page.expectEmptyState()");
  }
  if (er.includes("loader") || er.includes("skeleton") || er.includes("loading indicator")) {
    push("await c360Page.expectLoadingIndicator()");
  }
  if (
    er.includes("unauthorized") ||
    er.includes("denied") ||
    er.includes("cannot access") ||
    er.includes("not accessible") ||
    task.includes("unauthorized") ||
    task.includes("unauthenticated")
  ) {
    push("await c360Page.expectAccessDenied()");
  }
  if (er.includes("pep") && (er.includes("badge") || er.includes("indicator"))) {
    push("await c360Page.expectPepBadge()");
  }
  if (er.includes("adverse media")) {
    push("await c360Page.expectAdverseMediaBadge()");
  }
  if (er.includes("risk score") || (er.includes("score") && sm.includes("header"))) {
    push("await c360Page.expectRiskScoreBadge()");
  }
  if (er.includes("export") || task.includes("export")) {
    push("await expect(c360Page.exportButton).toBeVisible()");
  }
  if (er.includes("retry") || task.includes("retry")) {
    push("await expect(c360Page.retryButton).toBeVisible()");
  }
  if (er.includes("mask") || task.includes("mask")) {
    push("await c360Page.expectPiiMasked()");
  }
  if (er.includes("console") || task.includes("console")) {
    push("await c360Page.expectConsoleErrorsFree()");
  }
  if (er.includes("tab") && er.includes("highlight")) {
    push("await c360Page.expectActiveTabHighlighted()");
  }
  if (er.includes("donut") || er.includes("chart")) {
    push("await c360Page.expectRiskDonutChartVisible()");
  }
  if (er.includes("table") || er.includes("grid")) {
    push("await c360Page.expectTabContentLoaded()");
  }
  if (er.includes("kpi")) {
    push("await c360Page.expectOverviewKpiCardsVisible()");
  }
  if (er.includes("header strip") || sm.includes("header strip")) {
    push("await c360Page.expectHeaderStripVisible()");
  }
  if (steps.length === 0) {
    push("await c360Page.expectCustomer360ViewLoaded()");
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: C360ExcelRow): string {
  const feature = row.subModule.trim() || "Core";
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function escapeScenarioComment(taskDescription: string): string {
  return taskDescription.replace(/\*\//g, "* /");
}
