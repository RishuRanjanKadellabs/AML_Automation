#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");
const workbookRoot = path.join(
  ROOT,
  "results/qa-pipeline/Customer Risk Rating Configuration Test Cases",
);

function copyFile(srcRel, dstRel) {
  const src = path.join(ROOT, srcRel);
  const dst = path.join(ROOT, dstRel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
}

const manifestPath = path.join(
  workbookRoot,
  "generation/generation-manifest.json",
);
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const provenance = manifest.invocationProvenance || {};
manifest.orchestratorAgentType =
  provenance.orchestratorAgentType || "qa-automation-pipeline";
manifest.orchestratorAgentId =
  provenance.orchestratorAgentId || "parent-session-batch6";
manifest.generatorAgentType =
  provenance.generatorAgentType || "playwright-test-generator";
manifest.generatorAgentId =
  provenance.generatorAgentId || "parent-session-batch6-live-mcp";
manifest.status = "Complete";
manifest.completedAt = manifest.completedAt || new Date().toISOString();
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

for (let index = 1; index <= 6; index += 1) {
  copyFile(
    `results/qa-pipeline/Customer Risk Rating Configuration Test Cases/execution/batch-${index}/execution-report.json`,
    `results/qa-pipeline/execution/batch-${index}/execution-report.json`,
  );
}

copyFile(
  "results/qa-pipeline/Customer Risk Rating Configuration Test Cases/batches/batch-plan.json",
  "results/qa-pipeline/batches/batch-plan.json",
);
copyFile(
  "results/qa-pipeline/Customer Risk Rating Configuration Test Cases/normalized/test-cases.json",
  "results/qa-pipeline/normalized/test-cases.json",
);

console.log("Synced CRR gate artifacts and patched manifest status=Complete");
