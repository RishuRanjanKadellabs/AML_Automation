const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./qa-pipeline-utils.cjs");

const INSTALL_ARGS = ["node_modules/@playwright/test/cli.js", "install", "chromium"];

function chromiumCandidatePaths() {
  const paths = new Set();
  try {
    const { chromium } = require("playwright");
    paths.add(chromium.executablePath());
  } catch {
    /* playwright not resolvable */
  }
  const browsersDir = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (browsersDir && fs.existsSync(browsersDir)) {
    for (const entry of fs.readdirSync(browsersDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (!/chromium|chrome-headless-shell/i.test(entry.name)) continue;
      const nested = fs.readdirSync(path.join(browsersDir, entry.name), { withFileTypes: true });
      for (const child of nested) {
        if (child.isDirectory()) {
          paths.add(path.join(browsersDir, entry.name, child.name, "chrome-headless-shell"));
          paths.add(path.join(browsersDir, entry.name, child.name, "chrome"));
        }
      }
    }
  }
  return [...paths];
}

function pathExists(filePath) {
  try {
    return Boolean(filePath && fs.existsSync(filePath));
  } catch {
    return false;
  }
}

function isPlaywrightChromiumInstalled() {
  if (chromiumCandidatePaths().some(pathExists)) {
    return true;
  }
  const dryRun = spawnSync("node", [...INSTALL_ARGS, "--dry-run"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  const output = `${dryRun.stdout || ""}\n${dryRun.stderr || ""}`.toLowerCase();
  if (/already installed|is already downloaded|nothing to do/.test(output)) {
    return true;
  }
  return false;
}

function installPlaywrightChromium() {
  console.log("Playwright Chromium not found — running: npm run setup");
  const result = spawnSync("node", INSTALL_ARGS, {
    cwd: ROOT,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    throw new Error(
      "Failed to install Playwright Chromium. Run manually: npm run setup",
    );
  }
  if (!isPlaywrightChromiumInstalled()) {
    throw new Error(
      "Playwright Chromium install finished but the browser executable is still missing. Run: npm run setup",
    );
  }
  return { action: "installed" };
}

/**
 * Ensure Chromium is present before any Playwright test execution.
 * Idempotent: installs only when missing.
 */
function ensurePlaywrightChromium({ quiet = false } = {}) {
  if (isPlaywrightChromiumInstalled()) {
    if (!quiet) {
      console.log("Playwright Chromium: ready");
    }
    return { ready: true, action: "present" };
  }
  const installResult = installPlaywrightChromium();
  console.log("Playwright Chromium: installed successfully");
  return { ready: true, ...installResult };
}

function isBrowserLaunchToolingError(message = "") {
  const text = String(message || "").toLowerCase();
  return (
    text.includes("executable doesn't exist") ||
    text.includes("browserType.launch") ||
    text.includes("chrome-headless-shell") ||
    text.includes("playwright install") ||
    text.includes("npx playwright install")
  );
}

module.exports = {
  ensurePlaywrightChromium,
  isPlaywrightChromiumInstalled,
  installPlaywrightChromium,
  isBrowserLaunchToolingError,
};
