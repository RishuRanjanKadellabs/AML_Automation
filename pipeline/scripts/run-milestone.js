#!/usr/bin/env node
/**
 * Run Playwright specs for any discovered milestone without editing config.
 *
 * Usage:
 *   node pipeline/scripts/run-milestone.js 2
 *   node pipeline/scripts/run-milestone.js milestone2
 *   node pipeline/scripts/run-milestone.js 2 tests/milestone2/test-cases/ConfigurationModule/
 *   node pipeline/scripts/run-milestone.js all
 *   node pipeline/scripts/run-milestone.js list
 *
 * Extra args after the path are forwarded to Playwright (e.g. --grep, --headed).
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const testsRoot = path.join(root, "tests");

function discoverMilestones() {
  if (!fs.existsSync(testsRoot)) {
    return [];
  }
  return fs
    .readdirSync(testsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^milestone\d+$/i.test(d.name))
    .map((d) => d.name.toLowerCase())
    .sort((a, b) => {
      const na = parseInt(a.replace("milestone", ""), 10);
      const nb = parseInt(b.replace("milestone", ""), 10);
      return na - nb;
    });
}

function resolveMilestone(arg) {
  if (!arg) {
    return null;
  }
  const lower = String(arg).toLowerCase();
  if (lower === "all" || lower === "list") {
    return lower;
  }
  if (/^\d+$/.test(lower)) {
    return `milestone${lower}`;
  }
  if (/^milestone\d+$/.test(lower)) {
    return lower;
  }
  return null;
}

function printUsage(milestones) {
  console.log(`Usage:
  npm run milestone:run -- <milestone|all|list> [optional-path] [...playwright-args]

Examples:
  npm run milestone:run -- list
  npm run milestone:run -- 1
  npm run milestone:run -- milestone2
  npm run milestone:run -- 2 tests/milestone2/test-cases/
  npm run milestone:run -- all

Discovered milestones: ${milestones.length ? milestones.join(", ") : "(none)"}
Projects: ${milestones.map((m) => `${m}-chromium`).join(", ") || "(none)"}
`);
}

const argv = process.argv.slice(2);
const milestones = discoverMilestones();
const target = resolveMilestone(argv[0]);

if (!target) {
  printUsage(milestones);
  process.exit(target === null && argv[0] ? 1 : 0);
}

if (target === "list") {
  console.log("Milestones:", milestones.join(", ") || "(none)");
  milestones.forEach((m) => console.log(`  --project=${m}-chromium  →  tests/${m}/**/*.spec.ts`));
  process.exit(0);
}

const rest = argv.slice(1);
let testPath = null;
const forwarded = [];

for (const arg of rest) {
  if (!testPath && !arg.startsWith("-") && (arg.includes("/") || arg.includes("\\") || arg.endsWith(".spec.ts"))) {
    testPath = arg;
  } else {
    forwarded.push(arg);
  }
}

const env = {
  ...process.env,
  PW_SKIP_ALLURE_REPORT: process.env.PW_SKIP_ALLURE_REPORT || "1",
  PW_SKIP_HTML_REPORT: process.env.PW_SKIP_HTML_REPORT || "1",
  PW_HEADLESS: process.env.PW_HEADLESS || "1",
  PW_RETRIES: process.env.PW_RETRIES || "0",
};

const pwArgs = ["playwright", "test"];

if (target === "all") {
  if (!milestones.length) {
    console.error("No tests/milestoneN folders found.");
    process.exit(1);
  }
  for (const m of milestones) {
    pwArgs.push(`--project=${m}-chromium`);
  }
  if (testPath) {
    pwArgs.push(testPath);
  }
} else {
  if (!milestones.includes(target)) {
    console.error(
      `Milestone folder tests/${target} not found. Available: ${milestones.join(", ") || "(none)"}`,
    );
    process.exit(1);
  }
  pwArgs.push(`--project=${target}-chromium`);
  pwArgs.push(testPath || path.join("tests", target, "test-cases"));
}

pwArgs.push(...forwarded);

console.log(`[milestone:run] npx ${pwArgs.join(" ")}\n`);

const result = spawnSync("npx", pwArgs, {
  cwd: root,
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
