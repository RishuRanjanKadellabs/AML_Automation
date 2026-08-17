#!/usr/bin/env node
/**
 * Generate QA Automation Dashboard Excel workbook under docs/.
 *
 * Usage:
 *   npm run docs:qa-dashboard
 *   node pipeline/scripts/generate-qa-dashboard-xlsx.cjs [--execution results/execution-report.json]
 */
const fs = require("fs");
const path = require("path");
const ExcelJS = require("exceljs");
const XLSX = require("xlsx");
const { ROOT, absolute, arg, readJson, relative } = require("./qa-pipeline-utils.cjs");

const OUTPUT = path.join(ROOT, "docs", "QA-Automation-Dashboard.xlsx");
const EXECUTION_DEFAULT = path.join(ROOT, "results", "execution-report.json");
const DEFECTS_DIR = path.join(ROOT, "pipeline", "test-data");

const STYLES = {
  headerFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F4E79" } },
  headerFont: { bold: true, color: { argb: "FFFFFFFF" }, size: 11 },
  kpiLabelFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFD6E4F0" } },
  kpiValueFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFF2F9FF" } },
  sectionFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFE2EFDA" } },
  passFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFC6EFCE" } },
  failFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFC7CE" } },
  warnFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFEB9C" } },
  manualFill: { type: "pattern", pattern: "solid", fgColor: { argb: "FFE4DFEC" } },
  border: {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  },
};

function pct(n, d) {
  if (!d) return null;
  return Math.round((n / d) * 1000) / 10;
}

function formatDurationMs(ms) {
  if (!ms && ms !== 0) return "";
  const sec = Math.round(ms / 1000);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function formatTs(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("en-IN", { hour12: false });
}

function discoverExecutionReports() {
  const paths = [];
  const top = absolute(arg("execution") || EXECUTION_DEFAULT);
  if (fs.existsSync(top)) paths.push(top);

  const resultsDir = path.join(ROOT, "results");
  if (fs.existsSync(resultsDir)) {
    for (const entry of fs.readdirSync(resultsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const p = path.join(resultsDir, entry.name, "execution-report.json");
      if (fs.existsSync(p) && !paths.includes(p)) paths.push(p);
    }
  }
  return paths.map((p) => ({ path: p, report: readJson(p) }));
}

function testIdsInSpec(specPath) {
  const abs = absolute(specPath);
  if (!fs.existsSync(abs)) return new Set();
  const source = fs.readFileSync(abs, "utf8");
  const ids = [...source.matchAll(/Test Case ID:([A-Za-z0-9_-]+)/g)].map((m) => m[1]);
  return new Set(ids);
}

function discoverDefectWorkbooks() {
  const rows = [];
  for (const milestone of ["Milestone1", "Milestone2"]) {
    const dir = path.join(DEFECTS_DIR, milestone, "Defects");
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith("-defects.xlsx")) continue;
      const wb = XLSX.readFile(path.join(dir, file));
      const sheetName =
        wb.SheetNames.find((n) => n.toLowerCase() === "defects") || wb.SheetNames[0];
      const sheet = wb.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      for (const row of json) {
        if (!row["Test Case ID"] && !row.testCaseId) continue;
        rows.push({
          ...row,
          _sourceFile: relative(path.join(dir, file)),
          _milestone: milestone.replace("Milestone", "M"),
        });
      }
    }
  }
  return rows;
}

function applyHeaderRow(ws, headers, rowNum = 1) {
  const row = ws.getRow(rowNum);
  headers.forEach((h, i) => {
    const cell = row.getCell(i + 1);
    cell.value = h;
    cell.fill = STYLES.headerFill;
    cell.font = STYLES.headerFont;
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    cell.border = STYLES.border;
  });
  row.height = 26;
}

