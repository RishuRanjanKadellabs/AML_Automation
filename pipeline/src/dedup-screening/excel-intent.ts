import type { DdsExcelRow } from "./types";

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
  const normalized = testSteps.replace(/(\d+)\./g, "$1. ").replace(/\s+/g, " ").trim();
  const parts = normalized.split(/\s*(?=\d+\.\s)/).map((p) => p.replace(/^\d+\.\s*/, "").trim()).filter(Boolean);
  if (parts.length > 0) {
    return parts;
  }
  return testSteps.split(/\.\s+/).map((p) => p.trim()).filter(Boolean);
}

function stepMatches(step: string, ...patterns: string[]): boolean {
  const s = step.toLowerCase();
  return patterns.some((p) => s.includes(p.toLowerCase()));
}

function rowBlob(row: DdsExcelRow): string {
  return `${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testData} ${row.preconditions}`.toLowerCase();
}

function assertionBlob(row: DdsExcelRow): string {
  return `${row.taskDescription} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testSteps} ${row.testData}`.toLowerCase();
}

function featureGroup(subModule: string): string {
  return subModule.replace(/^De-Dup Screening\s*[–-]\s*/i, "").trim() || "Core";
}

const UI_PARAMETER_LABELS: Record<string, string> = {
  "national id": "National ID / Aadhar Card / Emirates ID / SSN",
  "aadhar": "National ID / Aadhar Card / Emirates ID / SSN",
  "emirates id": "National ID / Aadhar Card / Emirates ID / SSN",
  "ssn": "National ID / Aadhar Card / Emirates ID / SSN",
  "passport no": "Passport No",
  passport: "Passport No",
  pan: "Tax ID / PAN",
  "tax id": "Tax ID / PAN",
  email: "Email Address",
  "email address": "Email Address",
  mobile: "Mobile Number",
  "mobile number": "Mobile Number",
  "contact number": "Contact Number",
  "driving license": "Driving License",
  dl: "Driving License",
  "date of birth": "Date of Birth",
  dob: "Date of Birth",
  crn: "Corporate Registration Number",
  "corporate registration number": "Corporate Registration Number",
  "imei/imsi": "IMEI Number / IMSI Number",
  imei: "IMEI Number / IMSI Number",
  imsi: "IMEI Number / IMSI Number",
  "ip/mac": "IP / Mac Address",
  "ip / mac address": "IP / Mac Address",
};

function normalizeToken(value: string): string {
  return value.trim().toLowerCase();
}

function resolveUiParameterLabel(raw: string): string {
  const token = normalizeToken(raw);
  if (UI_PARAMETER_LABELS[token]) {
    return UI_PARAMETER_LABELS[token];
  }
  for (const [key, label] of Object.entries(UI_PARAMETER_LABELS)) {
    if (token.includes(key) || key.includes(token)) {
      return label;
    }
  }
  return raw.trim();
}

const ALL_MATCH_PARAMETERS = [
  "Date of Birth",
  "Passport No",
  "Tax ID / PAN",
  "National ID / Aadhar Card / Emirates ID / SSN",
  "Email Address",
  "Mobile Number",
  "Contact Number",
  "Driving License",
  "Corporate Registration Number",
  "IMEI Number / IMSI Number",
  "IP / Mac Address",
];

function isNonParameterTestData(td: string): boolean {
  return /^(multiple parameters|multiple matching attributes|multiple attributes|multiple duplicate datasets|known duplicate dataset|large result dataset|unique customer dataset|all available parameters|n\/a|na|none|all\s+\d+\s+parameters)$/i.test(td.trim());
}

function isAllAvailableParametersTestData(row: DdsExcelRow): boolean {
  return /^all available parameters$/i.test(row.testData.trim());
}

function isUniqueDatasetTestData(row: DdsExcelRow): boolean {
  return /unique customer dataset|unique dataset|non-matching dataset|no duplicate dataset/i.test(rowBlob(row));
}

function needsLargeDatasetResults(row: DdsExcelRow): boolean {
  return /large result dataset|large duplicate|multiple pages|pagination|high volume|large duplicate cluster/i.test(rowBlob(row));
}

function resolveSingleParameterFromTestData(row: DdsExcelRow): string | null {
  const td = row.testData.trim();
  if (!td || isNonParameterTestData(td) || isUniqueDatasetTestData(row) || /\+/.test(td) || /=/.test(td)) {
    return null;
  }
  if (/^DOB$/i.test(td)) {
    return "Date of Birth";
  }
  const fromRow = resolveMatchParametersFromRow(row);
  if (fromRow.length === 1) {
    return fromRow[0];
  }
  return null;
}

function appendSelectParametersFromTestData(steps: string[], row: DdsExcelRow, keepOpen = false): void {
  const params = resolveMatchParametersFromRow(row);
  const toSelect = params.length > 0
    ? params
    : [inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No"].filter(Boolean) as string[];
  for (const param of toSelect) {
    pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}'${keepOpen ? ", { keepOpen: true }" : ""})`);
  }
  if (keepOpen && toSelect.length > 0) {
    pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
  }
}

const WORD_NUMBER_COUNT: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
};

function isNaTestData(row: DdsExcelRow): boolean {
  return isNonParameterTestData(row.testData.trim());
}

function appendSelectNParameters(steps: string[], row: DdsExcelRow, count: number): void {
  const params = resolveMatchParametersFromRow(row);
  const defaults = [
    "Date of Birth",
    "Passport No",
    "Tax ID / PAN",
    "Mobile Number",
    "Email Address",
    "Contact Number",
    "Driving License",
  ];
  const toSelect = params.length > 0 ? params.slice(0, count) : defaults.slice(0, count);
  pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
  for (const param of toSelect) {
    pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}', { keepOpen: true })`);
  }
  pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
}

function stepsAlreadySelectParameters(row: DdsExcelRow): boolean {
  return parseNumberedSteps(row.testSteps).some((s) =>
    /select\s+\d+\s+parameters?/i.test(s)
    || /select\s+(one|two|three|four|five|six|seven|eight|nine|ten|eleven)\s+parameters?/i.test(s)
    || stepMatches(s, "select parameters sequentially", "select sequentially", "select all", "select all parameters", "select all available", "select parameter", "select one parameter", "select matching", "choose parameter"),
  );
}

function needsPreconditionParameterSetup(row: DdsExcelRow): boolean {
  const pre = row.preconditions.toLowerCase();
  if (/single tag exists/i.test(pre)) {
    return resolveMatchParametersFromRow(row).length > 0;
  }
  if (/multiple tags exist/i.test(pre)) {
    return !stepsAlreadySelectParameters(row) && resolveMatchParametersFromRow(row).length > 0;
  }
  return false;
}

function resolveMatchParametersFromRow(row: DdsExcelRow): string[] {
  const td = row.testData.trim();
  if (!td || isNonParameterTestData(td)) {
    return [];
  }
  if (/^cust\d/i.test(td) && !/[+]/.test(td)) {
    return [];
  }
  if (/[+]/.test(td)) {
    return td.split(/\s*\+\s*/).map((part) => resolveUiParameterLabel(part.trim())).filter((part) => !/^cust/i.test(part));
  }
  if (td.includes(",") && /=/.test(td)) {
    return [];
  }
  if (td.includes(",")) {
    return td.split(",").map((part) => resolveUiParameterLabel(part.trim())).filter(Boolean);
  }
  if (/^DOB$/i.test(td)) {
    return ["Date of Birth"];
  }
  if (/^DOB,|^DOB$|passport|pan|national|email|mobile|contact|driving|crn|imei|imsi|ip/i.test(td) && td.length < 40) {
    return [resolveUiParameterLabel(td)];
  }
  if (/passport no|date of birth|national id|tax id|mobile number|email address|contact number|driving license|corporate registration|imei|ip \/ mac/i.test(td)) {
    return [resolveUiParameterLabel(td)];
  }
  return [];
}

