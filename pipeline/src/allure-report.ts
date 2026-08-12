import * as path from "path";
import * as fs from "fs";
import { execSync } from "child_process";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
/** Published reports live directly under `report/` (no nested cycle folder). */
const REPORT_DIR = path.join(PROJECT_ROOT, "report");
const ALLURE_COMBINED_DIR = path.join(RESULTS_DIR, "allure-results");
const ALLURE_REPORT_DIR = path.join(REPORT_DIR, "allure-report");
const ALLURE_HISTORY_DIR = path.join(REPORT_DIR, "allure-history");

function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function getEnvFilter(): string[] | null {
  if (process.env.ALLURE_COLLECT_ALL === "1") return null;
  const raw = process.env.ALLURE_ENVS || process.env.ENV || "dev";
  const envs = raw.split(",").map((s) => s.trim()).filter(Boolean);
  return envs.length > 0 ? envs : null;
}

function clearCombinedResultsDir(): void {
  if (fs.existsSync(ALLURE_COMBINED_DIR)) {
    fs.rmSync(ALLURE_COMBINED_DIR, { recursive: true, force: true });
  }
  ensureDir(ALLURE_COMBINED_DIR);
}

function usesEnvSubfolders(): boolean {
  if (!fs.existsSync(RESULTS_DIR)) return false;

  const skip = new Set(["allure-results", "allure-report", "allure-history"]);
  return fs
    .readdirSync(RESULTS_DIR, { withFileTypes: true })
    .some(
      (entry) =>
        entry.isDirectory() &&
        !skip.has(entry.name) &&
        fs.existsSync(path.join(RESULTS_DIR, entry.name, "execution-report.json")),
    );
}

function usesFlatLayout(): boolean {
  return fs.existsSync(path.join(RESULTS_DIR, "execution-report.json"));
}

function collectAllureResults(envFilter: string[] | null): string[] {
  const collected: string[] = [];

  if (!fs.existsSync(RESULTS_DIR)) {
    throw new Error(`Results directory not found: ${RESULTS_DIR}. Run tests first.`);
  }

  if (!usesEnvSubfolders() && usesFlatLayout()) {
    const flatAllureDir = path.join(RESULTS_DIR, "allure-results");
    if (!fs.existsSync(flatAllureDir)) {
      throw new Error(`Allure results not found: ${flatAllureDir}. Run tests first.`);
    }

    for (const file of fs.readdirSync(flatAllureDir)) {
      if (file.endsWith("-result.json") || file === "environment.properties") {
        collected.push(path.join(flatAllureDir, file));
      }
    }

    return collected;
  }

  const entries = fs.readdirSync(RESULTS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (["allure-results", "allure-report", "allure-history"].includes(entry.name)) continue;
    if (envFilter && !envFilter.includes(entry.name)) continue;

    const envAllureDir = path.join(RESULTS_DIR, entry.name, "allure-results");
    if (!fs.existsSync(envAllureDir)) continue;

    const files = fs.readdirSync(envAllureDir);
    for (const file of files) {
      const src = path.join(envAllureDir, file);
      const dest = path.join(ALLURE_COMBINED_DIR, `${entry.name}__${file}`);

      if (file === "environment.properties") {
        collected.push(src);
        continue;
      }

      fs.copyFileSync(src, dest);
      collected.push(dest);
    }
  }

  return collected;
}

