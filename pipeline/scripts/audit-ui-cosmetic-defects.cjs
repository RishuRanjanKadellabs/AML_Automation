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
  collectCrrFigmaLayoutFindings,
  compareFigmaBaseline,
  extractLiveTexts,
} = require("./ui-cosmetic-analyzer.cjs");
const { UI_DEFECT_HEADERS, uiDefectId } = require("./ui-defect-constants.cjs");
const { resolveModuleWarmupUrl } = require("./resolve-module-warmup-path.cjs");
const { mergeUiDefectsIntoWorkbooks } = require("./merge-ui-defects-workbook.cjs");
const { filterDomFindings, filterAllFindings } = require("./ui-finding-filters.cjs");
const { enrichFinding } = require("./ui-defect-plain-language.cjs");
const {
  compareScreenshotFiles,
  resolveBaselineScreenshot,
  DEFAULT_FAIL_PERCENT,
} = require("./ui-visual-diff.cjs");
const {
  isFullscreenEnabled,
  maximizeBrowserWindow,
  scrollFullPageForAudit,
  playwrightViewportOption,
  chromeFullscreenArgs,
} = require("./browser-fullscreen.cjs");

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

function buildDefectRows(findings, { milestone, module, environment }) {
  const moduleSlug = kebabCase(module).replace(/-/g, "").slice(0, 6).toUpperCase() || "MOD";
  return findings.map((finding, index) => {
    const plain = enrichFinding(finding, { module });
    return {
      Milestone: `M${milestone}`,
      "Defect ID": uiDefectId(milestone, moduleSlug, index + 1),
      "Screen Key": plain.screenKey,
      Module: module,
      Feature: plain.feature || plain.screenName || "Page Layout",
      "Defect Category": plain.category,
      Summary: plain.summary,
      "Steps to Reproduce": plain.stepsToReproduce,
      "Expected (Design)": plain.expected,
      "Actual (Observed)": plain.actual,
      Severity: plain.severity || "Medium",
      Priority: plain.severity === "High" ? "High" : "Medium",
      Status: "New",
      Environment: environment || "qa",
      "Related Test Case ID": plain.testCaseId || "",
      "Evidence Path": plain.evidencePath || "",
      "Found By": "Automation UI analysis (Figma + live screen)",
    };
  });
}

