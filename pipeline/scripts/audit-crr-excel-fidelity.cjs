#!/usr/bin/env node
/**
 * CRR batch 1–4 Excel fidelity audit wrapper.
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const RESULTS_ROOT = path.join(
  ROOT,
  "results/qa-pipeline/Customer Risk Rating Configuration Test Cases",
);
const SPEC_PATH = path.join(
  ROOT,
  "tests/milestone2/test-cases/ConfigurationModule/customerRiskRatingConfigurationTests/customer-risk-rating-configuration.spec.ts",
);

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function main() {
  const batchPlan = readJson(path.join(RESULTS_ROOT, "batches/batch-plan.json"));
  const caseIds = [1, 2, 3, 4].flatMap((i) => {
    const batch = batchPlan.batches.find((b) => b.index === i);
    return batch ? batch.caseIds : [];
  });
  const outPath = path.join(RESULTS_ROOT, "final/batch-1-4-excel-fidelity-report.json");
  const script = path.join(__dirname, "audit-excel-fidelity.cjs");
  execFileSync(
    process.execPath,
    [
      script,
      "--normalized",
      path.join(RESULTS_ROOT, "normalized/test-cases.json"),
      "--specs",
      SPEC_PATH,
      "--case-ids",
      caseIds.join(","),
      "--out",
      outPath,
      "--min-steps-pct",
      "100",
      "--min-expected-pct",
      "100",
      "--min-overall-pct",
      "95",
    ],
    { stdio: "inherit", cwd: ROOT },
  );
}

main();
