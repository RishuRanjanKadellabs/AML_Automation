#!/usr/bin/env node
/**
 * Rebuilds operationEnrichments from on-disk live capture JSON files and refreshes the workbook.
 *
 * Usage:
 *   node pipeline/scripts/api-testcase-apply-capture-evidence.cjs \
 *     --excel pipeline/test-data/NFR/KYC_Screening_API_Test_Cases.xlsx \
 *     --openapi results/api-testcase-pipeline/kyc-screening-service/openapi.json \
 *     --evidence-dir results/api-testcase-pipeline/kyc-screening-service/live-network-evidence
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const {
  buildOperationEnrichments,
  buildRequestOnlyEnrichments,
} = require("./api-testcase-live-capture.cjs");

function parseArgs(argv) {
  const args = {
    excel: "pipeline/test-data/NFR/KYC_Screening_API_Test_Cases.xlsx",
    openapi: "results/api-testcase-pipeline/kyc-screening-service/openapi.json",
    evidenceDir: "results/api-testcase-pipeline/kyc-screening-service/live-network-evidence",
  };
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--excel") args.excel = argv[++i];
    else if (key === "--openapi") args.openapi = argv[++i];
    else if (key === "--evidence-dir") args.evidenceDir = argv[++i];
    else throw new Error(`Unknown argument: ${key}`);
  }
  return args;
}

function loadCaptures(evidenceDir) {
  return fs
    .readdirSync(evidenceDir)
    .filter((name) => name.endsWith(".json") && name !== "manifest.json" && name !== "validation-report.json")
    .map((name) => JSON.parse(fs.readFileSync(path.join(evidenceDir, name), "utf8")));
}

async function main() {
  const args = parseArgs(process.argv);
  const evidenceDir = path.resolve(args.evidenceDir);
  const manifestPath = path.join(evidenceDir, "manifest.json");
  const spec = JSON.parse(fs.readFileSync(path.resolve(args.openapi), "utf8"));
  const captures = loadCaptures(evidenceDir);
  const operationEnrichments = buildOperationEnrichments(captures, spec);
  const requestOnlyEnrichments = buildRequestOnlyEnrichments(captures, spec);

  const manifest = {
    status: "complete_with_partial_live_capture",
    capturedAt: new Date().toISOString(),
    operationCount: 44,
    capturedOperationCount: operationEnrichments.length,
    uncapturedOperationCount: 44 - operationEnrichments.length,
    operationEnrichments,
    requestOnlyEnrichments,
    workbookEnrichments: [],
    capturedOperations: captures.map((c) => ({
      method: c.method,
      path: c.path,
      uiRoute: c.uiRoute,
      status: c.status,
      durationMs: c.durationMs,
    })),
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  execFileSync(
    process.execPath,
    [
      path.resolve("pipeline/scripts/api-testcase-response-columns.cjs"),
      "--excel",
      path.resolve(args.excel),
      "--openapi",
      path.resolve(args.openapi),
      "--live-capture",
      manifestPath,
    ],
    { stdio: "inherit" }
  );

  console.log(
    `Applied ${operationEnrichments.length} live operation enrichments and ${requestOnlyEnrichments.length} live request-only overlay(s) from ${captures.length} capture file(s).`
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`api-testcase-apply-capture-evidence failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { loadCaptures };
