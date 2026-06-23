import { resolveMasterTab } from "./tab-mapping";
import {
  classifyTestPattern,
  extractColumnName,
  resolveSearchInvocation,
} from "./column-extractor";
import { buildAssertionsForRow } from "./assertions";
import type { RdrExcelRow } from "./types";

function stripSemicolons(line: string): string {
  return line.trim().replace(/;+$/g, "");
}

function finalizeLogic(body: string, row: RdrExcelRow, columnName: string | null): string {
  const assertions = buildAssertionsForRow(row, columnName);
  const lines = body
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  const assertionLines = assertions
    .split(/[;\n]+/)
    .map(stripSemicolons)
    .filter(Boolean);
  for (const a of assertionLines) {
    if (!lines.includes(a)) {
      lines.push(a);
    }
  }
  return lines.join(";\n    ");
}

function openTab(row: RdrExcelRow): string {
  const { slug } = resolveMasterTab(row.id);
  return `await rdrPage.openMasterTab(testData.baseUrl, "${slug}", "${row.masterTab}")`;
}

function resolveColumnTest(row: RdrExcelRow, columnName: string | null, unique: boolean): string {
  const steps = [openTab(row), "await rdrPage.expectOnRdrRoute()", "await rdrPage.expectGridTabLoaded()"];
  if (columnName) {
    steps.push(`await rdrPage.expectColumnVisible("${columnName}")`);
    steps.push("await rdrPage.expectGridContainsRecords()");
    steps.push(`await rdrPage.expectAllCellsNonEmpty("${columnName}")`);
    if (unique) {
      steps.push(`await rdrPage.expectUniqueColumnValues("${columnName}")`);
    }
    if (row.id === "RDR_001") {
      steps.push('await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids)');
      steps.push("await expect(rdrPage.gridRows).toHaveCount(pilotData.customerMaster.expectedRowCount)");
    }
  }
  return finalizeLogic(steps.join(";\n    "), row, columnName);
}

function resolveSearch(row: RdrExcelRow): string {
  const { call, columnName, exactValue } = resolveSearchInvocation(row);
  const steps = [openTab(row), "await rdrPage.expectGridTabLoaded()", call];
  if (/only/i.test(row.expectedResult) && columnName) {
    if (exactValue === "__PILOT_CUSTOMER_ID__") {
      steps.push('await rdrPage.expectSearchReturnsExactMatch("Customer ID", pilotData.customerMaster.ids[0])');
    } else if (exactValue === "__FIRST_ROW__") {
      steps.push("await rdrPage.expectSearchReturnsSingleRecord()");
    } else if (exactValue) {
      steps.push(`await rdrPage.expectSearchReturnsExactMatch("${columnName}", "${exactValue.replace(/"/g, '\\"')}")`);
    }
  }
  return finalizeLogic(steps.join(";\n    "), row, columnName ?? extractColumnName(row));
}

function resolveExport(row: RdrExcelRow): string {
  const pattern = classifyTestPattern(row);
  const steps = [openTab(row), "await rdrPage.expectGridTabLoaded()", "await rdrPage.expectExportButtonsVisible()"];
  if (pattern === "export_csv" || pattern === "export_both") {
    steps.push("await rdrPage.expectCsvExportReady()");
  }
  if (pattern === "export_excel" || pattern === "export_both") {
    steps.push("await rdrPage.expectExcelExportReady()");
  }
  return finalizeLogic(steps.join(";\n    "), row, null);
}

function resolveView(row: RdrExcelRow): string {
  const steps = [
    openTab(row),
    "await rdrPage.expectGridTabLoaded()",
    "await rdrPage.openFirstRowView()",
    "await rdrPage.expectViewModalShowsRecordDetails()",
  ];
  return finalizeLogic(steps.join(";\n    "), row, null);
}

function resolveHyperlink(row: RdrExcelRow): string {
  const steps = [
    openTab(row),
    "await rdrPage.expectGridTabLoaded()",
    "await rdrPage.clickFirstRowIdLink()",
    "await rdrPage.expectFirstRowLinkNavigates()",
  ];
  return finalizeLogic(steps.join(";\n    "), row, "Customer ID");
}

