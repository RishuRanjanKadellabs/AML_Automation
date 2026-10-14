#!/usr/bin/env node
/**
 * Build one generator handoff per discovered Excel module.
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  absolute,
  arg,
  defaultSpecPath,
  kebabCase,
  moduleName,
  normalizedCases,
  readJson,
  relative,
  unique,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

function loadModuleMap(filePath) {
  if (!filePath) return {};
  const map = readJson(filePath);
  return map.modules || map;
}

function findExistingSpec(module, milestone) {
  const root = path.join(
    ROOT,
    "tests",
    `milestone${milestone}`,
    "test-cases"
  );
  const expectedFile = `${kebabCase(module)}.spec.ts`;
  if (!fs.existsSync(root)) return null;
  const directories = [root];
  while (directories.length) {
    const current = directories.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) directories.push(entryPath);
      if (entry.isFile() && entry.name === expectedFile) {
        return relative(entryPath);
      }
    }
  }
  return null;
}

const M1_UI_NFR_SPEC = "tests/milestone1/nfr/ui-nfr-tests.spec.ts";

function isM1NfrWorkbook(normalized, milestone) {
  if (milestone !== 1) return false;
  const excel = String(
    normalized?.sourceExcel || normalized?.resultsKey || ""
  );
  return /nfr test cases/i.test(excel);
}

function targetSpecPath(module, cases, moduleMap, milestone, normalized = null) {
  if (isM1NfrWorkbook(normalized, milestone)) {
    return M1_UI_NFR_SPEC;
  }
  const configured = moduleMap[module];
  if (typeof configured === "string") return configured;
  if (configured?.targetSpecPath) return configured.targetSpecPath;
  return (
    findExistingSpec(module, milestone) ||
    defaultSpecPath(module, cases, milestone)
  );
}

function isEligibleUiCase(testCase) {
  const rating = String(testCase.automationFeasibility?.rating || "automatable").toLowerCase();
  const tags = (testCase.tags || []).map((tag) => String(tag).toLowerCase());
  const type = String(testCase.automationType || testCase.type || "ui").toLowerCase();
  return !["manual-only", "partial", "blocked"].includes(rating) && !tags.includes("api") && !tags.includes("db") &&
    !["api", "database", "db"].includes(type);
}

function createGeneratorHandoff(
  module,
  cases,
  specPath,
  batchIndex = null,
  milestone = 2
) {
  const milestoneRoot = `tests/milestone${milestone}`;
  const consolidatedNfrSpec =
    milestone === 1 && specPath === M1_UI_NFR_SPEC;
  const eligibleUiCaseIds = cases.filter(isEligibleUiCase).map((testCase) => testCase.testCaseId);
  return {
    handoff: "qa-pipeline.generate",
    invokeExistingAgent: ".cursor/agents/test-generator.agent.md",
    agentAtRef: "@.cursor/agents/test-generator.agent.md",
    doNotModifyAgentConfig: true,
    payload: {
      batchIndex,
      batchCount: batchIndex ? 6 : null,
      milestone,
      appendToExistingModuleSpec: consolidatedNfrSpec
        ? fs.existsSync(absolute(specPath))
        : Boolean(batchIndex && batchIndex > 1),
      module,
      targetSpecPath: specPath,
      consolidatedUiNfrSpec: consolidatedNfrSpec || undefined,
      testCases: cases,
      eligibleCaseIds: cases.map((testCase) => testCase.testCaseId),
      eligibleUiCaseIds,
      framework: "Playwright + TypeScript POM",
      reuse: [
        `${milestoneRoot}/`,
        "tests/PageObjects/",
        "tests/objectrepositories/",
        "tests/fixtures/",
        "tests/helpers/",
        "fixtures/environments.json",
      ],
      environmentRequirements: {
        baseUrlFrom: ["BASE_URL", "fixtures/environments.json"],
        sessionLoginRequired: true,
        credentialsFromEnv: ["EMAIL", "PASSWORD", "AML_USERNAME", "AML_PASSWORD"],
        navigateViaBaseUrlOnly: false,
      },
      knownConstraints: [
        "Session login required — use tests/helpers/aml-login.ts with EMAIL/PASSWORD from .env (never hard-code password)",
        consolidatedNfrSpec
          ? "Append UI NFR cases to tests/milestone1/nfr/ui-nfr-tests.spec.ts grouped by module describe"
          : "One spec per Excel module",
        "Generate every case assigned to this batch",
        "Append without deleting or duplicating cases from earlier batches",
        "Every eligible UI case requires live application evidence",
        "liveUiCoveragePercent must equal 100",
      ],
      requiredEvidence: [
        "Per-case live module URL",
        "Per-case snapshot/evaluate/log references",
        "Controls/actions and expected-result target exercised live",
        "Every generated or reused locator confirmed against current live DOM",
      ],
      requiredAssertions: [
        "All Excel Expected Results must be verified",
        "No weakened assertions or forced-pass patterns",
      ],
      codeStandards: {
        specFilePattern: consolidatedNfrSpec
          ? "tests/milestone1/nfr/ui-nfr-tests.spec.ts"
          : "One .spec.ts per Excel module",
        targetDirectory: `${milestoneRoot}/`,
        locatorDirectory: `${milestoneRoot}/objectrepositories/`,
        pageObjectDirectory: `${milestoneRoot}/pages/`,
        noSkipFixmeOnly: true,
        extendsBasePage: true,
        followLocatorPriority: true,
      },
    },
  };
}

function main() {
  const normalizedPath = arg("normalized", "results/qa-pipeline/normalized/test-cases.json");
  const manifestPath = arg("out", "results/qa-pipeline/generation/generation-manifest.json");
  const moduleMapPath = arg("module-map");
  const batchPlanPath = arg("batch-plan");
  const batchIndex = Number.parseInt(arg("batch-index", "0"), 10) || null;
  const milestone = Number.parseInt(arg("milestone", "2"), 10);
  try {
    if (![1, 2].includes(milestone)) {
      throw new Error("--milestone must be 1 or 2");
    }
    if (!fs.existsSync(absolute(normalizedPath))) {
      throw new Error(`Normalized cases not found: ${normalizedPath}`);
    }
    const normalized = readJson(normalizedPath);
    const allCases = normalizedCases(normalized);
    let cases = allCases;
    let batchPlan = null;
    let selectedBatch = null;
    if (batchIndex) {
      if (!batchPlanPath || !fs.existsSync(absolute(batchPlanPath))) {
        throw new Error("--batch-plan is required with --batch-index");
      }
      batchPlan = readJson(batchPlanPath);
      selectedBatch = (batchPlan.batches || []).find(
        (batch) => Number(batch.index) === batchIndex
      );
      if (!selectedBatch) throw new Error(`Batch ${batchIndex} not found`);
      const selectedIds = new Set(selectedBatch.caseIds || []);
      cases = allCases.filter((testCase) => selectedIds.has(testCase.testCaseId));
    }
    const moduleMap = loadModuleMap(moduleMapPath);
    const grouped = new Map();
    for (const testCase of cases) {
      const module = moduleName(testCase);
      if (!grouped.has(module)) grouped.set(module, []);
      grouped.get(module).push(testCase);
    }
    const handoffs = [...grouped.entries()].map(([module, moduleCases]) =>
      createGeneratorHandoff(
        module,
        moduleCases,
        targetSpecPath(module, moduleCases, moduleMap, milestone, normalized),
        batchIndex,
        milestone
      )
    );
    const eligibleCaseIds = allCases.map((testCase) => testCase.testCaseId);
    const eligibleUiCaseIds = allCases.filter(isEligibleUiCase).map((testCase) => testCase.testCaseId);
    const specFiles = handoffs.map((handoff) => handoff.payload.targetSpecPath);
    const existingManifest = fs.existsSync(absolute(manifestPath))
      ? readJson(manifestPath, {})
      : {};
    const allSpecFiles = unique([
      ...(existingManifest.expectedOutputs?.specFiles || []),
      ...specFiles,
    ]);
    const allModuleBreakdown = {};
    for (const testCase of allCases) {
      const module = moduleName(testCase);
      allModuleBreakdown[module] = (allModuleBreakdown[module] || 0) + 1;
    }
    const manifest = {
      ...existingManifest,
      resultsKey: normalized.resultsKey || null,
      createdAt: existingManifest.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      sourceExcel: normalized.sourceExcel || cases[0]?.source?.excelFile || "",
      milestone,
      batchPlan: batchPlanPath ? relative(batchPlanPath) : null,
      currentBatchIndex: batchIndex,
      batchCount: batchPlan?.batchCount || (batchIndex ? 6 : null),
      source: {
        normalizedTestCases: relative(normalizedPath),
        totalCases: allCases.length,
        moduleBreakdown: allModuleBreakdown,
      },
      eligibleCaseIds,
      generatedCaseIds: existingManifest.generatedCaseIds || [],
      eligibleUiCaseIds,
      liveUiValidatedCaseIds: existingManifest.liveUiValidatedCaseIds || [],
      liveUiEvidenceByCase: existingManifest.liveUiEvidenceByCase || {},
      liveUiCoveragePercent: existingManifest.liveUiCoveragePercent || 0,
      handoffs,
      batchHandoffs: {
        ...(existingManifest.batchHandoffs || {}),
        ...(batchIndex ? { [batchIndex]: handoffs } : {}),
      },
      batches: batchPlan?.batches || existingManifest.batches || [],
      expectedOutputs: {
        specFiles: allSpecFiles,
        totalExpectedCases: allCases.length,
      },
      artifacts: unique([...(existingManifest.artifacts || []), ...allSpecFiles]),
      gateChecks: {
        allCasesGenerated: false,
        allEligibleUiCasesLiveValidated: false,
        oneSpecPerModule: true,
        pomCreated: false,
        specFilesRunnable: false,
      },
      status: "Incomplete",
      blockReason: null,
    };
    writeJson(manifestPath, manifest);
    const scopeLabel = batchIndex
      ? `batch ${batchIndex} (${cases.length} case(s))`
      : `${cases.length} case(s)`;
    console.log(`Prepared ${handoffs.length} module handoff(s) for ${scopeLabel}:`);
    for (const handoff of handoffs) {
      console.log(
        `  ${handoff.payload.module}: ${handoff.payload.testCases.length} → ${handoff.payload.targetSpecPath}`
      );
    }
    return { handoffs, manifest };
  } catch (error) {
    console.error(`Generator handoff failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) main();
module.exports = {
  createGeneratorHandoff,
  findExistingSpec,
  main,
  targetSpecPath,
};
