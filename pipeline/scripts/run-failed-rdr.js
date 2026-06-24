const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const baselineFile = path.join(__dirname, "../test-data/rdr-healer-failed-ids-before-fix.txt");
const detailPath = path.join(__dirname, "../../results/test-run-detail.json");
const useBaseline = process.argv.includes("--baseline");
let failedIds = [];

if (useBaseline) {
  if (!fs.existsSync(baselineFile)) {
    console.error(`Baseline file not found: ${baselineFile}`);
    process.exit(1);
  }
  failedIds = fs
    .readFileSync(baselineFile, "utf8")
    .trim()
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);
} else {
  try {
    const detail = require(detailPath);
    const rdrEntries = detail.entries.filter((entry) => /RDR_\d+/i.test(entry.title));
    const latestById = new Map();

    for (const entry of rdrEntries) {
      const id = entry.title.match(/RDR_\d+/)?.[0];
      if (!id) continue;
      const prev = latestById.get(id);
      if (!prev || entry.startedAt >= prev.startedAt) {
        latestById.set(id, entry);
      }
    }

    failedIds = [...latestById.values()]
      .filter((entry) => entry.status === "failed")
      .map((entry) => entry.title.match(/RDR_\d+/)?.[0])
      .filter(Boolean);
  } catch {
    console.error("No test-run-detail.json found — run the full suite first or pass --baseline.");
    process.exit(1);
  }
}

if (failedIds.length === 0) {
  console.log("No failed RDR tests in last run.");
  process.exit(0);
}

const grepPattern = failedIds.join("|");
const command = [
  "npx cross-env",
  "PW_SKIP_ALLURE_REPORT=1",
  "PW_SKIP_HTML_REPORT=1",
  "PW_HEADLESS=1",
  "PW_WORKERS=2",
  "PW_RETRIES=0",
  "PW_TRACE=off",
  "PW_SCREENSHOT=off",
  "PW_EXPECT_TIMEOUT=15000",
  "PW_ACTION_TIMEOUT=15000",
  "playwright test tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
  `-g "${grepPattern}"`,
  "--project=milestone1-chromium",
].join(" ");

console.log(`Re-running ${failedIds.length} previously failed RDR tests with 6 workers...`);
execSync(command, { stdio: "inherit", cwd: path.join(__dirname, "../.."), shell: true });