function resolveFilter(row: RdrExcelRow): string {
  const columnName = extractColumnName(row);
  const steps = [openTab(row), "await rdrPage.expectGridTabLoaded()"];
  if (/individual/i.test(row.expectedResult) || /individual/i.test(row.testSteps)) {
    steps.push('await rdrPage.applyFilterByOptionText("Individual")');
    if (columnName) {
      steps.push(`await rdrPage.expectAllCellsMatchValue("${columnName}", "Individual")`);
    }
  } else {
    steps.push("await rdrPage.applyFirstAvailableFilter()");
  }
  steps.push("await rdrPage.expectFilterApplied()");
  return finalizeLogic(steps.join(";\n    "), row, columnName);
}

function resolveClear(row: RdrExcelRow): string {
  const steps = [
    openTab(row),
    "await rdrPage.expectGridTabLoaded()",
    "await rdrPage.prepareSearchAndFilterForClear()",
    "await rdrPage.clearSearchAndFilters()",
    "await rdrPage.expectSearchFieldEmpty()",
    "await rdrPage.expectClearResetsGrid()",
  ];
  return finalizeLogic(steps.join(";\n    "), row, null);
}

function resolveMasking(row: RdrExcelRow, columnName: string | null): string {
  const col = columnName ?? "Full Legal Name";
  const steps = [
    openTab(row),
    "await rdrPage.expectGridTabLoaded()",
    `await rdrPage.expectColumnVisible("${col}")`,
    `await rdrPage.expectColumnValuesMasked("${col}")`,
  ];
  return finalizeLogic(steps.join(";\n    "), row, col);
}

function resolveOther(row: RdrExcelRow, columnName: string | null): string {
  const steps = [openTab(row), "await rdrPage.expectGridTabLoaded()"];
  if (columnName) {
    steps.push(`await rdrPage.expectColumnVisible("${columnName}")`);
    steps.push(`await rdrPage.expectAllCellsNonEmpty("${columnName}")`);
  }
  return finalizeLogic(steps.join(";\n    "), row, columnName);
}

export function mapRdrTestLogic(row: RdrExcelRow): { logic: string; todo: string | null } {
  const columnName = extractColumnName(row);
  const pattern = classifyTestPattern(row);

  if (!columnName && pattern === "column_display" && pattern === "column_unique") {
    return {
      logic: finalizeLogic(`${openTab(row)};\n    await rdrPage.expectGridTabLoaded()`, row, null),
      todo: `Column name could not be extracted from Task Description for ${row.id}`,
    };
  }

  let logic: string;
  switch (pattern) {
    case "column_unique":
      logic = resolveColumnTest(row, columnName, true);
      break;
    case "column_display":
      logic = resolveColumnTest(row, columnName, false);
      break;
    case "search":
      logic = resolveSearch(row);
      break;
    case "export_csv":
    case "export_excel":
    case "export_both":
      logic = resolveExport(row);
      break;
    case "view_modal":
      logic = resolveView(row);
      break;
    case "hyperlink":
      logic = resolveHyperlink(row);
      break;
    case "filter":
      logic = resolveFilter(row);
      break;
    case "clear":
      logic = resolveClear(row);
      break;
    case "masking":
      logic = resolveMasking(row, columnName);
      break;
    case "row_limit":
      logic = finalizeLogic(`${openTab(row)};\n    await rdrPage.expectGridTabLoaded();\n    await rdrPage.expectGridWithinConfiguredLimit()`, row, null);
      break;
    case "pagination":
      logic = finalizeLogic(`${openTab(row)};\n    await rdrPage.expectGridTabLoaded();\n    await rdrPage.expectPaginationVisible()`, row, null);
      break;
    default:
      logic = resolveOther(row, columnName);
  }

  const todo =
    !columnName && (pattern === "column_display" || pattern === "column_unique")
      ? `// TODO [${row.id}]: Column name not extractable from Excel — verify Task Description: "${row.taskDescription.slice(0, 80)}"`
      : null;

  return { logic, todo };
}
