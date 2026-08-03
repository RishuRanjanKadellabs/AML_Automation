#!/usr/bin/env node
/**
 * Post-execute UI / UX / cosmetic audit for unique screens visited during a module run.
 * Writes findings JSON + defect rows; merges into module defect workbook (UI Defects sheet).
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
const {
  resolveFigmaBaselineForModule,
  resolveScreenshotBaselineDir,
} = require("./parse-figma-html-baseline.cjs");
const {
  collectDomFindings,
  compareFigmaBaseline,
  extractLiveTexts,
} = require("./ui-cosmetic-analyzer.cjs");
const { UI_DEFECT_HEADERS, uiDefectId } = require("./ui-defect-constants.cjs");
const { resolveModuleWarmupUrl } = require("./resolve-module-warmup-path.cjs");
const { mergeUiDefectsIntoWorkbooks } = require("./merge-ui-defects-workbook.cjs");

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function mergeVisitedScreens() {
  const dir = path.join(ROOT, "results", "ui-audit");
  const byKey = new Map();
  if (!fs.existsSync(dir)) return [];

  for (const file of fs.readdirSync(dir)) {
    if (!/^visited-screens-w\d+\.json$/i.test(file)) continue;
    const payload = readJson(path.join(dir, file), { screens: [] });
    for (const screen of payload.screens || []) {
      if (!screen?.screenKey) continue;
      if (!byKey.has(screen.screenKey)) byKey.set(screen.screenKey, screen);
    }
  }
  return [...byKey.values()];
}

function moduleFromExecution(execution) {
  return (
    execution?.testCases?.[0]?.module ||
    execution?.testCases?.find((tc) => tc.module)?.module ||
    "Unknown Module"
  );
}

function plainSummary(module, category, detail) {
  return `${module} page: ${category} issue — ${detail}`.slice(0, 240);
}

function buildDefectRows(findings, { milestone, module, environment }) {
  const moduleSlug = kebabCase(module).replace(/-/g, "").slice(0, 6).toUpperCase() || "MOD";
  return findings.map((finding, index) => ({
    Milestone: `M${milestone}`,
    "Defect ID": uiDefectId(milestone, moduleSlug, index + 1),
    "Screen Key": finding.screenKey,
    Module: module,
    Feature: finding.feature || finding.screenName || "Page Layout",
    "Defect Category": finding.category,
    Summary: plainSummary(module, finding.category, finding.summary),
    "Steps to Reproduce": finding.stepsToReproduce,
    "Expected (Design)": finding.expected,
    "Actual (Observed)": finding.actual,
    Severity: finding.severity || "Medium",
    Priority: finding.severity === "High" ? "High" : "Medium",
    Status: "New",
    Environment: environment || "qa",
    "Related Test Case ID": finding.testCaseId || "",
    "Evidence Path": finding.evidencePath || "",
    "Found By": "Automation UI analysis",
  }));
}

function dedupeFindings(findings) {
  const seen = new Set();
  return findings.filter((f) => {
    const key = `${f.screenKey}::${f.category}::${f.summary}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function auditScreen(page, screen, ctx) {
  const findings = [];
  const screenshotDir = path.join(ROOT, "results", "ui-audit", "screenshots");
  fs.mkdirSync(screenshotDir, { recursive: true });

  try {
    await page.goto(screen.url.split("#")[0], { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(1500);

    if (screen.tab) {
      const tab = page.getByRole("tab", { name: new RegExp(screen.tab, "i") }).first();
      if (await tab.isVisible().catch(() => false)) {
        await tab.click();
        await page.waitForTimeout(800);
      }
    }

    const shotName = `${kebabCase(screen.screenKey).slice(0, 80)}.png`;
    const evidencePath = path.join(screenshotDir, shotName);
    await page.screenshot({ path: evidencePath, fullPage: true });

    const dom = await collectDomFindings(page);
    for (const item of dom.findings || []) {
      findings.push({
        ...item,
        screenKey: screen.screenKey,
        screenName: screen.screenName || screen.tab || screen.screenKey,
        feature: screen.tab ? `${screen.tab} tab` : "Page Layout",
        testCaseId: screen.testCaseId || "",
        evidencePath: relative(evidencePath),
        stepsToReproduce: `1. Open ${ctx.module} module\n2. Navigate to ${screen.screenName || screen.screenKey}\n3. Review layout, labels, spacing, and controls on screen`,
      });
    }

    const liveTexts = await extractLiveTexts(page);
    for (const item of compareFigmaBaseline(liveTexts, ctx.figmaBaseline)) {
      findings.push({
        ...item,
        screenKey: screen.screenKey,
        screenName: screen.screenName || screen.screenKey,
        feature: screen.tab ? `${screen.tab} tab` : "Navigation / Labels",
        testCaseId: screen.testCaseId || "",
        evidencePath: relative(evidencePath),
        stepsToReproduce: `1. Open ${ctx.module}\n2. Go to ${screen.screenName || screen.screenKey}\n3. Compare visible labels with Figma design baseline`,
      });
    }

    if (ctx.screenshotBaselineDir) {
      findings.push({
        category: "UX",
        screenKey: screen.screenKey,
        screenName: screen.screenName || screen.screenKey,
        feature: "Visual baseline",
        summary: "Live UI screenshot captured for comparison with Stage 0 design baseline",
        expected: "Visual layout should match approved Figma / Stage 0 screenshot baseline",
        actual: `Live capture at ${relative(evidencePath)}; baseline folder ${relative(ctx.screenshotBaselineDir)}`,
        severity: "Low",
        testCaseId: screen.testCaseId || "",
        evidencePath: relative(evidencePath),
        stepsToReproduce: `Compare ${relative(evidencePath)} with screenshots under ${relative(ctx.screenshotBaselineDir)}`,
      });
    }
  } catch (error) {
    findings.push({
      category: "UX",
      screenKey: screen.screenKey,
      screenName: screen.screenName || screen.screenKey,
      feature: "Screen audit",
      summary: `Could not complete UI audit for screen ${screen.screenKey}`,
      expected: "Screen should load for cosmetic analysis during execute",
      actual: cleanText(error.message).slice(0, 240),
      severity: "Low",
      testCaseId: screen.testCaseId || "",
      evidencePath: "",
      stepsToReproduce: `Attempt to open ${screen.url} during post-execute UI audit`,
    });
  }

  return findings;
}

function defaultScreensForModule(moduleUrl, moduleName) {
  const screens = [
    {
      screenKey: moduleUrl,
      url: moduleUrl,
      screenName: `${moduleName} — main`,
      module: moduleName,
    },
  ];
  if (/customer.risk|risk.rating|categorisation/i.test(moduleName + moduleUrl)) {
    for (const tab of [
      "Category Weights & Parameters",
      "Risk Scoring Configuration",
      "Periodic Review Frequency",
    ]) {
      screens.push({
        screenKey: `${moduleUrl}#${tab.toLowerCase().replace(/\s+/g, "-")}`,
        url: moduleUrl,
        screenName: `${moduleName} — ${tab}`,
        module: moduleName,
        tab,
      });
    }
  }
  return screens;
}

async function auditUiCosmeticDefects(options = {}) {
  const executionPath = absolute(
    options.executionReportPath || arg("execution") || "results/execution-report.json",
  );
  if (!fs.existsSync(executionPath)) {
    throw new Error(`Missing execution report: ${relative(executionPath)}`);
  }
  const execution = readJson(executionPath);
  const milestone =
    Number.parseInt(String(options.milestone || execution.milestone || arg("milestone")), 10) ||
    2;
  const specPath = options.specPath || execution.specsExecuted?.[0] || "";
  const module = options.module || moduleFromExecution(execution);
  const environment = execution.environment || process.env.ENV || "qa";
  const baseUrl = execution.baseUrl || resolveModuleWarmupUrl(specPath)?.replace(/\/[^/]+$/, "") || "";

  let screens = mergeVisitedScreens();
  const moduleUrl = resolveModuleWarmupUrl(specPath);
  if (moduleUrl) {
    const defaults = defaultScreensForModule(moduleUrl, module);
    for (const screen of defaults) {
      if (!screens.some((s) => s.screenKey === screen.screenKey)) screens.push(screen);
    }
  }
  if (!screens.length && moduleUrl) {
    screens = defaultScreensForModule(moduleUrl, module);
  }

  const figmaBaseline = resolveFigmaBaselineForModule(milestone, module);
  const screenshotBaselineDir = resolveScreenshotBaselineDir(milestone, module);

  const headless = process.env.PW_UI_AUDIT_HEADLESS !== "0";
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  const allFindings = [];
  for (const screen of screens) {
    const batch = await auditScreen(page, screen, {
      module,
      figmaBaseline,
      screenshotBaselineDir,
      baseUrl,
    });
    allFindings.push(...batch);
  }

  await browser.close();

  const deduped = dedupeFindings(allFindings);
  const rows = buildDefectRows(deduped, { milestone, module, environment });

  const auditReport = {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    module,
    specPath,
    screensAudited: screens.length,
    findingCount: deduped.length,
    figmaBaseline: figmaBaseline?.path || null,
    screenshotBaselineDir: screenshotBaselineDir ? relative(screenshotBaselineDir) : null,
    findings: deduped,
  };

  const auditDir = path.join(ROOT, "results", "ui-audit");
  fs.mkdirSync(auditDir, { recursive: true });
  writeJson(path.join(auditDir, "ui-defect-findings.json"), auditReport);

  const payloadPath = path.join(
    ROOT,
    "results",
    "qa-pipeline",
    "defects",
    `milestone-${milestone}-ui-defect-rows.json`,
  );
  writeJson(payloadPath, {
    milestone: `M${milestone}`,
    module,
    rows,
    headers: UI_DEFECT_HEADERS,
    generatedAt: auditReport.generatedAt,
  });

  const mergeResult = mergeUiDefectsIntoWorkbooks({
    milestone,
    module,
    rows,
    executionPath,
  });

  console.log(
    `UI audit: ${screens.length} screen(s), ${rows.length} cosmetic defect row(s) → ${mergeResult.workbookPath || "workbook pending"}`,
  );

  return {
    rows,
    auditReport,
    payloadPath: relative(payloadPath),
    workbookPath: mergeResult.workbookPath,
    screensAudited: screens.length,
  };
}

async function main() {
  const result = await auditUiCosmeticDefects({
    executionReportPath: arg("execution"),
    specPath: arg("spec"),
    milestone: arg("milestone"),
  });
  console.log(
    JSON.stringify(
      {
        screensAudited: result.screensAudited,
        uiDefectRows: result.rows.length,
        payload: result.payloadPath,
        workbook: result.workbookPath,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`UI cosmetic audit failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { auditUiCosmeticDefects, mergeVisitedScreens, buildDefectRows };
