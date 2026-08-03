const fs = require("fs");
const path = require("path");
const { readJson, relative, ROOT } = require("../../qa-pipeline-utils.cjs");
const { writeAgentRunDocx } = require("../builder.cjs");

function truncate(text, max = 220) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

function loadScope(summary) {
  const scopePath = summary.scopePath
    ? path.isAbsolute(summary.scopePath)
      ? summary.scopePath
      : path.join(ROOT, summary.scopePath)
    : "";
  if (scopePath && fs.existsSync(scopePath)) return readJson(scopePath);
  const milestone = String(summary.milestone || "M1").replace(/^M/i, "");
  const fallback = path.join(
    ROOT,
    "results/qa-pipeline/defect-regression",
    `scope-M${milestone}.json`,
  );
  return fs.existsSync(fallback) ? readJson(fallback) : { groups: [] };
}

function loadExecutionTitles(summary) {
  const reportPath = summary.executionReport
    ? path.isAbsolute(summary.executionReport)
      ? summary.executionReport
      : path.join(ROOT, summary.executionReport)
    : "";
  if (!reportPath || !fs.existsSync(reportPath)) return new Map();
  const report = readJson(reportPath);
  const cases = report.testCases || report.caseResults || [];
  return new Map(
    cases.map((row) => [
      String(row.id || row.testCaseId || "").trim(),
      truncate(row.title || row.description || "", 180),
    ]),
  );
}

async function formatDefectRegressionDocx(payload = {}) {
  const summary = payload.summary || payload;
  const scope = loadScope(summary);
  const titleMap = loadExecutionTitles(summary);

  const pickedRows = (scope.groups || []).map((group) => {
    const defect = group.defect || {};
    return [
      String(defect["Test Case ID"] || group.anchorTestCaseId || ""),
      String(defect["Defect ID"] || ""),
      truncate(defect.Summary || defect.Feature || group.feature || "", 200),
      String(defect.Status || "Resolved"),
    ];
  });

  const executedIds = [];
  for (const group of scope.groups || []) {
    for (const id of group.regressionCaseIds || []) {
      if (!executedIds.includes(id)) executedIds.push(id);
    }
  }

  const executedRows = executedIds.map((id) => [
    id,
    titleMap.get(id) || "(title from Playwright execution report)",
    summary.statusUpdates?.some((row) => row.regressionCaseIds?.includes(id))
      ? "In regression scope"
      : "Executed",
  ]);

  const outcomeRows = (summary.statusUpdates || []).map((row) => [
    row.testCaseId,
    row.anchorResult || "",
    row.status || "",
  ]);

  const sections = [
    {
      heading: "Run overview",
      keyValues: [
        ["Milestone", summary.milestone || ""],
        ["Source", summary.source || "google"],
        ["Resolved defects picked", String(summary.resolvedDefects ?? pickedRows.length)],
        ["Regression cases executed", String(summary.regressionCasesRun ?? executedIds.length)],
        ["Closed", String(summary.closed ?? 0)],
        ["Reopened", String(summary.reopened ?? 0)],
        ["Unchanged (still Resolved)", String(summary.unchanged ?? 0)],
        ["Environment blocked", String(summary.environmentBlocked ?? 0)],
        [
          "Google sync",
          summary.googleSync?.status ||
            (summary.updateResult?.googleSync?.status ?? "See summary JSON"),
        ],
        ["Scope artifact", summary.scopePath ? relative(summary.scopePath) : ""],
        ["Execution report", summary.executionReport ? relative(summary.executionReport) : ""],
      ],
    },
    {
      heading: "Resolved defects picked from Google Sheet",
      body:
        "Each row was Status = Resolved on the shared Google Defects tab and selected for regression retest.",
      table: {
        headers: ["Test Case ID", "Defect ID", "Summary / description", "Prior status"],
        rows: pickedRows.length ? pickedRows : [["—", "—", "No defects in scope", "—"]],
      },
    },
    {
      heading: "Test cases executed for regression",
      body: "Direct and indirect related cases run as part of the regression scope.",
      table: {
        headers: ["Test Case ID", "Description", "Notes"],
        rows: executedRows.length ? executedRows : [["—", "—", "—"]],
      },
    },
    {
      heading: "Status outcomes (anchor defects)",
      table: {
        headers: ["Anchor Test Case ID", "Anchor result", "New Status on Google"],
        rows: outcomeRows.length ? outcomeRows : [["—", "—", "—"]],
      },
    },
  ];

  if (summary.browserEnsure) {
    sections.push({
      heading: "Environment",
      keyValues: [
        ["Playwright Chromium", summary.browserEnsure.action || ""],
        ["Browser ready", String(summary.browserEnsure.ready ?? "")],
      ],
    });
  }

  return writeAgentRunDocx({
    agentSlug: "defect-regression",
    title: `Defect Regression — ${summary.milestone || "M?"}`,
    suffix: summary.milestone || "",
    generatedAt: summary.generatedAt || new Date().toISOString(),
    sections,
  });
}

module.exports = { formatDefectRegressionDocx };