function mergeEnvironmentProperties(envFilter: string[] | null): void {
  const allProps: string[] = [];

  const cycleDashboard = path.join(REPORT_DIR, "dashboard-data.json");
  if (fs.existsSync(cycleDashboard)) {
    try {
      const cycle = JSON.parse(fs.readFileSync(cycleDashboard, "utf-8"));
      const ex = cycle.executive || {};
      allProps.push(`Cycle.Total = ${ex.total ?? "N/A"}`);
      allProps.push(`Cycle.Passed = ${ex.passed ?? "N/A"}`);
      allProps.push(`Cycle.Failed = ${ex.failed ?? "N/A"}`);
      allProps.push(`Cycle.SuccessRate = ${ex.successRate ?? "N/A"}%`);
      allProps.push(`Cycle.URL = ${ex.url ?? "N/A"}`);
      allProps.push(`Cycle.Environment = ${ex.environment ?? "N/A"}`);
      allProps.push(
        `Note = Allure suites below may reflect last Playwright subset only; open dashboard.html for full cycle (not 42).`,
      );
    } catch {
      /* ignore malformed dashboard data */
    }
  }

  if (!usesEnvSubfolders() && usesFlatLayout()) {
    const reportPath = path.join(RESULTS_DIR, "execution-report.json");
    const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
    const clientName = report.environment || process.env.ENV || "dev";

    allProps.push(`${clientName}.LastRun.URL = ${report.baseUrl || "N/A"}`);
    allProps.push(`${clientName}.LastRun.Total = ${report.totalTestCases || 0}`);
    allProps.push(`${clientName}.LastRun.Passed = ${report.passed || 0}`);
    allProps.push(`${clientName}.LastRun.Failed = ${report.failed || 0}`);
    allProps.push(`${clientName}.LastRun.Duration = ${((report.durationMs || 0) / 1000).toFixed(1)}s`);
  } else {
    const entries = fs.readdirSync(RESULTS_DIR, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (["allure-results", "allure-report", "allure-history"].includes(entry.name)) continue;
      if (envFilter && !envFilter.includes(entry.name)) continue;

      const propsPath = path.join(RESULTS_DIR, entry.name, "allure-results", "environment.properties");
      if (!fs.existsSync(propsPath)) continue;

      const reportPath = path.join(RESULTS_DIR, entry.name, "execution-report.json");
      if (!fs.existsSync(reportPath)) continue;

      const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
      const clientName = entry.name;

      allProps.push(`${clientName}.URL = ${report.baseUrl || "N/A"}`);
      allProps.push(`${clientName}.Total = ${report.totalTestCases || 0}`);
      allProps.push(`${clientName}.Passed = ${report.passed || 0}`);
      allProps.push(`${clientName}.Failed = ${report.failed || 0}`);
      allProps.push(`${clientName}.Duration = ${((report.durationMs || 0) / 1000).toFixed(1)}s`);
    }
  }

  if (allProps.length > 0) {
    // Asia/Kolkata (IST, UTC+5:30) — avoid UTC "Z" timestamps in Environment panel
    const generatedIst = new Date().toLocaleString("sv-SE", {
      timeZone: "Asia/Kolkata",
    });
    allProps.unshift(`Report.Generated = ${generatedIst} IST`);
    allProps.unshift(`Report.Type = Automation Execution Cycle`);

    fs.writeFileSync(
      path.join(ALLURE_COMBINED_DIR, "environment.properties"),
      allProps.join("\n"),
      "utf-8",
    );
  }
}

function writeCategories(): void {
  const categories = [
    {
      name: "Test Failures",
      messageRegex: ".*",
      matchedStatuses: ["failed"],
    },
    {
      name: "Broken Tests",
      messageRegex: ".*timeout.*|.*crash.*|.*Fatal.*",
      matchedStatuses: ["broken"],
    },
    {
      name: "Skipped Tests",
      matchedStatuses: ["skipped"],
    },
  ];

  fs.writeFileSync(
    path.join(ALLURE_COMBINED_DIR, "categories.json"),
    JSON.stringify(categories, null, 2),
    "utf-8",
  );
}

function writeExecutorInfo(): void {
  const executor = {
    name: "QA AI Agent",
    type: "qa-ai-pipeline",
    buildName: `Run ${new Date().toISOString().split("T")[0]}`,
    buildOrder: Date.now(),
    reportName: "QA AI — Multi-Client Test Report",
  };

  fs.writeFileSync(
    path.join(ALLURE_COMBINED_DIR, "executor.json"),
    JSON.stringify(executor, null, 2),
    "utf-8",
  );
}

/** Archive history from the last HTML report into the persistent store. */
function archiveHistoryFromReport(): void {
  const prevHistoryDir = path.join(ALLURE_REPORT_DIR, "history");

  if (!fs.existsSync(prevHistoryDir)) {
    return;
  }

  ensureDir(ALLURE_HISTORY_DIR);

  const historyFiles = fs.readdirSync(prevHistoryDir);
  for (const file of historyFiles) {
    fs.copyFileSync(
      path.join(prevHistoryDir, file),
      path.join(ALLURE_HISTORY_DIR, file),
    );
  }
  console.log(`  ✓ Archived ${historyFiles.length} history file(s) to allure-history/`);
}

/**
 * Allure requires history/ inside allure-results BEFORE generate.
 * Must run after clearCombinedResultsDir() — never before it.
 */
