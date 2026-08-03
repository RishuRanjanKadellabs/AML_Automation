#!/usr/bin/env node
/**
 * Mechanical gate: defect rows must use plain business English and valid Feature labels.
 * Called from generate-module-defects.js before writing Excel / sync payload.
 */
const FSD_TRACEABILITY_PATTERNS = [
  /\b(?:BR|FR|NFR|UC)-\d+\s*:/i,
  /\b(?:BR|FR|NFR|UC)-\d+\b/i,
];

const TECHNICAL_PATTERNS = [
  /\bexpect\s*\(/i,
  /\blocator\./i,
  /\bgetByRole\b/i,
  /\bgetByLabel\b/i,
  /\bgetByTestId\b/i,
  /\bpage\.goto\b/i,
  /\bplaywright\b/i,
  /\btimeout\s*\d+\s*ms\b/i,
  /\b\d+ms\b/i,
  /\bCall log:/i,
  /\bstack trace\b/i,
  /\btoBeVisible\b/i,
  /\btoHaveAttribute\b/i,
  /does not work:/i,
  /Tests does not work/i,
  /https?:\/\//i,
  /\bCRR-TC-\d+/i,
  /\bDEF-M\d+-/i,
];

const FORBIDDEN_FEATURE_PATTERNS = [
  /Tests?$/i,
  /^Configuration$/i,
  /^Unknown Feature$/i,
  /Screening configuration$/i,
];

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function fieldViolations(fieldName, value, extraPatterns = []) {
  const text = cleanText(value);
  if (!text) return [`${fieldName} is empty`];
  const violations = [];
  for (const pattern of [...TECHNICAL_PATTERNS, ...extraPatterns]) {
    if (pattern.test(text)) {
      violations.push(`${fieldName} contains forbidden technical text (${pattern})`);
    }
  }
  return violations;
}

function validateFeature(feature, moduleName) {
  const violations = [];
  const label = cleanText(feature);
  if (!label) {
    violations.push("Feature is empty");
    return violations;
  }
  for (const pattern of FORBIDDEN_FEATURE_PATTERNS) {
    if (pattern.test(label)) {
      violations.push(`Feature "${label}" is a forbidden generic label`);
    }
  }
  const module = cleanText(moduleName);
  if (module && label.toLowerCase() === module.toLowerCase()) {
    violations.push(`Feature must not repeat Module name "${module}"`);
  }
  if (module && label.toLowerCase() === `${module} tests`.toLowerCase()) {
    violations.push(`Feature must not be the Playwright suite name "${label}"`);
  }
  return violations;
}

function validateDefectRow(row, index = 0) {
  const prefix = row["Test Case ID"] || `#${index + 1}`;
  const violations = [];
  violations.push(...validateFeature(row.Feature, row.Module));
  violations.push(...fieldViolations("Summary", row.Summary, FSD_TRACEABILITY_PATTERNS));
  violations.push(
    ...fieldViolations("Steps to Reproduce", row["Steps to Reproduce"], [
      /^\s*Test Case ID:/i,
      ...FSD_TRACEABILITY_PATTERNS,
    ]),
  );
  violations.push(...fieldViolations("Expected Result", row["Expected Result"], FSD_TRACEABILITY_PATTERNS));
  violations.push(...fieldViolations("Actual Result", row["Actual Result"], FSD_TRACEABILITY_PATTERNS));

  if (cleanText(row.Summary).length < 40) {
    violations.push("Summary is too short to be useful for a business reader");
  }
  if (cleanText(row["Steps to Reproduce"]).length < 30) {
    violations.push("Steps to Reproduce are too short or title-only");
  }
  if (/^This did not work\.?$/i.test(cleanText(row["Actual Result"]))) {
    violations.push("Actual Result is a generic placeholder");
  }

  return violations.map((message) => `${prefix}: ${message}`);
}

function validateDefectRows(rows) {
  const allViolations = [];
  for (let index = 0; index < (rows || []).length; index += 1) {
    allViolations.push(...validateDefectRow(rows[index], index));
  }
  return {
    passed: allViolations.length === 0,
    violationCount: allViolations.length,
    violations: allViolations,
  };
}

module.exports = {
  validateDefectRow,
  validateDefectRows,
  TECHNICAL_PATTERNS,
  FSD_TRACEABILITY_PATTERNS,
  FORBIDDEN_FEATURE_PATTERNS,
};

if (require.main === module) {
  const fs = require("fs");
  const path = require("path");
  const rowsPath = process.argv[2];
  if (!rowsPath) {
    console.error("Usage: node validate-defect-plain-language.cjs <defect-rows.json|workbook-not-supported>");
    process.exit(2);
  }
  const payload = JSON.parse(fs.readFileSync(path.resolve(rowsPath), "utf8"));
  const rows = Array.isArray(payload) ? payload : payload.rows || [];
  const result = validateDefectRows(rows);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.passed ? 0 : 1);
}
