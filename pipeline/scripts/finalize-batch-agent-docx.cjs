#!/usr/bin/env node
/**
 * Finalize agent run DOCX for batch-scoped MCP agents (generator / healer).
 */
const fs = require("fs");
const path = require("path");
const { arg, relative, writeJson, ROOT } = require("./qa-pipeline-utils.cjs");
const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");

async function main() {
  const kind = arg("kind") || process.argv[2];
  if (!kind || !["generator", "healer"].includes(kind)) {
    throw new Error(
      "Usage: npm run docs:agent-run:generator -- --results-root <path> --batch <N>",
    );
  }
  const agent = kind === "generator" ? "test-generator" : "test-healer";
  const resultsRoot = arg("results-root");
  const batchIndex = arg("batch");
  if (!resultsRoot) throw new Error("--results-root is required");

  const docx = await writeAgentRunReport(agent, {}, {
    fromArtifacts: true,
    resultsRoot,
    batchIndex,
    healingReportPath: arg("healing-report"),
  });

  const manifestPath = path.join(ROOT, "docs", "agent-runs", "latest-manifest.json");
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : { runs: [] };
  manifest.runs = [
    {
      generatedAt: new Date().toISOString(),
      agent,
      payloadPath: null,
      docxPath: docx.relativePath,
      resultsRoot,
      batch: batchIndex || null,
    },
    ...(manifest.runs || []),
  ].slice(0, 100);
  writeJson(manifestPath, manifest);

  console.log(`Agent run docx → ${docx.relativePath}`);
  return docx;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Batch agent docx failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { main };
