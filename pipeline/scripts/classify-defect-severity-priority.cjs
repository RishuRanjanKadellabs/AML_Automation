/**
 * Derive defect Severity (impact) and Priority (fix urgency) when defects are
 * generated from a test execution report (failureRecords → createWorkbook).
 * Not used for post-generation backfill, Google sync upsert, or defect regression.
 */

const LEVELS = ["Critical", "High", "Medium", "Low"];

const LEVEL_RANK = Object.fromEntries(
  LEVELS.map((level, index) => [level.toLowerCase(), LEVELS.length - index]),
);

function cleanText(value) {
  return String(value ?? "")
    .replace(/\u001b\[[0-9;]*m/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLevel(value) {
  const text = cleanText(value).toLowerCase();
  if (!text) return "";
  if (["critical", "crit", "p1", "1"].includes(text)) return "Critical";
  if (["high", "p2", "2"].includes(text)) return "High";
  if (["medium", "med", "p3", "3"].includes(text)) return "Medium";
  if (["low", "p4", "4"].includes(text)) return "Low";
  const match = LEVELS.find((level) => level.toLowerCase() === text);
  return match || "";
}

function levelRank(value) {
  return LEVEL_RANK[normalizeLevel(value).toLowerCase()] || 0;
}

function maxLevel(...values) {
  const normalized = values.map(normalizeLevel).filter(Boolean);
  if (!normalized.length) return "Medium";
  return normalized.sort((a, b) => levelRank(b) - levelRank(a))[0];
}

function minLevel(...values) {
  const normalized = values.map(normalizeLevel).filter(Boolean);
  if (!normalized.length) return "Medium";
  return normalized.sort((a, b) => levelRank(a) - levelRank(b))[0];
}

function bumpPriorityTowardSeverity(priority, severity) {
  const p = normalizeLevel(priority) || "Medium";
  const s = normalizeLevel(severity) || "Medium";
  if (levelRank(s) <= levelRank(p)) return p;
  if (s === "Critical" && levelRank(p) < levelRank("High")) return "High";
  if (s === "High" && levelRank(p) < levelRank("Medium")) return "Medium";
  if (s === "Medium" && levelRank(p) < levelRank("Low")) return "Low";
  return p;
}

function combinedContext({ normalized = {}, result = {}, excelMeta = {}, prior = {} } = {}) {
  const error = cleanText(
    result.error ||
      result.errors?.[0] ||
      prior["Actual Result"] ||
      prior.Summary ||
      "",
  );
  const title = cleanText(
    normalized.title || result.title || prior.Summary || prior["Test Case ID"] || "",
  );
  const feature = cleanText(
    result.suite ||
      normalized.subModule ||
      normalized.functionalArea ||
      prior.Feature ||
      "",
  );
  const module = cleanText(
    result.module || normalized.module || prior.Module || excelMeta.module || "",
  );
  const intent = `${title} ${feature} ${module}`.toLowerCase();
  const classification = cleanText(result.classification || "").toLowerCase();
  return { error, title, feature, module, intent, classification };
}

function classifySeverity(context) {
  const { error, intent, classification } = context;

  if (
    classification === "environment" ||
    classification === "tooling" ||
    /browsertype\.launch|executable doesn't exist|environment_blocked/i.test(error)
  ) {
    return "Low";
  }

  if (
    /page\.(goto|reload)|net::err|did not open|navigation/i.test(error) &&
    /navigate|open|load|landing|access|screen/i.test(intent)
  ) {
    return "Critical";
  }

  if (
    /waitfor timed out|did not appear|toBeVisible|locator\.(waitFor|isVisible)/i.test(error) &&
    /wizard|create|edit|save|submit|configuration|mandatory/i.test(intent)
  ) {
    return "Critical";
  }

  if (/empty[\s-]?state|no records|zero records|placeholder/i.test(intent)) {
    return "Medium";
  }

  if (/unsaved|data loss|lose changes/i.test(intent)) {
    return "High";
  }

  if (
    /warning|confirm|discard/i.test(intent) &&
    !/empty[\s-]?state/i.test(intent) &&
    /unsaved|navigate away|leave|discard/i.test(intent)
  ) {
    return "High";
  }

  if (
    /save|create|delete|update|submit|persist|stored|record|insert|remove/i.test(intent) &&
    !/unsaved|warning|empty[\s-]?state/i.test(intent) &&
    /toBeTruthy|toEqual|toHave|failed|timeout|click/i.test(error)
  ) {
    return "Critical";
  }

  if (/mandatory|required field|validation|error message|negative|invalid/i.test(intent)) {
    return "Medium";
  }

  if (/search|filter|sort|pagination|export|import|download|upload/i.test(intent)) {
    return /sort|filter|search/i.test(intent) && /toHaveCount|count|results/i.test(error)
      ? "High"
      : "Medium";
  }

  if (/layout|column|header|label|tooltip|display|alignment|responsive/i.test(intent)) {
    return "Low";
  }

  if (/locator\.click|could not be clicked|intercepts pointer/i.test(error)) {
    return "High";
  }

  if (/locator\.(fill|type|selectOption|check)|could not be entered/i.test(error)) {
    return "High";
  }

  if (/waitfor timed out|did not appear|toBeVisible|locator\.(waitFor|isVisible)/i.test(error)) {
    return "High";
  }

  if (/toHaveText|toContainText|toHaveValue|did not match/i.test(error)) {
    return "Medium";
  }

  if (/toBeTruthy|toEqual|expect\(/i.test(error)) {
    return "Medium";
  }

  return "Medium";
}

function classifyPriority(context, severity, excelMeta, normalized, prior) {
  const excelPriority = normalizeLevel(
    excelMeta.priority || normalized.priority || prior.Priority || "",
  );
  let priority = excelPriority || "Medium";

  priority = bumpPriorityTowardSeverity(priority, severity);

  const module = context.module.toLowerCase();
  if (
    /configuration|screening|sanction|kyc|mandatory|registry|compliance/i.test(module) &&
    levelRank(severity) >= levelRank("High")
  ) {
    priority = maxLevel(priority, "High");
  }

  if (
    context.classification === "environment" ||
    context.classification === "tooling"
  ) {
    priority = minLevel(priority, "Low");
  }

  if (levelRank(severity) === levelRank("Critical")) {
    priority = maxLevel(priority, "High");
  }

  return priority;
}

/**
 * @param {object} params
 * @param {object} [params.normalized] normalized test-case row
 * @param {object} [params.result] execution case result
 * @param {object} [params.excelMeta] Priority/Severity from Milestone Excel
 * @param {object} [params.prior] existing defect row
 */
function classifyDefectSeverityPriority({
  normalized = {},
  result = {},
  excelMeta = {},
  prior = {},
} = {}) {
  const context = combinedContext({ normalized, result, excelMeta, prior });
  const excelSeverity = normalizeLevel(excelMeta.severity || normalized.severity || "");
  const severity = excelSeverity || classifySeverity(context);
  const priority = classifyPriority(context, severity, excelMeta, normalized, prior);

  return {
    severity,
    priority,
    source: {
      severity: excelSeverity ? "excel" : "execution",
      priority: normalizeLevel(excelMeta.priority || normalized.priority || prior.Priority)
        ? "excel+execution"
        : "execution",
    },
  };
}

module.exports = {
  LEVELS,
  classifyDefectSeverityPriority,
  normalizeLevel,
};
