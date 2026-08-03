#!/usr/bin/env node
/**
 * Merge six batch execution/healing artifacts into one evidence-backed rollup.
 */
const fs = require("fs");
const {
  absolute,
  arg,
  executionSummary,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const { generateDefectFiles } = require("./generate-module-defects.js");

function addCounts(total, counts) {
  for (const key of [
    "passed",
    "failed",
    "skipped",
    "blocked",
    "timedOut",
    "interrupted",
    "total",
  ]) {
    total[key] = Number(total[key] || 0) + Number(counts[key] || 0);
  }
}

async function main() {
  const batchPlanPath = arg(
    "batch-plan",
    "results/qa-pipeline/batches/batch-plan.json"
  );
  const outputPath = arg(
    "out",
    "results/qa-pipeline/execution/aggregate-execution-report.json"
  );
  try {
    const plan = readJson(batchPlanPath);
    if (plan.batchCount !== 6 || (plan.batches || []).length !== 6) {
      throw new Error("Batch plan must contain exactly 6 batches");
    }
    const aggregate = {
      stage: "sixBatchExecution",
      generatedAt: new Date().toISOString(),
      batchPlan: relative(batchPlanPath),
      batchCount: 6,
      completedBatchCount: 0,
      preHealSummary: {},
      finalSummary: {},
      sourceExcel: null,
      caseResults: [],
      batches: [],
    };

    for (const batch of plan.batches) {
      const base = `results/qa-pipeline`;
      const prePath = `${base}/execution/batch-${batch.index}/execution-report.json`;
      const handoffPath = `${base}/healing/batch-${batch.index}/healing-handoff.json`;
      const healingPath = `${base}/healing/batch-${batch.index}/healing-report.json`;
      const postPath = `${base}/execution/batch-${batch.index}/post-heal-execution-report.json`;
      const pre = readJson(prePath, null);
      const handoff = readJson(handoffPath, null);
      const healing = readJson(healingPath, null);
      const post = readJson(postPath, null);
      const healerRequired = Boolean(
        handoff?.input?.casesSelectedForHealing?.length
      );
      const complete =
        batch.size === 0 ||
        (Boolean(pre) && (!healerRequired || (Boolean(healing) && Boolean(post))));
      const preCounts = executionSummary(pre || {});
      const finalCounts = executionSummary(post || pre || {});
      if (!aggregate.sourceExcel && pre?.sourceExcel) {
        aggregate.sourceExcel = pre.sourceExcel;
      }
      const classifications = new Map(
        [
          ...(pre?.classifications || []),
          ...(post?.classifications || []),
        ].map((entry) => [entry.testCaseId, entry.classification])
      );
      // Final defect source: post-heal overlays pre-heal; healed cases that
      // pass no longer appear as failures. Never emit defect sheets until
      // every batch heal cycle for this aggregate is complete.
      const finalById = new Map();
      for (const result of pre?.caseResults || []) {
        finalById.set(result.testCaseId, {
          ...result,
          classification:
            classifications.get(result.testCaseId) ||
            result.classification ||
            "Unclassified",
        });
      }
      for (const result of post?.caseResults || []) {
        finalById.set(result.testCaseId, {
          ...result,
          classification:
            classifications.get(result.testCaseId) ||
            result.classification ||
            "Unclassified",
        });
      }
      aggregate.caseResults.push(...finalById.values());
      addCounts(aggregate.preHealSummary, preCounts);
      addCounts(aggregate.finalSummary, finalCounts);
      if (complete) aggregate.completedBatchCount += 1;
      aggregate.batches.push({
        index: batch.index,
        expectedCaseCount: batch.size,
        generatedCount: batch.generatedCount ?? null,
        preHealCounts: preCounts,
        healerRequired,
        healerInvoked: Boolean(healing),
        healedCaseIds: healing?.healedCaseIds || healing?.changedCaseIds || [],
        postHealCounts: post ? executionSummary(post) : null,
        finalCounts,
        status: complete ? "complete" : "incomplete",
        artifacts: {
          preHealExecution: fs.existsSync(absolute(prePath)) ? prePath : null,
          healingHandoff: fs.existsSync(absolute(handoffPath)) ? handoffPath : null,
          healingReport: fs.existsSync(absolute(healingPath)) ? healingPath : null,
          postHealExecution: fs.existsSync(absolute(postPath)) ? postPath : null,
        },
      });
      batch.status = complete ? "complete" : "incomplete";
    }

    aggregate.status =
      aggregate.completedBatchCount === 6 ? "Complete" : "Incomplete";
    plan.updatedAt = new Date().toISOString();
    plan.completedBatchCount = aggregate.completedBatchCount;
    writeJson(batchPlanPath, plan);
    writeJson(outputPath, aggregate);
    aggregate.defectFiles =
      aggregate.completedBatchCount === 6
        ? (() => {
            const generated = generateDefectFiles({
              execution: aggregate,
              executionPath: outputPath,
              normalizedDocument: readJson(
                "results/qa-pipeline/normalized/test-cases.json",
                {},
              ),
            });
            aggregate.defectSyncPayload = generated.syncPayloadPath || null;
            aggregate.defectRows = generated.rows || [];
            return generated.files || [];
          })()
        : [];
    writeJson(outputPath, aggregate);
    if (
      aggregate.completedBatchCount === 6 &&
      aggregate.defectFiles.length &&
      process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1"
    ) {
      try {
        const { syncDefectRowsToGoogleSheet } = require("./append-defects-google-sheet.js");
        aggregate.googleSheetSync = await syncDefectRowsToGoogleSheet({
          rowsPath: aggregate.defectSyncPayload,
        });
        writeJson(outputPath, aggregate);
      } catch (syncError) {
        aggregate.googleSheetSync = {
          status: "Blocked",
          reason: syncError.message,
        };
        writeJson(outputPath, aggregate);
        console.warn(
          `Google Sheet defect sync skipped/blocked: ${syncError.message}`,
        );
      }
    } else if (aggregate.completedBatchCount === 6 && aggregate.defectFiles.length) {
      aggregate.googleSheetSync = {
        status: "AwaitingApproval",
        reason:
          "Local defect workbooks ready for review. Sync only after approval (PW_APPROVE_GOOGLE_DEFECT_SYNC=1 or qa:sync-defects-sheet --approved).",
      };
      writeJson(outputPath, aggregate);
      console.log(
        "Google Sheet defect sync deferred until local defect review approval.",
      );
    }
    console.log(
      `Merged ${aggregate.completedBatchCount}/6 batches. Final: ` +
        `Passed ${aggregate.finalSummary.passed || 0} / ` +
        `Failed ${aggregate.finalSummary.failed || 0} / ` +
        `Blocked ${aggregate.finalSummary.blocked || 0}`
    );
    return aggregate;
  } catch (error) {
    console.error(`Batch merge failed: ${error.message}`);
    process.exitCode = 1;
    return null;
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Batch merge failed: ${error.message}`);
    process.exitCode = 1;
  });
}
module.exports = { main };