function inferParameterFromSubModule(subModule: string): string | null {
  const sm = subModule.toLowerCase();
  if (sm.includes("passport matching")) return "Passport No";
  if (sm.includes("email matching")) return "Email Address";
  if (sm.includes("mobile matching")) return "Mobile Number";
  if (sm.includes("contact number matching")) return "Contact Number";
  if (sm.includes("national id matching") || sm.includes("aadhar")) return "National ID / Aadhar Card / Emirates ID / SSN";
  if (sm.includes("pan matching") || sm.includes("tax id matching")) return "Tax ID / PAN";
  if (sm.includes("dob matching") || sm.includes("date of birth matching")) return "Date of Birth";
  if (sm.includes("driving license matching")) return "Driving License";
  if (sm.includes("crn matching") || sm.includes("corporate registration")) return "Corporate Registration Number";
  if (sm.includes("ip/mac matching") || sm.includes("ip / mac")) return "IP / Mac Address";
  if (sm.includes("imei") || sm.includes("imsi")) return "IMEI Number / IMSI Number";
  return null;
}

function inferMatchParameter(row: DdsExcelRow): string | null {
  const fromSubModule = inferParameterFromSubModule(row.subModule);
  if (fromSubModule) {
    return fromSubModule;
  }
  const fromData = resolveMatchParametersFromRow(row);
  if (fromData.length === 1) {
    return fromData[0];
  }
  const blob = rowBlob(row);
  const map: Array<[RegExp, string]> = [
    [/national id|aadhar|emirates id|ssn\b/, "National ID / Aadhar Card / Emirates ID / SSN"],
    [/passport/, "Passport No"],
    [/pan\b|tax id|permanent account/, "Tax ID / PAN"],
    [/email address|email\b/, "Email Address"],
    [/mobile number|mobile\b|phone/, "Mobile Number"],
    [/contact number/, "Contact Number"],
    [/driving license|dl\b/, "Driving License"],
    [/dob|date of birth/, "Date of Birth"],
    [/crn\b|corporate registration/, "Corporate Registration Number"],
    [/ip\/mac|ip address|mac address/, "IP / Mac Address"],
    [/imei|imsi/, "IMEI Number / IMSI Number"],
  ];
  for (const [re, label] of map) {
    if (re.test(blob)) {
      return label;
    }
  }
  return null;
}

function resolveSearchKeyword(row: DdsExcelRow): string {
  const td = row.testData.trim();
  if (isNonParameterTestData(td)) {
    const param = inferMatchParameter(row);
    return param ? param.split("/")[0].trim() : "Passport";
  }
  if (td && td.length <= 20 && !td.includes("customer") && !/dataset|group|user|scenario/i.test(td)) {
    return td;
  }
  const param = inferMatchParameter(row);
  return param ? param.split("/")[0].trim() : "Passport";
}

function resolveCustomerId(row: DdsExcelRow): string {
  const blob = rowBlob(row);
  const td = row.testData.trim();
  if (/unique customer dataset|no duplicate dataset|unique dataset/i.test(td + blob)) {
    return "UNIQUE999";
  }
  if (/@|\.com\b|\.net\b/i.test(td) && !/,|\s+vs\s+/i.test(td)) {
    return td;
  }
  if (/\s+vs\s+|,/i.test(td) && !/group|parameter|dataset/i.test(td.toLowerCase())) {
    return td.split(/\s+vs\s+|,/)[0].trim();
  }
  if (/^blank$|^empty$/i.test(td) || /leave customer id blank|leave customer id empty/i.test(row.testSteps.toLowerCase())) {
    return "";
  }
  if (/^invalid/i.test(td) || /\binvalid customer id\b|\bnon-existent customer\b/i.test(blob)) {
    return "INVALID999";
  }
  if (/cust10001|cust-10001/i.test(row.testData + blob)) {
    return "CUST10001";
  }
  if (/cust12345/i.test(row.testData + blob)) {
    return "CUST12345";
  }
  return "CUST10001";
}

function needsCustomerIdForReport(row: DdsExcelRow): boolean {
  const blob = rowBlob(row);
  return /customer id|cust\d|enter customer|input customer|provide customer/i.test(blob)
    && !/unique customer dataset|no duplicate|without customer id|leave customer id blank/i.test(blob);
}

function resolveTagToRemove(row: DdsExcelRow): string {
  const params = resolveMatchParametersFromRow(row);
  return params[0] || inferMatchParameter(row) || "Date of Birth";
}

function resolveRemainingTagsAfterRemoval(row: DdsExcelRow): string[] {
  const params = resolveMatchParametersFromRow(row);
  return params.length > 1 ? params.slice(1) : [];
}

function isReviewOrObserveStep(step: string): boolean {
  return /^(review|observe|inspect|note|count|wait for|validate|check)\b/i.test(step.trim())
    && !/generate report|generate de-dup|click generate/i.test(step);
}

function selectParametersFromRowSteps(steps: string[], row: DdsExcelRow, keepOpen = true): void {
  const params = resolveMatchParametersFromRow(row);
  for (const param of params) {
    pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}'${keepOpen ? ", { keepOpen: true }" : ""})`);
  }
  if (keepOpen && params.length > 0) {
    pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
  }
}

function isTagManagementRow(row: DdsExcelRow): boolean {
  return /tag management/i.test(row.subModule);
}

function isMatchingSuiteRow(row: DdsExcelRow): boolean {
  return /\bmatching\b/i.test(row.subModule) && !/multi-parameter matching/i.test(row.subModule);
}

function isModalCloseContext(row: DdsExcelRow): boolean {
  return /modal close|compare modal close/i.test(row.subModule);
}

function isResultsContext(row: DdsExcelRow): boolean {
  const sm = row.subModule.toLowerCase();
  if (isTagManagementRow(row)) {
    return false;
  }
  return /results grid|pagination|compare modal|export|customer profile comparison|report regeneration|data display|matched field|missing data|empty state|results summary|results visibility|group integrity|audit trail|data privacy|masking|comparison data|export data|group validation|match score|aml edge|multi-parameter investigation|no match workflow|aml business/i.test(sm + assertionBlob(row));
}

function isEmptyParameterSearchRow(row: DdsExcelRow): boolean {
  return /no parameters should be displayed|xyz123|invalid text|search invalid|no matching results/i.test(assertionBlob(row));
}

function isEmptyResultsRow(row: DdsExcelRow): boolean {
  const ac = assertionBlob(row);
  if (/duplicate report request|duplicate processing request|duplicate requests should be prevented|prevent duplicate processing/i.test(ac)) {
    return false;
  }
  return /no duplicate records|no duplicate|no records found|no match|no results|empty state|table body remains empty|zero results|no-duplicate-found|appropriate no-duplicate|unique customer dataset|should not be grouped|not be grouped together|not grouped together|does not create duplicate groups|do not create duplicate groups|blank .* does not create|without creating duplicate groups|no duplicate group is generated|not be grouped as duplicates|should not appear in same duplicate group/i.test(ac)
    && !isEmptyParameterSearchRow(row)
    && !expectsMatchParameterValidation(row);
}

