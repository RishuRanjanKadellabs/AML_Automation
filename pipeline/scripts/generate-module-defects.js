#!/usr/bin/env node
/**
 * Generate one Excel defect workbook per module from remaining failed
 * execution results (final / post-heal). Clean modules intentionally produce
 * no workbook; optional prune removes stale sheets for modules now green.
 *
 * Passed Test Case IDs are removed from local workbooks and sync payloads
 * (global by TC ID — not module-scoped) via defect-row-prune.cjs.
 *
 * Defect columns (fixed schema):
 * Milestone, Defect ID, Test Case ID, Module, Feature, Assigned To,
 * Summary, Steps to Reproduce, Expected Result, Actual Result,
 * Severity, Priority, Status (dropdown), Environment
 *
 * Severity/Priority: assigned in failureRecords via classify-defect-severity-priority.cjs
 * when this file runs after a test execution report — not on sync, regression, or backfill.
 *
 * Do NOT emit Sub Module, Frontend Developers, or Backend Developers.
 * Feature = actual product feature under test (never tracker alias strings).
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const {
  ROOT,
  absolute,
  arg,
  kebabCase,
  normalizedCases,
  readJson,
  relative,
  unique,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const {
  buildFeatureDeveloperIndex,
  resolveAssignment,
  writeFeatureDeveloperCache,
} = require("./feature-developer-map.cjs");
const {
  classifyDefectSeverityPriority,
} = require("./classify-defect-severity-priority.cjs");
const {
  buildTestCaseMilestoneIndex,
  resolveDefectMilestoneForCase,
  excelMetaMapFromIndex,
} = require("./resolve-defect-milestone.cjs");
const { validateDefectRows } = require("./validate-defect-plain-language.cjs");
const {
  FAILED_STATUSES,
  collectPassedCaseIds,
  prunePassedFromDefectRows,
  assertNoPassedCasesInDefectRows,
} = require("./defect-row-prune.cjs");

const DEFECT_STATUS_OPTIONS = [
  "New",
  "In Progress",
  "Resolved",
  "Reopened",
  "Closed",
];

/** Google Sheets default grid is 1000 rows; ranges like A1:N5000 trigger "Invalid range". */
const DEFECT_SHEET_MAX_ROW = 1000;

const DEFECT_HEADERS = [
  "Milestone",
  "Defect ID",
  "Test Case ID",
  "Module",
  "Feature",
  "Assigned To",
  "Summary",
  "Steps to Reproduce",
  "Expected Result",
  "Actual Result",
  "Severity",
  "Priority",
  "Status",
  "Environment",
];

function columnLetter(index) {
  let n = index + 1;
  let letters = "";
  while (n > 0) {
    const remainder = (n - 1) % 26;
    letters = String.fromCharCode(65 + remainder) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

function resolveLegacyStatus(row = {}) {
  const direct = cleanText(row.Status);
  if (direct) return direct;
  const qa = cleanText(row["QA Status"]);
  const dev = cleanText(row["Dev Status"]);
  if (qa && qa.toLowerCase() !== "new") return qa;
  if (dev) return dev;
  if (qa) return qa;
  return "New";
}

function normalizeStatusValue(value) {
  const cleaned = cleanText(value);
  if (!cleaned) return "";
  if (DEFECT_STATUS_OPTIONS.includes(cleaned)) return cleaned;
  const match = DEFECT_STATUS_OPTIONS.find(
    (option) => option.toLowerCase() === cleaned.toLowerCase(),
  );
  return match || cleaned;
}

function normalizeHeaderName(header) {
  return String(header || "")
    .replace(/\u00a0/g, " ")
    .trim();
}

/**
 * Google Sheets clipboard often omits empty Severity/Priority tabs, shifting Status left.
 * Re-align Status/Environment when a known status value appears before the Status column.
 */
function parseGoogleDefectClipboardRow(headers, values) {
  const trimmedHeaders = (headers || []).map(normalizeHeaderName);
  const statusIdx = trimmedHeaders.indexOf("Status");
  const severityIdx = trimmedHeaders.indexOf("Severity");
  const priorityIdx = trimmedHeaders.indexOf("Priority");
  const envIdx = trimmedHeaders.indexOf("Environment");

  const cols = [...(values || [])];
  while (cols.length < trimmedHeaders.length) {
    cols.push("");
  }

  if (statusIdx >= 0) {
    const directStatus = normalizeStatusValue(cols[statusIdx]);
    if (!DEFECT_STATUS_OPTIONS.includes(directStatus)) {
      const searchStart = severityIdx >= 0 ? severityIdx : Math.max(0, statusIdx - 2);
      for (let i = searchStart; i < cols.length; i += 1) {
        const candidate = normalizeStatusValue(cols[i]);
        if (!DEFECT_STATUS_OPTIONS.includes(candidate)) continue;
        const nextVal = normalizeHeaderName(cols[i + 1] || "");
        cols[statusIdx] = candidate;
        if (severityIdx >= 0 && severityIdx !== statusIdx && severityIdx !== i) {
          cols[severityIdx] = "";
        }
        if (priorityIdx >= 0 && priorityIdx !== statusIdx && priorityIdx !== i) {
          cols[priorityIdx] = "";
        }
        if (envIdx >= 0 && envIdx !== i) {
          const envCandidate = DEFECT_STATUS_OPTIONS.includes(nextVal) ? "" : nextVal;
          if (envCandidate) cols[envIdx] = envCandidate;
        }
        break;
      }
    }
  }

  const record = {};
  trimmedHeaders.forEach((header, index) => {
    if (header) record[header] = cols[index] ?? "";
  });
  return normalizeDefectRow(record);
}

function parseGoogleDefectClipboard(clipboardText) {
  const table = String(clipboardText || "")
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split("\t"));
  const headers = (table[0] || []).map(normalizeHeaderName);
  return dedupeDefectRows(
    table
      .slice(1)
      .map((values) => parseGoogleDefectClipboardRow(headers, values))
      .filter((row) => {
        const summary = cleanText(row.Summary);
        const moduleName = cleanText(row.Module);
        const status = normalizeStatusValue(row.Status);
        // Skip spacer/ghost rows copied from blank sheet lines that repeat TC IDs without content.
        return summary || moduleName || (status && status !== "New");
      }),
  );
}

function normalizeDefectRow(row = {}) {
  const normalized = Object.fromEntries(
    DEFECT_HEADERS.map((header) => [header, row[header] ?? ""]),
  );
  normalized.Status = normalizeStatusValue(resolveLegacyStatus(row));
  if (!DEFECT_STATUS_OPTIONS.includes(normalized.Status)) {
    normalized.Status = "New";
  }
  return normalized;
}

function applyExcelStatusValidation(sheet, rowCount = 1) {
  const statusIndex = DEFECT_HEADERS.indexOf("Status");
  if (statusIndex < 0) return;
  const column = columnLetter(statusIndex);
  const lastRow = Math.max(rowCount + 1, 2);
  sheet["!dataValidation"] = [
    {
      type: "list",
      allowBlank: 1,
      showInputMessage: 1,
      showErrorMessage: 1,
      sqref: `${column}2:${column}${Math.max(lastRow, 5000)}`,
      formula1: `"${DEFECT_STATUS_OPTIONS.join(",")}"`,
    },
  ];
}

function text(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item : item?.description || item?.action || ""))
      .filter(Boolean)
      .join("\n");
  }
  return value == null ? "" : String(value);
}