function styleKpiBlock(ws, startRow, label, value, opts = {}) {
  const labelCell = ws.getCell(`A${startRow}`);
  const valueCell = ws.getCell(`B${startRow}`);
  labelCell.value = label;
  valueCell.value = value;
  labelCell.fill = STYLES.kpiLabelFill;
  valueCell.fill = opts.fill || STYLES.kpiValueFill;
  labelCell.font = { bold: true, size: 10 };
  valueCell.font = { bold: true, size: 12, color: opts.color || { argb: "FF1F4E79" } };
  labelCell.border = STYLES.border;
  valueCell.border = STYLES.border;
  labelCell.alignment = { vertical: "middle", wrapText: true };
  valueCell.alignment = { horizontal: "center", vertical: "middle" };
}

function buildDashboardSheet(wb, ctx) {
  const ws = wb.addWorksheet("Dashboard", {
    views: [{ state: "frozen", ySplit: 3 }],
    properties: { tabColor: { argb: "FF1F4E79" } },
  });
  ws.getColumn(1).width = 42;
  ws.getColumn(2).width = 18;
  ws.getColumn(3).width = 42;
  ws.getColumn(4).width = 18;

  ws.mergeCells("A1:D1");
  const title = ws.getCell("A1");
  title.value = "AML QA Automation — Performance Dashboard";
  title.font = { bold: true, size: 16, color: { argb: "FF1F4E79" } };
  title.alignment = { horizontal: "center" };

  ws.mergeCells("A2:D2");
  ws.getCell("A2").value = `Generated: ${formatTs(new Date().toISOString())}  |  Data source: latest execution + defect workbooks`;
  ws.getCell("A2").font = { italic: true, size: 9, color: { argb: "FF666666" } };
  ws.getCell("A2").alignment = { horizontal: "center" };

  let r = 4;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "Automation execution (latest run)";
  ws.getCell(`A${r}`).fill = STYLES.sectionFill;
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;

  const exec = ctx.primaryExecution;
  if (exec) {
    const passPct = pct(exec.passed, exec.total);
    styleKpiBlock(ws, r++, "Module", ctx.moduleName);
    styleKpiBlock(ws, r++, "Environment", exec.environment);
    styleKpiBlock(ws, r++, "Milestone", exec.milestone ? `M${exec.milestone}` : "—");
    styleKpiBlock(ws, r++, "Run date", formatTs(exec.executedAt));
    styleKpiBlock(ws, r++, "Total executed", exec.total);
    styleKpiBlock(ws, r++, "Passed", exec.passed, {
      fill: STYLES.passFill,
      color: { argb: "FF006100" },
    });
    styleKpiBlock(ws, r++, "Failed", exec.failed, {
      fill: STYLES.failFill,
      color: { argb: "FF9C0006" },
    });
    styleKpiBlock(ws, r++, "Skipped", exec.skipped);
    styleKpiBlock(ws, r++, "Pass rate %", passPct != null ? `${passPct}%` : "—");
    styleKpiBlock(ws, r++, "Duration", formatDurationMs(exec.durationMs));
    styleKpiBlock(ws, r++, "Automated TCs in spec", ctx.automatedTcCount);
  } else {
    styleKpiBlock(ws, r++, "Automation execution", "No execution-report.json found — run tests first");
  }

  r++;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "Defects — automation vs manual";
  ws.getCell(`A${r}`).fill = STYLES.sectionFill;
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;

  styleKpiBlock(ws, r++, "Defects from automation (failed runs)", ctx.automationDefectCount);
  styleKpiBlock(
    ws,
    r++,
    "Defects from manual testing",
    { formula: "COUNTA('Manual Defect Register'!A:A)-1" },
    { fill: STYLES.manualFill, color: { argb: "FF7030A0" } },
  );
  styleKpiBlock(
    ws,
    r++,
    "Missed by automation (manual found, auto did not catch)",
    { formula: "COUNTIF('Manual Defect Register'!O:O,\"Yes\")" },
    { fill: STYLES.warnFill, color: { argb: "FF9C6500" } },
  );
  styleKpiBlock(
    ws,
    r++,
    "False negatives (manual defect + automation passed)",
    { formula: "COUNTIFS('Manual Defect Register'!O:O,\"Yes\",'Manual Defect Register'!N:N,\"Passed\")" },
    { fill: STYLES.failFill, color: { argb: "FF9C0006" } },
  );
  styleKpiBlock(
    ws,
    r++,
    "Automation escape rate %",
    {
      formula:
        'IF((INDEX(\'Automation Runs\'!H:H,2)+COUNTA(\'Manual Defect Register\'!A:A)-1)=0,"—",ROUND(COUNTIF(\'Manual Defect Register\'!O:O,"Yes")/(INDEX(\'Automation Runs\'!H:H,2)+COUNTA(\'Manual Defect Register\'!A:A)-1)*100,1)&"%")',
    },
    { fill: STYLES.warnFill, color: { argb: "FF9C6500" } },
  );

  r++;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "How to use";
  ws.getCell(`A${r}`).fill = STYLES.sectionFill;
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;
  const notes = [
    "1. Automation metrics refresh when you run: npm run docs:qa-dashboard",
    "2. Log manual defects on sheet 'Manual Defect Register' — Dashboard formulas update automatically",
    "3. 'Missed by automation' = manual defect where automation passed, did not run, or had no coverage",
    "4. Automation defects are loaded from pipeline/test-data/MilestoneN/Defects/*-defects.xlsx",
  ];
  for (const note of notes) {
    ws.mergeCells(`A${r}:D${r}`);
    ws.getCell(`A${r}`).value = note;
    ws.getCell(`A${r}`).font = { size: 9 };
    r++;
  }
}

