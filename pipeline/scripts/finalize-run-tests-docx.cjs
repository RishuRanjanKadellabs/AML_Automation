#!/usr/bin/env node
/**
 * Finalize agent run DOCX for unified run-tests executors.
 */
const fs = require("fs");
const path = require("path");
const { arg, writeJson, ROOT } = require("./qa-pipeline-utils.cjs");
const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");

async function main() {
  const headless =
    process.argv.includes("--headless") || arg("headless") === "1" || arg("headless") === "true";
  const agent = headless ? "run-tests-headless" : "run-tests";

  const docx = await writeAgentRunReport(agent, {}, {
    fromArtifacts: true,
    executionReportPath: arg("execution") || "results/execution-report.json",
    inputType: arg("input-type"),
  });

  const manifestPath = path.join(ROOT, "docs", "agent-runs", "latest-manifest.json");
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : { runs: [] };
  manifest.runs = [
    {
      generatedAt: new Date().toISOString(),
      agent,
      docxPath: docx.relativePath,
    },
    ...(manifest.runs || []),
  ].slice(0, 100);
  writeJson(manifestPath, manifest);

  console.log(`Agent run docx → ${docx.relativePath}`);
  return docx;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Run-tests docx failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { main };