function stripAnsi(value) {
  return String(value || "").replace(/\u001b\[[0-9;]*m/g, "");
}

function cleanText(value) {
  return stripAnsi(text(value))
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** FSD / use-case traceability IDs (BR-011, NFR-001, etc.) — not for defect narratives. */
const FSD_REQUIREMENT_ID_PREFIX = /^(?:BR|FR|NFR|UC)-\d+\s*:\s*/i;

function stripFsdRequirementPrefix(text) {
  let value = cleanText(text);
  while (FSD_REQUIREMENT_ID_PREFIX.test(value)) {
    value = value.replace(FSD_REQUIREMENT_ID_PREFIX, "").trim();
  }
  return value;
}

function sanitizeFsdTraceabilityInNarrative(text) {
  let value = String(text || "");
  if (!value) return "";
  value = value.replace(/(^|\n)([\s\-]*)(?:BR|FR|NFR|UC)-\d+\s*:\s*/gi, "$1$2");
  value = value.replace(
    /\(\s*aligns with\s+(?:BR|FR|NFR|UC)-\d+[^)]*\)/gi,
    "(existing scheduled reviews should stay unchanged)",
  );
  value = value.replace(
    /\b(?:aligns with|per|see|ref\.?)\s+(?:BR|FR|NFR|UC)-\d+\b[^.;\n)]*/gi,
    "",
  );
  value = value.replace(/\b(?:BR|FR|NFR|UC)-\d+\b/g, "");
  value = value
    .replace(/\s{2,}/g, " ")
    .replace(/\(\s*\)/g, "")
    .replace(/\s+([,.;])/g, "$1")
    .trim();
  return value;
}

/** Plain-language defect text: no FSD requirement IDs (BR-xxx, NFR-xxx, …). */
function plainLanguageNarrative(text) {
  return sanitizeFsdTraceabilityInNarrative(stripFsdRequirementPrefix(text));
}

