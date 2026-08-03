#!/usr/bin/env node
/**
 * Split normalized eligible cases into six deterministic, near-equal batches.
 */
const fs = require("fs");
const {
  absolute,
  arg,
  moduleName,
  nearEqualBatches,
  normalizedCases,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

function isEligible(testCase) {
  const status = String(
    testCase.validationStatus || testCase.status || "valid"
  ).toLowerCase();
  const rating = String(
    testCase.automationFeasibility?.rating || "automatable"
  ).toLowerCase();
  return (
    ["valid", "valid with warnings", "normalized", "ready"].includes(status) &&
    !["manual-only", "blocked", "not-automatable"].includes(rating)
  );
}

function deltaGenerateIdSet(deltaPath) {
  if (!deltaPath) return null;
  if (!fs.existsSync(absolute(deltaPath))) {
    throw new Error(`Delta report not found: ${deltaPath}`);
  }
  const delta = readJson(deltaPath);
  const ids = [
    ...(delta.add || []),
    ...(delta.update || []),
  ]
    .map((item) => item.testCaseId || item.id || item)
    .filter(Boolean);
  return new Set(ids);
}

function buildBatchPlan(cases, batchCount, sourcePath, options = {}) {
  let eligibleCases = cases.filter(isEligible);
  if (options.generateIdSet) {
    eligibleCases = eligibleCases.filter((testCase) =>
      options.generateIdSet.has(testCase.testCaseId)
    );
  }
  const partitions = nearEqualBatches(eligibleCases, batchCount);
  return {
    schemaVersion: "1.0",
    createdAt: new Date().toISOString(),
    normalizedSource: relative(sourcePath),
    pipelineMode: options.pipelineMode || (options.generateIdSet ? "reconcile" : "create"),
    tcDeltaReportPath: options.deltaPath ? relative(options.deltaPath) : null,
    resultsRoot: options.resultsRoot ? relative(options.resultsRoot) : null,
    batchCount,
    totalEligibleCases: eligibleCases.length,
    distribution: partitions.map((batch) => batch.length),
    batches: partitions.map((batch, index) => ({
      index: index + 1,
      status: batch.length ? "pending" : "empty",
      size: batch.length,
      caseIds: batch.map((testCase) => testCase.testCaseId),
      modules: [...new Set(batch.map(moduleName))],
      substages: {
        generation: "pending",
        execution: "pending",
        healing: "pending",
        verification: "pending",
      },
    })),
  };
}

function main() {
  const normalizedPath = arg(
    "normalized",
    "results/qa-pipeline/normalized/test-cases.json"
  );
  const resultsRoot = arg("results-root", "");
  const outputPath = arg(
    "out",
    resultsRoot
      ? `${resultsRoot.replace(/\/$/, "")}/batches/batch-plan.json`
      : "results/qa-pipeline/batches/batch-plan.json"
  );
  const deltaPath = arg("delta", "");
  const batchCount = Number.parseInt(arg("count", "6"), 10);
  try {
    if (!Number.isInteger(batchCount) || batchCount !== 6) {
      throw new Error("QA scripting requires exactly 6 batches");
    }
    if (!fs.existsSync(absolute(normalizedPath))) {
      throw new Error(`Normalized cases not found: ${normalizedPath}`);
    }
    const generateIdSet = deltaGenerateIdSet(deltaPath);
    if (generateIdSet && generateIdSet.size === 0) {
      throw new Error(
        "Reconcile delta has empty add+update generate scope — nothing to batch"
      );
    }
    const document = readJson(normalizedPath);
    if (document.fabricated === true || document.representativeSample === true) {
      throw new Error(
        "Normalized document is fabricated/sample — refuse to split. Re-run qa:normalize."
      );
    }
    const plan = buildBatchPlan(
      normalizedCases(document),
      batchCount,
      normalizedPath,
      {
        generateIdSet,
        deltaPath,
        resultsRoot,
        pipelineMode: generateIdSet ? "reconcile" : "create",
      }
    );
    if (generateIdSet && plan.totalEligibleCases !== generateIdSet.size) {
      const present = new Set(
        plan.batches.flatMap((batch) => batch.caseIds)
      );
      const missing = [...generateIdSet].filter((id) => !present.has(id));
      throw new Error(
        `Delta generate-scope size ${generateIdSet.size} != batched ${plan.totalEligibleCases}. Missing e.g. ${missing
          .slice(0, 10)
          .join(", ")}`
      );
    }
    writeJson(outputPath, plan);
    console.log(
      `Prepared ${plan.batchCount} batches for ${plan.totalEligibleCases} eligible case(s): ` +
        plan.distribution.join(", ")
    );
    return plan;
  } catch (error) {
    console.error(`Batch split failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) main();
module.exports = { buildBatchPlan, isEligible, main };