function needsDedupResultsData(row: DdsExcelRow): boolean {
  if (isTagManagementRow(row) || isMatchingSuiteRow(row) || isMatchScoreReportRow(row) || !isResultsContext(row) || isEmptyResultsRow(row)) {
    return false;
  }
  if (/known duplicate dataset|large result dataset|multiple duplicate datasets/i.test(row.testData.trim())) {
    return true;
  }
  return /results grid|duplicate records|report results|compare modal|pagination|export|results summary|group count|record count|matched field|group integrity|group validation|data display rules|comparison|duplicate group|multi-parameter investigation|cross-check displayed customer|cross-check values|note report data/i.test(assertionBlob(row));
}

function isMatchScoreReportRow(row: DdsExcelRow): boolean {
  return /match score & aml edge/i.test(row.subModule)
    && /select.*match parameter|select.*parameters|select multiple/i.test(row.testSteps.toLowerCase())
    && !isEmptyResultsRow(row);
}

function resolveMatchScoreParameterCount(row: DdsExcelRow): number {
  const td = row.testData.trim().toLowerCase();
  const steps = row.testSteps.toLowerCase();
  if (/all parameters match/i.test(td)) {
    return ALL_MATCH_PARAMETERS.length;
  }
  const ratio = td.match(/(\d+)\s*\/\s*(\d+)/);
  if (ratio) {
    return parseInt(ratio[2], 10);
  }
  const outOf = td.match(/(\d+)\s+match(?:es)?\s+out\s+of\s+(\d+)/i);
  if (outOf) {
    return parseInt(outOf[2], 10);
  }
  const wordMatch = steps.match(/select\s+(one|two|three|four|five|six|seven|eight|nine|ten|eleven)\s+match/i);
  if (wordMatch) {
    return WORD_NUMBER_COUNT[wordMatch[1].toLowerCase()] ?? 1;
  }
  const numMatch = steps.match(/select\s+(\d+)\s+match/i);
  if (numMatch) {
    return parseInt(numMatch[1], 10);
  }
  if (/select multiple/i.test(steps)) {
    return 3;
  }
  return 1;
}

function needsMatchScoreReportFlow(row: DdsExcelRow): boolean {
  return isMatchScoreReportRow(row);
}

function needsMatchingReportFlow(row: DdsExcelRow): boolean {
  return isMatchingSuiteRow(row) && !isEmptyResultsRow(row);
}

function needsMultiParameterReportFlow(row: DdsExcelRow): boolean {
  return /multi-parameter matching/i.test(row.subModule) && !isEmptyResultsRow(row);
}

function isExportFailureContext(ac: string): boolean {
  return /export failure|download fail|export error|unable to export|export failed|download error/i.test(ac);
}

function isAuthDeniedScenario(row: DdsExcelRow): boolean {
  const blob = assertionBlob(row);
  return /unauthorized|access denied|without permission|not authorized|restricted role|data visibility restriction|unauthenticated|cannot bypass|cannot access/.test(blob)
    && !isPositiveAuthorizedContext(row);
}

function isPositiveAuthorizedContext(row: DdsExcelRow): boolean {
  return /authorized user|authorized aml analyst|authorized analyst|compliance analyst|compliance officer|view permission|valid module url|known user account|admin user|test user/i.test(assertionBlob(row));
}

function isApiFailureRow(row: DdsExcelRow): boolean {
  return /api failure|network error|timeout|report failure|export failure|service unavailable|500 error|failure simulation/i.test(assertionBlob(row));
}

function isNavigationOnlyRow(row: DdsExcelRow): boolean {
  return /navigation & access|navigation and access/i.test(row.subModule);
}

function expectsCustomerIdValidation(row: DdsExcelRow): boolean {
  const ac = assertionBlob(row);
  return /customer id/.test(ac) && /validation|mandatory|required|invalid|blank|empty|error message|field error|spaces only|only spaces/i.test(ac) && !/without errors|no errors|without requiring customer id|leave customer id blank|no-record-found|validation\/no-record-found|trim|leading.*trailing/i.test(ac) && !expectsInvalidCustomerIdHandling(row);
}

function expectsInvalidCustomerIdHandling(row: DdsExcelRow): boolean {
  const ac = assertionBlob(row);
  return /\binvalid customer id\b|\binvalid999\b|no-record-found|validation\/no-record-found|non-existent customer/i.test(ac);
}

function expectsMatchParameterValidation(row: DdsExcelRow): boolean {
  const steps = row.testSteps.toLowerCase();
  const ac = assertionBlob(row);
  return /leave match parameter blank|do not select any match parameter|mandatory match parameter|not generated when mandatory match parameter|match parameter selection is mandatory/i.test(`${steps} ${ac}`)
    || (/prevent report generation|mandatory validation message/i.test(ac) && /leave match parameter blank|do not select any match parameter/i.test(steps));
}

function numberedOpensDropdown(row: DdsExcelRow): boolean {
  return parseNumberedSteps(row.testSteps).some((s) =>
    stepMatches(s, "open dropdown", "click match parameter", "open match parameter", "dropdown trigger", "parameter dropdown"),
  );
}

function shouldSkipSetupParameterSelection(row: DdsExcelRow): boolean {
  return expectsMatchParameterValidation(row)
    || /do not select any match parameter|leave match parameter blank/i.test(row.testSteps.toLowerCase());
}

function numberedGeneratesReport(row: DdsExcelRow): boolean {
  return parseNumberedSteps(row.testSteps).some((s) =>
    stepMatches(s, "generate report", "click generate", "run report", "generate duplicate", "generate de-dup"),
  );
}

const OPEN = "await ddsPage.openDedupScreeningDirect(testData.baseUrl)";

