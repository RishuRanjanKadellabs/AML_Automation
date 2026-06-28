import type { SmrExcelRow } from "./types";

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
  const parts: string[] = [];
  const re = /(?:^|\s)(\d+)\.\s+([A-Z][^]*?)(?=(?:\s+\d+\.\s+[A-Z])|$)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(testSteps)) !== null) {
    parts.push(match[2].trim().replace(/\.$/, ""));
  }
  if (parts.length > 0) {
    return parts.filter(Boolean);
  }
  const normalized = testSteps.replace(/(\d+)\.(?=[A-Za-z])/g, "$1. ");
  const legacy = normalized.split(/\s*(?=\d+\.\s)/).map((p) => p.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  if (legacy.length > 0) {
    return legacy;
  }
  return testSteps.split(/\.\s+/).map((p) => p.trim()).filter(Boolean);
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowBlob(row: SmrExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData} ${row.preconditions}`.toLowerCase();
}

function featureGroup(subModule: string): string {
  return subModule.trim() || "Core";
}

const ALL_REPORT_NAMES = [
  "Comprehensive Sanctions Screening Intelligence Report",
  "Enhanced Due Diligence: PEP & Adverse Media Analytics Report",
  "Screening Exception Authorization & Tracking Report",
  "Geographic Risk Exposure Intelligence Report",
  "Related Party High-Risk Country Linkage Report",
  "Screening Logic Governance & Change Control Report",
  "Exception List Governance & Accountability Report",
];

const REPORT_DETAIL_SUBMODULES = [
  "comprehensive sanctions",
  "enhanced due diligence",
  "screening exception authorization",
  "screening logic governance",
  "exception list governance",
  "geographic risk exposure",
  "related party high-risk",
];

const FILTER_LABELS = [
  "Customer Id / Name / Hit Id",
  "Customer/Prospect Type",
  "High-Risk Country List",
  "Sanction List Name",
  "Min. Match Score Threshold",
  "Risk Exposure Threshold",
  "Country Risk Rating",
  "Relationship Type",
  "Exception Status",
  "Screening Status",
  "Watchlist Name",
  "Branch Code",
  "Customer Type",
  "Screening Type",
  "Nationality",
  "User ID",
  "Channel",
  "Change Type",
  "Logic Version",
  "Category",
  "Severity",
  "Status",
  "Frequency",
];

function isFullReportSubmodule(row: SmrExcelRow): boolean {
  const sub = row.subModule.trim();
  return ALL_REPORT_NAMES.some((name) => sub === name || sub.includes(name));
}

function normalizeFilterValue(value: string): string {
  return value
    .replace(/\s+in report filters?\.?$/i, "")
    .replace(/\s+in the report filters panel\.?$/i, "")
    .trim();
}

function isReportDetailCommonSubmodule(row: SmrExcelRow): boolean {
  return /report detail/i.test(row.subModule.toLowerCase());
}

function isDetailSearchSecurityRow(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /detail search|search records field|special character.*search|sql injection.*search|search fields are handled safely|search do not cause application errors/i.test(blob);
}

function isRbacConfigurationScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /unauthorized user|cannot access report configuration|role-based restriction|configuration actions.*restricted|without permission.*config/i.test(blob)
    && !/search security|sql injection|script injection/i.test(blob);
}

function isEmptyReportDetailScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /report pages remain stable|no records exist for the selected period|empty report.*headers/i.test(blob);
}

function isLeapYearConfigurationScenario(row: SmrExcelRow): boolean {
  return /leap year|february 29/i.test(rowBlob(row))
    && (row.subModule.toLowerCase().includes("date validation") || row.subModule.toLowerCase().includes("validation"));
}

function isLandingPageRow(row: SmrExcelRow): boolean {
  if (isDetailSearchSecurityRow(row)) {
    return false;
  }
  const sub = row.subModule.toLowerCase().trim();
  const desc = row.taskDescription.toLowerCase();
  const exactLandingSubs = [
    "sanction mis reports",
    "dashboard counters",
    "report grid sorting",
    "search & filters",
    "search",
    "search security",
    "add report configuration",
    "date validation",
    "aml governance & audit",
    "report rule configuration",
  ];
  if (exactLandingSubs.includes(sub)) {
    return true;
  }
  if (sub.includes("sanction mis reports configuration")) {
    return true;
  }
  if (isFullReportSubmodule(row)) {
    return false;
  }
  return /landing page|search functionality|statistics section|breadcrumb|pagination|sorting|dashboard counter|add report screen|sql injection|special character|frequency filter|status filter|clear search|report listing|report grid sorting/.test(desc);
}

function isLandingFilterScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return (isLandingPageRow(row) || /search & filters|search and filters|dashboard counters|report grid sorting/i.test(row.subModule.toLowerCase()))
    && /status filter|frequency filter|filter updates report listing|multiple filters|clear search|clear filter|search criteria|landing page filter|report listing based on selected/i.test(blob);
}

function isKpiOrSummaryScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /kpi card|summary card|summary metrics|statistics section|dashboard counter|total hits|confirmed hits|nationality distribution|governance summary|exception summary/i.test(blob);
}

function isMetadataSectionScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /metadata section|generated date|generated by|total records information|report period loads|report metadata/i.test(blob)
    && !isConfigurationRow(row)
    && !isNegativeDateValidationRow(row);
}

function isReportDetailSubmodule(row: SmrExcelRow): boolean {
  if (isFullReportSubmodule(row)) {
    return true;
  }
  const sub = row.subModule.toLowerCase();
  return REPORT_DETAIL_SUBMODULES.some((name) => sub.includes(name));
}

function isReportDetailSubmoduleOnly(row: SmrExcelRow): boolean {
  return isReportDetailSubmodule(row) && !isLandingFilterScenario(row) && !isLandingPageRow(row);
}

function needsReportDetailSetup(row: SmrExcelRow): boolean {
  if (isLandingFilterScenario(row)) {
    return false;
  }
  if (isLandingPageRow(row)) {
    return false;
  }
  if (isDetailSearchSecurityRow(row)) {
    return true;
  }
  if (isReportDetailCommonSubmodule(row)) {
    return true;
  }
  if (isEmptyReportDetailScenario(row)) {
    return true;
  }
  if (isFullReportSubmodule(row)) {
    return true;
  }
  const desc = row.taskDescription.toLowerCase();
  const steps = row.testSteps.toLowerCase();
  const blob = `${desc} ${steps}`;
  if (/open report|view report|report detail|from report listing|report period|exception records|governance summary|logic change|export option|pdf export|excel export|xls export|metadata section|summary section|header information|generated date|generated by|total records|report page displays|click export|apply report filters|review export options|review metadata|review summary metrics|review exception records|review logic change|review governance records|report filters panel|columns selector|search records|detail grid pagination|detail records/i.test(blob)) {
    return true;
  }
  if (isLandingPageRow(row)) {
    return false;
  }
  if (isReportDetailSubmoduleOnly(row)) {
    return true;
  }
  const sub = row.subModule.toLowerCase();
  if (sub.includes("date range picker")) {
    return true;
  }
  return false;
}

function isConfigurationRow(row: SmrExcelRow): boolean {
  const sub = row.subModule.toLowerCase();
  return sub.includes("configuration") || sub.includes("report rule configuration");
}

function shouldOpenAddReportDialogInSetup(row: SmrExcelRow): boolean {
  if (isConfigurationRow(row)) {
    return true;
  }
  if (isLeapYearConfigurationScenario(row)) {
    return true;
  }
  if (needsReportDetailSetup(row) && !row.subModule.toLowerCase().includes("date validation")) {
    return false;
  }
  return row.subModule.toLowerCase().includes("date validation") || isNegativeDateValidationRow(row) || isPositiveDateValidationRow(row);
}

function isStatisticsRow(row: SmrExcelRow): boolean {
  if (needsReportDetailSetup(row)) {
    return false;
  }
  return /statistics section|summary cards|dashboard counter|total reports counter|generated counter|pending counter|daily\/weekly\/monthly counters/.test(rowBlob(row));
}

function isStatusColumnScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /status column|report status|status filter|status value|status dropdown|generated status|pending status/.test(blob)
    && !isStatisticsRow(row);
}

function inferReportName(row: SmrExcelRow): string {
  const sub = row.subModule.trim();
  for (const name of ALL_REPORT_NAMES) {
    if (sub === name || sub.includes(name)) {
      return name;
    }
  }
  const blob = rowBlob(row);
  for (const name of ALL_REPORT_NAMES) {
    if (blob.includes(name.toLowerCase())) {
      return name;
    }
  }
  if (/comprehensive sanctions/.test(blob)) {
    return ALL_REPORT_NAMES[0];
  }
  if (/pep|adverse media/.test(blob)) {
    return ALL_REPORT_NAMES[1];
  }
  if (/exception authorization/.test(blob)) {
    return ALL_REPORT_NAMES[2];
  }
  if (/logic governance/.test(blob)) {
    return ALL_REPORT_NAMES[5];
  }
  if (/exception list governance/.test(blob)) {
    return ALL_REPORT_NAMES[6];
  }
  if (/geographic risk/.test(blob)) {
    return ALL_REPORT_NAMES[3];
  }
  if (/related party/.test(blob)) {
    return ALL_REPORT_NAMES[4];
  }
  return ALL_REPORT_NAMES[0];
}

function inferSearchKeyword(row: SmrExcelRow, step: string): string {
  const blob = `${rowBlob(row)} ${step.toLowerCase()}`;
  if (/non-existing|no match|no matching|invalid search|zzzz/.test(blob)) {
    return "zzzz-no-match";
  }
  if (/sql injection/.test(blob)) {
    return "' OR 1=1 --";
  }
  if (/special character/.test(blob)) {
    return "@#$%";
  }
  if (/report id/.test(blob) && !/report name/.test(blob)) {
    return "SMR";
  }
  if (/partial keyword|partial/.test(blob)) {
    return "Enhanced";
  }
  if (/report name/.test(blob)) {
    return "Comprehensive";
  }
  return "Comprehensive";
}

function inferDetailSearchKeyword(row: SmrExcelRow): string {
  if (row.testData && row.testData !== "N/A") {
    const token = row.testData.split(/[:;]/)[0]?.trim();
    if (token && token.length > 2) {
      return token.slice(0, 40);
    }
  }
  return "Sample";
}

function parseSelectFilterStep(step: string): { label: string; value: string } | null {
  const trimmed = step.replace(/\.$/, "").trim();
  for (const label of [...FILTER_LABELS].sort((a, b) => b.length - a.length)) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`^select\\s+${escaped}\\s+(.+)$`, "i");
    const match = trimmed.match(re);
    if (match) {
      return { label, value: match[1].trim() };
    }
  }
  return null;
}

function isSetupHandledStep(step: string): boolean {
  return /open .+ using view from the landing catalog/i.test(step)
    || /on the landing catalog, locate .+ and click view/i.test(step)
    || /^confirm the .+ page title is displayed/i.test(step)
    || /^locate the report filters panel/i.test(step)
    || /^confirm the following filters are displayed/i.test(step)
    || /^confirm reset and apply filters buttons/i.test(step)
    || /^locate the .+ field in the report filters panel/i.test(step)
    || /^scroll to the detailed records section/i.test(step)
    || /^locate the pdf export button/i.test(step)
    || /^locate the xls export button/i.test(step)
    || /^locate the columns button/i.test(step)
    || /^confirm the configuration form/i.test(step)
    || /^confirm save changes and cancel/i.test(step)
    || /^confirm the configuration form title/i.test(step)
    || /^confirm rule description, category/i.test(step)
    || /^review the report id field/i.test(step)
    || /^confirm the report id value/i.test(step)
    || /^confirm the report id field cannot/i.test(step)
    || /^confirm the configuration form opens and report id/i.test(step)
    || /^confirm the sanction mis reports landing page/i.test(step)
    || /^locate the add new rule button on the landing toolbar/i.test(step)
    || /^locate the generate action on a catalog row/i.test(step)
    || /^locate comprehensive sanctions screening intelligence report in the catalog/i.test(step);
}

function isReviewAssertionStep(step: string): boolean {
  return /^review (kpi|filter|pagination|filtered|listed column|detail|the filtered|the listed|filter fields|available frequency|validation feedback|saved values|displayed text|exception|pep|adverse|exception distribution|regulatory guidance|opened page|page header|breadcrumb|detailed exception|detailed records|pep classification|peps linked|maker or checker|expiry dates|exception status values)/i.test(step)
    || /^confirm (the export action|at least one column|results are filtered|the new rule|the pagination range|new records are displayed|all detail rows return|total peps|adverse media|pep exposure|pep status|exception status|maker and checker|country names|at least one country|active, expired|new and removed|column options are listed|the columns control|the report catalog|the report detail page)/i.test(step)
    || /^attempt to (save|use each restricted)/i.test(step)
    || /^reopen (add new rule|the same rule)/i.test(step)
    || /^open an existing report configuration/i.test(step)
    || /^locate the page title|^locate the page subtitle/i.test(step)
    || /^note the visible record count/i.test(step)
    || /^match each frequency/i.test(step)
    || /^count the rows in the report catalog/i.test(step)
    || /^review governance kpi cards|^review governance-specific kpi|^locate a parameter row|^locate a parameter marked|^compare scope to authorization/i.test(step)
    || /^locate the date range filter field/i.test(step)
    || /^confirm report metadata and content sections are displayed/i.test(step);
}

function inferOpenReportStep(step: string): string | null {
  for (const name of ALL_REPORT_NAMES) {
    if (step.toLowerCase().includes(name.toLowerCase()) && /^open /i.test(step)) {
      return name;
    }
  }
  const openMatch = step.match(/^open\s+(.+?)\.?$/i);
  if (openMatch) {
    const fragment = openMatch[1].trim();
    for (const name of ALL_REPORT_NAMES) {
      if (name.toLowerCase().startsWith(fragment.toLowerCase()) || fragment.toLowerCase().includes(name.toLowerCase().slice(0, 20))) {
        return name;
      }
    }
  }
  return null;
}

function mapGenericFilterStep(step: string): string[] {
  const s = step.trim();
  if (/^apply a watchlist name filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN')"];
  }
  if (/^select a watchlist name filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN')"];
  }
  if (/^apply a sanction list name filter|^select a sanction list name filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List')"];
  }
  if (/^select a branch code filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Branch Code', 'NYC-01')"];
  }
  if (/^select a nationality filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Nationality', 'UAE')"];
  }
  if (/^select a screening type filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Screening Type', 'Forward')"];
  }
  if (/^select a high-risk country list source/i.test(s)) {
    return ["await smrPage.selectReportFilter('High-Risk Country List', 'FATF High-Risk Countries')"];
  }
  if (/^select a department or business unit filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Department / Business Unit', 'Retail Banking')"];
  }
  if (/^apply a customer type filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Customer Type', 'Individual')"];
  }
  if (/^set minimum match score threshold to \d+/i.test(s)) {
    const n = s.match(/(\d+)/)?.[1] ?? "85";
    return [`await smrPage.fillReportFilter('Min. Match Score Threshold', '${n}')`];
  }
  if (/^filter by a true match status/i.test(s)) {
    return ["await smrPage.selectReportFilter('Screening Status', 'True Match')"];
  }
  if (/^apply screening status adverse media/i.test(s)) {
    return ["await smrPage.selectReportFilter('Screening Status', 'Adverse Media')"];
  }
  if (/^apply any pep status filter/i.test(s)) {
    return ["await smrPage.selectReportFilter('Screening Status', 'Current PEP')"];
  }
  if (/^enter a valid user id in report filters|^enter a known customer id in report filters/i.test(s)) {
    return ["await smrPage.fillReportFilter('User ID', 'USER001')"];
  }
  if (/^select department \/ business unit/i.test(s)) {
    return ["await smrPage.selectReportFilter('Department / Business Unit', 'Retail Banking')"];
  }
  if (/^open the date range picker|^click the date range filter trigger/i.test(s)) {
    return ["await smrPage.openDateRangePicker()"];
  }
  if (/^select the last 30 days preset|^select a start date on the calendar|^select an end date on the calendar|^select the same date for from and to/i.test(s)) {
    return ["await smrPage.openDateRangePicker()", "await smrPage.selectDefaultDateRange()"];
  }
  if (/^click apply\.?$/i.test(s)) {
    return ["await smrPage.clickApplyFilters()"];
  }
  if (/^click clear inside the picker/i.test(s)) {
    return ["await smrPage.clearLandingFilters()"];
  }
  if (/^click outside the picker/i.test(s)) {
    return ["await smrPage.closeActiveDialog()"];
  }
  if (/^navigate to the next watchlist page|^navigate to the next detail page/i.test(s)) {
    return ["await smrPage.goToDetailNextPage()"];
  }
  if (/^apply any report filter on a detail page|^apply a non-empty filter set|^apply a highly restrictive filter combination|^apply a date range with no underlying screening activity/i.test(s)) {
    return [
      "await smrPage.selectReportFilter('Screening Type', 'Forward')",
      "await smrPage.clickApplyFilters()",
    ];
  }
  if (/^perform a report generation action/i.test(s)) {
    return ["await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report')"];
  }
  if (/^create a new report rule/i.test(s)) {
    return ["await smrPage.clickAddNewRule()"];
  }
  if (/^complete all other required fields|^complete remaining mandatory fields/i.test(s)) {
    return [
      "await smrPage.fillConfigField('Rule Description', 'Validation test rule')",
      "await smrPage.selectConfigField('Category', 'Sanctions')",
      "await smrPage.selectConfigField('Status', 'Active')",
    ];
  }
  if (/^return to the landing catalog/i.test(s)) {
    return ["await smrPage.navigateBackToLanding()"];
  }
  return [];
}

function mapDetailFilterOrConfigStep(row: SmrExcelRow, step: string): string[] {
  const actions: string[] = [];
  const s = step.trim();

  if (/^click reset in the report filters panel/i.test(s)) {
    return ["await smrPage.clickResetReportFilters()"];
  }
  if (/^click the columns button/i.test(s)) {
    return ["await smrPage.clickColumnsButton()"];
  }
  if (/enter a search term in the search records field/i.test(s)) {
    return [`await smrPage.searchDetailRecords('${escapeStr(inferDetailSearchKeyword(row))}')`];
  }
  if (/^clear the search field/i.test(s)) {
    return ["await smrPage.clearDetailSearch()"];
  }
  if (/navigate to the next page of detail records/i.test(s)) {
    return ["await smrPage.goToDetailNextPage()"];
  }
  if (/^click pdf export|^initiate pdf/i.test(s)) {
    return ["await smrPage.clickExportReport('PDF')"];
  }
  if (/^click xls export|^initiate xls/i.test(s)) {
    return ["await smrPage.clickExportReport('XLS')"];
  }
  if (/^click csv export|^initiate csv/i.test(s)) {
    return ["await smrPage.clickExportReport('CSV')"];
  }
  if (/^open date range and select the last 30 days/i.test(s)) {
    return ["await smrPage.openDateRangePicker()", "await smrPage.selectDefaultDateRange()"];
  }
  if (/^apply a date range for the current month/i.test(s)) {
    return ["await smrPage.openDateRangePicker()", "await smrPage.selectDefaultDateRange()"];
  }
  if (/^click apply filters and confirm results are filtered/i.test(s)) {
    return ["await smrPage.clickApplyFilters()"];
  }

  const selectFilter = parseSelectFilterStep(s);
  if (selectFilter) {
    const value = escapeStr(normalizeFilterValue(selectFilter.value));
    if (isConfigurationRow(row)) {
      return [`await smrPage.selectConfigField('${escapeStr(selectFilter.label)}', '${value}')`];
    }
    return [`await smrPage.selectReportFilter('${escapeStr(selectFilter.label)}', '${value}')`];
  }

  if (/^enter \d+ in the min/i.test(s)) {
    const n = s.match(/enter (\d+)/i)?.[1] ?? "85";
    return [`await smrPage.fillReportFilter('Min. Match Score Threshold', '${n}')`];
  }
  if (/enter a sample customer name in the customer id/i.test(s)) {
    return [`await smrPage.fillReportFilter('Customer Id / Name / Hit Id', 'Sample')`];
  }
  if (/enter a sample user id/i.test(s)) {
    return [`await smrPage.fillReportFilter('User ID', 'USER001')`];
  }
  if (/enter a sample customer identifier/i.test(s) || /enter a sample customer id in the customer id field/i.test(s)) {
    return [`await smrPage.fillReportFilter('Customer ID', 'CUST001')`];
  }

  if (/^enter rule description:/i.test(s)) {
    const val = s.replace(/^enter rule description:\s*/i, "").replace(/\.$/, "").trim();
    return [`await smrPage.fillConfigField('Rule Description', '${escapeStr(val)}')`];
  }
  if (/^select category sanctions, severity medium, and status active/i.test(s)) {
    return [
      "await smrPage.selectConfigField('Category', 'Sanctions')",
      "await smrPage.selectConfigField('Severity', 'Medium')",
      "await smrPage.selectConfigField('Status', 'Active')",
    ];
  }
  if (/select frequency weekly and enter risk score/i.test(s)) {
    const score = s.match(/risk score\s+(\d+)/i)?.[1] ?? "80";
    return [
      "await smrPage.selectConfigField('Frequency', 'Weekly')",
      `await smrPage.fillConfigField('Risk Score', '${score}')`,
    ];
  }
  if (/^select frequency weekly/i.test(s)) {
    return ["await smrPage.selectConfigField('Frequency', 'Weekly')"];
  }
  if (/enter risk score \d+/i.test(s)) {
    const n = s.match(/enter risk score (\d+)/i)?.[1] ?? "80";
    return [`await smrPage.fillConfigField('Risk Score', '${n}')`];
  }
  if (/enter from date .+ and to date/i.test(s)) {
    const from = s.match(/from date\s+([0-9/]+)/i)?.[1] ?? "01/01/2026";
    const to = s.match(/to date\s+([0-9/]+)/i)?.[1] ?? "31/12/2026";
    return [
      `await smrPage.fillConfigField('From Date', '${from}')`,
      `await smrPage.fillConfigField('To Date', '${to}')`,
    ];
  }
  if (/^enter an alphabetic value in risk score/i.test(s)) {
    return [`await smrPage.fillConfigField('Risk Score', 'abc')`];
  }
  if (/^enter a from date later than the to date/i.test(s)) {
    return [
      "await smrPage.fillConfigField('From Date', '31/12/2026')",
      "await smrPage.fillConfigField('To Date', '01/01/2026')",
    ];
  }
  if (/^enter an invalid from date/i.test(s)) {
    return [`await smrPage.fillConfigField('From Date', '31/02/2026')`];
  }
  if (/^enter a script tag in rule description/i.test(s)) {
    return [`await smrPage.fillConfigField('Rule Description', '<script>alert(1)</script>')`];
  }
  if (/^leave rule description blank/i.test(s)) {
    return [`await smrPage.fillConfigField('Rule Description', '')`];
  }
  if (/^enter values in one or more fields/i.test(s)) {
    return [`await smrPage.fillConfigField('Rule Description', 'Draft rule')`];
  }
  if (/^change the rule description/i.test(s)) {
    return [`await smrPage.fillConfigField('Rule Description', 'Updated rule description')`];
  }
  if (/^click save changes/i.test(s)) {
    return ["await smrPage.clickSaveChanges()"];
  }
  if (/^open the frequency dropdown/i.test(s)) {
    return ["await smrPage.selectConfigField('Frequency', 'Daily')"];
  }
  if (/^select each frequency option/i.test(s)) {
    return [
      "await smrPage.selectConfigField('Frequency', 'Daily')",
      "await smrPage.selectConfigField('Frequency', 'Weekly')",
      "await smrPage.selectConfigField('Frequency', 'Monthly')",
    ];
  }

  return actions;
}

function isAuthDeniedScenario(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  if (isDetailSearchSecurityRow(row) || isRbacConfigurationScenario(row)) {
    return false;
  }
  return /access denied page|login as.*unauthorized|login as.*read.?only|403 forbidden|mock unauthorized/i.test(blob)
    || (/access denied|without permission|not authorized|restricted role/i.test(blob) && /navigate|open.*module|direct url/i.test(blob));
}

function isPositiveDateValidationRow(row: SmrExcelRow): boolean {
  if (isKpiOrSummaryScenario(row) || isMetadataSectionScenario(row)) {
    return false;
  }
  const blob = rowBlob(row);
  return /same-day|same day|leap year|valid date range|handles same-day|accepts leap year|without errors|no errors/i.test(blob)
    && !/invalid date|date error|future date|must not|should not|reject/i.test(row.expectedResult.toLowerCase())
    && (row.subModule.toLowerCase().includes("date validation") || /date range|date picker|from date|to date/i.test(blob));
}

function isNegativeDateValidationRow(row: SmrExcelRow): boolean {
  const blob = rowBlob(row);
  return /invalid date|date error|future date|must not|should not|reject|invalid manually entered/i.test(blob);
}

function isEmptySearchRow(row: SmrExcelRow): boolean {
  return /no matching records|no matching report|non-existing keyword|non-existing search|returns no matching/i.test(rowBlob(row));
}

function isApiFailureRow(row: SmrExcelRow): boolean {
  return /api failure|network error|timeout|service unavailable|report failure|export failure/.test(rowBlob(row));
}

const OPEN = "await smrPage.openMisReportsDirect(testData.baseUrl)";

export function buildExcelSetupActions(row: SmrExcelRow): string[] {
  const steps: string[] = [];
  const blob = rowBlob(row);

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await smrPage.mockMisReportApiFailure()");
  }

  if (isAuthDeniedScenario(row)) {
    pushUnique(steps, "await smrPage.mockUnauthorized()");
  }

  if (stepMatches(blob, "sidebar", "navigation menu", "sanction screening") && !blob.includes("direct url")) {
    pushUnique(steps, OPEN);
    pushUnique(steps, "await smrPage.openMisReportsFromSidebar()");
  } else {
    pushUnique(steps, OPEN);
  }

  if (!needsReportDetailSetup(row)) {
    pushUnique(steps, "await smrPage.expectMisReportsPageLoaded()");
  }

  if (shouldOpenAddReportDialogInSetup(row)) {
    pushUnique(steps, "await smrPage.clickAddNewRule()");
  } else if (isEmptySearchRow(row)) {
    pushUnique(steps, "await smrPage.ensureLandingFiltersVisible()");
  }

  if (needsReportDetailSetup(row)) {
    const reportName = inferReportName(row);
    pushUnique(steps, `await smrPage.openReportView('${escapeStr(reportName)}')`);
  }

  return steps;
}

export function buildExcelStepActions(row: SmrExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const blob = rowBlob(row);
  const reportName = inferReportName(row);

  for (const s of numbered) {
    if (stepMatches(s, "login", "log in", "logged in")) {
      continue;
    }
    if (isSetupHandledStep(s)) {
      continue;
    }
    if (isReviewAssertionStep(s)) {
      continue;
    }

    const mapped = mapDetailFilterOrConfigStep(row, s);
    if (mapped.length > 0) {
      for (const action of mapped) {
        pushUnique(steps, action);
      }
      continue;
    }

    const genericFilter = mapGenericFilterStep(s);
    if (genericFilter.length > 0) {
      for (const action of genericFilter) {
        pushUnique(steps, action);
      }
      continue;
    }

    const openReport = inferOpenReportStep(s);
    if (openReport) {
      if (!needsReportDetailSetup(row)) {
        pushUnique(steps, `await smrPage.openReportView('${escapeStr(openReport)}')`);
      }
      continue;
    }

    if (/^open the sanction screening section in the left menu/i.test(s)) {
      pushUnique(steps, "await smrPage.openMisReportsFromSidebar()");
      continue;
    }
    if (/^select sanction mis reports/i.test(s)) {
      pushUnique(steps, "await smrPage.openMisReportsFromSidebar()");
      continue;
    }
    if (/^click the report name link/i.test(s)) {
      pushUnique(steps, `await smrPage.clickReportNameLink('${escapeStr(reportName)}')`);
      continue;
    }
    if (/^open any report detail page|^open a report detail page|^open a report with detailed records|^open any report using view/i.test(s)) {
      if (!needsReportDetailSetup(row)) {
        pushUnique(steps, `await smrPage.openReportView('${escapeStr(reportName)}')`);
      }
      continue;
    }
    if (/^select a report that has no source data/i.test(s)) {
      pushUnique(steps, `await smrPage.openReportView('${escapeStr(reportName)}')`);
      continue;
    }
    if (/^click the sanction mis reports back link/i.test(s)) {
      pushUnique(steps, "await smrPage.navigateBackToLanding()");
      continue;
    }
    if (/^on the sanction mis reports landing page, click the filter button/i.test(s)) {
      pushUnique(steps, "await smrPage.clickFilterButton()");
      continue;
    }
    if (/^scroll to the regulatory guidance section/i.test(s)) {
      continue;
    }
    if (/^initiate xls export/i.test(s)) {
      pushUnique(steps, "await smrPage.clickExportReport('XLS')");
      continue;
    }

    if (stepMatches(s, "navigate to sanction", "sanction screening module", "sanctions screening")) {
      pushUnique(steps, "await smrPage.openMisReportsFromSidebar()");
      continue;
    }
    if (stepMatches(s, "click sanction mis", "screening mis reports", "mis reports menu")) {
      pushUnique(steps, "await smrPage.openMisReportsFromSidebar()");
      continue;
    }
    if (stepMatches(s, "direct url", "enter url", "open direct")) {
      pushUnique(steps, OPEN);
      pushUnique(steps, "await smrPage.expectMisReportsPageLoaded()");
      continue;
    }
    if (stepMatches(s, "review statistics section", "review all statistics cards")) {
      pushUnique(steps, "await smrPage.expectStatisticsCardsVisible()");
    } else if (stepMatches(s, "review header section", "review page header")) {
      pushUnique(steps, needsReportDetailSetup(row)
        ? "await smrPage.expectReportDetailHeaderVisible()"
        : "await smrPage.expectPageHeaderVisible()");
    } else if (stepMatches(s, "review metadata section", "report period")) {
      pushUnique(steps, "await smrPage.expectReportPeriodVisible()");
    } else if (stepMatches(s, "review summary section", "review summary metrics", "governance summary")) {
      pushUnique(steps, "await smrPage.expectReportSummarySectionVisible()");
    } else if (stepMatches(s, "review exception records", "exception records section", "logic change records", "governance records", "records section")) {
      pushUnique(steps, "await smrPage.expectReportDataDisplayed()");
    } else if (stepMatches(s, "enter report name", "enter partial keyword", "enter non-existing keyword", "enter search", "type in search", "enter keyword")) {
      if (isDetailSearchSecurityRow(row) || needsReportDetailSetup(row)) {
        pushUnique(steps, `await smrPage.searchDetailRecords('${escapeStr(inferSearchKeyword(row, s))}')`);
      } else {
        pushUnique(steps, `await smrPage.searchReports('${escapeStr(inferSearchKeyword(row, s))}')`);
      }
    } else if (stepMatches(s, "enter report id", "search reports field")) {
      if (isDetailSearchSecurityRow(row) || needsReportDetailSetup(row)) {
        pushUnique(steps, `await smrPage.searchDetailRecords('${escapeStr(inferSearchKeyword(row, s))}')`);
      } else {
        pushUnique(steps, `await smrPage.searchReports('${escapeStr(inferSearchKeyword(row, s))}')`);
      }
    } else if (stepMatches(s, "count grid records", "count generated", "count pending", "count frequency", "compare with")) {
      pushUnique(steps, "await smrPage.expectDashboardCountersMatchGrid()");
    } else if (stepMatches(s, "click filter", "open filter", "locate frequency filter", "locate status filter")) {
      pushUnique(steps, "await smrPage.clickFilterButton()");
    } else if (/select a frequency|select frequency option|select frequency/i.test(s)) {
      pushUnique(steps, "await smrPage.clickFilterButton()");
      const value = /weekly/i.test(s + blob) ? "Weekly" : /monthly/i.test(s + blob) ? "Monthly" : "Daily";
      pushUnique(steps, `await smrPage.selectLandingFilter('Frequency', '${value}')`);
    } else if (/select status option|select a status|select status/i.test(s)) {
      pushUnique(steps, "await smrPage.clickFilterButton()");
      const value = /pending/i.test(s + blob) ? "Pending" : "Generated";
      pushUnique(steps, `await smrPage.selectLandingFilter('Status', '${value}')`);
    } else if (stepMatches(s, "select frequency", "frequency filter", "choose frequency")) {
      const value = /daily/i.test(s + blob) ? "Daily" : /weekly/i.test(s + blob) ? "Weekly" : /monthly/i.test(s + blob) ? "Monthly" : "Daily";
      pushUnique(steps, `await smrPage.selectLandingFilter('Frequency', '${value}')`);
    } else if (stepMatches(s, "select status", "status filter", "choose status")) {
      const value = /pending/i.test(s + blob) ? "Pending" : /generated/i.test(s + blob) ? "Generated" : "Generated";
      pushUnique(steps, `await smrPage.selectLandingFilter('Status', '${value}')`);
    } else if (stepMatches(s, "apply filter", "apply filters", "apply available filters") || /^click apply filters\.?$/i.test(s.trim())) {
      if (!isLeapYearConfigurationScenario(row)) {
        pushUnique(steps, "await smrPage.clickApplyFilters()");
      }
    } else if (/^click reset in the report filters/i.test(s)) {
      pushUnique(steps, "await smrPage.clickResetReportFilters()");
    } else if (/^clear the search field/i.test(s)) {
      pushUnique(steps, "await smrPage.clearDetailSearch()");
    } else if (stepMatches(s, "clear filter", "clear search", "reset filter")) {
      if (needsReportDetailSetup(row) && /reset clears|report filters|filter field/i.test(blob)) {
        pushUnique(steps, "await smrPage.clickResetReportFilters()");
      } else {
        pushUnique(steps, "await smrPage.clearLandingFilters()");
      }
    } else if (stepMatches(s, "add new rule", "add report", "create rule", "click add report", "configure report") || /^click add new rule/i.test(s.trim())) {
      if (!isConfigurationRow(row) || stepMatches(s, "click add report", "add report", "click add new rule")) {
        pushUnique(steps, "await smrPage.clickAddNewRule()");
      }
    } else if (/^click view on that row|^click view on the row|^click view for/i.test(s.trim())) {
      pushUnique(steps, `await smrPage.clickViewForReport('${escapeStr(reportName)}')`);
    } else if ((/^view report\b|^click view\b/i.test(s.trim())) && !needsReportDetailSetup(row)) {
      pushUnique(steps, `await smrPage.clickViewForReport('${escapeStr(reportName)}')`);
    } else if (/^open report\b/i.test(s.trim())) {
      pushUnique(steps, `await smrPage.openReportView('${escapeStr(reportName)}')`);
    } else if (/^click export pdf\b|^export pdf\b/i.test(s.trim())) {
      pushUnique(steps, `await smrPage.clickExportReport('PDF')`);
    } else if (/^click export excel\b|^export excel\b/i.test(s.trim())) {
      pushUnique(steps, `await smrPage.clickExportReport('Excel')`);
    } else if (/^review report grid\b|^review grid\b/i.test(s.trim())) {
      pushUnique(steps, "await smrPage.expectReportsTableVisible()");
    } else if (stepMatches(s, "search")) {
      if (isDetailSearchSecurityRow(row) || needsReportDetailSetup(row)) {
        pushUnique(steps, `await smrPage.searchDetailRecords('${escapeStr(inferSearchKeyword(row, s))}')`);
      } else {
        pushUnique(steps, `await smrPage.searchReports('${escapeStr(inferSearchKeyword(row, s))}')`);
      }
    } else if (stepMatches(s, "generate", "click generate", "run report", "generate report")) {
      pushUnique(steps, `await smrPage.clickGenerateForReport('${escapeStr(reportName)}')`);
    } else if (/enter invalid date|invalid date manually|type invalid date/i.test(s)) {
      pushUnique(steps, "await smrPage.openDateRangePicker()");
      pushUnique(steps, "await smrPage.enterInvalidDate()");
    } else if (stepMatches(s, "click date range", "date range field", "select date", "from date", "to date", "pick date")) {
      if ((isConfigurationRow(row) || row.subModule.toLowerCase().includes("date validation")) && !shouldOpenAddReportDialogInSetup(row)) {
        pushUnique(steps, "await smrPage.clickAddNewRule()");
      }
      pushUnique(steps, "await smrPage.openDateRangePicker()");
      if (stepMatches(s, "apply", "select", "pick") || isPositiveDateValidationRow(row)) {
        pushUnique(steps, "await smrPage.selectDefaultDateRange()");
      }
    } else if (stepMatches(s, "export", "download")) {
      const format = stepMatches(s, "csv") ? "CSV" : stepMatches(s, "pdf") ? "PDF" : stepMatches(s, "xls") ? "XLS" : "Excel";
      pushUnique(steps, `await smrPage.clickExportReport('${format}')`);
    } else if (stepMatches(s, "sort", "column header")) {
      const col = /report name/i.test(s) ? "Report Name" : /frequency/i.test(s) ? "Frequency" : /status/i.test(s) ? "Status" : "Report ID";
      pushUnique(steps, `await smrPage.sortReportColumn('${col}')`);
    } else if (stepMatches(s, "pagination", "next page", "previous page", "items per page")) {
      if (stepMatches(s, "next")) {
        pushUnique(steps, needsReportDetailSetup(row) ? "await smrPage.goToDetailNextPage()" : "await smrPage.goToNextPage()");
      } else if (stepMatches(s, "previous")) {
        pushUnique(steps, "await smrPage.goToPreviousPage()");
      } else {
        pushUnique(steps, needsReportDetailSetup(row) ? "await smrPage.expectDetailPaginationVisible()" : "await smrPage.expectPaginationVisible()");
      }
    } else if (stepMatches(s, "refresh", "reload")) {
      pushUnique(steps, "await smrPage.refreshPage()");
    } else if (stepMatches(s, "logout", "log out", "session")) {
      pushUnique(steps, "await smrPage.performLogoutAndReturn()");
    } else if (/^click confirm\b|^confirm action\b/i.test(s.trim())) {
      pushUnique(steps, "await smrPage.clickConfirmAction()");
    } else if (stepMatches(s, "cancel", "close")) {
      pushUnique(steps, "await smrPage.closeActiveDialog()");
    } else if (
      stepMatches(s, "inspect", "observe", "verify", "validate", "check")
      || (/^review\b/i.test(s.trim()) && !/^review (report grid|grid|metadata|summary|exception|export|header|statistics|logic|governance|records|kpi|filter|pagination|filtered|listed column|detail)/i.test(s.trim()))
    ) {
      // assertions handle expected results
    } else {
      pushUnique(steps, `// TODO: Excel step not mapped — "${escapeStr(s)}"`);
    }
  }

  return steps;
}

