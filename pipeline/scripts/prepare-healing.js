#!/usr/bin/env node
/**
 * Build a one-cycle healer handoff for a QA pipeline batch.
 */
const fs = require("fs");
const {
  absolute,
  arg,
  executionSummary,
  manifestSpecPaths,
  readJson,
  relative,
  unique,
  writeJson,
} = require("./qa-pipeline-utils.cjs");

const HEALABLE_CLASSIFICATIONS = new Set([
  "automation",
  "automation-defect",
  "locator-issue",
  "synchronization-issue",
]);

function createHealingHandoff(execution, manifest, targetSpecs, batchIndex = null) {
  const classifications = new Map(
    (execution.classifications || []).map((item) => [
      item.testCaseId,
      String(item.classification || "").toLowerCase(),
    ])
  );
  const changedScope = unique(
    [
      ...(execution.failedIds || []),
      ...(execution.caseResults || [])
        .filter((result) => !["passed", "expected", "skipped"].includes(result.status))
        .map((result) => result.testCaseId),
    ]
  ).filter((testCaseId) =>
    HEALABLE_CLASSIFICATIONS.has(classifications.get(testCaseId))
  );
  return {
    handoff: "qa-pipeline.batch-heal",
    userTriggered: false,
    pipelineAuthorized: true,
    batchIndex,
    batchCount: batchIndex ? 6 : null,
    maximumHealCycles: 1,
    schema: "specs/generated/qa-pipeline/schemas/batch-healing-report-schema.json",
    invokeExistingAgent: ".cursor/agents/test-healer.agent.md",
    agentAtRef: "@.cursor/agents/test-healer.agent.md",
    doNotModifyAgentConfig: true,
    input: {
      generationManifest: "results/qa-pipeline/generation/generation-manifest.json",
      executionReport: batchIndex
        ? `results/qa-pipeline/execution/batch-${batchIndex}/execution-report.json`
        : "results/qa-pipeline/execution/execution-report.json",
      casesSelectedForHealing: changedScope,
      failures: execution.classifications || execution.caseResults || [],
      targetSpecs,
      liveUIMandatory: true,
      liveUiHealingCoverageRequiredPercent: 100,
      preserveAssertions: true,
      forbiddenPatterns: [
        "test.skip()",
        "test.fixme()",
        "test.only()",
        "weakened assertions",
        "mock/heal shell as final evidence",
        "unrelated or stale module evidence",
      ],
    },
    requirements: {
      correctModuleRoute: "Verify each case's expected live module URL before diagnosis",
      preFixEvidence: "Capture test_debug/snapshot evidence before editing every changed case",
      postFixEvidence: "Re-run every changed case once on the live app",
      coverage:
        "liveUiValidatedHealedCaseIds must equal changed case IDs and liveUiHealingCoveragePercent must equal 100",
      minimalChanges: "Fix only automation defects while preserving test intent",
    },
    output: batchIndex
      ? `results/qa-pipeline/healing/batch-${batchIndex}/healing-report.json`
      : "results/qa-pipeline/healing/healing-report.json",
  };
}

function main() {
  const executionPath = arg("execution", "results/qa-pipeline/execution/execution-report.json");
  const manifestPath = arg("manifest", "results/qa-pipeline/generation/generation-manifest.json");
  const batchIndex = Number.parseInt(arg("batch-index", "0"), 10) || null;
  const outputPath = arg(
    "out",
    batchIndex
      ? `results/qa-pipeline/healing/batch-${batchIndex}/healing-handoff.json`
      : "results/qa-pipeline/healing/healing-handoff.json"
  );
  try {
    if (!fs.existsSync(absolute(executionPath))) {
      throw new Error(`Execution report not found: ${executionPath}`);
    }
    if (!fs.existsSync(absolute(manifestPath))) {
      throw new Error(`Generation manifest not found: ${manifestPath}`);
    }
    const execution = readJson(executionPath);
    const manifest = readJson(manifestPath);
    const summary = executionSummary(execution);
    if (summary.failed === 0 && summary.blocked === 0) {
      console.log("No failed or blocked cases require healing.");
      return null;
    }
    const specs = unique([
      ...(execution.specsExecuted || []),
      ...manifestSpecPaths(manifest),
    ]);
    const handoff = createHealingHandoff(execution, manifest, specs, batchIndex);
    if (!handoff.input.casesSelectedForHealing.length) {
      console.log(
        "No failures are classified as healable automation defects; healer will not run."
      );
      return null;
    }
    writeJson(outputPath, handoff);
    console.log(
      `Batch healer handoff prepared for ${handoff.input.casesSelectedForHealing.length} case(s) across ${specs.length} spec(s): ${relative(outputPath)}`
    );
    return handoff;
  } catch (error) {
    console.error(`Healing handoff failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) main();
module.exports = { createHealingHandoff, main };