export function buildExcelSetupActions(row: DdsExcelRow): string[] {
  const steps: string[] = [];
  const blob = rowBlob(row);

  if (isEmptyResultsRow(row) || isUniqueDatasetTestData(row)) {
    pushUnique(steps, "await ddsPage.mockEmptyDuplicateResults()");
  } else if (expectsInvalidCustomerIdHandling(row)) {
    pushUnique(steps, "await ddsPage.mockEmptyDuplicateResults()");
  } else if (needsMatchScoreReportFlow(row)) {
    const selected = resolveMatchScoreParameterCount(row);
    const matched = /all parameters match/i.test(row.testData.trim().toLowerCase()) ? selected : Math.max(1, Math.min(selected, 2));
    pushUnique(steps, `await ddsPage.seedMatchScoreResults(${selected}, ${matched})`);
  } else if (needsLargeDatasetResults(row)) {
    pushUnique(steps, "await ddsPage.seedLargeDuplicateResults()");
  } else if (needsMultiParameterReportFlow(row)) {
    const params = resolveMatchParametersFromRow(row);
    const seedParams = params.length > 0 ? params : ["Date of Birth", "Passport No", "Tax ID / PAN"];
    pushUnique(steps, `await ddsPage.seedDuplicateReportResults([${seedParams.map((p) => `'${escapeStr(p)}'`).join(", ")}])`);
  } else if (needsMatchingReportFlow(row) || needsDedupResultsData(row)) {
    const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
    const params = resolveMatchParametersFromRow(row);
    const seedParams = params.length > 0 ? params : [param];
    pushUnique(steps, `await ddsPage.seedDuplicateReportResults([${seedParams.map((p) => `'${escapeStr(p)}'`).join(", ")}])`);
  }

  if (isApiFailureRow(row)) {
    pushUnique(steps, "await ddsPage.mockDedupReportApiFailure()");
  }

  if (isAuthDeniedScenario(row)) {
    pushUnique(steps, "await ddsPage.mockUnauthorized()");
  }

  if (stepMatches(blob, "sidebar", "navigation menu", "left navigation") && !blob.includes("direct url")) {
    pushUnique(steps, OPEN);
    pushUnique(steps, "await ddsPage.openDedupScreeningFromSidebar()");
  } else {
    pushUnique(steps, OPEN);
  }

  if (needsDedupResultsData(row)) {
    if (needsLargeDatasetResults(row)) {
      pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
      pushUnique(steps, "await ddsPage.generateLargeDuplicateReport()");
    } else {
      pushUnique(steps, "await ddsPage.ensureDedupResultsAvailable()");
    }
    return steps;
  }

  if (needsMatchingReportFlow(row)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
    const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
    pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    if (needsCustomerIdForReport(row)) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
    }
    pushUnique(steps, "await ddsPage.clickGenerateReport()");
    return steps;
  }

  if (needsMatchScoreReportFlow(row)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
    const count = resolveMatchScoreParameterCount(row);
    if (count >= ALL_MATCH_PARAMETERS.length) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, "await ddsPage.selectAllMatchParameters({ keepOpen: true })");
    } else {
      appendSelectNParameters(steps, row, count);
    }
    pushUnique(steps, "await ddsPage.clickGenerateReport()");
    return steps;
  }

  if (needsMultiParameterReportFlow(row)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
    const params = resolveMatchParametersFromRow(row);
    const defaults = params.length > 0 ? params : ["Date of Birth", "Passport No"];
    for (const param of defaults) {
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}', { keepOpen: true })`);
    }
    pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
    pushUnique(steps, "await ddsPage.fillCustomerId('CUST10001')");
    pushUnique(steps, "await ddsPage.clickGenerateReport()");
    return steps;
  }

  if (!isResultsContext(row) || /generate report|match parameter|customer id|clear filter|search filter|dropdown|parameter selection|match parameter search|match parameter dropdown|customer id validation|report processing/i.test(blob)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
  }

  const reportParameter = resolveSingleParameterFromTestData(row) || (/report processing|clear filters/i.test(row.subModule) ? inferMatchParameter(row) : null);
  if (reportParameter && !shouldSkipSetupParameterSelection(row) && !numberedGeneratesReport(row)) {
    pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(reportParameter)}')`);
  }

  if (isUniqueDatasetTestData(row) && !shouldSkipSetupParameterSelection(row)) {
    pushUnique(steps, "await ddsPage.fillCustomerId('UNIQUE999')");
  }

  if (needsPreconditionParameterSetup(row)) {
    const tagParams = resolveMatchParametersFromRow(row);
    if (tagParams.length > 0) {
      pushUnique(steps, `await ddsPage.seedPreconditionMatchParameters([${tagParams.map((p) => `'${escapeStr(p)}'`).join(", ")}])`);
    }
  }

  if (isMatchingSuiteRow(row) && isEmptyResultsRow(row)) {
    pushUnique(steps, "await ddsPage.mockEmptyDuplicateResults()");
    pushUnique(steps, "await ddsPage.fillCustomerId('UNIQUE999')");
  }

  const params = resolveMatchParametersFromRow(row);
  if (!shouldSkipSetupParameterSelection(row) && params.length > 0 && /matching|parameter|multi-parameter|select/.test(blob) && !numberedOpensDropdown(row) && !isResultsContext(row) && !isTagManagementRow(row)) {
    for (const param of params) {
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    }
  } else if (!shouldSkipSetupParameterSelection(row)) {
    const param = inferMatchParameter(row);
    if (param && /matching|parameter selection|single match parameter|select matching parameter/i.test(blob) && !numberedOpensDropdown(row) && !isResultsContext(row)) {
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    }
  }

  if (/customer id/.test(blob) && /enter|input|provide|valid|fill|type/.test(blob) && !/leave customer id blank|leave customer id empty|enter valid customer id/i.test(blob + row.testSteps.toLowerCase()) && !needsDedupResultsData(row)) {
    const customerId = resolveCustomerId(row);
    if (customerId) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(customerId)}')`);
    }
  }

  return steps;
}

