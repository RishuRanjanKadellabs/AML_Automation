#!/usr/bin/env node
/**
 * Normalize Excel validation report into structured test cases (Stage 2).
 * Mechanical only — agents must call this script; never hand-write test-cases.json samples.
 *
 * Usage:
 *   node pipeline/scripts/normalize-testcases.js --validation <report.json> [--out <file>] [--results-root <dir>]
 *   node pipeline/scripts/normalize-testcases.js   # defaults under results/qa-pipeline/
 */
const fs = require("fs");
const {
  absolute,
  arg,
  relative,
  resultsRootFromExcel,
  underResultsRoot,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

function parseSteps(stepsText) {
  if (!stepsText || typeof stepsText !== "string") {
    return [];
  }

  const lines = stepsText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  const steps = [];

  let stepNumber = 1;
  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s*(.+)$/);
    if (match) {
      steps.push({
        stepNumber: parseInt(match[1], 10),
        action: match[2],
      });
      stepNumber = parseInt(match[1], 10) + 1;
    } else {
      steps.push({
        stepNumber,
        action: line,
      });
      stepNumber += 1;
    }
  }

  return steps.length > 0
    ? steps
    : [
        {
          stepNumber: 1,
          action: stepsText.trim(),
        },
      ];
}

function parsePreconditions(preconditionsText) {
  if (!preconditionsText || typeof preconditionsText !== "string") {
    return [];
  }

  return preconditionsText
    .split(";")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function parseTestData(testDataText) {
  if (!testDataText || typeof testDataText !== "string") {
    return [];
  }

  if (
    testDataText.toLowerCase().includes("n/a") ||
    testDataText.toLowerCase().includes("none") ||
    testDataText.toLowerCase().includes("observation")
  ) {
    return [];
  }

  return [
    {
      name: "testData",
      value: testDataText.trim(),
      sensitive: false,
      source: "excel",
    },
  ];
}

function assessAutomationFeasibility(row) {
  const steps = row.testSteps || "";
  const expectedResult = row.expectedResult || "";

  const automationFriendly = [
    "navigate",
    "click",
    "select",
    "fill",
    "submit",
    "verify",
    "check",
    "observe",
    "validate",
    "display",
    "show",
    "appear",
    "visible",
  ];

  const manualOnly = [
    "manually verify",
    "human judgment",
    "subjective",
    "visual inspection",
    "compare documents",
    "interview",
    "phone call",
  ];

  const stepsLower = steps.toLowerCase();
  const expectedLower = expectedResult.toLowerCase();
  const combined = `${stepsLower} ${expectedLower}`;

  if (manualOnly.some((keyword) => combined.includes(keyword))) {
    return {
      rating: "manual-only",
      rationale: "Contains manual verification steps requiring human judgment",
    };
  }

  if (automationFriendly.some((keyword) => combined.includes(keyword))) {
    return {
      rating: "automatable",
      rationale: "Contains UI navigation and verification steps suitable for automation",
    };
  }

  return {
    rating: "needs-clarification",
    rationale: "Automation feasibility unclear from test steps description",
  };
}

function normalizeTestCase(row, excelFile, worksheetName) {
  const steps = parseSteps(row.testSteps);
  const preconditions = parsePreconditions(row.preconditions);
  const testData = parseTestData(row.testData);
  const automationFeasibility = assessAutomationFeasibility(row);

  let title =
    row.scenario ||
    row.rawCells?.["Task Description"] ||
    row.rawCells?.["Sub Module"] ||
    row.testCaseId;
  if (title && title.length > 100) {
    title = `${title.substring(0, 97)}...`;
  }

  const normalizedCase = {
    testCaseId: row.testCaseId,
    title,
    businessObjective: row.rawCells?.["Acceptance Criteria"] || null,
    requirementReference: row.requirementId || null,
    preconditions,
    testData,
    steps,
    finalExpectedResult: row.expectedResult || "Expected result not specified",
    priority: row.priority,
    classification: "unknown",
    functionalArea: row.module,
    module: row.module,
    validationStatus: row.validationStatus,
    automationFeasibility,
    dependencies: [],
    tags: [],
    assumptions: [
      {
        statement: "AML application is accessible at BASE_URL",
        required: true,
        impact: "Cannot execute test without application access",
      },
      {
        statement: "Login is bypassed for this test run",
        required: true,
        impact: "Authentication not required per current pipeline configuration",
      },
    ],
    missingInformationWarnings: [],
    source: {
      excelFile,
      worksheetName,
      excelRowNumber: row.excelRowNumber,
      originalTestCaseId: row.testCaseId,
    },
  };

  if (!row.expectedResult || row.expectedResult.trim() === "") {
    normalizedCase.missingInformationWarnings.push("No expected result specified");
  }

  if (!row.testSteps || row.testSteps.trim() === "") {
    normalizedCase.missingInformationWarnings.push("No test steps provided");
    normalizedCase.automationFeasibility = {
      rating: "blocked",
      rationale: "No test steps provided - cannot automate without clear procedure",
    };
  }

  if (!row.module || row.module.trim() === "") {
    normalizedCase.missingInformationWarnings.push("Module not specified");
  }

  return normalizedCase;
}

function main() {
  const validationArg = arg("validation", "");
  const resultsRootArg = arg("results-root", "");

  let validationReportPath = validationArg;
  if (!validationReportPath && resultsRootArg) {
    validationReportPath = underResultsRoot(
      resultsRootArg,
      "validation",
      "validation-report.json"
    );
  }
  if (!validationReportPath) {
    validationReportPath = "results/qa-pipeline/validation/validation-report.json";
  }

  try {
    const absValidation = absolute(validationReportPath);
    if (!fs.existsSync(absValidation)) {
      throw new Error(`Validation report not found: ${validationReportPath}`);
    }

    const validationReport = JSON.parse(fs.readFileSync(absValidation, "utf8"));

    if (validationReport.fabricated === true || validationReport.mechanical === false) {
      throw new Error(
        "Validation report is marked fabricated/non-mechanical. Re-run qa:parse-excel."
      );
    }
    if (
      validationReport.parser &&
      validationReport.parser !== "parse-excel-qa-pipeline.js"
    ) {
      throw new Error(
        `Unexpected validation parser '${validationReport.parser}'. Re-run qa:parse-excel.`
      );
    }

    console.log(`Processing ${validationReport.totalRows} validated rows...`);

    const eligibleRows = (validationReport.rows || []).filter(
      (row) =>
        row.validationStatus === "Valid" ||
        row.validationStatus === "Valid with warnings"
    );

    console.log(`${eligibleRows.length} rows eligible for normalization`);

    if (eligibleRows.length === 0) {
      throw new Error("No eligible rows to normalize (Valid / Valid with warnings)");
    }

    const excelFile =
      validationReport.filePath || validationReport.excelPath || "";
    const normalizedCases = eligibleRows.map((row) =>
      normalizeTestCase(row, excelFile, validationReport.worksheetName)
    );

    const resultsRoot =
      resultsRootArg ||
      validationReport.resultsRoot ||
      resultsRootFromExcel(excelFile);

    const outputPath =
      arg("out", "") ||
      underResultsRoot(resultsRoot, "normalized", "test-cases.json");

    const normalizedDocument = {
      normalizer: "normalize-testcases.js",
      normalizerVersion: "2.0",
      mechanical: true,
      fabricated: false,
      representativeSample: false,
      resultsKey: validationReport.resultsKey || null,
      resultsRoot: relative(resultsRoot),
      metadata: {
        sourceFile: excelFile,
        worksheetName: validationReport.worksheetName,
        normalizedAt: new Date().toISOString(),
        totalEligibleRows: eligibleRows.length,
        totalNormalizedCases: normalizedCases.length,
        validationReportPath: relative(absValidation),
      },
      source: {
        excelPath: excelFile,
        validationReportPath: relative(absValidation),
      },
      testCases: normalizedCases,
    };

    if (
      normalizedDocument.metadata.totalNormalizedCases !==
      normalizedDocument.metadata.totalEligibleRows
    ) {
      throw new Error(
        `Normalize integrity failure: normalized ${normalizedDocument.metadata.totalNormalizedCases} != eligible ${normalizedDocument.metadata.totalEligibleRows}`
      );
    }

    writeJson(outputPath, normalizedDocument);

    console.log(`\nNormalization Summary:`);
    console.log(`  Total cases normalized: ${normalizedCases.length}`);

    const feasibilityCount = {};
    normalizedCases.forEach((tc) => {
      const rating = tc.automationFeasibility.rating;
      feasibilityCount[rating] = (feasibilityCount[rating] || 0) + 1;
    });

    console.log(`\nAutomation Feasibility:`);
    Object.keys(feasibilityCount).forEach((rating) => {
      console.log(`  ${rating}: ${feasibilityCount[rating]}`);
    });

    console.log(`\nNormalized test cases written to: ${relative(outputPath)}`);
  } catch (e) {
    console.error(`Error processing validation report: ${e.message || e}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { normalizeTestCase, parseSteps, main };
