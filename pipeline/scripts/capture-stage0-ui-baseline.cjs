#!/usr/bin/env node
/**
 * Capture Stage 0 UI screenshot baselines for UI defect comparison.
 * Writes results/fsd-figma-pipeline/<resultsKey>/screenshots/*.png + manifest.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const {
  ROOT,
  absolute,
  arg,
  kebabCase,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const { resolveModuleWarmupUrl } = require("./resolve-module-warmup-path.cjs");
const { ensurePlaywrightChromium } = require("./ensure-playwright-chromium.cjs");

function slugFileName(value) {
  return kebabCase(String(value || "main").replace(/&/g, "and")).slice(0, 80) || "main";
}

function extractTabScreens(htmlInventory, moduleName) {
  const screens = [];
  const seen = new Set();

  for (const screen of htmlInventory?.screens || []) {
    const tabs = (screen.controls || []).filter((c) => c.kind === "tab");
    for (const tab of tabs) {
      const label = tab.label || tab.name;
      if (!label || seen.has(label)) continue;
      seen.add(label);
      screens.push({
        screenName: `${moduleName} — ${label}`,
        tab: label,
        file: `${slugFileName(label)}.png`,
      });
    }
  }

  if (!screens.length) {
    for (const edge of htmlInventory?.navGraph || []) {
      if (/tab/i.test(edge.via || "")) {
        const label = edge.to;
        if (!label || seen.has(label)) continue;
        seen.add(label);
        screens.push({
          screenName: `${moduleName} — ${label}`,
          tab: label,
          file: `${slugFileName(label)}.png`,
        });
      }
    }
  }

  return screens;
}

async function captureScreen(page, moduleUrl, entry, moduleName) {
  const url = moduleUrl.split("#")[0];
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(800);

  if (entry.tab) {
    const tab = page.getByRole("tab", { name: new RegExp(entry.tab.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") }).first();
    if (await tab.isVisible().catch(() => false)) {
      await tab.click();
      await page.waitForTimeout(600);
    }
  }

  const screenKey = entry.tab ? `${url}#${slugFileName(entry.tab)}` : url;
  return {
    screenKey,
    screenName: entry.screenName || `${moduleName} — main`,
    tab: entry.tab || null,
    file: entry.file || "main.png",
    url,
  };
}

async function captureStage0UiBaseline(options = {}) {
  const resultsKey = options.resultsKey || arg("results-key");
  if (!resultsKey) {
    throw new Error("Missing --results-key (Stage 0 results folder name)");
  }

  const stage0Dir = path.join(ROOT, "results", "fsd-figma-pipeline", resultsKey);
  if (!fs.existsSync(stage0Dir)) {
    throw new Error(`Stage 0 results folder not found: ${relative(stage0Dir)}`);
  }

  const htmlInventory = readJson(path.join(stage0Dir, "html-inventory.json"), null);
  const moduleName =
    options.module ||
    htmlInventory?.module ||
    resultsKey.replace(/\s+Test(\s+Cases)?$/i, "").trim();

  const specPath =
    options.specPath ||
    arg("spec") ||
    findSpecForModule(moduleName);
  const moduleUrl = options.moduleUrl || arg("module-url") || resolveModuleWarmupUrl(specPath);
  if (!moduleUrl) {
    throw new Error(
      "Cannot resolve module URL. Pass --spec <path/to/module.spec.ts> or --module-url",
    );
  }

  const shotsDir = path.join(stage0Dir, "screenshots");
  fs.mkdirSync(shotsDir, { recursive: true });

  const tabScreens = extractTabScreens(htmlInventory, moduleName);
  const plan = [
    { screenName: `${moduleName} — main`, tab: null, file: "main.png" },
    ...tabScreens.filter((row) => row.file !== "main.png"),
  ];

  const headless = process.env.PW_UI_BASELINE_HEADLESS !== "0";
  await ensurePlaywrightChromium();
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  const manifestRows = [];
  const failures = [];
  for (const entry of plan) {
    try {
      const meta = await captureScreen(page, moduleUrl, entry, moduleName);
      const outPath = path.join(shotsDir, meta.file);
      await page.screenshot({ path: outPath, fullPage: true });
      manifestRows.push({
        screenKey: meta.screenKey,
        screenName: meta.screenName,
        tab: meta.tab,
        file: meta.file,
        capturedAt: new Date().toISOString(),
        moduleUrl: meta.url,
      });
      console.log(`Baseline screenshot → ${relative(outPath)}`);
    } catch (error) {
      failures.push({ entry: entry.screenName || entry.file, error: error.message });
      console.warn(`Baseline capture skipped for ${entry.screenName || entry.file}: ${error.message}`);
    }
  }

  await browser.close();

  if (!manifestRows.length) {
    throw new Error(
      `No baseline screenshots captured (${failures.length} failure(s)). Check BASE_URL / network.`,
    );
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    resultsKey,
    module: moduleName,
    moduleUrl,
    viewport: { width: 1440, height: 900 },
    screenshots: manifestRows,
    failures,
  };
  writeJson(path.join(shotsDir, "screenshots-manifest.json"), manifest);
  writeJson(path.join(stage0Dir, "ui-baseline-manifest.json"), manifest);

  return { shotsDir: relative(shotsDir), count: manifestRows.length, manifest };
}

function findSpecForModule(moduleName) {
  const normalized = String(moduleName || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const roots = [
    path.join(ROOT, "tests", "milestone2", "test-cases"),
    path.join(ROOT, "tests", "milestone1", "test-cases"),
  ];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const file of walkSpecs(root)) {
      const stem = path.basename(file, ".spec.ts").toLowerCase();
      if (stem.includes(normalized.slice(0, 12)) || normalized.includes(stem.slice(0, 12))) {
        return relative(file);
      }
    }
  }
  return null;
}

function walkSpecs(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkSpecs(full));
    else if (entry.name.endsWith(".spec.ts")) out.push(full);
  }
  return out;
}

async function main() {
  const result = await captureStage0UiBaseline({
    resultsKey: arg("results-key"),
    specPath: arg("spec"),
    moduleUrl: arg("module-url"),
  });
  console.log(
    JSON.stringify(
      {
        screenshotsDir: result.shotsDir,
        count: result.count,
        manifest: path.join(result.shotsDir, "screenshots-manifest.json"),
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Stage 0 UI baseline capture failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { captureStage0UiBaseline, extractTabScreens };
