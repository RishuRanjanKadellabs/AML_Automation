#!/usr/bin/env node
/**
 * Sync the latest module-run defect payload to Google after local approval.
 *
 * Usage:
 *   npm run qa:approve-defects-sync
 *   npm run qa:approve-defects-sync -- --rows results/qa-pipeline/defects/milestone-2-defect-rows.json
 *   npm run qa:approve-defects-sync -- --upsert
 */
const fs = require("fs");
const path = require("path");
const { ROOT, arg, readJson, relative } = require("./qa-pipeline-utils.cjs");
const { syncGoogle } = require("./finalize-module-run.cjs");
const { syncUiDefectRowsToGoogleSheet } = require("./append-ui-defects-google-sheet.js");

async function main() {
  const explicitRows = arg("rows");
  const upsert = !process.argv.includes("--no-upsert");
  let syncPayloadPath = explicitRows;

  if (!syncPayloadPath) {
    const latestPath = path.join(
      ROOT,
      "results",
      "qa-pipeline",
      "defects",
      "latest-module-run.json",
    );
    if (!fs.existsSync(latestPath)) {
      throw new Error(
        "No latest module run summary found. Run a module first (qa:run-module / qa:execute-raise-defects / milestone:run).",
      );
    }
    const latest = readJson(latestPath);
    syncPayloadPath = latest.syncPayload;
    if (!syncPayloadPath) {
      throw new Error("Latest module run has no defect sync payload (zero failures).");
    }
  }

  console.log(`Approving Google sync for ${syncPayloadPath}`);
  const result = syncGoogle(syncPayloadPath, upsert);

  let uiSync = { status: "Skipped", reason: "No UI defect payload" };
  const latestPath = path.join(ROOT, "results", "qa-pipeline", "defects", "latest-module-run.json");
  if (fs.existsSync(latestPath)) {
    const latest = readJson(latestPath);
    if (latest.uiAuditPayload) {
      try {
        uiSync = await syncUiDefectRowsToGoogleSheet({
          rowsPath: path.join(ROOT, latest.uiAuditPayload),
          upsert,
        });
      } catch (error) {
        uiSync = { status: "Blocked", reason: error.message };
      }
    }
  }

  console.log(JSON.stringify({ syncPayloadPath, googleSync: result, uiGoogleSync: uiSync }, null, 2));
  if (result.status !== "Synced" && uiSync.status !== "Synced") {
    process.exitCode = result.exitCode || (uiSync.status === "Blocked" ? 1 : 0);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`approve-defects-sync failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main };
