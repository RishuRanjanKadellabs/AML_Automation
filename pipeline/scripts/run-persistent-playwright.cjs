#!/usr/bin/env node
/**
 * Run Playwright against a milestone project with headed defaults, 1 worker,
 * and one persistent Chromium (CDP) that stays open until the suite finishes.
 */
const { spawnSync } = require("child_process");
const path = require("path");
const { ROOT, relative, absolute } = require("./qa-pipeline-utils.cjs");
const { startPersistentChrome } = require("./persistent-chrome");
const { resolveModuleWarmupUrl } = require("./resolve-module-warmup-path.cjs");

async function warmupCdpBrowser(endpoint, fullUrl) {
  const { chromium } = require("playwright");
  const browser = await chromium.connectOverCDP(endpoint);
  try {
    const context = browser.contexts()[0];
    if (!context) {
      throw new Error("Persistent CDP Chromium has no default context for warmup");
    }
    const openPages = context.pages().filter((page) => !page.isClosed());
    for (let index = 1; index < openPages.length; index += 1) {
      await openPages[index].close({ runBeforeUnload: false }).catch(() => undefined);
    }
    const page = openPages[0] ?? (await context.newPage());
    await page.goto(fullUrl, { waitUntil: "commit", timeout: 90000 });
    console.log(`[run-persistent] CDP warmup navigated to ${fullUrl}`);
  } finally {
    await browser.close().catch(() => undefined);
  }
}

/**
 * @param {{
 *   specPath: string,
 *   project: string,
 *   headed?: boolean,
 *   workers?: number|string,
 *   persistent?: boolean,
 *   extraArgs?: string[],
 *   env?: Record<string, string>,
 * }} options
 */
async function runPersistentPlaywright(options) {
  const absSpec = absolute(options.specPath);
  const headed =
    options.headed !== undefined
      ? options.headed
      : process.env.PW_HEADLESS !== "1" && process.env.HEADLESS !== "true";
  const workers = String(
    options.workers ?? process.env.PW_MILESTONE_WORKERS ?? process.env.PW_WORKERS ?? "1",
  );
  const usePersistent =
    options.persistent !== false && process.env.PW_PERSISTENT_BROWSER !== "0";

  const env = {
    ...process.env,
    PW_SKIP_ALLURE_REPORT: process.env.PW_SKIP_ALLURE_REPORT || "1",
    PW_SKIP_HTML_REPORT: process.env.PW_SKIP_HTML_REPORT || "1",
    PW_HEADLESS: headed ? "0" : "1",
    PW_MILESTONE_WORKERS: workers,
    PW_WORKERS: workers,
    PW_RETRIES: process.env.PW_RETRIES || "0",
    PW_VIDEO: process.env.PW_VIDEO || "off",
    PW_TRACE: process.env.PW_TRACE || "off",
    ...(options.env || {}),
  };

  let chrome = null;
  if (usePersistent) {
    chrome = await startPersistentChrome({ headless: !headed });
    env.PW_CDP_ENDPOINT = chrome.endpoint;
    console.log(
      `[run-persistent] PW_CDP_ENDPOINT=${chrome.endpoint} (same Chromium window reused after failures)`,
    );
    const warmupUrl =
      options.warmupUrl ||
      process.env.PW_CDP_WARMUP_URL ||
      resolveModuleWarmupUrl(absSpec);
    if (warmupUrl) {
      try {
        await warmupCdpBrowser(chrome.endpoint, warmupUrl);
      } catch (error) {
        console.warn(
          `[run-persistent] CDP warmup failed (${error.message}); tests will navigate themselves`,
        );
      }
    }
  }

  const pwArgs = [
    "playwright",
    "test",
    relative(absSpec),
    `--project=${options.project}`,
    "--max-failures=0",
    ...(options.extraArgs || []),
  ];

  console.log(
    `[run-persistent] headed=${headed} workers=${workers} persistent=${Boolean(chrome)} spec=${relative(absSpec)}`,
  );
  console.log(`[run-persistent] npx ${pwArgs.join(" ")}\n`);

  let exitCode = 1;
  try {
    const result = spawnSync("npx", pwArgs, {
      cwd: ROOT,
      env,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    exitCode = result.status == null ? 1 : result.status;
  } finally {
    if (chrome) {
      chrome.stop();
      console.log("[run-persistent] persistent Chromium stopped");
    }
  }

  return {
    exitCode,
    reportPath: path.join(ROOT, "results", "execution-report.json"),
    headed,
    workers: Number.parseInt(workers, 10),
    persistent: Boolean(chrome),
  };
}

module.exports = { runPersistentPlaywright };
