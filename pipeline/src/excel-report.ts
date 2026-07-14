import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";
import ExcelJS from "exceljs";
import type { ExecutionReport } from "./results-writer";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
const REPORT_DIR = path.join(PROJECT_ROOT, "report", "automation-execution-cycle");

interface EnvReport {
  envName: string;
  report: ExecutionReport;
}

function parseEnvsFilter(): Set<string> | null {
  const envsArg = process.argv.find((a) => a.startsWith("--envs="));
  if (!envsArg) return null;
  const names = envsArg
    .slice("--envs=".length)
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return names.length > 0 ? new Set(names) : null;
}

function isAllSkipped(report: ExecutionReport): boolean {
  return (
    report.testCases.length > 0 &&
    report.testCases.every(
      (tc) => (tc.status || "skipped").toLowerCase() === "skipped"
    )
  );
}

function discoverReports(): EnvReport[] {
  if (!fs.existsSync(RESULTS_DIR)) {
    throw new Error(`Results directory not found: ${RESULTS_DIR}. Run tests first.`);
  }

  const envsFilter = parseEnvsFilter();
  const reports: EnvReport[] = [];

  const topLevelReport = path.join(RESULTS_DIR, "execution-report.json");
  if (fs.existsSync(topLevelReport)) {
    const report = JSON.parse(fs.readFileSync(topLevelReport, "utf-8")) as ExecutionReport;
    const envName = report.environment || "default";
    if (!envsFilter || envsFilter.has(envName.toLowerCase())) {
      reports.push({ envName, report });
    }
  }

  const entries = fs.readdirSync(RESULTS_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const envReport = path.join(RESULTS_DIR, entry.name, "execution-report.json");
    if (fs.existsSync(envReport)) {
      const report = JSON.parse(fs.readFileSync(envReport, "utf-8")) as ExecutionReport;
      if (envsFilter && !envsFilter.has(entry.name.toLowerCase())) {
        console.log(`  ⊘ Skipping ${entry.name} (not in --envs filter)`);
        continue;
      }
      if (!envsFilter && isAllSkipped(report)) {
        console.log(`  ⊘ Excluding ${entry.name} (all test cases skipped — stale data)`);
        continue;
      }
      reports.push({ envName: entry.name, report });
    }
  }

  if (reports.length === 0) {
    throw new Error("No execution-report.json files found under results/. Run tests first.");
  }

  return reports;
}

function getFirstFailedStep(tc: ExecutionReport["testCases"][0]): string {
  const allSteps = [...(tc.steps || []), ...(tc.expectedResults || [])];
  const failed = allSteps.find((s) => (s.status || "").toLowerCase() === "failed");
  if (!failed) return "";
  const reason = failed.error ? failed.error.split("\n")[0].substring(0, 120) : "";
  return `${failed.description}${reason ? " — " + reason : ""}`;
}

function computeCounts(report: ExecutionReport): {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
} {
  const tcs = report.testCases;
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const tc of tcs) {
    const s = (tc.status || "skipped").toLowerCase();
    if (s === "passed") {
      passed++;
    } else if (s === "skipped") {
      skipped++;
    } else {
      failed++;
    }
  }

  return { total: tcs.length, passed, failed, skipped };
}

