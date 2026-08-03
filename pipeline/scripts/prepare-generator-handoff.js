#!/usr/bin/env node
/**
 * Build one generator handoff per discovered Excel module.
 */
const fs = require("fs");
const {
  absolute,
  arg,
  defaultSpecPath,
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

function targetSpecPath(module, cases, moduleMap) {
  const configured = moduleMap[module];
  if (typeof configured === "string") return configured;
  if (configured?.targetSpecPath) return configured.targetSpecPath;
  return defaultSpecPath(module, cases);
}

function isEligibleUiCase(testCase) {
  const rating = String(testCase.automationFeasibility?.rating || "automatable").toLowerCase();
  const tags = (testCase.tags || []).map((tag) => String(tag).toLowerCase());
  const type = String(testCase.automationType || testCase.type || "ui").toLowerCase();
  return !["manual-only", "blocked"].includes(rating) && !tags.includes("api") && !tags.includes("db") &&
    !["api", "database", "db"].includes(type);
}

function createGeneratorHandoff(module, cases, specPath, batchIndex = null) {
  const eligibleUiCaseIds = cases.filter(isEligibleUiCase).map((testCase) => testCase.testCaseId);
  return {
    handoff: "qa-pipeline.generate",
    invokeExistingAgent: ".cursor/agents/test-generator.agent.md",
    agentAtRef: "@.cursor/agents/test-generator.agent.md",
    doNotModifyAgentConfig: true,
    payload: {
      batchIndex,
      batchCount: batchIndex ? 6 : null,
      appendToExistingModuleSpec: Boolean(batchIndex && batchIndex > 1),
      module,
      targetSpecPath: specPath,
      testCases: cases,
      eligibleCaseIds: cases.map((testCase) => testCase.testCaseId),
      eligibleUiCaseIds,
      framework: "Playwright + TypeScript POM",
      reuse: [
        "tests/milestone2/",
        "tests/PageObjects/",
        "tests/objectrepositories/",
        "tests/fixtures/",
        "tests/helpers/",
        "fixtures/environments.json",
      ],
      environmentRequirements: {
        baseUrlFrom: ["BASE_URL", "fixtures/environments.json"],
        loginBypassed: true,
        navigateViaBaseUrlOnly: true,
      },
      knownConstraints: [
        "Login bypassed - do not require EMAIL/PASSWORD",
        "One spec per Excel module",
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
        specFilePattern: "One .spec.ts per Excel module",
        targetDirectory: "tests/milestone2/",
        locatorDirectory: "tests/milestone2/objectrepositories/",
        pageObjectDirectory: "tests/milestone2/pages/",
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
  try {
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
        targetSpecPath(module, moduleCases, moduleMap),
        batchIndex
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
module.exports = { createGeneratorHandoff, main };
