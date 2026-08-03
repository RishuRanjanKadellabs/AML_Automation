const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");

function arg(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

function absolute(filePath) {
  if (!filePath) return "";
  return path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
}

function relative(filePath) {
  return path.relative(ROOT, absolute(filePath)).replaceAll("\\", "/");
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(absolute(filePath), "utf8"));
  } catch (error) {
    if (arguments.length >= 2) return fallback;
    throw new Error(`Cannot read JSON ${filePath}: ${error.message}`);
  }
}

function writeJson(filePath, value) {
  const outputPath = absolute(filePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(value, null, 2)}\n`);
}

function unique(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function nearEqualBatches(values, count = 6) {
  const items = [...(values || [])];
  const batchCount = Math.max(1, Number.parseInt(count, 10) || 6);
  const baseSize = Math.floor(items.length / batchCount);
  const remainder = items.length % batchCount;
  let offset = 0;
  return Array.from({ length: batchCount }, (_, index) => {
    const size = baseSize + (index < remainder ? 1 : 0);
    const batch = items.slice(offset, offset + size);
    offset += size;
    return batch;
  });
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function words(value) {
  return String(value || "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function kebabCase(value) {
  return words(value).map((word) => word.toLowerCase()).join("-");
}

function pascalCase(value) {
  return words(value)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join("");
}

function camelCase(value) {
  const pascal = pascalCase(value);
  return pascal ? `${pascal.charAt(0).toLowerCase()}${pascal.slice(1)}` : "";
}

function moduleName(testCase) {
  return String(
    testCase.functionalArea ||
      testCase.module ||
      testCase.source?.module ||
      "Unknown Module"
  ).trim();
}

function moduleDirectory(testCase, module) {
  const explicit =
    testCase.targetModuleDirectory ||
    testCase.moduleDirectory ||
    testCase.source?.moduleDirectory;
  if (explicit) return String(explicit).replace(/^\/+|\/+$/g, "");
  const normalized = pascalCase(module);
  return normalized.endsWith("Module") ? normalized : `${normalized}Module`;
}

function defaultSpecPath(module, testCases) {
  const first = testCases[0] || {};
  const explicit =
    first.targetSpecPath ||
    first.source?.targetSpecPath ||
    first.automation?.targetSpecPath;
  if (explicit) return String(explicit);
  const feature = kebabCase(module) || "unknown-module";
  const directory = moduleDirectory(first, module);
  return `tests/milestone2/test-cases/${directory}/${camelCase(module)}Tests/${feature}.spec.ts`;
}

function manifestSpecPaths(manifest) {
  return unique([
    ...(manifest?.expectedOutputs?.specFiles || []),
    ...(manifest?.specFiles || []),
    ...(manifest?.handoffs || []).map((handoff) => handoff?.payload?.targetSpecPath),
    ...Object.values(manifest?.batchHandoffs || {})
      .flat()
      .map((handoff) => handoff?.payload?.targetSpecPath),
    ...(manifest?.artifacts || []).filter((filePath) => String(filePath).endsWith(".spec.ts")),
  ]);
}

function normalizedCases(document) {
  if (Array.isArray(document)) return document;
  return document?.testCases || document?.cases || [];
}

/** Stable slug for per-workbook results isolation (avoids concurrent overwrite). */
function resultsKeyFromExcel(excelPath) {
  const base = path.basename(String(excelPath || ""), path.extname(String(excelPath || "")));
  const slug = base
    .replace(/\.bak-.*$/i, "")
    .replace(/[<>:"/\\|?*]+/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  return slug || "unnamed-workbook";
}

function resultsRootFromExcel(excelPath, override = "") {
  if (override) return relative(override);
  return relative(path.join("results", "qa-pipeline", resultsKeyFromExcel(excelPath)));
}

function underResultsRoot(resultsRoot, ...segments) {
  return relative(path.join(absolute(resultsRoot), ...segments));
}

function executionSummary(report) {
  const summary =
    report?.executionSummary ||
    report?.results?.summary ||
    report?.summary ||
    report?.finalSummary ||
    {};
  return {
    passed: Number(summary.passed || 0),
    failed: Number(summary.failed || 0),
    skipped: Number(summary.skipped || 0),
    blocked: Number(summary.blocked || 0),
    timedOut: Number(summary.timedOut || 0),
    interrupted: Number(summary.interrupted || 0),
    total: Number(summary.total || 0),
  };
}

module.exports = {
  ROOT,
  absolute,
  arg,
  camelCase,
  defaultSpecPath,
  escapeRegex,
  executionSummary,
  kebabCase,
  manifestSpecPaths,
  moduleName,
  nearEqualBatches,
  normalizedCases,
  pascalCase,
  readJson,
  relative,
  resultsKeyFromExcel,
  resultsRootFromExcel,
  underResultsRoot,
  unique,
  words,
  writeJson,
};
