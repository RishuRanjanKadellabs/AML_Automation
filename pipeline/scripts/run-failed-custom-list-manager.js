/**
 * Re-run only Custom List Manager tests that failed in the latest execution-report.json.
 * Uses 8 workers + fast-run flags by default (override with PW_WORKERS).
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const reportPath = path.join(ROOT, "results", "execution-report.json");
const fallbackIdsPath = path.join(ROOT, "pipeline", "test-data", "clm-healer-remaining-failed-ids.txt");

function loadFailedIdsFromReport() {
  if (!fs.existsSync(reportPath)) {
    return [];
  }
  const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
  return report.testCases
    .filter((t) => t.status === "failed" && /^CLM-TC-/i.test(t.id))
    .map((t) => t.id);
}

function loadFailedIdsFromFallback() {
  if (!fs.existsSync(fallbackIdsPath)) {
    return [];
  }
  return fs
    .readFileSync(fallbackIdsPath, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((id) => /^CLM-TC-/i.test(id));
}

const failedIds = [...new Set([...loadFailedIdsFromReport(), ...loadFailedIdsFromFallback()])];

if (failedIds.length === 0) {
  console.error("No failed CLM test IDs found in execution-report.json or clm-healer-remaining-failed-ids.txt.");
  console.error("Run the full suite first: npm run milestone1:custom-list-manager:run");
  process.exit(1);
}

const workers = process.env.PW_WORKERS || "8";
const grepPattern = failedIds.join("|");
console.log(`Re-running ${failedIds.length} failed Custom List Manager test(s) with ${workers} workers...`);

const cmd =
  `npx cross-env PW_SKIP_ALLURE_REPORT=1 PW_SKIP_HTML_REPORT=1 PW_HEADLESS=1 PW_WORKERS=${workers} PW_RETRIES=0 PW_TRACE=off PW_SCREENSHOT=off ` +
  "playwright test tests/milestone1/test-cases/ConfigurationModule/customListManagerTests/ " +
  `--project=milestone1-chromium -g "${grepPattern}"`;

execSync(cmd, { stdio: "inherit", cwd: ROOT, shell: true });