export function buildExcelStepActions(row: DdsExcelRow): string[] {
  const steps: string[] = [];
  const numbered = parseNumberedSteps(row.testSteps);
  const params = resolveMatchParametersFromRow(row);

  for (const s of numbered) {
    if (stepMatches(s, "login", "log in", "logged in")) {
      continue;
    }
    if (stepMatches(s, "navigate to sanction", "sanction screening section", "sanctions screening")) {
      pushUnique(steps, "await ddsPage.openDedupScreeningFromSidebar()");
      continue;
    }
    if (stepMatches(s, "click de-dup", "de-dup screening menu", "dedup screening", "navigate to de-dup", "navigate to dedup")) {
      pushUnique(steps, "await ddsPage.openDedupScreeningFromSidebar()");
      continue;
    }
    if (stepMatches(s, "open direct url", "direct url", "enter url", "open url directly")) {
      pushUnique(steps, OPEN);
      pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
      continue;
    }
    if (stepMatches(s, "open page", "open de-dup", "open dedup", "open page without generating", "without generating report", "without generating")) {
      continue;
    }
    if (isReviewOrObserveStep(s)) {
      continue;
    }
    if (stepMatches(s, "close dropdown")) {
      pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
      continue;
    }
    if (stepMatches(s, "navigate to final page", "go to final page", "go to last page")) {
      pushUnique(steps, "await ddsPage.goToLastPage()");
      continue;
    }
    if (stepMatches(s, "click browser back", "browser back")) {
      pushUnique(steps, "await ddsPage.goBackInBrowser()");
      continue;
    }
    if (stepMatches(s, "click browser forward", "browser forward")) {
      pushUnique(steps, "await ddsPage.goForwardInBrowser()");
      continue;
    }
    if (stepMatches(s, "scroll to footer")) {
      pushUnique(steps, "await ddsPage.scrollToFooter()");
      continue;
    }
    if (stepMatches(s, "leave customer id blank", "leave customer id empty")) {
      continue;
    }
    if (/do not select any match parameter|do not select match parameter|leave match parameter blank|leave parameter blank/i.test(s)) {
      continue;
    }
    if (stepMatches(s, "paste into field", "paste into")) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
      continue;
    }
    if (stepMatches(s, "trigger report generation failure", "trigger failure", "trigger report failure")) {
      pushUnique(steps, "await ddsPage.mockDedupReportApiFailure()");
      pushUnique(steps, "await ddsPage.clickGenerateReportWithoutResultsPoll()");
      continue;
    }
    if (stepMatches(s, "click retry")) {
      pushUnique(steps, "await ddsPage.clickRetryAfterFailure()");
      continue;
    }
    if (stepMatches(s, "wait for generation", "wait for report completion", "allow successful response")) {
      continue;
    }
    if (stepMatches(s, "open another aml module", "another aml module")) {
      pushUnique(steps, "await ddsPage.openAnotherAmlModule()");
      continue;
    }
    if (stepMatches(s, "navigate back from de-dup", "navigate back from dedup")) {
      pushUnique(steps, "await ddsPage.goBackInBrowser()");
      continue;
    }
    if (stepMatches(s, "navigate away", "return multiple times")) {
      pushUnique(steps, "await ddsPage.openAnotherAmlModule()");
      pushUnique(steps, "await ddsPage.openDedupScreeningFromSidebar()");
      continue;
    }
    if (/repeat.*multiple times|repeat open and close|toggle functionality|open and close actions/i.test(s)) {
      pushUnique(steps, "await ddsPage.repeatMatchParameterDropdownToggle(3)");
      continue;
    }
    if (/copy module url|verify filtered results|cross-check|verify groups|verify download|scroll through comparison|perform activities|access audit logs|leave remaining parameters unselected/i.test(s)) {
      continue;
    }
    if (/click date of birth checkbox again|click checkbox again/i.test(s)) {
      pushUnique(steps, "await ddsPage.toggleMatchParameterCheckbox('Date of Birth')");
      continue;
    }
    if (/generate report with multiple pages|report with multiple pages|large result dataset/i.test(s)) {
      pushUnique(steps, "await ddsPage.generateLargeDuplicateReport()");
      continue;
    }
    if (/generate large duplicate report|generate large report/i.test(s)) {
      pushUnique(steps, "await ddsPage.generateLargeDuplicateReport()");
      continue;
    }
    if (/generate no-result report|generate no result report/i.test(s)) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      continue;
    }
    if (/modify parameters/i.test(s)) {
      pushUnique(steps, "await ddsPage.closeCompareModal()");
      pushUnique(steps, "await ddsPage.clickClearFilters()");
      appendSelectParametersFromTestData(steps, row);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      continue;
    }
    if (/click specific page number|navigate to page \d/i.test(s)) {
      pushUnique(steps, "await ddsPage.clickPaginationPage(2)");
      continue;
    }
    if (/navigate across pages/i.test(s)) {
      pushUnique(steps, "await ddsPage.goToNextPage()");
      continue;
    }
    if (/open first page results|go to first page/i.test(s)) {
      pushUnique(steps, "await ddsPage.goToFirstPage()");
      continue;
    }
    if (/open duplicate group generated through multiple parameters|reopen modal/i.test(s)) {
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/attempt to access de-dup|access de-dup screening url directly|access module url directly/i.test(s)) {
      pushUnique(steps, "await ddsPage.mockUnauthorized()");
      pushUnique(steps, OPEN);
      continue;
    }
    if (/repeat for csv and pdf/i.test(s)) {
      pushUnique(steps, "await ddsPage.clickExportReport('CSV')");
      pushUnique(steps, "await ddsPage.clickExportReport('PDF')");
      continue;
    }
    if (/clear search text|clear search field|clear search completely/i.test(s)) {
      pushUnique(steps, "await ddsPage.clearMatchParameterSearch()");
      continue;
    }
    if (/do not generate report|without generating report|do not generate/i.test(s)) {
      continue;
    }
    if (/leading.*trailing spaces|spaces.*customer id/i.test(s) && !/only spaces|spaces only/i.test(s)) {
      const id = resolveCustomerId(row);
      pushUnique(steps, `await ddsPage.fillCustomerId('  ${escapeStr(id)}  ')`);
      const param = resolveSingleParameterFromTestData(row) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      continue;
    }
    if (/only spaces|spaces only/i.test(s)) {
      pushUnique(steps, "await ddsPage.fillCustomerId('   ')");
      const param = resolveSingleParameterFromTestData(row) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
      continue;
    }
    if (/rapidly click generate report|click generate report button multiple times|multiple rapid clicks/i.test(s)) {
      const param = resolveSingleParameterFromTestData(row) || inferMatchParameter(row) || "Date of Birth";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReportMultipleTimes()");
      continue;
    }
    if (/select match parameters$/i.test(s.trim()) || /select match parameter$/i.test(s.trim()) && params.length > 0) {
      appendSelectParametersFromTestData(steps, row, params.length > 1);
      continue;
    }
    if (/select each parameter|each parameter one by one|each parameter individually|select each parameter one by one/i.test(s)) {
      pushUnique(steps, "await ddsPage.selectEachParameterOneByOne()");
      continue;
    }
    if (/perform second investigation|repeat investigation/i.test(s)) {
      pushUnique(steps, "await ddsPage.closeCompareModal()");
      pushUnique(steps, "await ddsPage.clickClearFilters()");
      appendSelectParametersFromTestData(steps, row);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/generate another report|generate new report/i.test(s)) {
      pushUnique(steps, "await ddsPage.closeCompareModal()");
      pushUnique(steps, "await ddsPage.clickClearFilters()");
      appendSelectParametersFromTestData(steps, row);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      continue;
    }
    if (/complete investigation|perform investigation workflow|perform investigation$/i.test(s)) {
      appendSelectParametersFromTestData(steps, row);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/perform investigation again|investigate again/i.test(s)) {
      pushUnique(steps, "await ddsPage.closeCompareModal()");
      pushUnique(steps, "await ddsPage.clickClearFilters()");
      appendSelectParametersFromTestData(steps, row);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/use keyboard tab|keyboard tab key|tab key to navigate/i.test(s)) {
      pushUnique(steps, "await ddsPage.navigateControlsWithTabKey()");
      continue;
    }
    if (/perform pan investigation/i.test(s)) {
      pushUnique(steps, "await ddsPage.selectMatchParameter('Tax ID / PAN')");
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/perform passport investigation/i.test(s)) {
      pushUnique(steps, "await ddsPage.selectMatchParameter('Passport No')");
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/perform national id investigation/i.test(s)) {
      pushUnique(steps, "await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN')");
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/perform pan investigation|perform passport investigation|perform national id investigation|perform multi-parameter investigation|perform de-dup screening actions|attempt restricted operation|attempt restricted action|generate\/view report|open report|access de-dup screening url|enter de-dup screening url directly|navigate to different pages|perform multiple comparisons|navigate pages/i.test(s)) {
      const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
      continue;
    }
    if (/simulate network interruption|trigger export failure/i.test(s)) {
      pushUnique(steps, "await ddsPage.mockDedupReportApiFailure()");
      continue;
    }
    if (/modify user role|change user permission/i.test(s)) {
      pushUnique(steps, "await ddsPage.mockUnauthorized()");
      continue;
    }
    if (stepMatches(s, "click match parameter", "open dropdown", "open match parameter", "dropdown trigger", "parameter dropdown")) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
    } else if (stepMatches(s, "enter characters gradually", "characters gradually", "gradually in search")) {
      const keywords = row.testData.includes(",") ? row.testData.split(",").map((k) => k.trim()) : [resolveSearchKeyword(row)];
      for (const keyword of keywords.filter(Boolean)) {
        pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
        pushUnique(steps, `await ddsPage.searchMatchParameter('${escapeStr(keyword)}')`);
      }
    } else if (stepMatches(s, "enter partial keyword", "partial keyword", "search using partial keyword", "search parameter using", "search invalid text", "search using", "type in search")) {
      const keyword = resolveSearchKeyword(row);
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, `await ddsPage.searchMatchParameter('${escapeStr(keyword)}')`);
    } else if (stepMatches(s, "search", "enter exact", "enter parameter", "type in")) {
      const keyword = resolveSearchKeyword(row);
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, `await ddsPage.searchMatchParameter('${escapeStr(keyword)}')`);
    } else if (/select\s+(one|two|three|four|five|six|seven|eight|nine|ten|eleven)\s+parameters?/i.test(s)) {
      const wordMatch = s.match(/select\s+(one|two|three|four|five|six|seven|eight|nine|ten|eleven)\s+parameters?/i);
      const count = wordMatch ? WORD_NUMBER_COUNT[wordMatch[1].toLowerCase()] : 1;
      if (count === 1 && /single tag exists/i.test(row.preconditions)) {
        continue;
      }
      appendSelectNParameters(steps, row, count);
    } else if (/select\s+\d+\s+parameters?/i.test(s)) {
      const countMatch = s.match(/select\s+(\d+)\s+parameters?/i);
      const count = countMatch ? parseInt(countMatch[1], 10) : params.length;
      appendSelectNParameters(steps, row, count);
    } else if (/select\s+all\s+available\s+parameters?/i.test(s)) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, "await ddsPage.selectAllMatchParameters({ keepOpen: true })");
    } else if (stepMatches(s, "select parameters sequentially", "select sequentially")) {
      selectParametersFromRowSteps(steps, row);
    } else if (stepMatches(s, "select all", "select all parameters")) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, "await ddsPage.selectAllMatchParameters({ keepOpen: true })");
    } else if (stepMatches(s, "deselect", "clear selection", "deselect all")) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      pushUnique(steps, "await ddsPage.deselectAllMatchParameters()");
    } else if (stepMatches(s, "select multiple", "select parameters", "select multiple parameters")) {
      pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      for (const param of (params.length > 0 ? params : ["Date of Birth", "Passport No", "Tax ID / PAN"])) {
        pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}', { keepOpen: true })`);
      }
      pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
    } else if (/click close icon.*tag|close icon on.*tag|remove one tag|remove tag/i.test(s) && !/compare|modal/i.test(s)) {
      pushUnique(steps, `await ddsPage.removeParameterTag('${escapeStr(resolveTagToRemove(row))}')`);
    } else if (stepMatches(s, "select at least one", "at least one match parameter", "select one match parameter")) {
      const param = params[0] || inferMatchParameter(row) || inferParameterFromSubModule(row.subModule) || "National ID / Aadhar Card / Emirates ID / SSN";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    } else if (/select\s+"([^"]+)"/i.test(s)) {
      const quoted = s.match(/select\s+"([^"]+)"/i)?.[1] || params[0] || "";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(resolveUiParameterLabel(quoted))}')`);
    } else if (/^select\s+(dob|passport|pan|national|email|mobile|tax|contact|driving|crn|imei|ip)/i.test(s.trim())) {
      const raw = s.replace(/^select\s+/i, "").trim();
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(resolveUiParameterLabel(raw))}')`);
    } else if (/^select\s+match\s+parameter$/i.test(s.trim())) {
      const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    } else if (/select another parameter|another parameter/i.test(s)) {
      const second = params.length > 1 ? params[1] : "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(second)}')`);
    } else if (/^select matching parameter$/i.test(s.trim())) {
      const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    } else if (/^select\s+match\s+parameters?$/i.test(s.trim())) {
      appendSelectParametersFromTestData(steps, row, params.length > 1);
    } else if (/select\s+(.+?)\s+parameter/i.test(s) && !/^select\s+match\s+parameters?$/i.test(s.trim()) && !/do not select/i.test(s)) {
      const match = s.match(/select\s+(.+?)\s+parameter/i);
      const raw = match?.[1]?.trim() || params[0] || inferMatchParameter(row) || "Date of Birth";
      if (/^(each|match)$/i.test(raw)) {
        appendSelectParametersFromTestData(steps, row, params.length > 1);
      } else if (/^(one|two|three|four|five|six|seven|eight|nine|ten|eleven)$/i.test(raw)) {
        appendSelectNParameters(steps, row, WORD_NUMBER_COUNT[raw.toLowerCase()]);
      } else if (/at least one/i.test(raw)) {
        const fallback = params[0] || inferMatchParameter(row) || inferParameterFromSubModule(row.subModule) || "National ID / Aadhar Card / Emirates ID / SSN";
        pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(fallback)}')`);
      } else if (raw.includes(",") || /\band\b/i.test(raw)) {
        const parts = raw.split(/,|\band\b/i).map((part) => resolveUiParameterLabel(part.trim())).filter(Boolean);
        for (const part of parts) {
          pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(part)}', { keepOpen: true })`);
        }
        pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
      } else {
        pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(resolveUiParameterLabel(raw))}')`);
      }
    } else if (stepMatches(s, "select one parameter") && /single tag exists/i.test(row.preconditions)) {
      continue;
    } else if (stepMatches(s, "select one parameter", "select parameter", "choose parameter", "select matching", "tick parameter", "check parameter")) {
      const param = params[0] || inferMatchParameter(row) || "Date of Birth";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
    } else if (stepMatches(s, "enter valid customer id", "enter valid customer", "valid customer id")) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
    } else if (stepMatches(s, "enter customer", "input customer", "provide customer", "customer id field", "customer id")) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
      if (expectsInvalidCustomerIdHandling(row)) {
        pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
      }
    } else if (/generate report using unique|unique customer dataset/i.test(s)) {
      pushUnique(steps, `await ddsPage.fillCustomerId('${escapeStr(resolveCustomerId(row))}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
    } else if (/generate de-dup report containing|generate duplicate report containing/i.test(s)) {
      const param = inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      if (needsCustomerIdForReport(row)) {
        pushUnique(steps, "await ddsPage.fillCustomerId('CUST10001')");
      }
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
    } else if (/generate report with duplicate|report with duplicates|generate report using valid criteria|generate report using valid/i.test(s)) {
      const param = resolveSingleParameterFromTestData(row) || inferMatchParameter(row) || "Date of Birth";
      if (!isEmptyResultsRow(row)) {
        pushUnique(steps, `await ddsPage.seedDuplicateReportResults(['${escapeStr(param)}'])`);
      }
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
    } else if (/run report with no matching|report with no matching|no matching duplicates|using unique customer dataset|using non-matching dataset|using unique dataset/i.test(s)) {
      pushUnique(steps, "await ddsPage.mockEmptyDuplicateResults()");
      const param = inferParameterFromSubModule(row.subModule) || inferMatchParameter(row) || "Passport No";
      pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
      pushUnique(steps, "await ddsPage.fillCustomerId('UNIQUE999')");
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
    } else if (stepMatches(s, "generate report", "click generate", "run report", "generate de-dup", "generate duplicate") && !/do not generate/i.test(s)) {
      if (expectsMatchParameterValidation(row)) {
        pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
      } else if (expectsInvalidCustomerIdHandling(row)) {
        pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
      } else if (expectsCustomerIdValidation(row)) {
        pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
        pushUnique(steps, "await ddsPage.expectCustomerIdValidationFeedback()");
      } else if (/without selecting|no match parameter|missing match parameter|mandatory match parameter|do not select any match parameter/i.test(row.testSteps + row.expectedResult)) {
        pushUnique(steps, "await ddsPage.clickGenerateReportForValidation()");
      } else {
        const param = resolveSingleParameterFromTestData(row);
        if (param && !steps.some((existing) => existing.includes("selectMatchParameter"))) {
          pushUnique(steps, `await ddsPage.selectMatchParameter('${escapeStr(param)}')`);
        }
        pushUnique(steps, "await ddsPage.clickGenerateReport()");
      }
    } else if (stepMatches(s, "clear filter", "reset filter", "click clear")) {
      pushUnique(steps, "await ddsPage.clickClearFilters()");
    } else if (/export.*excel|excel format|export report in excel/i.test(s)) {
      pushUnique(steps, "await ddsPage.clickExportReport('Excel')");
    } else if (/export.*csv|csv format/i.test(s)) {
      pushUnique(steps, "await ddsPage.clickExportReport('CSV')");
    } else if (/export.*pdf|pdf format/i.test(s)) {
      pushUnique(steps, "await ddsPage.clickExportReport('PDF')");
    } else if (stepMatches(s, "export", "download report")) {
      pushUnique(steps, "await ddsPage.clickExportReport('Excel')");
    } else if (stepMatches(s, "compare", "open compare", "launch compare", "comparison modal")) {
      pushUnique(steps, "await ddsPage.openCompareModalFromFirstRow()");
    } else if (stepMatches(s, "press esc", "esc key", "outside click", "click outside", "reopen dropdown")) {
      if (stepMatches(s, "press esc", "esc key")) {
        if (isModalCloseContext(row)) {
          pushUnique(steps, "await ddsPage.closeCompareModalWithEscape()");
        } else {
          pushUnique(steps, "await ddsPage.closeMatchParameterDropdown()");
        }
      } else if (stepMatches(s, "outside click", "click outside")) {
        if (isModalCloseContext(row)) {
          pushUnique(steps, "await ddsPage.closeCompareModalByOutsideClick()");
        } else {
          pushUnique(steps, "await ddsPage.closeMatchParameterDropdownByOutsideClick()");
        }
      }
      if (stepMatches(s, "reopen dropdown")) {
        pushUnique(steps, "await ddsPage.openMatchParameterDropdown()");
      }
    } else if (stepMatches(s, "close modal", "close compare", "dismiss modal") || (stepMatches(s, "click close", "click x", "close icon") && !/tag/i.test(s))) {
      pushUnique(steps, "await ddsPage.closeCompareModal()");
    } else if (stepMatches(s, "click next", "next page")) {
      pushUnique(steps, "await ddsPage.goToNextPage()");
    } else if (stepMatches(s, "click previous", "previous page", "navigate to page 2")) {
      pushUnique(steps, "await ddsPage.goToPreviousPage()");
    } else if (stepMatches(s, "pagination", "page size")) {
      pushUnique(steps, "await ddsPage.expectPaginationVisible()");
    } else if (stepMatches(s, "refresh", "reload", "regenerate")) {
      pushUnique(steps, "await ddsPage.refreshPage()");
      if (stepMatches(s, "regenerate")) {
        pushUnique(steps, "await ddsPage.regenerateReport()");
      }
    } else if (stepMatches(s, "logout", "log out", "session", "idle")) {
      pushUnique(steps, "await ddsPage.performLogoutAndReturn()");
    } else if (stepMatches(s, "generate duplicate report")) {
      pushUnique(steps, "await ddsPage.clickGenerateReport()");
    } else {
      pushUnique(steps, `// TODO: Excel step not mapped — "${escapeStr(s)}"`);
    }
  }

  return steps;
}

