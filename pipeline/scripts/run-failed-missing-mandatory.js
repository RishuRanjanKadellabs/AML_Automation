/**
 * Re-run only tests that failed in the latest execution-report.json.
 * Uses standard milestone1 timeouts (no fast-run overrides).
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const reportPath = path.join(__dirname, "..", "..", "results", "execution-report.json");
if (!fs.existsSync(reportPath)) {
  console.error("No results/execution-report.json found. Run the full suite first.");
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf-8"));
const failedIds = report.testCases.filter((t) => t.status === "failed").map((t) => t.id);

if (failedIds.length === 0) {
  console.log("No failed tests in execution-report.json.");
  process.exit(0);
}

const grepPattern = failedIds.join("|");
console.log(`Re-running ${failedIds.length} failed test(s) from last report...`);

const cmd =
  "npx cross-env PW_SKIP_ALLURE_REPORT=1 PW_SKIP_HTML_REPORT=1 PW_HEADLESS=1 PW_WORKERS=3 PW_RETRIES=0 " +
  "playwright test tests/milestone1/test-cases/KYCModule/missingMandatoryTests/ " +
  `--project=milestone1-chromium -g "${grepPattern}"`;

execSync(cmd, { stdio: "inherit", cwd: path.join(__dirname, "..", ".."), shell: true });
