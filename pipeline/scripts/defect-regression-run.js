#!/usr/bin/env node
/**
 * Defect-driven regression runner.
 *
 * Reads defects with Status=Resolved from the shared Google Defects tab only,
 * retests the anchor case plus direct/indirect feature-related cases, then
 * updates Status on Google only (Closed pass / Reopened fail).
 *
 * Usage:
 *   npm run tracker:cdp-chrome
 *   npm run qa:defect-regression -- --milestone 1
 *   npm run qa:defect-regression -- --milestone 1 --defer-google-sync   # skip Google write
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  absolute,
  arg,
  relative,
  readJson,
  writeJson,
  unique,
} = require("./qa-pipeline-utils.cjs");
const {
  loadRegressionDefects,
  filterByStatus,
  REGRESSION_INPUT_STATUSES,
  REGRESSION_DEFECT_SOURCE,
} = require("./read-defect-sheet.cjs");
const { resolveDefectRegressionScope } = require("./resolve-defect-regression-scope.cjs");
const { isResolvedStatus } = require("./update-defect-workbook-statuses.cjs");
const { updateGoogleDefectStatuses } = require("./update-defect-google-statuses.cjs");
const {
  ensurePlaywrightChromium,
  isBrowserLaunchToolingError,
} = require("./ensure-playwright-chromium.cjs");
const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");

const FAILED_STATUSES = new Set(["failed", "error", "timedout", "unexpected"]);

async function ensureCdp(endpoint) {
  const response = await fetch(`${endpoint}/json/version`);
  if (!response.ok) {
    throw new Error(
      `CDP not reachable at ${endpoint}. Launch signed-in Chrome: npm run tracker:cdp-chrome`,
    );
  }
}

function detectMilestone(explicit, defects) {
  if (explicit) return Number.parseInt(String(explicit), 10);
  const label = String(defects[0]?.Milestone || "M1");
  const match = label.match(/(\d+)/);
  if (match) return Number.parseInt(match[1], 10);
  return 1;
}

function buildGrepPattern(caseIds) {
  const escaped = (caseIds || []).map((id) =>
    String(id).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  if (!escaped.length) return "";
  return escaped.join("|");
}

function runRegressionSpecs({ specs, grepPattern, milestone, headed, workers }) {
  const env = {
    ...process.env,
    PW_SKIP_ALLURE_REPORT: process.env.PW_SKIP_ALLURE_REPORT || "1",
    PW_SKIP_HTML_REPORT: process.env.PW_SKIP_HTML_REPORT || "1",
    PW_HEADLESS: headed ? "0" : "1",
    PW_WORKERS: String(workers || process.env.PW_WORKERS || "4"),
    PW_RETRIES: process.env.PW_RETRIES || "0",
    PW_DEFER_DEFECT_GENERATION: "1",
  };
  const args = [
    "playwright",
    "test",
    ...specs.map((spec) => relative(spec)),
    `--project=milestone${milestone}-chromium`,
  ];
  if (grepPattern) {
    args.push(`--grep=${grepPattern}`);
  }
  console.log(`Defect regression: running ${specs.length} spec(s), grep=${grepPattern || "ALL"}`);
  const result = spawnSync("npx", args, {
    cwd: ROOT,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  return {
    exitCode: result.status == null ? 1 : result.status,
    reportPath: path.join(ROOT, "results", "execution-report.json"),
  };
}

function executionResults(report) {
  return report?.caseResults || report?.testCases || report?.results?.testCases || [];
}

function resultMap(report) {
  const map = new Map();
  for (const row of executionResults(report)) {
    const id = String(row.testCaseId || row.id || "").trim();
    if (!id) continue;
    const errorMessage =
      row.error ||
      row.message ||
      row.statusDetails?.message ||
      row.failureMessage ||
      "";
    map.set(id, {
      status: String(row.status || "").toLowerCase(),
      error: String(errorMessage || ""),
      environmentBlocked: isBrowserLaunchToolingError(errorMessage),
    });
  }
  return map;
}

function deriveStatusUpdates(scope, resultsByCaseId) {
  const updates = [];
  for (const group of scope.groups) {
    const defectStatus = String(group.defect?.Status || "").trim();
    if (!isResolvedStatus(defectStatus)) {
      continue;
    }
    const anchorId = group.anchorTestCaseId;
    const anchorEntry = resultsByCaseId.get(anchorId);
    const anchorResult =
      typeof anchorEntry === "string"
        ? anchorEntry
        : anchorEntry?.status || "not_run";
    let nextStatus = "Resolved";
    if (anchorEntry?.environmentBlocked) {
      nextStatus = "Resolved";
    } else if (anchorResult === "passed") {
      nextStatus = "Closed";
    } else if (FAILED_STATUSES.has(anchorResult)) {
      nextStatus = "Reopened";
    } else if (anchorResult === "not_run") {
      nextStatus = "Resolved";
    }
    updates.push({
      milestone: group.defect.Milestone,
      testCaseId: anchorId,
      status: nextStatus,
      anchorResult: anchorEntry?.environmentBlocked
        ? "environment_blocked"
        : anchorResult,
      regressionCaseIds: group.regressionCaseIds,
      directCaseIds: group.directCaseIds,
      indirectCaseIds: group.indirectCaseIds,
    });
  }
  return updates;
}

async function main() {
  const legacySource = arg("source", "");
  const workbookPath = arg("workbook", "");
  if (legacySource === "local" || workbookPath) {
    throw new Error(
      "Defect regression reads and updates Status only on the shared Google Defects tab. Remove --source local / --workbook and ensure CDP Chrome is running (npm run tracker:cdp-chrome).",
    );
  }

  const cdpEndpoint = arg("cdp", process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222");
  const sheetUrl = arg("sheet-url", process.env.TRACKER_SHEET_URL || "");
  await ensureCdp(cdpEndpoint);

  const headed = process.argv.includes("--headed");
  const workers = arg("workers", process.env.PW_WORKERS || "4");
  const deferGoogleSync =
    process.argv.includes("--defer-google-sync") ||
    process.argv.includes("--no-google-sync");
  const approved = !deferGoogleSync;
  const upsert = !process.argv.includes("--no-upsert");

  const milestoneArg = Number.parseInt(arg("milestone", "0"), 10) || undefined;
  const initialRows = await loadRegressionDefects({
    milestone: milestoneArg,
    cdpEndpoint,
    sheetUrl,
  });
  const resolvedDefects = filterByStatus(initialRows, REGRESSION_INPUT_STATUSES);
  const milestone = detectMilestone(arg("milestone", ""), resolvedDefects);
  if (!resolvedDefects.length) {
    console.log(
      `Defect regression: no defects with Status=Resolved found on Google Defects tab${milestoneArg ? ` for M${milestone}` : ""}.`,
    );
    return { status: "Skipped", resolvedCount: 0, source: REGRESSION_DEFECT_SOURCE };
  }

  const scope = resolveDefectRegressionScope({
    defects: resolvedDefects,
    milestone,
  });
  const blocked = scope.groups.filter((group) => group.blocked);
  if (blocked.length) {
    console.warn(
      `Defect regression: ${blocked.length} defect(s) blocked:`,
      blocked.map((group) => group.blockReason).join(" | "),
    );
  }
  const runnableGroups = scope.groups.filter((group) => !group.blocked && group.regressionCaseIds.length);
  const runnableCaseIds = unique(runnableGroups.flatMap((group) => group.regressionCaseIds));
  const runnableSpecs = unique(runnableGroups.map((group) => group.specPath));
  if (!runnableCaseIds.length || !runnableSpecs.length) {
    throw new Error("No runnable regression cases resolved from Resolved defects");
  }

  const resultsRoot = path.join(ROOT, "results/qa-pipeline/defect-regression");
  fs.mkdirSync(resultsRoot, { recursive: true });
  const scopePath = path.join(resultsRoot, `scope-M${milestone}.json`);
  writeJson(scopePath, {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    source: REGRESSION_DEFECT_SOURCE,
    resolvedCount: resolvedDefects.length,
    regressionCaseCount: runnableCaseIds.length,
    specs: runnableSpecs.map(relative),
    groups: runnableGroups,
  });
  console.log(`Defect regression scope → ${relative(scopePath)}`);
  console.log(
    `Resolved defects (Google): ${resolvedDefects.length}; regression cases: ${runnableCaseIds.length}; specs: ${runnableSpecs.length}`,
  );

  const browserEnsure = ensurePlaywrightChromium();
  console.log(`Playwright browser ensure: ${browserEnsure.action}`);

  const grepPattern = buildGrepPattern(runnableCaseIds);
  const run = runRegressionSpecs({
    specs: runnableSpecs.map(absolute),
    grepPattern,
    milestone,
    headed,
    workers,
  });
  const report = fs.existsSync(run.reportPath) ? readJson(run.reportPath) : {};
  const resultsByCaseId = resultMap(report);
  const statusUpdates = deriveStatusUpdates({ groups: runnableGroups }, resultsByCaseId);
  const updateResult = await updateGoogleDefectStatuses({
    milestone,
    statusUpdates,
    executionReport: run.reportPath,
    approved,
    upsert,
    cdpEndpoint,
    sheetUrl,
  });

  const summaryPath = path.join(resultsRoot, `summary-M${milestone}.json`);
  const summary = {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    source: REGRESSION_DEFECT_SOURCE,
    resolvedDefects: resolvedDefects.length,
    regressionCasesRun: runnableCaseIds.length,
    executionExitCode: run.exitCode,
    closed: statusUpdates.filter((row) => row.status === "Closed").length,
    reopened: statusUpdates.filter((row) => row.status === "Reopened").length,
    unchanged: statusUpdates.filter((row) => row.status === "Resolved").length,
    environmentBlocked: statusUpdates.filter(
      (row) => row.anchorResult === "environment_blocked",
    ).length,
    browserEnsure,
    statusUpdates,
    updateResult,
    skippedStatusUpdates: updateResult.skipped?.length || 0,
    googleSync: updateResult.googleSync,
    scopePath: relative(scopePath),
    executionReport: relative(run.reportPath),
  };
  writeJson(summaryPath, summary);
  console.log(`Defect regression summary → ${relative(summaryPath)}`);
  console.log(
    `Status updates (Google): Closed=${summary.closed}, Reopened=${summary.reopened}, unchanged=${summary.unchanged}`,
  );

  try {
    const docx = await writeAgentRunReport("defect-regression", { summary });
    console.log(`Agent run docx → ${docx.relativePath}`);
    summary.agentRunDocx = docx.relativePath;
    writeJson(summaryPath, summary);
  } catch (error) {
    console.warn(`Agent run docx skipped: ${error.message}`);
  }

  if (deferGoogleSync) {
    console.log(
      "Google Status write skipped (--defer-google-sync). Summary JSON saved for manual sync.",
    );
  } else if (updateResult.googleSync?.status === "Synced") {
    console.log(
      `Google Defects tab updated: ${updateResult.applied?.length || 0} Status row(s) synced.`,
    );
  }

  return summary;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Defect regression failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main, deriveStatusUpdates, buildGrepPattern };