function formatTimestamp(iso: string | undefined): string {
  if (!iso) return "N/A";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "N/A";
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function formatDurationMs(ms: number): string {
  const durationSec = ms / 1000;
  const mins = Math.floor(durationSec / 60);
  const secs = Math.round(durationSec % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function formatTestStatus(tc: ExecutionReport["testCases"][0]): string {
  const status = (tc.status || "skipped").toLowerCase();
  if (status === "passed") return "Passed";
  if (status === "skipped") return "Skipped";
  return status === "error" ? "Error" : "Failed";
}

function formatFailureReason(tc: ExecutionReport["testCases"][0]): string {
  const status = (tc.status || "skipped").toLowerCase();
  if (status === "passed" || status === "skipped") return "";

  if (tc.error) {
    return tc.error.split("\n")[0].substring(0, 200);
  }

  const failInfo = getFirstFailedStep(tc);
  return failInfo || status;
}

async function generateExcelReport(): Promise<string> {
  const reports = discoverReports();

  const wb = new ExcelJS.Workbook();
  wb.creator = "QA-AI-Agent";
  wb.created = new Date();

  const headerFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1F4E79" },
  };
  const headerFont: Partial<ExcelJS.Font> = {
    bold: true,
    color: { argb: "FFFFFFFF" },
    size: 11,
  };
  const subHeaderFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFD6E4F0" },
  };
  const subHeaderFont: Partial<ExcelJS.Font> = {
    bold: true,
    size: 10,
  };
  const passedFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFC6EFCE" },
  };
  const failedFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFC7CE" },
  };
  const skippedFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFEB9C" },
  };
  const borderStyle: Partial<ExcelJS.Borders> = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };

  const summaryWs = wb.addWorksheet("Summary", {
    views: [{ state: "frozen", xSplit: 0, ySplit: 1 }],
  });

  const summaryHeaders = [
    "Environment",
    "URL",
    "Start Time",
    "End Time",
    "Total Duration",
    "Total Test Cases",
    "Passed",
    "Failed",
    "Skipped",
  ];

  const summaryHeaderRow = summaryWs.addRow(summaryHeaders);
  summaryHeaderRow.eachCell((cell) => {
    cell.fill = headerFill;
    cell.font = headerFont;
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = borderStyle;
  });
  summaryWs.getRow(1).height = 28;

  summaryWs.getColumn(1).width = 22;
  summaryWs.getColumn(2).width = 55;
  summaryWs.getColumn(3).width = 22;
  summaryWs.getColumn(4).width = 22;
  summaryWs.getColumn(5).width = 16;
  summaryWs.getColumn(6).width = 16;
  summaryWs.getColumn(7).width = 10;
  summaryWs.getColumn(8).width = 10;
  summaryWs.getColumn(9).width = 10;

  for (const { envName, report } of reports) {
    const counts = computeCounts(report);
    const summaryRow = summaryWs.addRow([
      envName,
      report.baseUrl,
      formatTimestamp(report.executedAt),
      formatTimestamp(report.finishedAt),
      formatDurationMs(report.durationMs),
      counts.total,
      counts.passed,
      counts.failed,
      counts.skipped,
    ]);

    summaryRow.getCell(1).font = { bold: true, size: 11 };
    summaryRow.getCell(2).font = { color: { argb: "FF0563C1" }, underline: true, size: 10 };
    summaryRow.getCell(7).font = { bold: true, color: { argb: "FF006100" } };
    summaryRow.getCell(8).font = { bold: true, color: { argb: "FF9C0006" } };
    summaryRow.getCell(9).font = { bold: true, color: { argb: "FF9C6500" } };

    summaryRow.eachCell((cell, colNumber) => {
      cell.border = borderStyle;
      if (colNumber >= 3) {
        cell.alignment = { horizontal: "center", vertical: "middle" };
      }
    });
  }

  const totalDurationMs = reports.reduce((s, r) => s + r.report.durationMs, 0);
  const grandTotal = reports.reduce(
    (acc, { report }) => {
      const c = computeCounts(report);
      return {
        total: acc.total + c.total,
        passed: acc.passed + c.passed,
        failed: acc.failed + c.failed,
        skipped: acc.skipped + c.skipped,
      };
    },
    { total: 0, passed: 0, failed: 0, skipped: 0 },
  );

  const earliestStart = reports.reduce((earliest, { report }) => {
    if (!report.executedAt) return earliest;
    return !earliest || report.executedAt < earliest ? report.executedAt : earliest;
  }, "");
  const latestEnd = reports.reduce((latest, { report }) => {
    if (!report.finishedAt) return latest;
    return !latest || report.finishedAt > latest ? report.finishedAt : latest;
  }, "");

  const totalRow = summaryWs.addRow([
    "TOTAL",
    "",
    formatTimestamp(earliestStart),
    formatTimestamp(latestEnd),
    formatDurationMs(totalDurationMs),
    grandTotal.total,
    grandTotal.passed,
    grandTotal.failed,
    grandTotal.skipped,
  ]);
  totalRow.eachCell((cell, colNumber) => {
    cell.fill = subHeaderFill;
    cell.font = { ...subHeaderFont, size: 11 };
    cell.border = borderStyle;
    if (colNumber >= 3) cell.alignment = { horizontal: "center" };
  });

  const detailWs = wb.addWorksheet("Test Results", {
    views: [{ state: "frozen", xSplit: 0, ySplit: 1 }],
  });

  const includeEnvironment = reports.length > 1;
  const detailHeaders = [
    "#",
    ...(includeEnvironment ? ["Environment"] : []),
    "Test Case ID",
    "Title",
    "Suite",
    "Status",
    "Duration",
    "Failure Reason",
  ];

  const detailHeaderRow = detailWs.addRow(detailHeaders);
  detailHeaderRow.eachCell((cell) => {
    cell.fill = headerFill;
    cell.font = headerFont;
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = borderStyle;
  });
  detailWs.getRow(1).height = 28;

  detailWs.getColumn(1).width = 6;
  let colIndex = 2;
  if (includeEnvironment) {
    detailWs.getColumn(colIndex).width = 18;
    colIndex++;
  }
  detailWs.getColumn(colIndex).width = 14;
  detailWs.getColumn(colIndex + 1).width = 55;
  detailWs.getColumn(colIndex + 2).width = 24;
  detailWs.getColumn(colIndex + 3).width = 12;
  detailWs.getColumn(colIndex + 4).width = 12;
  detailWs.getColumn(colIndex + 5).width = 60;

  let rowNumber = 0;
  for (const { envName, report } of reports) {
    for (const tc of report.testCases) {
      rowNumber++;
      const status = formatTestStatus(tc);
      const rowValues: (string | number)[] = [
        rowNumber,
        ...(includeEnvironment ? [envName] : []),
        tc.id,
        tc.title,
        tc.suite || "",
        status,
        formatDurationMs(tc.durationMs),
        formatFailureReason(tc),
      ];

      const dataRow = detailWs.addRow(rowValues);
      const statusCol = includeEnvironment ? 6 : 5;
      const statusCell = dataRow.getCell(statusCol);

      dataRow.getCell(1).alignment = { horizontal: "center", vertical: "middle" };
      dataRow.getCell(includeEnvironment ? 3 : 2).font = { bold: true };
      dataRow.getCell(includeEnvironment ? 4 : 3).alignment = { vertical: "top", wrapText: true };
      dataRow.getCell(statusCol).alignment = { horizontal: "center", vertical: "middle" };
      dataRow.getCell(statusCol + 1).alignment = { horizontal: "center", vertical: "middle" };
      dataRow.getCell(statusCol + 2).alignment = { vertical: "top", wrapText: true };

      if (status === "Passed") {
        statusCell.fill = passedFill;
        statusCell.font = { color: { argb: "FF006100" }, bold: true };
      } else if (status === "Failed" || status === "Error") {
        statusCell.fill = failedFill;
        statusCell.font = { color: { argb: "FF9C0006" }, bold: true };
      } else if (status === "Skipped") {
        statusCell.fill = skippedFill;
        statusCell.font = { color: { argb: "FF9C6500" }, bold: true };
      }

      dataRow.eachCell((cell) => {
        cell.border = borderStyle;
      });
    }
  }

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const outputPath = path.join(REPORT_DIR, "test-results.xlsx");
  await wb.xlsx.writeFile(outputPath);

  return outputPath;
}

async function main(): Promise<void> {
  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║                Excel Report Generator                    ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  try {
    const outputPath = await generateExcelReport();
    const relPath = path.relative(PROJECT_ROOT, outputPath);
    console.log(`  ✓ Excel report generated: ${relPath}`);
    console.log(`\n  Open it with: start ${relPath}\n`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  ✗ Error: ${msg}\n`);
    process.exit(1);
  }
}

export { generateExcelReport };

const isDirectRun = process.argv[1]?.replace(/\\/g, "/").includes("excel-report");
if (isDirectRun) {
  main();
}
