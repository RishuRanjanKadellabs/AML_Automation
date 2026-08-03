#!/usr/bin/env node
/**
 * Execute a Playwright spec (or module folder) and raise defects for failures.
 *
 * Defaults: **headed**, **1 worker**, **one persistent Chromium (CDP)** that stays
 * open until the full suite finishes — failures reconnect to the same window.
 *
 * Usage:
 *   npm run qa:run-module -- --spec <path/to/file.spec.ts>
 *
 * Options:
 *   --spec <path>          Required. Spec file or test directory
 *   --milestone <1|2>      Optional. Auto-detected from path when omitted
 *   --headless             Optional. Headless instead of default headed
 *   --workers <n>          Optional. Default 1
 *   --no-persistent        Optional. Disable CDP single-window mode
 *   --approve-google       Optional. Sync to Google only after local review approval
 *   --upsert               Optional. Refresh existing Google Defect IDs (requires --approve-google)
 *   --skip-ui-audit        Optional. Skip post-execute UI/UX/cosmetic audit
 */
const fs = require("fs");
const path = require("path");
const { absolute, arg, relative, readJson, writeJson, ROOT } = require("./qa-pipeline-utils.cjs");
const { finalizeModuleRun, syncGoogle } = require("./finalize-module-run.cjs");
const { ensurePlaywrightChromium } = require("./ensure-playwright-chromium.cjs");
const { runPersistentPlaywright } = require("./run-persistent-playwright.cjs");
const { auditUiCosmeticDefects } = require("./audit-ui-cosmetic-defects.cjs");
const { syncUiDefectRowsToGoogleSheet } = require("./append-ui-defects-google-sheet.js");
const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");

function detectMilestone(specPath, explicit) {
  const parsedExplicit = explicit ? Number.parseInt(String(explicit), 10) : null;
  if (parsedExplicit) return parsedExplicit;
  const match = String(specPath || "").match(/tests\/milestone(\d+)\//i);
  if (match) return Number.parseInt(match[1], 10);
  return null;
}

function resolveProject(milestone) {
  return `milestone${milestone}-chromium`;
}

async function main() {
  const specPath = arg("spec") || process.argv[2];
  if (!specPath || specPath.startsWith("--")) {
    throw new Error(
      "Usage: npm run qa:run-module -- --spec <path/to/spec-or-folder>",
    );
  }
  const preMilestone = detectMilestone(specPath, arg("milestone"));
  if (!preMilestone) {
    throw new Error(
      "Cannot detect milestone from --spec path; pass --milestone 1|2",
    );
  }

  const absSpec = absolute(specPath);
  if (!fs.existsSync(absSpec)) {
    throw new Error(`Spec path not found: ${specPath}`);
  }

  const headed = !process.argv.includes("--headless");
  const persistent = !process.argv.includes("--no-persistent");
  const approveGoogle =
    process.argv.includes("--approve-google") ||
    process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1";
  const upsert = process.argv.includes("--upsert");
  const workers = arg("workers", "1");

  await ensurePlaywrightChromium();

  console.log(
    `Execute+Defects: ${relative(absSpec)} (M${preMilestone}) — headed=${headed} workers=${workers} persistent=${persistent}`,
  );

  const skipUiAudit =
    process.argv.includes("--skip-ui-audit") || process.env.PW_SKIP_UI_AUDIT === "1";

  const run = await runPersistentPlaywright({
    specPath,
    project: resolveProject(preMilestone),
    headed,
    workers,
    persistent,
    env: {
      PW_DEFER_DEFECT_GENERATION: "0",
      PW_SKIP_MODULE_RUN_DOCX: "1",
      PW_UI_AUDIT: skipUiAudit ? "0" : "1",
    },
  });

  const finalized = await finalizeModuleRun({
    executionReportPath: run.reportPath,
    specPath,
    milestone: arg("milestone") || preMilestone,
    playwrightExitCode: run.exitCode,
    approveGoogle: false,
    upsert,
  });

  let uiAudit = null;
  if (!skipUiAudit) {
    console.log("UI cosmetic audit: starting post-execute screen analysis…");
    uiAudit = await auditUiCosmeticDefects({
      executionReportPath: run.reportPath,
      specPath,
      milestone: arg("milestone") || preMilestone,
    });
  }

  let googleSync = finalized.summary.googleSync;
  let uiGoogleSync = { status: "Skipped", reason: "Not requested" };
  if (approveGoogle) {
    googleSync = syncGoogle(finalized.summary.syncPayload, upsert);
    if (uiAudit?.payloadPath) {
      try {
        uiGoogleSync = await syncUiDefectRowsToGoogleSheet({
          rowsPath: absolute(uiAudit.payloadPath),
          upsert,
        });
      } catch (error) {
        uiGoogleSync = { status: "Blocked", reason: error.message };
        console.warn(`Google UI Defects sync blocked: ${error.message}`);
      }
    }
  } else if (uiAudit?.rows?.length) {
    uiGoogleSync = {
      status: "AwaitingApproval",
      reason:
        `Review UI Defects sheet locally, then: npm run qa:sync-ui-defects-sheet -- --rows ${uiAudit.payloadPath} --approved`,
    };
  }

  const summaryAbs = path.join(ROOT, finalized.summaryPath);
  const summary = readJson(summaryAbs);
  summary.uiDefectRowCount = uiAudit?.rows?.length || 0;
  summary.uiAuditPayload = uiAudit?.payloadPath || null;
  summary.uiWorkbook = uiAudit?.workbookPath || null;
  summary.uiGoogleSync = uiGoogleSync;
  summary.uiScreensAudited = uiAudit?.screensAudited || 0;
  writeJson(summaryAbs, summary);
  writeJson(path.join(ROOT, "results", "qa-pipeline", "defects", "latest-module-run.json"), summary);

  let docxPath = finalized.docxPath;
  try {
    const docx = await writeAgentRunReport("execute-raise-defects", { summary });
    docxPath = docx.relativePath;
    summary.agentRunDocx = docxPath;
    writeJson(summaryAbs, summary);
  } catch (error) {
    console.warn(`Agent run docx refresh skipped: ${error.message}`);
  }

  console.log(
    JSON.stringify(
      {
        mode: {
          headed: run.headed,
          workers: run.workers,
          persistent: run.persistent,
        },
        passedHint: "See results/execution-report.json",
        docx: docxPath,
        defectFiles: finalized.summary.defectFiles,
        defectRows: finalized.summary.defectRowCount,
        uiDefectRows: uiAudit?.rows?.length || 0,
        uiAuditPayload: uiAudit?.payloadPath || null,
        uiWorkbook: uiAudit?.workbookPath || null,
        googleSync: googleSync?.status || finalized.summary.googleSync?.status,
        uiGoogleSync: uiGoogleSync.status,
        summary: finalized.summaryPath,
      },
      null,
      2,
    ),
  );
  process.exitCode = run.exitCode === 0 ? 0 : run.exitCode || 1;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Execute+Defects failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main };