function buildAutomationRunsSheet(wb, ctx) {
  const ws = wb.addWorksheet("Automation Runs", {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  const headers = [
    "Run Date",
    "Module",
    "Milestone",
    "Environment",
    "Base URL",
    "Spec Path",
    "Total",
    "Passed",
    "Failed",
    "Skipped",
    "Pass Rate %",
    "Duration",
    "Duration (min)",
  ];
  applyHeaderRow(ws, headers);
  const widths = [20, 36, 10, 12, 40, 55, 8, 8, 8, 8, 12, 12, 12];
  widths.forEach((w, i) => {
    ws.getColumn(i + 1).width = w;
  });

  for (const run of ctx.runs) {
    const rep = run.report;
    const total = rep.totalTestCases || rep.testCases?.length || 0;
    const passed = rep.passed ?? 0;
    const failed = rep.failed ?? 0;
    const skipped = rep.skipped ?? 0;
    const module =
      rep.testCases?.[0]?.module ||
      rep.specsExecuted?.[0]?.split("/").slice(-2, -1)[0] ||
      "—";
    const row = ws.addRow([
      formatTs(rep.executedAt),
      module,
      rep.milestone ? `M${rep.milestone}` : "—",
      rep.environment || "—",
      rep.baseUrl || "—",
      (rep.specsExecuted || []).join("; "),
      total,
      passed,
      failed,
      skipped,
      pct(passed, total),
      formatDurationMs(rep.durationMs),
      rep.durationMs ? Math.round((rep.durationMs / 60000) * 10) / 10 : "",
    ]);
    row.eachCell((cell, col) => {
      cell.border = STYLES.border;
      if (col >= 7 && col <= 10) cell.alignment = { horizontal: "center" };
      if (col === 8) cell.fill = STYLES.passFill;
      if (col === 9) cell.fill = STYLES.failFill;
    });
  }
}

function buildTestCaseResultsSheet(wb, ctx) {
  const ws = wb.addWorksheet("Test Case Results", {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  const headers = [
    "Test Case ID",
    "Module",
    "Feature / Suite",
    "Status",
    "Duration",
    "In Spec",
    "Failure Reason (first line)",
  ];
  applyHeaderRow(ws, headers);
  ws.getColumn(1).width = 16;
  ws.getColumn(2).width = 34;
  ws.getColumn(3).width = 36;
  ws.getColumn(4).width = 10;
  ws.getColumn(5).width = 12;
  ws.getColumn(6).width = 10;
  ws.getColumn(7).width = 70;

  const exec = ctx.primaryExecution;
  if (!exec?.testCases) return;

  for (const tc of exec.testCases) {
    const status = (tc.status || "").toLowerCase();
    const row = ws.addRow([
      tc.id,
      tc.module || ctx.moduleName,
      tc.suite || "",
      status === "passed" ? "Passed" : status === "skipped" ? "Skipped" : "Failed",
      formatDurationMs(tc.durationMs),
      ctx.specTcIds.has(tc.id) ? "Yes" : "No",
      tc.error ? String(tc.error).split("\n")[0].substring(0, 300) : "",
    ]);
    row.eachCell((cell, col) => {
      cell.border = STYLES.border;
      if (col === 4) {
        cell.alignment = { horizontal: "center" };
        if (status === "passed") {
          cell.fill = STYLES.passFill;
          cell.font = { bold: true, color: { argb: "FF006100" } };
        } else if (status === "failed" || status === "error") {
          cell.fill = STYLES.failFill;
          cell.font = { bold: true, color: { argb: "FF9C0006" } };
        }
      }
    });
  }
}

function buildDefectComparisonSheet(wb, ctx) {
  const ws = wb.addWorksheet("Defect Comparison", {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  const headers = [
    "Defect ID",
    "Test Case ID",
    "Module",
    "Feature",
    "Found By",
    "Detection Phase",
    "Severity",
    "Priority",
    "Status",
    "Environment",
    "Automation TC Exists",
    "Last Automation Result",
    "Missed By Automation",
    "Miss Reason",
    "Summary",
    "Source File",
  ];
  applyHeaderRow(ws, headers);
  [14, 14, 30, 22, 12, 18, 10, 10, 14, 12, 16, 18, 18, 28, 50, 40].forEach((w, i) => {
    ws.getColumn(i + 1).width = w;
  });

  const resultByTc = ctx.resultByTc || new Map();

  for (const d of ctx.automationDefects) {
    const tcId = d["Test Case ID"] || d.testCaseId || "";
    const autoResult = resultByTc.get(tcId) || "Failed";
    const row = ws.addRow([
      d["Defect ID"] || "",
      tcId,
      d.Module || "",
      d.Feature || "",
      "Automation",
      "Automation run",
      d.Severity || "",
      d.Priority || "",
      d.Status || "New",
      d.Environment || "",
      ctx.specTcIds.has(tcId) ? "Yes" : "No",
      autoResult,
      "No",
      "Caught by automation",
      d.Summary || "",
      d._sourceFile || "",
    ]);
    row.eachCell((cell, col) => {
      cell.border = STYLES.border;
      if (col === 5) cell.fill = STYLES.kpiValueFill;
      if (col === 13) {
        cell.fill = STYLES.passFill;
        cell.font = { bold: true, color: { argb: "FF006100" } };
      }
    });
  }
}

function buildManualDefectRegisterSheet(wb) {
  const ws = wb.addWorksheet("Manual Defect Register", {
    views: [{ state: "frozen", ySplit: 1 }],
    properties: { tabColor: { argb: "FF7030A0" } },
  });
  const headers = [
    "Defect ID",
    "Test Case ID",
    "Module",
    "Feature",
    "Found By",
    "Detection Phase",
    "Summary",
    "Severity",
    "Priority",
    "Status",
    "Environment",
    "Found Date",
    "Automation TC Exists",
    "Last Automation Result",
    "Missed By Automation",
    "Miss Reason",
  ];
  applyHeaderRow(ws, headers);
  [16, 14, 30, 22, 10, 18, 50, 10, 10, 14, 12, 14, 16, 18, 18, 28].forEach((w, i) => {
    ws.getColumn(i + 1).width = w;
  });

  ws.addRow([
    "DEF-M2-MAN-001",
    "",
    "Customer Risk Rating Configuration",
    "",
    "Manual",
    "Manual regression",
    "Example: describe issue found during manual testing",
    "Medium",
    "Medium",
    "New",
    "qa",
    "",
    "No",
    "Not executed",
    "Yes",
    "Not automated — no script",
  ]).eachCell((cell) => {
    cell.border = STYLES.border;
    cell.font = { italic: true, color: { argb: "FF888888" } };
  });

  ws.getCell("A3").note = {
    texts: [
      {
        font: { size: 10, color: { theme: 1 }, name: "Calibri", family: 2, scheme: "minor" },
        text:
          "Delete the example row. Add one row per manual defect.\n" +
          "Missed By Automation = Yes when automation passed, did not run, or had no TC.\n" +
          "Dashboard KPIs use formulas on this sheet.",
      },
    ],
  };
}

function buildLegendSheet(wb) {
  const ws = wb.addWorksheet("Legend", {
    properties: { tabColor: { argb: "FF808080" } },
  });
  ws.getColumn(1).width = 28;
  ws.getColumn(2).width = 70;

  const rows = [
    ["Field", "Definition"],
    ["Pass rate %", "Passed ÷ Total executed × 100"],
    ["Defects from automation", "Rows in *-defects.xlsx from failed Playwright runs"],
    ["Defects from manual testing", "Rows you add on Manual Defect Register (Found By = Manual)"],
    ["Missed by automation", "Manual defect where automation did not catch the issue (Yes on register)"],
    ["False negative", "Manual defect + same TC automation result = Passed"],
    ["Automation escape rate %", "Missed by automation ÷ (Automation passed + manual defects found)"],
    ["Miss reason: False negative — automation passed", "TC in spec, last run passed, manual found bug"],
    ["Miss reason: Not automated — no script", "TC in Excel but not in .spec.ts"],
    ["Miss reason: Manual-only test case", "Excel case marked manual-only by design"],
    ["Regenerate dashboard", "npm run docs:qa-dashboard"],
  ];

  rows.forEach((values, idx) => {
    const row = ws.addRow(values);
    row.eachCell((cell) => {
      cell.border = STYLES.border;
      if (idx === 0) {
        cell.fill = STYLES.headerFill;
        cell.font = STYLES.headerFont;
      }
    });
  });
}

function collectContext() {
  const runs = discoverExecutionReports();
  const primary = runs[0]?.report || null;
  const specPath = primary?.specsExecuted?.[0] || "";
  const specTcIds = specPath ? testIdsInSpec(specPath) : new Set();
  const automationDefects = discoverDefectWorkbooks();
  const resultByTc = new Map();
  if (primary?.testCases) {
    for (const tc of primary.testCases) {
      resultByTc.set(tc.id, (tc.status || "").toLowerCase() === "passed" ? "Passed" : "Failed");
    }
  }

  const moduleName =
    primary?.testCases?.[0]?.module ||
    (specPath.includes("customer-risk-rating") ? "Customer Risk Rating Configuration" : "—");

  return {
    runs,
    primaryExecution: primary
      ? {
          executedAt: primary.executedAt,
          environment: primary.environment,
          milestone: primary.milestone,
          total: primary.totalTestCases || primary.testCases?.length || 0,
          passed: primary.passed ?? 0,
          failed: primary.failed ?? 0,
          skipped: primary.skipped ?? 0,
          durationMs: primary.durationMs,
          testCases: primary.testCases,
        }
      : null,
    moduleName,
    specTcIds,
    automatedTcCount: specTcIds.size,
    automationDefects,
    automationDefectCount: automationDefects.length,
    resultByTc,
  };
}

async function main() {
  const ctx = collectContext();
  const wb = new ExcelJS.Workbook();
  wb.creator = "AML Automation QA Dashboard";
  wb.created = new Date();

  buildDashboardSheet(wb, ctx);
  buildAutomationRunsSheet(wb, ctx);
  buildTestCaseResultsSheet(wb, ctx);
  buildDefectComparisonSheet(wb, ctx);
  buildManualDefectRegisterSheet(wb);
  buildLegendSheet(wb);

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  await wb.xlsx.writeFile(OUTPUT);

  console.log(`QA dashboard written → ${relative(OUTPUT)}`);
  if (ctx.primaryExecution) {
    console.log(
      `  Latest run: ${ctx.moduleName} — ${ctx.primaryExecution.passed} passed / ${ctx.primaryExecution.failed} failed / ${ctx.primaryExecution.total} total`,
    );
  }
  console.log(`  Automation defects loaded: ${ctx.automationDefectCount}`);
  console.log(`  Regenerate: npm run docs:qa-dashboard`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(`Dashboard generation failed: ${err.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main, collectContext, OUTPUT };
