/**
 * Run failed Custom List Manager tests by Case ID grep.
 * Usage: node pipeline/scripts/run-clm-failed.js
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
const FAILED_IDS_FILE = path.join(ROOT, "pipeline/test-data/custom-list-manager-failed-ids.txt");
const SPEC = "tests/milestone1/test-cases/ConfigurationModule/customListManagerTests/custom-list-manager.spec.ts";
const LOG_FILE = path.join(ROOT, "results/custom-list-manager-healer.log");

function loadFailedIds() {
  if (!fs.existsSync(FAILED_IDS_FILE)) {
    throw new Error(`Missing failed IDs file: ${FAILED_IDS_FILE}`);
  }
  return fs
    .readFileSync(FAILED_IDS_FILE, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function buildGrepPattern(ids) {
  return ids.map((id) => id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
}

function main() {
  const ids = loadFailedIds();
  if (ids.length === 0) {
    console.log("No failed CLM IDs — nothing to run.");
    process.exit(0);
  }
  const grep = buildGrepPattern(ids);
  const env = {
    ...process.env,
    PW_SKIP_ALLURE_REPORT: "1",
    PW_SKIP_HTML_REPORT: "1",
    PW_HEADLESS: "1",
    PW_WORKERS: "4",
    PW_RETRIES: "0",
    PW_TRACE: "off",
    PW_SCREENSHOT: "off",
    PW_GLOBAL_TIMEOUT: "7200000",
  };
  const cmd = `npx playwright test ${SPEC} --project=milestone1-chromium --grep "${grep}"`;
  console.log(`[Custom List Manager] Running ${ids.length} failed tests...`);
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  try {
    const output = execSync(cmd, {
      cwd: ROOT,
      env,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
    });
    fs.writeFileSync(LOG_FILE, output);
    process.stdout.write(output);
    process.exit(0);
  } catch (error) {
    const output = error.stdout?.toString?.() ?? error.message ?? String(error);
    fs.writeFileSync(LOG_FILE, output);
    process.stderr.write(output);
    process.exit(1);
  }
}

main();