function injectHistoryIntoResults(): void {
  if (!fs.existsSync(ALLURE_HISTORY_DIR)) {
    console.log("  ℹ No previous history — trend charts populate after the next run");
    return;
  }

  const historyInResults = path.join(ALLURE_COMBINED_DIR, "history");
  ensureDir(historyInResults);

  const historyFiles = fs.readdirSync(ALLURE_HISTORY_DIR);
  for (const file of historyFiles) {
    fs.copyFileSync(
      path.join(ALLURE_HISTORY_DIR, file),
      path.join(historyInResults, file),
    );
  }
  console.log(`  ✓ Injected ${historyFiles.length} history file(s) into allure-results/history`);
}

function generateReport(): void {
  try {
    execSync(
      `npx allure generate "${ALLURE_COMBINED_DIR}" --clean -o "${ALLURE_REPORT_DIR}"`,
      { cwd: PROJECT_ROOT, stdio: "inherit" },
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Allure report generation failed: ${msg}`);
  }
}

function saveHistory(): void {
  const newHistoryDir = path.join(ALLURE_REPORT_DIR, "history");

  if (fs.existsSync(newHistoryDir)) {
    ensureDir(ALLURE_HISTORY_DIR);

    const historyFiles = fs.readdirSync(newHistoryDir);
    for (const file of historyFiles) {
      fs.copyFileSync(
        path.join(newHistoryDir, file),
        path.join(ALLURE_HISTORY_DIR, file),
      );
    }
    console.log(`  ✓ Saved ${historyFiles.length} history file(s) for future trends`);
  }
}

function openReport(): void {
  try {
    execSync(`npx allure open "${ALLURE_REPORT_DIR}"`, {
      cwd: PROJECT_ROOT,
      stdio: "inherit",
    });
  } catch {
    console.log(`  ℹ Could not auto-open. Open manually: ${ALLURE_REPORT_DIR}/index.html`);
  }
}

export interface GenerateAllureOptions {
  open?: boolean;
  envs?: string[] | null;
}

async function main(options: GenerateAllureOptions = {}): Promise<void> {
  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║   Allure Report Generator — Multi-Client with Trends   ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  const shouldOpen = options.open ?? !process.argv.includes("--no-open");
  const envFilter = options.envs !== undefined ? options.envs : getEnvFilter();

  if (envFilter) {
    console.log(`  Scope: ${envFilter.join(", ")} (set ALLURE_COLLECT_ALL=1 for all envs)\n`);
  }

  try {
    console.log("  [1/7] Archiving history from previous report...");
    archiveHistoryFromReport();

    console.log("  [2/7] Preparing allure-results directory...");
    if (usesEnvSubfolders()) {
      clearCombinedResultsDir();
    } else if (!usesFlatLayout()) {
      clearCombinedResultsDir();
    } else {
      console.log("  ✓ Using flat results layout (results/allure-results/)");
    }

    console.log("  [3/7] Collecting Allure results...");
    const collected = collectAllureResults(envFilter);
    console.log(`  ✓ Collected ${collected.length} result file(s)`);

    console.log("  [4/7] Merging environment properties...");
    mergeEnvironmentProperties(envFilter);

    console.log("  [5/7] Writing categories and executor info...");
    writeCategories();
    writeExecutorInfo();

    console.log("  [6/7] Injecting history for trends, then generating HTML...\n");
    injectHistoryIntoResults();
    generateReport();

    console.log("\n  [7/7] Saving history for future trends...");
    saveHistory();

    const relPath = path.relative(PROJECT_ROOT, ALLURE_REPORT_DIR);
    console.log(`\n  ✓ Allure report generated: ${relPath}/`);
    console.log(`    Open: ${relPath}/index.html\n`);

    console.log("  Report sections:");
    console.log("    • Overview  — pass rate donut, total stats");
    console.log("    • Suites    — each CLIENT is a parent suite");
    console.log("    • Graphs    — status distribution, severity, duration");
    console.log("    • Timeline  — execution timeline across clients");
    console.log("    • Trend     — needs 2+ report generations (history in allure-history/)");
    console.log("    • Packages  — grouped by client/environment\n");

    if (shouldOpen) {
      console.log("  Opening report in browser...\n");
      openReport();
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`  ✗ Error: ${msg}\n`);
    process.exit(1);
  }
}

const isDirectRun = process.argv[1]?.replace(/\\/g, "/").includes("allure-report");
if (isDirectRun) {
  main();
}

export { main as generateAllureReport, clearCombinedResultsDir, getEnvFilter };