export function buildExcelAssertionActions(row: DdsExcelRow): string[] {
  const steps: string[] = [];
  const ac = assertionBlob(row);
  const param = inferMatchParameter(row);

  if (isAuthDeniedScenario(row)) {
    pushUnique(steps, "await ddsPage.expectAccessDenied()");
  }
  if (/de-dup screening page|page should open|module.*open|landing page|page loads|without errors|search filters card|stable during repeated navigation/i.test(ac) && !isAuthDeniedScenario(row)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
  }
  if (/breadcrumb|page title|header|profile information/i.test(ac) && /top bar|header|breadcrumb|title|profile/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectPageHeaderVisible()");
  }
  if (/results section.*hidden|hidden before|before report generation|not.*displayed.*before|results.*not.*visible/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectResultsSectionHidden()");
  }
  if ((isTagManagementRow(row) || (/tag.*displayed|parameter tag|tag.*visible|tag.*generated|tag label|tag is generated|tag is displayed/i.test(ac) && !/group integrity|duplicate group|removed|removal|remove individual|clears parameter selection/i.test(ac))) && !/tag order|removed while remaining|remove individual tag|clears parameter selection|removed parameter should become unchecked|become unchecked|checkbox/i.test(ac)) {
    const tagParams = resolveMatchParametersFromRow(row);
    if (tagParams.length > 0) {
      for (const tagParam of tagParams) {
        pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(tagParam)}')`);
      }
    } else if (param) {
      pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(param)}')`);
    }
  }
  if (/tag order|order reflects|predictable order|consistent.*order|without overlap/i.test(ac)) {
    const tagParams = resolveMatchParametersFromRow(row);
    if (tagParams.length > 1) {
      pushUnique(steps, `await ddsPage.expectParameterTagsInOrder([${tagParams.map((p) => `'${escapeStr(p)}'`).join(", ")}])`);
    }
  }
  if (/tag should be removed|removed while remaining|remove individual tag|removed and selected values section should become empty/i.test(ac)) {
    const removed = resolveTagToRemove(row);
    pushUnique(steps, `await ddsPage.expectParameterTagHidden('${escapeStr(removed)}')`);
    for (const remaining of resolveRemainingTagsAfterRemoval(row)) {
      pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(remaining)}')`);
    }
    if (/selected values section should become empty|clears parameter selection completely/i.test(ac)) {
      pushUnique(steps, "await ddsPage.expectNoParameterTagsVisible()");
    }
  }
  if (/checkbox.*unchecked|become unchecked|removed parameter should become unchecked/i.test(ac)) {
    pushUnique(steps, `await ddsPage.expectParameterCheckboxUnchecked('${escapeStr(resolveTagToRemove(row))}')`);
    for (const remaining of resolveRemainingTagsAfterRemoval(row)) {
      pushUnique(steps, `await ddsPage.expectParameterCheckboxChecked('${escapeStr(remaining)}')`);
    }
  }
  if (/chevron.*default|dropdown is collapsed|collapsed position|dropdown should close|closes immediately|close immediately|without affecting existing selections/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterDropdownClosed()");
  }
  if (/available match parameters|match parameter list/i.test(ac) && (isNaTestData(row) || !row.testData.trim()) && !/all parameters should be selected|all 11 parameters|select all available|match parameters column|results grid/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterDropdownOpen()");
    pushUnique(steps, "await ddsPage.expectDefaultMatchParametersListed()");
  }
  if (/consistently open and close|toggle functionality|without ui issues|open and close actions/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterDropdownClosed()");
  }
  if (/dynamically update|update based on entered text|update while typing/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterDropdownOpen()");
    pushUnique(steps, `await ddsPage.expectMatchParameterOptionVisible('${escapeStr(param || "Passport No")}')`);
  }
  if (/next button should be disabled|disabled or unavailable on last page/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectPaginationNextDisabled()");
  }
  if (/dropdown.*open|parameter.*display|search results dynamically|partial search|exact search|case insensitive|matching parameter should be displayed|parameters containing entered text/i.test(ac) && !isTagManagementRow(row) && !expectsMatchParameterValidation(row) && !isResultsContext(row) && !/chevron|collapsed|closed state|default position|visual indicator.*closed|dropdown should close|closes immediately|available match parameters|match parameter list|display.*match parameters|remain selected after reopening|remain intact after closing|previously selected parameters should remain|dynamically update|update while typing|consistently open and close|toggle functionality|open and close actions|parameter-level matching|grouped customers|duplicate report correctly|match parameters column|results grid|checkbox.*selected|checkboxes are marked/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterDropdownOpen()");
    const td = row.testData.trim();
    if (!isNaTestData(row) && (param || td) && !/no parameters should be displayed|no matching results|invalid text|search invalid|xyz123/i.test(ac) && !td.includes(",") && !isAllAvailableParametersTestData(row)) {
      pushUnique(steps, `await ddsPage.expectMatchParameterOptionVisible('${escapeStr(param || resolveUiParameterLabel(td))}')`);
    }
  }
  if (isAllAvailableParametersTestData(row) && /checkbox|selected state|select all/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectAllParameterCheckboxesChecked()");
  }
  if (isEmptyParameterSearchRow(row)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterSearchEmpty()");
  }
  if (/select all|deselect all|parameter selection|remain selected|remain intact/i.test(ac) && !/tag order|removed|unchecked|empty/i.test(ac) && !expectsMatchParameterValidation(row)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterSelectionState()");
  }
  if (/selected parameter should be successfully selected|all selected parameters should remain selected|both parameters should remain selected/i.test(ac)) {
    const selParams = resolveMatchParametersFromRow(row);
    if (selParams.length > 0) {
      for (const selParam of selParams) {
        pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(selParam)}')`);
      }
    } else if (param) {
      pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(param)}')`);
    }
  }
  if (/all parameters should be selected|all 11 parameters|select all available/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectAllMatchParametersSelected()");
  }
  if (/remain selected after reopening|remain intact after closing|previously selected parameters should remain/i.test(ac)) {
    const selParams = resolveMatchParametersFromRow(row);
    if (selParams.length > 0) {
      for (const selParam of selParams) {
        pushUnique(steps, `await ddsPage.expectParameterTagVisible('${escapeStr(selParam)}')`);
      }
    }
  }
  if (expectsMatchParameterValidation(row)) {
    pushUnique(steps, "await ddsPage.expectMatchParameterValidationFeedback()");
  }
  if (expectsCustomerIdValidation(row) && !expectsMatchParameterValidation(row) && !expectsInvalidCustomerIdHandling(row)) {
    pushUnique(steps, "await ddsPage.expectCustomerIdValidationFeedback()");
  }
  if (expectsInvalidCustomerIdHandling(row)) {
    pushUnique(steps, "await ddsPage.expectInvalidCustomerIdHandled()");
  }
  if (/generating\.\.\.|processing state|processing indicator/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectGeneratingStateVisible()");
  }
  if (/duplicate report request|duplicate processing request|duplicate requests should be prevented|only one report generation request/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectSingleReportRequestProcessed()");
  }
  if (/generate report.*disabled|cannot generate|without selecting|prevent report generation|not generated when mandatory match parameter/i.test(ac) && !/next button|pagination|previous button/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectGenerateReportDisabled()");
  }
  if (/generate report.*enabled|button.*enabled|report generation.*start/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectGenerateReportEnabled()");
  }
  if (/match parameters column|matching attributes responsible for duplicate grouping|parameter-level matching|all matched parameters|parameters responsible for duplicate grouping/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchParametersColumnVisible()");
  }
  if (/results grid|duplicate records|report results|matching records|grid.*display|record count|group count|results summary/i.test(ac) && !isEmptyResultsRow(row)) {
    pushUnique(steps, "await ddsPage.expectResultsGridVisible()");
    if (/group count|record count|results summary/i.test(ac)) {
      pushUnique(steps, "await ddsPage.expectResultsSummaryVisible()");
    }
  }
  if (isEmptyResultsRow(row) || isUniqueDatasetTestData(row)) {
    pushUnique(steps, "await ddsPage.expectEmptyStateVisible()");
  }
  if (/pagination|page navigation|records per page|selected page successfully|load selected page/i.test(ac) && !isNavigationOnlyRow(row)) {
    pushUnique(steps, "await ddsPage.expectPaginationVisible()");
  }
  if (/compare modal|comparison modal|side-by-side|profile comparison/i.test(ac) && !/modal.*close|closes successfully|modal dismissed|closed successfully/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectCompareModalVisible()");
  }
  if (/modal.*close|modal dismissed|modal should close|closes successfully|modal is closed/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectCompareModalClosed()");
  }
  if (/matched field|matching field|highlighted field|field highlight/i.test(ac) && !/menu.*highlight|highlighted as active|active menu/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchedFieldsHighlighted()");
  }
  if (/missing data|blank field|not available|na value/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMissingDataHandled()");
  }
  if (/export|download|excel|csv|pdf|initiates successfully/i.test(ac) && !isExportFailureContext(ac)) {
    pushUnique(steps, "await ddsPage.expectExportActionAvailable()");
    if (/download|generated export|export file|export process|export completes|export initiates|initiate successfully/i.test(ac)) {
      pushUnique(steps, "await ddsPage.expectExportCompleted()");
    }
  }
  if (isExportFailureContext(ac)) {
    pushUnique(steps, "await ddsPage.expectExportFailureHandled()");
  }
  if (/mask|data privacy|masked|partially hidden|sensitive customer data/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectSensitiveDataMasked()");
  }
  if (/audit trail|audit log|activity log/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectAuditTrailRecorded()");
  }
  if (/role based|permission|rbac|authorized role|authorized user can access|view permission/i.test(ac) && isPositiveAuthorizedContext(row)) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
  } else if (/role based|permission|rbac|authorized role/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectRoleBasedAccessEnforced()");
  }
  if (/clear filter|filters reset|fields cleared/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectFiltersCleared()");
  }
  if (/api failure|network error|timeout|report failure|graceful|error message|loading spinner|retry button/i.test(ac) && isApiFailureRow(row)) {
    pushUnique(steps, "await ddsPage.expectApiFailureHandledGracefully()");
  }
  if (/layout|alignment|responsive|ui integrity/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectLayoutStable()");
  }
  if (/group integrity|duplicate group/i.test(ac) && !isTagManagementRow(row) && !isEmptyResultsRow(row)) {
    pushUnique(steps, "await ddsPage.expectDuplicateGroupIntegrity()");
  }
  if (/match score|scoring|threshold|edge case|closed account|cross branch|historical customer/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectMatchScoreDisplayed()");
  }
  if (/consistency|regeneration|same results|repeated multi-parameter|consistent results|data integrity across repeated|investigation workflow maintains/i.test(ac)) {
    pushUnique(steps, "await ddsPage.expectReportConsistencyMaintained()");
  }
  if (steps.length === 0) {
    pushUnique(steps, "await ddsPage.expectDedupScreeningPageLoaded()");
  }

  return steps;
}