function splitWords(value) {
  return String(value || "")
    .replace(/Tests?$/i, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleCaseWords(value) {
  return splitWords(value)
    .split(" ")
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function moduleFromSpecPath(specPath) {
  const normalized = String(specPath || "").replaceAll("\\", "/");
  const segments = normalized.split("/");
  const testDirectory = [...segments].reverse().find((segment) => /tests?$/i.test(segment));
  const fileName = path.basename(normalized, ".spec.ts");
  const module = titleCaseWords(testDirectory || fileName);
  return module || "Unknown Module";
}

function milestoneFromValues(explicitMilestone, execution, results) {
  const candidates = [
    explicitMilestone,
    execution?.milestone,
    execution?.sourceExcel,
    ...(execution?.specsExecuted || []),
    ...results.map((result) => result.specPath),
  ];
  for (const candidate of candidates) {
    const match = String(candidate || "").match(/(?:milestone)?\s*(\d+)/i);
    if (match) return Number.parseInt(match[1], 10);
  }
  return null;
}

function normalizedCaseMap(document) {
  return new Map(
    normalizedCases(document).map((testCase) => [
      String(testCase.testCaseId || testCase.id || ""),
      testCase,
    ]),
  );
}

function loadExcelTestCaseMetadata(milestone) {
  const map = new Map();
  if (!milestone) return map;
  const root = path.join(ROOT, "pipeline", "test-data", `Milestone${milestone}`, "Test Cases");
  if (!fs.existsSync(root)) return map;
  for (const fileName of fs.readdirSync(root)) {
    if (!fileName.endsWith(".xlsx")) continue;
    const workbookPath = path.join(root, fileName);
    try {
      const workbook = XLSX.readFile(workbookPath);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      if (!sheet) continue;
      for (const row of XLSX.utils.sheet_to_json(sheet, { defval: "" })) {
        const testCaseId = String(row["Test Case ID"] || row["TC ID"] || "").trim();
        if (!testCaseId) continue;
        map.set(testCaseId, {
          priority: cleanText(row.Priority || row.priority || ""),
          severity: cleanText(row.Severity || row.severity || ""),
          module: cleanText(row.Module || row.module || ""),
          subModule: cleanText(
            row["Sub Module"] || row.SubModule || row.subModule || "",
          ),
        });
      }
    } catch {
      /* skip unreadable workbook */
    }
  }
  return map;
}

function resolveNormalizedDocument({ explicitPath = "", milestone = null } = {}) {
  const candidates = unique(
    [
      explicitPath,
      process.env.PW_DEFECT_NORMALIZED_JSON,
      process.env.QA_NORMALIZED_JSON,
      "results/qa-pipeline/normalized/test-cases.json",
      milestone
        ? `results/qa-pipeline/Milestone${milestone}/normalized/test-cases.json`
        : "",
    ].filter(Boolean),
  );
  for (const candidate of candidates) {
    const abs = absolute(candidate);
    if (fs.existsSync(abs)) {
      return readJson(abs);
    }
  }
  return {};
}

function resolveSeverityAndPriority({
  normalized = {},
  excelMeta = {},
  prior = {},
  result = {},
} = {}) {
  const classified = classifyDefectSeverityPriority({
    normalized,
    excelMeta,
    prior,
    result,
  });
  return {
    severity: classified.severity,
    priority: classified.priority,
  };
}

function executionResults(execution) {
  return execution?.caseResults || execution?.testCases || execution?.results?.testCases || [];
}

function numberedLines(items, valueSelector) {
  return (items || [])
    .map((item, index) => {
      const value = valueSelector(item);
      return value ? `${index + 1}. ${value}` : "";
    })
    .filter(Boolean);
}

function parseTitleParts(title, testCaseId) {
  let rest = plainLanguageNarrative(cleanText(title));
  const idPattern = new RegExp(
    `^(?:Case\\s*ID\\s*:\\s*)?${String(testCaseId || "").replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\s*[-–—:]\\s*`,
    "i",
  );
  rest = rest.replace(idPattern, "").replace(/^Case\s*ID\s*:\s*[A-Z0-9._-]+\s*[-–—:]\s*/i, "");
  rest = stripFsdRequirementPrefix(rest);
  const parts = rest.split(/\s*→\s*/).map((part) => stripFsdRequirementPrefix(part.trim())).filter(Boolean);
  if (parts.length >= 2) {
    return { area: parts[0], intent: parts.slice(1).join(" → ") };
  }
  return { area: "", intent: rest || plainLanguageNarrative(cleanText(title)) };
}

function waitTime(cleaned) {
  const match = cleaned.match(/Timeout\s+(\d+)ms/i);
  if (!match) return "";
  const seconds = Math.round(Number(match[1]) / 1000);
  return seconds >= 1 ? ` within ${seconds} second${seconds === 1 ? "" : "s"}` : "";
}

/**
 * Convert a Playwright error into one plain sentence a non-technical reader
 * can act on. No tool names, selectors, URLs, or stack details.
 */
function shortFailure(errorText, pageName = "application") {
  const cleaned = cleanText(errorText);
  if (!cleaned) return "The check failed, but no clear reason was reported.";
  const waited = waitTime(cleaned);

  if (/CRR_WORKED_EXAMPLE_CUSTOMER_ID must be set/i.test(cleaned)) {
    return "A sample customer with known scoring inputs must be set up before this check can run.";
  }
  if (/CRR_TEST_CUSTOMER_ID must be set/i.test(cleaned)) {
    return "A sample customer record must be set up before this check can run.";
  }
  if (/must be set in \.env/i.test(cleaned)) {
    return "Required test data was not set up before the run.";
  }
  if (/page\.(goto|reload)/i.test(cleaned)) {
    return `The ${pageName} screen did not open${waited}.`;
  }
  if (/locator\.click|getByRole\('link'/i.test(cleaned)) {
    return /intercepts pointer events/i.test(cleaned)
      ? `A menu item or button could not be clicked${waited} because another item on the screen was blocking it.`
      : `A menu item or button could not be clicked${waited}.`;
  }
  if (/locator\.(waitFor|isVisible)/i.test(cleaned)) {
    return `The expected item did not appear on the screen${waited}.`;
  }
  if (/locator\.(fill|type|selectOption|check)/i.test(cleaned)) {
    return `A value could not be entered or selected on the screen${waited}.`;
  }
  if (/toHaveAttribute/i.test(cleaned)) {
    return "A tab or section did not show the correct active or selected state.";
  }
  if (/toBeVisible/i.test(cleaned)) {
    return "Something that should appear on the screen was missing or hidden.";
  }
  if (/toHaveCount/i.test(cleaned)) {
    return "The screen did not show the expected number of items.";
  }
  if (/toHaveValue/i.test(cleaned)) {
    return "A field on the screen did not keep or show the expected value.";
  }
  if (/toHaveText|toContainText/i.test(cleaned)) {
    return "The message or label shown on the screen did not match what was expected.";
  }
  if (/toBeTruthy/i.test(cleaned)) {
    if (/reject|clamp|invalid|frequency|minimum|maximum|range/i.test(cleaned)) {
      return "The system did not block or correct an out-of-range review frequency value as expected.";
    }
    return "The result on the screen did not match what was expected.";
  }
  if (/toBe\b|toEqual/i.test(cleaned)) {
    return "The result shown on the screen did not match what was expected.";
  }

  const firstLine = cleaned
    .split("\n")
    .map((line) => line.trim())
    .find(
      (line) =>
        line &&
        !/^Call log:/i.test(line) &&
        !/^[-–]/.test(line) &&
        !/expect\s*\(/i.test(line) &&
        !/locator\./i.test(line) &&
        !/getByRole/i.test(line),
    );
  const plain = String(firstLine || cleaned)
    .replace(/^(TimeoutError|Error)\s*:\s*/i, "")
    .replace(/https?:\/\/\S+/g, "the application")
    .replace(/\b(locator|expect|getByRole|toBeVisible|toHaveAttribute)\b[^.]*\.?/gi, "")
    .trim();
  if (!plain || /^failed\.?$/i.test(plain)) {
    return "The screen did not behave as expected.";
  }
  return plain.length > 200 ? `${plain.slice(0, 197)}...` : plain;
}

function sentenceCase(value) {
  const text = cleanText(value).replace(/\.$/, "");
  if (!text) return "";
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function lowerFirst(value) {
  const text = cleanText(value).replace(/\.$/, "");
  if (!text) return "";
  // Keep acronyms and proper nouns intact.
  return /^[A-Z]{2,}/.test(text) ? text : `${text.charAt(0).toLowerCase()}${text.slice(1)}`;
}

/** Labels that must never become the Feature column (spec suite names, module titles, etc.). */
function isGenericFeatureLabel(value, pageName = "") {
  const label = cleanText(value);
  if (!label || label.length < 2) return true;
  const page = cleanText(pageName).toLowerCase();
  const lower = label.toLowerCase();
  if (/tests?$/i.test(label)) return true;
  if (page && (lower === page || lower === `${page} tests`)) return true;
  if (/^configuration$/i.test(label)) return true;
  if (/^unknown feature$/i.test(label)) return true;
  if (/\/\s*Screening configuration$/i.test(label) && /Sanctions Screening/i.test(label)) {
    return true;
  }
  return false;
}

const PRODUCT_FEATURE_RULES = [
  {
    pattern:
      /maker[- ]checker|checker rejects|pending approval|approve request|reject request|save .* requires maker/i,
    feature: "Maker-Checker Approval",
  },
  {
    pattern:
      /periodic review frequency|periodic frequency|review frequency|review schedule|save review schedule|retroactive|scheduled reviews|months\)|min \(months\)|max \(months\)/i,
    feature: "Periodic Review Schedule",
  },
  {
    pattern:
      /risk scoring|composite score|classification matrix|scoring config|parameter risk tier|save scoring|numeric score mapping|recalculates all parameters/i,
    feature: "Risk Scoring Configuration",
  },
  {
    pattern:
      /category weight|parameter row|parameter grid|sanctions|toggle onb|stage checkbox|save configuration|risk categories are listed|parameter name is fixed|override dropdown|stage legend/i,
    feature: "Category Weights and Parameters",
  },
  {
    pattern:
      /tab|sub-tab|switch from|cycle all three|inactive tab panels|preserve unsaved|active tab|framework configuration tabs/i,
    feature: "Tab Navigation",
  },
  {
    pattern:
      /breadcrumb|page shell|open customer risk|configuration menu|left navigation|verify page shell/i,
    feature: "Page Layout and Navigation",
  },
  {
    pattern:
      /assessment|override to|manual customer risk override|risk override|disabled parameter|stage-applicable|worked composite|customer risk view|customer-scoped|br-011|br-003/i,
    feature: "Customer Risk Assessment",
  },
  {
    pattern: /audit history|filter audit|configuration audit/i,
    feature: "Configuration Audit History",
  },
];

/**
 * Derive a human-readable product feature from the scenario title and Excel context.
 */
function inferProductFeature(titleParts, normalized = {}, excelMeta = {}, pageName = "") {
  const titleHaystack = [titleParts.intent, titleParts.area, normalized.title]
    .map((value) => cleanText(value))
    .filter(Boolean)
    .join(" ");
  for (const rule of PRODUCT_FEATURE_RULES) {
    if (rule.pattern.test(titleHaystack)) return rule.feature;
  }
  const contextHaystack = [normalized.businessObjective, normalized.finalExpectedResult]
    .map((value) => cleanText(value))
    .filter(Boolean)
    .join(" ");
  for (const rule of PRODUCT_FEATURE_RULES) {
    if (rule.pattern.test(contextHaystack)) return rule.feature;
  }
  const subModule = cleanText(excelMeta.subModule || normalized.subModule);
  if (subModule && !isGenericFeatureLabel(subModule, pageName)) return subModule;
  return "General Functionality";
}

/**
 * Feature = product feature under test.
 * Prefer inferred scenario feature (Tab Navigation, Periodic Review Schedule, etc.).
 * Never use Playwright describe/suite names or repeated module titles.
 */
function resolveFeature(normalized, result, titleParts, pageName, excelMeta = {}) {
  const candidates = [
    normalized.featureName,
    normalized.feature,
    normalized.source?.feature,
    result.feature,
    inferProductFeature(titleParts, normalized, excelMeta, pageName),
    titleParts.area,
  ]
    .map((value) => cleanText(value))
    .filter(Boolean);
  for (const candidate of candidates) {
    if (isGenericFeatureLabel(candidate, pageName)) continue;
    return candidate;
  }
  return inferProductFeature(titleParts, normalized, excelMeta, pageName);
}

function resolvePageName(normalized, result, excelMeta = {}) {
  return (
    cleanText(result.module) ||
    cleanText(excelMeta.subModule) ||
    cleanText(normalized.subModule) ||
    cleanText(normalized.module) ||
    moduleFromSpecPath(result.specPath) ||
    "Unknown Module"
  );
}

function plainLanguageLines(values) {
  return unique(
    (values || [])
      .map((value) =>
        plainLanguageNarrative(
          cleanText(value)
            .replace(/^[•\-]\s*/gm, "")
            .replace(/^\d+\.\s*/, "")
            .trim(),
        ),
      )
      .filter(Boolean),
  );
}

function formatPlainList(values, numbered = true) {
  const lines = plainLanguageLines(values);
  if (!lines.length) return "";
  if (!numbered || lines.length === 1) return lines[0];
  return lines.map((line, index) => `${index + 1}. ${sentenceCase(line)}`).join("\n");
}

function detailedSteps(normalized, result, pageName, feature, titleParts) {
  const preconditions = plainLanguageLines(normalized.preconditions || []);
  const sourceSteps = (normalized.steps || []).length
    ? normalized.steps
    : (result.steps || []).filter((step) => {
        const description = cleanText(step?.action || step?.description || step);
        return description && description !== cleanText(result.title);
      });
  const steps = numberedLines(
    sourceSteps,
    (step) =>
      sentenceCase(
        plainLanguageNarrative(
          cleanText(step?.action || step?.description || (typeof step === "string" ? step : "")),
        ),
      ),
  );
  const synthesized = [];
  synthesized.push(`Open the ${pageName} screen in the ${result.environment || "test"} environment.`);
  if (titleParts.intent) {
    synthesized.push(sentenceCase(titleParts.intent));
  } else if (feature) {
    synthesized.push(`Carry out the steps for ${feature}.`);
  }
  synthesized.push("Review what appears on the screen.");

  const stepLines = steps.length ? steps : numberedLines(synthesized, (value) => value);
  const sections = [];
  if (preconditions.length) {
    sections.push(
      `Before you start:\n${preconditions.map((value) => `- ${sentenceCase(value)}`).join("\n")}`,
    );
    sections.push(`Steps:\n${stepLines.join("\n")}`);
  } else {
    sections.push(stepLines.join("\n"));
  }
  return sections.join("\n\n");
}

function detailedExpectedResult(normalized, result, titleParts, pageName = "") {
  const expected = [];
  for (const step of normalized.steps || []) {
    if (step?.expectedResult) expected.push(cleanText(step.expectedResult));
  }
  if (normalized.finalExpectedResult) expected.push(cleanText(normalized.finalExpectedResult));
  if (normalized.expectedResult) expected.push(cleanText(normalized.expectedResult));
  if (result.expectedResult) expected.push(cleanText(result.expectedResult));
  if (result.comparison?.expected) expected.push(cleanText(result.comparison.expected));
  for (const item of result.expectedResults || []) {
    expected.push(cleanText(item?.description || item));
  }
  const uniqueExpected = plainLanguageLines(expected);
  if (uniqueExpected.length) {
    return formatPlainList(uniqueExpected, uniqueExpected.length > 1);
  }
  const screen = pageName ? `${pageName} screen` : "screen";
  if (titleParts.intent) {
    return plainLanguageNarrative(`On the ${screen}, ${lowerFirst(titleParts.intent)}.`);
  }
  if (titleParts.area) {
    return `The ${titleParts.area} area on the ${screen} should work as described in the test case.`;
  }
  return `The ${screen} should work as described in the test case.`;
}

function detailedActualResult(result, pageName) {
  const observations = [];
  for (const actual of result.actualResults || []) {
    const prefix = actual?.stepNumber ? `Step ${actual.stepNumber}: ` : "";
    const observed = cleanText(actual?.observed);
    if (observed && !/expect\s*\(|locator\.|getByRole/i.test(observed)) {
      observations.push(`${prefix}${observed}`);
    }
  }
  if (result.actualResult) {
    const actual = cleanText(result.actualResult);
    if (actual && !/expect\s*\(|locator\.|getByRole/i.test(actual)) {
      observations.push(actual);
    }
  }
  if (result.comparison?.actual) observations.push(cleanText(result.comparison.actual));
  for (const mismatch of result.comparison?.mismatches || []) {
    observations.push(`Difference noted: ${cleanText(mismatch)}`);
  }
  const errorText = cleanText(result.error || (result.errors || []).map(cleanText).join("\n"));
  if (errorText) observations.push(shortFailure(errorText, pageName));
  const uniqueObservations = unique(observations.filter(Boolean));
  if (!uniqueObservations.length) {
    return "The screen did not behave as expected.";
  }
  if (uniqueObservations.length === 1) {
    return uniqueObservations[0];
  }
  return uniqueObservations
    .map((value, index) => `${index + 1}. ${value}`)
    .join("\n");
}

function detailedSummary(pageName, feature, titleParts, shortActual) {
  const action = lowerFirst(
    plainLanguageNarrative(titleParts.intent || titleParts.area || "complete the steps in the test case"),
  );
  const problem = sentenceCase(shortActual.replace(/\.$/, ""));
  return plainLanguageNarrative(
    `On the ${pageName} screen, while testing ${feature}, the user tried to ${action}. ${problem}.`,
  );
}

function failureRecords(execution, normalizedDocument = {}, tcMetaById = new Map()) {
  const caseMap = normalizedCaseMap(normalizedDocument);
  const environment = text(
    typeof execution.environment === "object"
      ? execution.environment.name
      : execution.environment || process.env.ENV || "dev",
  );
  return executionResults(execution)
    .filter((result) => FAILED_STATUSES.has(String(result.status || "").toLowerCase()))
    .map((result) => {
      const testCaseId = String(result.testCaseId || result.id || "");
      const normalized = caseMap.get(testCaseId) || {};
      const excelMeta = tcMetaById.get(testCaseId) || {};
      const pageName = resolvePageName(normalized, result, excelMeta);
      const title = cleanText(normalized.title || result.title || testCaseId);
      const titleParts = parseTitleParts(title, testCaseId);
      if (!titleParts.area && cleanText(result.suite) && !isGenericFeatureLabel(result.suite, pageName)) {
        titleParts.area = cleanText(result.suite);
      }
      const feature = resolveFeature(normalized, result, titleParts, pageName, excelMeta);
      const expectedResult = detailedExpectedResult(normalized, result, titleParts, pageName);
      const actualResult = detailedActualResult({ ...result, environment }, pageName);
      const shortActual = shortFailure(
        result.error || result.errors?.[0] || actualResult,
        pageName,
      );
      const { severity, priority } = resolveSeverityAndPriority({
        normalized,
        excelMeta,
        result,
      });
      return {
        testCaseId,
        module: pageName,
        feature,
        // Keep suite/subModule only for assignment lookup; never emit as a column.
        assignmentHint: cleanText(
          feature ||
            normalized.subModule ||
            normalized.source?.subModule ||
            excelMeta.subModule ||
            titleParts.area,
        ),
        title,
        summary: detailedSummary(pageName, feature, titleParts, shortActual),
        steps: detailedSteps(
          normalized,
          { ...result, environment },
          pageName,
          feature,
          titleParts,
        ),
        expectedResult,
        actualResult,
        severity,
        priority,
        specPath: cleanText(result.specPath),
        environment,
      };
    });
}

function defectId(milestone, _module, testCaseId) {
  // AGENTS.md: DEF-M<N>-<Test Case ID> — never prepend a module acronym when
  // the Test Case ID already carries the module prefix (e.g. CRR-TC-001).
  const caseCode = String(testCaseId || "UNKNOWN")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
  return `DEF-M${milestone}-${caseCode}`;
}

function enrichFailures(failures, milestone, featureIndex) {
  return failures.map((failure) => {
    const assignment = resolveAssignment(
      featureIndex,
      failure.module,
      failure.assignmentHint || failure.feature,
    );
    return {
      ...failure,
      milestoneLabel: `M${milestone}`,
      defectId: defectId(milestone, failure.module, failure.testCaseId),
      assignedTo: assignment.assignedTo,
    };
  });
}

function createWorkbook(milestone, module, failures, executionPath, priorRows = []) {
  const failureIds = new Set(
    dedupeByTestCaseId(failures)
      .map((failure) => String(failure.testCaseId || "").trim())
      .filter(Boolean),
  );
  const byTc = new Map();
  for (const row of priorRows || []) {
    const testCaseId = String(row["Test Case ID"] || "").trim();
    if (!testCaseId || !failureIds.has(testCaseId)) continue;
    byTc.set(testCaseId, { ...row, "Test Case ID": testCaseId });
  }

  for (const failure of dedupeByTestCaseId(failures)) {
    const testCaseId = String(failure.testCaseId || "").trim();
    if (!testCaseId) continue;
    const prior = normalizeDefectRow(byTc.get(testCaseId) || {});
    byTc.set(testCaseId, normalizeDefectRow({
      Milestone: failure.milestoneLabel || prior.Milestone || `M${milestone}`,
      "Defect ID":
        failure.defectId ||
        prior["Defect ID"] ||
        defectId(milestone, module, testCaseId),
      "Test Case ID": testCaseId,
      Module: failure.module || prior.Module || module,
      Feature: failure.feature || prior.Feature || failure.module || module,
      "Assigned To": failure.assignedTo || prior["Assigned To"] || "Unassigned",
      Summary: failure.summary,
      "Steps to Reproduce": failure.steps,
      "Expected Result": failure.expectedResult,
      "Actual Result": failure.actualResult,
      Severity: failure.severity || "",
      Priority: failure.priority || "",
      // Preserve workflow status across re-runs for the same TC.
      Status: prior.Status || "New",
      Environment: failure.environment || prior.Environment || "",
    }));
  }

  const dedupedRows = dedupeDefectRows([...byTc.values()]);
  const workbook = XLSX.utils.book_new();
  const summary = XLSX.utils.json_to_sheet([
    {
      Milestone: `M${milestone}`,
      Module: module,
      "Failed Test Cases": dedupedRows.length,
      "Execution Report": executionPath,
      "Generated At": new Date().toISOString(),
      Note: "One row per Test Case ID. Re-runs upsert the same TC; review locally before Google sync.",
    },
  ]);
  const defects = XLSX.utils.json_to_sheet(dedupedRows);
  defects["!autofilter"] = { ref: defects["!ref"] };
  applyExcelStatusValidation(defects, dedupedRows.length);
  defects["!cols"] = [
    { wch: 10 },
    { wch: 28 },
    { wch: 18 },
    { wch: 28 },
    { wch: 28 },
    { wch: 28 },
    { wch: 55 },
    { wch: 60 },
    { wch: 55 },
    { wch: 55 },
    { wch: 12 },
    { wch: 12 },
    { wch: 18 },
    { wch: 14 },
  ];
  XLSX.utils.book_append_sheet(workbook, summary, "Summary");
  XLSX.utils.book_append_sheet(workbook, defects, "Defects");
  return { workbook, rows: dedupedRows };
}

function readExistingDefectRows(workbookPath) {
  if (!fs.existsSync(workbookPath)) return [];
  try {
    const workbook = XLSX.readFile(workbookPath);
    const sheet = workbook.Sheets.Defects || workbook.Sheets[workbook.SheetNames[0]];
    if (!sheet) return [];
    return dedupeDefectRows(
      XLSX.utils.sheet_to_json(sheet, { defval: "" }).map((row) => normalizeDefectRow(row)),
    );
  } catch {
    return [];
  }
}

function dedupeByTestCaseId(failures) {
  const byId = new Map();
  for (const failure of failures || []) {
    const testCaseId = String(failure.testCaseId || failure.id || "").trim();
    if (!testCaseId) continue;
    byId.set(testCaseId, failure);
  }
  return [...byId.values()];
}

function pickPreferredStatus(current, candidate) {
  const cur = normalizeStatusValue(current);
  const cand = normalizeStatusValue(candidate);
  const rank = (status) => {
    if (!status) return 0;
    if (status === "New") return 1;
    if (status === "In Progress") return 2;
    if (status === "Resolved") return 3;
    if (status === "Reopened") return 4;
    if (status === "Closed") return 5;
    return 1;
  };
  return rank(cand) >= rank(cur) ? cand || cur || "New" : cur || cand || "New";
}

function dedupeDefectRows(rows) {
  const byKey = new Map();
  for (const row of rows || []) {
    const testCaseId = String(row["Test Case ID"] || "").trim();
    if (!testCaseId) continue;
    const milestone = String(row.Milestone || "").trim();
    const key = `${milestone}::${testCaseId}`;
    const previous = byKey.get(key);
    byKey.set(
      key,
      normalizeDefectRow({
        ...(previous || {}),
        ...row,
        "Test Case ID": testCaseId,
        Status: pickPreferredStatus(previous?.Status, row?.Status),
      }),
    );
  }
  return [...byKey.values()];
}

function assertPlainLanguageDefectRows(rows) {
  const audit = validateDefectRows(rows);
  if (audit.passed) return audit;
  const sample = audit.violations.slice(0, 10).join("\n");
  throw new Error(
    `Defect plain-language gate failed (${audit.violationCount} issue(s)). ` +
      "See .cursor/rules/defect-plain-language-mandatory.mdc. Sample:\n" +
      sample,
  );
}

function generateDefectFiles({
  execution,
  executionPath = "",
  normalizedDocument = null,
  milestone: explicitMilestone = "",
  outputRoot = "",
  pruneCleanModules = true,
}) {
  const tcIndex = buildTestCaseMilestoneIndex();
  if (tcIndex.conflicts.length) {
    console.warn(
      `Defects: ${tcIndex.conflicts.length} Test Case ID(s) appear in more than one milestone workbook; using the first indexed milestone per ID.`,
    );
  }

  const allResults = executionResults(execution);
  const pathMilestone = milestoneFromValues(explicitMilestone, execution, allResults);
  const resolvedNormalized =
    normalizedDocument == null
      ? resolveNormalizedDocument({ milestone: pathMilestone })
      : normalizedDocument || {};

  let failures = dedupeByTestCaseId(
    failureRecords(execution, resolvedNormalized, tcIndex.byTestCaseId),
  );
  failures = failures.map((failure) => ({
    ...failure,
    resolvedMilestone: resolveDefectMilestoneForCase({
      testCaseId: failure.testCaseId,
      module: failure.module,
      specPath: failure.specPath,
      explicitMilestone,
      execution,
      index: tcIndex,
    }),
  }));

  for (const failure of failures) {
    if (!failure.resolvedMilestone) {
      throw new Error(
        `Cannot resolve Milestone1/Milestone2 for Test Case ID ${failure.testCaseId}. Ensure Test Cases, FSD, and Figma exist under the correct pipeline/test-data/Milestone{N}/ folder.`,
      );
    }
  }

  const modulesInScope = unique(
    allResults.map((result) => {
      const testCaseId = String(result.testCaseId || result.id || "");
      const normalized = normalizedCaseMap(resolvedNormalized).get(testCaseId) || {};
      return (
        cleanText(
          normalized.functionalArea ||
            normalized.module ||
            normalized.source?.module ||
            result.module ||
            moduleFromSpecPath(result.specPath),
        ) || "Unknown Module"
      );
    }),
  );

  const featurePayload = buildFeatureDeveloperIndex({ milestone: null });
  writeFeatureDeveloperCache(
    "pipeline/test-data/shared/feature-developer-map.json",
    featurePayload,
  );

  const passedCaseIds = collectPassedCaseIds(allResults);

  if (!failures.length) {
    const pruneMilestone =
      pathMilestone ||
      resolveDefectMilestoneForCase({
        module: modulesInScope[0] || "",
        specPath: allResults[0]?.specPath,
        explicitMilestone,
        execution,
        index: tcIndex,
      });
    if (pruneCleanModules && pruneMilestone && modulesInScope.length) {
      const defectsRoot = outputRoot
        ? absolute(outputRoot)
        : path.join(ROOT, "pipeline", "test-data", `Milestone${pruneMilestone}`, "Defects");
      fs.mkdirSync(defectsRoot, { recursive: true });
      for (const module of modulesInScope) {
        const stalePath = path.join(
          defectsRoot,
          `${kebabCase(module) || "unknown-module"}-defects.xlsx`,
        );
        if (fs.existsSync(stalePath)) {
          fs.unlinkSync(stalePath);
          console.log(`Defects: removed stale workbook → ${relative(stalePath)}`);
        }
      }
    }
    console.log("Defects: no failed test cases; no defect file generated.");
    return { files: [], rows: [], milestone: pruneMilestone || null, milestones: [] };
  }

  const failuresByMilestone = new Map();
  for (const failure of failures) {
    const milestone = failure.resolvedMilestone;
    if (!failuresByMilestone.has(milestone)) failuresByMilestone.set(milestone, []);
    failuresByMilestone.get(milestone).push(failure);
  }

  const written = [];
  const allRows = [];
  const milestonesUsed = [];

  for (const [milestone, milestoneFailures] of failuresByMilestone) {
    milestonesUsed.push(milestone);
    const enrichedFailures = enrichFailures(
      milestoneFailures,
      milestone,
      featurePayload.index,
    );
    const defectsRoot = outputRoot
      ? absolute(outputRoot)
      : path.join(ROOT, "pipeline", "test-data", `Milestone${milestone}`, "Defects");

    fs.mkdirSync(defectsRoot, { recursive: true });
    const grouped = new Map();
    for (const failure of enrichedFailures) {
      if (!grouped.has(failure.module)) grouped.set(failure.module, []);
      grouped.get(failure.module).push(failure);
    }
    for (const [module, moduleFailures] of grouped) {
      grouped.set(module, dedupeByTestCaseId(moduleFailures));
    }
    const milestonePassRows = [];
    if (pruneCleanModules) {
      for (const module of modulesInScope) {
        if (grouped.has(module)) continue;
        const stalePath = path.join(
          defectsRoot,
          `${kebabCase(module) || "unknown-module"}-defects.xlsx`,
        );
        if (fs.existsSync(stalePath)) {
          fs.unlinkSync(stalePath);
          console.log(`Defects: removed stale workbook → ${relative(stalePath)}`);
        }
      }
    }
    for (const [module, moduleFailures] of grouped) {
      const outputPath = path.join(
        defectsRoot,
        `${kebabCase(module) || "unknown-module"}-defects.xlsx`,
      );
      const rawExistingRows = readExistingDefectRows(outputPath);
      const { rows: existingRows, removed: removedPassedRows } = prunePassedFromDefectRows(
        rawExistingRows,
        passedCaseIds,
      );
      if (removedPassedRows.length) {
        console.log(
          `Defects: removed ${removedPassedRows.length} passed row(s) from local workbook: ${removedPassedRows.join(", ")}`,
        );
      }
      const { workbook, rows } = createWorkbook(
        milestone,
        module,
        moduleFailures,
        executionPath ? relative(executionPath) : "",
        existingRows,
      );
      const relativePath = relative(outputPath);
      assertPlainLanguageDefectRows(rows);
      assertNoPassedCasesInDefectRows(rows, passedCaseIds, `Defects (${relativePath})`);
      XLSX.writeFile(workbook, outputPath);
      written.push(relativePath);
      allRows.push(...rows);
      milestonePassRows.push(...rows);
      console.log(
        `Defects (M${milestone}): ${rows.length} unique failed case(s) → ${relativePath}`,
      );
    }

    const milestoneRows = dedupeDefectRows(milestonePassRows);
    const syncPayloadPath = path.join(
      ROOT,
      "results",
      "qa-pipeline",
      "defects",
      `milestone-${milestone}-defect-rows.json`,
    );
    if (milestoneRows.length) {
      assertPlainLanguageDefectRows(milestoneRows);
      assertNoPassedCasesInDefectRows(
        milestoneRows,
        passedCaseIds,
        `Defects sync payload (M${milestone})`,
      );
      writeJson(syncPayloadPath, {
        generatedAt: new Date().toISOString(),
        milestone: `M${milestone}`,
        executionPath: executionPath ? relative(executionPath) : null,
        featureMapSources: featurePayload.sources,
        headers: DEFECT_HEADERS,
        uniqueness: "Milestone + Test Case ID",
        rows: milestoneRows,
      });
      console.log(`Defects sync payload (M${milestone}) → ${relative(syncPayloadPath)}`);
    }
  }

  const uniqueRows = dedupeDefectRows(allRows);
  const primaryMilestone = milestonesUsed.length === 1 ? milestonesUsed[0] : null;

  return {
    files: written,
    rows: uniqueRows,
    milestone: primaryMilestone,
    milestones: milestonesUsed,
    syncPayloadPath:
      milestonesUsed.length === 1
        ? relative(
            path.join(
              ROOT,
              "results",
              "qa-pipeline",
              "defects",
              `milestone-${milestonesUsed[0]}-defect-rows.json`,
            ),
          )
        : "",
  };
}

function main() {
  const executionPath = arg("execution");
  if (!executionPath) throw new Error("--execution is required");
  const normalizedPath = arg("normalized");
  const execution = readJson(executionPath);
  const normalizedDocument =
    normalizedPath && fs.existsSync(absolute(normalizedPath))
      ? readJson(normalizedPath)
      : null;
  return generateDefectFiles({
    execution,
    executionPath,
    normalizedDocument,
    milestone: arg("milestone"),
    outputRoot: arg("output-root"),
  });
}

if (require.main === module) {
  try {
    const result = main();
    if (result?.files) {
      console.log(`Defect files: ${result.files.length}`);
    }
  } catch (error) {
    console.error(`Defect generation failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  DEFECT_HEADERS,
  DEFECT_SHEET_MAX_ROW,
  DEFECT_STATUS_OPTIONS,
  columnLetter,
  normalizeDefectRow,
  resolveLegacyStatus,
  parseGoogleDefectClipboardRow,
  parseGoogleDefectClipboard,
  applyExcelStatusValidation,
  defectId,
  dedupeByTestCaseId,
  dedupeDefectRows,
  enrichFailures,
  loadExcelTestCaseMetadata,
  classifyDefectSeverityPriority,
  resolveSeverityAndPriority,
  plainLanguageNarrative,
  stripFsdRequirementPrefix,
  sanitizeFsdTraceabilityInNarrative,
  inferProductFeature,
  isGenericFeatureLabel,
  resolveFeature,
  resolvePageName,
  shortFailure,
  assertPlainLanguageDefectRows,
  validateDefectRows,
  generateDefectFiles,
  executionResults,
  milestoneFromValues,
  moduleFromSpecPath,
};
