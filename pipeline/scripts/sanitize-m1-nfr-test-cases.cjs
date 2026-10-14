#!/usr/bin/env node
/**
 * Fix _x000d_ / carriage-return artifacts and refresh platform row test data
 * in Milestone1 NFR Test Cases.xlsx. Rewrites with ExcelJS for proper Excel line breaks.
 *
 * Usage: node pipeline/scripts/sanitize-m1-nfr-test-cases.cjs
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const {
  sanitizeCellText,
  preconditions,
  testDataForModule,
} = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);

function backupWorkbook() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-sanitize-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);
  return backupPath;
}

function countXmlArtifacts(filePath) {
  try {
    const xml = execSync(`unzip -p "${filePath}" xl/sharedStrings.xml 2>/dev/null || true`, {
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });
    return {
      x000d: (xml.match(/_x000d_/g) || []).length,
      x000a: (xml.match(/_x000a_/g) || []).length,
    };
  } catch {
    return { x000d: -1, x000a: -1 };
  }
}

function sanitizeSheetRows(rows, sheetName) {
  let platformDataUpdated = 0;

  const sanitized = rows.map((row) => {
    const next = {};
    for (const [key, value] of Object.entries(row)) {
      next[key] = typeof value === "string" ? sanitizeCellText(value) : value;
    }

    if (sheetName === "All NFR Cases") {
      const id = String(next["Test Case ID"] || "");
      const module = next.Module;
      if (id.includes("-PNFR-") && module) {
        const roleMatch = String(next["Test Data"] || next.Preconditions || "").match(
          /Role: ([^;\n]+)/,
        );
        const role =
          roleMatch?.[1]?.trim() ||
          String(next.Preconditions || "").match(/logged in as ([^(]+)/)?.[1]?.trim() ||
          "Compliance Officer";
        next["Test Data"] = testDataForModule(module, role);
        next.Preconditions = preconditions(module, role);
        platformDataUpdated++;
      }
    }

    return next;
  });

  return { rows: sanitized, platformDataUpdated };
}

async function main() {
  if (!fs.existsSync(WORKBOOK_PATH)) {
    throw new Error(`Workbook not found: ${WORKBOOK_PATH}`);
  }

  const backupPath = backupWorkbook();
  const beforeXml = countXmlArtifacts(WORKBOOK_PATH);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  let platformDataUpdated = 0;

  for (const sheetName of sheetNames) {
    const result = sanitizeSheetRows(sheets[sheetName].rows, sheetName);
    sheets[sheetName].rows = result.rows;
    platformDataUpdated += result.platformDataUpdated;
  }

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const afterXml = countXmlArtifacts(WORKBOOK_PATH);

  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`Rewrote ${sheetNames.length} sheets with ExcelJS (wrapText line breaks)`);
  console.log(`Platform Test Data rows refreshed: ${platformDataUpdated}`);
  console.log(
    `XML _x000d_ in sharedStrings: ${beforeXml.x000d} → ${afterXml.x000d} (target: 0)`,
  );
  console.log(`Updated: ${relative(WORKBOOK_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
