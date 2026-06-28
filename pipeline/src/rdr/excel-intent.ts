import { buildGapMatrixEntry } from "./gap-analysis";
import { extractColumnName, extractSearchTermFromStep, resolveColumnFromText } from "./column-resolver";
import { isCustomerMasterRow, shouldAssertCustomerIds, shouldAssertWatchlist } from "./master-columns";
import type { RdrExcelRow, ExcelAlignedPhases } from "./types";

export { extractColumnName } from "./column-resolver";

export function escapeStr(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

export function parseNumberedSteps(testSteps: string): string[] {
  if (!testSteps.trim()) return [];
  const normalized = testSteps.replace(/(\d+)\.\s*/g, "\n$1. ").trim();
  return normalized
    .split(/\n/)
    .map((s) => s.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

function pushUnique(steps: string[], step: string): void {
  if (step && !steps.includes(step)) steps.push(step);
}

function rowBlob(row: RdrExcelRow): string {
  return `${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData}`.toLowerCase();
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function isNavigateOrOpenStep(step: string): boolean {
  return (
    /^(navigate|open|go to|access|launch)\b/i.test(step) &&
    /master|registry|tab|section|page|product|country|employee|branch|channel|currency|instrument|card|atm|mobile|loan|account|document|address|risk|network|relationship|reference|grid/i.test(
      step,
    )
  );
}

function isHyperlinkTask(row: RdrExcelRow): boolean {
  return /hyperlink|link navigat|click.*customer id|profile detail/i.test(rowBlob(row));
}

function isViewModalTask(row: RdrExcelRow): boolean {
  return /view button|detail modal|record detail|view record/i.test(rowBlob(row)) && !isHyperlinkTask(row);
}

function isExportTask(row: RdrExcelRow): boolean {
  return /export|csv|excel download|download file/i.test(rowBlob(row));
}

function isFilterTask(row: RdrExcelRow): boolean {
  return /filter|filtered results|choose individual|choose corporate/i.test(rowBlob(row));
}

function isSearchTask(row: RdrExcelRow): boolean {
  return /\bsearch\b|search box|search field|clear search/i.test(rowBlob(row));
}

function filterValueFromStep(step: string): string {
  if (/corporate|company|business/i.test(step)) return "Corporate";
  if (/individual|retail|personal/i.test(step)) return "Individual";
  if (/active/i.test(step)) return "Active";
  if (/inactive|closed/i.test(step)) return "Inactive";
  return "Individual";
}

function columnFromStep(step: string, row: RdrExcelRow): string | null {
  return resolveColumnFromText(step) ?? extractColumnName(row);
}

function isActiveStatusTask(row: RdrExcelRow): boolean {
  return /\bactive customer status\b/i.test(rowBlob(row));
}

function isInactiveStatusTask(row: RdrExcelRow): boolean {
  return /\binactive customer status\b/i.test(rowBlob(row));
}

function mapSearchExecuteStep(step: string, row: RdrExcelRow): string[] {
  if (/inactive customer/i.test(step)) {
    return ["await rdrPage.search(pilotData.customerMaster.inactiveCustomerId)"];
  }
  if (/active customer/i.test(step)) {
    return ["await rdrPage.search(pilotData.customerMaster.ids[0])"];
  }
  // Canonical expanded steps describe an outcome, not a literal value.
  if (/non-?matching|empty state|no matching|no record|no result/i.test(step)) {
    return ["await rdrPage.searchNoMatchValue()"];
  }
  if (/valid search value|matching records?\s+(?:are|is)\s+displayed|enter a valid/i.test(step)) {
    return ["await rdrPage.searchUsingPilotCustomerId()"];
  }
  const term = extractSearchTermFromStep(step);
  if (term) return [`await rdrPage.search('${escapeStr(term)}')`];
  return ["await rdrPage.searchUsingPilotCustomerId()"];
}

function mapReviewStep(step: string, row: RdrExcelRow): string[] {
  if (/^review\b/i.test(step) && /grid|master|records|products|tab|page/i.test(step)) {
    return ["await rdrPage.expectGridTabLoaded()", "await rdrPage.expectGridContainsRecords()"];
  }

  const column = columnFromStep(step, row);
  if (!column) return ["await rdrPage.expectGridTabLoaded()", "await rdrPage.expectGridContainsRecords()"];
  return [
    `await rdrPage.expectColumnVisible('${escapeStr(column)}')`,
    `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`,
  ];
}

function mapCompareStep(step: string, row: RdrExcelRow): string[] {
  const out: string[] = [];
  const column = columnFromStep(step, row);
  const blob = rowBlob(row);

  if (/duplicate|unique|no duplicate/i.test(step) || /unique|without duplication/i.test(blob)) {
    if (column) pushUnique(out, `await rdrPage.expectUniqueColumnValues('${escapeStr(column)}')`);
    else pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    return out;
  }

  if (/source|cbs|core banking|backend|source record|source data|source system/i.test(step)) {
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    if (column) {
      pushUnique(out, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
    }
    if (/customer id/i.test(blob) && shouldAssertCustomerIds(row)) {
      if (!isActiveStatusTask(row) && !isInactiveStatusTask(row)) {
        pushUnique(out, "await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids)");
      }
    }
    return out;
  }

  if (/grid|detail|modal|profile|record/i.test(step)) {
    if (isHyperlinkTask(row)) pushUnique(out, "await rdrPage.expectFirstRowLinkNavigates()");
    else if (isViewModalTask(row)) pushUnique(out, "await rdrPage.expectViewModalShowsRecordDetails()");
    else pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    return out;
  }

  if (/multiple record|several record|all record|each record/i.test(step)) {
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    if (column) pushUnique(out, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
    return out;
  }

  if (column) {
    pushUnique(out, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
  } else {
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
  }
  return out;
}

function mapVerifyStep(step: string, row: RdrExcelRow): string[] {
  const out: string[] = [];
  const column = columnFromStep(step, row);
  const blob = rowBlob(row);

  if (/page open|detail page|profile|navigat/i.test(step)) {
    if (isHyperlinkTask(row)) pushUnique(out, "await rdrPage.expectFirstRowLinkNavigates()");
    else if (isViewModalTask(row)) pushUnique(out, "await rdrPage.expectViewModalShowsRecordDetails()");
    return out;
  }

  if (/filter|filtered|matching record/i.test(step) || isFilterTask(row)) {
    pushUnique(out, "await rdrPage.expectFilterApplied()");
    if (column) {
      const val = filterValueFromStep(`${step} ${row.testSteps}`);
      pushUnique(out, `await rdrPage.expectAllCellsMatchValue('${escapeStr(column)}', '${escapeStr(val)}')`);
    }
    return out;
  }

  if (/search|matching|result/i.test(step) || isSearchTask(row)) {
    if (/no result|no record|empty/i.test(step)) pushUnique(out, "await rdrPage.expectSearchYieldsNoResults()");
    else pushUnique(out, "await rdrPage.expectSearchYieldsResults()");
    return out;
  }

  if (/export|csv|excel|download/i.test(step) || isExportTask(row)) {
    pushUnique(out, "await rdrPage.expectExportButtonsVisible()");
    if (/csv/i.test(blob)) pushUnique(out, "await rdrPage.expectCsvExportReady()");
    if (/excel/i.test(blob)) pushUnique(out, "await rdrPage.expectExcelExportReady()");
    return out;
  }

  if (/duplicate|unique/i.test(step)) {
    if (column) pushUnique(out, `await rdrPage.expectUniqueColumnValues('${escapeStr(column)}')`);
    return out;
  }

  if (/mask|pii|redact/i.test(step) && column) {
    pushUnique(out, `await rdrPage.expectColumnValuesMasked('${escapeStr(column)}')`);
    return out;
  }

  if (/watchlist|highlight|indicator|aml review/i.test(step) && shouldAssertWatchlist(row)) {
    pushUnique(out, "await rdrPage.expectColumnVisible('Watchlist')");
    pushUnique(out, "await rdrPage.expectColumnIncludesValue('Watchlist', 'Yes')");
    return out;
  }

  if (/record count|displayed record count|configured record limit|maximum configured row/i.test(step)) {
    pushUnique(out, "await rdrPage.expectGridWithinConfiguredLimit()");
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    return out;
  }

  if (/details panel|detail panel|view panel|country information|country detail/i.test(step)) {
    pushUnique(out, "await rdrPage.expectViewModalShowsRecordDetails()");
    return out;
  }

  if (/high risk countries appear|high risk countries|high risk country/i.test(step)) {
    pushUnique(out, "await rdrPage.expectColumnVisible('High Risk countries')");
    return out;
  }

  if (/high risk currency/i.test(step)) {
    pushUnique(out, "await rdrPage.expectViewModalShowsRecordDetails()");
    return out;
  }

  if (/audit trail|history records|maker\/checker/i.test(step)) {
    pushUnique(out, "await rdrPage.expectViewModalShowsRecordDetails()");
    return out;
  }

  if (/ascending order|descending order|sort by|reverse sorting/i.test(step)) {
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
    return out;
  }

  if (/pagination|page size|records per page/i.test(step)) {
    pushUnique(out, "await rdrPage.expectPaginationVisible()");
    return out;
  }

  if (/clear|reset/i.test(step)) {
    pushUnique(out, "await rdrPage.expectClearResetsGrid()");
    return out;
  }

  if (column) {
    pushUnique(out, `await rdrPage.expectColumnVisible('${escapeStr(column)}')`);
    pushUnique(out, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
  } else {
    pushUnique(out, "await rdrPage.expectGridTabLoaded()");
    pushUnique(out, "await rdrPage.expectGridContainsRecords()");
  }
  return out;
}

function mapSingleStepToExecuteActions(step: string, row: RdrExcelRow): string[] {
  if (isNavigateOrOpenStep(step)) return [];

  if (/^login\b/i.test(step)) return [];

  if (/^open\b/i.test(step) && /detail|screen|using view/i.test(step)) {
    return ["await rdrPage.openFirstRowView()"];
  }

  if (/navigate to audit trail|audit trail tab/i.test(step)) {
    return ["await rdrPage.openFirstRowView()"];
  }

  if (/^observe\b/i.test(step)) {
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^check\b/i.test(step)) {
    const column = columnFromStep(step, row);
    if (column) return [`await rdrPage.expectColumnVisible('${escapeStr(column)}')`];
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^click\b/i.test(step) && /header|column header|column/i.test(step)) {
    const column = columnFromStep(step, row);
    if (column) return [`await rdrPage.expectColumnVisible('${escapeStr(column)}')`];
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^click\b/i.test(step) && /tab|master tab|country master tab/i.test(step)) {
    return ["await rdrPage.expectGridTabLoaded()"];
  }

  if (/^review\b/i.test(step)) {
    if (/grid|master|records|products|tab|page/i.test(step)) {
      return ["await rdrPage.expectGridContainsRecords()"];
    }
    const column = columnFromStep(step, row);
    if (column) return [`await rdrPage.expectColumnVisible('${escapeStr(column)}')`];
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^compare\b/i.test(step)) {
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^(verify|validate|confirm|ensure|check)\b/i.test(step)) {
    return [];
  }

  if (stepMatches(step, "click customer id", "customer id hyperlink", "customer id link", "click id link")) {
    return ["await rdrPage.clickFirstRowIdLink()"];
  }

  if (/^click\b/i.test(step) && /hyperlink|link/i.test(step)) {
    return ["await rdrPage.clickFirstRowIdLink()"];
  }

  if (/^click\b/i.test(step) && /view/i.test(step)) {
    return ["await rdrPage.openFirstRowView()"];
  }

  if (stepMatches(step, "select", "choose", "apply filter", "filter by")) {
    if (/master tab|shell group|sidebar|navigation|primary navigation/i.test(step)) {
      return [];
    }
    return [`await rdrPage.applyFilterByOptionText('${escapeStr(filterValueFromStep(step))}')`];
  }

  if (/^locate\b/i.test(step)) {
    return ["await rdrPage.expectGridContainsRecords()"];
  }

  if (/^enter\b/i.test(step) && /search/i.test(step)) {
    if (/non-?matching|empty state|no matching|no record|no result/i.test(step)) {
      return ["await rdrPage.searchNoMatchValue()"];
    }
    if (/full legal name|legal name|name/i.test(step)) {
      return ["await rdrPage.searchFromFirstRowCell()"];
    }
    if (/customer id|account no|document id|address id|rel id|bo id|employee id|product id|card id/i.test(step)) {
      return ["await rdrPage.searchFromFirstRowCell()"];
    }
    const term = extractSearchTermFromStep(step);
    if (term) return [`await rdrPage.search('${escapeStr(term)}')`];
    return ["await rdrPage.searchFromFirstRowCell()"];
  }

  if (/^enter\b/i.test(step) && (isSearchTask(row) || /execute search/i.test(row.testSteps))) {
    return ["await rdrPage.searchFromFirstRowCell()"];
  }

  if (/^execute search|^run search|^perform search/i.test(step)) {
    return [];
  }

  if (/^search\b/i.test(step) || stepMatches(step, "enter search", "type in search")) {
    return mapSearchExecuteStep(step, row);
  }

  if (/^clear\b/i.test(step) || stepMatches(step, "clear search", "clear filter")) {
    return ["await rdrPage.clearSearchAndFilters()"];
  }

  if (/csv export|export csv|click csv/i.test(step)) {
    return ["await rdrPage.exportCsv()"];
  }

  if (/excel export|export excel|click excel/i.test(step)) {
    return ["await rdrPage.exportExcel()"];
  }

  if (/^export\b/i.test(step)) {
    if (/excel/i.test(step)) return ["await rdrPage.exportExcel()"];
    return ["await rdrPage.exportCsv()"];
  }

  if (/^view\b/i.test(step) || stepMatches(step, "open view", "open detail", "open record")) {
    if (isHyperlinkTask(row)) return ["await rdrPage.clickFirstRowIdLink()"];
    return ["await rdrPage.openFirstRowView()"];
  }

  if (/pagination|next page/i.test(step)) {
    return ["await rdrPage.goToNextTabPage()"];
  }

  if (/column selector|columns picker|toggle column/i.test(step)) {
    return ["await rdrPage.expectExportButtonsVisible()"];
  }

  return [];
}

function mapSingleStepToValidationActions(step: string, row: RdrExcelRow): string[] {
  if (/^review\b/i.test(step)) return mapReviewStep(step, row);
  if (/^compare\b/i.test(step)) return mapCompareStep(step, row);
  if (/^(verify|validate|confirm|ensure|check)\b/i.test(step)) return mapVerifyStep(step, row);
  if (/validate downloaded|validate file|file contents/i.test(step)) {
    const out: string[] = ["await rdrPage.expectExportButtonsVisible()"];
    if (/csv/i.test(step)) pushUnique(out, "await rdrPage.expectCsvExportReady()");
    if (/excel/i.test(step)) pushUnique(out, "await rdrPage.expectExcelExportReady()");
    return out;
  }
  if (/review results|review filtered|review grid/i.test(step)) {
    return mapReviewStep(step, row);
  }
  return [];
}

export function buildGapTodoComment(row: RdrExcelRow): string | null {
  const gap = buildGapMatrixEntry(row);
  if (gap.testable === "Yes" || gap.testable === "Partial") return null;
  return `// TODO [${row.id}]: ${gap.missingInformation} — Excel/FSD gap; implement when product clarifies.`;
}

export function buildPreconditionActions(_row: RdrExcelRow): string[] {
  return [];
}

export function buildExcelSetupActions(row: RdrExcelRow): string[] {
  return [`await rdrPage.openMasterTabFromSubmodule(testData.baseUrl, '${escapeStr(row.subModule)}')`];
}

function sanitizeExecuteSteps(steps: string[], row: RdrExcelRow): string[] {
  const hasLinkClick = steps.some((s) => s.includes("clickFirstRowIdLink"));
  const hasViewOpen = steps.some((s) => s.includes("openFirstRowView"));
  if (!hasLinkClick || !hasViewOpen) return steps;

  if (isHyperlinkTask(row)) {
    return steps.filter((s) => !s.includes("openFirstRowView"));
  }
  if (isViewModalTask(row)) {
    return steps.filter((s) => !s.includes("clickFirstRowIdLink"));
  }
  return steps.filter((s) => !s.includes("openFirstRowView"));
}

function sanitizeAssertionSteps(steps: string[], row: RdrExcelRow): string[] {
  return steps.filter((s) => {
    if (s.includes("expectCustomerIdsMatch") && !shouldAssertCustomerIds(row)) return false;
    if (s.includes("expectColumnIncludesValue('Watchlist'") && !shouldAssertWatchlist(row)) return false;
    return true;
  });
}

export function buildExcelStepActions(row: RdrExcelRow): string[] {
  const numbered = parseNumberedSteps(row.testSteps);
  const steps: string[] = [];

  for (const step of numbered) {
    for (const action of mapSingleStepToExecuteActions(step, row)) {
      pushUnique(steps, action);
    }
  }

  if (steps.length === 0) {
    for (const step of numbered) {
      if (/^review\b/i.test(step)) {
        for (const action of mapReviewStep(step, row)) {
          if (action.includes("expectColumnVisible")) {
            pushUnique(steps, action);
            break;
          }
        }
      }
      if (/^compare\b/i.test(step)) {
        pushUnique(steps, "await rdrPage.expectGridContainsRecords()");
        break;
      }
      if (/^observe\b|^check\b|^locate\b/i.test(step)) {
        pushUnique(steps, "await rdrPage.expectGridContainsRecords()");
        break;
      }
    }
  }

  if (steps.length === 0 && numbered.length > 0) {
    pushUnique(steps, "await rdrPage.expectGridTabLoaded()");
  }

  return sanitizeExecuteSteps(steps, row);
}

function buildAssertionFromClause(c: string, row: RdrExcelRow): string[] {
  const out: string[] = [];
  const push = (s: string): void => pushUnique(out, s);
  const column = extractColumnName(row);

  if (/grid|page|tab|load|display|visible/i.test(c) && !/no record|empty/i.test(c)) {
    push("await rdrPage.expectGridTabLoaded()");
  }
  if (column && /column|field|display|visible|shown/i.test(c)) {
    push(`await rdrPage.expectColumnVisible('${escapeStr(column)}')`);
  }
  if (column && /non-empty|populated|displayed for every|values are displayed|match source|source data|source record|cbs/i.test(c)) {
    push(`await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
  }
  if (column && /unique|no duplicate|without duplication/i.test(c)) {
    push(`await rdrPage.expectUniqueColumnValues('${escapeStr(column)}')`);
  }
  if (/record|rows|data/i.test(c) && !/no record|empty/i.test(c)) {
    push("await rdrPage.expectGridContainsRecords()");
  }
  if (/filter/i.test(c)) {
    push("await rdrPage.expectFilterApplied()");
    if (column) {
      const val = filterValueFromStep(`${c} ${row.testSteps} ${row.testData}`);
      push(`await rdrPage.expectAllCellsMatchValue('${escapeStr(column)}', '${escapeStr(val)}')`);
    }
  }
  if (/hyperlink|navigation|profile|detail page/i.test(c) && isHyperlinkTask(row)) {
    push("await rdrPage.expectFirstRowLinkNavigates()");
  }
  if (/modal|record detail|view button|detail screen/i.test(c) && isViewModalTask(row)) {
    push("await rdrPage.expectViewModalShowsRecordDetails()");
  }
  if (/mask|pii|redact/i.test(c) && column) {
    push(`await rdrPage.expectColumnValuesMasked('${escapeStr(column)}')`);
  }
  if (/csv/i.test(c)) push("await rdrPage.expectCsvExportReady()");
  if (/excel/i.test(c)) push("await rdrPage.expectExcelExportReady()");
  if (/export button|export option|download successfully/i.test(c)) {
    push("await rdrPage.expectExportButtonsVisible()");
  }
  if (/pagination|page size|records per page/i.test(c)) {
    push("await rdrPage.expectPaginationVisible()");
  }
  if (/search.*result|matching record/i.test(c) && !/no result/i.test(c)) {
    push("await rdrPage.expectSearchYieldsResults()");
  }
  if (/no result|no record|empty/i.test(c)) {
    push("await rdrPage.expectSearchYieldsNoResults()");
  }
  if (/clear.*reset|reset.*grid/i.test(c)) {
    push("await rdrPage.expectClearResetsGrid()");
  }
  if (/customer id.*match|CIF\d+|source system/i.test(c) || (/customer id/i.test(rowBlob(row)) && /source|cbs/i.test(c))) {
    if (shouldAssertCustomerIds(row) && !isActiveStatusTask(row) && !isInactiveStatusTask(row)) {
      push("await rdrPage.expectCustomerIdsMatch(pilotData.customerMaster.ids)");
    }
  }
  return out;
}

export function buildExcelAssertionActions(row: RdrExcelRow): string[] {
  const gap = buildGapMatrixEntry(row);
  if (gap.testable === "No") {
    return ["// TODO: blocked — see gap-matrix.json"];
  }

  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);

  for (const step of numbered) {
    for (const assertion of mapSingleStepToValidationActions(step, row)) {
      pushUnique(steps, assertion);
    }
  }

  const clauses = [row.expectedResult, row.acceptanceCriteria]
    .join("; ")
    .split(/(?:\d+\.\s+|;\s+|\n+)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);

  for (const clause of clauses) {
    for (const assertion of buildAssertionFromClause(clause, row)) {
      pushUnique(steps, assertion);
    }
  }

  pushUnique(steps, "await rdrPage.expectGridTabLoaded()");

  const column = extractColumnName(row);
  if (column && !steps.some((s) => s.includes("expectColumnVisible"))) {
    pushUnique(steps, `await rdrPage.expectColumnVisible('${escapeStr(column)}')`);
  }
  if (column && /review|display|values|source|match/i.test(rowBlob(row)) && !steps.some((s) => s.includes("expectAllCellsNonEmpty"))) {
    pushUnique(steps, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
  }
  if (!steps.some((s) => s.includes("expectGridContainsRecords"))) {
    pushUnique(steps, "await rdrPage.expectGridContainsRecords()");
  }

  if (row.id === "RDR_001" && column && isCustomerMasterRow(row)) {
    pushUnique(steps, `await rdrPage.expectUniqueColumnValues('${escapeStr(column)}')`);
    pushUnique(steps, "await expect(rdrPage.gridRows).toHaveCount(pilotData.customerMaster.expectedRowCount)");
  }

  if (gap.testable === "Partial" && /source|cbs|core banking/i.test(rowBlob(row))) {
    pushUnique(steps, "await rdrPage.expectGridContainsRecords()");
    if (column) pushUnique(steps, `await rdrPage.expectAllCellsNonEmpty('${escapeStr(column)}')`);
  }

  if (isViewModalTask(row) && !steps.some((s) => s.includes("expectViewModal"))) {
    pushUnique(steps, "await rdrPage.expectViewModalShowsRecordDetails()");
  }

  if (isHyperlinkTask(row) && !steps.some((s) => s.includes("expectFirstRowLink"))) {
    pushUnique(steps, "await rdrPage.expectFirstRowLinkNavigates()");
  }

  if (isActiveStatusTask(row)) {
    pushUnique(steps, "await rdrPage.expectAllCellsMatchValue('Status', 'Active')");
  }

  if (isInactiveStatusTask(row)) {
    pushUnique(steps, "await rdrPage.expectInactiveStatusInGrid()");
  }

  return sanitizeAssertionSteps(steps, row);
}

export function buildExcelAlignedPhases(row: RdrExcelRow): ExcelAlignedPhases {
  return {
    preconditions: buildPreconditionActions(row),
    setup: buildExcelSetupActions(row),
    steps: buildExcelStepActions(row),
    assertions: buildExcelAssertionActions(row),
  };
}
