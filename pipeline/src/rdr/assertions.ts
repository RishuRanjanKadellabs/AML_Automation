import type { RdrExcelRow } from "./types";
import { classifyTestPattern } from "./column-extractor";

function pushUnique(steps: string[], step: string): void {
  if (!steps.includes(step)) {
    steps.push(step);
  }
}

export function buildAssertionsForRow(row: RdrExcelRow, columnName: string | null): string {
  const er = row.expectedResult.toLowerCase();
  const ac = row.acceptanceCriteria.toLowerCase();
  const task = row.taskDescription.toLowerCase();
  const pattern = classifyTestPattern(row);
  const steps: string[] = [];
  const push = (step: string): void => pushUnique(steps, step);

  push("await rdrPage.expectGridTabLoaded()");

  if (pattern === "column_unique" && columnName) {
    push(`await rdrPage.expectUniqueColumnValues("${columnName}")`);
  }
  if (pattern === "column_display" && columnName) {
    push(`await rdrPage.expectColumnVisible("${columnName}")`);
    push(`await rdrPage.expectAllCellsNonEmpty("${columnName}")`);
  }
  if (pattern === "column_unique" && columnName) {
    push(`await rdrPage.expectAllCellsNonEmpty("${columnName}")`);
  }
  if (pattern === "hyperlink") {
    push("await rdrPage.expectFirstRowLinkNavigates()");
  }
  if (pattern === "filter") {
    push("await rdrPage.expectFilterApplied()");
  }
  if (pattern === "search") {
    if (er.includes("no record") || er.includes("no result") || er.includes("empty")) {
      push("await rdrPage.expectSearchYieldsNoResults()");
    } else if (!er.includes("only")) {
      push("await rdrPage.expectSearchYieldsResults()");
    }
  }
  if (pattern === "clear") {
    push("await rdrPage.expectSearchFieldEmpty()");
    push("await rdrPage.expectClearResetsGrid()");
  }
  if (pattern === "filter" && er.includes("individual") && columnName) {
    push(`await rdrPage.expectAllCellsMatchValue("${columnName}", "Individual")`);
  }
  if (pattern === "view_modal") {
    push("await rdrPage.expectViewModalShowsRecordDetails()");
  }
  if (pattern === "masking" && columnName) {
    push(`await rdrPage.expectColumnValuesMasked("${columnName}")`);
  }
  if (pattern === "export_csv" || pattern === "export_both") {
    push("await rdrPage.expectCsvExportReady()");
  }
  if (pattern === "export_excel" || pattern === "export_both") {
    push("await rdrPage.expectExcelExportReady()");
  }
  if (pattern === "row_limit") {
    push("await rdrPage.expectGridWithinConfiguredLimit()");
  }
  if (pattern === "pagination") {
    push("await rdrPage.expectPaginationVisible()");
  }

  if (er.includes("unique") && columnName && !steps.some((s) => s.includes("expectUniqueColumnValues"))) {
    push(`await rdrPage.expectUniqueColumnValues("${columnName}")`);
  }
  if (er.includes("grid") || er.includes("table") || er.includes("records")) {
    push("await rdrPage.expectGridContainsRecords()");
  }
  if (task.includes("download") || er.includes("download")) {
    push("await rdrPage.expectExportButtonsVisible()");
  }
  if (ac.includes("match source") && columnName) {
    push(`await rdrPage.expectColumnVisible("${columnName}")`);
  }

  if (steps.length === 1) {
    push("await rdrPage.expectGridContainsRecords()");
  }

  return steps.join(";\n    ");
}

export function formatTestTitle(row: RdrExcelRow): string {
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${row.masterTab} → ${action}`;
}

export function formatTraceabilityComment(row: RdrExcelRow): string {
  return [
    `// Excel Test Case ID: ${row.id}`,
    `// Excel Scenario: ${row.taskDescription}`,
    `// Expected Result: ${row.expectedResult}`,
  ].join("\n    ");
}
