const fs = require("fs");
const path = require("path");
const { readJson, relative, ROOT } = require("../../qa-pipeline-utils.cjs");
const { writeAgentRunDocx } = require("../builder.cjs");

function truncate(text, max = 200) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

async function formatExecuteRaiseDefectsDocx(payload = {}) {
  const summary = payload.summary || payload;
  const executionPath = summary.executionReport
    ? path.isAbsolute(summary.executionReport)
      ? summary.executionReport
      : path.join(ROOT, summary.executionReport)
    : path.join(ROOT, "results", "execution-report.json");

  let execution = {};
  if (fs.existsSync(executionPath)) {
    execution = readJson(executionPath);
  }

  const failedCases = (execution.testCases || []).filter((row) =>
    ["failed", "error", "timedout", "unexpected"].includes(String(row.status || "").toLowerCase()),
  );

  const defectRows = (summary.defectRows || failedCases).map((row) => [
    String(row.testCaseId || row.id || row["Test Case ID"] || ""),
    truncate(row.title || row.Summary || "", 180),
    String(row.Severity || row.severity || ""),
    String(row.Priority || row.priority || ""),
    String(row.module || row.Module || ""),
  ]);

  const sections = [
    {
      heading: "Run overview",
      keyValues: [
        ["Spec / folder", summary.specPath || ""],
        ["Milestone", summary.milestone || ""],
        ["Playwright exit code", String(summary.playwrightExitCode ?? execution.failed ?? "")],
        ["Total cases", String(execution.totalTestCases ?? "")],
        ["Passed", String(execution.passed ?? "")],
        ["Failed", String(execution.failed ?? failedCases.length)],
        ["Functional defect workbooks", (summary.defectFiles || []).join(", ") || "None"],
        ["Functional defects raised", String(summary.defectRowCount ?? defectRows.length)],
        ["UI/cosmetic defects raised", String(summary.uiDefectRowCount ?? 0)],
        ["Screens UI-audited", String(summary.uiScreensAudited ?? 0)],
        ["Google Defects sync", summary.google?.status || summary.googleSync?.status || "Awaiting approval"],
        ["Google UI Defects sync", summary.uiGoogleSync?.status || "Not run"],
      ],
    },
    {
      heading: "Failed test cases → functional defects raised",
      body: "Local defect Excel (Defects sheet) under pipeline/test-data/MilestoneN/Defects/. Google sync requires approval.",
      table: {
        headers: ["Test Case ID", "Description", "Severity", "Priority", "Module"],
        rows: defectRows.length ? defectRows : [["—", "No failures — no functional defects raised", "—", "—", "—"]],
      },
    },
  ];

  const uiPayloadPath = summary.uiAuditPayload
    ? path.isAbsolute(summary.uiAuditPayload)
      ? summary.uiAuditPayload
      : path.join(ROOT, summary.uiAuditPayload)
    : null;
  let uiRows = [];
  if (uiPayloadPath && fs.existsSync(uiPayloadPath)) {
    uiRows = readJson(uiPayloadPath, { rows: [] }).rows || [];
  }
  if (uiRows.length || summary.uiDefectRowCount) {
    sections.push({
      heading: "UI / UX / cosmetic defects",
      body:
        "Post-execute audit against Figma HTML + Stage 0 screenshot baselines. Rows appear on the UI Defects sheet in the same module workbook.",
      table: {
        headers: ["Defect ID", "Category", "Summary", "Severity", "Screen"],
        rows: uiRows.slice(0, 50).map((row) => [
          String(row["Defect ID"] || ""),
          String(row["Defect Category"] || ""),
          truncate(row.Summary || "", 120),
          String(row.Severity || ""),
          truncate(row["Screen Key"] || "", 80),
        ]),
      },
    });
  }

  if (summary.google?.reason) {
    sections.push({
      heading: "Google Sheet — functional defects",
      body: String(summary.google.reason),
    });
  }

  if (summary.uiGoogleSync?.reason) {
    sections.push({
      heading: "Google Sheet — UI defects",
      body: String(summary.uiGoogleSync.reason),
    });
  }

  return writeAgentRunDocx({
    agentSlug: "execute-raise-defects",
    title: `Execute & Raise Defects — ${summary.milestone || ""}`,
    suffix: summary.milestone || "",
    generatedAt: summary.generatedAt || new Date().toISOString(),
    sections,
  });
}

module.exports = { formatExecuteRaiseDefectsDocx };
