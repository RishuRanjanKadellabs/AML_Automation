#!/usr/bin/env node
/**
 * Parse Excel for QA Automation Pipeline Stage 1 (Validate).
 * Mechanical only — agents must call this script; never hand-write validation-report.json.
 *
 * Usage:
 *   node pipeline/scripts/parse-excel-qa-pipeline.js --excel <path> [--results-root <dir>] [--out <file>]
 *   node pipeline/scripts/parse-excel-qa-pipeline.js <excel-file>   # legacy positional
 */
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const {
  absolute,
  arg,
  relative,
  resultsKeyFromExcel,
  resultsRootFromExcel,
  underResultsRoot,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

function normalizeHeader(header) {
  if (!header) return "";
  return header.toString().trim().toLowerCase().replace(/[\s\-_]/g, "");
}

function findColumnMapping(columns, columnAliases) {
  const mapping = {};
  const normalizedColumns = {};

  columns.forEach((col) => {
    normalizedColumns[normalizeHeader(col)] = col;
  });

  Object.keys(columnAliases).forEach((canonical) => {
    const aliases = columnAliases[canonical];
    for (const alias of aliases) {
      const normalizedAlias = normalizeHeader(alias);
      if (normalizedColumns[normalizedAlias]) {
        mapping[canonical] = normalizedColumns[normalizedAlias];
        break;
      }
    }
  });

  return mapping;
}

function validateRow(row, rowNum, columnMapping, requiredColumns) {
  const issues = [];

  const nonEmptyCells = ["testCaseId", "testSteps", "expectedResult"].filter(
    (field) =>
      columnMapping[field] &&
      row[columnMapping[field]] &&
      row[columnMapping[field]].toString().trim() !== ""
  ).length;

  if (nonEmptyCells === 0) {
    issues.push({
      code: "EMPTY_ROW",
      severity: "error",
      field: null,
      message: `Row ${rowNum} appears to be empty`,
    });
    return [issues, "Invalid"];
  }

  requiredColumns.forEach((field) => {
    if (!columnMapping[field]) {
      issues.push({
        code: "MISSING_REQUIRED",
        severity: "error",
        field,
        message: `Required column '${field}' not found in Excel`,
      });
    } else {
      const value = row[columnMapping[field]];
      if (!value || value.toString().trim() === "") {
        issues.push({
          code: "MISSING_REQUIRED",
          severity: "error",
          field,
          message: `Required field '${field}' is empty in row ${rowNum}`,
        });
      }
    }
  });

  if (columnMapping.testCaseId) {
    const tcId = row[columnMapping.testCaseId]
      ? row[columnMapping.testCaseId].toString().trim()
      : "";
    if (tcId && !/^[A-Z]{2,}-TC-\d{3}$/.test(tcId)) {
      issues.push({
        code: "INVALID_FORMAT",
        severity: "warning",
        field: "testCaseId",
        message: `Test Case ID '${tcId}' doesn't match expected format (XX-TC-001)`,
      });
    }
  }

  const errorIssues = issues.filter((i) => i.severity === "error");
  const warningIssues = issues.filter((i) => i.severity === "warning");

  if (errorIssues.length > 0) {
    return [issues, "Invalid"];
  }
  if (warningIssues.length > 0) {
    return [issues, "Valid with warnings"];
  }
  return [issues, "Valid"];
}

function resolveExcelPath() {
  const flagged = arg("excel", "");
  if (flagged) return flagged;
  const positional = process.argv.slice(2).find((a) => !a.startsWith("--") && a.endsWith(".xlsx"));
  return positional || "";
}

function main() {
  const excelPath = resolveExcelPath();
  if (!excelPath) {
    console.error(
      "Usage: node parse-excel-qa-pipeline.js --excel <excel-file> [--results-root <dir>] [--out <file>]"
    );
    process.exit(1);
  }

  const absExcel = absolute(excelPath);
  if (!fs.existsSync(absExcel)) {
    console.error(`Excel file not found: ${excelPath}`);
    process.exit(1);
  }

  const resultsRoot = resultsRootFromExcel(excelPath, arg("results-root", ""));
  const outputPath =
    arg("out", "") || underResultsRoot(resultsRoot, "validation", "validation-report.json");

  const schemaPath = absolute(
    "specs/generated/qa-pipeline/schemas/excel-input-schema.json"
  );
  let schema;
  try {
    schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  } catch (e) {
    console.error(`Error loading schema: ${e.message}`);
    process.exit(1);
  }

  const columnAliases = schema.properties.columnAliases.default;
  const requiredColumns = schema.properties.requiredColumns.default;

  try {
    const workbook = XLSX.readFile(absExcel);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    console.log(`Processing sheet: ${sheetName}`);

    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    if (rawData.length === 0) {
      throw new Error("Excel file appears to be empty");
    }

    const headers = rawData[0];
    console.log(`Found ${rawData.length - 1} data rows`);
    console.log(`Columns: ${headers.join(", ")}`);

    const columnMapping = findColumnMapping(headers, columnAliases);
    console.log(`Column mapping:`, columnMapping);

    const seenTcIds = {};
    const processedRows = [];
    const validationSummary = {
      Valid: 0,
      "Valid with warnings": 0,
      Invalid: 0,
      "Requires clarification": 0,
    };

    let consecutiveEmptyRows = 0;
    const MAX_CONSECUTIVE_EMPTY = 10; // Stop after 10 consecutive empty rows

    for (let i = 1; i < rawData.length; i++) {
      const rowNum = i + 1;
      const rowArray = rawData[i];
      
      // Skip completely empty rows
      if (!rowArray || rowArray.every(cell => cell == null || cell === "")) {
        consecutiveEmptyRows++;
        if (consecutiveEmptyRows >= MAX_CONSECUTIVE_EMPTY) {
          console.log(`Stopping after ${consecutiveEmptyRows} consecutive empty rows at row ${rowNum}`);
          break;
        }
        continue;
      }
      consecutiveEmptyRows = 0;
      
      const row = {};
      headers.forEach((header, idx) => {
        row[header] = rowArray[idx];
      });

      const rowData = {
        excelRowNumber: rowNum,
        testCaseId:
          columnMapping.testCaseId && row[columnMapping.testCaseId]
            ? row[columnMapping.testCaseId].toString().trim()
            : "",
        rawCells: {},
      };

      headers.forEach((header) => {
        rowData.rawCells[header] = row[header] != null ? String(row[header]) : "";
      });

      const optionalFields = [
        "requirementId",
        "module",
        "feature",
        "scenario",
        "preconditions",
        "testData",
        "testSteps",
        "expectedResult",
        "priority",
        "testType",
        "tags",
      ];

      optionalFields.forEach((field) => {
        if (columnMapping[field]) {
          const val = row[columnMapping[field]];
          rowData[field] = val != null && String(val).trim() !== "" ? String(val).trim() : null;
        }
      });

      let [issues, status] = validateRow(row, rowNum, columnMapping, requiredColumns);

      const tcId = rowData.testCaseId;
      if (tcId) {
        if (seenTcIds[tcId]) {
          issues.push({
            code: "DUPLICATE_ID",
            severity: "error",
            field: "testCaseId",
            message: `Duplicate Test Case ID '${tcId}' (also in row ${seenTcIds[tcId]})`,
          });
          status = "Invalid";
        } else {
          seenTcIds[tcId] = rowNum;
        }
      }

      rowData.validationIssues = issues;
      rowData.validationStatus = status;
      processedRows.push(rowData);
      validationSummary[status]++;
    }

    const validationReport = {
      parser: "parse-excel-qa-pipeline.js",
      parserVersion: "2.0",
      mechanical: true,
      fabricated: false,
      resultsKey: resultsKeyFromExcel(excelPath),
      resultsRoot: relative(resultsRoot),
      filePath: relative(absExcel),
      excelPath: relative(absExcel),
      worksheetName: sheetName,
      columnMapping,
      totalRows: processedRows.length,
      validationSummary,
      rows: processedRows,
      validatedAt: new Date().toISOString(),
    };

    writeJson(outputPath, validationReport);

    console.log(`\nValidation Summary:`);
    Object.keys(validationSummary).forEach((status) => {
      console.log(`  ${status}: ${validationSummary[status]}`);
    });
    console.log(`\nValidation report written to: ${relative(outputPath)}`);
    console.log(`resultsRoot: ${relative(resultsRoot)}`);
  } catch (e) {
    console.error(`Error processing Excel file: ${e.message || e}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