export function buildExcelAlignedLogic(row: DdsExcelRow): string {
  const lines: string[] = [];
  let setup = buildExcelSetupActions(row);
  let actions = buildExcelStepActions(row);
  let assertions = buildExcelAssertionActions(row);

  const actionsOpenDropdown = actions.some((s) => s.includes("openMatchParameterDropdown"));
  if (actionsOpenDropdown) {
    setup = setup.filter((s) => !s.includes("selectMatchParameter") || s.includes("seedPreconditionMatchParameters"));
  }

  if (needsDedupResultsData(row) || needsMatchingReportFlow(row) || needsMultiParameterReportFlow(row) || needsMatchScoreReportFlow(row)) {
    actions = actions.filter((s) =>
      !s.includes("openMatchParameterDropdown")
      && !s.includes("selectMatchParameter")
      && !s.includes("clickGenerateReport")
      && !s.includes("runDefaultDedupReport")
      && !s.includes("fillCustomerId"),
    );
  }

  if (setup.some((s) => s.includes("ensureDedupResultsAvailable"))) {
    actions = actions.filter((s) => !s.includes("ensureDedupResultsAvailable"));
    setup = setup.filter((s) => !s.includes("runDefaultDedupReport"));
  }

  if (actions.some((s) => s.includes("selectMatchParameter") || s.includes("selectParametersFromRow"))) {
    setup = setup.filter((s) => !s.includes("selectMatchParameter") || s.includes("seedPreconditionMatchParameters"));
  }

  for (const block of [setup, actions, assertions]) {
    for (const step of block) {
      pushUnique(lines, step);
    }
  }
  return lines.join(";\n    ");
}

export function formatTestTitle(row: DdsExcelRow): string {
  const feature = featureGroup(row.subModule);
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${feature} → ${action}`;
}

export function formatExcelComment(row: DdsExcelRow): string {
  return `// Excel Test Case ID: ${row.id}\n  // Excel Scenario: ${row.taskDescription}`;
}
