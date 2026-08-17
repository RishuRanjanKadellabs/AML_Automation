#!/usr/bin/env node
/**
 * Post-run finalization for milestone module/spec execution:
 *   - ensure local defect Excel + sync payload
 *   - write execute-raise-defects summary JSON
 *   - write stakeholder DOCX under docs/agent-runs/execute-raise-defects/
 *   - optionally sync Google Defects tab after approval
 *
 * Auto-invoked from pipeline-reporter after milestone runs unless skipped.
 * execute-raise-defects calls this explicitly after Playwright finishes.
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  absolute,
  arg,
  relative,
  writeJson,
  readJson,
} = require("./qa-pipeline-utils.cjs");
const { generateDefectFiles } = require("./generate-module-defects.js");
const { resolveDefectMilestoneFromExecution } = require("./resolve-defect-milestone.cjs");
const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");

function resolveMilestone({ explicitMilestone, execution, specPath }) {
  const parsedExplicit = explicitMilestone
    ? Number.parseInt(String(explicitMilestone), 10)
    : null;
  if (parsedExplicit) return parsedExplicit;
  if (execution?.milestone) return execution.milestone;
  if (execution) {
    const fromArtifacts = resolveDefectMilestoneFromExecution(execution, {
      explicitMilestone,
    });
    if (fromArtifacts) return fromArtifacts;
  }
  const match = String(specPath || "").match(/tests\/milestone(\d+)\//i);
  if (match) return Number.parseInt(match[1], 10);
  return null;
}

function inferSpecPath(execution, specPath) {
  if (specPath) return relative(absolute(specPath));
  const specs = execution?.specsExecuted || [];
  if (specs.length === 1) return specs[0];
  if (specs.length > 1) return specs.join(", ");
  return "";
}

function syncGoogle(syncPayloadPath, upsert) {
  if (!syncPayloadPath) {
    return { status: "Skipped", reason: "No sync payload / zero failures" };
  }
  const abs = absolute(syncPayloadPath);
  if (!fs.existsSync(abs)) {
    return { status: "Skipped", reason: `Missing ${syncPayloadPath}` };
  }
  const payload = readJson(abs);
  if (!Array.isArray(payload.rows) || !payload.rows.length) {
    return { status: "Skipped", reason: "No defect rows" };
  }
  const args = [
    path.join("pipeline", "scripts", "append-defects-google-sheet.js"),
    "--rows",
    relative(abs),
    "--approved",
  ];
  if (upsert) args.push("--upsert");
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    env: process.env,
    stdio: "inherit",
  });
  return {
    status: result.status === 0 ? "Synced" : "Blocked",
    exitCode: result.status == null ? 1 : result.status,
  };
}

async function finalizeModuleRun(options = {}) {
  const executionReportPath = absolute(
    options.executionReportPath || path.join(ROOT, "results", "execution-report.json"),
  );
  if (!fs.existsSync(executionReportPath)) {
    throw new Error(`Missing execution report: ${relative(executionReportPath)}`);
  }

  const execution = readJson(executionReportPath);
  const milestone = resolveMilestone({
    explicitMilestone: options.milestone,
    execution,
    specPath: options.specPath,
  });
  if (!milestone) {
    throw new Error(
      "Cannot resolve milestone for module run finalization; pass --milestone 1|2",
    );
  }

  const defects = generateDefectFiles({
    execution,
    executionPath: executionReportPath,
    milestone,
  });

  const approveGoogle =
    options.approveGoogle === true ||
    process.argv.includes("--approve-google") ||
    process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1";
  const upsert =
    options.upsert !== false &&
    !process.argv.includes("--no-upsert") &&
    (options.upsert === true ||
      process.argv.includes("--upsert") ||
      process.env.PW_DEFECT_SYNC_UPSERT === "1" ||
      options.approveGoogle === true ||
      process.argv.includes("--approve-google") ||
      process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1");

  let google = {
    status: "AwaitingApproval",
    reason:
      "Local defect Excel generated for review. Reply Approve defects, or run npm run qa:sync-defects-sheet -- --rows <payload> --approved",
  };
  if (approveGoogle) {
    google = syncGoogle(defects.syncPayloadPath, upsert);
  } else if ((defects.rows || []).length) {
    google.reason =
      `Local defect Excel ready for review. After approval run:\n` +
      `  npm run qa:sync-defects-sheet -- --rows ${defects.syncPayloadPath} --approved` +
      (upsert ? " --upsert" : "");
  } else {
    google = { status: "Skipped", reason: "No failed cases / no defect rows" };
  }

  const specPathResolved = inferSpecPath(execution, options.specPath);
  const summary = {
    generatedAt: new Date().toISOString(),
    specPath: specPathResolved,
    milestone: `M${milestone}`,
    playwrightExitCode:
      options.playwrightExitCode == null ? execution.failed > 0 ? 1 : 0 : options.playwrightExitCode,
    defectFiles: defects.files || [],
    defectRows: defects.rows || [],
    defectRowCount: (defects.rows || []).length,
    google,
    googleSync: google,
    localReviewRequired: !approveGoogle && (defects.rows || []).length > 0,
    executionReport: relative(executionReportPath),
    syncPayload: defects.syncPayloadPath || null,
    passed: execution.passed ?? null,
    failed: execution.failed ?? null,
    totalTestCases: execution.totalTestCases ?? null,
  };

  const summaryPath = path.join(
    ROOT,
    "results",
    "qa-pipeline",
    "defects",
    `execute-raise-defects-M${milestone}.json`,
  );
  const latestPath = path.join(
    ROOT,
    "results",
    "qa-pipeline",
    "defects",
    "latest-module-run.json",
  );
  writeJson(summaryPath, summary);
  writeJson(latestPath, summary);

  let docxPath = null;
  try {
    const docx = await writeAgentRunReport("execute-raise-defects", { summary });
    docxPath = docx.relativePath;
    summary.agentRunDocx = docxPath;
    writeJson(summaryPath, summary);
    writeJson(latestPath, summary);
    console.log(`Agent run docx → ${docxPath}`);
  } catch (error) {
    console.warn(`Agent run docx skipped: ${error.message}`);
    summary.agentRunDocxError = error.message;
  }

  console.log(`Module run summary → ${relative(summaryPath)}`);
  if ((defects.rows || []).length && !approveGoogle) {
    console.log(google.reason);
  }

  return { summary, summaryPath: relative(summaryPath), docxPath, defects };
}

async function main() {
  const result = await finalizeModuleRun({
    executionReportPath: arg("execution") || "results/execution-report.json",
    specPath: arg("spec"),
    milestone: arg("milestone"),
    playwrightExitCode: arg("exit-code")
      ? Number.parseInt(String(arg("exit-code")), 10)
      : undefined,
    approveGoogle: process.argv.includes("--approve-google"),
    upsert: process.argv.includes("--upsert"),
  });
  console.log(
    JSON.stringify(
      {
        docx: result.docxPath,
        defectFiles: result.summary.defectFiles,
        defectRows: result.summary.defectRowCount,
        googleSync: result.summary.googleSync.status,
        summary: result.summaryPath,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`finalize-module-run failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { finalizeModuleRun, syncGoogle };