export function buildExcelAssertionActions(row: SmrExcelRow): string[] {
  const steps: string[] = [];
  const blob = rowBlob(row);
  const onDetail = needsReportDetailSetup(row);

  if (isRbacConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectConfigurationRestricted()");
  } else if (isAuthDeniedScenario(row) && !isDetailSearchSecurityRow(row)) {
    pushUnique(steps, "await smrPage.expectAccessDenied()");
  } else if (/access denied page|403 forbidden/.test(blob)) {
    pushUnique(steps, "await smrPage.expectAccessDenied()");
  }
  if (!onDetail && /landing page|page should open|module.*open|without errors/.test(blob)) {
    pushUnique(steps, "await smrPage.expectMisReportsPageLoaded()");
  }
  if (/report detail page|detail page opens|content sections are displayed|report detail header|opened report title/.test(blob) && !isLandingPageRow(row) && !isLeapYearConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectReportDetailHeaderVisible()");
  }
  if (/report detail page|detail page opens|content sections are displayed|report metadata/.test(blob) && isLandingPageRow(row) && !isLeapYearConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectReportDetailHeaderVisible()");
    pushUnique(steps, "await smrPage.expectReportPeriodVisible()");
  }
  if (/breadcrumb/.test(blob)) {
    pushUnique(steps, "await smrPage.expectBreadcrumbVisible()");
  }
  if (/page title|header|subtitle/.test(blob) && !onDetail && !/report detail|detail page|opened page title|opened report title|name link/.test(blob)) {
    pushUnique(steps, "await smrPage.expectPageHeaderVisible()");
  }
  if (/report header|header information|page title is displayed/.test(blob) && onDetail) {
    pushUnique(steps, "await smrPage.expectReportDetailHeaderVisible()");
  }
  if (isKpiOrSummaryScenario(row) || /kpi cards|kpi and detail|updated results|narrow kpi/i.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportSummarySectionVisible()");
  }
  if (isMetadataSectionScenario(row) && onDetail) {
    pushUnique(steps, "await smrPage.expectReportPeriodVisible()");
    pushUnique(steps, "await smrPage.expectReportDetailHeaderVisible()");
  } else if (/report period|reporting period|metadata section/.test(blob) && onDetail) {
    pushUnique(steps, "await smrPage.expectReportPeriodVisible()");
  }
  if (/summary section|summary metrics|governance summary|exception summary/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportSummarySectionVisible()");
  }
  if (/report grid|reports table|report list|matching report|report id|report name|frequency column|status column/.test(blob) && !isConfigurationRow(row) && !onDetail) {
    pushUnique(steps, "await smrPage.expectReportsTableVisible()");
  }
  if (isStatisticsRow(row)) {
    pushUnique(steps, "await smrPage.expectStatisticsCardsVisible()");
    if (/counter matches|reconcile|compare/.test(blob)) {
      pushUnique(steps, "await smrPage.expectDashboardCountersMatchGrid()");
    }
  }
  if (/filter|search|report filters/.test(blob) && !/clear filter|filters reset|fields cleared|no matching|search records narrows/.test(blob)) {
    if (isLeapYearConfigurationScenario(row)) {
      pushUnique(steps, "await smrPage.expectReportConfigurationPanelVisible()");
    } else if (isDetailSearchSecurityRow(row) || isReportDetailCommonSubmodule(row) || onDetail) {
      pushUnique(steps, "await smrPage.expectReportDetailFiltersVisible()");
    } else if (isLandingFilterScenario(row) || (!onDetail && !row.subModule.toLowerCase().includes("date range picker"))) {
      pushUnique(steps, "await smrPage.expectFilterControlsVisible()");
    } else if (row.subModule.toLowerCase().includes("date range picker") || onDetail) {
      pushUnique(steps, "await smrPage.expectReportDetailFiltersVisible()");
    } else {
      pushUnique(steps, "await smrPage.expectFilterControlsVisible()");
    }
  }
  if (/all configured filters|apply filters and reset actions are visible|report filters panel/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportDetailFiltersVisible()");
  }
  if (/clear filter|filters reset|fields cleared|restores complete report listing|reset clears all applied filters|default report view|default unfiltered view|return to the default view/.test(blob)) {
    pushUnique(steps, "await smrPage.expectFiltersCleared()");
  }
  if (/columns selector|column options|configurable detail grid column/.test(blob)) {
    pushUnique(steps, "await smrPage.expectColumnsSelectorVisible()");
  }
  if (/detail grid pagination|pagination range text|navigates to the next page/.test(blob)) {
    pushUnique(steps, "await smrPage.expectDetailPaginationVisible()");
  }
  if (/search records narrows|clearing the search restores|inline search/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportDataDisplayed()");
  }
  if (/no matching|no records|empty/.test(blob) && /search/.test(blob)) {
    pushUnique(steps, "await smrPage.expectEmptySearchResults()");
  }
  if (/report period|reporting period|generated date|metadata section/.test(blob) && onDetail) {
    pushUnique(steps, "await smrPage.expectReportPeriodVisible()");
  }
  if (/generate.*disabled|button.*disabled|cannot generate/.test(blob) && !isRbacConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectGenerateActionState('disabled')");
  }
  if (isRbacConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectGenerateActionState('disabled')");
  }
  if (/generate.*enabled|report generation.*start|generated successfully/.test(blob)) {
    pushUnique(steps, "await smrPage.expectGenerateActionState('enabled')");
  }
  if (isStatusColumnScenario(row)) {
    pushUnique(steps, "await smrPage.expectReportStatusVisible()");
  }
  if (isConfigurationRow(row) && /configuration|add new rule|add report|report id field|from date|to date|status dropdown|report name field|frequency field|all configured fields|save changes and cancel/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportConfigurationPanelVisible()");
  }
  if (isConfigurationRow(row) && /report id field|auto-generated|report id is|populated automatically/.test(blob)) {
    pushUnique(steps, "await smrPage.expectAddReportFieldVisible('Report ID')");
  }
  if (isConfigurationRow(row) && /from date|to date/.test(blob)) {
    pushUnique(steps, "await smrPage.expectAddReportFieldVisible('From Date')");
    pushUnique(steps, "await smrPage.expectAddReportFieldVisible('To Date')");
  }
  if (isConfigurationRow(row) && /status dropdown|status value|configured values|rule description, category/.test(blob)) {
    pushUnique(steps, "await smrPage.expectAddReportFieldVisible('Status')");
  }
  if (/date range|date picker|calendar|from date|to date/.test(blob) && !/date validation|invalid date|add report|configuration/.test(blob) && !isLeapYearConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectDateRangePickerVisible()");
  }
  if (isLeapYearConfigurationScenario(row)) {
    pushUnique(steps, "await smrPage.expectReportConfigurationPanelVisible()");
    pushUnique(steps, "await smrPage.expectDateRangePickerVisible()");
  }
  if (isPositiveDateValidationRow(row)) {
    pushUnique(steps, "await smrPage.expectDateRangeAccepted()");
  } else if (isNegativeDateValidationRow(row) && !isKpiOrSummaryScenario(row)) {
    pushUnique(steps, "await smrPage.expectDateValidationFeedback()");
  } else if (/date validation|invalid date|future date|date error|leap year|same-day/.test(blob) && !isPositiveDateValidationRow(row) && !isLeapYearConfigurationScenario(row) && !isKpiOrSummaryScenario(row) && !/without errors|no errors|acceptance|loads successfully|metadata section|kpi card|summary card/i.test(blob)) {
    pushUnique(steps, "await smrPage.expectDateValidationFeedback()");
  }
  if (/pdf export initiates|xls export initiates|export action is accepted|export|download/.test(blob) && !/failure|error/.test(blob)) {
    pushUnique(steps, "await smrPage.expectExportActionAvailable()");
  }
  if (/export failure|download fail|export error/.test(blob)) {
    pushUnique(steps, "await smrPage.expectExportFailureHandled()");
  }
  if (/sort|ascending|descending|column order/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportColumnSorted()");
  }
  if (/pagination|page navigation|items per page/.test(blob) && !/detail grid pagination/.test(blob)) {
    pushUnique(steps, "await smrPage.expectPaginationVisible()");
  }
  if (isEmptyReportDetailScenario(row)) {
    pushUnique(steps, "await smrPage.expectReportDetailHeaderVisible()");
    pushUnique(steps, "await smrPage.expectReportDetailFiltersVisible()");
    pushUnique(steps, "await smrPage.expectLayoutStable()");
  }
  if (/empty state|no reports|no data/.test(blob) && !/search/.test(blob) && !isEmptyReportDetailScenario(row)) {
    pushUnique(steps, "await smrPage.expectEmptyStateVisible()");
  }
  if (/risk score|score validation|threshold/.test(blob) && !isConfigurationRow(row)) {
    pushUnique(steps, "await smrPage.expectRiskScoreValidation()");
  }
  if (/data accuracy|report data|grid data|record accuracy|exception records|logic change|maker information|checker information|accountability|validity information|detail records matching|only .* records are displayed|records linked to|records for the selected|records match the selected/.test(blob)) {
    pushUnique(steps, "await smrPage.expectReportDataDisplayed()");
  }
  if (/api failure|network error|timeout|graceful|error message/.test(blob) && isApiFailureRow(row)) {
    pushUnique(steps, "await smrPage.expectApiFailureHandledGracefully()");
  }
  if (/layout|alignment|responsive|ui integrity/.test(blob)) {
    pushUnique(steps, "await smrPage.expectLayoutStable()");
  }
  if (/audit logging|user and timestamp|governance & audit/.test(blob)) {
    pushUnique(steps, "await smrPage.expectAuditTrailIndicators()");
  }
  if (steps.length === 0) {
    pushUnique(steps, onDetail
      ? "await smrPage.expectReportDetailShellLoaded()"
      : "await smrPage.expectPageShellLoaded()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: SmrExcelRow): string {
  const lines: string[] = [];
  for (const block of [
    buildExcelSetupActions(row),
    buildExcelStepActions(row),
    buildExcelAssertionActions(row),
  ]) {
    for (const step of block) {
      pushUnique(lines, step);
    }
  }
  return lines.join(";\n    ");
}

export function formatTestTitle(row: SmrExcelRow): string {
  const feature = featureGroup(row.subModule);
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function formatExcelComment(row: SmrExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Excel Scenario: ${row.taskDescription}`;
}
