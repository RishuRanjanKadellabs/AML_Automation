#!/usr/bin/env node
/**
 * Sync the latest module-run defect payload to Google after local approval.
 *
 * Usage:
 *   npm run qa:approve-defects-sync
 *   npm run qa:approve-defects-sync -- --rows results/qa-pipeline/defects/milestone-2-defect-rows.json
 *   npm run qa:approve-defects-sync -- --ui-rows results/qa-pipeline/defects/milestone-2-ui-defect-rows.json
 *   npm run qa:approve-defects-sync -- --upsert
 */
const fs = require("fs");
const path = require("path");
const { ROOT, arg, readJson, relative } = require("./qa-pipeline-utils.cjs");
const { syncGoogle } = require("./finalize-module-run.cjs");
const { syncUiDefectRowsToGoogleSheet } = require("./append-ui-defects-google-sheet.js");

async function main() {
  const explicitRows = arg("rows");
  const explicitUiRows = arg("ui-rows");
  const upsert = !process.argv.includes("--no-upsert");

  const latestPath = path.join(ROOT, "results", "qa-pipeline", "defects", "latest-module-run.json");
  const latest = fs.existsSync(latestPath) ? readJson(latestPath) : null;

  let syncPayloadPath = explicitRows || latest?.syncPayload || null;
  let uiRowsPath =
    explicitUiRows ||
    latest?.uiAuditPayload ||
    null;

  if (!syncPayloadPath && !uiRowsPath) {
    throw new Error(
      "No functional or UI defect payload found. Run qa:run-module first or pass --rows / --ui-rows.",
    );
  }

  let functionalSync = { status: "Skipped", reason: "No functional defect payload" };
  if (syncPayloadPath) {
    console.log(`Approving Google sync for functional defects → ${syncPayloadPath}`);
    functionalSync = syncGoogle(syncPayloadPath, upsert);
  }

  let uiSync = { status: "Skipped", reason: "No UI defect payload" };
  if (uiRowsPath) {
    const absUiRows = path.isAbsolute(uiRowsPath) ? uiRowsPath : path.join(ROOT, uiRowsPath);
    try {
      console.log(`Approving Google sync for UI defects → ${relative(absUiRows)}`);
      uiSync = await syncUiDefectRowsToGoogleSheet({
        rowsPath: absUiRows,
        upsert,
      });
    } catch (error) {
      uiSync = { status: "Blocked", reason: error.message };
    }
  }

  console.log(
    JSON.stringify(
      {
        syncPayloadPath,
        uiRowsPath,
        googleSync: functionalSync,
        uiGoogleSync: uiSync,
      },
      null,
      2,
    ),
  );

  const functionalOk = functionalSync.status === "Synced" || functionalSync.status === "Skipped";
  const uiOk = uiSync.status === "Synced" || uiSync.status === "Skipped";
  if (!functionalOk && !uiOk) {
    process.exitCode = functionalSync.exitCode || (uiSync.status === "Blocked" ? 1 : 0);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`approve-defects-sync failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main };