function dedupeFindings(findings) {
  const seen = new Set();
  return findings.filter((finding) => {
    const dedupeKey = finding.dedupeKey;
    if (dedupeKey) {
      const key = `${finding.category}::${dedupeKey}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }
    const normalized = String(finding.summary || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    const globalLayout =
      /onb|ong|evt|prd|category.*line|parameter.*wrap|sidebar wraps|stage columns/i.test(normalized);
    const key = globalLayout
      ? `${finding.category}::${normalized.slice(0, 100)}`
      : `${finding.screenKey}::${finding.category}::${normalized}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function dedupeDefectRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = `${row["Defect Category"]}::${String(row.Summary || "").slice(0, 120).toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function auditScreen(page, screen, ctx) {
  const findings = [];
  const screenshotDir = path.join(ROOT, "results", "ui-audit", "screenshots");
  const diffDir = path.join(ROOT, "results", "ui-audit", "diffs");
  fs.mkdirSync(screenshotDir, { recursive: true });
  fs.mkdirSync(diffDir, { recursive: true });

  try {
    await page.goto(screen.url.split("#")[0], { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(1500);

    if (screen.tab) {
      const tab = page
        .getByRole("tab", {
          name: new RegExp(screen.tab.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
        })
        .or(page.getByText(screen.tab, { exact: true }))
        .first();
      if (await tab.isVisible().catch(() => false)) {
        await tab.click();
        await page.waitForTimeout(1000);
      }
    }

    if (screen.sidebarCategory) {
      const categoryBtn = page
        .getByRole("button", { name: new RegExp(screen.sidebarCategory.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") })
        .first();
      if (await categoryBtn.isVisible().catch(() => false)) {
        await categoryBtn.click();
        await page.waitForTimeout(800);
      }
    }

    await maximizeBrowserWindow(page);
    await scrollFullPageForAudit(page);

    const shotName = `${kebabCase(screen.screenKey).slice(0, 80)}.png`;
    const evidencePath = path.join(screenshotDir, shotName);
    await page.screenshot({ path: evidencePath, fullPage: true });

    const domRaw = await collectDomFindings(page);
    const domFiltered = filterDomFindings(domRaw);
    for (const item of domFiltered) {
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

    const isCrrWeightsScreen =
      /customer risk|risk rating|categorisation/i.test(`${ctx.module} ${screen.url || ""}`) &&
      (!screen.tab ||
        /category weights/i.test(screen.tab) ||
        Boolean(screen.sidebarCategory));

    if (isCrrWeightsScreen && !ctx.crrLayoutAudited) {
      ctx.crrLayoutAudited = true;
      const crrLayout = await collectCrrFigmaLayoutFindings(page);
      for (const item of crrLayout) {
        findings.push({
          ...item,
          screenKey: screen.screenKey,
          screenName: screen.screenName || screen.tab || screen.screenKey,
          feature: screen.sidebarCategory
            ? `${screen.sidebarCategory} category`
            : "Category Weights & Parameters tab",
          testCaseId: screen.testCaseId || "",
          evidencePath: relative(evidencePath),
          figmaReference: ctx.figmaBaseline?.path || null,
          stepsToReproduce: `1. Open ${ctx.module}\n2. Go to ${screen.screenName || screen.screenKey}\n3. Compare ONB/ONG/EVT/PRD columns and 4.x labels with Figma design`,
        });
      }
    }

    const liveTexts = await extractLiveTexts(page);
    for (const item of compareFigmaBaseline(liveTexts, ctx.figmaBaseline, screen)) {
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
      const baselinePath = resolveBaselineScreenshot(ctx.screenshotBaselineDir, screen);
      if (baselinePath) {
        const diffPath = path.join(diffDir, shotName.replace(/\.png$/i, "-diff.png"));
        try {
          const visual = await compareScreenshotFiles(baselinePath, evidencePath, diffPath);
          if (!visual.passed) {
            findings.push({
              category: "Layout",
              screenKey: screen.screenKey,
              screenName: screen.screenName || screen.screenKey,
              feature: screen.tab ? `${screen.tab} tab` : "Visual baseline",
              summary: `Live UI layout differs from Stage 0 design baseline (${visual.diffPercent.toFixed(1)}% pixels changed)`,
              expected: "Screen layout should match the approved Stage 0 screenshot baseline",
              actual: `Pixel diff ${visual.diffPercent.toFixed(1)}% exceeds ${visual.failThresholdPercent}% threshold. Diff image: ${relative(diffPath)}`,
              severity: visual.diffPercent > 12 ? "High" : "Medium",
              confidence: 0.9,
              testCaseId: screen.testCaseId || "",
              evidencePath: relative(diffPath),
              stepsToReproduce: `1. Open ${ctx.module}\n2. Go to ${screen.screenName || screen.screenKey}\n3. Compare live capture ${relative(evidencePath)} with baseline ${relative(baselinePath)}`,
            });
          }
        } catch (error) {
          findings.push({
            category: "UX",
            screenKey: screen.screenKey,
            screenName: screen.screenName || screen.screenKey,
            feature: "Visual baseline",
            summary: "Could not compare live UI with Stage 0 screenshot baseline",
            expected: "Automated visual diff should run against Stage 0 baseline",
            actual: cleanText(error.message).slice(0, 240),
            severity: "Low",
            confidence: 0.5,
            testCaseId: screen.testCaseId || "",
            evidencePath: relative(evidencePath),
            stepsToReproduce: `Review ${relative(evidencePath)} against ${relative(baselinePath)}`,
          });
        }
      }
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
    const categories = [
      "Sanctions & Watchlist Risk",
      "Geographic & Jurisdictional Risk",
      "Transactional Behaviour Risk",
      "Business & Occupation Risk",
      "Customer Profile & KYC Risk",
      "Product & Service Risk",
      "Channel & Delivery Risk",
      "Financial Profile Risk",
      "Entity Type & Corporate Structure",
    ];
    for (const category of categories) {
      screens.push({
        screenKey: `${moduleUrl}#category-${category.toLowerCase().replace(/\s+/g, "-")}`,
        url: moduleUrl,
        screenName: `${moduleName} — ${category}`,
        module: moduleName,
        tab: "Category Weights & Parameters",
        sidebarCategory: category,
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

  const headless =
    process.env.PW_UI_AUDIT_HEADLESS === "1" ||
    process.env.PW_HEADLESS === "1" ||
    process.env.HEADLESS === "true";
  const browser = await chromium.launch({
    headless,
    args: headless ? [] : chromeFullscreenArgs(),
  });
  const viewport = playwrightViewportOption();
  const context = await browser.newContext({
    ...(viewport === null ? { viewport: null } : { viewport: { width: 1920, height: 1080 } }),
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  await maximizeBrowserWindow(page);

  const allFindings = [];
  const auditCtx = {
    module,
    figmaBaseline,
    screenshotBaselineDir,
    baseUrl,
    crrLayoutAudited: false,
  };
  for (const screen of screens) {
    const batch = await auditScreen(page, screen, auditCtx);
    allFindings.push(...batch);
  }

  await browser.close();

  const deduped = filterAllFindings(dedupeFindings(allFindings));
  const rows = dedupeDefectRows(buildDefectRows(deduped, { milestone, module, environment }));

  const auditReport = {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    module,
    specPath,
    screensAudited: screens.length,
    findingCount: deduped.length,
    fullscreen: isFullscreenEnabled(),
    auditHeadless: headless,
    figmaBaseline: figmaBaseline?.path || null,
    screenshotBaselineDir: screenshotBaselineDir ? relative(screenshotBaselineDir) : null,
    visualDiffFailPercent: DEFAULT_FAIL_PERCENT,
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
