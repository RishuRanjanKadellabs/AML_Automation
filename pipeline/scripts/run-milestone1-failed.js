/**
 * Run failed milestone1 tests by module using Case ID grep patterns.
 * Usage: node pipeline/scripts/run-milestone1-failed.js [module|all]
 * Modules: sc, kgr, mm, bs, ms, dds, smr
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
const DEFAULT_FAILED_IDS_FILE = path.join(ROOT, "pipeline/test-data/milestone1-full-suite-failed-ids.txt");
const REMAINING_FAILED_IDS_FILE = path.join(ROOT, "pipeline/test-data/milestone1-healer-remaining-failed-ids.txt");

function resolveFailedIdsFile() {
  if (process.env.MILESTONE1_FAILED_IDS_FILE) {
    return process.env.MILESTONE1_FAILED_IDS_FILE;
  }
  const useRemaining = process.argv.includes("--remaining") || process.argv.slice(2).includes("remaining");
  if (useRemaining && fs.existsSync(REMAINING_FAILED_IDS_FILE)) {
    return REMAINING_FAILED_IDS_FILE;
  }
  return DEFAULT_FAILED_IDS_FILE;
}

const FAILED_IDS_FILE = resolveFailedIdsFile();

const MODULES = {
  sc: {
    label: "Screening Configuration",
    spec: "tests/milestone1/test-cases/ConfigurationModule/screeningConfigurationTests/screening-configuration.spec.ts",
    prefix: /^SC-/,
    workers: 4,
  },
  kgr: {
    label: "KYC Gap Report",
    spec: "tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts",
    prefix: /^KGR-/,
    workers: 1,
  },
  mm: {
    label: "Missing Mandatory",
    spec: "tests/milestone1/test-cases/KYCModule/missingMandatoryTests/",
    prefix: /^MM-/,
    workers: 3,
  },
  bs: {
    label: "Batch Screening",
    spec: "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts",
    prefix: /^BS-/,
    workers: 4,
  },
  ms: {
    label: "Manual Screening",
    spec: "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts",
    prefix: /^(MS-|TC_MS)/,
    workers: 1,
  },
  dds: {
    label: "De-Dup Screening",
    spec: "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts",
    prefix: /^DDS-/,
    workers: 4,
  },
  smr: {
    label: "Sanction MIS Reports",
    spec: "tests/milestone1/test-cases/ScreeningModule/sanctionMisReportsTests/sanction-mis-reports.spec.ts",
    prefix: /^SMR-/,
    workers: 4,
  },
};

function loadFailedIds() {
  return fs
    .readFileSync(FAILED_IDS_FILE, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function idsForModule(moduleKey, allIds) {
  const mod = MODULES[moduleKey];
  return allIds.filter((id) => mod.prefix.test(id));
}

function buildGrepPattern(ids) {
  const escaped = ids.map((id) => id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return escaped.join("|");
}

function runModule(moduleKey, ids, logFile) {
  const mod = MODULES[moduleKey];
  if (ids.length === 0) {
    console.log(`[${mod.label}] No failed IDs — skipping`);
    return 0;
  }
  const grep = buildGrepPattern(ids);
  const env = {
    ...process.env,
    PW_SKIP_ALLURE_REPORT: "1",
    PW_SKIP_HTML_REPORT: "1",
    PW_HEADLESS: "1",
    PW_RETRIES: "0",
    PW_TRACE: "off",
    PW_WORKERS: String(mod.workers),
  };
  const cmd = `npx playwright test "${mod.spec}" --project=milestone1-chromium --grep "${grep}" --reporter=line`;
  console.log(`\n[${mod.label}] Running ${ids.length} failed tests (workers=${mod.workers})...`);
  try {
    execSync(cmd, { cwd: ROOT, env, stdio: ["inherit", "pipe", "pipe"], encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
    console.log(`[${mod.label}] All ${ids.length} tests passed`);
    return 0;
  } catch (err) {
    const out = (err.stdout || "") + (err.stderr || "");
    fs.writeFileSync(logFile, out, "utf8");
    const failedMatch = out.match(/(\d+) failed/);
    const passedMatch = out.match(/(\d+) passed/);
    console.log(
      `[${mod.label}] Done — ${passedMatch ? passedMatch[1] : "?"} passed, ${failedMatch ? failedMatch[1] : "?"} failed`,
    );
    console.log(`[${mod.label}] Log: ${logFile}`);
    return 1;
  }
}

const cliArgs = process.argv.slice(2).filter((a) => a !== "--remaining");
const target = (cliArgs[0] === "remaining" ? "all" : cliArgs[0] || "all").toLowerCase();
console.log(`Using failed IDs file: ${FAILED_IDS_FILE}`);
const allIds = loadFailedIds();
const resultsDir = path.join(ROOT, "results");
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir, { recursive: true });
}

let exitCode = 0;
const keys = target === "all" ? Object.keys(MODULES) : [target];
for (const key of keys) {
  if (!MODULES[key]) {
    console.error(`Unknown module: ${key}. Use: ${Object.keys(MODULES).join(", ")}`);
    process.exit(1);
  }
  const ids = idsForModule(key, allIds);
  const logFile = path.join(resultsDir, `milestone1-healer-${key}.log`);
  if (runModule(key, ids, logFile) !== 0) {
    exitCode = 1;
  }
}
process.exit(exitCode);
