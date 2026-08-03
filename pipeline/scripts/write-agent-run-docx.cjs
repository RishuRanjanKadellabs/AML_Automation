#!/usr/bin/env node
/**
 * Write a high-level agent run summary as .docx under docs/agent-runs/<agent>/.
 *
 * Usage (payload JSON):
 *   npm run docs:agent-run -- --agent defect-regression --payload results/qa-pipeline/defect-regression/summary-M1.json
 *
 * Usage (build from artifacts — preferred for other agents):
 *   npm run docs:agent-run -- --agent fsd-figma-pipeline --results-key "Keyword Manager Test"
 *   npm run docs:agent-run -- --agent qa-automation-pipeline --gate results/qa-pipeline/final/pipeline-completion-gate.json
 *   npm run docs:agent-run -- --agent test-planner --plan specs/generated/plan.md
 *   npm run docs:agent-run -- --agent test-generator --results-root "results/qa-pipeline/Keyword Manager Test" --batch 1
 *   npm run docs:agent-run -- --agent test-healer --results-root "results/qa-pipeline/Keyword Manager Test" --batch 1
 *   npm run docs:agent-run -- --agent run-tests --execution results/execution-report.json
 */
const fs = require("fs");
const path = require("path");
const { arg, readJson, relative, writeJson, ROOT } = require("./qa-pipeline-utils.cjs");
const { writeAgentRunReport } = require("./agent-run-docx/formatters/index.cjs");

function recordManifest(agent, payloadPath, docxPath) {
  const manifestPath = path.join(ROOT, "docs", "agent-runs", "latest-manifest.json");
  const manifest = fs.existsSync(manifestPath) ? readJson(manifestPath) : { runs: [] };
  manifest.runs = [
    {
      generatedAt: new Date().toISOString(),
      agent,
      payloadPath: payloadPath ? relative(payloadPath) : null,
      docxPath: relative(docxPath),
    },
    ...(manifest.runs || []),
  ].slice(0, 100);
  writeJson(manifestPath, manifest);
}

async function main() {
  const agent = arg("agent");
  if (!agent) throw new Error("--agent is required");

  const payloadPath = arg("payload");
  const artifactOptions = {
    fromArtifacts: !payloadPath,
    gatePath: arg("gate"),
    resultsRoot: arg("results-root"),
    excelPath: arg("excel"),
    resultsDir: arg("dir"),
    resultsKey: arg("results-key") || arg("resultsKey"),
    manifestPath: arg("manifest"),
    batchIndex: arg("batch"),
    healingReportPath: arg("healing-report"),
    planPath: arg("plan"),
    baseUrl: arg("base-url"),
    executionReportPath: arg("execution"),
    inputType: arg("input-type"),
  };

  let payload = {};
  if (payloadPath) {
    const absPayload = path.isAbsolute(payloadPath) ? payloadPath : path.join(ROOT, payloadPath);
    if (!fs.existsSync(absPayload)) {
      throw new Error(`Payload not found: ${payloadPath}`);
    }
    payload = readJson(absPayload);
  }

  const result = await writeAgentRunReport(agent, payload, artifactOptions);
  recordManifest(agent, payloadPath, result.outputPath);
  console.log(`Agent run docx → ${result.relativePath}`);
  return result;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Agent run docx failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main, writeAgentRunReport };
