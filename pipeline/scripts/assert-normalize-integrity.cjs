#!/usr/bin/env node
/**
 * Mechanical integrity gate for Validate + Normalize artifacts.
 * Fails hard if agents hand-wrote / sampled / fabricated Excel stage outputs.
 *
 * Usage:
 *   node pipeline/scripts/assert-normalize-integrity.cjs \
 *     --validation <validation-report.json> \
 *     --normalized <test-cases.json> \
 *     [--delta <tc-delta-report.json>] \
 *     [--excel <workbook.xlsx>]
 */
const fs = require("fs");
const XLSX = require("xlsx");
const {
  absolute,
  arg,
  normalizedCases,
  readJson,
  relative,
} = require("./qa-pipeline-utils.cjs");

function fail(message, failures) {
  failures.push(message);
  console.error(`FAIL: ${message}`);
}

function excelRowCount(excelPath) {
  const workbook = XLSX.readFile(absolute(excelPath));
  const sheetName = workbook.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
    header: 1,
    defval: "",
  });
  if (!rows.length) return 0;
  // Count non-empty data rows (any cell has content)
  return rows.slice(1).filter((row) =>
    (row || []).some((cell) => String(cell ?? "").trim() !== "")
  ).length;
}

function deltaGenerateIds(delta) {
  const add = (delta.add || []).map((x) => x.testCaseId || x.id || x).filter(Boolean);
  const update = (delta.update || []).map((x) => x.testCaseId || x.id || x).filter(Boolean);
  return [...new Set([...add, ...update])];
}

function main() {
  const validationPath = arg(
    "validation",
    "results/qa-pipeline/validation/validation-report.json"
  );
  const normalizedPath = arg(
    "normalized",
    "results/qa-pipeline/normalized/test-cases.json"
  );
  const deltaPath = arg("delta", "");
  const excelPath = arg("excel", "");

  const failures = [];
  const checks = {};

  if (!fs.existsSync(absolute(validationPath))) {
    fail(`Validation report missing: ${validationPath}`, failures);
  }
  if (!fs.existsSync(absolute(normalizedPath))) {
    fail(`Normalized cases missing: ${normalizedPath}`, failures);
  }

  if (failures.length) {
    process.exit(1);
  }

  const validation = readJson(validationPath);
  const normalized = readJson(normalizedPath);
  const cases = normalizedCases(normalized);

  checks.validationMechanical =
    validation.mechanical === true &&
    validation.fabricated !== true &&
    (!validation.parser || validation.parser === "parse-excel-qa-pipeline.js");
  if (!checks.validationMechanical) {
    fail(
      "Validation report is not mechanical (missing parser stamp or fabricated=true). Re-run npm run qa:parse-excel.",
      failures
    );
  }

  checks.normalizedMechanical =
    normalized.mechanical === true &&
    normalized.fabricated !== true &&
    normalized.representativeSample !== true &&
    (!normalized.normalizer || normalized.normalizer === "normalize-testcases.js");
  if (!checks.normalizedMechanical) {
    fail(
      "Normalized document is not mechanical / is a representative sample. Re-run npm run qa:normalize.",
      failures
    );
  }

  const rows = validation.rows || [];
  checks.rowCountMatchesTotal =
    Number(validation.totalRows) === rows.length && rows.length > 0;
  if (!checks.rowCountMatchesTotal) {
    fail(
      `Validation totalRows (${validation.totalRows}) != rows.length (${rows.length}) or empty.`,
      failures
    );
  }

  const eligible = rows.filter(
    (row) =>
      row.validationStatus === "Valid" ||
      row.validationStatus === "Valid with warnings"
  );
  checks.normalizedCoversAllEligible = cases.length === eligible.length;
  if (!checks.normalizedCoversAllEligible) {
    fail(
      `Normalized case count (${cases.length}) != eligible validation rows (${eligible.length}). Partial/sample normalize is forbidden.`,
      failures
    );
  }

  const normalizedIds = new Set(cases.map((c) => c.testCaseId).filter(Boolean));
  const eligibleIds = eligible.map((r) => r.testCaseId).filter(Boolean);
  const missingEligible = eligibleIds.filter((id) => !normalizedIds.has(id));
  checks.allEligibleIdsPresent = missingEligible.length === 0;
  if (!checks.allEligibleIdsPresent) {
    fail(
      `Normalized missing ${missingEligible.length} eligible ID(s), e.g. ${missingEligible
        .slice(0, 8)
        .join(", ")}`,
      failures
    );
  }

  if (excelPath) {
    try {
      const liveCount = excelRowCount(excelPath);
      checks.excelRowCountAligned =
        liveCount === rows.length || Math.abs(liveCount - rows.length) <= 0;
      if (liveCount !== rows.length) {
        fail(
          `Live Excel non-empty row count (${liveCount}) != validation rows (${rows.length}) for ${relative(
            excelPath
          )}`,
          failures
        );
      }
    } catch (error) {
      fail(`Cannot re-read Excel for integrity check: ${error.message}`, failures);
    }
  }

  if (deltaPath) {
    if (!fs.existsSync(absolute(deltaPath))) {
      fail(`Delta report missing: ${deltaPath}`, failures);
    } else {
      const delta = readJson(deltaPath);
      const generateIds = deltaGenerateIds(delta);
      const missingDelta = generateIds.filter((id) => !normalizedIds.has(id));
      checks.deltaGenerateScopePresent = missingDelta.length === 0;
      if (!checks.deltaGenerateScopePresent) {
        fail(
          `Reconcile generate-scope (add+update) missing from normalized: ${missingDelta
            .slice(0, 12)
            .join(", ")}${missingDelta.length > 12 ? "…" : ""}`,
          failures
        );
      }
      checks.noRepresentativeSampleLanguage =
        !JSON.stringify(normalized).includes("representative sample") &&
        !JSON.stringify(normalized).includes("focusing on the key");
      if (!checks.noRepresentativeSampleLanguage) {
        fail("Normalized artifact contains sample/subset language.", failures);
      }
    }
  }

  const report = {
    checkedAt: new Date().toISOString(),
    validationPath: relative(validationPath),
    normalizedPath: relative(normalizedPath),
    deltaPath: deltaPath ? relative(deltaPath) : null,
    excelPath: excelPath ? relative(excelPath) : null,
    eligibleCount: eligible.length,
    normalizedCount: cases.length,
    checks,
    passed: failures.length === 0,
    failures,
  };

  const outPath = arg(
    "out",
    relative(
      absolute(normalizedPath).replace(
        /normalized[/\\]test-cases\.json$/i,
        "normalized/integrity-gate.json"
      )
    )
  );
  try {
    const { writeJson } = require("./qa-pipeline-utils.cjs");
    writeJson(outPath, report);
    console.log(`Integrity gate written: ${outPath}`);
  } catch {
    // non-fatal if out path odd
  }

  if (failures.length) {
    console.error(`\nNormalize integrity FAILED (${failures.length} issue(s)). Pipeline must Block.`);
    process.exit(1);
  }

  console.log(
    `Normalize integrity PASSED: ${cases.length} cases (eligible=${eligible.length}).`
  );
}

if (require.main === module) {
  main();
}

module.exports = { main };
